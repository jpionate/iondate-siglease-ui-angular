import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CMFMENU business logic
import {
    TER,
    BGEN1,
    CMTGRUCOM,
    BDETCLIE,
    BGEN2,
    CMTPARAM,
    BPARAMAGE,
    BPARASEGXTER,
    BDETCTOSRENOCDT,
    BBOTONES,
    BBOTON_REA,
    SETCOMCIA_NEW,
    REF_PARAM,
    SETTERXCOM,
    BTIPCON,
    CMTDESORI,
    COVPIEDRA,
    CMTPERROL,
    PARAMETROS,
    BDETSEGPRX,
    CMTDOMINIOS,
    DETALLE_REF,
    SETCOMCIACAP,
    BNOCLIE,
    BESPE,
    BCALIFICACION,
    BESPEREF,
    BCONTROL,
    BCLIXCOMER,
    CMTTELEMER,
    TBEN,
    DIRECCIONES,
    CMTSGINDI,
    BDETCTOS,
    BDETCLIXCOMER,
    CMTTIPNGXCOM,
    BESPECIFICA,
    BESPECTO,
    CONTROL,
    SEGPRXCONTAC,
    BESPECLIE,
    SETTERSEC_NEW,
    TBEN3,
    TBEN2,
    BPERIO,
    BDETGEN1,
    PLANO_INDICADORES,
    DIRECCIONESINTRO,
    BPARAHISTO,
    PLANO,
    BBOLSA,
    BDETCLIVENCER,
    CMTSEGXTER,
    SOL_EC,
    CRTSOLESTOBS,
    BHISTO,
    SETCOMCIACAP_NEW,
    BPERIOINDICA,
    CMTMNSJS,
    SEGRESUM,
    BNIVELINDICA,
    VLTOPCIO,
    CMTREFER,
    BTER,
    SETCOMCIA,
    SETTERSEC,
    BNIVEL,
    PARAGESTION,
    SETTERXCOM_NEW,
    CMTCOMPLEAS,
    BNOCTOS,
    RESUMEN,
    AGENDA,
    ZOOM
} from "./CMFMENU_models";



// class CMFMENU
@Component({
    selector: 'app-cmfmenu',
    templateUrl: './cmfmenu.component.html',
})
export class CmfmenuComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map();
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TER: TER = new TER();
    public BGEN1: BGEN1 = new BGEN1();
    public CMTGRUCOM: CMTGRUCOM = new CMTGRUCOM();
    public BDETCLIE: BDETCLIE = new BDETCLIE();
    public BGEN2: BGEN2 = new BGEN2();
    public CMTPARAM: CMTPARAM = new CMTPARAM();
    public BPARAMAGE: BPARAMAGE = new BPARAMAGE();
    public BPARASEGXTER: BPARASEGXTER = new BPARASEGXTER();
    public BDETCTOSRENOCDT: BDETCTOSRENOCDT = new BDETCTOSRENOCDT();
    public BBOTONES: BBOTONES = new BBOTONES();
    public BBOTON_REA: BBOTON_REA = new BBOTON_REA();
    public SETCOMCIA_NEW: SETCOMCIA_NEW = new SETCOMCIA_NEW();
    public REF_PARAM: REF_PARAM = new REF_PARAM();
    public SETTERXCOM: SETTERXCOM = new SETTERXCOM();
    public BTIPCON: BTIPCON = new BTIPCON();
    public CMTDESORI: CMTDESORI = new CMTDESORI();
    public COVPIEDRA: COVPIEDRA = new COVPIEDRA();
    public CMTPERROL: CMTPERROL = new CMTPERROL();
    public PARAMETROS: PARAMETROS = new PARAMETROS();
    public BDETSEGPRX: BDETSEGPRX = new BDETSEGPRX();
    public CMTDOMINIOS: CMTDOMINIOS = new CMTDOMINIOS();
    public DETALLE_REF: DETALLE_REF = new DETALLE_REF();
    public SETCOMCIACAP: SETCOMCIACAP = new SETCOMCIACAP();
    public BNOCLIE: BNOCLIE = new BNOCLIE();
    public BESPE: BESPE = new BESPE();
    public BCALIFICACION: BCALIFICACION = new BCALIFICACION();
    public BESPEREF: BESPEREF = new BESPEREF();
    public BCONTROL: BCONTROL = new BCONTROL();
    public BCLIXCOMER: BCLIXCOMER = new BCLIXCOMER();
    public CMTTELEMER: CMTTELEMER = new CMTTELEMER();
    public TBEN: TBEN = new TBEN();
    public DIRECCIONES: DIRECCIONES = new DIRECCIONES();
    public CMTSGINDI: CMTSGINDI = new CMTSGINDI();
    public BDETCTOS: BDETCTOS = new BDETCTOS();
    public BDETCLIXCOMER: BDETCLIXCOMER = new BDETCLIXCOMER();
    public CMTTIPNGXCOM: CMTTIPNGXCOM = new CMTTIPNGXCOM();
    public BESPECIFICA: BESPECIFICA = new BESPECIFICA();
    public BESPECTO: BESPECTO = new BESPECTO();
    public CONTROL: CONTROL = new CONTROL();
    public SEGPRXCONTAC: SEGPRXCONTAC = new SEGPRXCONTAC();
    public BESPECLIE: BESPECLIE = new BESPECLIE();
    public SETTERSEC_NEW: SETTERSEC_NEW = new SETTERSEC_NEW();
    public TBEN3: TBEN3 = new TBEN3();
    public TBEN2: TBEN2 = new TBEN2();
    public BPERIO: BPERIO = new BPERIO();
    public BDETGEN1: BDETGEN1 = new BDETGEN1();
    public PLANO_INDICADORES: PLANO_INDICADORES = new PLANO_INDICADORES();
    public DIRECCIONESINTRO: DIRECCIONESINTRO = new DIRECCIONESINTRO();
    public BPARAHISTO: BPARAHISTO = new BPARAHISTO();
    public PLANO: PLANO = new PLANO();
    public BBOLSA: BBOLSA = new BBOLSA();
    public BDETCLIVENCER: BDETCLIVENCER = new BDETCLIVENCER();
    public CMTSEGXTER: CMTSEGXTER = new CMTSEGXTER();
    public SOL_EC: SOL_EC = new SOL_EC();
    public CRTSOLESTOBS: CRTSOLESTOBS = new CRTSOLESTOBS();
    public BHISTO: BHISTO = new BHISTO();
    public SETCOMCIACAP_NEW: SETCOMCIACAP_NEW = new SETCOMCIACAP_NEW();
    public BPERIOINDICA: BPERIOINDICA = new BPERIOINDICA();
    public CMTMNSJS: CMTMNSJS = new CMTMNSJS();
    public SEGRESUM: SEGRESUM = new SEGRESUM();
    public BNIVELINDICA: BNIVELINDICA = new BNIVELINDICA();
    public VLTOPCIO: VLTOPCIO = new VLTOPCIO();
    public CMTREFER: CMTREFER = new CMTREFER();
    public BTER: BTER = new BTER();
    public SETCOMCIA: SETCOMCIA = new SETCOMCIA();
    public SETTERSEC: SETTERSEC = new SETTERSEC();
    public BNIVEL: BNIVEL = new BNIVEL();
    public PARAGESTION: PARAGESTION = new PARAGESTION();
    public SETTERXCOM_NEW: SETTERXCOM_NEW = new SETTERXCOM_NEW();
    public CMTCOMPLEAS: CMTCOMPLEAS = new CMTCOMPLEAS();
    public BNOCTOS: BNOCTOS = new BNOCTOS();
    public RESUMEN: RESUMEN = new RESUMEN();
    public AGENDA: AGENDA = new AGENDA();
    public ZOOM: ZOOM = new ZOOM();


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
    async CMFMENU_onClearDetails() {
        console.log("Entering CMFMENU_onClearDetails");
        // CMFMENU_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CMFMENU_onClearDetails");
    }

    //#region PLSQL
    // DECLARE
    //    TP_NOM   VARCHAR2(30);
    //    TP_ID   TAB_PAGE;
    //    --TP_LB   VARCHAR2(30);
    //        
    // BEGIN
    //  
    //  TP_NOM := GET_CANVAS_PROPERTY('PAG3', TOPMOST_TAB_PAGE);
    //  TP_ID := FIND_TAB_PAGE(TP_NOM);
    // -- TP_LB := GET_TAB_PAGE_PROPERTY(TP_ID, LABEL);
    //  
    //    IF TP_NOM = 'TAB_INFODET' THEN
    //      --OCULTAR CANVAS STAKED
    //      SET_ITEM_PROPERTY ('BTN_BUSCAREF',ICON_NAME,'BINOCULAR01');
    //     SET_ITEM_PROPERTY ('BTN_BUSCAREF',TOOLTIP_TEXT,'BUSCAR'); 
    //     SET_ITEM_PROPERTY ('BTN_SOLI',VISIBLE, "PROPERTY_FALSE");
//    //     SYNCHRONIZE;
    //     GO_ITEM('BTER.NIT');
    //      HIDE_VIEW ('DET_REFER');
    //      PUP_OCULTADET;
    //      --SET_TAB_PAGE_PROPERTY(TP_ID, LABEL, 'SALARY');
    //    ELSIF TP_NOM = 'TAB_REFERIDOS' THEN
    //      HIDE_VIEW ('DAT_REFIERE');
    //      GO_ITEM('REF_PARAM.TXT_ID');
    // 
    //    END IF;
    //    
    //    --PY 13924
    //    
    //    IF this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") = 'PAG_SEGUI' THEN
    //     GO_BLOCK('BESPE');   
    //    END IF;
    //    
    //    IF this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") = 'PAG_CTOS' THEN
    //     GO_BLOCK('BESPECTO');   
    //    END IF;
    //     
    //     IF this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") = 'PAG_CLIEN' THEN
    //     GO_BLOCK('BESPECLIE');   
    //     END IF;
    //     
    //      IF this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") = 'PAG_REFER' THEN
    //     GO_BLOCK('BESPEREF');   
    //     END IF;
    //     
    //    
    //    --PY 13924
    //    
    //    
    //    
    //    
    // END;
    //#endregion
    async CMFMENU_whenTabPageChanged() {
        console.log("Entering CMFMENU_whenTabPageChanged");
        let TP_NOM: string = null;
        let TP_ID: null = null;
        // TP_NOM = this.oracleFormsBuiltins.get_canvas_property("PAG3", TOPMOST_TAB_PAGE);
        // TP_ID = this.oracleFormsBuiltins.find_tab_page(TP_NOM);
        if (TP_NOM == "TAB_INFODET") {
            this.oracleFormsBuiltins.set_item_property("BTN_BUSCAREF", "ICON_NAME", "BINOCULAR01");
            this.oracleFormsBuiltins.set_item_property("BTN_BUSCAREF", "TOOLTIP_TEXT", "BUSCAR");
            this.oracleFormsBuiltins.set_item_property("BTN_SOLI", "VISIBLE", "PROPERTY_FALSE");
//            this.oracleFormsBuiltins.synchronize();
            this.oracleFormsBuiltins.go_item("BTER.NIT");
            this.oracleFormsBuiltins.hide_view("DET_REFER");
            // CMFMENU_PUP_OCULTADET();
        }
        else if (TP_NOM == "TAB_REFERIDOS") {
            this.oracleFormsBuiltins.hide_view("DAT_REFIERE");
            this.oracleFormsBuiltins.go_item("REF_PARAM.TXT_ID");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "PAG_SEGUI") {
            this.oracleFormsBuiltins.go_block("BESPE");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "PAG_CTOS") {
            this.oracleFormsBuiltins.go_block("BESPECTO");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "PAG_CLIEN") {
            this.oracleFormsBuiltins.go_block("BESPECLIE");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "PAG_REFER") {
            this.oracleFormsBuiltins.go_block("BESPEREF");
        }
        console.log("Exiting CMFMENU_whenTabPageChanged");
    }

    //#region PLSQL
    // BEGIN PVALTER(:BTER.NIT);
    // PVALTER(:CMTMNSJS.MENS_NUMIDEN); -- TERRES
    // PVALTER(:CMTTELEMER.MENS_NUMIDEN); -- TERRES   5627; END;
    //#endregion
    async CMFMENU_postUpdate() {
        console.log("Entering CMFMENU_postUpdate");
        console.log("Exiting CMFMENU_postUpdate");
    }

    //#region PLSQL
    // BEGIN CLEAR_BLOCK(NO_VALIDATE); END;
    //#endregion
    async CMFMENU_keyClrblk() {
        console.log("Entering CMFMENU_keyClrblk");
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        console.log("Exiting CMFMENU_keyClrblk");
    }

    //#region PLSQL
    // BEGIN :RG_FECHAS := 'R' ;
    // 
    // --+PY22058. JDG
    // DECLARE
    //  
    //  V_USU_CODUNI  SGUSUARIOS.USU_CODUNI%TYPE;
    //  T_RESPUESTA   NUMBER;  
    //  
    // BEGIN 
    //   
    //  BEGIN
    //    
    //    SELECT USU_CODUNI
    //     INTO V_USU_CODUNI
    //     FROM SGUSUARIOS 
    //    WHERE USU_CODIGO = PLSQLBuiltins.user();
    //    
    //  EXCEPTION 
    //   
    //   WHEN OTHERS THEN 
    //   
    //     V_USU_CODUNI := 'X';
    //     
    //  END;
    //  
    //  IF V_USU_CODUNI = '005' THEN
    //   
    //   LIB$ALERTA( 'MENSAJE', 'SU USUARIO NO TIENE PRIVILEGIOS DE ACCESO. FORMA DE GESTIÓN COMERCIAL EXCLUSIVA DE LA UNIDAD DE LEASING.', 'ACEPTAR', NULL, NULL, T_RESPUESTA);
    //   EXIT_FORM;
    //   
    //  END IF;  
    //    
    //  
    // END; 
    // --+; END;
    //#endregion
    async CMFMENU_whenNewFormInstance() {
        console.log("Entering CMFMENU_whenNewFormInstance");
        // this.RG_FECHAS = "R";
        {

            let V_USU_CODUNI: null = null;
            let T_RESPUESTA: number = null;
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // call REST API
                const result1 = await Rest.post("/cmfmenu/cmfmenu_whennewforminstance_query1", payload1);
                // get values from result
                V_USU_CODUNI = result1[0].get("V_USU_CODUNI");
            } catch (ex) {

                // V_USU_CODUNI = "X";
            }

            if (V_USU_CODUNI == "005") {
                // CMFMENU_LIB$ALERTA("MENSAJE", "SU USUARIO NO TIENE PRIVILEGIOS DE ACCESO. FORMA DE GESTIÓN COMERCIAL EXCLUSIVA DE LA UNIDAD DE LEASING.", "ACEPTAR", null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.exit_form();
            }
        }

        console.log("Exiting CMFMENU_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN IF GET_ITEM_PROPERTY('SEG_TIPORIG',ENABLED) = 'TRUE' 
    //  --PY15029. SE AGREGA VALIDACIÓN PARA NO PERMITIR LA CREACIÓN DE UN TERCERO SI SE ENCUENTRA QUE ESTE YA TIENE ASIGNADO UN COMERCIAL.
    //  AND (:BTER.COMER IS NOT NULL OR :BTER.COMERSEC IS NOT NULL) THEN -- KARO
    //  PUP_INSREF;
    // END IF;
    // 
    // COMMIT; END;
    //#endregion
    async CMFMENU_keyCommit() {
        console.log("Entering CMFMENU_keyCommit");
        if ((this.oracleFormsBuiltins.get_item_property("SEG_TIPORIG", "ENABLED") == "TRUE" && ((this.BTER.COMER != null) || (this.BTER.COMERSEC != null)))) {
            // CMFMENU_PUP_INSREF();
        }
        console.log("Exiting CMFMENU_keyCommit");
    }

    //#region PLSQL
    // BEGIN --PY 17089
    // IF :CMTSEGXTER.SEG_ESTSEG = 'GR' THEN 
    //   IF :BTER.NIT = '860034313' AND :CMTSEGXTER.SEG_OFIDAV IS NULL  THEN 
    //    LIB$DTNERFRMA('ERROR. EL PROVEEDOR ES DAVIVIENDA POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.');
    //     ELSIF :BTER.NIT <> '860034313' AND :CMTSEGXTER.SEG_OFIDAV IS NOT NULL  THEN
    //     :CMTSEGXTER.SEG_OFIDAV := NULL;
    //     ELSE
    //      COMMIT_FORM;
    //    END IF;
    // END IF;
    // 
    // EXIT_FORM(NO_VALIDATE);
    // --PY 17089; END;
    //#endregion
    async CMFMENU_keyExit() {
        console.log("Entering CMFMENU_keyExit");
        if (this.CMTSEGXTER.SEG_ESTSEG == "GR") {
            if ((this.BTER.NIT == "860034313" && (this.CMTSEGXTER.SEG_OFIDAV == null))) {
                // CMFMENU_LIB$DTNERFRMA("ERROR. EL PROVEEDOR ES DAVIVIENDA POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.");
            }
            else if ((this.BTER.NIT != "860034313" && (this.CMTSEGXTER.SEG_OFIDAV != null))) {
                this.CMTSEGXTER.SEG_OFIDAV = null;
            }
            else {
                this.oracleFormsBuiltins.commit_form();
            }
        }
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting CMFMENU_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //  HIDE_VIEW('TRAE_TER');
    // 
    //  IF :TXT_BLOQUE = 'BTER' THEN
    //   :BTER.SEG_NQREF := :TERCOD;
    //  
    //   GO_ITEM('SEG_NQREF');
    //  
    //  ELSIF :TXT_BLOQUE = 'REF_PARAM' THEN
    //   :REF_PARAM.TXT_ID := :TERCOD;
    //   
    //   GO_ITEM('TXT_ID');  
    //  
    //  ELSIF :TXT_BLOQUE = 'BTER1' THEN
    //   GO_ITEM('BTER.NIT');
    //   --ENTER_QUERY;  
    //   :BTER.NIT := :TERCOD;
    //   PUP_VALNIT;
    //   --EXECUTE_QUERY;
    // 
    //  
    //  END IF;
    //  
    //   ----6754 - 7384
    //  HIDE_VIEW('DAT_OFI');
    //  ----6754 - 7384
    //  
    // END;
    //#endregion
    async CMFMENU_ter_btnSelter_whenButtonPressed() {
        console.log("Entering CMFMENU_ter_btnSelter_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("TRAE_TER");
        // if (TXT_BLOQUE == "BTER") {
        //     this.BTER.SEG_NQREF = this.TER.TERCOD;
        //     this.oracleFormsBuiltins.go_item("SEG_NQREF");
        // }
        // else if (TXT_BLOQUE == "REF_PARAM") {
        //     this.REF_PARAM.TXT_ID = this.TER.TERCOD;
        //     this.oracleFormsBuiltins.go_item("TXT_ID");
        // }
        // else if (TXT_BLOQUE == "BTER1") {
        //     this.oracleFormsBuiltins.go_item("BTER.NIT");
        //     this.BTER.NIT = this.TER.TERCOD;
        //     // CMFMENU_PUP_VALNIT();
        // }
        this.oracleFormsBuiltins.hide_view("DAT_OFI");
        console.log("Exiting CMFMENU_ter_btnSelter_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  HIDE_VIEW('TRAE_TER');
    //  IF :TXT_BLOQUE = 'BTER' THEN
    //   GO_ITEM('SEG_NQREF');
    //  ELSIF :TXT_BLOQUE = 'REF_PARAM' THEN
    //   GO_ITEM('TXT_ID'); 
    //  ELSIF :TXT_BLOQUE = 'BTER1' THEN
    //   GO_ITEM('NIT');
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_ter_btnCierra_whenButtonPressed() {
        console.log("Entering CMFMENU_ter_btnCierra_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("TRAE_TER");
        // if (TXT_BLOQUE == "BTER") {
        //     this.oracleFormsBuiltins.go_item("SEG_NQREF");
        // }
        // else if (TXT_BLOQUE == "REF_PARAM") {
        //     this.oracleFormsBuiltins.go_item("TXT_ID");
        // }
        // else if (TXT_BLOQUE == "BTER1") {
        //     this.oracleFormsBuiltins.go_item("NIT");
        // }
        console.log("Exiting CMFMENU_ter_btnCierra_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_bgen1_postTextItem() {
        console.log("Entering CMFMENU_bgen1_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_bgen1_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bgen1_whenNewItemInstance() {
        console.log("Entering CMFMENU_bgen1_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bgen1_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_PERFILES;
    // BEGIN
    // PQBD_COL_ADMVEN.PCPERFILES(BK_DATA, :BESPECIFICA.V_PERFIL, :BESPECIFICA.V_COMPRO, :this.PARAMETER.get("PFECINI"), :this.PARAMETER.get("PFECFIN"), :BESPECIFICA.V_CTIEMPO, :BESPECIFICA.V_CTIEMPOVEN, :BESPECIFICA.V_CNOREV, :BESPECIFICA.V_CSIRENOV, :this.PARAMETER.get("PGRUCOM"), :this.PARAMETER.get("PCIUDAD"), :this.PARAMETER.get("PUSUARI"), :BESPECIFICA.V_CODSEC, :this.PARAMETER.get("PUNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BGEN1');
    // END;
    //#endregion
    async CMFMENU_bgen1_queryProcedure() {
        console.log("Entering CMFMENU_bgen1_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PCPERFILES(BK_DATA, BESPECIFICA.V_PERFIL, BESPECIFICA.V_COMPRO, this.PARAMETER.get("PFECINI"), this.PARAMETER.get("PFECFIN"), BESPECIFICA.V_CTIEMPO, BESPECIFICA.V_CTIEMPOVEN, BESPECIFICA.V_CNOREV, BESPECIFICA.V_CSIRENOV, this.PARAMETER.get("PGRUCOM"), this.PARAMETER.get("PCIUDAD"), this.PARAMETER.get("PUSUARI"), BESPECIFICA.V_CODSEC, this.PARAMETER.get("PUNIDAD"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BGEN1");
        console.log("Exiting CMFMENU_bgen1_queryProcedure");
    }

    //#region PLSQL
    // BEGIN IF :TOTLLAMA IS NOT NULL THEN 
    //      :V_GESTION := '001';-- LLAMADA
    //      :V_TIPOPERF := :BGEN1.TIPOPERFIL;
    //  END IF;
    // GO_BLOCK('BDETGEN1');
    // EXECUTE_QUERY; END;
    //#endregion
    async CMFMENU_bgen1_totllama_whenMouseDoubleclick() {
        console.log("Entering CMFMENU_bgen1_totllama_whenMouseDoubleclick");
        // if ((TOTLLAMA != null)) {
        //     this.BGEN1.V_GESTION = "001";
        //     this.BGEN1.V_TIPOPERF = this.BGEN1.TIPOPERFIL;
        // }
        this.oracleFormsBuiltins.go_block("BDETGEN1");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CMFMENU_bgen1_totllama_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN IF :TOTVISITA IS NOT NULL THEN 
    //    :V_GESTION   := '002';-- VISITAS
    //    :V_TIPOPERF := :BGEN1.TIPOPERFIL;
    //  END IF;
    // GO_BLOCK('BDETGEN1');
    // EXECUTE_QUERY; END;
    //#endregion
    async CMFMENU_bgen1_totvisita_whenMouseDoubleclick() {
        console.log("Entering CMFMENU_bgen1_totvisita_whenMouseDoubleclick");
        // if ((TOTVISITA != null)) {
        //     this.BGEN1.V_GESTION = "002";
        //     this.BGEN1.V_TIPOPERF = this.BGEN1.TIPOPERFIL;
        // }
        this.oracleFormsBuiltins.go_block("BDETGEN1");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CMFMENU_bgen1_totvisita_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN IF :V_TTVISI IS NOT NULL THEN 
    //    :V_GESTION   := '002';-- VISITAS
    //    :V_TIPOPERF := '0';
    //  END IF;
    // GO_BLOCK('BDETGEN1');
    // EXECUTE_QUERY; END;
    //#endregion
    async CMFMENU_bgen1_vTtvisi_whenMouseDoubleclick() {
        console.log("Entering CMFMENU_bgen1_vTtvisi_whenMouseDoubleclick");
        // if ((V_TTVISI != null)) {
        //     this.BGEN1.V_GESTION = "002";
        //     this.BGEN1.V_TIPOPERF = "0";
        // }
        this.oracleFormsBuiltins.go_block("BDETGEN1");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CMFMENU_bgen1_vTtvisi_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN IF :V_TTLLAMA IS NOT NULL THEN 
    //    :V_GESTION   := '001';-- VISITAS
    //    :V_TIPOPERF := '0';
    //  END IF;
    // GO_BLOCK('BDETGEN1');
    // EXECUTE_QUERY; END;
    //#endregion
    async CMFMENU_bgen1_vTtllama_whenMouseDoubleclick() {
        console.log("Entering CMFMENU_bgen1_vTtllama_whenMouseDoubleclick");
        // if ((V_TTLLAMA != null)) {
        //     this.BGEN1.V_GESTION = "001";
        //     this.BGEN1.V_TIPOPERF = "0";
        // }
        this.oracleFormsBuiltins.go_block("BDETGEN1");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CMFMENU_bgen1_vTtllama_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN --IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN
    // IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP','TS','AP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN --PY 7818
    //   :this.PARAMETER.get("PCODCOMER") := NULL;
    // END IF; END;
    //#endregion
    async CMFMENU_bdetclie_preQuery() {
        console.log("Entering CMFMENU_bdetclie_preQuery");
        if ((["GF", "GC", "GI", "JM", "AM", "SR", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1 && (this.PARAMETER.get("PCODCOMER") != null))) {
            this.PARAMETER.set("PCODCOMER", null);
        }
        console.log("Exiting CMFMENU_bdetclie_preQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_DETCLIE;
    // BEGIN
    // PQBD_COL_ADMVEN.PDETCLIE(BK_DATA, :V_CLIENNOREV, :this.PARAMETER.get("PCODCOMER"), :this.PARAMETER.get("PPLAZU"), :this.PARAMETER.get("PUNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BDETCLIE');
    // END;
    //#endregion
    async CMFMENU_bdetclie_queryProcedure() {
        console.log("Entering CMFMENU_bdetclie_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PDETCLIE(BK_DATA, V_CLIENNOREV, this.PARAMETER.get("PCODCOMER"), this.PARAMETER.get("PPLAZU"), this.PARAMETER.get("PUNIDAD"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BDETCLIE");
        console.log("Exiting CMFMENU_bdetclie_queryProcedure");
    }

    //#region PLSQL
    // BEGIN PU_CREA_ACTIVOS_LIST (:BDETCLIE.CONTRATO, :BDETCLIE.TIPOCTO, :BDETCLIE.OFICINA); END;
    //#endregion
    async CMFMENU_bdetclie_postQuery() {
        console.log("Entering CMFMENU_bdetclie_postQuery");
        // CMFMENU_PU_CREA_ACTIVOS_LIST(BDETCLIE.CONTRATO, BDETCLIE.TIPOCTO, BDETCLIE.OFICINA);
        console.log("Exiting CMFMENU_bdetclie_postQuery");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_bgen2_postTextItem() {
        console.log("Entering CMFMENU_bgen2_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_bgen2_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bgen2_whenNewItemInstance() {
        console.log("Entering CMFMENU_bgen2_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bgen2_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_PERFILNV2;
    // BEGIN
    // PQBD_COL_ADMVEN.PCPERFILESNV2(BK_DATA, :BESPECIFICA.V_PERFIL, :this.PARAMETER.get("PFECINI"), :this.PARAMETER.get("PFECFIN"), :this.PARAMETER.get("PGRUCOM"), :this.PARAMETER.get("PCIUDAD"), :this.PARAMETER.get("PUSUARI"), :BESPECIFICA.V_TIPORIG, :BESPECIFICA.V_QUIENREF, :BESPECIFICA.V_TERCERO, :BESPECIFICA.V_TIPIDEN, :this.PARAMETER.get("PUNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BGEN2');
    // END;
    //#endregion
    async CMFMENU_bgen2_queryProcedure() {
        console.log("Entering CMFMENU_bgen2_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PCPERFILESNV2(BK_DATA, BESPECIFICA.V_PERFIL, this.PARAMETER.get("PFECINI"), this.PARAMETER.get("PFECFIN"), this.PARAMETER.get("PGRUCOM"), this.PARAMETER.get("PCIUDAD"), this.PARAMETER.get("PUSUARI"), BESPECIFICA.V_TIPORIG, BESPECIFICA.V_QUIENREF, BESPECIFICA.V_TERCERO, BESPECIFICA.V_TIPIDEN, this.PARAMETER.get("PUNIDAD"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BGEN2");
        console.log("Exiting CMFMENU_bgen2_queryProcedure");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_cmtparam_postTextItem() {
        console.log("Entering CMFMENU_cmtparam_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_cmtparam_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_cmtparam_whenNewItemInstance() {
        console.log("Entering CMFMENU_cmtparam_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_cmtparam_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN IF :V_VERSECT = 'S' THEN
    //  CALL_FORM('SEFAGRUS', "HIDE", "NO_REPLACE", "NO_QUERY_ONLY");
    //  :V_VERSECT := 'N';
    // END IF; END;
    //#endregion
    async CMFMENU_cmtparam_vVersect_whenCheckboxChanged() {
        console.log("Entering CMFMENU_cmtparam_vVersect_whenCheckboxChanged");
        // if (V_VERSECT == "S") {
        //     this.oracleFormsBuiltins.call_form("SEFAGRUS", "HIDE", "NO_REPLACE", "NO_QUERY_ONLY");
        //     this.CMTPARAM.V_VERSECT = "N";
        // }
        console.log("Exiting CMFMENU_cmtparam_vVersect_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_bparamage_postTextItem() {
        console.log("Entering CMFMENU_bparamage_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_bparamage_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bparamage_whenNewItemInstance() {
        console.log("Entering CMFMENU_bparamage_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bparamage_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF  :V_TIPOCAN = 'CA' AND :V_CODMOT = '001' THEN --CANCELACION X GESTION REALIZADA
    //   SET_ITEM_PROPERTY('VBTON_CREAREG',"DISPLAYED", "PROPERTY_TRUE");
    //   SET_ITEM_PROPERTY('VBTON_CREAREG',ENABLED, "PROPERTY_TRUE");
    //   IF FRM$ALERTA_SINO ('DESEA CREAR UN NUEVO COMPROMISO AL CLIENTE '||:AGENDA.NOMBRE||' '||'?') = 1 THEN 
    //     --
    //    SET_ITEM_PROPERTY('V_FECPROXSEG',"DISPLAYED", "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('V_FECPROXSEG',ENABLED, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('V_FECPROXSEG',NAVIGABLE, "PROPERTY_TRUE");
    //    
    //    --
    //    SET_ITEM_PROPERTY('V_HORAPROXSEG',"DISPLAYED", "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('V_HORAPROXSEG',ENABLED, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('V_HORAPROXSEG',NAVIGABLE, "PROPERTY_TRUE");
    //    
    //    --
    //    SET_ITEM_PROPERTY('V_TIPCOMPRPROXSEG',"DISPLAYED", "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('V_TIPCOMPRPROXSEG',ENABLED, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('V_TIPCOMPRPROXSEG',NAVIGABLE, "PROPERTY_TRUE");
    //      --
    //      GO_ITEM ('V_CODMOT');
    //   END IF;
    // ELSIF :V_TIPOCAN = 'AP' AND :V_CODMOT = '001' THEN
    //   SET_ITEM_PROPERTY('VBTON_CREAREG',"DISPLAYED", "PROPERTY_TRUE");
    //   SET_ITEM_PROPERTY('VBTON_CREAREG',ENABLED, "PROPERTY_TRUE");
    // ELSIF :V_TIPOCAN = 'CA' AND :V_CODMOT = '002' THEN --CANCELACION X GESTION DEFINITIVA--DEBE CAMBIAR EL PERFIL2 DEL TERCERO 
    //   SET_ITEM_PROPERTY('VBTON_CREAREG',"DISPLAYED", "PROPERTY_TRUE");
    //   SET_ITEM_PROPERTY('VBTON_CREAREG',ENABLED, "PROPERTY_TRUE");
    // ELSE
    //  SET_ITEM_PROPERTY('VBTON_CREAREG',"DISPLAYED", "PROPERTY_TRUE");
    //   SET_ITEM_PROPERTY('VBTON_CREAREG',ENABLED, "PROPERTY_TRUE");
    // END IF;
    // END;
    //#endregion
    async CMFMENU_bparamage_vCodmot_whenListChanged() {
        console.log("Entering CMFMENU_bparamage_vCodmot_whenListChanged");
        let T_RESPUESTA: number = null;
        // if ((V_TIPOCAN == "CA" && V_CODMOT == "001")) {
        //     this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "DISPLAYED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "ENABLED", "PROPERTY_TRUE");
        //     if (FRM$ALERTA_SINO("DESEA CREAR UN NUEVO COMPROMISO AL CLIENTE " + AGENDA.NOMBRE + " " + "?") == 1) {
        //         this.oracleFormsBuiltins.set_item_property("V_FECPROXSEG", "DISPLAYED", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.set_item_property("V_FECPROXSEG", "ENABLED", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.set_item_property("V_FECPROXSEG", "NAVIGABLE", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.set_item_property("V_HORAPROXSEG", "DISPLAYED", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.set_item_property("V_HORAPROXSEG", "ENABLED", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.set_item_property("V_HORAPROXSEG", "NAVIGABLE", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.set_item_property("V_TIPCOMPRPROXSEG", "DISPLAYED", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.set_item_property("V_TIPCOMPRPROXSEG", "ENABLED", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.set_item_property("V_TIPCOMPRPROXSEG", "NAVIGABLE", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.go_item("V_CODMOT");
        //     }
        // }
        // else if ((V_TIPOCAN == "AP" && V_CODMOT == "001")) {
        //     this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "DISPLAYED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "ENABLED", "PROPERTY_TRUE");
        // }
        // else if ((V_TIPOCAN == "CA" && V_CODMOT == "002")) {
        //     this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "DISPLAYED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "ENABLED", "PROPERTY_TRUE");
        // }
        // else {
        //     this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "DISPLAYED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "ENABLED", "PROPERTY_TRUE");
        // }
        console.log("Exiting CMFMENU_bparamage_vCodmot_whenListChanged");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //  V_CORREO   SETCOMCIA.COM_MAIL%TYPE;
    // BEGIN  
    // IF :V_OBSERMOT IS NULL THEN
    //  LIB$DTNERFRMA ('DEBE INGRESAR OBSERVACIONES DEL MOTIVO DE CANCELACIÓN/APLAZAMIENTO.');
    // ELSE  
    // IF :BPARAMAGE.V_CODMOT = '001' AND :AGENDA.INVITA = 'S' THEN
    // 
    //  UPDATE CMTSEGXTER
    //         SET SEG_ESTSEG = :V_TIPOCAN
    //            ,SEG_CODMOT = :BPARAMAGE.V_CODMOT
    //            ,SEG_OBSMOT = :BPARAMAGE.V_OBSERMOT
    //            ,SEG_FECUPD = SYSDATE
    //       WHERE SEG_NITTER = :AGENDA.NITTER
    //         AND TRUNC(SEG_FECSEG) = TO_CHAR(:AGENDA.FECHA,'YYYY-MM-DD')
    //         AND TO_CHAR(SEG_HORSEG,'HH12:MI PM') = :AGENDA.HORA
    //         AND TRUNC(SEG_FECGES) = TO_CHAR(:AGENDA.FECHAGEST,'YYYY-MM-DD');
    //  COMMIT;
    //  INSERT INTO CMTSEGXTER
    //    (SEG_NITTER, SEG_TIPGES, SEG_FECGES, SEG_FECSEG, SEG_HORSEG, SEG_ESTSEG, SEG_OBSERVA, SEG_USUARIO, SEG_COMER, SEG_TIPCOMP, SEG_CLASE, SEG_COMTER, SEG_CODUNI)
    //   VALUES
    //   (:AGENDA.NITTER, :V_TIPGES, SYSDATE, :V_FECSEG, :V_HORSEG, 'GR', :V_OBSERVANVA, USER, :CODCOMERCIAL, :V_TIPCOMP, '-', :CODCOMERCIAL, :this.PARAMETER.get("PUNIDAD"));
    //   COMMIT;
    //  LIB$ALERTA ('MENSAJE','REGISTRO ACTUALIZADO.',NULL,NULL,NULL, T_RESPUESTA);
    //  BEGIN
    //    SELECT COM_MAIL
    //      INTO V_CORREO
    //    FROM SETCOMCIA
    //    WHERE COM_CODIGO = :AGENDA.CODCOMERCIAL
    //     AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD");
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN   
    //      V_CORREO := NULL;   
    //   END;
    //   --ENVIO DE CORREO DE CANCELACIÓN
    //    PUP_ENVIO_CORREO6    (:AGENDA.CODCOMERCIAL, V_CORREO);
    //  :V_TIPOCAN       := NULL;
    //  :BPARAMAGE.V_CODMOT   := NULL;
    //  :BPARAMAGE.V_OBSERMOT := NULL;
    //  :BPARAMAGE.V_FECSEG   := NULL;
    //  :BPARAMAGE.V_HORSEG  := NULL;
    //  :BPARAMAGE.V_FECPROXSEG  := NULL;
    //  :BPARAMAGE.V_HORAPROXSEG := NULL;
    //  GO_BLOCK('AGENDA');
    //  EXECUTE_QUERY;   
    //  GO_BLOCK('BPARAMAGE');
    //  HIDE_VIEW('PNVOSEGUI');
    // ELSIF :BPARAMAGE.V_CODMOT = '001' THEN
    //  UPDATE CMTSEGXTER
    //         SET SEG_ESTSEG = :V_TIPOCAN
    //            ,SEG_CODMOT = :BPARAMAGE.V_CODMOT
    //            ,SEG_OBSMOT = :BPARAMAGE.V_OBSERMOT
    //            ,SEG_FECUPD = SYSDATE
    //       WHERE SEG_NITTER = :AGENDA.NITTER
    //         AND TRUNC(SEG_FECSEG) = TO_CHAR(:AGENDA.FECHA,'YYYY-MM-DD')
    //         AND TO_CHAR(SEG_HORSEG,'HH12:MI PM') = :AGENDA.HORA
    //         AND TRUNC(SEG_FECGES) = TO_CHAR(:AGENDA.FECHAGEST,'YYYY-MM-DD');
    //  COMMIT;
    //  INSERT INTO CMTSEGXTER
    //    (SEG_NITTER, SEG_TIPGES, SEG_FECGES, SEG_FECSEG, SEG_HORSEG, SEG_ESTSEG, SEG_OBSERVA, SEG_USUARIO, SEG_COMER, SEG_TIPCOMP, SEG_CLASE, SEG_COMTER, SEG_CODUNI)
    //   VALUES
    //   (:AGENDA.NITTER, :V_TIPGES, SYSDATE, :V_FECSEG, :V_HORSEG, 'GR', :V_OBSERVANVA, USER, :CODCOMERCIAL, :V_TIPCOMP, '-', :CODCOMERCIAL, :this.PARAMETER.get("PUNIDAD"));
    //   COMMIT;
    //  LIB$ALERTA ('MENSAJE','REGISTRO ACTUALIZADO.',NULL,NULL,NULL, T_RESPUESTA);
    //  :V_TIPOCAN       := NULL;
    //  :BPARAMAGE.V_CODMOT   := NULL;
    //  :BPARAMAGE.V_OBSERMOT := NULL;
    //  :BPARAMAGE.V_FECSEG   := NULL;
    //  :BPARAMAGE.V_HORSEG  := NULL;
    //  :BPARAMAGE.V_FECPROXSEG  := NULL;
    //  :BPARAMAGE.V_HORAPROXSEG := NULL;
    //  GO_BLOCK('AGENDA');
    //  EXECUTE_QUERY;   
    //  GO_BLOCK('BPARAMAGE');
    //  HIDE_VIEW('PNVOSEGUI');
    // --ELSE 
    // -- LIB$DTNERFRMA ('DEBE SELECCIONAR UN TIPO DE MOTIVO DE CANCELACIÓN Ó APLAZAMIENTO.');
    // END IF;
    // END IF;
    // END;        
    //#endregion
    async CMFMENU_bparamage_vCrearreg_whenCheckboxChanged() {
        console.log("Entering CMFMENU_bparamage_vCrearreg_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let V_CORREO: null = null;
        // if ((V_OBSERMOT == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR OBSERVACIONES DEL MOTIVO DE CANCELACIÓN/APLAZAMIENTO.");
        // }
        // else {
        //     if ((BPARAMAGE.V_CODMOT == "001" && AGENDA.INVITA == "S")) {
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.V_TIPOCAN = : V_TIPOCAN;
        //         payload1.V_CODMOT = : V_CODMOT;
        //         payload1.V_OBSERMOT = : V_OBSERMOT;
        //         payload1.NITTER = : NITTER;
        //         payload1.FECHA = : FECHA;
        //         payload1.HORA = : HORA;
        //         payload1.FECHAGEST = : FECHAGEST;
        //         // call REST API
        //         const result1 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vcrearreg_whencheckboxchanged_query1", payload1);
        //         // construct payload
        //         let payload3 = new Map();
        //         payload3.NITTER = : AGENDA.NITTER;
        //         payload3.V_TIPGES = : V_TIPGES;
        //         payload3.V_FECSEG = : V_FECSEG;
        //         payload3.V_HORSEG = : V_HORSEG;
        //         payload3.V_OBSERVANVA = : V_OBSERVANVA;
        //         payload3.CODCOMERCIAL = : CODCOMERCIAL;
        //         payload3.V_TIPCOMP = : V_TIPCOMP;
        //         payload3.PUNIDAD = : this.PARAMETER.get("PUNIDAD");
        //         // call REST API
        //         const result3 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vcrearreg_whencheckboxchanged_query3", payload3);
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "REGISTRO ACTUALIZADO.", null, null, null, T_RESPUESTA);
        //         // construct payload
        //         let payload5 = new Map();
        //         payload5.set("CODCOMERCIAL", AGENDA.CODCOMERCIAL);
        //         payload5.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        //         // call REST API
        //         const result5 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vcrearreg_whencheckboxchanged_query5", payload5);
        //         // get values from result
        //         V_CORREO = result5[0].get("V_CORREO");
        //         if (result5 == null || result5.length == 0) {

        //             V_CORREO = null;
        //         }

        //         // CMFMENU_PUP_ENVIO_CORREO6(AGENDA.CODCOMERCIAL, V_CORREO);
        //         this.BPARAMAGE.V_TIPOCAN = null;
        //         this.BPARAMAGE.V_CODMOT = null;
        //         this.BPARAMAGE.V_OBSERMOT = null;
        //         this.BPARAMAGE.V_FECSEG = null;
        //         this.BPARAMAGE.V_HORSEG = null;
        //         this.BPARAMAGE.V_FECPROXSEG = null;
        //         this.BPARAMAGE.V_HORAPROXSEG = null;
        //         this.oracleFormsBuiltins.go_block("AGENDA");
        //         this.oracleFormsBuiltins.execute_query();
        //         this.oracleFormsBuiltins.go_block("BPARAMAGE");
        //         this.oracleFormsBuiltins.hide_view("PNVOSEGUI");
        //     }
        //     else if (BPARAMAGE.V_CODMOT == "001") {
        //         // construct payload
        //         let payload6 = new Map();
        //         payload6.V_TIPOCAN = : V_TIPOCAN;
        //         payload6.V_CODMOT = : V_CODMOT;
        //         payload6.V_OBSERMOT = : V_OBSERMOT;
        //         payload6.NITTER = : NITTER;
        //         payload6.FECHA = : FECHA;
        //         payload6.HORA = : HORA;
        //         payload6.FECHAGEST = : FECHAGEST;
        //         // call REST API
        //         const result6 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vcrearreg_whencheckboxchanged_query6", payload6);
        //         // construct payload
        //         let payload8 = new Map();
        //         payload8.NITTER = : AGENDA.NITTER;
        //         payload8.V_TIPGES = : V_TIPGES;
        //         payload8.V_FECSEG = : V_FECSEG;
        //         payload8.V_HORSEG = : V_HORSEG;
        //         payload8.V_OBSERVANVA = : V_OBSERVANVA;
        //         payload8.CODCOMERCIAL = : CODCOMERCIAL;
        //         payload8.V_TIPCOMP = : V_TIPCOMP;
        //         payload8.PUNIDAD = : this.PARAMETER.get("PUNIDAD");
        //         // call REST API
        //         const result8 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vcrearreg_whencheckboxchanged_query8", payload8);
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "REGISTRO ACTUALIZADO.", null, null, null, T_RESPUESTA);
        //         this.BPARAMAGE.V_TIPOCAN = null;
        //         this.BPARAMAGE.V_CODMOT = null;
        //         this.BPARAMAGE.V_OBSERMOT = null;
        //         this.BPARAMAGE.V_FECSEG = null;
        //         this.BPARAMAGE.V_HORSEG = null;
        //         this.BPARAMAGE.V_FECPROXSEG = null;
        //         this.BPARAMAGE.V_HORAPROXSEG = null;
        //         this.oracleFormsBuiltins.go_block("AGENDA");
        //         this.oracleFormsBuiltins.execute_query();
        //         this.oracleFormsBuiltins.go_block("BPARAMAGE");
        //         this.oracleFormsBuiltins.hide_view("PNVOSEGUI");
        //     }
        // }
        console.log("Exiting CMFMENU_bparamage_vCrearreg_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  V_FECINI  DATE;
    //  V_FECFIN DATE;
    //  V_DIASMES NUMBER;
    //  V_DIASEMAN VARCHAR2(30);
    //  --V_PROXMES  DATE;
    //  V_PROXMESINI NUMBER;
    //  V_PROXMESFIN NUMBER;
    //  --6414
    //  V_AREA  VARCHAR2(30);
    //  --6414
    // BEGIN
    //  
    //  --6414 PROYECTO
    //  
    //  BEGIN
    //   SELECT USU_AREA
    //   INTO V_AREA
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO = PLSQLBuiltins.user(); 
    //    EXCEPTION WHEN NO_DATA_FOUND THEN
    //      V_AREA := 'XXX';
    //   END;
    //   
    //   IF  V_AREA <> 'CAP' THEN     
    //      PQBD_COL_ADMVEN.PVENAGENCOMER (:this.PARAMETER.get("PCODCOMER"));   
    //   END IF; 
    //  
    // 
    //  --6414 PROYECTO 
    //  
    // IF :RADIO_OPCIONES = '1' THEN --ESTA SEMANA
    //   BEGIN
    //    SELECT RTRIM(TO_CHAR(TRUNC(SYSDATE),'DAY'))
    //      INTO V_DIASEMAN 
    //   FROM DUAL;
    //   END;
    //   IF V_DIASEMAN = 'FRIDAY' THEN
    //    :V_PWHERE := '= TRUNC(SYSDATE)+ 3';
    //    :this.PARAMETER.get("PFECINI") := SYSDATE;
    //     :this.PARAMETER.get("PFECFIN") := TRUNC(SYSDATE)+ 3;
    //   ELSIF V_DIASEMAN = 'MONDAY' THEN
    //    :V_PWHERE := 'BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE)+ 5';
    //    :this.PARAMETER.get("PFECINI") := SYSDATE;
    //   :this.PARAMETER.get("PFECFIN") := TRUNC(SYSDATE)+ 5;
    //  ELSIF V_DIASEMAN = 'TUESDAY' THEN
    //    :V_PWHERE := 'BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE)+ 4';
    //    :this.PARAMETER.get("PFECINI") := SYSDATE;
    //     :this.PARAMETER.get("PFECFIN") := TRUNC(SYSDATE)+ 4;
    //  ELSIF V_DIASEMAN = 'WEDNESDAY' THEN
    //    :V_PWHERE := 'BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 3';   
    //    :this.PARAMETER.get("PFECINI") := SYSDATE;
    //     :this.PARAMETER.get("PFECFIN") := TRUNC(SYSDATE)+ 3;
    //  ELSIF V_DIASEMAN = 'THURSDAY' THEN
    //    :V_PWHERE := 'BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 2';  
    //    :this.PARAMETER.get("PFECINI") := SYSDATE;
    //     :this.PARAMETER.get("PFECFIN") := TRUNC(SYSDATE)+ 2;
    //  ELSIF V_DIASEMAN = 'SATURDAY' THEN    
    //   :V_PWHERE := 'BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 3';  
    //   :this.PARAMETER.get("PFECINI") := SYSDATE;
    //     :this.PARAMETER.get("PFECFIN") := TRUNC(SYSDATE)+ 3;
    //   ELSIF V_DIASEMAN = 'SUNDAY' THEN      
    //   :V_PWHERE := 'BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 1';  
    //   :this.PARAMETER.get("PFECINI") := SYSDATE;
    //     :this.PARAMETER.get("PFECFIN") := TRUNC(SYSDATE)+ 1;
    //   END IF;
    // ELSIF :RADIO_OPCIONES = '2' THEN --PROXIMA SEMANA
    //  :V_PWHERE := 'BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 15';
    //  :this.PARAMETER.get("PFECINI") := SYSDATE;
    //   :this.PARAMETER.get("PFECFIN") := TRUNC(SYSDATE)+ 15;
    // ELSIF :RADIO_OPCIONES = '3' THEN--ESTE MES
    //   BEGIN
    //     SELECT LAST_DAY(TRUNC(SYSDATE))- TRUNC(SYSDATE)
    //       INTO V_DIASMES
    //     FROM DUAL;
    //   END;
    //   BEGIN 
    //  SELECT TRUNC(SYSDATE, 'MM'), LAST_DAY(TRUNC(SYSDATE))
    //   INTO V_FECINI, V_FECFIN
    //  FROM DUAL;
    //  END; 
    // --   :V_PWHERE := 'BETWEEN '||V_FECINI||' '||' AND '||V_FECFIN;
//    //  :V_PWHERE := 'BETWEEN TRUNC(SYSDATE,'||CHR(39)||'MM'||CHR(39)||')'||' AND TRUNC(SYSDATE) + '||V_DIASMES;
    //  :this.PARAMETER.get("PFECINI") := TRUNC(SYSDATE, 'MM');
    //  :this.PARAMETER.get("PFECFIN") := LAST_DAY(:this.PARAMETER.get("PFECINI"));
    // ELSIF :RADIO_OPCIONES = '4' THEN--PROXIMO MES
    //  BEGIN
    //     SELECT LAST_DAY(TRUNC(SYSDATE))- TRUNC(SYSDATE)
    //       INTO V_PROXMESINI
    //     FROM DUAL;
    //  END;
    //  V_PROXMESINI := V_PROXMESINI + 1;
    //  V_PROXMESFIN := V_PROXMESINI + 30;
    //  :V_PWHERE := 'BETWEEN TRUNC(SYSDATE) + '||V_PROXMESINI||' AND '||'TRUNC(SYSDATE) +'||V_PROXMESFIN; 
    //  :this.PARAMETER.get("PFECINI") := TRUNC(SYSDATE+30, 'MM');
    //  :this.PARAMETER.get("PFECFIN") := LAST_DAY(:this.PARAMETER.get("PFECINI"));
    // ELSIF :RADIO_OPCIONES = '5' THEN--HOY
    //  :V_PWHERE := '= TRUNC(SYSDATE)';
    //  :this.PARAMETER.get("PFECINI") := TRUNC(SYSDATE);
    //  :this.PARAMETER.get("PFECFIN") := TRUNC(SYSDATE);
    // ELSIF :RADIO_OPCIONES = '6' THEN--MAÑANA
    //   :V_PWHERE := '= TRUNC((SYSDATE)+1)';
    //   :this.PARAMETER.get("PFECINI") := TRUNC(SYSDATE)+1;
    //  :this.PARAMETER.get("PFECFIN") := TRUNC(SYSDATE)+1;
    // -- :V_PWHERE := 'BETWEEN TRUNC(SYSDATE) AND TRUNC((SYSDATE)+1)';
    // ELSIF :RADIO_OPCIONES = '7' THEN--VENCIDAS
    //  :V_PWHERE := '< TRUNC(SYSDATE)';
    //  :this.PARAMETER.get("PFECINI") := TRUNC(SYSDATE)-365;
    //  :this.PARAMETER.get("PFECFIN") := TRUNC(SYSDATE)-1;
    // END IF;
    // END;
    //#endregion
    async CMFMENU_bparamage_radioOpciones_whenRadioChanged() {
        console.log("Entering CMFMENU_bparamage_radioOpciones_whenRadioChanged");
        let V_FECINI: Date = null;
        let V_FECFIN: Date = null;
        let V_DIASMES: number = null;
        let V_DIASEMAN: string = null;
        let V_PROXMESINI: number = null;
        let V_PROXMESFIN: number = null;
        let V_AREA: string = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_radioopciones_whenradiochanged_query1", payload1);
        // get values from result
        V_AREA = result1[0].get("V_AREA");
        if (result1 == null || result1.length == 0) {

            V_AREA = "XXX";
        }

        if (V_AREA != "CAP") {
            // CMFMENU_PQBD_COL_ADMVEN.PVENAGENCOMER(this.PARAMETER.get("PCODCOMER"));
        }
        // if (RADIO_OPCIONES == "1") {
        //     // construct payload
        //     let payload2 = new Map();
        //     // call REST API
        //     const result2 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_radioopciones_whenradiochanged_query2", payload2);
        //     // get values from result
        //     V_DIASEMAN = result2[0].get("V_DIASEMAN");
        //     if (V_DIASEMAN == "FRIDAY") {
        //         this.BPARAMAGE.V_PWHERE = "= TRUNC(SYSDATE)+ 3";
        //         this.PARAMETER.get("PFECINI") = PLSQLBuiltins.sysdate();
        //         this.PARAMETER.get("PFECFIN") = TRUNC(PLSQLBuiltins.sysdate()) + 3;
        //     }
        //     else if (V_DIASEMAN == "MONDAY") {
        //         this.BPARAMAGE.V_PWHERE = "BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE)+ 5";
        //         this.PARAMETER.get("PFECINI") = PLSQLBuiltins.sysdate();
        //         this.PARAMETER.get("PFECFIN") = TRUNC(PLSQLBuiltins.sysdate()) + 5;
        //     }
        //     else if (V_DIASEMAN == "TUESDAY") {
        //         this.BPARAMAGE.V_PWHERE = "BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE)+ 4";
        //         this.PARAMETER.get("PFECINI") = PLSQLBuiltins.sysdate();
        //         this.PARAMETER.get("PFECFIN") = TRUNC(PLSQLBuiltins.sysdate()) + 4;
        //     }
        //     else if (V_DIASEMAN == "WEDNESDAY") {
        //         this.BPARAMAGE.V_PWHERE = "BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 3";
        //         this.PARAMETER.get("PFECINI") = PLSQLBuiltins.sysdate();
        //         this.PARAMETER.get("PFECFIN") = TRUNC(PLSQLBuiltins.sysdate()) + 3;
        //     }
        //     else if (V_DIASEMAN == "THURSDAY") {
        //         this.BPARAMAGE.V_PWHERE = "BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 2";
        //         this.PARAMETER.get("PFECINI") = PLSQLBuiltins.sysdate();
        //         this.PARAMETER.get("PFECFIN") = TRUNC(PLSQLBuiltins.sysdate()) + 2;
        //     }
        //     else if (V_DIASEMAN == "SATURDAY") {
        //         this.BPARAMAGE.V_PWHERE = "BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 3";
        //         this.PARAMETER.get("PFECINI") = PLSQLBuiltins.sysdate();
        //         this.PARAMETER.get("PFECFIN") = TRUNC(PLSQLBuiltins.sysdate()) + 3;
        //     }
        //     else if (V_DIASEMAN == "SUNDAY") {
        //         this.BPARAMAGE.V_PWHERE = "BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 1";
        //         this.PARAMETER.get("PFECINI") = PLSQLBuiltins.sysdate();
        //         this.PARAMETER.get("PFECFIN") = TRUNC(PLSQLBuiltins.sysdate()) + 1;
        //     }
        // }
        // else if (RADIO_OPCIONES == "2") {
        //     this.BPARAMAGE.V_PWHERE = "BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 15";
        //     this.PARAMETER.get("PFECINI") = PLSQLBuiltins.sysdate();
        //     this.PARAMETER.get("PFECFIN") = TRUNC(PLSQLBuiltins.sysdate()) + 15;
        // }
        // else if (RADIO_OPCIONES == "3") {
        //     // construct payload
        //     let payload3 = new Map();
        //     // call REST API
        //     const result3 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_radioopciones_whenradiochanged_query3", payload3);
        //     // get values from result
        //     V_DIASMES = result3[0].get("V_DIASMES");
        //     // construct payload
        //     let payload4 = new Map();
        //     // call REST API
        //     const result4 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_radioopciones_whenradiochanged_query4", payload4);
        //     // get values from result
        //     V_FECINI = result4[0].get("V_FECINI");
        //     V_FECFIN = result4[0].get("V_FECFIN");
//        //     this.BPARAMAGE.V_PWHERE = "BETWEEN TRUNC(SYSDATE," + CHR(39) + "MM" + CHR(39) + ")" + " AND TRUNC(SYSDATE) + " + V_DIASMES;
        //     this.PARAMETER.get("PFECINI") = TRUNC(PLSQLBuiltins.sysdate(), "MM");
        //     this.PARAMETER.get("PFECFIN") = LAST_DAY(this.PARAMETER.get("PFECINI"));
        // }
        // else if (RADIO_OPCIONES == "4") {
        //     // construct payload
        //     let payload5 = new Map();
        //     // call REST API
        //     const result5 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_radioopciones_whenradiochanged_query5", payload5);
        //     // get values from result
        //     V_PROXMESINI = result5[0].get("V_PROXMESINI");
        //     V_PROXMESINI = V_PROXMESINI + 1;
        //     V_PROXMESFIN = V_PROXMESINI + 30;
        //     this.BPARAMAGE.V_PWHERE = "BETWEEN TRUNC(SYSDATE) + " + V_PROXMESINI + " AND " + "TRUNC(SYSDATE) +" + V_PROXMESFIN;
        //     this.PARAMETER.get("PFECINI") = TRUNC(PLSQLBuiltins.sysdate() + 30, "MM");
        //     this.PARAMETER.get("PFECFIN") = LAST_DAY(this.PARAMETER.get("PFECINI"));
        // }
        // else if (RADIO_OPCIONES == "5") {
        //     this.BPARAMAGE.V_PWHERE = "= TRUNC(SYSDATE)";
        //     this.PARAMETER.get("PFECINI") = TRUNC(PLSQLBuiltins.sysdate());
        //     this.PARAMETER.get("PFECFIN") = TRUNC(PLSQLBuiltins.sysdate());
        // }
        // else if (RADIO_OPCIONES == "6") {
        //     this.BPARAMAGE.V_PWHERE = "= TRUNC((SYSDATE)+1)";
        //     this.PARAMETER.get("PFECINI") = TRUNC(PLSQLBuiltins.sysdate()) + 1;
        //     this.PARAMETER.get("PFECFIN") = TRUNC(PLSQLBuiltins.sysdate()) + 1;
        // }
        // else if (RADIO_OPCIONES == "7") {
        //     this.BPARAMAGE.V_PWHERE = "< TRUNC(SYSDATE)";
        //     this.PARAMETER.get("PFECINI") = TRUNC(PLSQLBuiltins.sysdate()) - 365;
        //     this.PARAMETER.get("PFECFIN") = TRUNC(PLSQLBuiltins.sysdate()) - 1;
        // }
        console.log("Exiting CMFMENU_bparamage_radioOpciones_whenRadioChanged");
    }

    //#region PLSQL
    // DECLARE
    //  LPCOGENID  PARAMLIST;
    //  T_RESPUESTA NUMBER;
    // BEGIN      
    // //        LIB$ALERTA('MENSAJE','GENERANDO REPORTE.',NULL,NULL,NULL, T_RESPUESTA);
    //      LPCOGENID := GET_PARAMETER_LIST('LPCOGEN');
    //        IF NOT ID_NULL(LPCOGENID) THEN
    //         DESTROY_PARAMETER_LIST(LPCOGENID);
    //        END IF;
    //        LPCOGENID := CREATE_PARAMETER_LIST('LPCOGEN');
    //        ADD_PARAMETER(LPCOGENID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //        --ADD_PARAMETER(LPCOGENID, 'PARAMFORM', "TEXT_PARAMETER", 'NO');
    //        ADD_PARAMETER(LPCOGENID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //        ADD_PARAMETER(LPCOGENID, 'PU_COMER', "TEXT_PARAMETER", :this.PARAMETER.get("PCODCOMER"));--CONTROL 2 PORQUE ES EL QUE TIENE EL 004 GARANTIAS ELABORADAS
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECINI', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECINI"),'YYYY-MM-DD'));
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECFIN', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECFIN"),'YYYY-MM-DD')); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_PLAZA', "TEXT_PARAMETER", :this.PARAMETER.get("PPLAZU")); 
//    // //        RUN_PRODUCT(REPORTS, 'CMRAGENDA', ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, NULL);
    // END;
    //#endregion
    async CMFMENU_bparamage_imprimir_whenButtonPressed() {
        console.log("Entering CMFMENU_bparamage_imprimir_whenButtonPressed");
        let LPCOGENID: number = null;
        let T_RESPUESTA: number = null;
        // // CMFMENU_LIB$ALERTA("MENSAJE", "GENERANDO REPORTE.", null, null, null, T_RESPUESTA);
        LPCOGENID = this.oracleFormsBuiltins.get_parameter_list("LPCOGEN");
        if ((!this.oracleFormsBuiltins.id_null(LPCOGENID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(LPCOGENID);
        }
        LPCOGENID = this.oracleFormsBuiltins.create_parameter_list("LPCOGEN");
        this.oracleFormsBuiltins.add_parameter(LPCOGENID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(LPCOGENID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
        this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_COMER", "TEXT_PARAMETER", this.PARAMETER.get("PCODCOMER"));
        this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECINI", "TEXT_PARAMETER", this.PARAMETER.get("PFECINI").toString());
        this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECFIN", "TEXT_PARAMETER", this.PARAMETER.get("PFECFIN").toString());
        this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_PLAZA", "TEXT_PARAMETER", this.PARAMETER.get("PPLAZU"));
//        // this.oracleFormsBuiltins.run_product(REPORTS, "CMRAGENDA", ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, null);
        console.log("Exiting CMFMENU_bparamage_imprimir_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :BPARAMAGE.V_FECPROXSEG < TRUNC(SYSDATE) THEN
    //  LIB$DTNERFRMA('NO SE PERMITE FECHAS INFERIORES A HOY. RECTIFIQUE.');
    // ELSE
    //  :BPARAMAGE.V_FECPROXSEG := TO_DATE(TO_CHAR(:BPARAMAGE.V_FECPROXSEG,'YYYYMMDD'),'YYYYMMDD'); 
    // END IF; END;
    //#endregion
    async CMFMENU_bparamage_vFecproxseg_whenValidateItem() {
        console.log("Entering CMFMENU_bparamage_vFecproxseg_whenValidateItem");
        if (this.BPARAMAGE.V_FECPROXSEG < (PLSQLBuiltins.sysdate())) {
            // CMFMENU_LIB$DTNERFRMA("NO SE PERMITE FECHAS INFERIORES A HOY. RECTIFIQUE.");
        }
        else {
            this.BPARAMAGE.V_FECPROXSEG = new Date(this.BPARAMAGE.V_FECPROXSEG.toString());
        }
        console.log("Exiting CMFMENU_bparamage_vFecproxseg_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('VBTON_CREAREG',"DISPLAYED", "PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('VBTON_CREAREG',ENABLED, "PROPERTY_TRUE");
    // GO_ITEM('VBTON_CREAREG'); END;
    //#endregion
    async CMFMENU_bparamage_vHoraproxseg_keyNextItem() {
        console.log("Entering CMFMENU_bparamage_vHoraproxseg_keyNextItem");
        this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "DISPLAYED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.go_item("VBTON_CREAREG");
        console.log("Exiting CMFMENU_bparamage_vHoraproxseg_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :BPARAMAGE.V_FECSEG < TRUNC(SYSDATE-1) THEN
    //  LIB$DTNERFRMA('NO SE PERMITE FECHAS INFERIORES A UN DIA. RECTIFIQUE.');
    // ELSE
    //  :BPARAMAGE.V_FECSEG := TO_DATE(TO_CHAR(:BPARAMAGE.V_FECSEG,'YYYYMMDD'),'YYYYMMDD'); 
    // END IF; END;
    //#endregion
    async CMFMENU_bparamage_vFecseg_whenValidateItem() {
        console.log("Entering CMFMENU_bparamage_vFecseg_whenValidateItem");
        if (this.BPARAMAGE.V_FECSEG) {
            // CMFMENU_LIB$DTNERFRMA("NO SE PERMITE FECHAS INFERIORES A UN DIA. RECTIFIQUE.");
        }
        else {
            this.BPARAMAGE.V_FECSEG = new Date(this.BPARAMAGE.V_FECSEG.toString());
        }
        console.log("Exiting CMFMENU_bparamage_vFecseg_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('VBTON_CREAREG',"DISPLAYED", "PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('VBTON_CREAREG',ENABLED, "PROPERTY_TRUE");
    // GO_ITEM('VBTON_CREAREG'); END;
    //#endregion
    async CMFMENU_bparamage_vObsermot_keynextitem() {
        console.log("Entering CMFMENU_bparamage_vObsermot_keynextitem");
        this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "DISPLAYED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("VBTON_CREAREG", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.go_item("VBTON_CREAREG");
        console.log("Exiting CMFMENU_bparamage_vObsermot_keynextitem");
    }

    //#region PLSQL
    // BEGIN
    //  IF :RADIO_OPCIONES IS NULL THEN
    //   LIB$DTNERFRMA('DEBE SELECCIONAR UN TIPO DE PARAMETRO DE CONSULTA.');
    //  ELSE
    //    GO_BLOCK('AGENDA');
    //    EXECUTE_QUERY;
    //  END IF;
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS');
    // END;
    //#endregion
    async CMFMENU_bparamage_vGenerar_whenButtonPressed() {
        console.log("Entering CMFMENU_bparamage_vGenerar_whenButtonPressed");
        // if ((RADIO_OPCIONES == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE SELECCIONAR UN TIPO DE PARAMETRO DE CONSULTA.");
        // }
        // else {
        //     this.oracleFormsBuiltins.go_block("AGENDA");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // if (result0 == null || result0.length == 0) {

        //     // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS");
        // }

        console.log("Exiting CMFMENU_bparamage_vGenerar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CORREO   SETCOMCIA.COM_MAIL%TYPE;
    //  V_EXTERXCOM NUMBER;
    //  V_EXTERSEC NUMBER;
    // BEGIN
    // IF :V_CODMOT <> '001' THEN
    //   IF :BPARAMAGE.V_CODMOT = '003' AND :AGENDA.INVITA = 'S' THEN
    //   UPDATE CMTSEGXTER
    //         SET SEG_ESTSEG = :V_TIPOCAN
    //            ,SEG_CODMOT = :BPARAMAGE.V_CODMOT
    //            ,SEG_OBSMOT = :BPARAMAGE.V_OBSERMOT
    //            ,SEG_FECUPD = SYSDATE
    //       WHERE SEG_NITTER = :AGENDA.NITTER
    //         AND TRUNC(SEG_FECSEG) = TO_CHAR(:AGENDA.FECHA,'YYYY-MM-DD')
    //         AND TO_CHAR(SEG_HORSEG,'HH24:MI PM') = :AGENDA.HORA
    //         AND TRUNC(SEG_FECGES) = TO_CHAR(:AGENDA.FECHAGEST,'YYYY-MM-DD');
    //    COMMIT;
    //    --COMMIT_FORM;
    //    LIB$ALERTA ('MENSAJE','REGISTRO ACTUALIZADO. SE ENVÍA CORREO DE AVISO AL COMERCIAL.',NULL,NULL,NULL, T_RESPUESTA);
    //    BEGIN
    //    SELECT COM_MAIL
    //      INTO V_CORREO
    //    FROM SETCOMCIA
    //    WHERE COM_CODIGO = :AGENDA.CODCOMERCIAL
    //     AND COM_CODUNI  = :this.PARAMETER.get("PUNIDAD");--ARQUITECTURA
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN   
    //      V_CORREO := NULL;   
    //   END;
    //   --ENVIO DE CORREO DE CANCELACIÓN
    //    PUP_ENVIO_CORREO4    (:AGENDA.CODCOMERCIAL, V_CORREO);
    //    :V_TIPOCAN       := NULL;
    //    :BPARAMAGE.V_CODMOT   := NULL;
    //    :BPARAMAGE.V_OBSERMOT := NULL; 
    //    :BPARAMAGE.V_FECPROXSEG  := NULL;
    //    :BPARAMAGE.V_HORAPROXSEG := NULL;
    //    GO_BLOCK('AGENDA');
    //    EXECUTE_QUERY;
    //    --DESCA MANEJO DE DESCARTADOS.
    //   ELSIF :V_CODMOT = '002' AND :V_TIPOCAN = 'CA'THEN
    //      IF FRM$ALERTA_SINO ('SE VA A ACTULIZAR EL TERCERO '||:AGENDA.NOMBRE||' '||'COMO CLIENTE DESCARTADO ESTA SEGURO?') = 1 THEN 
    //        --ACTUALIZACIÓN DEL TERCERO EN PERFIL 2 
    //        --CODIGO DE DESCARTADOS
    //        UPDATE OPS$SEGUI.TER
    //           SET TERPERF = '005'
    //        WHERE TERCOD = :AGENDA.NITTER;
    //        COMMIT;
    //        --ACTUALIZA EL REGISTRO ACTUAL
    //        UPDATE CMTSEGXTER
    //         SET SEG_ESTSEG = :V_TIPOCAN
    //            ,SEG_CODMOT = :BPARAMAGE.V_CODMOT
    //            ,SEG_OBSMOT = :BPARAMAGE.V_OBSERMOT
    //            ,SEG_FECUPD = SYSDATE
    //       WHERE SEG_NITTER = :AGENDA.NITTER
    //         AND TRUNC(SEG_FECSEG) = TO_CHAR(:AGENDA.FECHA,'YYYY-MM-DD')
    //         AND TO_CHAR(SEG_HORSEG,'HH12:MI PM') = :AGENDA.HORA
    //         AND TRUNC(SEG_FECGES) = TO_CHAR(:AGENDA.FECHAGEST,'YYYY-MM-DD');
    //     --ACTUALIZA TODOS LOS REGISTROS QUE FUERON CREADOS POR EL COMERCIAL 
    //     UPDATE CMTSEGXTER
    //        SET SEG_ESTSEG = :V_TIPOCAN
    //            ,SEG_CODMOT = :BPARAMAGE.V_CODMOT
    //            ,SEG_OBSMOT = :BPARAMAGE.V_OBSERMOT||'CANCELACION AÚTOMATICA A TODOS LOS SEGUIMIENTOS X MOTIVO DE DESCARTADO.'
    //            ,SEG_FECUPD = SYSDATE
    //      WHERE SEG_NITTER = :AGENDA.NITTER
    //        AND SEG_COMER  = :AGENDA.CODCOMERCIAL
    //        AND SEG_ESTSEG IN ('GR','AP')
    //        AND SEG_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    //     --BORRAR DE LA TABLA DE CADA COMERCIAL ES DECIR FINANCIEROS SETTERXCOM ; CAPTACIONE Y LOP SETTTERSEC EL VINCULO CON ESE COMERCIAL
    //      BEGIN
    //        SELECT COUNT(*) 
    //          INTO V_EXTERXCOM
    //        FROM SETTERXCOM
    //        WHERE CXT_NIT    = :AGENDA.NITTER
    //          AND CXT_CODIGO = :AGENDA.CODCOMERCIAL;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //        BEGIN
    //          SELECT COUNT(*) 
    //           INTO V_EXTERSEC
    //          FROM SETTERSEC
    //          WHERE TERSEC_NIT    = :AGENDA.NITTER
    //            AND TERSEC_CODIGO = :AGENDA.CODCOMERCIAL;
    //        EXCEPTION WHEN NO_DATA_FOUND THEN
    //          LIB$DTNERFRMA('NO SE PUDO DESVINCULAR EL CLIENTE DEL COMERCIAL'); 
    //        END;
    //   END;
    //   BEGIN
    //        SELECT COUNT(*) 
    //         INTO V_EXTERSEC
    //        FROM SETTERSEC
    //        WHERE TERSEC_NIT    = :AGENDA.NITTER
    //          AND TERSEC_CODIGO = :AGENDA.CODCOMERCIAL;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //        LIB$DTNERFRMA('NO SE PUDO DESVINCULAR EL CLIENTE DEL COMERCIAL'); 
    //     END;
    //     /*
    //      IF V_EXTERXCOM > 0 THEN
    //        DELETE SETTERXCOM
    //        WHERE CXT_NIT =   :AGENDA.NITTER
    //          AND CXT_CODIGO = :AGENDA.CODCOMERCIAL;
    //      ELSIF V_EXTERSEC > 0 THEN
    //        DELETE SETTERSEC
    //        WHERE TERSEC_NIT    = :AGENDA.NITTER
    //           AND TERSEC_CODIGO = :AGENDA.CODCOMERCIAL;
    //      END IF;
    //    */
    //      -- GUARDA EN LA TABLA DE HISTORIA QUE EL CLIENTE LO TUVO EL COMERCIAL QUE LO ESTA DESCANTANDO
    //        INSERT INTO SETTERXCH (CXT_CODIGO,CXT_FECREG,CXT_NIT,CXT_USER)
    //           VALUES(:AGENDA.CODCOMERCIAL,SYSDATE,:AGENDA.NITTER,USER);
    //     --
    //       COMMIT;
    //       LIB$ALERTA ('MENSAJE','REGISTRO ACTUALIZADO CON MOTIVO CANCELACIÓN DEFINITIVA.',NULL,NULL,NULL, T_RESPUESTA);
    //       :V_TIPOCAN       := NULL;
    //       :BPARAMAGE.V_CODMOT   := NULL;
    //       :BPARAMAGE.V_OBSERMOT := NULL;
    //       :BPARAMAGE.V_FECPROXSEG  := NULL;
    //       :BPARAMAGE.V_HORAPROXSEG := NULL;
    //       GO_BLOCK('AGENDA');
    //       EXECUTE_QUERY;
    //       GO_BLOCK('BPARAMAGE');
    //       HIDE_VIEW('PNVOSEGUI');
    //      ELSE
    //        LIB$DTNERFRMA('PROCESO CANCELADO POR EL USUARIO');
    //      END IF;   
    //    --FIN DESCA
    //    ELSIF :BPARAMAGE.V_CODMOT IS NOT NULL THEN
    //      UPDATE CMTSEGXTER
    //         SET SEG_ESTSEG = :V_TIPOCAN
    //            ,SEG_CODMOT = :BPARAMAGE.V_CODMOT
    //            ,SEG_OBSMOT = :BPARAMAGE.V_OBSERMOT
    //            ,SEG_FECUPD = SYSDATE
    //       WHERE SEG_NITTER = :AGENDA.NITTER
    //         AND TRUNC(SEG_FECSEG) = TO_CHAR(:AGENDA.FECHA,'YYYY-MM-DD')
    //         AND TO_CHAR(SEG_HORSEG,'HH12:MI PM') = :AGENDA.HORA
    //         AND TRUNC(SEG_FECGES) = TO_CHAR(:AGENDA.FECHAGEST,'YYYY-MM-DD');
    //       COMMIT;
    //       LIB$ALERTA ('MENSAJE','REGISTRO ACTUALIZADO.',NULL,NULL,NULL, T_RESPUESTA);
    //       :V_TIPOCAN       := NULL;
    //       :BPARAMAGE.V_CODMOT   := NULL;
    //       :BPARAMAGE.V_OBSERMOT := NULL;
    //       :BPARAMAGE.V_FECPROXSEG  := NULL;
    //       :BPARAMAGE.V_HORAPROXSEG := NULL;
    //       GO_BLOCK('AGENDA');
    //       EXECUTE_QUERY;
    //       GO_BLOCK('BPARAMAGE');
    //       HIDE_VIEW('PNVOSEGUI');
    //    END IF;
    // ELSE
    //  IF :V_CODMOT = '001' AND :V_TIPOCAN = 'CA'THEN
    //       UPDATE CMTSEGXTER
    //         SET SEG_ESTSEG = :V_TIPOCAN
    //            ,SEG_CODMOT = :BPARAMAGE.V_CODMOT
    //            ,SEG_OBSMOT = :BPARAMAGE.V_OBSERMOT
    //            ,SEG_FECUPD = SYSDATE
    //       WHERE SEG_NITTER = :AGENDA.NITTER
    //         AND TRUNC(SEG_FECSEG) = TO_CHAR(:AGENDA.FECHA,'YYYY-MM-DD')
    //         AND TO_CHAR(SEG_HORSEG,'HH12:MI PM') = :AGENDA.HORA
    //         AND TRUNC(SEG_FECGES) = TO_CHAR(:AGENDA.FECHAGEST,'YYYY-MM-DD');
    //       --             
    //       COMMIT;
    //       ---
    //       -- AGENCA
    //       --NVO CAMBIO PARA QUE CUANDO CANCELE UNA COMPROMISO EN LA AGENDA Y NO DESEA CREAR UN SEGUIMIENTO NUEVO CREE EL SEGUIMIENTO Q CUMPLIO.
    //       --RT. 2008-04-21 
    //       ---
    //       IF  :V_TIPOCAN = 'CA' AND :V_CODMOT = '001' THEN --CANCELACION X GESTION REALIZADA
    //         IF FRM$ALERTA_SINO ('ESTA SEGURO QUE DESEA CREAR UN NUEVO COMPROMISO AL CLIENTE '||:AGENDA.NOMBRE||' '||'?') = 1 THEN 
    //           IF :V_FECPROXSEG IS NOT NULL OR :V_HORAPROXSEG IS NOT NULL THEN
    //            --INSERTAR REGISTRO DEPENDIENDO SU CANCELACION DEL COMPROMISO PARA ENLAZAR LOS TIPOS DE GESTIÓN
    //              IF :AGENDA.TIPOCOMPRO = '001' THEN--LLAMADA --GESTION = LLAMADA DE MANTENIMIENTO '004'
    //                 INSERT INTO CMTSEGXTER
    //                    (SEG_NITTER, SEG_TIPGES, SEG_FECGES, SEG_FECSEG, SEG_HORSEG, SEG_ESTSEG, SEG_OBSERVA, SEG_USUARIO, SEG_COMER, SEG_TIPCOMP,  SEG_COMTER, SEG_CODUNI)
    //                  VALUES
    //                  ( :AGENDA.NITTER, '004', SYSDATE, :V_FECPROXSEG, :V_HORAPROXSEG, 'GR', 'REGISTRO AUTOMATICO DE CUMPLIMIENTO DEL COMPROMISO CON LAS SIGUIENTES OBSERVACIONES: '||' '||:BPARAMAGE.V_OBSERMOT, USER, :AGENDA.CODCOMERCIAL, :V_TIPCOMPRPROXSEG, :AGENDA.CODCOMERCIAL, :this.PARAMETER.get("PUNIDAD"));
    //                  COMMIT;
    //              ELSIF :AGENDA.TIPOCOMPRO = '002' THEN --VISITA
    //                 INSERT INTO CMTSEGXTER
    //                    (SEG_NITTER, SEG_TIPGES, SEG_FECGES, SEG_FECSEG, SEG_HORSEG, SEG_ESTSEG, SEG_OBSERVA, SEG_USUARIO, SEG_COMER, SEG_TIPCOMP,  SEG_COMTER, SEG_CODUNI)
    //                 VALUES
    //                   ( :AGENDA.NITTER, '002', SYSDATE, :V_FECPROXSEG, :V_HORAPROXSEG, 'GR', 'REGISTRO AUTOMATICO DE CUMPLIMIENTO DEL COMPROMISO CON LAS SIGUIENTES OBSERVACIONES: '||' '||:BPARAMAGE.V_OBSERMOT, USER, :AGENDA.CODCOMERCIAL, :V_TIPCOMPRPROXSEG, :AGENDA.CODCOMERCIAL, :this.PARAMETER.get("PUNIDAD"));
    //                 COMMIT;
    //              ELSIF :AGENDA.TIPOCOMPRO = '003' THEN --CORREO
    //                INSERT INTO CMTSEGXTER
    //                    (SEG_NITTER, SEG_TIPGES, SEG_FECGES, SEG_FECSEG, SEG_HORSEG, SEG_ESTSEG, SEG_OBSERVA, SEG_USUARIO, SEG_COMER, SEG_TIPCOMP,  SEG_COMTER, SEG_CODUNI)
    //                  VALUES
    //                  ( :AGENDA.NITTER, '004', SYSDATE, :V_FECPROXSEG, :V_HORAPROXSEG, 'GR', 'REGISTRO AUTOMATICO DE CUMPLIMIENTO DEL COMPROMISO CON LAS SIGUIENTES OBSERVACIONES: '||' '||:BPARAMAGE.V_OBSERMOT, USER, :AGENDA.CODCOMERCIAL, :V_TIPCOMPRPROXSEG, :AGENDA.CODCOMERCIAL, :this.PARAMETER.get("PUNIDAD"));
    //                  COMMIT;
    //              END IF;
    //              LIB$ALERTA ('MENSAJE','REGISTRO ACTUALIZADO EN LA AGENDA Y CREACIÓN DE SEGUIMIENTO AUTOMÁTICO DE LA GESTIÓN REALIZADA .',NULL,NULL,NULL, T_RESPUESTA);
    //           END IF;
    //          COMMIT;
    //           LIB$ALERTA ('MENSAJE','REGISTRO ACTUALIZADO EN LA AGENDA.',NULL,NULL,NULL, T_RESPUESTA);
    //         ELSE
    //            --INSERTAR REGISTRO DEPENDIENDO SU CANCELACION DEL COMPROMISO PARA ENLAZAR LOS TIPOS DE GESTIÓN SIN IMPORTAR SI EL COMERCIAL DESEA CREAR UN NUEVO COMPROMISO
    //            IF :AGENDA.TIPOCOMPRO = '001' THEN--LLAMADA --GESTION = LLAMADA DE MANTENIMIENTO '004'
    //                INSERT INTO CMTSEGXTER
    //                      (SEG_NITTER, SEG_TIPGES, SEG_FECGES, SEG_FECSEG, SEG_HORSEG, SEG_ESTSEG, SEG_OBSERVA, SEG_USUARIO, SEG_COMER, SEG_TIPCOMP,  SEG_COMTER, SEG_CODMOT, SEG_OBSMOT, SEG_CODUNI)
    //                VALUES
    //                      (:AGENDA.NITTER, '004', :AGENDA.FECHA, :AGENDA.FECHA, :AGENDA.FECHA, 'CA', 'REGISTRO AUTOMATICO. OPCION SIN NUEVO COMPROMISO: '||' '||:BPARAMAGE.V_OBSERMOT, USER, :AGENDA.CODCOMERCIAL, :AGENDA.TIPOCOMPRO, :AGENDA.CODCOMERCIAL, '001', 'REGISTRO AUTOMATICO DE CUMPLIMIENTO DEL COMPROMISO', :this.PARAMETER.get("PUNIDAD"));
    //            ELSIF :AGENDA.TIPOCOMPRO = '002' THEN --VISITA
    //                INSERT INTO CMTSEGXTER
    //                      (SEG_NITTER, SEG_TIPGES, SEG_FECGES, SEG_FECSEG, SEG_HORSEG, SEG_ESTSEG, SEG_OBSERVA, SEG_USUARIO, SEG_COMER, SEG_TIPCOMP,  SEG_COMTER, SEG_CODMOT, SEG_OBSMOT, SEG_CODUNI)
    //                 VALUES
    //                      (:AGENDA.NITTER, '002', :AGENDA.FECHA, :AGENDA.FECHA, :AGENDA.FECHA, 'CA', 'REGISTRO AUTOMATICO. OPCION SIN NUEVO COMPROMISO: '||' '||:BPARAMAGE.V_OBSERMOT, USER, :AGENDA.CODCOMERCIAL, :AGENDA.TIPOCOMPRO, :AGENDA.CODCOMERCIAL, '001', 'REGISTRO AUTOMATICO DE CUMPLIMIENTO DEL COMPROMISO', :this.PARAMETER.get("PUNIDAD"));
    //            ELSIF :AGENDA.TIPOCOMPRO = '003' THEN --CORREO
    //              INSERT INTO CMTSEGXTER
    //                      (SEG_NITTER, SEG_TIPGES, SEG_FECGES, SEG_FECSEG, SEG_HORSEG, SEG_ESTSEG, SEG_OBSERVA, SEG_USUARIO, SEG_COMER, SEG_TIPCOMP,  SEG_COMTER, SEG_CODMOT, SEG_OBSMOT, SEG_CODUNI)
    //                VALUES
    //                      (:AGENDA.NITTER, '004', :AGENDA.FECHA, :AGENDA.FECHA, :AGENDA.FECHA, 'CA', 'REGISTRO AUTOMATICO. OPCION SIN NUEVO COMPROMISO: '||' '||:BPARAMAGE.V_OBSERMOT, USER, :AGENDA.CODCOMERCIAL, :AGENDA.TIPOCOMPRO, :AGENDA.CODCOMERCIAL, '001', 'REGISTRO AUTOMATICO DE CUMPLIMIENTO DEL COMPROMISO', :this.PARAMETER.get("PUNIDAD"));
    //            END IF;
    //            COMMIT;
    //            LIB$ALERTA ('MENSAJE','REGISTRO ACTUALIZADO EN LA AGENDA Y CREACIÓN DE SEGUIMIENTO AUTOMÁTICO DE LA GESTIÓN REALIZADA EN ESTADO CANCELADO. OPCIÓN DE NO INSERTAR UN NUEVO COMPROMISO.',NULL,NULL,NULL, T_RESPUESTA);
    //            --
    //         END IF; 
    //       END IF;
    //       :V_TIPOCAN           := NULL;
    //       :BPARAMAGE.V_CODMOT      := NULL;
    //       :BPARAMAGE.V_OBSERMOT    := NULL;
    //       :BPARAMAGE.V_FECPROXSEG  := NULL;
    //       :BPARAMAGE.V_HORAPROXSEG := NULL;
    //       GO_BLOCK('AGENDA');
    //       EXECUTE_QUERY;
    //       GO_BLOCK('BPARAMAGE');
    //       HIDE_VIEW('PNVOSEGUI');
    //  ELSIF :V_CODMOT = '001' AND :V_TIPOCAN = 'AP' THEN
    //    SHOW_VIEW('PNVOSEGUI');
    //  ELSIF :V_CODMOT <> '001' THEN
    //   UPDATE CMTSEGXTER
    //         SET SEG_ESTSEG = :V_TIPOCAN
    //            ,SEG_CODMOT = :BPARAMAGE.V_CODMOT
    //            ,SEG_OBSMOT = :BPARAMAGE.V_OBSERMOT
    //            ,SEG_FECUPD = SYSDATE
    //       WHERE SEG_NITTER = :AGENDA.NITTER
    //         AND TRUNC(SEG_FECSEG) = TO_CHAR(:AGENDA.FECHA,'YYYY-MM-DD')
    //         AND TO_CHAR(SEG_HORSEG,'HH12:MI PM') = :AGENDA.HORA
    //         AND TRUNC(SEG_FECGES) = TO_CHAR(:AGENDA.FECHAGEST,'YYYY-MM-DD');
    //       COMMIT;
    //       LIB$ALERTA ('MENSAJE','REGISTRO ACTUALIZADO.',NULL,NULL,NULL, T_RESPUESTA);
    //       :V_TIPOCAN       := NULL;
    //       :BPARAMAGE.V_CODMOT   := NULL;
    //       :BPARAMAGE.V_OBSERMOT := NULL;
    //       :BPARAMAGE.V_FECPROXSEG  := NULL;
    //       :BPARAMAGE.V_HORAPROXSEG := NULL;
    //       GO_BLOCK('AGENDA');
    //       EXECUTE_QUERY;
    //       GO_BLOCK('BPARAMAGE');
    //       HIDE_VIEW('PNVOSEGUI');
    //   END IF;
    // END IF;
    // END;
    //#endregion
    async CMFMENU_bparamage_vbtonCreareg_whenButtonPressed() {
        console.log("Entering CMFMENU_bparamage_vbtonCreareg_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_CORREO: null = null;
        let V_EXTERXCOM: number = null;
        let V_EXTERSEC: number = null;
        if (this.BPARAMAGE.V_CODMOT != "001") {
            if ((this.BPARAMAGE.V_CODMOT == "003" && this.AGENDA.INVITA == "S")) {
                // construct payload
                let payload1 = new Map();
                // payload1.V_TIPOCAN = : V_TIPOCAN;
                // payload1.V_CODMOT = : V_CODMOT;
                // payload1.V_OBSERMOT = : V_OBSERMOT;
                // payload1.NITTER = : NITTER;
                // payload1.FECHA = : FECHA;
                // payload1.HORA = : HORA;
                // payload1.FECHAGEST = : FECHAGEST;
                // call REST API
                const result1 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query1", payload1);
                // CMFMENU_LIB$ALERTA("MENSAJE", "REGISTRO ACTUALIZADO. SE ENVÍA CORREO DE AVISO AL COMERCIAL.", null, null, null, T_RESPUESTA);
                // construct payload
                let payload3 = new Map();
                payload3.set("CODCOMERCIAL", this.AGENDA.CODCOMERCIAL);
                payload3.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
                // call REST API
                const result3 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query3", payload3);
                // get values from result
                V_CORREO = result3[0].get("V_CORREO");
                if (result3 == null || result3.length == 0) {

                    V_CORREO = null;
                }

                // CMFMENU_PUP_ENVIO_CORREO4(AGENDA.CODCOMERCIAL, V_CORREO);
                this.BPARAMAGE.V_TIPOCAN = null;
                this.BPARAMAGE.V_CODMOT = null;
                this.BPARAMAGE.V_OBSERMOT = null;
                this.BPARAMAGE.V_FECPROXSEG = null;
                this.BPARAMAGE.V_HORAPROXSEG = null;
                this.oracleFormsBuiltins.go_block("AGENDA");
                this.oracleFormsBuiltins.execute_query();
            }
            else if ((this.BPARAMAGE.V_CODMOT == "002" && this.BPARAMAGE.V_TIPOCAN == "CA")) {
                // if (FRM$ALERTA_SINO("SE VA A ACTULIZAR EL TERCERO " + AGENDA.NOMBRE + " " + "COMO CLIENTE DESCARTADO ESTA SEGURO?") == 1) {
                //     // construct payload
                //     let payload4 = new Map();
                //     payload4.NITTER = : NITTER;
                //     // call REST API
                //     const result4 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query4", payload4);
                //     // construct payload
                //     let payload6 = new Map();
                //     payload6.V_TIPOCAN = : V_TIPOCAN;
                //     payload6.V_CODMOT = : V_CODMOT;
                //     payload6.V_OBSERMOT = : V_OBSERMOT;
                //     payload6.NITTER = : NITTER;
                //     payload6.FECHA = : FECHA;
                //     payload6.HORA = : HORA;
                //     payload6.FECHAGEST = : FECHAGEST;
                //     // call REST API
                //     const result6 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query6", payload6);
                //     // construct payload
                //     let payload7 = new Map();
                //     payload7.V_TIPOCAN = : V_TIPOCAN;
                //     payload7.V_CODMOT = : V_CODMOT;
                //     payload7.V_OBSERMOT = : V_OBSERMOT;
                //     payload7.NITTER = : NITTER;
                //     payload7.CODCOMERCIAL = : CODCOMERCIAL;
                //     payload7.PUNIDAD = : PUNIDAD;
                //     // call REST API
                //     const result7 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query7", payload7);
                //     // construct payload
                //     let payload8 = new Map();
                //     payload8.set("NITTER", AGENDA.NITTER);
                //     payload8.set("CODCOMERCIAL", AGENDA.CODCOMERCIAL);
                //     // call REST API
                //     const result8 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query8", payload8);
                //     // get values from result
                //     V_EXTERXCOM = result8[0].get("V_EXTERXCOM");
                //     if (result8 == null || result8.length == 0) {

                //         // construct payload
                //         let payload9 = new Map();
                //         payload9.set("NITTER", AGENDA.NITTER);
                //         payload9.set("CODCOMERCIAL", AGENDA.CODCOMERCIAL);
                //         // call REST API
                //         const result9 = await Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query9", payload9);
                //         // get values from result
                //         V_EXTERSEC = result9[0].get("V_EXTERSEC");
                //         if (result9 == null || result9.length == 0) {

                //             // CMFMENU_LIB$DTNERFRMA("NO SE PUDO DESVINCULAR EL CLIENTE DEL COMERCIAL");
                //         }

                //     }

                //     // construct payload
                //     let payload10 = new Map();
                //     payload10.set("NITTER", AGENDA.NITTER);
                //     payload10.set("CODCOMERCIAL", AGENDA.CODCOMERCIAL);
                //     // call REST API
                //     let result10 = Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query10", payload10);
                //     // get values from result
                //     V_EXTERSEC = result10[0].get("V_EXTERSEC");
                //     if (result10 == null || result10.length == 0) {

                //         // CMFMENU_LIB$DTNERFRMA("NO SE PUDO DESVINCULAR EL CLIENTE DEL COMERCIAL");
                //     }

                //     // construct payload
                //     let payload11 = new Map();
                //     payload11.CODCOMERCIAL = : AGENDA.CODCOMERCIAL;
                //     payload11.NITTER = : AGENDA.NITTER;
                //     // call REST API
                //     let result11 = Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query11", payload11);
                //     // CMFMENU_LIB$ALERTA("MENSAJE", "REGISTRO ACTUALIZADO CON MOTIVO CANCELACIÓN DEFINITIVA.", null, null, null, T_RESPUESTA);
                //     this.BPARAMAGE.V_TIPOCAN = null;
                //     this.BPARAMAGE.V_CODMOT = null;
                //     this.BPARAMAGE.V_OBSERMOT = null;
                //     this.BPARAMAGE.V_FECPROXSEG = null;
                //     this.BPARAMAGE.V_HORAPROXSEG = null;
                //     this.oracleFormsBuiltins.go_block("AGENDA");
                //     this.oracleFormsBuiltins.execute_query();
                //     this.oracleFormsBuiltins.go_block("BPARAMAGE");
                //     this.oracleFormsBuiltins.hide_view("PNVOSEGUI");
                // }
                // else {
                //     // CMFMENU_LIB$DTNERFRMA("PROCESO CANCELADO POR EL USUARIO");
                // }
            }
            else if ((this.BPARAMAGE.V_CODMOT != null)) {
                // construct payload
                let payload13 = new Map();
                // payload13.V_TIPOCAN = : V_TIPOCAN;
                // payload13.V_CODMOT = : V_CODMOT;
                // payload13.V_OBSERMOT = : V_OBSERMOT;
                // payload13.NITTER = : NITTER;
                // payload13.FECHA = : FECHA;
                // payload13.HORA = : HORA;
                // payload13.FECHAGEST = : FECHAGEST;
                // call REST API
                let result13 = Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query13", payload13);
                // CMFMENU_LIB$ALERTA("MENSAJE", "REGISTRO ACTUALIZADO.", null, null, null, T_RESPUESTA);
                this.BPARAMAGE.V_TIPOCAN = null;
                this.BPARAMAGE.V_CODMOT = null;
                this.BPARAMAGE.V_OBSERMOT = null;
                this.BPARAMAGE.V_FECPROXSEG = null;
                this.BPARAMAGE.V_HORAPROXSEG = null;
                this.oracleFormsBuiltins.go_block("AGENDA");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("BPARAMAGE");
                this.oracleFormsBuiltins.hide_view("PNVOSEGUI");
            }
        }
        else {
            if ((this.BPARAMAGE.V_CODMOT == "001" && this.BPARAMAGE.V_TIPOCAN == "CA")) {
                // construct payload
                let payload15 = new Map();
                // payload15.V_TIPOCAN = : V_TIPOCAN;
                // payload15.V_CODMOT = : V_CODMOT;
                // payload15.V_OBSERMOT = : V_OBSERMOT;
                // payload15.NITTER = : NITTER;
                // payload15.FECHA = : FECHA;
                // payload15.HORA = : HORA;
                // payload15.FECHAGEST = : FECHAGEST;
                // call REST API
                let result15 = Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query15", payload15);
                if ((this.BPARAMAGE.V_TIPOCAN == "CA" && this.BPARAMAGE.V_CODMOT == "001")) {
                    // if (FRM$ALERTA_SINO("ESTA SEGURO QUE DESEA CREAR UN NUEVO COMPROMISO AL CLIENTE " + AGENDA.NOMBRE + " " + "?") == 1) {
                    //     if (((V_FECPROXSEG != null) || (V_HORAPROXSEG != null))) {
                    //         if (AGENDA.TIPOCOMPRO == "001") {
                    //             // construct payload
                    //             let payload17 = new Map();
                    //             payload17.NITTER = : AGENDA.NITTER;
                    //             payload17.V_FECPROXSEG = : V_FECPROXSEG;
                    //             payload17.V_HORAPROXSEG = : V_HORAPROXSEG;
                    //             payload17.CODCOMERCIAL = : AGENDA.CODCOMERCIAL;
                    //             payload17.V_TIPCOMPRPROXSEG = : V_TIPCOMPRPROXSEG;
                    //             payload17.PUNIDAD = : this.PARAMETER.get("PUNIDAD");
                    //             // call REST API
                    //             let result17 = Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query17", payload17);
                    //         }
                    //         else if (AGENDA.TIPOCOMPRO == "002") {
                    //             // construct payload
                    //             let payload19 = new Map();
                    //             payload19.NITTER = : AGENDA.NITTER;
                    //             payload19.V_FECPROXSEG = : V_FECPROXSEG;
                    //             payload19.V_HORAPROXSEG = : V_HORAPROXSEG;
                    //             payload19.CODCOMERCIAL = : AGENDA.CODCOMERCIAL;
                    //             payload19.V_TIPCOMPRPROXSEG = : V_TIPCOMPRPROXSEG;
                    //             payload19.PUNIDAD = : this.PARAMETER.get("PUNIDAD");
                    //             // call REST API
                    //             let result19 = Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query19", payload19);
                    //         }
                    //         else if (AGENDA.TIPOCOMPRO == "003") {
                    //             // construct payload
                    //             let payload21 = new Map();
                    //             payload21.NITTER = : AGENDA.NITTER;
                    //             payload21.V_FECPROXSEG = : V_FECPROXSEG;
                    //             payload21.V_HORAPROXSEG = : V_HORAPROXSEG;
                    //             payload21.CODCOMERCIAL = : AGENDA.CODCOMERCIAL;
                    //             payload21.V_TIPCOMPRPROXSEG = : V_TIPCOMPRPROXSEG;
                    //             payload21.PUNIDAD = : this.PARAMETER.get("PUNIDAD");
                    //             // call REST API
                    //             let result21 = Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query21", payload21);
                    //         }
                    //         // CMFMENU_LIB$ALERTA("MENSAJE", "REGISTRO ACTUALIZADO EN LA AGENDA Y CREACIÓN DE SEGUIMIENTO AUTOMÁTICO DE LA GESTIÓN REALIZADA .", null, null, null, T_RESPUESTA);
                    //     }
                    //     // CMFMENU_LIB$ALERTA("MENSAJE", "REGISTRO ACTUALIZADO EN LA AGENDA.", null, null, null, T_RESPUESTA);
                    // }
                    // else {
                    //     if (AGENDA.TIPOCOMPRO == "001") {
                    //         // construct payload
                    //         let payload24 = new Map();
                    //         payload24.NITTER = : AGENDA.NITTER;
                    //         payload24.FECHA = : AGENDA.FECHA;
                    //         payload24.CODCOMERCIAL = : AGENDA.CODCOMERCIAL;
                    //         payload24.TIPOCOMPRO = : AGENDA.TIPOCOMPRO;
                    //         payload24.PUNIDAD = : this.PARAMETER.get("PUNIDAD");
                    //         // call REST API
                    //         let result24 = Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query24", payload24);
                    //     }
                    //     else if (AGENDA.TIPOCOMPRO == "002") {
                    //         // construct payload
                    //         let payload25 = new Map();
                    //         payload25.NITTER = : AGENDA.NITTER;
                    //         payload25.FECHA = : AGENDA.FECHA;
                    //         payload25.CODCOMERCIAL = : AGENDA.CODCOMERCIAL;
                    //         payload25.TIPOCOMPRO = : AGENDA.TIPOCOMPRO;
                    //         payload25.PUNIDAD = : this.PARAMETER.get("PUNIDAD");
                    //         // call REST API
                    //         let result25 = Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query25", payload25);
                    //     }
                    //     else if (AGENDA.TIPOCOMPRO == "003") {
                    //         // construct payload
                    //         let payload26 = new Map();
                    //         payload26.NITTER = : AGENDA.NITTER;
                    //         payload26.FECHA = : AGENDA.FECHA;
                    //         payload26.CODCOMERCIAL = : AGENDA.CODCOMERCIAL;
                    //         payload26.TIPOCOMPRO = : AGENDA.TIPOCOMPRO;
                    //         payload26.PUNIDAD = : this.PARAMETER.get("PUNIDAD");
                    //         // call REST API
                    //         let result26 = Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query26", payload26);
                    //     }
                    //     // CMFMENU_LIB$ALERTA("MENSAJE", "REGISTRO ACTUALIZADO EN LA AGENDA Y CREACIÓN DE SEGUIMIENTO AUTOMÁTICO DE LA GESTIÓN REALIZADA EN ESTADO CANCELADO. OPCIÓN DE NO INSERTAR UN NUEVO COMPROMISO.", null, null, null, T_RESPUESTA);
                    // }
                }
                this.BPARAMAGE.V_TIPOCAN = null;
                this.BPARAMAGE.V_CODMOT = null;
                this.BPARAMAGE.V_OBSERMOT = null;
                this.BPARAMAGE.V_FECPROXSEG = null;
                this.BPARAMAGE.V_HORAPROXSEG = null;
                this.oracleFormsBuiltins.go_block("AGENDA");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("BPARAMAGE");
                this.oracleFormsBuiltins.hide_view("PNVOSEGUI");
            }
            else if ((this.BPARAMAGE.V_CODMOT == "001" && this.BPARAMAGE.V_TIPOCAN == "AP")) {
                this.oracleFormsBuiltins.show_view("PNVOSEGUI");
            }
            else if (this.BPARAMAGE.V_CODMOT != "001") {
                // construct payload
                let payload28 = new Map();
                // payload28.V_TIPOCAN = : V_TIPOCAN;
                // payload28.V_CODMOT = : V_CODMOT;
                // payload28.V_OBSERMOT = : V_OBSERMOT;
                // payload28.NITTER = : NITTER;
                // payload28.FECHA = : FECHA;
                // payload28.HORA = : HORA;
                // payload28.FECHAGEST = : FECHAGEST;
                // call REST API
                let result28 = Rest.post("/cmfmenu_bparamage/cmfmenu_bparamage_vbtoncreareg_whenbuttonpressed_query28", payload28);
                // CMFMENU_LIB$ALERTA("MENSAJE", "REGISTRO ACTUALIZADO.", null, null, null, T_RESPUESTA);
                this.BPARAMAGE.V_TIPOCAN = null;
                this.BPARAMAGE.V_CODMOT = null;
                this.BPARAMAGE.V_OBSERMOT = null;
                this.BPARAMAGE.V_FECPROXSEG = null;
                this.BPARAMAGE.V_HORAPROXSEG = null;
                this.oracleFormsBuiltins.go_block("AGENDA");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("BPARAMAGE");
                this.oracleFormsBuiltins.hide_view("PNVOSEGUI");
            }
        }
        console.log("Exiting CMFMENU_bparamage_vbtonCreareg_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON    NUMBER;
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  LIB$ALERTA('MENSAJE','ESTA SEGURO DE ACTUALIZAR EL SEGUIMIENTO?'
    //           ,'ACEPTAR CAMBIOS','CANCELAR',NULL, VBOTON);
    //     IF VBOTON = 1 THEN --ACEPTAR LOS CAMBIOS
    //        UPDATE CMTSEGXTER
    //         SET SEG_ESTSEG = :V_TIPOCAN
    //            ,SEG_CODMOT = :SEG_CODMOT
    //            ,SEG_OBSMOT = :SEG_OBSMOT
    //            ,SEG_FECUPD = SYSDATE
    //       WHERE SEG_NITTER = :SEG_NITTER
    //         AND TRUNC(SEG_FECSEG) = TO_CHAR(:SEG_FECSEG,'YYYY-MM-DD')
    //         AND TO_CHAR(SEG_HORSEG,'HH12:MI PM') = TO_CHAR(:SEG_HORSEG,'HH12:MI PM')
    //         AND TRUNC(SEG_FECGES) = TO_CHAR(:SEG_FECGES,'YYYY-MM-DD');
    //      COMMIT;
    //      COMMIT_FORM;   
    //      LIB$ALERTA ('MENSAJE','REGISTRO ACTUALIZADO.',NULL,NULL,NULL, T_RESPUESTA);
    //    :V_TIPOCAN       := NULL;
    //    :SEG_CODMOT := NULL;
    //    :SEG_OBSMOT := NULL;
    //     ELSIF VBOTON = 2 THEN --CANCELAR PROCESO DE ACTUALIZACIÓN
    //      LIB$ALERTA('MENSAJE', 'PROCESO CANCELADO POR EL USUARIO.', NULL, NULL,NULL, T_RESPUESTA);
    //     END IF;
    // END;        
    //#endregion
    async CMFMENU_bparasegxter_vActsegxter_whenButtonPressed() {
        console.log("Entering CMFMENU_bparasegxter_vActsegxter_whenButtonPressed");
        let VBOTON: number = null;
        let T_RESPUESTA: number = null;
        // CMFMENU_LIB$ALERTA("MENSAJE", "ESTA SEGURO DE ACTUALIZAR EL SEGUIMIENTO?", "ACEPTAR CAMBIOS", "CANCELAR", null, VBOTON);
        if (VBOTON == 1) {
            // construct payload
            let payload1 = new Map();
            // payload1.V_TIPOCAN = : V_TIPOCAN;
            // payload1.SEG_CODMOT = : SEG_CODMOT;
            // payload1.SEG_OBSMOT = : SEG_OBSMOT;
            // payload1.SEG_NITTER = : SEG_NITTER;
            // payload1.SEG_FECSEG = : SEG_FECSEG;
            // payload1.SEG_HORSEG = : SEG_HORSEG;
            // payload1.SEG_FECGES = : SEG_FECGES;
            // call REST API
            const result1 = await Rest.post("/cmfmenu_bparasegxter/cmfmenu_bparasegxter_vactsegxter_whenbuttonpressed_query1", payload1);
            this.oracleFormsBuiltins.commit_form();
            // CMFMENU_LIB$ALERTA("MENSAJE", "REGISTRO ACTUALIZADO.", null, null, null, T_RESPUESTA);
            // this.BPARASEGXTER.V_TIPOCAN = null;
            // this.BPARASEGXTER.SEG_CODMOT = null;
            // this.BPARASEGXTER.SEG_OBSMOT = null;
        }
        else if (VBOTON == 2) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "PROCESO CANCELADO POR EL USUARIO.", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CMFMENU_bparasegxter_vActsegxter_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    // IF :V_OPCSEGXTER = '1' THEN
    //  :V_TIPOCAN := 'AP';
    //   IF NOT LIB$PBLARLSTARG('CMTSEGXTER.SEG_CODMOT','GRMOTAPLA') THEN
    //      LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CMTSEGXTER.SEG_CODMOT.');
    //   END IF;
    // ELSE
    // --POBLAR LA LISTA DE CANCELACIONES
    //   :V_TIPOCAN := 'CA';
    //  IF NOT LIB$PBLARLSTARG('CMTSEGXTER.SEG_CODMOT','GRMOTCAN') THEN
    //      LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CMTSEGXTER.SEG_CODMOT.');
    //   END IF;  
    // END IF;
    // END;
    //#endregion
    async CMFMENU_bparasegxter_vOpcsegxter_whenRadioChanged() {
        console.log("Entering CMFMENU_bparasegxter_vOpcsegxter_whenRadioChanged");
        // if (V_OPCSEGXTER == "1") {
        //     this.BPARASEGXTER.V_TIPOCAN = "AP";
        //     if ((!LIB$PBLARLSTARG("CMTSEGXTER.SEG_CODMOT", "GRMOTAPLA"))) {
        //         // CMFMENU_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA CMTSEGXTER.SEG_CODMOT.");
        //     }
        // }
        // else {
        //     this.BPARASEGXTER.V_TIPOCAN = "CA";
        //     if ((!LIB$PBLARLSTARG("CMTSEGXTER.SEG_CODMOT", "GRMOTCAN"))) {
        //         // CMFMENU_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA CMTSEGXTER.SEG_CODMOT.");
        //     }
        // }
        console.log("Exiting CMFMENU_bparasegxter_vOpcsegxter_whenRadioChanged");
    }

    //#region PLSQL
    // BEGIN --IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN
    // IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP','TS','AP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN 
    //   :this.PARAMETER.get("PCODCOMER") := NULL;
    // END IF; END;
    //#endregion
    async CMFMENU_bdetctosrenocdt_preQuery() {
        console.log("Entering CMFMENU_bdetctosrenocdt_preQuery");
        if ((["GF", "GC", "GI", "JM", "AM", "SR", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1 && (this.PARAMETER.get("PCODCOMER") != null))) {
            this.PARAMETER.set("PCODCOMER", null);
        }
        console.log("Exiting CMFMENU_bdetctosrenocdt_preQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_NRENOCDT;
    // BEGIN
    // PQBD_COL_ADMVEN.PNRENOCDT(BK_DATA, :V_CLIRENCDT, :this.PARAMETER.get("PCODCOMER"), :this.PARAMETER.get("PPLAZU"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BDETCTOSRENOCDT');
    // END;
    //#endregion
    async CMFMENU_bdetctosrenocdt_queryProcedure() {
        console.log("Entering CMFMENU_bdetctosrenocdt_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PNRENOCDT(BK_DATA, V_CLIRENCDT, this.PARAMETER.get("PCODCOMER"), this.PARAMETER.get("PPLAZU"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BDETCTOSRENOCDT");
        console.log("Exiting CMFMENU_bdetctosrenocdt_queryProcedure");
    }

    //#region PLSQL
    // BEGIN
    //      SELECT INCDES DESCRI1
    //       INTO  :BDETCTOSRENOCDT.V_ACTIVO
    //     FROM   OPS$ACTIVOS.INC
    //     WHERE  INCOFC   = :BDETCTOS.OFICINA
    //     AND    INCTDOC  = :BDETCTOS.TIPOCTO
    //     AND    INCCOL   = :BDETCTOS.CONTRATO
    //     AND    ROWNUM   = 1;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :BDETCTOSRENOCDT.V_ACTIVO := NULL;
    // END;
    //#endregion
    async CMFMENU_bdetctosrenocdt_postQuery() {
        console.log("Entering CMFMENU_bdetctosrenocdt_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("OFICINA", this.BDETCTOS.OFICINA);
        payload1.set("TIPOCTO", this.BDETCTOS.TIPOCTO);
        payload1.set("CONTRATO", this.BDETCTOS.CONTRATO);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bdetctosrenocdt/cmfmenu_bdetctosrenocdt_postquery_query1", payload1);
        // get values from result
        this.BDETCTOSRENOCDT.V_ACTIVO = result1[0].get("BDETCTOSRENOCDT.V_ACTIVO");
        if (result1 == null || result1.length == 0) {

            this.BDETCTOSRENOCDT.V_ACTIVO = null;
        }

        console.log("Exiting CMFMENU_bdetctosrenocdt_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   LIB$MNSJEOCPDO('GENERANDO EL ARCHIVO PLANO',NULL);
    //   PPLABLOQ(NVL(:this.PARAMETER.get("PBLOACT"),'BESPE'),:BBOTONES.ARCHIVOB);
    //   LIB$MNSJEOCPDOOFF;
    //   GO_BLOCK(:this.PARAMETER.get("PBLOACT"));
    // END;
    //#endregion
    async CMFMENU_bbotones_aceptarb_whenButtonPressed() {
        console.log("Entering CMFMENU_bbotones_aceptarb_whenButtonPressed");
        // CMFMENU_LIB$MNSJEOCPDO("GENERANDO EL ARCHIVO PLANO", null);
        // CMFMENU_PPLABLOQ(this.PARAMETER.get("PBLOACT") == null ? "BESPE" : this.PARAMETER.get("PBLOACT"), BBOTONES.ARCHIVOB);
        // CMFMENU_LIB$MNSJEOCPDOOFF();
        this.oracleFormsBuiltins.go_block(this.PARAMETER.get("PBLOACT"));
        console.log("Exiting CMFMENU_bbotones_aceptarb_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK(:this.PARAMETER.get("PBLOACT"));
    // END;
    //#endregion
    async CMFMENU_bbotones_cancelarb_whenButtonPressed() {
        console.log("Entering CMFMENU_bbotones_cancelarb_whenButtonPressed");
        this.oracleFormsBuiltins.go_block(this.PARAMETER.get("PBLOACT"));
        console.log("Exiting CMFMENU_bbotones_cancelarb_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VCONDICION VARCHAR2 (1000);
    //  V_COMER VARCHAR2(3);
    //  VBOTON NUMBER;
    // BEGIN
    //  
    //   /*
    //  SELECT SUBSTR(DECODE(TERPER,'N',TERNOM||' '||TERAPE,NVL(TERAPE,TERNOM)),1,120) NOMBRE
    //  INTO :BBOTON_REA.TXT_NOMBRE
    //  FROM TER WHERE TERCOD = :BBOTON_REA.TXT_CEDU;*/
    // 
    //  
    // VCONDICION := 'CXT_NIT   = NVL('''||:BBOTON_REA.TXT_CEDU||''',CXT_NIT)
    //        AND CXT_CODIGO IN 
    //            (SELECT COM_CODIGO FROM SETCOMCIA WHERE COM_PLA = '''||:this.PARAMETER.get("PPLAZU")||''' UNION SELECT ''160'' FROM DUAL)';
    // SET_BLOCK_PROPERTY('SETTERXCOM',DEFAULT_WHERE,VCONDICION);
    // GO_BLOCK('SETTERXCOM');
    // EXECUTE_QUERY;
    // 
    // 
    // VCONDICION := 'COM_CODIGO   = '''||:SETTERXCOM.CXT_CODIGO||'''';
    // 
    // SET_BLOCK_PROPERTY('SETCOMCIA',DEFAULT_WHERE,VCONDICION);
    // GO_BLOCK('SETCOMCIA');
    // EXECUTE_QUERY;
    // 
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //   NULL;
    //   --LIB$ALERTA('MENSAJE','TERCERO '||:BBOTON_REA.TXT_CEDU||' NO EXISTE!', NULL, NULL, NULL, VBOTON);  
    // 
    // END;
    //#endregion
    async CMFMENU_bbotonRea_btnBusca_whenButtonPressed() {
        console.log("Entering CMFMENU_bbotonRea_btnBusca_whenButtonPressed");
        let VCONDICION: string = null;
        let V_COMER: string = null;
        let VBOTON: number = null;
        VCONDICION = "CXT_NIT   = NVL(" + this.BBOTON_REA.TXT_CEDU + ",CXT_NIT) AND CXT_CODIGO IN" + 
            "(SELECT COM_CODIGO FROM SETCOMCIA WHERE COM_PLA = ''" + this.PARAMETER.get("PPLAZU") + "'' UNION SELECT ''160'' FROM DUAL)";
        this.oracleFormsBuiltins.set_block_property("SETTERXCOM", "DEFAULT_WHERE", VCONDICION);
        this.oracleFormsBuiltins.go_block("SETTERXCOM");
        this.oracleFormsBuiltins.execute_query();
        VCONDICION = "COM_CODIGO   = ''" + this.SETTERXCOM.CXT_CODIGO + "''";
        this.oracleFormsBuiltins.set_block_property("SETCOMCIA", "DEFAULT_WHERE", VCONDICION);
        this.oracleFormsBuiltins.go_block("SETCOMCIA");
        this.oracleFormsBuiltins.execute_query();
        // if (result0 == null || result0.length == 0) {

        // }

        console.log("Exiting CMFMENU_bbotonRea_btnBusca_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //  SELECT SUBSTR(DECODE(TERPER,'N',TERNOM||' '||TERAPE,NVL(TERAPE,TERNOM)),1,120) NOMBRE
    //  INTO :BBOTON_REA.TXT_NOMBRE
    //  FROM TER WHERE TERCOD = :BBOTON_REA.TXT_CEDU;
    // EXCEPTION 
    // WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','TERCERO '||:BBOTON_REA.TXT_CEDU||' NO EXISTE!', NULL, NULL, NULL, VBOTON);  
    // END;
    //#endregion
    async CMFMENU_bbotonRea_txtCedu_postChange() {
        console.log("Entering CMFMENU_bbotonRea_txtCedu_postChange");
        let VBOTON: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TXT_CEDU", this.BBOTON_REA.TXT_CEDU);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bboton_rea/cmfmenu_bbotonrea_txtcedu_postchange_query1", payload1);
        // get values from result
        this.BBOTON_REA.TXT_NOMBRE = result1[0].get("BBOTON_REA.TXT_NOMBRE");
        if (result1 == null || result1.length == 0) {

            // CMFMENU_LIB$ALERTA("MENSAJE", "TERCERO " + BBOTON_REA.TXT_CEDU + " NO EXISTE!", null, null, null, VBOTON);
        }

        console.log("Exiting CMFMENU_bbotonRea_txtCedu_postChange");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_setcomciaNew_postTextItem() {
        console.log("Entering CMFMENU_setcomciaNew_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_setcomciaNew_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_setcomciaNew_whenNewItemInstance() {
        console.log("Entering CMFMENU_setcomciaNew_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_setcomciaNew_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CMTTIPNGXCOM DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTTIPNGXCOM_CUR IS      
    //     SELECT 1 FROM CMTTIPNGXCOM C     
    //     WHERE C.TIPNG_CODCOM = :SETCOMCIA_NEW.COM_CODIGO;
    //   --
    //   -- END CMTTIPNGXCOM DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN SETTERXCOM_NEW DETAIL DECLARE SECTION
    //   --
    //   CURSOR SETTERXCOM_NEW_CUR IS      
    //     SELECT 1 FROM SETTERXCOM S     
    //     WHERE S.CXT_CODIGO = :SETCOMCIA_NEW.COM_CODIGO;
    //   --
    //   -- END SETTERXCOM_NEW DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CMTTIPNGXCOM DETAIL PROGRAM SECTION
    //   --
    //   OPEN CMTTIPNGXCOM_CUR;     
    //   FETCH CMTTIPNGXCOM_CUR INTO DUMMY_DEFINE;     
    //   IF ( CMTTIPNGXCOM_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CMTTIPNGXCOM_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CMTTIPNGXCOM_CUR;
    //   --
    //   -- END CMTTIPNGXCOM DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN SETTERXCOM_NEW DETAIL PROGRAM SECTION
    //   --
    //   OPEN SETTERXCOM_NEW_CUR;     
    //   FETCH SETTERXCOM_NEW_CUR INTO DUMMY_DEFINE;     
    //   IF ( SETTERXCOM_NEW_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE SETTERXCOM_NEW_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE SETTERXCOM_NEW_CUR;
    //   --
    //   -- END SETTERXCOM_NEW DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CMFMENU_setcomciaNew_onCheckDeleteMaster() {
        console.log("Entering CMFMENU_setcomciaNew_onCheckDeleteMaster");
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
        console.log("Exiting CMFMENU_setcomciaNew_onCheckDeleteMaster");
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
    //   -- BEGIN CMTTIPNGXCOM DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:SETCOMCIA_NEW.COM_CODIGO IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('SETCOMCIA_NEW.SETCOMCIA_NEW_CMTTIPNGXCOM');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTTIPNGXCOM');   
    //   END IF;
    //   --
    //   -- END CMTTIPNGXCOM DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN SETTERXCOM_NEW DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:SETCOMCIA_NEW.COM_CODIGO IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('SETCOMCIA_NEW.SETCOMCIA_NEW_SETTERXCOM_NEW');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'SETTERXCOM_NEW');   
    //   END IF;
    //   --
    //   -- END SETTERXCOM_NEW DETAIL PROGRAM SECTION
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
    async CMFMENU_setcomciaNew_onPopulateDetails() {
        console.log("Entering CMFMENU_setcomciaNew_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.SETCOMCIA_NEW.COM_CODIGO != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("SETCOMCIA_NEW.SETCOMCIA_NEW_CMTTIPNGXCOM");
            // CMFMENU_QUERY_MASTER_DETAILS(REL_ID, "CMTTIPNGXCOM");
        }
        if ((this.SETCOMCIA_NEW.COM_CODIGO != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("SETCOMCIA_NEW.SETCOMCIA_NEW_SETTERXCOM_NEW");
            // CMFMENU_QUERY_MASTER_DETAILS(REL_ID, "SETTERXCOM_NEW");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CMFMENU_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CMFMENU_setcomciaNew_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    // BEGIN
    //  SELECT PLAZAS_DESCRI 
    //    INTO :SETCOMCIA_NEW.V_DESPLA
    //  FROM CMTPLAZAS WHERE PLAZAS_CODIGO = :SETCOMCIA_NEW.COM_PLA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :SETCOMCIA_NEW.V_DESPLA := NULL;
    // END;
    //#endregion
    async CMFMENU_setcomciaNew_postQuery() {
        console.log("Entering CMFMENU_setcomciaNew_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("COM_PLA", this.SETCOMCIA_NEW.COM_PLA);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_setcomcia_new/cmfmenu_setcomcianew_postquery_query1", payload1);
        // get values from result
        this.SETCOMCIA_NEW.V_DESPLA = result1[0].get("SETCOMCIA_NEW.V_DESPLA");
        if (result1 == null || result1.length == 0) {

            this.SETCOMCIA_NEW.V_DESPLA = null;
        }

        console.log("Exiting CMFMENU_setcomciaNew_postQuery");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('REF_PARAM.TXT_CIUDAD'); END;
    //#endregion
    async CMFMENU_refParam_tipoReferencia1_keyNextItem() {
        console.log("Entering CMFMENU_refParam_tipoReferencia1_keyNextItem");
        this.oracleFormsBuiltins.go_item("REF_PARAM.TXT_CIUDAD");
        console.log("Exiting CMFMENU_refParam_tipoReferencia1_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  NOM_ICO VARCHAR2(20);
    // BEGIN
    // 
    //     NOM_ICO := GET_ITEM_PROPERTY('BTN_CICLO',ICON_NAME);
    //     
    //     IF NOM_ICO = 'SMEXCEL' THEN
    //            DECLARE
    //            V_EQUIPO VARCHAR2(100);
    //            BEGIN
    //            -----------------------------
    //              BEGIN
    //              SELECT OSUSER
    //               INTO V_EQUIPO
    //               FROM OPS$AUDI.AUVSESION
    //                 WHERE USERNAME=USER
    //                AND ROWNUM=1;
    //              EXCEPTION
    //               WHEN OTHERS THEN NULL; 
    //              END;
    //            ----------------------------- 
    //              :PLANO.RUTA :='\\'||V_EQUIPO||'\COMPARTIDO\REFERIDOS_'||:TXT_ID||'.CSV';
    //              GO_BLOCK('PLANO');
    //              :TXT_BLOQUE := 'CMTREFER';
    //              LIB$AJUSTAVENTANA('WIN_PLANO',0,0);
    //            END;
    //     ELSE   
    //            ------------------------------------
    //            DECLARE
    //             VCONDICION VARCHAR2(80);
    //            BEGIN
    //              --SHOW_VIEW('PCIVI');
    //              LIB$AJUSTAVENTANA('WCIVI',0,0);
    //              SHOW_WINDOW('WCIVI');
    //              VCONDICION := 'SOBS_OFCSOL = '''||:TXT_OFSOL||''' AND SOBS_CODSOL = '''||:TXT_CODSOL||'''';
    //              --:TXT := VCONDICION;
    // 
    //              SET_BLOCK_PROPERTY('CRTSOLESTOBS',DEFAULT_WHERE,VCONDICION);
    //              GO_BLOCK('CRTSOLESTOBS');
    //              EXECUTE_QUERY;
    // 
    //            END;
    //            ------------------------------------
    //     END IF;
    // END;
    //#endregion
    async CMFMENU_refParam_btnCiclo_whenButtonPressed() {
        console.log("Entering CMFMENU_refParam_btnCiclo_whenButtonPressed");
        let NOM_ICO: string = null;
        NOM_ICO = this.oracleFormsBuiltins.get_item_property("BTN_CICLO", "ICON_NAME");
        if (NOM_ICO == "SMEXCEL") {
            {

                let V_EQUIPO: string = null;
                let result1 = [];
                try {

                    // construct payload
                    let payload1 = new Map();
                    // call REST API
                    const result1 = await Rest.post("/cmfmenu_ref_param/cmfmenu_refparam_btnciclo_whenbuttonpressed_query1", payload1);
                    // get values from result
                    V_EQUIPO = result1[0].get("V_EQUIPO");
                } catch (ex) {

                }

                // this.PLANO.RUTA = "\\" + V_EQUIPO + "\COMPARTIDO\REFERIDOS_" + TXT_ID + ".CSV";
                this.oracleFormsBuiltins.go_block("PLANO");
                this.REF_PARAM.TXT_BLOQUE = "CMTREFER";
                // CMFMENU_LIB$AJUSTAVENTANA("WIN_PLANO", 0, 0);
            }

        }
        else {
            {

                let VCONDICION: string = null;
                // CMFMENU_LIB$AJUSTAVENTANA("WCIVI", 0, 0);
                // this.oracleFormsBuiltins.show_window("WCIVI");
                // VCONDICION = "SOBS_OFCSOL = ''" + TXT_OFSOL + "'' AND SOBS_CODSOL = ''" + TXT_CODSOL + "''";
                this.oracleFormsBuiltins.set_block_property("CRTSOLESTOBS", "DEFAULT_WHERE", VCONDICION);
                this.oracleFormsBuiltins.go_block("CRTSOLESTOBS");
                this.oracleFormsBuiltins.execute_query();
            }

        }
        console.log("Exiting CMFMENU_refParam_btnCiclo_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :REF_PARAM.DES_COM := PUP_FUNOMBRE (:REF_PARAM.TXT_COMER, 'C');
    // 
    // 
    // SELECT REPLACE (UPPER(:REF_PARAM.DES_COM),UPPER('USUARIOS'),'COMERCIALES')
    //  INTO :REF_PARAM.DES_COM
    // FROM DUAL; END;
    //#endregion
    async CMFMENU_refParam_txtComer_whenValidateItem() {
        console.log("Entering CMFMENU_refParam_txtComer_whenValidateItem");
        // this.REF_PARAM.DES_COM = PUP_FUNOMBRE(this.REF_PARAM.TXT_COMER, "C");
        // construct payload
        let payload1 = new Map();
        payload1.set("DES_COM", this.REF_PARAM.DES_COM);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_ref_param/cmfmenu_refparam_txtcomer_whenvalidateitem_query1", payload1);
        // get values from result
        this.REF_PARAM.DES_COM = result1[0].get("REF_PARAM.DES_COM");
        console.log("Exiting CMFMENU_refParam_txtComer_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //                      
    //    PL_IDX             PARAMLIST;
    //    PL_NOMBRE          VARCHAR2(15) := 'PL_SOLICITUD';
    // BEGIN
    //     
    //  IF :DETALLE_REF.TXT_CODSOL  IS NOT NULL THEN
    //     PUP_SOLICITUDES(PL_NOMBRE, NULL, :DETALLE_REF.TXT_OFSOL, :DETALLE_REF.TXT_CODSOL, 'Q');
    //     PL_IDX  := GET_PARAMETER_LIST(PL_NOMBRE);
    //     IF NOT ID_NULL(PL_IDX) THEN
    //          CALL_FORM('CRFCDEGRL', "HIDE", "NO_REPLACE", "NO_QUERY_ONLY", PL_IDX);
    //     ELSE
    //         MESSAGE('ERROR EN LISTA DE PARÁMETROS');
    //     END IF;
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_refParam_btnSoli_whenButtonPressed() {
        console.log("Entering CMFMENU_refParam_btnSoli_whenButtonPressed");
        let PL_IDX: number = null;
        let PL_NOMBRE: string = 'PL_SOLICITUD';
        if ((this.DETALLE_REF.TXT_CODSOL != null)) {
            // CMFMENU_PUP_SOLICITUDES(PL_NOMBRE, null, DETALLE_REF.TXT_OFSOL, DETALLE_REF.TXT_CODSOL, "Q");
            PL_IDX = this.oracleFormsBuiltins.get_parameter_list(PL_NOMBRE);
            if ((!this.oracleFormsBuiltins.id_null(PL_IDX))) {
                this.oracleFormsBuiltins.call_form("CRFCDEGRL", "HIDE", "NO_REPLACE", "NO_QUERY_ONLY", PL_IDX);
            }
            else {
                this.oracleFormsBuiltins.message("ERROR EN LISTA DE PARÁMETROS");
            }
        }
        console.log("Exiting CMFMENU_refParam_btnSoli_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_WINDOW('WCIVI');
    // GO_ITEM('DETALLE_REF.TXT_BEN'); END;
    //#endregion
    async CMFMENU_refParam_btnCierra_whenButtonPressed() {
        console.log("Entering CMFMENU_refParam_btnCierra_whenButtonPressed");
        this.oracleFormsBuiltins.hide_window("WCIVI");
        this.oracleFormsBuiltins.go_item("DETALLE_REF.TXT_BEN");
        console.log("Exiting CMFMENU_refParam_btnCierra_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :RG_FECHAS = 'R' THEN
    //    SET_ITEM_PROPERTY('FE1', "VISIBLE", "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('FE1', "ENTERABLE", "PROPERTY_TRUE");
    //    --SET_ITEM_PROPERTY('FE2', POSITION, 190,33);
    //   ELSIF :RG_FECHAS = 'H' THEN
    //    SET_ITEM_PROPERTY('FE1', "VISIBLE", "PROPERTY_FALSE");
    //    --SET_ITEM_PROPERTY('FE2', POSITION, 56, 33); 
    //   END IF; END;
    //#endregion
    async CMFMENU_refParam_rgFechas_whenRadioChanged() {
        console.log("Entering CMFMENU_refParam_rgFechas_whenRadioChanged");
        // if (RG_FECHAS == "R") {
        //     this.oracleFormsBuiltins.set_item_property("FE1", "VISIBLE", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("FE1", "ENTERABLE", "PROPERTY_TRUE");
        // }
        // else if (RG_FECHAS == "H") {
        //     this.oracleFormsBuiltins.set_item_property("FE1", "VISIBLE", "PROPERTY_FALSE");
        // }
        console.log("Exiting CMFMENU_refParam_rgFechas_whenRadioChanged");
    }

    //#region PLSQL
    // DECLARE
    //  NOM_ICO VARCHAR2(20);
    // BEGIN
    // 
    //   NOM_ICO := GET_ITEM_PROPERTY('BTN_LIMPIAR',ICON_NAME);
    //   IF NOM_ICO = 'CIRCLE' THEN
    //    -----------------------LIMPIAR
    //    :REF_PARAM.TXT_ID := '';
    //    :REF_PARAM.FE1 := '';
    //    :REF_PARAM.FE2 := '';
    //    :REF_PARAM.TXT_ORIGEN := '';
    //    :REF_PARAM.TXT_CIUDAD := '';
    //    :REF_PARAM.TXT_COMER := '';
    //    :REF_PARAM.DES_COM := '';
    //    :REF_PARAM.DIS_NOMBRE := '';
    //    
    //    IF GET_ITEM_PROPERTY('BTN_BUSCAREF',ICON_NAME) = 'ARROW7B' THEN
    //     HIDE_VIEW ('DET_REFER');
    //     GO_ITEM ('CMTREFER.REF_NITREF');
    //     SET_ITEM_PROPERTY ('BTN_BUSCAREF',ICON_NAME,'BINOCULAR01');
    //     SET_ITEM_PROPERTY ('BTN_BUSCAREF',TOOLTIP_TEXT,'BUSCAR');
    //     SET_ITEM_PROPERTY ('BTN_CICLO',ICON_NAME,'SMEXCEL');
//    //     SYNCHRONIZE;
    //    END IF;
    //    GO_BLOCK ('CMTREFER');
    //    CLEAR_BLOCK;
    //    ---------------------------------
    //   ELSE
    //    DECLARE
    //      V_EQUIPO VARCHAR2(100);
    //      BEGIN
    //      -----------------------------
    //        BEGIN
    //        SELECT OSUSER
    //         INTO V_EQUIPO
    //         FROM OPS$AUDI.AUVSESION
    //           WHERE USERNAME=USER
    //          AND ROWNUM=1;
    //        EXCEPTION
    //         WHEN OTHERS THEN NULL; 
    //        END;
    //      ----------------------------- 
    //        :PLANO.RUTA :='\\'||V_EQUIPO||'\COMPARTIDO\REFERIDOS_DET'||:REF_NITREF||'.CSV';
    //        GO_BLOCK('PLANO');
    //        :TXT_BLOQUE := 'DETALLE_REF';
    //        LIB$AJUSTAVENTANA('WIN_PLANO',0,0);
    //    END;
    //   END IF;
    // 
    // END;
    //#endregion
    async CMFMENU_refParam_btnLimpiar_whenButtonPressed() {
        console.log("Entering CMFMENU_refParam_btnLimpiar_whenButtonPressed");
        let NOM_ICO: string = null;
        NOM_ICO = this.oracleFormsBuiltins.get_item_property("BTN_LIMPIAR", "ICON_NAME");
        if (NOM_ICO == "CIRCLE") {
            this.REF_PARAM.TXT_ID = "";
            // this.REF_PARAM.FE1 = "";
            // this.REF_PARAM.FE2 = "";
            this.REF_PARAM.TXT_ORIGEN = "";
            this.REF_PARAM.TXT_CIUDAD = "";
            this.REF_PARAM.TXT_COMER = "";
            this.REF_PARAM.DES_COM = "";
            this.REF_PARAM.DIS_NOMBRE = "";
            if (this.oracleFormsBuiltins.get_item_property("BTN_BUSCAREF", "ICON_NAME") == "ARROW7B") {
                this.oracleFormsBuiltins.hide_view("DET_REFER");
                this.oracleFormsBuiltins.go_item("CMTREFER.REF_NITREF");
                this.oracleFormsBuiltins.set_item_property("BTN_BUSCAREF", "ICON_NAME", "BINOCULAR01");
                this.oracleFormsBuiltins.set_item_property("BTN_BUSCAREF", "TOOLTIP_TEXT", "BUSCAR");
                this.oracleFormsBuiltins.set_item_property("BTN_CICLO", "ICON_NAME", "SMEXCEL");
//                this.oracleFormsBuiltins.synchronize();
            }
            this.oracleFormsBuiltins.go_block("CMTREFER");
            this.oracleFormsBuiltins.clear_block();
        }
        else {
            {

                let V_EQUIPO: string = null;
                let result1 = [];
                try {

                    // construct payload
                    let payload1 = new Map();
                    // call REST API
                    const result1 = await Rest.post("/cmfmenu_ref_param/cmfmenu_refparam_btnlimpiar_whenbuttonpressed_query1", payload1);
                    // get values from result
                    V_EQUIPO = result1[0].get("V_EQUIPO");
                } catch (ex) {

                }

                // this.PLANO.RUTA = "\\" + V_EQUIPO + "\COMPARTIDO\REFERIDOS_DET" + REF_NITREF + ".CSV";
                this.oracleFormsBuiltins.go_block("PLANO");
                this.REF_PARAM.TXT_BLOQUE = "DETALLE_REF";
                // CMFMENU_LIB$AJUSTAVENTANA("WIN_PLANO", 0, 0);
            }

        }
        console.log("Exiting CMFMENU_refParam_btnLimpiar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :TXT_CIUDAD IS NULL THEN
    //  LIB$DTNERFRMA('ESCOJA LA CIUDAD,');
    // --ELSIF SUBSTR(:this.PARAMETER.get("PJERAR"),1,1) IN ('5','3') THEN -- MANDIC
    // ELSIF :TXT_CIUDAD <> :this.PARAMETER.get("PPLAZU") THEN
    //    :TXT_CIUDAD := :this.PARAMETER.get("PPLAZU");
    //    LIB$DTNERFRMA('USTED SÓLO TIENE ACCESO A SU PLAZA');
    // -- END IF;
    // END IF; END;
    //#endregion
    async CMFMENU_refParam_txtCiudad_keyNextItem() {
        console.log("Entering CMFMENU_refParam_txtCiudad_keyNextItem");
        // if ((TXT_CIUDAD == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("ESCOJA LA CIUDAD,");
        // }
        // else if (TXT_CIUDAD != this.PARAMETER.get("PPLAZU")) {
        //     this.REF_PARAM.TXT_CIUDAD = this.PARAMETER.get("PPLAZU");
        //     // CMFMENU_LIB$DTNERFRMA("USTED SÓLO TIENE ACCESO A SU PLAZA");
        // }
        console.log("Exiting CMFMENU_refParam_txtCiudad_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  V_CADENA VARCHAR2(100);
    // BEGIN
    // 
    //  IF :NOM1 IS NOT NULL OR :NOM2 IS NOT NULL THEN
    //   V_CADENA := 'UPPER(TERNOM) LIKE '''||:NOM1||'%'||:NOM2||'''';
    //   IF :APE1 IS NOT NULL OR :APE2 IS NOT NULL THEN  
    //    V_CADENA := V_CADENA||' AND UPPER(TERAPE) LIKE '''||:APE1||'%'||:APE2||'''';
    //   END IF;
    //  ELSE
    //   IF :APE1 IS NOT NULL OR :APE2 IS NOT NULL THEN  
    //    V_CADENA := ' UPPER(TERAPE) LIKE ''%'||:APE1||'%'||:APE2||'%''';
    //   END IF;
    //  
    //  END IF;
    // 
    //  
    //  --:TXT := V_CADENA;
    // 
    //  
    //  SET_BLOCK_PROPERTY('TER', "DEFAULT_WHERE", V_CADENA);
    //   GO_BLOCK('TER');
    //   EXECUTE_QUERY;
    // 
    // END;
    //#endregion
    async CMFMENU_refParam_btnBuscar_whenButtonPressed() {
        console.log("Entering CMFMENU_refParam_btnBuscar_whenButtonPressed");
        let V_CADENA: string = null;
        // if (((NOM1 != null) || (NOM2 != null))) {
        //     V_CADENA = "UPPER(TERNOM) LIKE ''" + NOM1 + "%" + NOM2 + "''";
        //     if (((APE1 != null) || (APE2 != null))) {
        //         V_CADENA = V_CADENA + " AND UPPER(TERAPE) LIKE ''" + APE1 + "%" + APE2 + "''";
        //     }
        // }
        // else {
        //     if (((APE1 != null) || (APE2 != null))) {
        //         V_CADENA = " UPPER(TERAPE) LIKE ''%" + APE1 + "%" + APE2 + "%''";
        //     }
        // }
        this.oracleFormsBuiltins.set_block_property("TER", "DEFAULT_WHERE", V_CADENA);
        this.oracleFormsBuiltins.go_block("TER");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CMFMENU_refParam_btnBuscar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  NOM_ICO VARCHAR2(20);
    //  V_AREA SGUSUARIOS.USU_AREA_N%TYPE;
    //  
    //  
    //   CURSOR C_AREA IS
    //   SELECT USU_AREA_N
    //     FROM SGUSUARIOS
    //      WHERE USU_CODIGO = PLSQLBuiltins.user();
    //      
    // BEGIN
    //  
    //   --6754
    //  GO_BLOCK('CMTREFER');
    //  CLEAR_BLOCK;
    //  
    // IF :TXT_ORIGEN IS NOT NULL THEN
    //   IF :TXT_ORIGEN = '003' AND :REF_PARAM.TIPO_REFERENCIA1 IS NULL THEN 
    //      LIB$DTNERFRMA('POR FAVOR SELECCIONE EL TIPO DE REFERENCIA.');
    //    ELSE 
    //  --6754
    //  
    // 
    //  NOM_ICO := GET_ITEM_PROPERTY('BTN_BUSCAREF',ICON_NAME);
    // 
    // IF NOM_ICO = 'ARROW7B' THEN
    //  PUP_OCULTADET;
    //  GO_ITEM ('CMTREFER.REF_NITREF');
    // ELSE
    //  --------------------
    //  ----------FUNCIÓN DE BUSCAR
    //       DECLARE
    //         TYPE CADENATYPE IS TABLE OF VARCHAR2(500)
    //         INDEX BY BINARY_INTEGER;
    //         
    //         CADTAB CADENATYPE;
    //         
    //         VCONSULTA VARCHAR2(500);
    //         VPARTE VARCHAR2(500);
    //       BEGIN
    //        -----------------
    // 
    //      OPEN C_AREA;
    //      FETCH C_AREA INTO V_AREA;
    //      CLOSE C_AREA;
    //      
    //        --SI ES COMERCIAL VALIDE LA PLAZA
    //       
    //      -- IF  V_AREA <> 'MER' THEN    --6270   CAHH
    //        IF  V_AREA NOT IN ('MER','JIM','CAV') THEN    
    //           IF :this.PARAMETER.get("PJERAR") NOT IN ('2.3','4.4','2.2','2.4')
    //             OR   :this.PARAMETER.get("PCARGO") NOT IN ('SR','GC')      THEN
    //                
    //                  IF NVL(:REF_PARAM.TXT_CIUDAD,'XXX') <> :this.PARAMETER.get("PPLAZU") AND UPPER(USER) <> 'OPS$COLOCA'  THEN
    //                   :REF_PARAM.TXT_CIUDAD := :this.PARAMETER.get("PPLAZU");
    //                   VALIDATE(DEFAULT_SCOPE);
    //                   LIB$DTNERFRMA('SU JERARQUÍA LE IMPIDE HACER UNA CONSULTA GENERAL DE UNA PLAZA DISTINTA A LA SUYA');
    //                  END IF;
    //                 
    //               END IF;
    //              
    //           IF :this.PARAMETER.get("PJERAR") NOT IN ('2.3','3.2','3.4','3.5','3.6','3.8','4.4','2.2','2.4')
    //           -- OR   :this.PARAMETER.get("PCARGO") NOT IN ('SR','GC')  OR V_AREA = 'MER'      --6270     CAHH
    //            OR   :this.PARAMETER.get("PCARGO") NOT IN ('SR','GC')  OR V_AREA IN ('MER' )     
    //                       THEN    
    //                 IF NVL(:REF_PARAM.TXT_COMER,'XXX') <> UPPER(USER) THEN
    //                    :REF_PARAM.TXT_COMER := UPPER(USER);
    //                    :REF_PARAM.DES_COM := PUP_FUNOMBRE (:REF_PARAM.TXT_COMER, 'C');
    //                   VALIDATE(DEFAULT_SCOPE);
    //                    LIB$DTNERFRMA('SU JERARQUÍA LE IMPIDE HACER UNA CONSULTA GENERAL DE UN COMERCIAL DISTINTO AL SUYO');
    //                 END IF;
    //           END IF;
    //          END IF;
    //        -----------------
    // 
    //        IF :TXT_ID IS NOT NULL THEN
    //         CADTAB(1) := ' REF_NITORIG = '''||:TXT_ID||'''';
    //        ELSE
    //         CADTAB(1) := NULL;
    //        END IF;
    //        ---
    //        /* ANTES 6754
    //        IF :TXT_ORIGEN IS NOT NULL THEN
    //         CADTAB(2) := ' REF_TIPO = '''||:TXT_ORIGEN||'''';
    //        ELSE
    //         CADTAB(2) := NULL;
    //        END IF;
    //        */
    //        IF :TXT_ORIGEN IS NOT NULL THEN
    //             IF :TXT_ORIGEN = '003' THEN           
    //              
    //               /*ANTES CAMBIO PROYECTO 7735
    //                 CADTAB(2) := ' REF_TIPO = '''||:TXT_ORIGEN||''''||
    //                              ' AND REF_NITORIG IN (SELECT REFERI_NITTER ' ||
    //                                                      ' FROM OPS$COLOCA.CRTREFERI '||
    //                                                      ' WHERE REFERI_TIPREF  = DECODE('''||:REF_PARAM.TIPO_REFERENCIA1||''',''%%'',REFERI_TIPREF,'''||:REF_PARAM.TIPO_REFERENCIA1||'''))';
    //                */             
    //                
    //                --PROYECTO 7735
    //                
    //                
    //                 IF :REF_PARAM.TIPO_REFERENCIA1 IN ('1','2','3') THEN
    //                        
    //                       CADTAB(2) := ' REF_TIPO = '''||:TXT_ORIGEN||''''||
    //                                           ' AND REF_NITORIG IN (SELECT DISTINCT CONTPR_CODCNT ' ||
    //                                             ' FROM OPS$COLOCA.COTCONTPR, (SELECT SUBSTR (CAXPRO_DESCRP,1,1) TIPREF, CAXPRO_CODIGO FROM COTCAXPRO WHERE CAXPRO_CODPRO = 860034313)TR'||
    //                                             ' WHERE CONTPR_CARPAD = TR.CAXPRO_CODIGO'||
    //                                             ' AND TR.TIPREF = DECODE('''||:REF_PARAM.TIPO_REFERENCIA1||''',''%%'',TR.TIPREF,'''||:REF_PARAM.TIPO_REFERENCIA1||'''))';
    //                                     /*' AND REF_NITORIG IN (SELECT REFERI_NITTER ' ||
    //                                            ' FROM OPS$COLOCA.CRTREFERI '||
    //                                            ' WHERE REFERI_TIPREF  = DECODE('''||:REF_PARAM.TIPO_REFERENCIA1||''',''%%'',REFERI_TIPREF,'''||:REF_PARAM.TIPO_REFERENCIA1||'''))';*/
    //                                                                                  
    //      
    //                 ELSIF :REF_PARAM.TIPO_REFERENCIA1 = '4' THEN 
    //                  
    //                      CADTAB(2) := ' REF_TIPO = '''||:TXT_ORIGEN||''''||
    //                                     ' AND REF_NITORIG NOT IN (SELECT DISTINCT REFPRV_CODASE FROM OPS$COLOCA.CRTREFPRV) ' ;
    //                                        
    //                  
    //                 
    //                 ELSE 
    //                   CADTAB(2) := ' REF_TIPO = '''||:TXT_ORIGEN||'''';
    //                 END IF;
    //                --PROYECTO 7735
    //                  
    //                            
    //             
    //                     
    //             ELSE
    //                CADTAB(2) := ' REF_TIPO = '''||:TXT_ORIGEN||''''; 
    //             END IF;
    //          
    //           ELSE
    //           CADTAB(2) := NULL;
    //          END IF;
    //        ---
    //        IF :REF_PARAM.TXT_CIUDAD IS NOT NULL THEN
    //          
    //         CADTAB(3) := ' NVL(REF_CIUDAD,''%'') LIKE DECODE('''||:REF_PARAM.TXT_CIUDAD||''',''000'',''%'','''||:REF_PARAM.TXT_CIUDAD||''')';
    //          --CADTAB(3) := ' REF_CIUDAD LIKE ''%'||:REF_PARAM.TXT_CIUDAD||'%''';
    //        ELSE
    //         CADTAB(3) := NULL;
    //        END IF;
    //        ---
    //        IF :REF_PARAM.TXT_COMER IS NOT NULL THEN
    //          CADTAB(4) := ' REF_USUARIO LIKE ''%'||:REF_PARAM.TXT_COMER||'%''';
    //        ELSE
    //         CADTAB(4) := NULL;
    //        END IF;
    //        ---
    //        CADTAB(5) := NULL;
    //        IF :RG_FECHAS = 'R' THEN
    // 
    //           IF  :FE1 IS NOT NULL THEN
    //            IF  :FE2 IS NOT NULL THEN
    //             CADTAB(5) := ' REF_FECREG BETWEEN TO_DATE('''||TO_CHAR(:FE1,'DD/MM/YYYY')||
    //             ''',''DD/MM/YYYY'') AND TO_DATE('''||TO_CHAR(:FE2,'DD/MM/YYYY')||''',''DD/MM/YYYY'')';
    //            ELSE
    //             CADTAB(5) := ' REF_FECREG >= TO_DATE('''||TO_CHAR(:FE1,'DD/MM/YYYY')||
    //             ''',''DD/MM/YYYY'')';
    //             --LIB$DTNERFRMA('CONSULTARÁ POR RANGO DE FECHAS, FALTA INDICAR LA FECHA HASTA.');
    //            END IF;
    //           ELSE
    //            IF  :FE2 IS NOT NULL THEN
    //             LIB$DTNERFRMA('CONSULTARÁ POR RANGO DE FECHAS, FALTA INDICAR LA FECHA DESDE.');
    //            END IF;
    //           END IF;
    //          
    //        ELSIF :RG_FECHAS = 'H' THEN
    //           
    //           IF :FE2 IS NOT NULL THEN
    //              CADTAB(5) := ' REF_FECREG <= TO_DATE('''||TO_CHAR(:FE2,'DD/MM/YYYY')||''',''DD/MM/YYYY'')';
    //           END IF;
    //           
    //        END IF;
    // 
    //        --MUESTRE FIRST AND LAST           SIRVE CON TODOS LOS CRITERIOS
    //         FOR I IN CADTAB.FIRST..CADTAB.LAST LOOP
    //          
    //           IF VPARTE IS NULL THEN
    //             VPARTE := CADTAB(I);
    //           ELSE
    //             VPARTE := ' AND '||CADTAB(I);
    //           END IF;
    //           VCONSULTA := VCONSULTA||VPARTE;
    //           VPARTE := CADTAB(I);
    //         END LOOP;
    //        VCONSULTA := RTRIM (VCONSULTA,' AND '); --SI SOBRA UN AND ENTONCES CÓRTELO
    //        ---
    //         
    //              
    //        SET_BLOCK_PROPERTY('CMTREFER',DEFAULT_WHERE,VCONSULTA);
    //         GO_BLOCK('CMTREFER');
    //         EXECUTE_QUERY;
    //         GO_ITEM('REF_NITREF');
    //       END;
    // 
    // 
    //  --------------------
    //   END IF;
    //  END IF; --6754
    // END IF; --6754 
    // END;
    //#endregion
    async CMFMENU_refParam_btnBuscaref_whenButtonPressed() {
        console.log("Entering CMFMENU_refParam_btnBuscaref_whenButtonPressed");
        let NOM_ICO: string = null;
        let V_AREA: null = null;
        this.oracleFormsBuiltins.go_block("CMTREFER");
        this.oracleFormsBuiltins.clear_block();
        // if ((TXT_ORIGEN != null)) {
        //     if ((TXT_ORIGEN == "003" && (this.REF_PARAM.TIPO_REFERENCIA1 == null))) {
        //         // CMFMENU_LIB$DTNERFRMA("POR FAVOR SELECCIONE EL TIPO DE REFERENCIA.");
        //     }
        //     else {
        //         NOM_ICO = this.oracleFormsBuiltins.get_item_property("BTN_BUSCAREF", "ICON_NAME");
        //         if (NOM_ICO == "ARROW7B") {
        //             // CMFMENU_PUP_OCULTADET();
        //             this.oracleFormsBuiltins.go_item("CMTREFER.REF_NITREF");
        //         }
        //         else {
        //             {

        //                 let CADTAB: null = null;
        //                 let VCONSULTA: string = null;
        //                 let VPARTE: string = null;
        //                 if (["MER", "JIM", "CAV"].indexOf(V_AREA) != -1) {
        //                     if ((["2.3", "4.4", "2.2", "2.4"].indexOf(this.PARAMETER.get("PJERAR")) != -1 || ["SR", "GC"].indexOf(this.PARAMETER.get("PCARGO")) != -1)) {
        //                         if ((this.REF_PARAM.TXT_CIUDAD == null ? "XXX" : REF_PARAM.TXT_CIUDAD != this.PARAMETER.get("PPLAZU") && PLSQLBuiltins.upper(USER) != "OPS$COLOCA")) {
        //                             this.REF_PARAM.TXT_CIUDAD = this.PARAMETER.get("PPLAZU");
        //                             this.oracleFormsBuiltins.validate(DEFAULT_SCOPE);
        //                             // CMFMENU_LIB$DTNERFRMA("SU JERARQUÍA LE IMPIDE HACER UNA CONSULTA GENERAL DE UNA PLAZA DISTINTA A LA SUYA");
        //                         }
        //                     }
        //                     if (((["2.3", "3.2", "3.4", "3.5", "3.6", "3.8", "4.4", "2.2", "2.4"].indexOf(this.PARAMETER.get("PJERAR")) != -1 || ["SR", "GC"].indexOf(this.PARAMETER.get("PCARGO")) != -1) || ["MER"].indexOf(V_AREA) != -1)) {
        //                         if (this.REF_PARAM.TXT_COMER == null ? "XXX" : REF_PARAM.TXT_COMER != PLSQLBuiltins.upper(USER)) {
        //                             this.REF_PARAM.TXT_COMER = PLSQLBuiltins.upper(USER);
        //                             this.REF_PARAM.DES_COM = PUP_FUNOMBRE(this.REF_PARAM.TXT_COMER, "C");
        //                             this.oracleFormsBuiltins.validate(DEFAULT_SCOPE);
        //                             // CMFMENU_LIB$DTNERFRMA("SU JERARQUÍA LE IMPIDE HACER UNA CONSULTA GENERAL DE UN COMERCIAL DISTINTO AL SUYO");
        //                         }
        //                     }
        //                 }
        //                 if ((TXT_ID != null)) {
        //                     CADTAB(1) = " REF_NITORIG = ''" + TXT_ID + "''";
        //                 }
        //                 else {
        //                     CADTAB(1) = null;
        //                 }
        //                 if ((TXT_ORIGEN != null)) {
        //                     if (TXT_ORIGEN == "003") {
        //                         if (["1", "2", "3"].indexOf(this.REF_PARAM.TIPO_REFERENCIA1) != -1) {
        //                             CADTAB(2) = " REF_TIPO = ''" + TXT_ORIGEN + "''" + " AND REF_NITORIG IN (SELECT DISTINCT CONTPR_CODCNT " + " FROM OPS$COLOCA.COTCONTPR, (SELECT SUBSTR (CAXPRO_DESCRP,1,1) TIPREF, CAXPRO_CODIGO FROM COTCAXPRO WHERE CAXPRO_CODPRO = 860034313)TR" + " WHERE CONTPR_CARPAD = TR.CAXPRO_CODIGO" + " AND TR.TIPREF = DECODE(''" + REF_PARAM.TIPO_REFERENCIA1 + "'',''%%'',TR.TIPREF,''" + REF_PARAM.TIPO_REFERENCIA1 + "''))";
        //                         }
        //                         else if (this.REF_PARAM.TIPO_REFERENCIA1 == "4") {
        //                             CADTAB(2) = " REF_TIPO = ''" + TXT_ORIGEN + "''" + " AND REF_NITORIG NOT IN (SELECT DISTINCT REFPRV_CODASE FROM OPS$COLOCA.CRTREFPRV) ";
        //                         }
        //                         else {
        //                             CADTAB(2) = " REF_TIPO = ''" + TXT_ORIGEN + "''";
        //                         }
        //                     }
        //                     else {
        //                         CADTAB(2) = " REF_TIPO = ''" + TXT_ORIGEN + "''";
        //                     }
        //                 }
        //                 else {
        //                     CADTAB(2) = null;
        //                 }
        //                 if ((this.REF_PARAM.TXT_CIUDAD != null)) {
        //                     CADTAB(3) = " NVL(REF_CIUDAD,''%'') LIKE DECODE(''" + REF_PARAM.TXT_CIUDAD + "'',''000'',''%'',''" + REF_PARAM.TXT_CIUDAD + "'')";
        //                 }
        //                 else {
        //                     CADTAB(3) = null;
        //                 }
        //                 if ((this.REF_PARAM.TXT_COMER != null)) {
        //                     CADTAB(4) = " REF_USUARIO LIKE ''%" + REF_PARAM.TXT_COMER + "%''";
        //                 }
        //                 else {
        //                     CADTAB(4) = null;
        //                 }
        //                 CADTAB(5) = null;
        //                 if (RG_FECHAS == "R") {
        //                     if ((FE1 != null)) {
        //                         if ((FE2 != null)) {
        //                             CADTAB(5) = " REF_FECREG BETWEEN TO_DATE(''" + FE1.toString() + "'',''DD/MM/YYYY'') AND TO_DATE(''" + FE2.toString() + "'',''DD/MM/YYYY'')";
        //                         }
        //                         else {
        //                             CADTAB(5) = " REF_FECREG >= TO_DATE(''" + FE1.toString() + "'',''DD/MM/YYYY'')";
        //                         }
        //                     }
        //                     else {
        //                         if ((FE2 != null)) {
        //                             // CMFMENU_LIB$DTNERFRMA("CONSULTARÁ POR RANGO DE FECHAS, FALTA INDICAR LA FECHA DESDE.");
        //                         }
        //                     }
        //                 }
        //                 else if (RG_FECHAS == "H") {
        //                     if ((FE2 != null)) {
        //                         CADTAB(5) = " REF_FECREG <= TO_DATE(''" + FE2.toString() + "'',''DD/MM/YYYY'')";
        //                     }
        //                 }
        //                 VCONSULTA = RTRIM(VCONSULTA, " AND ");
        //                 this.oracleFormsBuiltins.set_block_property("CMTREFER", "DEFAULT_WHERE", VCONSULTA);
        //                 this.oracleFormsBuiltins.go_block("CMTREFER");
        //                 this.oracleFormsBuiltins.execute_query();
        //                 this.oracleFormsBuiltins.go_item("REF_NITREF");
        //             }

        //         }
        //     }
        // }
        console.log("Exiting CMFMENU_refParam_btnBuscaref_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN PUP_OCULTADET;
    // --GO_ITEM ('CMTREFER.REF_NITREF');
    // 
    // :DIS_NOMBRE := PUP_FUNOMBRE (:TXT_ID, 'T');--FUN_NOMTER;
    // 
    // --NEXT_ITEM; END;
    //#endregion
    async CMFMENU_refParam_txtId_whenValidateItem() {
        console.log("Entering CMFMENU_refParam_txtId_whenValidateItem");
        // CMFMENU_PUP_OCULTADET();
        // this.REF_PARAM.DIS_NOMBRE = PUP_FUNOMBRE(TXT_ID, "T");
        console.log("Exiting CMFMENU_refParam_txtId_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  VCONSULTA VARCHAR2(50);
    // BEGIN
    // 
    //   :TXT_BLOQUE := 'REF_PARAM';
    //   SHOW_VIEW('TRAE_TER');
    //   
    //   IF :REF_PARAM.TXT_ID IS NOT NULL THEN
    //    VCONSULTA := ' TERCOD LIKE ''%'||:REF_PARAM.TXT_ID ||'%''';
    //    SET_BLOCK_PROPERTY('TER',DEFAULT_WHERE,VCONSULTA);
    //     GO_BLOCK('TER');
    //     EXECUTE_QUERY;
    //   ELSE
    //    GO_ITEM('NOM1');
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_refParam_txtId_whenMouseDoubleclick() {
        console.log("Entering CMFMENU_refParam_txtId_whenMouseDoubleclick");
        let VCONSULTA: string = null;
        this.REF_PARAM.TXT_BLOQUE = "REF_PARAM";
        this.oracleFormsBuiltins.show_view("TRAE_TER");
        if ((this.REF_PARAM.TXT_ID != null)) {
            VCONSULTA = " TERCOD LIKE ''%" + this.REF_PARAM.TXT_ID + "%''";
            this.oracleFormsBuiltins.set_block_property("TER", "DEFAULT_WHERE", VCONSULTA);
            this.oracleFormsBuiltins.go_block("TER");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.go_item("NOM1");
        }
        console.log("Exiting CMFMENU_refParam_txtId_whenMouseDoubleclick");
    }

    //#region PLSQL
    // DECLARE
    //  VCONSULTA VARCHAR2(50);
    // BEGIN
    // 
    //   :TXT_BLOQUE := 'REF_PARAM';
    //   SHOW_VIEW('TRAE_TER');
    //   
    //   IF :REF_PARAM.TXT_ID IS NOT NULL THEN
    //    VCONSULTA := ' TERCOD LIKE ''%'||:REF_PARAM.TXT_ID ||'%''';
    //    SET_BLOCK_PROPERTY('TER',DEFAULT_WHERE,VCONSULTA);
    //     GO_BLOCK('TER');
    //     EXECUTE_QUERY;
    //   ELSE
    //    GO_ITEM('NOM1');
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_refParam_txtId_keyListval() {
        console.log("Entering CMFMENU_refParam_txtId_keyListval");
        let VCONSULTA: string = null;
        this.REF_PARAM.TXT_BLOQUE = "REF_PARAM";
        this.oracleFormsBuiltins.show_view("TRAE_TER");
        if ((this.REF_PARAM.TXT_ID != null)) {
            VCONSULTA = " TERCOD LIKE ''%" + this.REF_PARAM.TXT_ID + "%''";
            this.oracleFormsBuiltins.set_block_property("TER", "DEFAULT_WHERE", VCONSULTA);
            this.oracleFormsBuiltins.go_block("TER");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.go_item("NOM1");
        }
        console.log("Exiting CMFMENU_refParam_txtId_keyListval");
    }

    //#region PLSQL
    // BEGIN --6754
    // IF :REF_PARAM.TXT_ORIGEN = '003' THEN
    //  
    //     SET_ITEM_PROPERTY('TIPO_REFERENCIA1',VISIBLE, "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('TIPO_REFERENCIA1',ENABLED, "PROPERTY_TRUE");
    //     
    //     
    //     IF NOT LIB$PBLARLSTARG('REF_PARAM.TIPO_REFERENCIA1','LOV_TIPOREFERENCIA1') THEN
    //           LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA REF_PARAM.TIPO_REFERENCIA1');
    //    END IF;
    //     
    // ELSE
    //    SET_ITEM_PROPERTY('TIPO_REFERENCIA1',ENABLED, "PROPERTY_FALSE");
    //    SET_ITEM_PROPERTY('TIPO_REFERENCIA1',VISIBLE, "PROPERTY_FALSE");
    // END IF;
    // 
    // --6754; END;
    //#endregion
    async CMFMENU_refParam_txtOrigen_whenListChanged() {
        console.log("Entering CMFMENU_refParam_txtOrigen_whenListChanged");
        if (this.REF_PARAM.TXT_ORIGEN == "003") {
            this.oracleFormsBuiltins.set_item_property("TIPO_REFERENCIA1", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("TIPO_REFERENCIA1", "ENABLED", "PROPERTY_TRUE");
            // if ((!LIB$PBLARLSTARG("REF_PARAM.TIPO_REFERENCIA1", "LOV_TIPOREFERENCIA1"))) {
            //     // CMFMENU_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA REF_PARAM.TIPO_REFERENCIA1");
            // }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("TIPO_REFERENCIA1", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("TIPO_REFERENCIA1", "VISIBLE", "PROPERTY_FALSE");
        }
        console.log("Exiting CMFMENU_refParam_txtOrigen_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :DIS_NOMBRE := PUP_FUNOMBRE (:TXT_ID, 'T');
    // 
    // NEXT_ITEM; END;
    //#endregion
    async CMFMENU_refParam_txtOrigen_keyNextItem() {
        console.log("Entering CMFMENU_refParam_txtOrigen_keyNextItem");
        // this.REF_PARAM.DIS_NOMBRE = PUP_FUNOMBRE(TXT_ID, "T");
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CMFMENU_refParam_txtOrigen_keyNextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_setterxcom_postTextItem() {
        console.log("Entering CMFMENU_setterxcom_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_setterxcom_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_setterxcom_whenNewItemInstance() {
        console.log("Entering CMFMENU_setterxcom_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_setterxcom_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    // SELECT DECODE(TERPER, 'N', TERAPE || ' ' || TERNOM, TERAPE) NOMBRE
    //   INTO :SETTERXCOM.V_NOMBTER
    // FROM TER
    // WHERE TERCOD = :SETTERXCOM.CXT_NIT;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :SETTERXCOM.V_NOMBTER :=  NULL;
    // END;
    // BEGIN
    //  SELECT  DECODE(:SETTERXCOM.CXT_COMSEC,NULL,NULL,COM_NOMBRE ||' '||COM_APELLIDO)
    //    INTO :SETTERXCOM.V_COMSEC 
    // FROM SETCOMCIA
    // WHERE (:SETTERXCOM.CXT_CODIGO = COM_CODIGO OR :SETTERXCOM.CXT_COMSEC = COM_CODIGO)
    //  AND  COM_CODUNI = :this.PARAMETER.get("PUNIDAD");
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :SETTERXCOM.V_COMSEC :=  NULL;
    // END;
    //#endregion
    async CMFMENU_setterxcom_postQuery() {
        console.log("Entering CMFMENU_setterxcom_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("CXT_NIT", this.SETTERXCOM.CXT_NIT);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_setterxcom/cmfmenu_setterxcom_postquery_query1", payload1);
        // get values from result
        this.SETTERXCOM.V_NOMBTER = result1[0].get("SETTERXCOM.V_NOMBTER");
        if (result1 == null || result1.length == 0) {

            this.SETTERXCOM.V_NOMBTER = null;
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("CXT_CODIGO", this.SETTERXCOM.CXT_CODIGO);
        payload2.set("CXT_COMSEC", this.SETTERXCOM.CXT_COMSEC);
        payload2.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result2 = await Rest.post("/cmfmenu_setterxcom/cmfmenu_setterxcom_postquery_query2", payload2);
        // get values from result
        this.SETTERXCOM.V_COMSEC = result2[0].get("SETTERXCOM.V_COMSEC");
        if (result2 == null || result2.length == 0) {

            this.SETTERXCOM.V_COMSEC = null;
        }

        console.log("Exiting CMFMENU_setterxcom_postQuery");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //  V_RESPUESTA VARCHAR2(1);
    //  --ADICIONAR 5685
    //  V_OBSERVACI VARCHAR2(300);
    //  --ADICIONAR 5685
    //  --ADICIONAR 6414
    //  T_RESPUESTAERR NUMBER;
    //   --ADICIONAR 6414
    // 
    // 
    // BEGIN
    //  
    //  --SSSG  6414   
    //  BEGIN
    //    SELECT COUNT(*)
    //     INTO T_RESPUESTAERR
    //       FROM SETCOMCIA, COTABOGCIA
    //       WHERE COM_CODIGO = :SETCOMCIA_NEW.COM_CODIGO
    //         AND COM_NIT    = ABOG_NIT
    //         AND COM_CODUNI = ABOG_CODUNI; --ARQUITECTURA
    //   
    //    IF T_RESPUESTAERR = 0 THEN
    //     LIB$DTNERFRMA('EL COMERCIAL '||:SETCOMCIA_NEW.COM_CODIGO||'-'||:SETCOMCIA_NEW.COM_NOMBRE||' '||:SETCOMCIA_NEW.COM_APELLIDO||' NO ESTA CREADO EN COTABOGCIA Y NO PODRÁ ACTUALIZAR EL GESTOR DE COBRO.');
    //    END IF;
    //   END;
    //  --SSSG 6414
    // 
    //  
    //  
    //  PU_REASIGNAR_CLIENTES (:SETTERXCOM.CXT_NIT, :SETTERXCOM.V_NOMBTER, V_RESPUESTA);
    // 
    //   --ADICIONAR 5685
    //  
    //  V_OBSERVACI := 'OBSERVACION POR REASIGNACION CLIENTE (BOLSA|COMERCIAL)';
    //  PUP_INSERT_SEGXTER (:SETCOMCIA.COM_CODIGO,:SETTERXCOM.CXT_NIT,V_OBSERVACI,NULL); 
    //  COMMIT_FORM;   
    //  COMMIT;
    //  --ADICIONAR 5685
    // 
    //  IF :TIPNG_TIPOORIG IS NULL OR :TIPNG_TIPOORIG NOT IN ('013','014','011','012') THEN --REASIGNACION NORMAL Y PUEDE QUE LLEVE TIPO DE PRODUCTO.
    //    PUP_ENVIO_RECORDCOMANT(:SETCOMCIA.COM_MAIL, :SETTERXCOM.CXT_NIT, :SETTERXCOM.V_NOMBTER, :SETCOMCIA_NEW.COM_NOMBRE||' '||:SETCOMCIA_NEW.COM_APELLIDO);
    //    PUP_ENVIO_RECORDCOMNVO(:SETCOMCIA_NEW.COM_MAIL, :BTER.NIT, :SETTERXCOM.V_NOMBTER, :TIPNG_TIPOORIG, :TIPNG_TIPPROD);
    //  ELSIF :TIPNG_TIPOORIG IN ('011','012') THEN --ES REFERIDO SE LO DEBE ENVIAR A AMBOS COMERCIALES.
    //   PUP_ENVIO_RECORDCOMNVO(:SETCOMCIA_NEW.COM_MAIL, :BTER.NIT, :SETTERXCOM.V_NOMBTER, :TIPNG_TIPOORIG, :TIPNG_TIPPROD); 
    //   PUP_ENVIO_RECORDCOMANTREFER(:SETCOMCIA.COM_MAIL, :SETTERXCOM.CXT_NIT, :SETTERXCOM.V_NOMBTER, :TIPNG_TIPOORIG, :TIPNG_TIPPROD); 
    //  ELSIF :TIPNG_TIPOORIG IN ('013','014') THEN --ES COMPARTIDO SE LO DEBE ENVIAR A AMBOS COMERCIALES.
    //   PUP_ENVIO_RECORDCOMNVO(:SETCOMCIA_NEW.COM_MAIL, :BTER.NIT, :SETTERXCOM.V_NOMBTER, :TIPNG_TIPOORIG, :TIPNG_TIPPROD);
    //   PUP_ENVIO_RECORDCOMANTCOMPAR(:SETCOMCIA.COM_MAIL, :SETTERXCOM.CXT_NIT, :SETTERXCOM.V_NOMBTER, :TIPNG_TIPOORIG, :TIPNG_TIPPROD);
    //   
    //   END IF;
    //  IF V_RESPUESTA = '0' THEN
    //   GO_BLOCK('SETCOMCIA');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('SETTERXCOM');
    //     EXECUTE_QUERY;
    //     
    //     GO_BLOCK('SETTERXCOM_NEW');
    //     EXECUTE_QUERY;
    //     
    //     LIB$ALERTA('MENSAJE','TERCERO '||:SETTERXCOM.V_NOMBTER||' ASIGNADO AL COMERCIAL '||:SETCOMCIA_NEW.COM_NOMBRE||' '||:SETCOMCIA_NEW.COM_APELLIDO, 'ACEPTAR', NULL, NULL, T_RESPUESTA);  
    //     
    //  ELSIF V_RESPUESTA = '1' THEN
    //   :SETTERXCOM.V_SELECTER := 'N';
    //   LIB$DTNERFRMA('ACTUALIZACIÓN CON ERRORES Ó PROCESO CANCELADO POR EL USUARIO.');
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_setterxcom_vSelecter_whenCheckboxChanged() {
        console.log("Entering CMFMENU_setterxcom_vSelecter_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let V_RESPUESTA: string = null;
        let V_OBSERVACI: string = null;
        let T_RESPUESTAERR: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("COM_CODIGO", this.SETCOMCIA_NEW.COM_CODIGO);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_setterxcom/cmfmenu_setterxcom_vselecter_whencheckboxchanged_query1", payload1);
        // get values from result
        T_RESPUESTAERR = result1[0].get("T_RESPUESTAERR");
        if (T_RESPUESTAERR == 0) {
            // CMFMENU_LIB$DTNERFRMA("EL COMERCIAL " + SETCOMCIA_NEW.COM_CODIGO + "-" + SETCOMCIA_NEW.COM_NOMBRE + " " + SETCOMCIA_NEW.COM_APELLIDO + " NO ESTA CREADO EN COTABOGCIA Y NO PODRÁ ACTUALIZAR EL GESTOR DE COBRO.");
        }
        // CMFMENU_PU_REASIGNAR_CLIENTES(SETTERXCOM.CXT_NIT, this.SETTERXCOM.V_NOMBTER, V_RESPUESTA);
        V_OBSERVACI = "OBSERVACION POR REASIGNACION CLIENTE (BOLSA|COMERCIAL)";
        // CMFMENU_PUP_INSERT_SEGXTER(SETCOMCIA.COM_CODIGO, this.SETTERXCOM.CXT_NIT, V_OBSERVACI, null);
        this.oracleFormsBuiltins.commit_form();
        // if (((TIPNG_TIPOORIG == null) || ["013", "014", "011", "012"].indexOf(TIPNG_TIPOORIG) != -1)) {
        //     // CMFMENU_PUP_ENVIO_RECORDCOMANT(SETCOMCIA.COM_MAIL, this.SETTERXCOM.CXT_NIT, this.SETTERXCOM.V_NOMBTER, this.SETCOMCIA_NEW.COM_NOMBRE + " " + SETCOMCIA_NEW.COM_APELLIDO);
        //     // CMFMENU_PUP_ENVIO_RECORDCOMNVO(this.SETCOMCIA_NEW.COM_MAIL, this.BTER.NIT, this.SETTERXCOM.V_NOMBTER, TIPNG_TIPOORIG, TIPNG_TIPPROD);
        // }
        // else if (["011", "012"].indexOf(TIPNG_TIPOORIG) != -1) {
        //     // CMFMENU_PUP_ENVIO_RECORDCOMNVO(this.SETCOMCIA_NEW.COM_MAIL, this.BTER.NIT, this.SETTERXCOM.V_NOMBTER, TIPNG_TIPOORIG, TIPNG_TIPPROD);
        //     // CMFMENU_PUP_ENVIO_RECORDCOMANTREFER(SETCOMCIA.COM_MAIL, this.SETTERXCOM.CXT_NIT, this.SETTERXCOM.V_NOMBTER, TIPNG_TIPOORIG, TIPNG_TIPPROD);
        // }
        // else if (["013", "014"].indexOf(TIPNG_TIPOORIG) != -1) {
        //     // CMFMENU_PUP_ENVIO_RECORDCOMNVO(this.SETCOMCIA_NEW.COM_MAIL, this.BTER.NIT, this.SETTERXCOM.V_NOMBTER, TIPNG_TIPOORIG, TIPNG_TIPPROD);
        //     // CMFMENU_PUP_ENVIO_RECORDCOMANTCOMPAR(SETCOMCIA.COM_MAIL, this.SETTERXCOM.CXT_NIT, this.SETTERXCOM.V_NOMBTER, TIPNG_TIPOORIG, TIPNG_TIPPROD);
        // }
        if (V_RESPUESTA == "0") {
            this.oracleFormsBuiltins.go_block("SETCOMCIA");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("SETTERXCOM");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("SETTERXCOM_NEW");
            this.oracleFormsBuiltins.execute_query();
            // CMFMENU_LIB$ALERTA("MENSAJE", "TERCERO " + SETTERXCOM.V_NOMBTER + " ASIGNADO AL COMERCIAL " + SETCOMCIA_NEW.COM_NOMBRE + " " + SETCOMCIA_NEW.COM_APELLIDO, "ACEPTAR", null, null, T_RESPUESTA);
        }
        else if (V_RESPUESTA == "1") {
            this.SETTERXCOM.V_SELECTER = "N";
            // CMFMENU_LIB$DTNERFRMA("ACTUALIZACIÓN CON ERRORES Ó PROCESO CANCELADO POR EL USUARIO.");
        }
        console.log("Exiting CMFMENU_setterxcom_vSelecter_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("PITEMANT") := :SYSTEM.CURSOR_ITEM;
    // :this.PARAMETER.get("PREGANT") := TO_NUMBER(:SYSTEM.CURSOR_RECORD); END;
    //#endregion
    async CMFMENU_btipcon_postBlock() {
        console.log("Entering CMFMENU_btipcon_postBlock");
        // this.PARAMETER.set("PITEMANT", this.SYSTEM.CURSOR_ITEM);
        // this.PARAMETER.set("PREGANT", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")));
        console.log("Exiting CMFMENU_btipcon_postBlock");
    }

    //#region PLSQL
    // DECLARE
    //  V_BOOLEAN VARCHAR2(1);
    // BEGIN 
    //  IF :TIPGENERAL = '1' THEN
    //  BEGIN
    //  SELECT 'X'
    //    INTO V_BOOLEAN
    //  FROM DUAL
    //  WHERE :V_PERFIL IS NOT NULL
    //   AND :V_CNOREV IS NOT NULL
    //   AND :V_CTIEMPO IS NOT NULL
    //   AND :V_CTIEMPOVEN IS NOT NULL
    //   AND :V_CSIRENOV IS NOT NULL
    //   AND :V_COMPRO IS NOT NULL;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    V_BOOLEAN := NULL;
    //   END;
    //   IF V_BOOLEAN IS NULL THEN
    //    LIB$DTNERFRMA('PARA LA CONSULTA GENERAL OPCIÓN NIVEL 1 ES NECESARIO ESCOJER LOS SIGUIENTES CAMPOS:'
    //           ||'PERFIL, '||'GESTION, '||'Y TODOS LOS DE TIEMPOS'
    //           );
    //   ELSE
    //    GO_BLOCK('BESPECIFICA');
    //    GO_ITEM('V_GENCONSUL');
    //   END IF;
    //  ELSIF :TIPGENERAL = '2' THEN
    //  BEGIN
    //  SELECT 'X'
    //    INTO V_BOOLEAN
    //  FROM DUAL
    //  WHERE :V_TERCERO  IS NOT NULL
    //   AND :V_TIPIDEN  IS NOT NULL
    //   AND :V_QUIENREF IS NOT NULL
    //   AND :V_TIPORIG  IS NOT NULL;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    V_BOOLEAN := NULL;
    //   END;
    //   IF V_BOOLEAN IS NULL THEN
    //    LIB$DTNERFRMA('PARA LA CONSULTA GENERAL OPCIÓN NIVEL 2 ES NECESARIO ESCOJER LOS SIGUIENTES CAMPOS:'
    //           ||'IDENTIFICACIÓN, '||'TERCERO, '||'TIPO ORIGEN, '||'Ó QUIEN REFIERE'
    //           );
    //   ELSE
    //    GO_BLOCK('BESPECIFICA');
    //    GO_ITEM('V_GENCONSUL');
    //   END IF;
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_btipcon_tipgeneral_whenRadioChanged() {
        console.log("Entering CMFMENU_btipcon_tipgeneral_whenRadioChanged");
        let V_BOOLEAN: string = null;
        // if (TIPGENERAL == "1") {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("V_PERFIL", V_PERFIL);
        //     payload1.set("V_CNOREV", V_CNOREV);
        //     payload1.set("V_CTIEMPO", V_CTIEMPO);
        //     payload1.set("V_CTIEMPOVEN", V_CTIEMPOVEN);
        //     payload1.set("V_CSIRENOV", V_CSIRENOV);
        //     payload1.set("V_COMPRO", V_COMPRO);
        //     // call REST API
        //     const result1 = await Rest.post("/cmfmenu_btipcon/cmfmenu_btipcon_tipgeneral_whenradiochanged_query1", payload1);
        //     // get values from result
        //     V_BOOLEAN = result1[0].get("V_BOOLEAN");
        //     if (result1 == null || result1.length == 0) {

        //         V_BOOLEAN = null;
        //     }

        //     if ((V_BOOLEAN == null)) {
        //         // CMFMENU_LIB$DTNERFRMA("PARA LA CONSULTA GENERAL OPCIÓN NIVEL 1 ES NECESARIO ESCOJER LOS SIGUIENTES CAMPOS:" + "PERFIL, " + "GESTION, " + "Y TODOS LOS DE TIEMPOS");
        //     }
        //     else {
        //         this.oracleFormsBuiltins.go_block("BESPECIFICA");
        //         this.oracleFormsBuiltins.go_item("V_GENCONSUL");
        //     }
        // }
        // else if (TIPGENERAL == "2") {
        //     // construct payload
        //     let payload2 = new Map();
        //     payload2.set("V_TERCERO", V_TERCERO);
        //     payload2.set("V_TIPIDEN", V_TIPIDEN);
        //     payload2.set("V_QUIENREF", V_QUIENREF);
        //     payload2.set("V_TIPORIG", V_TIPORIG);
        //     // call REST API
        //     const result2 = await Rest.post("/cmfmenu_btipcon/cmfmenu_btipcon_tipgeneral_whenradiochanged_query2", payload2);
        //     // get values from result
        //     V_BOOLEAN = result2[0].get("V_BOOLEAN");
        //     if (result2 == null || result2.length == 0) {

        //         V_BOOLEAN = null;
        //     }

        //     if ((V_BOOLEAN == null)) {
        //         // CMFMENU_LIB$DTNERFRMA("PARA LA CONSULTA GENERAL OPCIÓN NIVEL 2 ES NECESARIO ESCOJER LOS SIGUIENTES CAMPOS:" + "IDENTIFICACIÓN, " + "TERCERO, " + "TIPO ORIGEN, " + "Ó QUIEN REFIERE");
        //     }
        //     else {
        //         this.oracleFormsBuiltins.go_block("BESPECIFICA");
        //         this.oracleFormsBuiltins.go_item("V_GENCONSUL");
        //     }
        // }
        console.log("Exiting CMFMENU_btipcon_tipgeneral_whenRadioChanged");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT",'');
    // UP;
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT", NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT)); END;
    //#endregion
    async CMFMENU_covpiedra_keyUp() {
        console.log("Entering CMFMENU_covpiedra_keyUp");
        this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", "");
        this.oracleFormsBuiltins.up();
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
        console.log("Exiting CMFMENU_covpiedra_keyUp");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT",'');
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT",NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT));
//    // SYNCHRONIZE; END;
    //#endregion
    async CMFMENU_covpiedra_postQuery() {
        console.log("Entering CMFMENU_covpiedra_postQuery");
        this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", "");
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
//        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CMFMENU_covpiedra_postQuery");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT",'');
    // DOWN;
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT",NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT)); END;
    //#endregion
    async CMFMENU_covpiedra_keyDown() {
        console.log("Entering CMFMENU_covpiedra_keyDown");
        this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", "");
        this.oracleFormsBuiltins.down();
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
        console.log("Exiting CMFMENU_covpiedra_keyDown");
    }

    //#region PLSQL
    // BEGIN PR_AYUPIEDRA; END;
    //#endregion
    async CMFMENU_covpiedra_piedraImagen_whenMouseDoubleclick() {
        console.log("Entering CMFMENU_covpiedra_piedraImagen_whenMouseDoubleclick");
        // CMFMENU_PR_AYUPIEDRA();
        console.log("Exiting CMFMENU_covpiedra_piedraImagen_whenMouseDoubleclick");
    }

    //#region PLSQL
    // DECLARE
    //  VOMEN CMTOPCMEN%ROWTYPE;
    // BEGIN
    //   PU_OPCIONES(:CMTPERROL.PERMVE_OPMENU, VOMEN);
    //  :CMTPERROL.DES_OPMEN := INITCAP(VOMEN.OPCION_DESCRI);
    //  EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //       NULL;
    // END;
    //#endregion
    async CMFMENU_cmtperrol_postQuery() {
        console.log("Entering CMFMENU_cmtperrol_postQuery");
        let VOMEN: null = null;
        // CMFMENU_PU_OPCIONES(CMTPERROL.PERMVE_OPMENU, VOMEN);
        // this.CMTPERROL.DES_OPMEN = INITCAP(VOMEN.OPCION_DESCRI);
        // if (result0 == null || result0.length == 0) {

        // }

        console.log("Exiting CMFMENU_cmtperrol_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :BTER.NIT IS NOT NULL THEN
    // GO_BLOCK('PARAGESTION');
    // GO_BLOCK('BTER');
    // EXECUTE_QUERY;
//    // SYNCHRONIZE;
    // ELSE
    //  GO_BLOCK('PARAGESTION');
//    //   SYNCHRONIZE;
    //   END IF;
    //  --:GLOBAL.AUXTERCERO := :BDETSEGPRX.NITRESUM; END;
    //#endregion
    async CMFMENU_parametros_vCerrreasig_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_vCerrreasig_whenButtonPressed");
        if ((this.BTER.NIT != null)) {
            this.oracleFormsBuiltins.go_block("PARAGESTION");
            this.oracleFormsBuiltins.go_block("BTER");
            this.oracleFormsBuiltins.execute_query();
//            this.oracleFormsBuiltins.synchronize();
        }
        else {
            this.oracleFormsBuiltins.go_block("PARAGESTION");
//            this.oracleFormsBuiltins.synchronize();
        }
        console.log("Exiting CMFMENU_parametros_vCerrreasig_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON NUMBER;
    //   VCAMPOANT VARCHAR2(256);
    //   LPCOGENID PARAMLIST;
    //   T_RESPUESTA NUMBER;
    // BEGIN
    //   LIB$ALERTA('MENSAJE','ESCOJA EL MODO DE EXTRACCIÓN'
    //           ,'ARCHIVO PLANO', 'CANCELAR' , NULL, VBOTON);
    //   IF VBOTON = 2 THEN
    //    LIB$ALERTA('MENSAJE','PROCESO CANCELADO POR EL USUARIO.',NULL,NULL,NULL,T_RESPUESTA);   
    //   ELSIF VBOTON = 1 THEN
    //     GO_BLOCK('BESPE');
    //     EXECUTE_QUERY;
    //     :this.PARAMETER.get("PBLOACT") := 'BESPE';  
    //     GO_ITEM('BBOTONES.ARCHIVOB');
    //     :BBOTONES.ARCHIVOB := :this.PARAMETER.get("PARCONG");
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_parametros_vArchiseg_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_vArchiseg_whenButtonPressed");
        let VBOTON: number = null;
        let VCAMPOANT: string = null;
        let LPCOGENID: number = null;
        let T_RESPUESTA: number = null;
        // CMFMENU_LIB$ALERTA("MENSAJE", "ESCOJA EL MODO DE EXTRACCIÓN", "ARCHIVO PLANO", "CANCELAR", null, VBOTON);
        if (VBOTON == 2) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "PROCESO CANCELADO POR EL USUARIO.", null, null, null, T_RESPUESTA);
        }
        else if (VBOTON == 1) {
            this.oracleFormsBuiltins.go_block("BESPE");
            this.oracleFormsBuiltins.execute_query();
            this.PARAMETER.set("PBLOACT", "BESPE");
            this.oracleFormsBuiltins.go_item("BBOTONES.ARCHIVOB");
            this.BBOTONES.ARCHIVOB = this.PARAMETER.get("PARCONG");
        }
        console.log("Exiting CMFMENU_parametros_vArchiseg_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON NUMBER;
    //   VCAMPOANT VARCHAR2(256);
    //   LPCOGENID PARAMLIST;
    //   T_RESPUESTA NUMBER;
    // BEGIN
    //   LIB$ALERTA('MENSAJE','ESCOJA EL MODO DE EXTRACCIÓN'
    //           ,'ARCHIVO PLANO', 'CANCELAR' , NULL, VBOTON);
    //   IF VBOTON = 2 THEN
    //    LIB$ALERTA('MENSAJE','PROCESO CANCELADO POR EL USUARIO.',NULL,NULL,NULL,T_RESPUESTA);   
    //   ELSIF VBOTON = 1 THEN
    //     /*GO_BLOCK('BESPEREF');
    //     EXECUTE_QUERY;
    //     :this.PARAMETER.get("PBLOACT") := 'BESPEREF'; */ 
    //     GO_ITEM('BBOTONES.ARCHIVOB');
    //     :BBOTONES.ARCHIVOB := :this.PARAMETER.get("PARCONG");
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_parametros_vArchiref_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_vArchiref_whenButtonPressed");
        let VBOTON: number = null;
        let VCAMPOANT: string = null;
        let LPCOGENID: number = null;
        let T_RESPUESTA: number = null;
        // CMFMENU_LIB$ALERTA("MENSAJE", "ESCOJA EL MODO DE EXTRACCIÓN", "ARCHIVO PLANO", "CANCELAR", null, VBOTON);
        if (VBOTON == 2) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "PROCESO CANCELADO POR EL USUARIO.", null, null, null, T_RESPUESTA);
        }
        else if (VBOTON == 1) {
            this.oracleFormsBuiltins.go_item("BBOTONES.ARCHIVOB");
            this.BBOTONES.ARCHIVOB = this.PARAMETER.get("PARCONG");
        }
        console.log("Exiting CMFMENU_parametros_vArchiref_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  SHOW_VIEW('PMENU');
    //  GO_BLOCK('VLTOPCIO');
    //  SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    // IF :this.PARAMETER.get("POPCION") IS NOT NULL THEN
    //   IF :this.PARAMETER.get("POPCION") ='ADMONVTAS' THEN
    //      -- IMAG
    //     --PLEERIMGEN('ADMONVTAS1.JPG','JPEG','BASE.IMBIENV');
    //     HIDE_VIEW(:this.PARAMETER.get("POPCIONANT"));
    //     SET_ITEM_PROPERTY ('IMBIENV',POSITION, 176,20);
    //   ELSIF NVL(:this.PARAMETER.get("POPCIONANT"),'!') <> :this.PARAMETER.get("POPCION") THEN
    //    IF :this.PARAMETER.get("POPCION") = 'PAG3' THEN
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148, 16);
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440,289);
    //   ELSIF :this.PARAMETER.get("POPCION") = 'PAG63' THEN
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148, 16);
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440,289);
    //   ELSIF :this.PARAMETER.get("POPCION") = 'PAG5' THEN
    //      GO_BLOCK('AGENDA');
    //    ELSIF :this.PARAMETER.get("POPCION") = 'PAG4' THEN
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148, 16);
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440,289);     
    //   ELSE   
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148, 16);
    //    END IF;    
    //      IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW(:this.PARAMETER.get("POPCIONANT"));
    //     END IF;
    //   END IF;
    // ELSE
    //   SET_ITEM_PROPERTY ('IMBIENV',POSITION, 176,20);
    // END IF; 
    // END;
    //#endregion
    async CMFMENU_parametros_verMenu_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_verMenu_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("PMENU");
        this.oracleFormsBuiltins.go_block("VLTOPCIO");
        this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
        if ((this.PARAMETER.get("POPCION") != null)) {
            if (this.PARAMETER.get("POPCION") == "ADMONVTAS") {
                this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                this.oracleFormsBuiltins.set_item_property("IMBIENV", "POSITION", 176);
            }
            else if (this.PARAMETER.get("POPCIONANT") == null ? "!" : this.PARAMETER.get("POPCIONANT") != this.PARAMETER.get("POPCION")) {
                if (this.PARAMETER.get("POPCION") == "PAG3") {
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148, 16);
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440, 289);
                }
                else if (this.PARAMETER.get("POPCION") == "PAG63") {
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148, 16);
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440, 289);
                }
                else if (this.PARAMETER.get("POPCION") == "PAG5") {
                    this.oracleFormsBuiltins.go_block("AGENDA");
                }
                else if (this.PARAMETER.get("POPCION") == "PAG4") {
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148, 16);
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440, 289);
                }
                else {
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148, 16);
                }
                if ((this.PARAMETER.get("POPCIONANT") != null)) {
                    this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                }
            }
        }
        else {
            // this.oracleFormsBuiltins.set_item_property("IMBIENV", "POSITION", 176, 20);
        }
        console.log("Exiting CMFMENU_parametros_verMenu_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('SEGPRXCONTAC');
    // :V_VERCONT := 'N';
//    // SYNCHRONIZE; END;
    //#endregion
    async CMFMENU_parametros_cDprcontac_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_cDprcontac_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("SEGPRXCONTAC");
        // this.PARAMETROS.V_VERCONT = "N";
//        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CMFMENU_parametros_cDprcontac_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('PAG63');
    // GO_BLOCK('BTER'); END;
    //#endregion
    async CMFMENU_parametros_salirClientes_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_salirClientes_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("PAG63");
        this.oracleFormsBuiltins.go_block("BTER");
        console.log("Exiting CMFMENU_parametros_salirClientes_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('PNVOSEGUI');
    // :V_VERCOMP := 'N';
    // SHOW_VIEW('PMENU');
    // SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    // GO_BLOCK('VLTOPCIO');
//    // SYNCHRONIZE;
    // IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //  IF :this.PARAMETER.get("POPCIONANT") ='ADMONVTAS' THEN
    //     -- IMAG
    //     --PLEERIMGEN('ADMONVTAS1.JPG','JPEG','BASE.IMBIENV');
    //     HIDE_VIEW(:this.PARAMETER.get("POPCION"));
    //     SET_ITEM_PROPERTY ('IMBIENV',POSITION, 176,20);
    //   ELSIF :this.PARAMETER.get("POPCIONANT") = 'PAG3' THEN
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCIONANT"), "DISPLAY_POSITION", 148, 16);
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCIONANT"), "VIEW_SIZE", 440,289);
    //  ELSIF :this.PARAMETER.get("POPCIONANT") = 'PAG63' THEN
    //       SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCIONANT"), "DISPLAY_POSITION", 148, 16);
    //       SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCIONANT"), "VIEW_SIZE", 440,289);
    //  ELSIF :this.PARAMETER.get("POPCIONANT") = 'PAG4' THEN
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCIONANT"), "DISPLAY_POSITION", 148, 16);
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCIONANT"), "VIEW_SIZE", 440,289);     
    //  ELSE   
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCIONANT"), "DISPLAY_POSITION", 148, 16);
    //  END IF;    
    // END IF; END;
    //#endregion
    async CMFMENU_parametros_regresar_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_regresar_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("PNVOSEGUI");
        // this.PARAMETROS.V_VERCOMP = "N";
        this.oracleFormsBuiltins.show_view("PMENU");
        this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
        this.oracleFormsBuiltins.go_block("VLTOPCIO");
//        this.oracleFormsBuiltins.synchronize();
        if ((this.PARAMETER.get("POPCIONANT") != null)) {
            // if (this.PARAMETER.get("POPCIONANT") == "ADMONVTAS") {
            //     this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCION"));
            //     this.oracleFormsBuiltins.set_item_property("IMBIENV", POSITION, 176, 20);
            // }
            // else if (this.PARAMETER.get("POPCIONANT") == "PAG3") {
            //     this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCIONANT"), "DISPLAY_POSITION", 148, 16);
            //     this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCIONANT"), "VIEW_SIZE", 440, 289);
            // }
            // else if (this.PARAMETER.get("POPCIONANT") == "PAG63") {
            //     this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCIONANT"), "DISPLAY_POSITION", 148, 16);
            //     this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCIONANT"), "VIEW_SIZE", 440, 289);
            // }
            // else if (this.PARAMETER.get("POPCIONANT") == "PAG4") {
            //     this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCIONANT"), "DISPLAY_POSITION", 148, 16);
            //     this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCIONANT"), "VIEW_SIZE", 440, 289);
            // }
            // else {
            //     this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCIONANT"), "DISPLAY_POSITION", 148, 16);
            // }
        }
        console.log("Exiting CMFMENU_parametros_regresar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON NUMBER;
    //   VCAMPOANT VARCHAR2(256);
    //   LPCOGENID PARAMLIST;
    //   T_RESPUESTA NUMBER;
    // BEGIN
    //   LIB$ALERTA('MENSAJE','ESCOJA EL MODO DE EXTRACCIÓN'
    //           ,'ARCHIVO PLANO', 'CANCELAR' , NULL, VBOTON);
    //   IF VBOTON = 2 THEN
    //    LIB$ALERTA('MENSAJE','PROCESO CANCELADO POR EL USUARIO.',NULL,NULL,NULL,T_RESPUESTA);   
    //   ELSIF VBOTON = 1 THEN
    //     GO_BLOCK('BESPECTO');
    //     EXECUTE_QUERY;
    //     :this.PARAMETER.get("PBLOACT") := 'BESPECTO';  
    //     GO_ITEM('BBOTONES.ARCHIVOB');
    //     :BBOTONES.ARCHIVOB := :this.PARAMETER.get("PARCONG");
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_parametros_vArchictos_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_vArchictos_whenButtonPressed");
        let VBOTON: number = null;
        let VCAMPOANT: string = null;
        let LPCOGENID: number = null;
        let T_RESPUESTA: number = null;
        // CMFMENU_LIB$ALERTA("MENSAJE", "ESCOJA EL MODO DE EXTRACCIÓN", "ARCHIVO PLANO", "CANCELAR", null, VBOTON);
        if (VBOTON == 2) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "PROCESO CANCELADO POR EL USUARIO.", null, null, null, T_RESPUESTA);
        }
        else if (VBOTON == 1) {
            this.oracleFormsBuiltins.go_block("BESPECTO");
            this.oracleFormsBuiltins.execute_query();
            this.PARAMETER.set("PBLOACT", "BESPECTO");
            this.oracleFormsBuiltins.go_item("BBOTONES.ARCHIVOB");
            this.BBOTONES.ARCHIVOB = this.PARAMETER.get("PARCONG");
        }
        console.log("Exiting CMFMENU_parametros_vArchictos_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('PAG63');
    // GO_BLOCK('BTER'); END;
    //#endregion
    async CMFMENU_parametros_salirReferido_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_salirReferido_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("PAG63");
        this.oracleFormsBuiltins.go_block("BTER");
        console.log("Exiting CMFMENU_parametros_salirReferido_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('RESUMEN');
//    // SYNCHRONIZE; END;
    //#endregion
    async CMFMENU_parametros_cerrarN_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_cerrarN_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("RESUMEN");
//        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CMFMENU_parametros_cerrarN_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN /* ANTES 7818
    // IF :BTER.NIT IS NOT NULL THEN
    // GO_BLOCK('PARAGESTION');
    // GO_BLOCK('BTER');
    // EXECUTE_QUERY;
//    // SYNCHRONIZE;
    // ELSE
    //  GO_BLOCK('PARAGESTION');
//    //   SYNCHRONIZE;
    // END IF;
    // ANTES 7818
    // */
    //  --:GLOBAL.AUXTERCERO := :BDETSEGPRX.NITRESUM;
    //  
    // IF :BTER.NIT IS NOT NULL THEN
    //  
    //  HIDE_VIEW('PGREASIGCAPTA');   
    //  GO_BLOCK('BTER');
    //   GO_ITEM('BTER.NIT');
    //   NEXT_ITEM;
    // 
    // 
    // END IF; END;
    //#endregion
    async CMFMENU_parametros_vCerrarreasigcapta_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_vCerrarreasigcapta_whenButtonPressed");
        if ((this.BTER.NIT != null)) {
            this.oracleFormsBuiltins.hide_view("PGREASIGCAPTA");
            this.oracleFormsBuiltins.go_block("BTER");
            this.oracleFormsBuiltins.go_item("BTER.NIT");
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CMFMENU_parametros_vCerrarreasigcapta_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('PAG63');
    // GO_BLOCK('BTER'); END;
    //#endregion
    async CMFMENU_parametros_salirContrato_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_salirContrato_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("PAG63");
        this.oracleFormsBuiltins.go_block("BTER");
        console.log("Exiting CMFMENU_parametros_salirContrato_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('RESUMEN');
//    // SYNCHRONIZE; END;
    //#endregion
    async CMFMENU_parametros_cerrar_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_cerrar_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("RESUMEN");
//        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CMFMENU_parametros_cerrar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('RESUMEN');
    // :V_VERCLI := 'N';
//    // SYNCHRONIZE; END;
    //#endregion
    async CMFMENU_parametros_cClixcom_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_cClixcom_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("RESUMEN");
        // this.PARAMETROS.V_VERCLI = "N";
//        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CMFMENU_parametros_cClixcom_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('PAG63');
    // GO_BLOCK('BTER'); END;
    //#endregion
    async CMFMENU_parametros_salir_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_salir_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("PAG63");
        this.oracleFormsBuiltins.go_block("BTER");
        console.log("Exiting CMFMENU_parametros_salir_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON NUMBER;
    //   VCAMPOANT VARCHAR2(256);
    //   LPCOGENID PARAMLIST;
    //   T_RESPUESTA NUMBER;
    // BEGIN
    //   LIB$ALERTA('MENSAJE','ESCOJA EL MODO DE EXTRACCIÓN'
    //           ,'ARCHIVO PLANO', 'CANCELAR' , NULL, VBOTON);
    //   IF VBOTON = 2 THEN
    //    LIB$ALERTA('MENSAJE','PROCESO CANCELADO POR EL USUARIO.',NULL,NULL,NULL,T_RESPUESTA);   
    //   ELSIF VBOTON = 1 THEN
    //     GO_BLOCK('BESPECLIE');
    //     EXECUTE_QUERY;
    //     :this.PARAMETER.get("PBLOACT") := 'BESPECLIE';  
    //     GO_ITEM('BBOTONES.ARCHIVOB');
    //     :BBOTONES.ARCHIVOB := :this.PARAMETER.get("PARCONG");
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_parametros_vArchiclie_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_vArchiclie_whenButtonPressed");
        let VBOTON: number = null;
        let VCAMPOANT: string = null;
        let LPCOGENID: number = null;
        let T_RESPUESTA: number = null;
        // CMFMENU_LIB$ALERTA("MENSAJE", "ESCOJA EL MODO DE EXTRACCIÓN", "ARCHIVO PLANO", "CANCELAR", null, VBOTON);
        if (VBOTON == 2) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "PROCESO CANCELADO POR EL USUARIO.", null, null, null, T_RESPUESTA);
        }
        else if (VBOTON == 1) {
            this.oracleFormsBuiltins.go_block("BESPECLIE");
            this.oracleFormsBuiltins.execute_query();
            this.PARAMETER.set("PBLOACT", "BESPECLIE");
            this.oracleFormsBuiltins.go_item("BBOTONES.ARCHIVOB");
            this.BBOTONES.ARCHIVOB = this.PARAMETER.get("PARCONG");
        }
        console.log("Exiting CMFMENU_parametros_vArchiclie_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('PMENU');
    // GO_BLOCK('PARAMETROS');
    // SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_ON');
    // IF :this.PARAMETER.get("POPCION") IS NOT NULL THEN
    //   IF :this.PARAMETER.get("POPCION") ='ADMONVTAS' THEN
    //     -- IMAG
    //     --PLEERIMGEN('ADMONVTAS1.JPG','JPEG','BASE.IMBIENV');
    //     HIDE_VIEW(:this.PARAMETER.get("POPCIONANT"));
    //     IF :this.PARAMETER.get("POPCIONANT") IS NULL THEN
    //       SET_ITEM_PROPERTY ('IMBIENV',POSITION, 100,20);
    //     END IF;
    //  ELSIF NVL(:this.PARAMETER.get("POPCIONANT"),'!') <> :this.PARAMETER.get("POPCION") THEN 
    //   IF :this.PARAMETER.get("POPCION") = 'PAG3' THEN
    //     SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);--20 
    //     SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590,289);
    //     ELSIF :this.PARAMETER.get("POPCION") = 'PAG4' THEN
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590,289);         
    //   ELSIF :this.PARAMETER.get("POPCION") = 'PAG63' THEN
    //     SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 7, 16);--20 
    //     SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 575,289);    
    //   ELSIF :this.PARAMETER.get("POPCION") = 'PAG5' THEN
    //     GO_BLOCK('AGENDA');
    //   ELSE   
    //    SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 75, 16);--20
    //    END IF;
    //    IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //      HIDE_VIEW(:this.PARAMETER.get("POPCIONANT"));
    //    END IF;
    //   END IF;
    // ELSE
    //    SET_ITEM_PROPERTY ('IMBIENV',POSITION, 100,20);
    // END IF; END;
    //#endregion
    async CMFMENU_parametros_cerrarMenu_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_cerrarMenu_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("PMENU");
        this.oracleFormsBuiltins.go_block("PARAMETROS");
        this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_ON");
        if ((this.PARAMETER.get("POPCION") != null)) {
            if (this.PARAMETER.get("POPCION") == "ADMONVTAS") {
                this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                if ((this.PARAMETER.get("POPCIONANT") == null)) {
                    this.oracleFormsBuiltins.set_item_property("IMBIENV", "POSITION", 100);
                }
            }
            else if (this.PARAMETER.get("POPCIONANT") == null ? "!" : this.PARAMETER.get("POPCIONANT") != this.PARAMETER.get("POPCION")) {
                if (this.PARAMETER.get("POPCION") == "PAG3") {
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590, 289);
                }
                else if (this.PARAMETER.get("POPCION") == "PAG4") {
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590, 289);
                }
                else if (this.PARAMETER.get("POPCION") == "PAG63") {
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 7, 16);
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 575, 289);
                }
                else if (this.PARAMETER.get("POPCION") == "PAG5") {
                    this.oracleFormsBuiltins.go_block("AGENDA");
                }
                else {
                    // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 75, 16);
                }
                if ((this.PARAMETER.get("POPCIONANT") != null)) {
                    this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                }
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("IMBIENV", "POSITION", 100);
        }
        console.log("Exiting CMFMENU_parametros_cerrarMenu_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('RESUMEN');
//    // SYNCHRONIZE; END;
    //#endregion
    async CMFMENU_parametros_cerrBolsa_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_cerrBolsa_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("RESUMEN");
//        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CMFMENU_parametros_cerrBolsa_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('BGEN1');
//    // SYNCHRONIZE; END;
    //#endregion
    async CMFMENU_parametros_vCerrdetnivel1_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_vCerrdetnivel1_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("BGEN1");
//        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CMFMENU_parametros_vCerrdetnivel1_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('BPARAMAGE');
    // HIDE_VIEW('PNVOSEGUI'); END;
    //#endregion
    async CMFMENU_parametros_vCernvosegui_whenButtonPressed() {
        console.log("Entering CMFMENU_parametros_vCernvosegui_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("BPARAMAGE");
        this.oracleFormsBuiltins.hide_view("PNVOSEGUI");
        console.log("Exiting CMFMENU_parametros_vCernvosegui_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  BEGIN
    //  IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','JM','AM','GI','AP') THEN
    //    LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL, SELECCIONELO Y EJECUTE LA CONSULTA',NULL,NULL,NULL,T_RESPUESTA);  
    //  ELSIF :this.PARAMETER.get("PCARGO") = ('SR') AND :this.PARAMETER.get("PPLAZU") <> :this.PARAMETER.get("POFCNA") THEN--QUE ES BOGOTA UNO Y BTA DOS
    //   LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR LOS COMERCIALES DE SU PLAZA COMERCIAL',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSIF :this.PARAMETER.get("PCARGO") = ('SR') AND :this.PARAMETER.get("PPLAZU") = :this.PARAMETER.get("POFCNA") THEN--QUE ES REGIONAL  
    //     LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR LOS COMERCIALES Y FREE-LANCE DE SU PLAZA COMERCIAL',NULL,NULL,NULL,T_RESPUESTA); 
    //  ELSE
    //   LIB$ALERTA('MENSAJE','SU JERARQUÍA LE IMPIDE CONSULTAR UN COMERCIAL DIFERENTE AL SUYO.',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;
    //  END;
    // ENTER_QUERY;
    //  
    //#endregion
    async CMFMENU_bdetsegprx_keyEntqry() {
        console.log("Entering CMFMENU_bdetsegprx_keyEntqry");
        let T_RESPUESTA: number = null;
        if (["GF", "GC", "JM", "AM", "GI", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL, SELECCIONELO Y EJECUTE LA CONSULTA", null, null, null, T_RESPUESTA);
        }
        else if ((this.PARAMETER.get("PCARGO") == "SR" && this.PARAMETER.get("PPLAZU") != this.PARAMETER.get("POFCNA"))) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SU JERARQUÍA LE PERMITE CONSULTAR LOS COMERCIALES DE SU PLAZA COMERCIAL", null, null, null, T_RESPUESTA);
        }
        else if ((this.PARAMETER.get("PCARGO") == "SR" && this.PARAMETER.get("PPLAZU") == this.PARAMETER.get("POFCNA"))) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SU JERARQUÍA LE PERMITE CONSULTAR LOS COMERCIALES Y FREE-LANCE DE SU PLAZA COMERCIAL", null, null, null, T_RESPUESTA);
        }
        else {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SU JERARQUÍA LE IMPIDE CONSULTAR UN COMERCIAL DIFERENTE AL SUYO.", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CMFMENU_bdetsegprx_keyEntqry");
    }

    //#region PLSQL
    // BEGIN --IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','JM','AM','SR','GI','JP') THEN
    // IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','JM','AM','SR','GI','JP','TS','AP') THEN 
    //  :this.PARAMETER.get("PCODCOMER") := NULL;
    //  :this.PARAMETER.get("PCODCOMER"):=NVL(:BDETSEGPRX.CODCOMER,:this.PARAMETER.get("PCODCOMER"));
    // ELSE
    //   IF :this.PARAMETER.get("PCCOM") IS NULL THEN
    //     :this.PARAMETER.get("PCODCOMER"):=NVL(:BDETSEGPRX.CODCOMER,:this.PARAMETER.get("PCODCOMER"));
    //   END IF;
    // END IF; END;
    //#endregion
    async CMFMENU_bdetsegprx_preQuery() {
        console.log("Entering CMFMENU_bdetsegprx_preQuery");
        if (["GF", "GC", "JM", "AM", "SR", "GI", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            this.PARAMETER.set("PCODCOMER", null);
            this.PARAMETER.set("PCODCOMER", this.BDETSEGPRX.CODCOMER == null ? this.PARAMETER.get("PCODCOMER") : this.BDETSEGPRX.CODCOMER);
        }
        else {
            if ((this.PARAMETER.get("PCCOM") == null)) {
                this.PARAMETER.set("PCODCOMER", this.BDETSEGPRX.CODCOMER == null ? this.PARAMETER.get("PCODCOMER") : this.BDETSEGPRX.CODCOMER);
            }
        }
        console.log("Exiting CMFMENU_bdetsegprx_preQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_DETRESCONTAC;
    // BEGIN
    // PQBD_COL_ADMVEN.PDETCONTAC(BK_DATA, :this.PARAMETER.get("PCODCOMER"), :V_CONTAC, :V_CONPERFIL, :this.PARAMETER.get("PCARGO"), :this.PARAMETER.get("PPLAZU"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BDETSEGPRX');
    // END;
    //#endregion
    async CMFMENU_bdetsegprx_queryProcedure() {
        console.log("Entering CMFMENU_bdetsegprx_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PDETCONTAC(BK_DATA, this.PARAMETER.get("PCODCOMER"), V_CONTAC, V_CONPERFIL, this.PARAMETER.get("PCARGO"), this.PARAMETER.get("PPLAZU"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BDETSEGPRX");
        console.log("Exiting CMFMENU_bdetsegprx_queryProcedure");
    }

    //#region PLSQL
    // DECLARE 
    //  DUMMY BOOLEAN;
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','JM','AM','GI','AP','SR') THEN
    //   :this.PARAMETER.get("PPLAZU")   := NULL;
    //   :this.PARAMETER.get("PCTPOCOM") := NULL;
    //   :this.PARAMETER.get("PCCOM")    := NULL;
    //    DUMMY := SHOW_LOV('LOV_COMERPLAZA', 15,10); 
    //  /*ELSIF :this.PARAMETER.get("PCARGO") = ('SR') AND :this.PARAMETER.get("PPLAZU") <> :this.PARAMETER.get("POFCNA") THEN--QUE ES BOGOTA UNO Y BTA DOS
    //   --SE DEJA LA PLAZA DEL COMERCIAL DEL CARGO SR
    //   :this.PARAMETER.get("PCCOM")    := NULL;
    //   DUMMY := SHOW_LOV('LOV_COMERBTA1', 15,10);
    //  ELSIF :this.PARAMETER.get("PCARGO") = ('SR') AND :this.PARAMETER.get("PPLAZU") = :this.PARAMETER.get("POFCNA") THEN--QUE ES REGIONAL  
    //   :this.PARAMETER.get("PCTPOCOM") := NULL;
    //   :this.PARAMETER.get("PCCOM")    := NULL;
    //   DUMMY := SHOW_LOV('LOV_COMERPLAZA', 15,10);
    //  ELSE
    //   :this.PARAMETER.get("PCTPOCOM") := :this.PARAMETER.get("PTIPCOMER");
    //   :this.PARAMETER.get("PCCOM")    := :this.PARAMETER.get("PCODCOMER");
    //   DUMMY := SHOW_LOV('LOV_COMERPLAZA', 15,10);  
    //   */
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_bdetsegprx_codcomer_keyListval() {
        console.log("Entering CMFMENU_bdetsegprx_codcomer_keyListval");
        let DUMMY: boolean = null;
        let T_RESPUESTA: number = null;
        if (["GF", "GC", "JM", "AM", "GI", "AP", "SR"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            this.PARAMETER.set("PPLAZU", null);
            this.PARAMETER.set("PCTPOCOM", null);
            this.PARAMETER.set("PCCOM", null);
            DUMMY = this.oracleFormsBuiltins.show_lov("LOV_COMERPLAZA", 15, 10);
        }
        console.log("Exiting CMFMENU_bdetsegprx_codcomer_keyListval");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //  VCONDICION   VARCHAR2(200);
    // BEGIN
    //  IF :V_IRAINFGESTION = 'S' THEN
    //   SET_VIEW_PROPERTY ('PAG3', "DISPLAY_POSITION", 7, 16);--20 
    //   SET_VIEW_PROPERTY ('PAG3', "VIEW_SIZE", 580,289);
    //   :GLOBAL.AUXTERCERO := :BDETSEGPRX.NITRESUM;
    //     GO_BLOCK('BTER');
    //     --EXECUTE_QUERY;--PY 14106
    //   EXECUTE_QUERY(NO_VALIDATE);
//    //     SYNCHRONIZE;
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_bdetsegprx_vIrainfgestion_whenCheckboxChanged() {
        console.log("Entering CMFMENU_bdetsegprx_vIrainfgestion_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let VCONDICION: string = null;
        // if (V_IRAINFGESTION == "S") {
        //     this.oracleFormsBuiltins.set_view_property("PAG3", "DISPLAY_POSITION", 7, 16);
        //     this.oracleFormsBuiltins.set_view_property("PAG3", "VIEW_SIZE", 580, 289);
        //     this.GLOBAL.AUXTERCERO = this.BDETSEGPRX.NITRESUM;
        //     this.oracleFormsBuiltins.go_block("BTER");
        //     this.oracleFormsBuiltins.execute_query(NO_VALIDATE);
//        //     this.oracleFormsBuiltins.synchronize();
        // }
        console.log("Exiting CMFMENU_bdetsegprx_vIrainfgestion_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //  VCONDICION   VARCHAR2(200);
    //  VCONDICION2  VARCHAR2(200);
    //  VCONDICION3  VARCHAR2(200);
    // BEGIN
    //  IF :V_REASIGRESUMEN = 'S' THEN
    //   HIDE_VIEW('PAGSTACK_5');
    //    VCONDICION := 'COM_CODIGO = NVL(:BDETSEGPRX.CODCOMER,COM_CODIGO)' ;--ARQUITECTURA
    //     VCONDICION2 := 'CXT_NIT   = NVL(:BDETSEGPRX.NITRESUM,CXT_NIT)';
    //     SET_BLOCK_PROPERTY('SETCOMCIA',DEFAULT_WHERE,VCONDICION);
    //     SET_BLOCK_PROPERTY('SETTERXCOM',DEFAULT_WHERE,VCONDICION2);
    //     GO_BLOCK('SETCOMCIA');
    //     EXECUTE_QUERY;
    //     VCONDICION3 := 'COM_CODIGO = NVL(:AGENDA.CODAQUIEN,COM_CODIGO)';
    //     SET_BLOCK_PROPERTY('SETCOMCIA_NEW',DEFAULT_WHERE,VCONDICION3);
    //     GO_BLOCK('SETCOMCIA_NEW');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('SETCOMCIA');
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_bdetsegprx_vReasigresumen_whenCheckboxChanged() {
        console.log("Entering CMFMENU_bdetsegprx_vReasigresumen_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let VCONDICION: string = null;
        let VCONDICION2: string = null;
        let VCONDICION3: string = null;
        // if (V_REASIGRESUMEN == "S") {
        //     this.oracleFormsBuiltins.hide_view("PAGSTACK_5");
        //     VCONDICION = "COM_CODIGO = NVL(:BDETSEGPRX.CODCOMER,COM_CODIGO)";
        //     VCONDICION2 = "CXT_NIT   = NVL(:BDETSEGPRX.NITRESUM,CXT_NIT)";
        //     this.oracleFormsBuiltins.set_block_property("SETCOMCIA", "DEFAULT_WHERE", VCONDICION);
        //     this.oracleFormsBuiltins.set_block_property("SETTERXCOM", "DEFAULT_WHERE", VCONDICION2);
        //     this.oracleFormsBuiltins.go_block("SETCOMCIA");
        //     this.oracleFormsBuiltins.execute_query();
        //     VCONDICION3 = "COM_CODIGO = NVL(:AGENDA.CODAQUIEN,COM_CODIGO)";
        //     this.oracleFormsBuiltins.set_block_property("SETCOMCIA_NEW", "DEFAULT_WHERE", VCONDICION3);
        //     this.oracleFormsBuiltins.go_block("SETCOMCIA_NEW");
        //     this.oracleFormsBuiltins.execute_query();
        //     this.oracleFormsBuiltins.go_block("SETCOMCIA");
        // }
        console.log("Exiting CMFMENU_bdetsegprx_vReasigresumen_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_cmtdominios_postTextItem() {
        console.log("Entering CMFMENU_cmtdominios_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_cmtdominios_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_cmtdominios_whenNewItemInstance() {
        console.log("Entering CMFMENU_cmtdominios_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_cmtdominios_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CMTDESORI DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTDESORI_CUR IS      
    //     SELECT 1 FROM OPS$COLOCA.CMTDESORI C     
    //     WHERE C.DESORI_CODDOM = :CMTDOMINIOS.DOMI_CODIGO;
    //   --
    //   -- END CMTDESORI DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CMTDESORI DETAIL PROGRAM SECTION
    //   --
    //   OPEN CMTDESORI_CUR;     
    //   FETCH CMTDESORI_CUR INTO DUMMY_DEFINE;     
    //   IF ( CMTDESORI_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CMTDESORI_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CMTDESORI_CUR;
    //   --
    //   -- END CMTDESORI DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CMFMENU_cmtdominios_onCheckDeleteMaster() {
        console.log("Entering CMFMENU_cmtdominios_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CMFMENU_cmtdominios_onCheckDeleteMaster");
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
    //   -- BEGIN CMTDESORI DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CMTDOMINIOS.DOMI_CODIGO IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTDOMINIOS.CMTDOMINIOS_CMTDESORI');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTDESORI');   
    //   END IF;
    //   --
    //   -- END CMTDESORI DETAIL PROGRAM SECTION
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
    async CMFMENU_cmtdominios_onPopulateDetails() {
        console.log("Entering CMFMENU_cmtdominios_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.CMTDOMINIOS.DOMI_CODIGO != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTDOMINIOS.CMTDOMINIOS_CMTDESORI");
            // CMFMENU_QUERY_MASTER_DETAILS(REL_ID, "CMTDESORI");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CMFMENU_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CMFMENU_cmtdominios_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN :DOMI_DOMINIO := 'ORIGEN'; END;
    //#endregion
    async CMFMENU_cmtdominios_preInsert() {
        console.log("Entering CMFMENU_cmtdominios_preInsert");
        this.CMTDOMINIOS.DOMI_DOMINIO = "ORIGEN";
        console.log("Exiting CMFMENU_cmtdominios_preInsert");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN SETTERSEC DETAIL DECLARE SECTION
    //   --
    //   CURSOR SETTERSEC_CUR IS      
    //     SELECT 1 FROM SETTERSEC S     
    //     WHERE S.TERSEC_CODIGO = :SETCOMCIACAP.COM_CODIGO;
    //   --
    //   -- END SETTERSEC DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN SETTERSEC DETAIL PROGRAM SECTION
    //   --
    //   OPEN SETTERSEC_CUR;     
    //   FETCH SETTERSEC_CUR INTO DUMMY_DEFINE;     
    //   IF ( SETTERSEC_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE SETTERSEC_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE SETTERSEC_CUR;
    //   --
    //   -- END SETTERSEC DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CMFMENU_setcomciacap_onCheckDeleteMaster() {
        console.log("Entering CMFMENU_setcomciacap_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CMFMENU_setcomciacap_onCheckDeleteMaster");
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
    //   -- BEGIN SETTERSEC DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:SETCOMCIACAP.COM_CODIGO IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('SETCOMCIACAP.SETCOMCIACAP_SETTERSEC');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'SETTERSEC');   
    //   END IF;
    //   --
    //   -- END SETTERSEC DETAIL PROGRAM SECTION
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
    async CMFMENU_setcomciacap_onPopulateDetails() {
        console.log("Entering CMFMENU_setcomciacap_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.SETCOMCIACAP.COM_CODIGO != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("SETCOMCIACAP.SETCOMCIACAP_SETTERSEC");
            // CMFMENU_QUERY_MASTER_DETAILS(REL_ID, "SETTERSEC");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CMFMENU_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CMFMENU_setcomciacap_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    // BEGIN
    //  SELECT PLAZAS_DESCRI 
    //    INTO :SETCOMCIACAP.V_DESPLA
    //  FROM CMTPLAZAS WHERE PLAZAS_CODIGO = :SETCOMCIACAP.COM_PLA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :SETCOMCIACAP.V_DESPLA := NULL;
    // END;
    //#endregion
    async CMFMENU_setcomciacap_postQuery() {
        console.log("Entering CMFMENU_setcomciacap_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("COM_PLA", this.SETCOMCIACAP.COM_PLA);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_setcomciacap/cmfmenu_setcomciacap_postquery_query1", payload1);
        // get values from result
        this.SETCOMCIACAP.V_DESPLA = result1[0].get("SETCOMCIACAP.V_DESPLA");
        if (result1 == null || result1.length == 0) {

            this.SETCOMCIACAP.V_DESPLA = null;
        }

        console.log("Exiting CMFMENU_setcomciacap_postQuery");
    }

    //#region PLSQL
    // BEGIN --IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN
    // IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP','TS','AP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN --PY 7818
    //   :this.PARAMETER.get("PCODCOMER") := NULL;
    // END IF; END;
    //#endregion
    async CMFMENU_bnoclie_preQuery() {
        console.log("Entering CMFMENU_bnoclie_preQuery");
        if ((["GF", "GC", "GI", "JM", "AM", "SR", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1 && (this.PARAMETER.get("PCODCOMER") != null))) {
            this.PARAMETER.set("PCODCOMER", null);
        }
        console.log("Exiting CMFMENU_bnoclie_preQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_RESCLIEN;
    // BEGIN
    // PQBD_COL_ADMVEN.PCONCLI(BK_DATA, :V_CLIENNOREV, :this.PARAMETER.get("PCODCOMER"), :this.PARAMETER.get("PPLAZU"), :this.PARAMETER.get("PUNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BNOCLIE');
    // END;
    //#endregion
    async CMFMENU_bnoclie_queryProcedure() {
        console.log("Entering CMFMENU_bnoclie_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PCONCLI(BK_DATA, V_CLIENNOREV, this.PARAMETER.get("PCODCOMER"), this.PARAMETER.get("PPLAZU"), this.PARAMETER.get("PUNIDAD"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BNOCLIE");
        console.log("Exiting CMFMENU_bnoclie_queryProcedure");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_bespe_postTextItem() {
        console.log("Entering CMFMENU_bespe_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_bespe_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bespe_whenNewItemInstance() {
        console.log("Entering CMFMENU_bespe_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bespe_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_CESPESEG;
    // BEGIN
    // PQBD_COL_ADMVEN.PCESPSEG(BK_DATA, :BESPECIFICA.V_COMPRO, :this.PARAMETER.get("PFECINI"), :this.PARAMETER.get("PFECFIN"), :this.PARAMETER.get("PGRUCOM"), :this.PARAMETER.get("PCIUDAD"), :this.PARAMETER.get("PUSUARI"), :BESPECIFICA.V_CODSEC, '001');
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BESPE');
    // END;
    //#endregion
    async CMFMENU_bespe_queryProcedure() {
        console.log("Entering CMFMENU_bespe_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PCESPSEG(BK_DATA, BESPECIFICA.V_COMPRO, this.PARAMETER.get("PFECINI"), this.PARAMETER.get("PFECFIN"), this.PARAMETER.get("PGRUCOM"), this.PARAMETER.get("PCIUDAD"), this.PARAMETER.get("PUSUARI"), BESPECIFICA.V_CODSEC, "001");
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BESPE");
        console.log("Exiting CMFMENU_bespe_queryProcedure");
    }

    //#region PLSQL
    // BEGIN 
    //       SELECT O.PLAZAS_DESCRI
    //       INTO :BESPE.OFICOM
    //       FROM SETCOMCIA S, CMTPLAZAS O
    //       WHERE S.COM_PLA=O.PLAZAS_CODIGO 
    //       AND   S.COM_CODIGO=:BESPE.CODCOMER
    //       AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA;
    // 
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    :BESPE.OFICOM := '';
    //    
    //  END;
    //  
    //  
    //  
    //  --PY 13924
    //  BEGIN
    //  SELECT A.OFI_DESCRIP
    //  INTO :BESPE.DESC_DAV
    //  FROM CRTOFIDAV A 
    //  WHERE A.OFI_COD = :BESPE.DAVIVIENDA;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN :BESPE.DESC_DAV:= NULL;
    //  END;
    //  
    //  
    //  
    //  --PY 13924
    //#endregion
    async CMFMENU_bespe_postQuery() {
        console.log("Entering CMFMENU_bespe_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("CODCOMER", this.BESPE.CODCOMER);
        payload1.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bespe/cmfmenu_bespe_postquery_query1", payload1);
        // get values from result
        this.BESPE.OFICOM = result1[0].get("BESPE.OFICOM");
        if (result1 == null || result1.length == 0) {

            this.BESPE.OFICOM = "";
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DAVIVIENDA", this.BESPE.DAVIVIENDA);
        // call REST API
        const result2 = await Rest.post("/cmfmenu_bespe/cmfmenu_bespe_postquery_query2", payload2);
        // get values from result
        this.BESPE.DESC_DAV = result2[0].get("BESPE.DESC_DAV");
        if (result2 == null || result2.length == 0) {

            this.BESPE.DESC_DAV = null;
        }

        console.log("Exiting CMFMENU_bespe_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF  :V_TIPOCAN = 'CA' AND :V_CODMOT = '001' THEN
    //   LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR LA FECHA Y LA HORA DE ESTE SEGUIMIENTO.',NULL,NULL, NULL, T_RESPUESTA);
    // ELSIF   :V_TIPOCAN = 'AP' AND :V_CODMOT = '001' THEN
    //   LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR LA FECHA Y LA HORA DE ESTE SEGUIMIENTO.',NULL,NULL, NULL, T_RESPUESTA);
    // END IF;
    // END; 
    //#endregion
    async CMFMENU_bespe_tipomotvo_whenlistchanged() {
        console.log("Entering CMFMENU_bespe_tipomotvo_whenlistchanged");
        let T_RESPUESTA: number = null;
        // if ((V_TIPOCAN == "CA" && V_CODMOT == "001")) {
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "DEBE ACTUALIZAR LA FECHA Y LA HORA DE ESTE SEGUIMIENTO.", null, null, null, T_RESPUESTA);
        // }
        // else if ((V_TIPOCAN == "AP" && V_CODMOT == "001")) {
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "DEBE ACTUALIZAR LA FECHA Y LA HORA DE ESTE SEGUIMIENTO.", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_bespe_tipomotvo_whenlistchanged");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGISTROACTUAL'); END;
    //#endregion
    async CMFMENU_besperef_postTextItem() {
        console.log("Entering CMFMENU_besperef_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGISTROACTUAL");
        console.log("Exiting CMFMENU_besperef_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_besperef_whenNewItemInstance() {
        console.log("Entering CMFMENU_besperef_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_besperef_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_CESPEREF;
    // BEGIN
    // PQBD_COL_ADMVEN.PCESPREF(BK_DATA, :this.PARAMETER.get("PFECINI"), :this.PARAMETER.get("PFECFIN"), :this.PARAMETER.get("PGRUCOM"), :this.PARAMETER.get("PCIUDAD"), :this.PARAMETER.get("PUSUARI"), :this.PARAMETER.get("PUNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BESPEREF');
    // END;
    //#endregion
    async CMFMENU_besperef_queryProcedure() {
        console.log("Entering CMFMENU_besperef_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PCESPREF(BK_DATA, this.PARAMETER.get("PFECINI"), this.PARAMETER.get("PFECFIN"), this.PARAMETER.get("PGRUCOM"), this.PARAMETER.get("PCIUDAD"), this.PARAMETER.get("PUSUARI"), this.PARAMETER.get("PUNIDAD"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BESPEREF");
        console.log("Exiting CMFMENU_besperef_queryProcedure");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CMTPERROL');
    // CLEAR_BLOCK;
    // DO_KEY('EXECUTE_QUERY');
//    // SYNCHRONIZE;
    // IF GET_BLOCK_PROPERTY('CMTPERROL',STATUS) = 'NEW' THEN
    //   BEGIN
    //    INSERT INTO CMTPERROL(PERMVE_CARGO, PERMVE_OPMENU, PERMVE_CONCED)
    //      SELECT :BCONTROL.CARGO, OPCION_CODIGO, 'N'
    //      FROM   CMTOPCMEN;
    //   END;
    //   COMMIT;
    // END IF; END;
    //#endregion
    async CMFMENU_bcontrol_cargo_whenListChanged() {
        console.log("Entering CMFMENU_bcontrol_cargo_whenListChanged");
        this.oracleFormsBuiltins.go_block("CMTPERROL");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.do_key("EXECUTE_QUERY");
//        this.oracleFormsBuiltins.synchronize();
        if (this.oracleFormsBuiltins.get_block_property("CMTPERROL", "STATUS") == "NEW") {
            // construct payload
            let payload1 = new Map();
            // call REST API
            const result1 = await Rest.post("/cmfmenu_bcontrol/cmfmenu_bcontrol_cargo_whenlistchanged_query1", payload1);
        }
        console.log("Exiting CMFMENU_bcontrol_cargo_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_RESCLIXCOM;
    // BEGIN
    // PQBD_COL_ADMVEN.PRESCLIXCOMER(BK_DATA, :this.PARAMETER.get("PCODCOMER"), :this.PARAMETER.get("PCARGO"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BCLIXCOMER');
    // END;
    //#endregion
    async CMFMENU_bclixcomer_queryProcedure() {
        console.log("Entering CMFMENU_bclixcomer_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PRESCLIXCOMER(BK_DATA, this.PARAMETER.get("PCODCOMER"), this.PARAMETER.get("PCARGO"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BCLIXCOMER");
        console.log("Exiting CMFMENU_bclixcomer_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  VBOTON   NUMBER;
    // BEGIN
    // IF :BCLIXCOMER.CANTIDAD = 0 AND :this.PARAMETER.get("PCARGO") NOT IN ('GF','GC','GI','JP','JM','AM','SR','TS','AP') THEN
    //  LIB$DTNERFRMA('NO HAY DATOS PARA CONSULTAR PARA ESE TIPO DE PERFIL');
    //  :V_VERCLI := 'N';
    // ELSIF :BCLIXCOMER.CANTIDAD  = 0  AND :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JP','JM','AM','SR','TS','AP') THEN
    //   LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL, UBIQUESE EN EL BLOQUE DETALLE Y SELECCIONE CON F7 Y F9 ÉL COMERCIAL DESEADO.',NULL,NULL,NULL,T_RESPUESTA);
    //   GO_BLOCK('BDETCLIXCOMER');
    //   EXECUTE_QUERY;
    // ELSE
    //  GO_BLOCK('BDETCLIXCOMER');
    //  EXECUTE_QUERY;
    // END IF;
    // END;
    //#endregion
    async CMFMENU_bclixcomer_vVercli_whenCheckboxChanged() {
        console.log("Entering CMFMENU_bclixcomer_vVercli_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let VBOTON: number = null;
        if ((this.BCLIXCOMER.CANTIDAD == 0 && ["GF", "GC", "GI", "JP", "JM", "AM", "SR", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1)) {
            // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS PARA CONSULTAR PARA ESE TIPO DE PERFIL");
            this.BCLIXCOMER.V_VERCLI = "N";
        }
        else if ((this.BCLIXCOMER.CANTIDAD == 0 && ["GF", "GC", "GI", "JP", "JM", "AM", "SR", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1)) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL, UBIQUESE EN EL BLOQUE DETALLE Y SELECCIONE CON F7 Y F9 ÉL COMERCIAL DESEADO.", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("BDETCLIXCOMER");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.go_block("BDETCLIXCOMER");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CMFMENU_bclixcomer_vVercli_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  V_CANTIDAD NUMBER;
    // BEGIN 
    //  
    //   BEGIN
    //   SELECT COUNT(*) 
    //   INTO V_CANTIDAD
    //   FROM OPS$COLOCA.CMTMNSJS N
    //    WHERE N.MENS_AVISAR = :CMTTELEMER.MENS_AVISAR
    //    AND N.MENS_FECREG = :CMTTELEMER.MENS_FECCOMPRO;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN 
    //    V_CANTIDAD := 0;
    //   END;
    // 
    //  BEGIN
    //  SELECT COM_NOMBRE||' '||COM_APELLIDO COMERCIAL  
    //   INTO :CMTTELEMER.V_NOMBCOMER      
    //  FROM SETCOMCIA
    //  WHERE COM_ESTADO = 'A'
    //    AND COM_CODIGO = :CMTTELEMER.MENS_AVISAR
    //    AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //    NULL;
    //  END;
    //  
    //  IF V_CANTIDAD > 0 THEN
    //   
    //    SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "ENABLED","PROPERTY_FALSE");
    //   
    //  END IF; 
    //  
    // END; 
    //#endregion
    async CMFMENU_cmttelemer_whenNewRecordInstance() {
        console.log("Entering CMFMENU_cmttelemer_whenNewRecordInstance");
        let V_CANTIDAD: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_AVISAR", this.CMTTELEMER.MENS_AVISAR);
        payload1.set("MENS_FECCOMPRO", this.CMTTELEMER.MENS_FECCOMPRO);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_whennewrecordinstance_query1", payload1);
        // get values from result
        V_CANTIDAD = result1[0].get("V_CANTIDAD");
        if (result1 == null || result1.length == 0) {

            V_CANTIDAD = 0;
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("MENS_AVISAR", this.CMTTELEMER.MENS_AVISAR);
        payload2.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result2 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_whennewrecordinstance_query2", payload2);
        // get values from result
        this.CMTTELEMER.V_NOMBCOMER = result2[0].get("CMTTELEMER.V_NOMBCOMER");
        if (result2 == null || result2.length == 0) {

        }

        if (V_CANTIDAD > 0) {
            this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "ENABLED", "PROPERTY_FALSE");
        }
        console.log("Exiting CMFMENU_cmttelemer_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_cmttelemer_postTextItem() {
        console.log("Entering CMFMENU_cmttelemer_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_cmttelemer_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_cmttelemer_whenNewItemInstance() {
        console.log("Entering CMFMENU_cmttelemer_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_cmttelemer_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //   --SET_ITEM_PROPERTY('V_GRABARTER', "ENABLED", "PROPERTY_FALSE");
    //   NULL;
    // END;
    //#endregion
    async CMFMENU_cmttelemer_whenNewBlockInstance() {
        console.log("Entering CMFMENU_cmttelemer_whenNewBlockInstance");
        console.log("Exiting CMFMENU_cmttelemer_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN
    //  LIST_VALUES(RESTRICT);
    // END;
    //#endregion
    async CMFMENU_cmttelemer_keyListval() {
        console.log("Entering CMFMENU_cmttelemer_keyListval");
        this.oracleFormsBuiltins.list_values("RESTRICT");
        console.log("Exiting CMFMENU_cmttelemer_keyListval");
    }

    //#region PLSQL
    // :CMTTELEMER.MENS_USUARIO := PLSQLBuiltins.user();
    // :CMTTELEMER.MENS_FECREG  := SYSDATE;
    // IF :this.PARAMETER.get("POFCNA") = '020' THEN
    //   :CMTTELEMER.MENS_DEPART  := '05';
    //   :CMTTELEMER.MENS_CIUDAD  := '001';
    // ELSIF :this.PARAMETER.get("POFCNA") = '030' THEN
    //  :CMTTELEMER.MENS_DEPART  := '76';
    //   :CMTTELEMER.MENS_CIUDAD  := '001';
    // ELSE
    //  :CMTTELEMER.MENS_DEPART  := '11';
    //   :CMTTELEMER.MENS_CIUDAD  := '001';
    // END IF;
    // BEGIN
    //  SELECT USU_NOMBRE 
    //    INTO :CMTTELEMER.V_DESCUSUARIO
    //  FROM SGUSUARIOS
    //  WHERE USU_CODIGO = PLSQLBuiltins.user();
    // END;
    //#endregion
    async CMFMENU_cmttelemer_whenCreateRecord() {
        console.log("Entering CMFMENU_cmttelemer_whenCreateRecord");
        console.log("Exiting CMFMENU_cmttelemer_whenCreateRecord");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_MAILAQUIEN SETCOMCIA.COM_MAIL%TYPE;
    //  V_AVISAR    VARCHAR2(3);
    //  EXISTE   NUMBER;
    // BEGIN 
    // 
    // --- IF :this.PARAMETER.get("PCARGO") IN ('OS') THEN  PY 9179
    //   IF :this.PARAMETER.get("PCARGO") IN ('OS','39') THEN
    //    BEGIN
    //       SELECT COUNT(*) 
    //         INTO EXISTE
    //       FROM SETTERSEC 
    //       WHERE TERSEC_NIT = :CMTTELEMER.MENS_NUMIDEN;
    //     END;
    //            IF :CMTTELEMER.MENS_AVISAR IS NULL AND EXISTE = 0 THEN
    //              -- BUSCA EL SUBGERENTE EN ESTE CASO EL COMERCIAL DE CAPTACIONES
    //              
    //              PU_BUSCAR_SUBGERENTE_CAPTA (V_AVISAR, :GLOBAL.MAILCOMER, :this.PARAMETER.get("POFCNA")); 
    //              --
    //              IF V_AVISAR IS NULL THEN
    //                LIB$DTNERFRMA('¡ERROR!, NO SE PUDO OBTENER EL CÓDIGO DEL EJECUTIVO DE INVERSIÓN.');
    //              END IF;
    //              /* PY 9179
    //              INSERT INTO CMTASIGCOM
    //            (ADMON_COMERCIAL, ADMON_TERCERO, ADMON_ASIGCOM)
    //              VALUES
    //            (V_AVISAR,:CMTTELEMER.MENS_NUMIDEN , 0);*/
    //             --  
    //              --INSERTAR EL CLIENTE Y CRUZARLO CON EL EJECUTIVO DE INVERSIÓN.
    //              
    //              INSERT INTO SETTERSEC (TERSEC_CODIGO, TERSEC_NIT, TERSEC_DEPCOM) 
    //                VALUES (V_AVISAR,:CMTTELEMER.MENS_NUMIDEN, 'CAP' );
    //              COMMIT;
    //              --COMMIT_FORM;
    //            ELSIF :CMTTELEMER.MENS_AVISAR IS NOT NULL AND EXISTE = 0 THEN 
    //              --INSERTAR EL CLIENTE Y CRUZARLO CON EL EJECUTIVO DE INVERSIÓN.
    //              
    //              INSERT INTO SETTERSEC (TERSEC_CODIGO, TERSEC_NIT, TERSEC_DEPCOM) 
    //                VALUES (:CMTTELEMER.MENS_AVISAR,:CMTTELEMER.MENS_NUMIDEN, 'CAP' );
    //            COMMIT;
    //             --COMMIT_FORM;
    //            END IF;
    //   END IF;
    //   --COMMIT_FORM;
    //   IF :CMTTELEMER.MENS_AVISAR IS NULL AND :CMTTELEMER.MENS_NUMIDEN IS NOT NULL THEN
    //    BEGIN
    //      SELECT ADMON_COMERCIAL, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL 
    //         INTO :CMTTELEMER.MENS_AVISAR , :CMTTELEMER.V_NOMBCOMER
    //      FROM CMTASIGCOM, SETCOMCIA
    //      WHERE ADMON_COMERCIAL= COM_CODIGO 
    //         AND ADMON_TERCERO  = :CMTTELEMER.MENS_NUMIDEN;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN
    //     :CMTTELEMER.MENS_AVISAR       := NULL;
    //      :CMTTELEMER.V_NOMBCOMER       := NULL;
    //    END;
    //   END IF;
    //   IF :CMTTELEMER.MENS_AQUIEN IS NOT NULL THEN
    //   BEGIN
    //    SELECT COM_MAIL
    //      INTO V_MAILAQUIEN
    //    FROM SETCOMCIA
    //    WHERE COM_CODIGO = :CMTTELEMER.MENS_AQUIEN
    //     AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    V_MAILAQUIEN := NULL;
    //   END;
    //    PUP_ENVIO_CORREO8(:CMTTELEMER.MENS_AQUIEN, V_MAILAQUIEN);
    //   END IF;
    //   BEGIN
    // SELECT COM_CODIGO
    //    ,COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //    ,COM_PLA
    //    ,COM_MAIL
    //    ,COM_ESTADO 
    //    ,COM_CODUNI
    //  INTO :CMTTELEMER.MENS_AVISAR 
    //       ,:CMTTELEMER.V_NOMBCOMER
    //       ,:GLOBAL.PLAZA
    //       ,:GLOBAL.MAILCOMER
    //      ,:GLOBAL.ESTADO
    //      ,:GLOBAL.PUNIDAD   
    // FROM SETCOMCIA
    // WHERE COM_ESTADO = 'A'
    //   AND COM_CODIGO = :CMTTELEMER.MENS_AVISAR
    //   AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :CMTTELEMER.MENS_AVISAR       := NULL;
    //   :CMTTELEMER.V_NOMBCOMER       := NULL;
    //   :GLOBAL.PLAZA     := NULL;
    //   :GLOBAL.MAILCOMER  := NULL;
    //   :GLOBAL.ESTADO    := NULL;
    //   :GLOBAL.PUNIDAD  := NULL;
    // END;
    //    
    //   PUP_ENVIO_CORREO7    (:CMTTELEMER.MENS_AVISAR, :GLOBAL.MAILCOMER);  
    //  PUP_INSERT_SEGXTER_TELEMER (:CMTTELEMER.MENS_AVISAR, :CMTTELEMER.MENS_NUMIDEN, :CMTTELEMER.MENS_OBSERVACIONES||' '||'TELEFONO '||:CMTTELEMER.MENS_TELEFONO, :CMTTELEMER.MENS_AQUIEN, :CMTTELEMER.MENS_TIPCOMPRO, :CMTTELEMER.MENS_FECCOMPRO, :CMTTELEMER.MENS_HORACOMPRO);--, :GLOBAL.TIPOGESTION, '007', 'GR');
    //  COMMIT_FORM;   
    // LIB$ALERTA('MENSAJE','SE GENERÓ CORREO ELECTRONICO A CÓDIGO COMERCIAL :'||:CMTTELEMER.MENS_AVISAR||' '||:CMTTELEMER.V_NOMBCOMER||' Y SE INSERTO UN REGISTRO EN LA AGENDA DEL COMERCIAL.',NULL, NULL, NULL,T_RESPUESTA);
    // COMMIT;
    // END;
    //#endregion
    async CMFMENU_cmttelemer_keyCommit() {
        console.log("Entering CMFMENU_cmttelemer_keyCommit");
        let T_RESPUESTA: number = null;
        let V_MAILAQUIEN: null = null;
        let V_AVISAR: string = null;
        let EXISTE: number = null;
        if (["OS", "39"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            // construct payload
            let payload1 = new Map();
            payload1.set("MENS_NUMIDEN", this.CMTTELEMER.MENS_NUMIDEN);
            // call REST API
            const result1 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_keycommit_query1", payload1);
            // get values from result
            EXISTE = result1[0].get("EXISTE");
            if (((this.CMTTELEMER.MENS_AVISAR == null) && EXISTE == 0)) {
                // CMFMENU_PU_BUSCAR_SUBGERENTE_CAPTA(V_AVISAR, GLOBAL.MAILCOMER, this.PARAMETER.get("POFCNA"));
                if ((V_AVISAR == null)) {
                    // CMFMENU_LIB$DTNERFRMA("¡ERROR!, NO SE PUDO OBTENER EL CÓDIGO DEL EJECUTIVO DE INVERSIÓN.");
                }
                // construct payload
                let payload2 = new Map();
                // payload2.MENS_NUMIDEN = : CMTTELEMER.MENS_NUMIDEN;
                // call REST API
                const result2 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_keycommit_query2", payload2);
            }
            else if (((this.CMTTELEMER.MENS_AVISAR != null) && EXISTE == 0)) {
                // construct payload
                let payload4 = new Map();
                // payload4.MENS_AVISAR = : CMTTELEMER.MENS_AVISAR;
                // payload4.MENS_NUMIDEN = : CMTTELEMER.MENS_NUMIDEN;
                // call REST API
                const result4 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_keycommit_query4", payload4);
            }
        }
        if (((this.CMTTELEMER.MENS_AVISAR == null) && (this.CMTTELEMER.MENS_NUMIDEN != null))) {
            // construct payload
            let payload6 = new Map();
            payload6.set("MENS_NUMIDEN", this.CMTTELEMER.MENS_NUMIDEN);
            // call REST API
            const result6 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_keycommit_query6", payload6);
            // get values from result
            this.CMTTELEMER.MENS_AVISAR = result6[0].get("CMTTELEMER.MENS_AVISAR");
            this.CMTTELEMER.V_NOMBCOMER = result6[0].get("CMTTELEMER.V_NOMBCOMER");
            if (result6 == null || result6.length == 0) {

                this.CMTTELEMER.MENS_AVISAR = null;
                this.CMTTELEMER.V_NOMBCOMER = null;
            }

        }
        if ((this.CMTTELEMER.MENS_AQUIEN != null)) {
            // construct payload
            let payload7 = new Map();
            payload7.set("MENS_AQUIEN", this.CMTTELEMER.MENS_AQUIEN);
            payload7.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
            // call REST API
            const result7 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_keycommit_query7", payload7);
            // get values from result
            V_MAILAQUIEN = result7[0].get("V_MAILAQUIEN");
            if (result7 == null || result7.length == 0) {

                V_MAILAQUIEN = null;
            }

            // CMFMENU_PUP_ENVIO_CORREO8(this.CMTTELEMER.MENS_AQUIEN, V_MAILAQUIEN);
        }
        // construct payload
        let payload8 = new Map();
        payload8.set("MENS_AVISAR", this.CMTTELEMER.MENS_AVISAR);
        payload8.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result8 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_keycommit_query8", payload8);
        // get values from result
        this.CMTTELEMER.MENS_AVISAR = result8[0].get("CMTTELEMER.MENS_AVISAR");
        this.CMTTELEMER.V_NOMBCOMER = result8[0].get("CMTTELEMER.V_NOMBCOMER");
        // GLOBAL.PLAZA = result8[0].get("GLOBAL.PLAZA");
        // GLOBAL.MAILCOMER = result8[0].get("GLOBAL.MAILCOMER");
        // GLOBAL.ESTADO = result8[0].get("GLOBAL.ESTADO");
        // GLOBAL.PUNIDAD = result8[0].get("GLOBAL.PUNIDAD");
        // if (result8 == null || result8.length == 0) {

        //     this.CMTTELEMER.MENS_AVISAR = null;
        //     this.CMTTELEMER.V_NOMBCOMER = null;
        //     this.GLOBAL.PLAZA = null;
        //     this.GLOBAL.MAILCOMER = null;
        //     this.GLOBAL.ESTADO = null;
        //     this.GLOBAL.PUNIDAD = null;
        // }

        // CMFMENU_PUP_ENVIO_CORREO7(this.CMTTELEMER.MENS_AVISAR, GLOBAL.MAILCOMER);
        // CMFMENU_PUP_INSERT_SEGXTER_TELEMER(this.CMTTELEMER.MENS_AVISAR, this.CMTTELEMER.MENS_NUMIDEN, this.CMTTELEMER.MENS_OBSERVACIONES + " " + "TELEFONO " + CMTTELEMER.MENS_TELEFONO, this.CMTTELEMER.MENS_AQUIEN, this.CMTTELEMER.MENS_TIPCOMPRO, this.CMTTELEMER.MENS_FECCOMPRO, this.CMTTELEMER.MENS_HORACOMPRO);
        this.oracleFormsBuiltins.commit_form();
        // CMFMENU_LIB$ALERTA("MENSAJE", "SE GENERÓ CORREO ELECTRONICO A CÓDIGO COMERCIAL :" + CMTTELEMER.MENS_AVISAR + " " + CMTTELEMER.V_NOMBCOMER + " Y SE INSERTO UN REGISTRO EN LA AGENDA DEL COMERCIAL.", null, null, null, T_RESPUESTA);
        console.log("Exiting CMFMENU_cmttelemer_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    // SELECT COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //    ,COM_PLA
    //    ,COM_MAIL
    //    ,COM_ESTADO 
    //    ,COM_CODUNI
    //  INTO :CMTTELEMER.V_NOMBCOMER
    //      ,:GLOBAL.PLAZA
    //      ,:GLOBAL.MAILCOMER
    //      ,:GLOBAL.ESTADO   
    //      ,:GLOBAL.PUNIDAD
    // FROM SETCOMCIA
    // WHERE COM_ESTADO = 'A'
    //   AND COM_CODIGO = :CMTTELEMER.MENS_AVISAR
    //   AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // BEGIN
    //   SELECT DEPDES
    //     INTO :CMTTELEMER.V_DEPART
    //     FROM OPS$SEGUI.DEP
    //    WHERE DEPCOD=:CMTTELEMER.MENS_DEPART
    //      AND DEPCOD <> '00';
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // BEGIN
    //  SELECT SUBSTR(TDCDES,1,20)
    //    INTO :CMTTELEMER.V_CIUDAD
    //   FROM OPS$SEGUI.TDC 
    //   WHERE TDCCOD <> '000' 
    //     AND TDCDEP = :CMTTELEMER.MENS_DEPART
    //     AND TDCCOD = :CMTTELEMER.MENS_CIUDAD
    //     AND TDCPAI = (SELECT OPS$SEGUI.DEP.TDECOF
    //                      FROM OPS$SEGUI.DEP
    //                       WHERE DEPCOD <> '00'
    //                        AND DEPCOD= NVL(:BTER.DEPARTA, :CMTTELEMER.MENS_DEPART)
    //                       AND DEPACO = NVL(:BTER.PAIS,'169') )--PY 13888
    //     
    //   ORDER BY TDCCOD;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    // BEGIN
    //  SELECT USU_NOMBRE 
    //    INTO :CMTTELEMER.V_DESCUSUARIO
    //  FROM SGUSUARIOS
    //  WHERE USU_CODIGO = :CMTTELEMER.MENS_USUARIO;
    // END;
    //#endregion
    async CMFMENU_cmttelemer_postQuery() {
        console.log("Entering CMFMENU_cmttelemer_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_AVISAR", this.CMTTELEMER.MENS_AVISAR);
        payload1.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_postquery_query1", payload1);
        // get values from result
        // CMTTELEMER.V_NOMBCOMER = result1[0].get("CMTTELEMER.V_NOMBCOMER");
        // GLOBAL.PLAZA = result1[0].get("GLOBAL.PLAZA");
        // GLOBAL.MAILCOMER = result1[0].get("GLOBAL.MAILCOMER");
        // GLOBAL.ESTADO = result1[0].get("GLOBAL.ESTADO");
        // GLOBAL.PUNIDAD = result1[0].get("GLOBAL.PUNIDAD");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("MENS_DEPART", this.CMTTELEMER.MENS_DEPART);
        // call REST API
        const result2 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_postquery_query2", payload2);
        // get values from result
        this.CMTTELEMER.V_DEPART = result2[0].get("CMTTELEMER.V_DEPART");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("MENS_DEPART", this.CMTTELEMER.MENS_DEPART);
        payload3.set("MENS_CIUDAD", this.CMTTELEMER.MENS_CIUDAD);
        // call REST API
        const result3 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_postquery_query3", payload3);
        // get values from result
        this.CMTTELEMER.V_CIUDAD = result3[0].get("CMTTELEMER.V_CIUDAD");
        if (result3 == null || result3.length == 0) {

        }

        // construct payload
        let payload4 = new Map();
        payload4.set("MENS_USUARIO", this.CMTTELEMER.MENS_USUARIO);
        // call REST API
        const result4 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_postquery_query4", payload4);
        // get values from result
        this.CMTTELEMER.V_DESCUSUARIO = result4[0].get("CMTTELEMER.V_DESCUSUARIO");
        console.log("Exiting CMFMENU_cmttelemer_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :this.PARAMETER.get("PCARGO") IN ('GF','JP','OS','OM','39') THEN 
    //       SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "ENABLED", "PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "UPDATE_COLUMN", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "UPDATEABLE", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "UPDATE_PERMISSION", "PROPERTY_TRUE");      
    // 
    //  END IF; 
    //  
    //  GO_ITEM('CMTTELEMER.MENS_CARGO'); END;
    //#endregion
    async CMFMENU_cmttelemer_mensNomblama_keyNextItem() {
        console.log("Entering CMFMENU_cmttelemer_mensNomblama_keyNextItem");
        if (["GF", "JP", "OS", "OM", "39"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "UPDATE_COLUMN", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "UPDATE_PERMISSION", "PROPERTY_TRUE");
        }
        this.oracleFormsBuiltins.go_item("CMTTELEMER.MENS_CARGO");
        console.log("Exiting CMFMENU_cmttelemer_mensNomblama_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    // SELECT COM_CODIGO
    //    ,COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //  INTO :CMTTELEMER.MENS_AQUIEN
    //       ,:CMTTELEMER.V_DESCOMER
    // FROM SETCOMCIA
    // WHERE COM_ESTADO = 'A'
    //   AND COM_CODIGO = :CMTTELEMER.MENS_AQUIEN
    //   AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :CMTTELEMER.MENS_AQUIEN     := NULL;
    //   :CMTTELEMER.V_DESCOMER      := NULL;
    // END;
    //#endregion
    async CMFMENU_cmttelemer_mensAquien_whenValidateItem() {
        console.log("Entering CMFMENU_cmttelemer_mensAquien_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_AQUIEN", this.CMTTELEMER.MENS_AQUIEN);
        payload1.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_mensaquien_whenvalidateitem_query1", payload1);
        // get values from result
        this.CMTTELEMER.MENS_AQUIEN = result1[0].get("CMTTELEMER.MENS_AQUIEN");
        this.CMTTELEMER.V_DESCOMER = result1[0].get("CMTTELEMER.V_DESCOMER");
        if (result1 == null || result1.length == 0) {

            this.CMTTELEMER.MENS_AQUIEN = null;
            this.CMTTELEMER.V_DESCOMER = null;
        }

        console.log("Exiting CMFMENU_cmttelemer_mensAquien_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //   TIPO_IDENTI VARCHAR2(2);
    //   TIPO_PER   VARCHAR2(2);
    //   V_TOTALTABLA NUMBER;
    // BEGIN
    //  
    //  PVALTER(:CMTTELEMER.MENS_NUMIDEN); -- TERRES   5627
    //  
    //  BEGIN
    //   SELECT TBENAPE||' '||TBENNOM
    //     INTO  :CMTTELEMER.MENS_NITNOMBRE
    //   FROM TBEN
    //   WHERE (TBENCOD=:CMTTELEMER.MENS_NUMIDEN);
    //      --LIB$ALERTA('MENSAJE','EL TERCERO EXISTE.',NULL,NULL,NULL,T_RESPUESTA);
    //      --LLAMAR PU_CARGAR_DATOS
    //      :this.PARAMETER.get("PEXISTETER") := 'S';
    //      PU_TIPOGESTION (:this.PARAMETER.get("PEXISTETER"), :GLOBAL.TIPOGESTION);
    //      --
    //      PU_CARGAR_DATOS_TELEMERCADEO (:CMTTELEMER.MENS_NUMIDEN);
    //      
    //      
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //      IF FRM$ALERTA_SINO ('CMTTELEMER.TERCERO INEXISTENTE. DESEA INGRESARLO AHORA...') = 1 THEN     
    //        SET_ITEM_PROPERTY('CMTTELEMER.MENS_NITNOMBRE', "ENABLED", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTTELEMER.MENS_NITNOMBRE', "NAVIGABLE", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTTELEMER.MENS_DEPART', "ENABLED", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTTELEMER.MENS_DEPART', "NAVIGABLE", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTTELEMER.MENS_CIUDAD', "ENABLED", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTTELEMER.MENS_CIUDAD', "NAVIGABLE", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTTELEMER.V_GRABTELEMER', "ENABLED", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTTELEMER.V_GRABTELEMER', "NAVIGABLE", "PROPERTY_TRUE");
    //        :this.PARAMETER.get("PEXISTETER") := 'N';
    //        PU_TIPOGESTION (:this.PARAMETER.get("PEXISTETER"),:GLOBAL.TIPOGESTION);
    //        IF :this.PARAMETER.get("PCARGO") IN ('GF','JP','OS','EI') THEN
    //      SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "UPDATE_COLUMN", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "UPDATEABLE", "PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "UPDATE_PERMISSION", "PROPERTY_TRUE");
    //        ELSE
    //          SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "ENABLED", "PROPERTY_FALSE");
    //          SET_ITEM_PROPERTY('CMTTELEMER.MENS_AVISAR', "NAVIGABLE", "PROPERTY_FALSE");
    //       END IF;
    //      ELSE 
    //         LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO ES OBLIGATORIO.....',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //      END IF;
    //   END;
    // END;
    //    
    //#endregion
    async CMFMENU_cmttelemer_mensNumiden_whenValidateItem() {
        console.log("Entering CMFMENU_cmttelemer_mensNumiden_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPO_IDENTI: string = null;
        let TIPO_PER: string = null;
        let V_TOTALTABLA: number = null;
        // CMFMENU_PVALTER(this.CMTTELEMER.MENS_NUMIDEN);
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_NUMIDEN", this.CMTTELEMER.MENS_NUMIDEN);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_mensnumiden_whenvalidateitem_query1", payload1);
        // get values from result
        this.CMTTELEMER.MENS_NITNOMBRE = result1[0].get("CMTTELEMER.MENS_NITNOMBRE");
        this.PARAMETER.set("PEXISTETER", "S");
        // CMFMENU_PU_TIPOGESTION(this.PARAMETER.get("PEXISTETER"), GLOBAL.TIPOGESTION);
        // CMFMENU_PU_CARGAR_DATOS_TELEMERCADEO(this.CMTTELEMER.MENS_NUMIDEN);
        if (result1 == null || result1.length == 0) {

            // if (FRM$ALERTA_SINO("CMTTELEMER.TERCERO INEXISTENTE. DESEA INGRESARLO AHORA...") == 1) {
            //     this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_NITNOMBRE", "ENABLED", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_NITNOMBRE", "NAVIGABLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_DEPART", "ENABLED", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_DEPART", "NAVIGABLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_CIUDAD", "ENABLED", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_CIUDAD", "NAVIGABLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTTELEMER.V_GRABTELEMER", "ENABLED", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTTELEMER.V_GRABTELEMER", "NAVIGABLE", "PROPERTY_TRUE");
            //     this.PARAMETER.set("PEXISTETER", "N");
            //     // CMFMENU_PU_TIPOGESTION(this.PARAMETER.get("PEXISTETER"), GLOBAL.TIPOGESTION);
            //     if (["GF", "JP", "OS", "EI"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            //         this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "UPDATE_COLUMN", "PROPERTY_TRUE");
            //         this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "UPDATEABLE", "PROPERTY_TRUE");
            //         this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            //         this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "UPDATE_PERMISSION", "PROPERTY_TRUE");
            //     }
            //     else {
            //         this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "ENABLED", "PROPERTY_FALSE");
            //         this.oracleFormsBuiltins.set_item_property("CMTTELEMER.MENS_AVISAR", "NAVIGABLE", "PROPERTY_FALSE");
            //     }
            // }
            // else {
            //     // CMFMENU_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO ES OBLIGATORIO.....", null, null, null, T_RESPUESTA);
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
        }

        console.log("Exiting CMFMENU_cmttelemer_mensNumiden_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.MODE11 = 'NORMAL' THEN
    //   GO_BLOCK('TBEN3');
    //   EXECUTE_QUERY;
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_cmttelemer_mensNumiden_keyListval() {
        console.log("Entering CMFMENU_cmttelemer_mensNumiden_keyListval");
        if (this._SYSTEM_SERVICE.get("MODE11") == "NORMAL") {
            this.oracleFormsBuiltins.go_block("TBEN3");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CMFMENU_cmttelemer_mensNumiden_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT DEPDES
    //     INTO :CMTTELEMER.V_DEPART
    //     FROM OPS$SEGUI.DEP
    //    WHERE DEPCOD=:CMTTELEMER.MENS_DEPART
    //      AND DEPCOD <> '00';
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$DTNERFRMA('DEPARTAMENTO NO EXISTE');
    // END;
    //#endregion
    async CMFMENU_cmttelemer_mensDepart_whenValidateItem() {
        console.log("Entering CMFMENU_cmttelemer_mensDepart_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_DEPART", this.CMTTELEMER.MENS_DEPART);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_mensdepart_whenvalidateitem_query1", payload1);
        // get values from result
        this.CMTTELEMER.V_DEPART = result1[0].get("CMTTELEMER.V_DEPART");
        if (result1 == null || result1.length == 0) {

            // CMFMENU_LIB$DTNERFRMA("DEPARTAMENTO NO EXISTE");
        }

        console.log("Exiting CMFMENU_cmttelemer_mensDepart_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_IDENTI  VARCHAR2(2);
    //   TIPO_PER    VARCHAR2(2);
    //   V_TOTALTABLA NUMBER;
    //   V_AVISAR     VARCHAR2(3);
    //   T_RESPUESTA  NUMBER;
    //   V_DESCARGO   VARCHAR2(80);
    //   V_MAILAQUIEN SETCOMCIA.COM_MAIL%TYPE;
    //   --MEJORA SSS
    //   V_CANSUBGEREN  NUMBER;
    //   --MEJORA SSS
    //   
    //   
    // BEGIN
    //  --NVO CODIGO
    //        IF TO_NUMBER(:CMTTELEMER.MENS_NUMIDEN) BETWEEN 600000000 AND 699999999 OR
    //           TO_NUMBER(:CMTTELEMER.MENS_NUMIDEN) BETWEEN 800000000 AND 999999999 
    //        THEN
    //           TIPO_IDENTI := 'NI';
    //           TIPO_PER    := 'J';
    //        ELSIF TO_NUMBER(:CMTTELEMER.MENS_NUMIDEN) BETWEEN 1 AND 99999999999 THEN
    //           TIPO_IDENTI := 'CC'; 
    //           TIPO_PER    := 'N';
    //        END IF;
    //          PU_INSERT_TERCEROXTELEMERCADEO(:CMTTELEMER.MENS_NUMIDEN
    //                          ,TIPO_IDENTI
    //                          ,TIPO_PER
    //                          ,:CMTTELEMER.MENS_NITNOMBRE
    //                          ,:CMTTELEMER.MENS_DEPART
    //                          ,:CMTTELEMER.MENS_CIUDAD
    //                          ,:CMTTELEMER.MENS_DIRECCION
    //                          ,:CMTTELEMER.MENS_TELEFONO
    //                          ,:CMTTELEMER.MENS_CELULAR
    //                          );
    //          LIB$ALERTA('MENSAJE','SE CREO EL TERCERO CON DATOS MÍNIMOS.', NULL,NULL,NULL, T_RESPUESTA);
    //          --
    //        BEGIN
    //          SELECT COUNT(*)
    //            INTO V_TOTALTABLA
    //          FROM CMTASIGCOM;
    //        END;
    //        IF V_TOTALTABLA = 0 THEN
    //          INSERT INTO CMTASIGCOM
    //          (ADMON_COMERCIAL, ADMON_TERCERO, ADMON_ASIGCOM)
    //          VALUES
    //          ('002', :CMTTELEMER.MENS_NUMIDEN, 0);
    //        COMMIT;
    //        SELECT '002'
    //        INTO :CMTTELEMER.MENS_AVISAR
    //        FROM DUAL;
    //        :GLOBAL.MAILCOMER := 'FFEREZ';
    //        ELSE
    //          --
    //          IF :this.PARAMETER.get("PCARGO") IN ('GF','JP','EI','OS','39') THEN
    //            IF :CMTTELEMER.MENS_AVISAR IS NULL THEN
    //              -- BUSCA EL SUBGERENTE EN ESTE CASO EL COMERCIAL DE CAPTACIONES
    //                 
    //              --PU_BUSCAR_SUBGERENTE_CAPTA (V_AVISAR, :GLOBAL.MAILCOMER, :this.PARAMETER.get("POFCNA"));  PY 9179
    //              --PY 9179
    //              IF :CMTTELEMER.MENS_AQUIEN IS NULL THEN 
    //                 PU_BUSCAR_SUBGERENTE_CAPTA (V_AVISAR, :GLOBAL.MAILCOMER, :this.PARAMETER.get("POFCNA"));
    //              ELSE
    //                 V_AVISAR := :CMTTELEMER.MENS_AQUIEN;             
    //              END IF;
    //              --PY 9179
    //              --
    //              IF V_AVISAR IS NULL THEN
    //                LIB$DTNERFRMA('¡ERROR!, NO SE PUDO OBTENER EL CÓDIGO DEL EJECUTIVO DE INVERSIÓN.');
    //              END IF;
    //              /* PY 9179
    //              INSERT INTO CMTASIGCOM
    //            (ADMON_COMERCIAL, ADMON_TERCERO, ADMON_ASIGCOM)
    //              VALUES
    //            (V_AVISAR,:CMTTELEMER.MENS_NUMIDEN , 0);
    //            */
    //             --  
    //              --INSERTAR EL CLIENTE Y CRUZARLO CON EL EJECUTIVO DE INVERSIÓN.
    //              
    //              INSERT INTO SETTERSEC (TERSEC_CODIGO, TERSEC_NIT, TERSEC_DEPCOM) 
    //                VALUES (V_AVISAR,:CMTTELEMER.MENS_NUMIDEN, 'CAP' );
    //              COMMIT;
    //              COMMIT_FORM;
    //            ELSE 
    //             --INSERTAR EL CLIENTE Y CRUZARLLO CON EL EJECUTIVO DE INVERSIÓN.
    //              
    //              INSERT INTO SETTERSEC (TERSEC_CODIGO, TERSEC_NIT, TERSEC_DEPCOM) 
    //                VALUES (:CMTTELEMER.MENS_AVISAR,:CMTTELEMER.MENS_NUMIDEN, 'CAP' );
    //            COMMIT;
    //             COMMIT_FORM;
    //             V_AVISAR := :CMTTELEMER.MENS_AVISAR;
    //           END IF;
    //          ELSE
    //          /*ANTES CAMBIO 5627
    //          PU_BUSCAR_SUBGERENTE (V_AVISAR, :GLOBAL.MAILCOMER, :this.PARAMETER.get("POFCNA"));
    //            INSERT INTO CMTASIGCOM
    //          (ADMON_COMERCIAL, ADMON_TERCERO, ADMON_ASIGCOM)
    //          VALUES
    //          (V_AVISAR,:CMTTELEMER.MENS_NUMIDEN , 0);
    //           --  
    //          INSERT INTO SETTERXCOM (CXT_CODIGO, CXT_NIT, CXT_DEPCOM) 
    //              VALUES (V_AVISAR,:CMTTELEMER.MENS_NUMIDEN, 'COL' );
    //          COMMIT;
    //           COMMIT_FORM;
    //           ANTES CAMBIO 5627 */
    //            IF :this.PARAMETER.get("PCARGO") = 'OM' THEN 
    //               
    //               IF :CMTTELEMER.MENS_AVISAR IS NULL THEN
    //                  PU_BUSCAR_SUBGERENTE (V_AVISAR, :GLOBAL.MAILCOMER, :this.PARAMETER.get("POFCNA"));
    //               ELSE
    //                  V_AVISAR := :CMTTELEMER.MENS_AVISAR;
    //                
    //               END IF; 
    //               
    //             ELSE              
    //               PU_BUSCAR_SUBGERENTE (V_AVISAR, :GLOBAL.MAILCOMER, :this.PARAMETER.get("POFCNA"));
    //               
    //               V_CANSUBGEREN := F_SSUBGERENTE(V_AVISAR,:this.PARAMETER.get("POFCNA")); --MEJORA SSS
    //               
    //               IF V_CANSUBGEREN > 0 THEN --MEJORA SSS 
    //               
    //                 INSERT INTO CMTASIGCOM
    //             (ADMON_COMERCIAL, ADMON_TERCERO, ADMON_ASIGCOM)
    //              VALUES
    //             (V_AVISAR,:CMTTELEMER.MENS_NUMIDEN , 0);
    //           
    //            
    //               END IF;    --MEJORA SSS  
    //            
    //             END IF;
    //            
    //            
    //            IF V_AVISAR IS NOT NULL THEN
    //             
    //             INSERT INTO SETTERXCOM (CXT_CODIGO, CXT_NIT, CXT_DEPCOM) 
    //               VALUES (V_AVISAR,:CMTTELEMER.MENS_NUMIDEN, 'COL' );
    //         END IF;  
    //           
    //           COMMIT;
    //            COMMIT_FORM;
    //           
    //            END IF;
    //      END IF;
    //      IF :CMTTELEMER.MENS_AQUIEN IS NOT NULL THEN
    //        BEGIN
    //          SELECT COM_MAIL
    //            INTO V_MAILAQUIEN
    //          FROM SETCOMCIA
    //       WHERE COM_CODIGO = :CMTTELEMER.MENS_AQUIEN
    //         AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        V_MAILAQUIEN := NULL;
    //         END;
    //          PUP_ENVIO_CORREO8(:CMTTELEMER.MENS_AQUIEN, V_MAILAQUIEN);
    //      END IF;
    //      PUP_ENVIO_CORREO7    (V_AVISAR, :GLOBAL.MAILCOMER);  
    //      --CREAR REGISTRO EN LA AGENDA DEL COMERCIAL
    //      --CON TIPO DE COMPROMISO, FECHA Y HORA
    //     -- COD COMER  ,  NITTERCERO --,   TIPOGESTION,        TIPOORIGEN, ESTADO
    //     
    //     /*ANTES CAMBIO 5627
    //     PUP_INSERT_SEGXTER_TELEMER (V_AVISAR, :CMTTELEMER.MENS_NUMIDEN, :CMTTELEMER.MENS_OBSERVACIONES||' '||'TELEFONO '||:CMTTELEMER.MENS_TELEFONO, :CMTTELEMER.MENS_AQUIEN, :CMTTELEMER.MENS_TIPCOMPRO, :CMTTELEMER.MENS_FECCOMPRO, :CMTTELEMER.MENS_HORACOMPRO);--, :GLOBAL.TIPOGESTION, '007', 'GR');
    //     COMMIT_FORM; 
    //     ANTES CAMBIO 5627*/
    //     
    //     IF :CMTTELEMER.MENS_AVISAR IS NOT NULL THEN
    //       
    //      PUP_INSERT_SEGXTER_TELEMER (V_AVISAR, :CMTTELEMER.MENS_NUMIDEN, :CMTTELEMER.MENS_OBSERVACIONES||' '||'TELEFONO '||:CMTTELEMER.MENS_TELEFONO, :CMTTELEMER.MENS_AQUIEN, :CMTTELEMER.MENS_TIPCOMPRO, :CMTTELEMER.MENS_FECCOMPRO, :CMTTELEMER.MENS_HORACOMPRO);--, :GLOBAL.TIPOGESTION, '007', 'GR');
    //    
    //     END IF;
    //     COMMIT_FORM; 
    //       
    //        IF FORM_SUCCESS THEN
    //          BEGIN
    //          SELECT COM_NOMBRE||' '||COM_APELLIDO COMERCIAL 
    //               INTO  :CMTTELEMER.V_NOMBCOMER
    //            FROM CMTASIGCOM, SETCOMCIA
    //            WHERE ADMON_COMERCIAL= COM_CODIGO 
    //               AND ADMON_TERCERO  = :CMTTELEMER.MENS_NUMIDEN;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //            :CMTTELEMER.V_NOMBCOMER       := NULL;
    //         END;
    //          LIB$ALERTA('MENSAJE','SE ENVÍO CORREO AL SUBGERENTE CON CORREO ELECTRONICO : '||UPPER(:GLOBAL.MAILCOMER)||' '||'INFORMANDOLE QUE SE ACABA DE CREAR UN CLIENTE.', NULL,NULL,NULL, T_RESPUESTA);
    //          LIB$ALERTA('MENSAJE','EL REGISTRO FUE CREADO CON EXITO', NULL,NULL,NULL, T_RESPUESTA);
    //        END IF;
    // END;
    //#endregion
    async CMFMENU_cmttelemer_vGrabtelemer_whenButtonPressed() {
        console.log("Entering CMFMENU_cmttelemer_vGrabtelemer_whenButtonPressed");
        let TIPO_IDENTI: string = null;
        let TIPO_PER: string = null;
        let V_TOTALTABLA: number = null;
        let V_AVISAR: string = null;
        let T_RESPUESTA: number = null;
        let V_DESCARGO: string = null;
        let V_MAILAQUIEN: null = null;
        let V_CANSUBGEREN: number = null;
        if ((PLSQLBuiltins.to_number(this.CMTTELEMER.MENS_NUMIDEN) || PLSQLBuiltins.to_number(this.CMTTELEMER.MENS_NUMIDEN))) {
            TIPO_IDENTI = "NI";
            TIPO_PER = "J";
        }
        else if (PLSQLBuiltins.to_number(this.CMTTELEMER.MENS_NUMIDEN)) {
            TIPO_IDENTI = "CC";
            TIPO_PER = "N";
        }
        // CMFMENU_PU_INSERT_TERCEROXTELEMERCADEO(this.CMTTELEMER.MENS_NUMIDEN, TIPO_IDENTI, TIPO_PER, this.CMTTELEMER.MENS_NITNOMBRE, this.CMTTELEMER.MENS_DEPART, this.CMTTELEMER.MENS_CIUDAD, this.CMTTELEMER.MENS_DIRECCION, this.CMTTELEMER.MENS_TELEFONO, this.CMTTELEMER.MENS_CELULAR);
        // CMFMENU_LIB$ALERTA("MENSAJE", "SE CREO EL TERCERO CON DATOS MÍNIMOS.", null, null, null, T_RESPUESTA);
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_vgrabtelemer_whenbuttonpressed_query1", payload1);
        // get values from result
        V_TOTALTABLA = result1[0].get("V_TOTALTABLA");
        if (V_TOTALTABLA == 0) {
            // construct payload
            let payload2 = new Map();
            // payload2.MENS_NUMIDEN = : CMTTELEMER.MENS_NUMIDEN;
            // call REST API
            const result2 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_vgrabtelemer_whenbuttonpressed_query2", payload2);
            // construct payload
            let payload4 = new Map();
            payload4.set("MENS_AVISAR", this.CMTTELEMER.MENS_AVISAR);
            // call REST API
            const result4 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_vgrabtelemer_whenbuttonpressed_query4", payload4);
            // get values from result
            this.CMTTELEMER.MENS_AVISAR = result4[0].get("CMTTELEMER.MENS_AVISAR");
            // this.GLOBAL.MAILCOMER = "FFEREZ";
        }
        else {
            if (["GF", "JP", "EI", "OS", "39"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
                if ((this.CMTTELEMER.MENS_AVISAR == null)) {
                    if ((this.CMTTELEMER.MENS_AQUIEN == null)) {
                        // CMFMENU_PU_BUSCAR_SUBGERENTE_CAPTA(V_AVISAR, GLOBAL.MAILCOMER, this.PARAMETER.get("POFCNA"));
                    }
                    else {
                        V_AVISAR = this.CMTTELEMER.MENS_AQUIEN;
                    }
                    if ((V_AVISAR == null)) {
                        // CMFMENU_LIB$DTNERFRMA("¡ERROR!, NO SE PUDO OBTENER EL CÓDIGO DEL EJECUTIVO DE INVERSIÓN.");
                    }
                    // construct payload
                    let payload5 = new Map();
                    // payload5.MENS_NUMIDEN = : CMTTELEMER.MENS_NUMIDEN;
                    // call REST API
                    const result5 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_vgrabtelemer_whenbuttonpressed_query5", payload5);
                    this.oracleFormsBuiltins.commit_form();
                }
                else {
                    // construct payload
                    let payload7 = new Map();
                    // payload7.MENS_AVISAR = : CMTTELEMER.MENS_AVISAR;
                    // payload7.MENS_NUMIDEN = : CMTTELEMER.MENS_NUMIDEN;
                    // call REST API
                    const result7 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_vgrabtelemer_whenbuttonpressed_query7", payload7);
                    this.oracleFormsBuiltins.commit_form();
                    V_AVISAR = this.CMTTELEMER.MENS_AVISAR;
                }
            }
            else {
                if (this.PARAMETER.get("PCARGO") == "OM") {
                    if ((this.CMTTELEMER.MENS_AVISAR == null)) {
                        // CMFMENU_PU_BUSCAR_SUBGERENTE(V_AVISAR, GLOBAL.MAILCOMER, this.PARAMETER.get("POFCNA"));
                    }
                    else {
                        V_AVISAR = this.CMTTELEMER.MENS_AVISAR;
                    }
                }
                else {
                    // CMFMENU_PU_BUSCAR_SUBGERENTE(V_AVISAR, GLOBAL.MAILCOMER, this.PARAMETER.get("POFCNA"));
                    // V_CANSUBGEREN = F_SSUBGERENTE(V_AVISAR, this.PARAMETER.get("POFCNA"));
                    if (V_CANSUBGEREN > 0) {
                        // construct payload
                        let payload9 = new Map();
                        // payload9.MENS_NUMIDEN = : CMTTELEMER.MENS_NUMIDEN;
                        // call REST API
                        const result9 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_vgrabtelemer_whenbuttonpressed_query9", payload9);
                    }
                }
                if ((V_AVISAR != null)) {
                    // construct payload
                    let payload10 = new Map();
                    // payload10.MENS_NUMIDEN = : CMTTELEMER.MENS_NUMIDEN;
                    // call REST API
                    let result10 = Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_vgrabtelemer_whenbuttonpressed_query10", payload10);
                }
                this.oracleFormsBuiltins.commit_form();
            }
        }
        if ((this.CMTTELEMER.MENS_AQUIEN != null)) {
            // construct payload
            let payload12 = new Map();
            payload12.set("MENS_AQUIEN", this.CMTTELEMER.MENS_AQUIEN);
            payload12.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
            // call REST API
            let result12 = Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_vgrabtelemer_whenbuttonpressed_query12", payload12);
            // get values from result
            V_MAILAQUIEN = result12[0].get("V_MAILAQUIEN");
            // if (result12 == null || result12.length == 0) {

            //     V_MAILAQUIEN = null;
            // }

            // CMFMENU_PUP_ENVIO_CORREO8(this.CMTTELEMER.MENS_AQUIEN, V_MAILAQUIEN);
        }
        // CMFMENU_PUP_ENVIO_CORREO7(V_AVISAR, GLOBAL.MAILCOMER);
        if ((this.CMTTELEMER.MENS_AVISAR != null)) {
            // CMFMENU_PUP_INSERT_SEGXTER_TELEMER(V_AVISAR, this.CMTTELEMER.MENS_NUMIDEN, this.CMTTELEMER.MENS_OBSERVACIONES + " " + "TELEFONO " + CMTTELEMER.MENS_TELEFONO, this.CMTTELEMER.MENS_AQUIEN, this.CMTTELEMER.MENS_TIPCOMPRO, this.CMTTELEMER.MENS_FECCOMPRO, this.CMTTELEMER.MENS_HORACOMPRO);
        }
        this.oracleFormsBuiltins.commit_form();
        if (this.oracleFormsBuiltins.form_success) {
            // construct payload
            let payload13 = new Map();
            payload13.set("MENS_NUMIDEN", this.CMTTELEMER.MENS_NUMIDEN);
            // call REST API
            let result13 = Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_vgrabtelemer_whenbuttonpressed_query13", payload13);
            // get values from result
            this.CMTTELEMER.V_NOMBCOMER = result13[0].get("CMTTELEMER.V_NOMBCOMER");
            // if (result13 == null || result13.length == 0) {

            //     this.CMTTELEMER.V_NOMBCOMER = null;
            // }

            // CMFMENU_LIB$ALERTA("MENSAJE", "SE ENVÍO CORREO AL SUBGERENTE CON CORREO ELECTRONICO : " + PLSQLBuiltins.upper(GLOBAL.MAILCOMER) + " " + "INFORMANDOLE QUE SE ACABA DE CREAR UN CLIENTE.", null, null, null, T_RESPUESTA);
            // CMFMENU_LIB$ALERTA("MENSAJE", "EL REGISTRO FUE CREADO CON EXITO", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CMFMENU_cmttelemer_vGrabtelemer_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT SUBSTR(TDCDES,1,20)
    //    INTO :CMTTELEMER.V_CIUDAD
    //   FROM OPS$SEGUI.TDC 
    //   WHERE TDCCOD <> '000' 
    //     AND TDCDEP = :CMTTELEMER.MENS_DEPART
    //     AND TDCCOD = :CMTTELEMER.MENS_CIUDAD
    //     AND TDCPAI = (SELECT OPS$SEGUI.DEP.TDECOF
    //                      FROM OPS$SEGUI.DEP
    //                       WHERE DEPCOD <> '00'
    //                        AND DEPCOD= NVL(:BTER.DEPARTA,:CMTTELEMER.MENS_DEPART )
    //                       AND DEPACO = NVL(:BTER.PAIS,'169') )--PY 13888
    //   ORDER BY TDCCOD;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  LIB$DTNERFRMA('CIUDAD NO EXISTE');
    // END;
    //#endregion
    async CMFMENU_cmttelemer_mensCiudad_whenValidateItem() {
        console.log("Entering CMFMENU_cmttelemer_mensCiudad_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_DEPART", this.CMTTELEMER.MENS_DEPART);
        payload1.set("MENS_CIUDAD", this.CMTTELEMER.MENS_CIUDAD);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_mensciudad_whenvalidateitem_query1", payload1);
        // get values from result
        this.CMTTELEMER.V_CIUDAD = result1[0].get("CMTTELEMER.V_CIUDAD");
        if (result1 == null || result1.length == 0) {

            // CMFMENU_LIB$DTNERFRMA("CIUDAD NO EXISTE");
        }

        console.log("Exiting CMFMENU_cmttelemer_mensCiudad_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // SELECT COM_CODIGO
    //    ,COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //    ,COM_PLA
    //    ,COM_MAIL
    //    ,COM_ESTADO 
    //    ,COM_CODUNI
    //  INTO :CMTTELEMER.MENS_AVISAR 
    //       ,:CMTTELEMER.V_NOMBCOMER
    //       ,:GLOBAL.PLAZA
    //       ,:GLOBAL.MAILCOMER
    //      ,:GLOBAL.ESTADO   
    //      ,:GLOBAL.PUNIDAD
    // FROM SETCOMCIA
    // WHERE COM_ESTADO = 'A'
    //   AND COM_CODIGO = :CMTTELEMER.MENS_AVISAR
    //   AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :CMTTELEMER.MENS_AVISAR       := NULL;
    //   :CMTTELEMER.V_NOMBCOMER       := NULL;
    //   :GLOBAL.PLAZA     := NULL;
    //   :GLOBAL.MAILCOMER  := NULL;
    //   :GLOBAL.ESTADO    := NULL;
    //   :GLOBAL.PUNIDAD  := NULL;
    // END;
    //#endregion
    async CMFMENU_cmttelemer_mensAvisar_whenValidateItem() {
        console.log("Entering CMFMENU_cmttelemer_mensAvisar_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_AVISAR", this.CMTTELEMER.MENS_AVISAR);
        payload1.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmttelemer/cmfmenu_cmttelemer_mensavisar_whenvalidateitem_query1", payload1);
        // get values from result
        this.CMTTELEMER.MENS_AVISAR = result1[0].get("CMTTELEMER.MENS_AVISAR");
        this.CMTTELEMER.V_NOMBCOMER = result1[0].get("CMTTELEMER.V_NOMBCOMER");
        // GLOBAL.PLAZA = result1[0].get("GLOBAL.PLAZA");
        // GLOBAL.MAILCOMER = result1[0].get("GLOBAL.MAILCOMER");
        // GLOBAL.ESTADO = result1[0].get("GLOBAL.ESTADO");
        // GLOBAL.PUNIDAD = result1[0].get("GLOBAL.PUNIDAD");
        if (result1 == null || result1.length == 0) {

            this.CMTTELEMER.MENS_AVISAR = null;
            this.CMTTELEMER.V_NOMBCOMER = null;
            // this.GLOBAL.PLAZA = null;
            // this.GLOBAL.MAILCOMER = null;
            // this.GLOBAL.ESTADO = null;
            // this.GLOBAL.PUNIDAD = null;
        }

        console.log("Exiting CMFMENU_cmttelemer_mensAvisar_whenValidateItem");
    }

    //#region PLSQL
    // MESSAGE('SELECCIONE EL COMERCIAL AL CUAL VA ASIGNAR');
    // MESSAGE('SELECCIONE EL COMERCIAL AL CUAL VA ASIGNAR');
    // BEGIN
    //  IF :this.PARAMETER.get("PCARGO") = 'OM' THEN   
    //   IF NOT SHOW_LOV('LOV_RGCOMEROFIMER') THEN
    //       MESSAGE('NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_RGCOMEROFIMER');
    //    END IF;  
    //   ELSE       
    //   IF NOT SHOW_LOV('LOV_CMCAPTELEM') THEN
    //       MESSAGE('NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_CMCAPTELEM');
    //    END IF; 
    //  END IF;
    //  :CMTTELEMER.MENS_FECCOMPRO := SYSDATE;
    // 
    // END;
    //#endregion
    async CMFMENU_cmttelemer_mensAvisar_whenMouseClick() {
        console.log("Entering CMFMENU_cmttelemer_mensAvisar_whenMouseClick");
        if (this.PARAMETER.get("PCARGO") == "OM") {
            if ((!this.oracleFormsBuiltins.show_lov("LOV_RGCOMEROFIMER"))) {
                this.oracleFormsBuiltins.message("NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_RGCOMEROFIMER");
            }
        }
        else {
            if ((!this.oracleFormsBuiltins.show_lov("LOV_CMCAPTELEM"))) {
                this.oracleFormsBuiltins.message("NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_CMCAPTELEM");
            }
        }
        this.CMTTELEMER.MENS_FECCOMPRO = PLSQLBuiltins.sysdate();
        console.log("Exiting CMFMENU_cmttelemer_mensAvisar_whenMouseClick");
    }

    //#region PLSQL
    // MESSAGE('SELECCIONE EL COMERCIAL AL CUAL VA ASIGNAR');
    // MESSAGE('SELECCIONE EL COMERCIAL AL CUAL VA ASIGNAR');
    // BEGIN
    //  IF :this.PARAMETER.get("PCARGO") = 'OM' THEN   
    //   IF NOT SHOW_LOV('LOV_RGCOMEROFIMER') THEN
    //       MESSAGE('NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_RGCOMEROFIMER');
    //    END IF;  
    //   ELSE       
    //   IF NOT SHOW_LOV('LOV_CMCAPTELEM') THEN
    //       MESSAGE('NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_CMCAPTELEM');
    //    END IF; 
    //  END IF;
    //  :CMTTELEMER.MENS_FECCOMPRO := SYSDATE;
    // 
    // END;
    //#endregion
    async CMFMENU_cmttelemer_mensAvisar_whenMouseDoubleclick() {
        console.log("Entering CMFMENU_cmttelemer_mensAvisar_whenMouseDoubleclick");
        if (this.PARAMETER.get("PCARGO") == "OM") {
            if ((!this.oracleFormsBuiltins.show_lov("LOV_RGCOMEROFIMER"))) {
                this.oracleFormsBuiltins.message("NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_RGCOMEROFIMER");
            }
        }
        else {
            if ((!this.oracleFormsBuiltins.show_lov("LOV_CMCAPTELEM"))) {
                this.oracleFormsBuiltins.message("NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_CMCAPTELEM");
            }
        }
        this.CMTTELEMER.MENS_FECCOMPRO = PLSQLBuiltins.sysdate();
        console.log("Exiting CMFMENU_cmttelemer_mensAvisar_whenMouseDoubleclick");
    }

    //#region PLSQL
    // MESSAGE('SELECCIONE EL COMERCIAL AL CUAL VA ASIGNAR');
    // MESSAGE('SELECCIONE EL COMERCIAL AL CUAL VA ASIGNAR');
    // BEGIN
    //  IF :this.PARAMETER.get("PCARGO") = 'OM' THEN   
    //   IF NOT SHOW_LOV('LOV_RGCOMEROFIMER') THEN
    //       MESSAGE('NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_RGCOMEROFIMER');
    //    END IF;  
    //   ELSE       
    //   IF NOT SHOW_LOV('LOV_CMCAPTELEM') THEN
    //       MESSAGE('NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_CMCAPTELEM');
    //    END IF; 
    //  END IF;
    //  :CMTTELEMER.MENS_FECCOMPRO := SYSDATE;
    // 
    // END;
    //#endregion
    async CMFMENU_cmttelemer_mensAvisar_keyListval() {
        console.log("Entering CMFMENU_cmttelemer_mensAvisar_keyListval");
        if (this.PARAMETER.get("PCARGO") == "OM") {
            if ((!this.oracleFormsBuiltins.show_lov("LOV_RGCOMEROFIMER"))) {
                this.oracleFormsBuiltins.message("NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_RGCOMEROFIMER");
            }
        }
        else {
            if ((!this.oracleFormsBuiltins.show_lov("LOV_CMCAPTELEM"))) {
                this.oracleFormsBuiltins.message("NO EXISTE VALORES DISPONIBLES PARA LA LISTA LOV_CMCAPTELEM");
            }
        }
        this.CMTTELEMER.MENS_FECCOMPRO = PLSQLBuiltins.sysdate();
        console.log("Exiting CMFMENU_cmttelemer_mensAvisar_keyListval");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CMTTELEMER.MENS_TIPCOMPRO'); END;
    //#endregion
    async CMFMENU_cmttelemer_mensAvisar_keyNextItem() {
        console.log("Entering CMFMENU_cmttelemer_mensAvisar_keyNextItem");
        this.oracleFormsBuiltins.go_item("CMTTELEMER.MENS_TIPCOMPRO");
        console.log("Exiting CMFMENU_cmttelemer_mensAvisar_keyNextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'CG$LOV'); END;
    //#endregion
    async CMFMENU_tben_postTextItem() {
        console.log("Entering CMFMENU_tben_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "CG$LOV");
        console.log("Exiting CMFMENU_tben_postTextItem");
    }

    async CMFMENU_tben_keyDelrec() {
        // null;
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_tben_whenNewItemInstance() {
        console.log("Entering CMFMENU_tben_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_tben_whenNewItemInstance");
    }

    async CMFMENU_tben_keyNxtblk() {
        // null;
    }

    async CMFMENU_tben_keyCommit() {
        // null;
    }

    async CMFMENU_tben_keyExit() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //   IF :SYSTEM.BLOCK_STATUS = 'QUERY' THEN
    //     :GLOBAL.AUXTERCERO := :TBEN.TBENCOD;
    //     :GLOBAL.DIGITO     := :TBEN.TBENDCHE;
    //     :PARAGESTION.V_NIT := :GLOBAL.AUXTERCERO;
    //     HIDE_VIEW('TERCEROS');
    //   
    //     GO_BLOCK('BTER');
    //     EXECUTE_QUERY;
    //     
    //    -- PY 20902 LFAC 
    //     IF :BTER.TIPPER = 'N' THEN
    //       SET_ITEM_PROPERTY('BTER.RAZON', "ENABLED", "PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('BTER.RAZON', "UPDATE_ALLOWED", "PROPERTY_FALSE");
    //     
    //     ELSIF :BTER.TIPPER = 'J' THEN
    //       SET_ITEM_PROPERTY('BTER.RAZON', "ENABLED", "PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('BTER.RAZON', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    //     END IF;
    //     GO_BLOCK('CMTSEGXTER');
    //     EXECUTE_QUERY;
    //     
    //   ELSE
    //     IF :SYSTEM.BLOCK_STATUS = 'NEW' THEN
    //       DO_KEY('EXECUTE_QUERY');
    //     
    //     END IF;
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_tben_keyNextItem() {
        console.log("Entering CMFMENU_tben_keyNextItem");
        if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") == "QUERY") {
            // this.GLOBAL.AUXTERCERO = this.TBEN.TBENCOD;
            // this.GLOBAL.DIGITO = this.TBEN.TBENDCHE;
            // this.PARAGESTION.V_NIT = this.GLOBAL.AUXTERCERO;
            this.oracleFormsBuiltins.hide_view("TERCEROS");
            this.oracleFormsBuiltins.go_block("BTER");
            this.oracleFormsBuiltins.execute_query();
            if (this.BTER.TIPPER == "N") {
                this.oracleFormsBuiltins.set_item_property("BTER.RAZON", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("BTER.RAZON", "UPDATE_ALLOWED", "PROPERTY_FALSE");
            }
            else if (this.BTER.TIPPER == "J") {
                this.oracleFormsBuiltins.set_item_property("BTER.RAZON", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("BTER.RAZON", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            }
            this.oracleFormsBuiltins.go_block("CMTSEGXTER");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") == "NEW") {
                this.oracleFormsBuiltins.do_key("EXECUTE_QUERY");
            }
        }
        console.log("Exiting CMFMENU_tben_keyNextItem");
    }

    async CMFMENU_tben_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN IF ERROR_TYPE= 'FRM' AND ERROR_CODE = 41026 THEN
    // NULL;
    // ELSIF  ERROR_TYPE= 'FRM' AND ERROR_CODE = 40508 THEN
    //  NULL;
    //  END IF; END;
    //#endregion
    async CMFMENU_direcciones_onError() {
        console.log("Entering CMFMENU_direcciones_onError");
        // if ((this.oracleFormsBuiltins.error_type == "FRM" && this.oracleFormsBuiltins.error_code == 41026)) {
        // }
        // else if ((this.oracleFormsBuiltins.error_type == "FRM" && this.oracleFormsBuiltins.error_code == 40508)) {
        // }
        console.log("Exiting CMFMENU_direcciones_onError");
    }

    async CMFMENU_direcciones_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  V_VALOR  VARCHAR2(200);
    //  
    // BEGIN
    //  
    //  SELECT (PLSQLBuiltins.string_length(:GLOBAL.CADENA)-1)
    //     INTO V_VALOR
    //  FROM DUAL;
    // :DIRECCIONES.CADENA:= SUBSTR(:GLOBAL.CADENA,1,V_VALOR); 
    // :GLOBAL.CADENA:=:DIRECCIONES.CADENA;
    // END;
    //#endregion
    async CMFMENU_direcciones_borrar_whenButtonPressed() {
        console.log("Entering CMFMENU_direcciones_borrar_whenButtonPressed");
        let V_VALOR: string = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("CADENA", GLOBAL.CADENA);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_direcciones/cmfmenu_direcciones_borrar_whenbuttonpressed_query1", payload1);
        // get values from result
        V_VALOR = result1[0].get("V_VALOR");
        // this.DIRECCIONES.CADENA = PLSQLBuiltins.substr(GLOBAL.CADENA, 1, V_VALOR);
        // this.GLOBAL.CADENA = this.DIRECCIONES.CADENA;
        console.log("Exiting CMFMENU_direcciones_borrar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN -- RETORNAR AL ITEM SIGUIENTE, UNA VEZ LIMPIE LO ALMACENADO EN DIRECCIONES.
    // 
    // IF :GLOBAL.DIR1= 'DIR' THEN
    //  GO_ITEM('BTER.DEPARTA');
    //  :GLOBAL.CADENA:=NULL; 
    // HIDE_VIEW('DIRECCIONES'); 
    //  END IF; END;
    //#endregion
    async CMFMENU_direcciones_dev_whenButtonPressed() {
        console.log("Entering CMFMENU_direcciones_dev_whenButtonPressed");
        // if (GLOBAL.DIR1 == "DIR") {
        //     this.oracleFormsBuiltins.go_item("BTER.DEPARTA");
        //     this.GLOBAL.CADENA = null;
        //     this.oracleFormsBuiltins.hide_view("DIRECCIONES");
        // }
        console.log("Exiting CMFMENU_direcciones_dev_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN OPS$SEGUI.PBD_SEG_HOMOLOGA_DIR(:DIRECCIONES.HOMOLOGA,:DIRECCIONES.HOMOLOGA); END;
    //#endregion
    async CMFMENU_direcciones_homolo_whenButtonPressed() {
        console.log("Entering CMFMENU_direcciones_homolo_whenButtonPressed");
        // CMFMENU_OPS$SEGUI.PBD_SEG_HOMOLOGA_DIR(DIRECCIONES.HOMOLOGA, DIRECCIONES.HOMOLOGA);
        console.log("Exiting CMFMENU_direcciones_homolo_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF  :GLOBAL.DIR1= 'DIR' AND
    //   FRM$ALERTA_SINO ('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //    :BTER.DIRECC:=:DIRECCIONES.CADENA;
    //     :DIRECCIONES.CADENA:=NULL;
    //     GO_ITEM('BTER.DEPARTA');
    //     HIDE_VIEW('DIRECCIONES');   
    // END IF; END;
    //#endregion
    async CMFMENU_direcciones_grabar_whenButtonPressed() {
        console.log("Entering CMFMENU_direcciones_grabar_whenButtonPressed");
        // if ((GLOBAL.DIR1 == "DIR" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //     this.BTER.DIRECC = this.DIRECCIONES.CADENA;
        //     this.DIRECCIONES.CADENA = null;
        //     this.oracleFormsBuiltins.go_item("BTER.DEPARTA");
        //     this.oracleFormsBuiltins.hide_view("DIRECCIONES");
        // }
        console.log("Exiting CMFMENU_direcciones_grabar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONES.CADENA:=:DIRECCIONES.HOMOLOGA; END;
    //#endregion
    async CMFMENU_direcciones_cambioHomolo_whenButtonPressed() {
        console.log("Entering CMFMENU_direcciones_cambioHomolo_whenButtonPressed");
        this.DIRECCIONES.CADENA = this.DIRECCIONES.HOMOLOGA;
        console.log("Exiting CMFMENU_direcciones_cambioHomolo_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN
    // IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP','TS','AP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN 
    //   :this.PARAMETER.get("PCODCOMER") := NULL;
    // END IF; END;
    //#endregion
    async CMFMENU_bdetctos_preQuery() {
        console.log("Entering CMFMENU_bdetctos_preQuery");
        if ((["GF", "GC", "GI", "JM", "AM", "SR", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1 && (this.PARAMETER.get("PCODCOMER") != null))) {
            this.PARAMETER.set("PCODCOMER", null);
        }
        console.log("Exiting CMFMENU_bdetctos_preQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_DETCTOS;
    // BEGIN
    // PQBD_COL_ADMVEN.PDETCTOS(BK_DATA, :V_TIEMPO, :this.PARAMETER.get("PCODCOMER"), :this.PARAMETER.get("PPLAZU"), :this.PARAMETER.get("PUNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BDETCTOS');
    // END;
    //#endregion
    async CMFMENU_bdetctos_queryProcedure() {
        console.log("Entering CMFMENU_bdetctos_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PDETCTOS(BK_DATA, V_TIEMPO, this.PARAMETER.get("PCODCOMER"), this.PARAMETER.get("PPLAZU"), this.PARAMETER.get("PUNIDAD"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BDETCTOS");
        console.log("Exiting CMFMENU_bdetctos_queryProcedure");
    }

    //#region PLSQL
    // BEGIN
    //      SELECT INCDES DESCRI1
    //       INTO  :BDETCTOS.V_ACTIVO
    //     FROM   OPS$ACTIVOS.INC
    //     WHERE  INCOFC   = :BDETCTOS.OFICINA
    //     AND    INCTDOC  = :BDETCTOS.TIPOCTO
    //     AND    INCCOL   = :BDETCTOS.CONTRATO
    //     AND    ROWNUM   = 1;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :BDETCTOS.V_ACTIVO := NULL;
    // END;
    //#endregion
    async CMFMENU_bdetctos_postQuery() {
        console.log("Entering CMFMENU_bdetctos_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("OFICINA", this.BDETCTOS.OFICINA);
        payload1.set("TIPOCTO", this.BDETCTOS.TIPOCTO);
        payload1.set("CONTRATO", this.BDETCTOS.CONTRATO);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bdetctos/cmfmenu_bdetctos_postquery_query1", payload1);
        // get values from result
        this.BDETCTOS.V_ACTIVO = result1[0].get("BDETCTOS.V_ACTIVO");
        if (result1 == null || result1.length == 0) {

            this.BDETCTOS.V_ACTIVO = null;
        }

        console.log("Exiting CMFMENU_bdetctos_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  BEGIN
    //  IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','JM','AM','GI','AP','SR') THEN
    //    LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL, SELECCIONELO Y EJECUTE LA CONSULTA',NULL,NULL,NULL,T_RESPUESTA);  
    //  /*ELSIF :this.PARAMETER.get("PCARGO") = ('SR') AND :this.PARAMETER.get("PPLAZU") <> :this.PARAMETER.get("POFCNA") THEN--QUE ES BOGOTA UNO Y BTA DOS
    //   LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR LOS COMERCIALES DE SU PLAZA COMERCIAL',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSIF :this.PARAMETER.get("PCARGO") = ('SR') AND :this.PARAMETER.get("PPLAZU") = :this.PARAMETER.get("POFCNA") THEN--QUE ES REGIONAL  
    //     LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR LOS COMERCIALES Y FREE-LANCE DE SU PLAZA COMERCIAL',NULL,NULL,NULL,T_RESPUESTA); 
    //     */
    //  ELSE
    //   LIB$ALERTA('MENSAJE','SU JERARQUÍA LE IMPIDE CONSULTAR UN COMERCIAL DIFERENTE AL SUYO.',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;
    //  END;
    // ENTER_QUERY;
    //  
    //#endregion
    async CMFMENU_bdetclixcomer_keyentqry() {
        console.log("Entering CMFMENU_bdetclixcomer_keyentqry");
        let T_RESPUESTA: number = null;
        if (["GF", "GC", "JM", "AM", "GI", "AP", "SR"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL, SELECCIONELO Y EJECUTE LA CONSULTA", null, null, null, T_RESPUESTA);
        }
        else {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SU JERARQUÍA LE IMPIDE CONSULTAR UN COMERCIAL DIFERENTE AL SUYO.", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CMFMENU_bdetclixcomer_keyentqry");
    }

    //#region PLSQL
    // BEGIN IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JP','JM','AM','SR','TS','AP') THEN
    //  :this.PARAMETER.get("PCODCOMER") := NULL;
    //  :this.PARAMETER.get("PCODCOMER"):=NVL(:BDETCLIXCOMER.CODCOMER,:this.PARAMETER.get("PCODCOMER"));
    // ELSE
    //   IF :this.PARAMETER.get("PCCOM") IS NULL THEN
    //     :this.PARAMETER.get("PCODCOMER"):=NVL(:BDETCLIXCOMER.CODCOMER,:this.PARAMETER.get("PCODCOMER"));
    //   END IF;
    // END IF; END;
    //#endregion
    async CMFMENU_bdetclixcomer_prequery() {
        console.log("Entering CMFMENU_bdetclixcomer_prequery");
        if (["GF", "GC", "GI", "JP", "JM", "AM", "SR", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            this.PARAMETER.set("PCODCOMER", null);
            this.PARAMETER.set("PCODCOMER", this.BDETCLIXCOMER.CODCOMER == null ? this.PARAMETER.get("PCODCOMER") : this.BDETCLIXCOMER.CODCOMER);
        }
        else {
            if (this.PARAMETER.set("PCCOM", null)) {
                this.PARAMETER.set("PCODCOMER", this.BDETCLIXCOMER.CODCOMER == null ? this.PARAMETER.get("PCODCOMER") : this.BDETCLIXCOMER.CODCOMER);
            }
        }
        console.log("Exiting CMFMENU_bdetclixcomer_prequery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_DETRCLIXCOMER;
    // BEGIN
    // PQBD_COL_ADMVEN.PDETCLIXCOMER(BK_DATA, :this.PARAMETER.get("PCODCOMER"), :BCLIXCOMER.TIPOPERFIL, :this.PARAMETER.get("PCARGO"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BDETCLIXCOMER');
    // END;
    //#endregion
    async CMFMENU_bdetclixcomer_queryProcedure() {
        console.log("Entering CMFMENU_bdetclixcomer_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PDETCLIXCOMER(BK_DATA, this.PARAMETER.get("PCODCOMER"), BCLIXCOMER.TIPOPERFIL, this.PARAMETER.get("PCARGO"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BDETCLIXCOMER");
        console.log("Exiting CMFMENU_bdetclixcomer_queryProcedure");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //  VCONDICION   VARCHAR2(200);
    // BEGIN
    //  IF :V_INFGESTION = 'S' THEN
    //   SET_VIEW_PROPERTY ('PAG3', "DISPLAY_POSITION", 7, 16);--20 
    //   SET_VIEW_PROPERTY ('PAG3', "VIEW_SIZE", 580,289);
    //   :GLOBAL.AUXTERCERO := :BDETCLIXCOMER.NITCLIE;
    //     GO_BLOCK('BTER');
    //     EXECUTE_QUERY;
//    //     SYNCHRONIZE;
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_bdetclixcomer_vInfgestion_whenCheckboxChanged() {
        console.log("Entering CMFMENU_bdetclixcomer_vInfgestion_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let VCONDICION: string = null;
        // if (V_INFGESTION == "S") {
        //     this.oracleFormsBuiltins.set_view_property("PAG3", "DISPLAY_POSITION", 7, 16);
        //     this.oracleFormsBuiltins.set_view_property("PAG3", "VIEW_SIZE", 580, 289);
        //     this.GLOBAL.AUXTERCERO = this.BDETCLIXCOMER.NITCLIE;
        //     this.oracleFormsBuiltins.go_block("BTER");
        //     this.oracleFormsBuiltins.execute_query();
//        //     this.oracleFormsBuiltins.synchronize();
        // }
        console.log("Exiting CMFMENU_bdetclixcomer_vInfgestion_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_cmttipngxcom_postTextItem() {
        console.log("Entering CMFMENU_cmttipngxcom_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_cmttipngxcom_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_cmttipngxcom_whenNewItemInstance() {
        console.log("Entering CMFMENU_cmttipngxcom_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_cmttipngxcom_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :TIPNG_USUARIO := :BASE.USUARIO;
    // :TIPNG_FECREG  := SYSDATE; END;
    //#endregion
    async CMFMENU_cmttipngxcom_whenCreateRecord() {
        console.log("Entering CMFMENU_cmttipngxcom_whenCreateRecord");
        // this.CMTTIPNGXCOM.TIPNG_USUARIO = this.BASE.USUARIO;
        this.CMTTIPNGXCOM.TIPNG_FECREG = PLSQLBuiltins.sysdate();
        console.log("Exiting CMFMENU_cmttipngxcom_whenCreateRecord");
    }

    //#region PLSQL
    // DECLARE
    //  V_CODCOMER SETCOMCIA.COM_CODIGO%TYPE;
    // BEGIN 
    //  IF :TIPNG_CODCOM IS NULL THEN
    //   V_CODCOMER := :SETCOMCIA.COM_CODIGO;
    //  ELSE
    //   V_CODCOMER := :TIPNG_CODCOM;
    //   END IF; 
    //   --INSERCCIÓN REGISTRO PARA PREMIOS COMERCIALES
    //   PU_INSERT_COTTIPXCOM (V_CODCOMER,:TIPNG_TIPPROD);
    // COMMIT_FORM;
    // COMMIT;
    // END;
    //#endregion
    async CMFMENU_cmttipngxcom_keyCommit() {
        console.log("Entering CMFMENU_cmttipngxcom_keyCommit");
        let V_CODCOMER: null = null;
        // if ((TIPNG_CODCOM == null)) {
        //     V_CODCOMER = this.SETCOMCIA.COM_CODIGO;
        // }
        // else {
        //     V_CODCOMER = this.CMTTIPNGXCOM.TIPNG_CODCOM;
        // }
        // CMFMENU_PU_INSERT_COTTIPXCOM(V_CODCOMER, TIPNG_TIPPROD);
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CMFMENU_cmttipngxcom_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    // SELECT PROD_DESCRI
    //  INTO :V_DESTIPPROD
    //  FROM CRTPRODCIA 
    //  WHERE PROD_CODIGO = :TIPNG_TIPPROD
    //    AND PROD_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //    :V_DESTIPPROD := NULL;
    // END;
    // BEGIN
    //  SELECT A.COM_NOMBRE||' '||A.COM_APELLIDO
    //    INTO :V_NOMBCOMERCIAL
    //   FROM SETCOMCIA A
    //   WHERE A.COM_CODIGO = :TIPNG_CODCOM
    //    AND A.COM_CODUNI = :this.PARAMETER.get("PUNIDAD");--ARQUITECTURA
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :V_NOMBCOMERCIAL := NULL; 
    // END;
    //#endregion
    async CMFMENU_cmttipngxcom_postQuery() {
        console.log("Entering CMFMENU_cmttipngxcom_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("TIPNG_TIPPROD", TIPNG_TIPPROD);
        payload1.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmttipngxcom/cmfmenu_cmttipngxcom_postquery_query1", payload1);
        // get values from result
        // V_DESTIPPROD = result1[0].get("V_DESTIPPROD");
        if (result1 == null || result1.length == 0) {

            this.CMTTIPNGXCOM.V_DESTIPPROD = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("TIPNG_CODCOM", TIPNG_CODCOM);
        payload2.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result2 = await Rest.post("/cmfmenu_cmttipngxcom/cmfmenu_cmttipngxcom_postquery_query2", payload2);
        // get values from result
        // V_NOMBCOMERCIAL = result2[0].get("V_NOMBCOMERCIAL");
        if (result2 == null || result2.length == 0) {

            this.CMTTIPNGXCOM.V_NOMBCOMERCIAL = null;
        }

        console.log("Exiting CMFMENU_cmttipngxcom_postQuery");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_bespecifica_postTextItem() {
        console.log("Entering CMFMENU_bespecifica_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_bespecifica_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bespecifica_whenNewItemInstance() {
        console.log("Entering CMFMENU_bespecifica_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bespecifica_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN IF :V_CNOREV IS NULL THEN
    //  LIB$DTNERFRMA('DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA DE CLIENTES NO RENOVARON');
    // ELSE
    // NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CMFMENU_bespecifica_vCnorev_whenListChanged() {
        console.log("Entering CMFMENU_bespecifica_vCnorev_whenListChanged");
        // if ((V_CNOREV == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA DE CLIENTES NO RENOVARON");
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CMFMENU_bespecifica_vCnorev_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :BTIPCON.TIPCON IS NULL THEN 
    //  LIB$DTNERFRMA('DEBE SELECCIONAR UN TIPO DE CONSULTA GENERAL/ESPECIFICA');
    // ELSE
    //  IF :BTIPCON.TIPCON = 'G' THEN
    //    IF :BTIPCON.TIPCON = 'G' AND :BTIPCON.TIPGENERAL IS NULL THEN
    //     LIB$DTNERFRMA('DEBE SELECCIONAR UN TIPO DE NIVEL PARA LA CONSULTA GENERAL');
    //    ELSIF :BTIPCON.TIPCON = 'G' AND :BTIPCON.TIPGENERAL = '1' THEN
    //      SHOW_VIEW('PAG61');
    //       GO_BLOCK('BGEN1');
    //       EXECUTE_QUERY;
//    //       SYNCHRONIZE;
    //     ELSIF :BTIPCON.TIPCON = 'G' AND :BTIPCON.TIPGENERAL = '2' THEN
    //      SHOW_VIEW('PAG62');
    //       GO_BLOCK('BGEN2');
    //       EXECUTE_QUERY;
//    //       SYNCHRONIZE;
    //     END IF;
    //  ELSIF :BTIPCON.TIPCON = 'E'  THEN
    //   SHOW_VIEW('PAG63');
    //     GO_BLOCK('BESPE');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('BESPECTO');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('BESPECLIE');
    //     EXECUTE_QUERY;
    //     /*GO_BLOCK('BESPEREF');
    //     EXECUTE_QUERY;*/
    //     GO_BLOCK('BESPE');
//    //     SYNCHRONIZE;
    //   END IF;
    // END IF; END;
    //#endregion
    async CMFMENU_bespecifica_vGenconsul_whenButtonPressed() {
        console.log("Entering CMFMENU_bespecifica_vGenconsul_whenButtonPressed");
        if ((this.BTIPCON.TIPCON == null)) {
            // CMFMENU_LIB$DTNERFRMA("DEBE SELECCIONAR UN TIPO DE CONSULTA GENERAL/ESPECIFICA");
        }
        else {
            if (this.BTIPCON.TIPCON == "G") {
                if ((this.BTIPCON.TIPCON == "G" && (this.BTIPCON.TIPGENERAL == null))) {
                    // CMFMENU_LIB$DTNERFRMA("DEBE SELECCIONAR UN TIPO DE NIVEL PARA LA CONSULTA GENERAL");
                }
                else if ((this.BTIPCON.TIPCON == "G" && this.BTIPCON.TIPGENERAL == "1")) {
                    this.oracleFormsBuiltins.show_view("PAG61");
                    this.oracleFormsBuiltins.go_block("BGEN1");
                    this.oracleFormsBuiltins.execute_query();
//                    this.oracleFormsBuiltins.synchronize();
                }
                else if ((this.BTIPCON.TIPCON == "G" && this.BTIPCON.TIPGENERAL == "2")) {
                    this.oracleFormsBuiltins.show_view("PAG62");
                    this.oracleFormsBuiltins.go_block("BGEN2");
                    this.oracleFormsBuiltins.execute_query();
//                    this.oracleFormsBuiltins.synchronize();
                }
            }
            else if (this.BTIPCON.TIPCON == "E") {
                this.oracleFormsBuiltins.show_view("PAG63");
                this.oracleFormsBuiltins.go_block("BESPE");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("BESPECTO");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("BESPECLIE");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("BESPE");
//                this.oracleFormsBuiltins.synchronize();
            }
        }
        console.log("Exiting CMFMENU_bespecifica_vGenconsul_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :V_CTIEMPOVEN IS NULL THEN
    //  LIB$DTNERFRMA('DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA');
    // ELSE
    //  NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CMFMENU_bespecifica_vCtiempoven_whenListChanged() {
        console.log("Entering CMFMENU_bespecifica_vCtiempoven_whenListChanged");
        // if ((V_CTIEMPOVEN == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA");
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CMFMENU_bespecifica_vCtiempoven_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :V_CSIRENOV IS NULL THEN
    //  LIB$DTNERFRMA('DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA DE CLIENTES NO RENOVARON');
    // ELSE
    //  NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CMFMENU_bespecifica_vCsirenov_whenListChanged() {
        console.log("Entering CMFMENU_bespecifica_vCsirenov_whenListChanged");
        // if ((V_CSIRENOV == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA DE CLIENTES NO RENOVARON");
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CMFMENU_bespecifica_vCsirenov_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :V_CTIEMPO IS NULL THEN
    //  LIB$DTNERFRMA('DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA');
    // ELSE
    //  NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CMFMENU_bespecifica_vCtiempo_whenListChanged() {
        console.log("Entering CMFMENU_bespecifica_vCtiempo_whenListChanged");
        // if ((V_CTIEMPO == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA");
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CMFMENU_bespecifica_vCtiempo_whenListChanged");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_bespecto_postTextItem() {
        console.log("Entering CMFMENU_bespecto_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_bespecto_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bespecto_whenNewItemInstance() {
        console.log("Entering CMFMENU_bespecto_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bespecto_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_CESPECTO;
    // BEGIN
    // PQBD_COL_ADMVEN.PCESPCTO(BK_DATA, :this.PARAMETER.get("PFECINI"), :this.PARAMETER.get("PFECFIN"), :this.PARAMETER.get("PGRUCOM"), :this.PARAMETER.get("PCIUDAD"), :this.PARAMETER.get("PUSUARI"), :BESPECIFICA.V_CTIEMPO, :this.PARAMETER.get("PUNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BESPECTO');
    // END;
    //#endregion
    async CMFMENU_bespecto_queryProcedure() {
        console.log("Entering CMFMENU_bespecto_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PCESPCTO(BK_DATA, this.PARAMETER.get("PFECINI"), this.PARAMETER.get("PFECFIN"), this.PARAMETER.get("PGRUCOM"), this.PARAMETER.get("PCIUDAD"), this.PARAMETER.get("PUSUARI"), BESPECIFICA.V_CTIEMPO, this.PARAMETER.get("PUNIDAD"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BESPECTO");
        console.log("Exiting CMFMENU_bespecto_queryProcedure");
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
    async CMFMENU_control_carima_whenButtonPressed() {
        console.log("Entering CMFMENU_control_carima_whenButtonPressed");
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

        console.log("Exiting CMFMENU_control_carima_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_RESCONTAC;
    // BEGIN
    // PQBD_COL_ADMVEN.PREGCONTAC(BK_DATA, :this.PARAMETER.get("PCODCOMER"), :V_CONTAC, :this.PARAMETER.get("PCARGO"), :this.PARAMETER.get("PUNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'SEGPRXCONTAC');
    // END;
    //#endregion
    async CMFMENU_segprxcontac_queryProcedure() {
        console.log("Entering CMFMENU_segprxcontac_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PREGCONTAC(BK_DATA, this.PARAMETER.get("PCODCOMER"), V_CONTAC, this.PARAMETER.get("PCARGO"), this.PARAMETER.get("PUNIDAD"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "SEGPRXCONTAC");
        console.log("Exiting CMFMENU_segprxcontac_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  VBOTON   NUMBER;
    // BEGIN
    // --IF :SEGPRXCONTAC.CANTIDAD = 0 AND :this.PARAMETER.get("PCARGO") NOT IN ('GF','GC','GI','JM','AM','SR','JP') THEN
    // IF :SEGPRXCONTAC.CANTIDAD = 0 AND :this.PARAMETER.get("PCARGO") NOT IN ('GF','GC','GI','JM','AM','SR','JP','TS','AP') THEN  --7818
    //  LIB$DTNERFRMA('NO HAY DATOS PARA CONSULTAR PARA ESE TIPO DE PERFIL');
    //  :V_VERCONT := 'N';
    // --ELSIF :SEGPRXCONTAC.CANTIDAD  = 0  AND :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP') THEN
    // ELSIF :SEGPRXCONTAC.CANTIDAD  = 0  AND :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP','TS','AP') THEN  --PY 7818
    //   LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL SELECCIONE LA OPCIÓN QUE DESEA',NULL,NULL,NULL,T_RESPUESTA);
    //   LIB$ALERTA('MENSAJE','COMO DESEA CONSULTAR?'
    //           ,'OPCION X MENU', 'POR PERFIL',NULL, VBOTON);
    //     IF VBOTON = 1 THEN 
    //       LIB$ALERTA('MENSAJE','PARA FUTURAS CONSULTAS PUEDE INGRESAR DIRECTAMENTE POR LA OPCIÓN DEL MENÚ',NULL,NULL,NULL,T_RESPUESTA);    
    //      :V_CONPERFIL := NULL;
    //     GO_BLOCK('BDETSEGPRX');
    //     EXECUTE_QUERY;
    //     ELSIF VBOTON = 2 THEN
    //       LIB$ALERTA('MENSAJE','POR FAVOR SELECCIONE EL TIPO DE PERFIL A CONSULTAR Y DESPÚES PUEDE FILTRAR LA INFORMACIÓN POR COMERCIAL',NULL,NULL,NULL,T_RESPUESTA);
    //     SET_ITEM_PROPERTY('V_CONPERFIL',"DISPLAYED", "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('V_CONPERFIL',ENABLED, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('V_CONPERFIL',NAVIGABLE, "PROPERTY_TRUE");
    //    GO_BLOCK('RESUMEN');
    //    GO_ITEM('V_CONPERFIL');
    //    END IF;
    // ELSE
    //  :V_CONPERFIL := :SEGPRXCONTAC.TIPOPERFIL;
    //  GO_BLOCK('BDETSEGPRX');
    //  EXECUTE_QUERY;
    // END IF;
    // END;
    //#endregion
    async CMFMENU_segprxcontac_vVercont_whenCheckboxChanged() {
        console.log("Entering CMFMENU_segprxcontac_vVercont_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let VBOTON: number = null;
        if ((this.SEGPRXCONTAC.CANTIDAD == 0 && ["GF", "GC", "GI", "JM", "AM", "SR", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1)) {
            // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS PARA CONSULTAR PARA ESE TIPO DE PERFIL");
            this.SEGPRXCONTAC.V_VERCONT = "N";
        }
        else if ((this.SEGPRXCONTAC.CANTIDAD == 0 && ["GF", "GC", "GI", "JM", "AM", "SR", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1)) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL SELECCIONE LA OPCIÓN QUE DESEA", null, null, null, T_RESPUESTA);
            // CMFMENU_LIB$ALERTA("MENSAJE", "COMO DESEA CONSULTAR?", "OPCION X MENU", "POR PERFIL", null, VBOTON);
            if (VBOTON == 1) {
                // CMFMENU_LIB$ALERTA("MENSAJE", "PARA FUTURAS CONSULTAS PUEDE INGRESAR DIRECTAMENTE POR LA OPCIÓN DEL MENÚ", null, null, null, T_RESPUESTA);
                // this.SEGPRXCONTAC.V_CONPERFIL = null;
                this.oracleFormsBuiltins.go_block("BDETSEGPRX");
                this.oracleFormsBuiltins.execute_query();
            }
            else if (VBOTON == 2) {
                // CMFMENU_LIB$ALERTA("MENSAJE", "POR FAVOR SELECCIONE EL TIPO DE PERFIL A CONSULTAR Y DESPÚES PUEDE FILTRAR LA INFORMACIÓN POR COMERCIAL", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.set_item_property("V_CONPERFIL", "DISPLAYED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("V_CONPERFIL", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("V_CONPERFIL", "NAVIGABLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.go_block("RESUMEN");
                this.oracleFormsBuiltins.go_item("V_CONPERFIL");
            }
        }
        else {
            // this.SEGPRXCONTAC.V_CONPERFIL = this.SEGPRXCONTAC.TIPOPERFIL;
            this.oracleFormsBuiltins.go_block("BDETSEGPRX");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CMFMENU_segprxcontac_vVercont_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTRESUM'); END;
    //#endregion
    async CMFMENU_bespeclie_postTextItem() {
        console.log("Entering CMFMENU_bespeclie_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTRESUM");
        console.log("Exiting CMFMENU_bespeclie_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bespeclie_whenNewItemInstance() {
        console.log("Entering CMFMENU_bespeclie_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bespeclie_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_CESPECLI;
    // BEGIN
    // PQBD_COL_ADMVEN.PCESPCLI(BK_DATA, :this.PARAMETER.get("PFECINI"), :this.PARAMETER.get("PFECFIN"), :this.PARAMETER.get("PGRUCOM"), :this.PARAMETER.get("PCIUDAD"), :this.PARAMETER.get("PUSUARI"), :BESPECIFICA.V_CNOREV, :this.PARAMETER.get("PUNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BESPECLIE');
    // END;
    //#endregion
    async CMFMENU_bespeclie_queryProcedure() {
        console.log("Entering CMFMENU_bespeclie_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PCESPCLI(BK_DATA, this.PARAMETER.get("PFECINI"), this.PARAMETER.get("PFECFIN"), this.PARAMETER.get("PGRUCOM"), this.PARAMETER.get("PCIUDAD"), this.PARAMETER.get("PUSUARI"), BESPECIFICA.V_CNOREV, this.PARAMETER.get("PUNIDAD"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BESPECLIE");
        console.log("Exiting CMFMENU_bespeclie_queryProcedure");
    }

    //#region PLSQL
    // BEGIN
    // SELECT DECODE(TERPER, 'N', TERAPE || ' ' || TERNOM, TERAPE) NOMBRE
    //   INTO :SETTERSEC_NEW.V_NOMBTERCAP_NEW
    // FROM TER
    // WHERE TERCOD = :SETTERSEC_NEW.TERSEC_NIT;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :SETTERSEC_NEW.V_NOMBTERCAP_NEW :=  NULL;
    // END;
    //#endregion
    async CMFMENU_settersecNew_postQuery() {
        console.log("Entering CMFMENU_settersecNew_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("TERSEC_NIT", this.SETTERSEC_NEW.TERSEC_NIT);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_settersec_new/cmfmenu_settersecnew_postquery_query1", payload1);
        // get values from result
        this.SETTERSEC_NEW.V_NOMBTERCAP_NEW = result1[0].get("SETTERSEC_NEW.V_NOMBTERCAP_NEW");
        if (result1 == null || result1.length == 0) {

            this.SETTERSEC_NEW.V_NOMBTERCAP_NEW = null;
        }

        console.log("Exiting CMFMENU_settersecNew_postQuery");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //  V_RESPUESTA VARCHAR2(1);
    // BEGIN
    //  PU_REASIGNAR_CLIENTES_CAPTA (:SETTERSEC.TERSEC_NIT, :SETTERSEC.V_NOMBTERCAP, V_RESPUESTA);
    // 
    //  IF V_RESPUESTA = '0' THEN
    //   GO_BLOCK('SETCOMCIACAP');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('SETTERSEC');
    //     EXECUTE_QUERY;
    //  ELSIF V_RESPUESTA = '1' THEN
    //   :SETTERXCOM.V_SELECTER := 'N';
    //   LIB$DTNERFRMA('ACTUALIZACIÓN CON ERRORES Ó PROCESO CANCELADO POR EL USUARIO.');
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_settersecNew_vSelectercap_whenCheckboxChanged() {
        console.log("Entering CMFMENU_settersecNew_vSelectercap_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let V_RESPUESTA: string = null;
        // CMFMENU_PU_REASIGNAR_CLIENTES_CAPTA(SETTERSEC.TERSEC_NIT, SETTERSEC.V_NOMBTERCAP, V_RESPUESTA);
        if (V_RESPUESTA == "0") {
            this.oracleFormsBuiltins.go_block("SETCOMCIACAP");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("SETTERSEC");
            this.oracleFormsBuiltins.execute_query();
        }
        else if (V_RESPUESTA == "1") {
            this.SETTERXCOM.V_SELECTER = "N";
            // CMFMENU_LIB$DTNERFRMA("ACTUALIZACIÓN CON ERRORES Ó PROCESO CANCELADO POR EL USUARIO.");
        }
        console.log("Exiting CMFMENU_settersecNew_vSelectercap_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'CG$LOV'); END;
    //#endregion
    async CMFMENU_tben3_postTextItem() {
        console.log("Entering CMFMENU_tben3_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "CG$LOV");
        console.log("Exiting CMFMENU_tben3_postTextItem");
    }

    async CMFMENU_tben3_keyDelrec() {
        // null;
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_tben3_whenNewItemInstance() {
        console.log("Entering CMFMENU_tben3_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_tben3_whenNewItemInstance");
    }

    async CMFMENU_tben3_keyNxtblk() {
        // null;
    }

    async CMFMENU_tben3_keyCommit() {
        // null;
    }

    async CMFMENU_tben3_keyExit() {
        // null;
    }

    //#region PLSQL
    // BEGIN IF :SYSTEM.BLOCK_STATUS = 'QUERY' THEN 
    //     :GLOBAL.AUXTERCERO       :=:TBEN3.TBENCOD;
    //     :GLOBAL.DIGITO         :=:TBEN3.TBENDCHE;
    //     :CMTTELEMER.MENS_NUMIDEN  :=:GLOBAL.AUXTERCERO;
    //     HIDE_VIEW('TERCEROS3');
    //     GO_BLOCK('CMTTELEMER');
    //     :this.PARAMETER.get("PEXISTETER") := 'S';
    //     PU_TIPOGESTION (:this.PARAMETER.get("PEXISTETER"), :GLOBAL.TIPOGESTION);
    //     PU_CARGAR_DATOS_TELEMERCADEO (:CMTTELEMER.MENS_NUMIDEN);
    //   ELSE
    //   IF :SYSTEM.BLOCK_STATUS = 'NEW' THEN
    //     DO_KEY('EXECUTE_QUERY'); 
    //   END IF;
    // END IF; END;
    //#endregion
    async CMFMENU_tben3_keyNextItem() {
        console.log("Entering CMFMENU_tben3_keyNextItem");
        if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") == "QUERY") {
            // this.GLOBAL.AUXTERCERO = this.TBEN3.TBENCOD;
            // this.GLOBAL.DIGITO = this.TBEN3.TBENDCHE;
            // this.CMTTELEMER.MENS_NUMIDEN = this.GLOBAL.AUXTERCERO;
            this.oracleFormsBuiltins.hide_view("TERCEROS3");
            this.oracleFormsBuiltins.go_block("CMTTELEMER");
            this.PARAMETER.set("PEXISTETER", "S");
            // CMFMENU_PU_TIPOGESTION(this.PARAMETER.get("PEXISTETER"), GLOBAL.TIPOGESTION);
            // CMFMENU_PU_CARGAR_DATOS_TELEMERCADEO(this.CMTTELEMER.MENS_NUMIDEN);
        }
        else {
            if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") == "NEW") {
                this.oracleFormsBuiltins.do_key("EXECUTE_QUERY");
            }
        }
        console.log("Exiting CMFMENU_tben3_keyNextItem");
    }

    async CMFMENU_tben3_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'CG$LOV'); END;
    //#endregion
    async CMFMENU_tben2_postTextItem() {
        console.log("Entering CMFMENU_tben2_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "CG$LOV");
        console.log("Exiting CMFMENU_tben2_postTextItem");
    }

    async CMFMENU_tben2_keyDelrec() {
        // null;
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_tben2_whenNewItemInstance() {
        console.log("Entering CMFMENU_tben2_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_tben2_whenNewItemInstance");
    }

    async CMFMENU_tben2_keyNxtblk() {
        // null;
    }

    async CMFMENU_tben2_keyCommit() {
        // null;
    }

    async CMFMENU_tben2_keyExit() {
        // null;
    }

    //#region PLSQL
    // BEGIN IF :SYSTEM.BLOCK_STATUS = 'QUERY' THEN 
    //     :GLOBAL.AUXTERCERO :=:TBEN2.TBENCOD;
    //     :GLOBAL.DIGITO    :=:TBEN2.TBENDCHE;
    //     :CMTMNSJS.MENS_NUMIDEN     :=:GLOBAL.AUXTERCERO;
    //     HIDE_VIEW('TERCEROS2');
    //     GO_BLOCK('CMTMNSJS');
    //     :this.PARAMETER.get("PEXISTETER") := 'S';
    //     PU_TIPOGESTION (:this.PARAMETER.get("PEXISTETER"), :GLOBAL.TIPOGESTION);
    //     PU_CARGAR_DATOS (:CMTMNSJS.MENS_NUMIDEN);
    //   ELSE
    //   IF :SYSTEM.BLOCK_STATUS = 'NEW' THEN
    //     DO_KEY('EXECUTE_QUERY'); 
    //   END IF;
    // END IF; END;
    //#endregion
    async CMFMENU_tben2_keyNextItem() {
        console.log("Entering CMFMENU_tben2_keyNextItem");
        if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") == "QUERY") {
            // this.GLOBAL.AUXTERCERO = this.TBEN2.TBENCOD;
            // this.GLOBAL.DIGITO = this.TBEN2.TBENDCHE;
            // this.CMTMNSJS.MENS_NUMIDEN = this.GLOBAL.AUXTERCERO;
            this.oracleFormsBuiltins.hide_view("TERCEROS2");
            this.oracleFormsBuiltins.go_block("CMTMNSJS");
            this.PARAMETER.set("PEXISTETER", "S");
            // CMFMENU_PU_TIPOGESTION(this.PARAMETER.get("PEXISTETER"), GLOBAL.TIPOGESTION);
            // CMFMENU_PU_CARGAR_DATOS(this.CMTMNSJS.MENS_NUMIDEN);
        }
        else {
            if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") == "NEW") {
                this.oracleFormsBuiltins.do_key("EXECUTE_QUERY");
            }
        }
        console.log("Exiting CMFMENU_tben2_keyNextItem");
    }

    async CMFMENU_tben2_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_bperio_postTextItem() {
        console.log("Entering CMFMENU_bperio_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_bperio_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bperio_whenNewItemInstance() {
        console.log("Entering CMFMENU_bperio_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bperio_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //   IF ERROR_CODE = 40200 THEN
    //    LIB$DTNERFRMA('DEBE LIMPIAR EL BLOQUE PARA TENER ACCESO A ESTE ÍTEM');
    //   ELSE
    //    LIB$DTNERFRMA(ERROR_TYPE||'-'||TO_CHAR(ERROR_CODE)||': '||ERROR_TEXT);
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_bperio_onError() {
        console.log("Entering CMFMENU_bperio_onError");
        let VBOTON: number = null;
        if (this.oracleFormsBuiltins.error_code() == 40200) {
            // CMFMENU_LIB$DTNERFRMA("DEBE LIMPIAR EL BLOQUE PARA TENER ACCESO A ESTE ÍTEM");
        }
        else {
            // CMFMENU_LIB$DTNERFRMA(this.oracleFormsBuiltins.error_type + "-" + ERROR_CODE.toString() + ": " + this.oracleFormsBuiltins.error_text);
        }
        console.log("Exiting CMFMENU_bperio_onError");
    }

    //#region PLSQL
    // DECLARE
    //  VFECINI DATE;
    //  VFECFIN DATE;
    // BEGIN
    //   IF :BPERIO.MESINI IS NOT NULL OR :BPERIO.AGNOINI IS NOT NULL
    //    OR :BPERIO.MESFIN IS NOT NULL OR :BPERIO.AGNOFIN IS NOT NULL  THEN
    //    IF :BPERIO.MESINI IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE EL MES INICIAL');
    //    ELSIF :BPERIO.AGNOINI IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE EL AÑO INICIAL');
    //    ELSIF :BPERIO.MESFIN IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE EL MES FINAL');
    //    ELSIF :BPERIO.AGNOFIN IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE EL AÑO FINAL');
    //   END IF;
    //     VFECINI := TO_DATE(:BPERIO.MESINI||:BPERIO.AGNOINI,'MMYYYY');
    //     VFECFIN := LAST_DAY(TO_DATE(:BPERIO.MESFIN||:BPERIO.AGNOFIN,'MMYYYY'));
    //     :this.PARAMETER.get("PFECINI") := VFECINI;
    //     :this.PARAMETER.get("PFECFIN") := VFECFIN;
    //       IF VFECINI > VFECFIN THEN
    //     LIB$DTNERFRMA('LA FECHA INICIAL, '||TO_CHAR(VFECINI,'DD/MM/YYYY')||', DEBE SER '
    //                 ||'INFERIOR A LA FECHA FINAL, '||TO_CHAR(VFECFIN,'DD/MM/YYYY'));
    //       END IF;
    //   ELSE
    //     IF :BPERIO.FECINI  IS NOT NULL OR :BPERIO.FECFIN  IS NOT NULL THEN
    //    :this.PARAMETER.get("PFECINI") := :BPERIO.FECINI;
    //     :this.PARAMETER.get("PFECFIN") := :BPERIO.FECFIN;
    //     VFECINI := :BPERIO.FECINI;
    //     VFECFIN := :BPERIO.FECFIN;
    //   ELSE   
    //       :this.PARAMETER.get("PFECINI") := TO_DATE(:BPERIO.MES||:BPERIO.AGNO,'MMYYYY');
    //       :this.PARAMETER.get("PFECFIN") := LAST_DAY(:this.PARAMETER.get("PFECINI"));
    //     END IF;
    //   END IF;
    //  
    // END;
    //#endregion
    async CMFMENU_bperio_whenValidateRecord() {
        console.log("Entering CMFMENU_bperio_whenValidateRecord");
        let VFECINI: Date = null;
        let VFECFIN: Date = null;
        if (((((this.BPERIO.MESINI != null) || (this.BPERIO.AGNOINI != null)) || (this.BPERIO.MESFIN != null)) || (this.BPERIO.AGNOFIN != null))) {
            if ((this.BPERIO.MESINI == null)) {
                // CMFMENU_LIB$DTNERFRMA("ENTRE EL MES INICIAL");
            }
            else if ((this.BPERIO.AGNOINI == null)) {
                // CMFMENU_LIB$DTNERFRMA("ENTRE EL AÑO INICIAL");
            }
            else if ((this.BPERIO.MESFIN == null)) {
                // CMFMENU_LIB$DTNERFRMA("ENTRE EL MES FINAL");
            }
            else if ((this.BPERIO.AGNOFIN == null)) {
                // CMFMENU_LIB$DTNERFRMA("ENTRE EL AÑO FINAL");
            }
            VFECINI = new Date(this.BPERIO.MESINI + this.BPERIO.AGNOINI);
            // VFECFIN = LAST_DAY(new Date(this.BPERIO.MESFIN + BPERIO.AGNOFIN));
            this.PARAMETER.set("PFECINI", VFECINI.toString());
            this.PARAMETER.set("PFECFIN", VFECFIN.toString());
            if (VFECINI > VFECFIN) {
                // CMFMENU_LIB$DTNERFRMA("LA FECHA INICIAL, " + VFECINI.toString() + ", DEBE SER " + "INFERIOR A LA FECHA FINAL, " + VFECFIN.toString());
            }
        }
        else {
            if (((this.BPERIO.FECINI != null) || (this.BPERIO.FECFIN != null))) {
                this.PARAMETER.set("PFECINI", this.BPERIO.FECINI.toString());
                this.PARAMETER.set("PFECFIN", this.BPERIO.FECFIN.toString());
                VFECINI = this.BPERIO.FECINI;
                VFECFIN = this.BPERIO.FECFIN;
            }
            else {
                // this.PARAMETER.set("PFECINI",new Date(this.BPERIO.MES + this.BPERIO.AGNO));
                // this.PARAMETER.set("PFECFIN", LAST_DAY(this.PARAMETER.get("PFECINI")));
            }
        }
        console.log("Exiting CMFMENU_bperio_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN IF GET_GROUP_ROW_COUNT('GRMESES') <> 0 THEN
    //   :BPERIO.MES := TO_CHAR(ADD_MONTHS(SYSDATE,0),'MM');
    // END IF;
    // --
    // IF GET_GROUP_ROW_COUNT('GRAGNOS') <> 0 THEN
    //   :BPERIO.AGNO := TO_CHAR(ADD_MONTHS(SYSDATE,-1),'YYYY');
    // END IF;
    // :this.PARAMETER.get("PFECINI") := TO_DATE(:BPERIO.MES||:BPERIO.AGNO,'MMYYYY');
    // :this.PARAMETER.get("PFECFIN") := LAST_DAY(:this.PARAMETER.get("PFECINI")); END;
    //#endregion
    async CMFMENU_bperio_whenCreateRecord() {
        console.log("Entering CMFMENU_bperio_whenCreateRecord");
        if (this.oracleFormsBuiltins.get_group_row_count("GRMESES") != 0) {
            // this.BPERIO.MES = ADD_MONTHS(PLSQLBuiltins.sysdate(), 0).toString();
        }
        if (this.oracleFormsBuiltins.get_group_row_count("GRAGNOS") != 0) {
            // this.BPERIO.AGNO = ADD_MONTHS(PLSQLBuiltins.sysdate(), 1).toString();
        }
        // this.PARAMETER.get("PFECINI") = new Date(this.BPERIO.MES + BPERIO.AGNO);
        // this.PARAMETER.get("PFECFIN") = LAST_DAY(this.PARAMETER.get("PFECINI"));
        console.log("Exiting CMFMENU_bperio_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("PITEMANT") := :SYSTEM.CURSOR_ITEM;
    // :this.PARAMETER.get("PREGANT") := TO_NUMBER(:SYSTEM.CURSOR_RECORD); END;
    //#endregion
    async CMFMENU_bperio_postBlock() {
        console.log("Entering CMFMENU_bperio_postBlock");
        // this.PARAMETER.get("PITEMANT") = this.SYSTEM.CURSOR_ITEM;
        // this.PARAMETER.get("PREGANT") = PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD"));
        console.log("Exiting CMFMENU_bperio_postBlock");
    }

    //#region PLSQL
    // BEGIN :BPERIO.MES := NULL;
    // :BPERIO.AGNO := NULL;
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.MES',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNO',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE"); END;
    //#endregion
    async CMFMENU_bperio_agnoini_whenListChanged() {
        console.log("Entering CMFMENU_bperio_agnoini_whenListChanged");
        this.BPERIO.MES = null;
        this.BPERIO.AGNO = null;
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.MES", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.AGNO", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        console.log("Exiting CMFMENU_bperio_agnoini_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :BPERIO.MES := NULL;
    // :BPERIO.AGNO := NULL;
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.MES',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNO',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE"); END;
    //#endregion
    async CMFMENU_bperio_mesini_whenListChanged() {
        console.log("Entering CMFMENU_bperio_mesini_whenListChanged");
        this.BPERIO.MES = null;
        this.BPERIO.AGNO = null;
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.MES", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.AGNO", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        console.log("Exiting CMFMENU_bperio_mesini_whenListChanged");
    }

    //#region PLSQL
    // BEGIN DO_KEY('CLEAR_FORM'); END;
    //#endregion
    async CMFMENU_bperio_limpiar_whenButtonPressed() {
        console.log("Entering CMFMENU_bperio_limpiar_whenButtonPressed");
        this.oracleFormsBuiltins.do_key("CLEAR_FORM");
        console.log("Exiting CMFMENU_bperio_limpiar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :BPERIO.MES := NULL;
    // :BPERIO.AGNO := NULL;
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.MES',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNO',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE"); END;
    //#endregion
    async CMFMENU_bperio_mesfin_whenListChanged() {
        console.log("Entering CMFMENU_bperio_mesfin_whenListChanged");
        this.BPERIO.MES = null;
        this.BPERIO.AGNO = null;
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.MES", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.AGNO", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        console.log("Exiting CMFMENU_bperio_mesfin_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :FECINI > :FECFIN THEN
    //     LIB$DTNERFRMA('LA FECHA INICIAL, '||TO_CHAR(:FECINI,'DD/MM/YYYY')||', DEBE SER '
    //                 ||'INFERIOR A LA FECHA FINAL, '||TO_CHAR(:FECFIN,'DD/MM/YYYY'));
    //       END IF; END;
    //#endregion
    async CMFMENU_bperio_fecfin_whenValidateItem() {
        console.log("Entering CMFMENU_bperio_fecfin_whenValidateItem");
        // if (FECINI > FECFIN) {
        //     // CMFMENU_LIB$DTNERFRMA("LA FECHA INICIAL, " + FECINI.toString() + ", DEBE SER " + "INFERIOR A LA FECHA FINAL, " + FECFIN.toString());
        // }
        console.log("Exiting CMFMENU_bperio_fecfin_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :BPERIO.MES := NULL;
    // :BPERIO.AGNO := NULL;
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.MES',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNO',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE"); END;
    //#endregion
    async CMFMENU_bperio_agnofin_whenListChanged() {
        console.log("Entering CMFMENU_bperio_agnofin_whenListChanged");
        this.BPERIO.MES = null;
        this.BPERIO.AGNO = null;
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.MES", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.AGNO", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        console.log("Exiting CMFMENU_bperio_agnofin_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :BPERIO.MESINI := NULL;
    // :BPERIO.AGNOINI := NULL;
    // :BPERIO.MESFIN := NULL;
    // :BPERIO.AGNOFIN := NULL;
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.MESINI',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNOINI',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.MESFIN',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNOFIN',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE"); END;
    //#endregion
    async CMFMENU_bperio_mes_whenListChanged() {
        console.log("Entering CMFMENU_bperio_mes_whenListChanged");
        this.BPERIO.MESINI = null;
        this.BPERIO.AGNOINI = null;
        this.BPERIO.MESFIN = null;
        this.BPERIO.AGNOFIN = null;
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.MESINI", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.AGNOINI", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.MESFIN", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        // this.oracleFormsBuiltins.set_item_instance_property("BPERIO.AGNOFIN", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        console.log("Exiting CMFMENU_bperio_mes_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_DETPERFILES;
    // BEGIN
    // PQBD_COL_ADMVEN.PDETPERFILES(BK_DATA, :BGEN1.V_TIPOPERF, :V_GESTION, :this.PARAMETER.get("PFECINI"), :this.PARAMETER.get("PFECFIN"), :this.PARAMETER.get("PGRUCOM"), :this.PARAMETER.get("PCIUDAD"), :this.PARAMETER.get("PUSUARI"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BDETGEN1');
    // END;
    //#endregion
    async CMFMENU_bdetgen1_queryProcedure() {
        console.log("Entering CMFMENU_bdetgen1_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PDETPERFILES(BK_DATA, BGEN1.V_TIPOPERF, V_GESTION, this.PARAMETER.get("PFECINI"), this.PARAMETER.get("PFECFIN"), this.PARAMETER.get("PGRUCOM"), this.PARAMETER.get("PCIUDAD"), this.PARAMETER.get("PUSUARI"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BDETGEN1");
        console.log("Exiting CMFMENU_bdetgen1_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN 
    //  
    //  
    //   LIB$ALERTA('MENSAJE','EN ESTOS MOMENTOS VA HA EXPORTAR LA INFORMACIÓN A EXCEL. ' 
    //                 ,'ACEPTAR',NULL,NULL,VBOTON);
    //  
    //      LIB$GENPLANO('CMTSGINDI',:PLANO_INDICADORES.RUTA);
    //     
    //    LIB$ALERTA('MENSAJE','EL ARCHIVO SE GENERÓ EN LA RUTA ' || :PLANO_INDICADORES.RUTA 
    //                 ,'ACEPTAR',NULL,NULL,VBOTON);
    //  HIDE_WINDOW('WIN_PLANOINDI');
    //  GO_BLOCK('CMTSGINDI');
    // 
    // 
    // END;
    //#endregion
    async CMFMENU_planoIndicadores_btnGenerar_whenButtonPressed() {
        console.log("Entering CMFMENU_planoIndicadores_btnGenerar_whenButtonPressed");
        let VBOTON: number = null;
        // CMFMENU_LIB$ALERTA("MENSAJE", "EN ESTOS MOMENTOS VA HA EXPORTAR LA INFORMACIÓN A EXCEL. ", "ACEPTAR", null, null, VBOTON);
        // CMFMENU_LIB$GENPLANO("CMTSGINDI", PLANO_INDICADORES.RUTA);
        // CMFMENU_LIB$ALERTA("MENSAJE", "EL ARCHIVO SE GENERÓ EN LA RUTA " + PLANO_INDICADORES.RUTA, "ACEPTAR", null, null, VBOTON);
        this.oracleFormsBuiltins.hide_window("WIN_PLANOINDI");
        this.oracleFormsBuiltins.go_block("CMTSGINDI");
        console.log("Exiting CMFMENU_planoIndicadores_btnGenerar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    // 
    //  HIDE_WINDOW('WIN_PLANOINDI');
    //  GO_BLOCK('CMTSGINDI');
    // 
    // END;
    //#endregion
    async CMFMENU_planoIndicadores_btnRegresar_whenButtonPressed() {
        console.log("Entering CMFMENU_planoIndicadores_btnRegresar_whenButtonPressed");
        this.oracleFormsBuiltins.hide_window("WIN_PLANOINDI");
        this.oracleFormsBuiltins.go_block("CMTSGINDI");
        console.log("Exiting CMFMENU_planoIndicadores_btnRegresar_whenButtonPressed");
    }

    //#region PLSQL
//    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'POR MEDIO DE HERRRAMIENTA USTED PODRÁ HOMOLOGAR LAS DIRECCIONES EN EL FORMATO CORRECTO.'||CHR(10)||CHR(13)||
    //  'COMIENCE POR ESCOGER EL TIPO DE DIRECCIÓN BÁSICA O INDICACIÓN';
//    //  :DIRECCIONESINTRO.EJEMPLO := 'PUEDE INGRESAR DIRECCIONES DE SOLO EL PANEL SUPERIOR O SOLO INFERIOR O COMBINADAS.'||CHR(10)||CHR(13)||
    //  'EN LA PARTE INFERIOR ENCONTRARÁ LOS BOTONES DE GUARDAR, BORRAR, VOLVER Y HOMOLOGAR.'; END;
    //#endregion
    async CMFMENU_direccionesintro_preBlock() {
        console.log("Entering CMFMENU_direccionesintro_preBlock");
//        this.DIRECCIONESINTRO.DESCRIPCION = "POR MEDIO DE HERRRAMIENTA USTED PODRÁ HOMOLOGAR LAS DIRECCIONES EN EL FORMATO CORRECTO." + CHR(10) + CHR(13) + "COMIENCE POR ESCOGER EL TIPO DE DIRECCIÓN BÁSICA O INDICACIÓN";
//        this.DIRECCIONESINTRO.EJEMPLO = "PUEDE INGRESAR DIRECCIONES DE SOLO EL PANEL SUPERIOR O SOLO INFERIOR O COMBINADAS." + CHR(10) + CHR(13) + "EN LA PARTE INFERIOR ENCONTRARÁ LOS BOTONES DE GUARDAR, BORRAR, VOLVER Y HOMOLOGAR.";
        console.log("Exiting CMFMENU_direccionesintro_preBlock");
    }

    //#region PLSQL
    // BEGIN /*IF ERROR_TYPE= 'FRM' AND ERROR_CODE = 41026 THEN
    // NULL;
    // ELSIF  ERROR_TYPE= 'FRM' AND ERROR_CODE = 40508 THEN
    //  NULL;
    //  END IF;*/NULL; END;
    //#endregion
    async CMFMENU_direccionesintro_onError() {
        console.log("Entering CMFMENU_direccionesintro_onError");
        console.log("Exiting CMFMENU_direccionesintro_onError");
    }

    async CMFMENU_direccionesintro_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'CUADRANTE (NORTE, SUR, ESTE, OESTE).';
//    // :DIRECCIONESINTRO.EJEMPLO := 'CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:'||CHR(10)||CHR(13)||
    // 'NORTE, SUR, ESTE, OESTE';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --BORRA FORMATO DEMAS CAMPOS
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo12_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo12_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "CUADRANTE (NORTE, SUR, ESTE, OESTE).";
//        this.DIRECCIONESINTRO.EJEMPLO = "CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:" + CHR(10) + CHR(13) + "NORTE, SUR, ESTE, OESTE";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo12_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R255G0B0');
    // GO_ITEM('CAMPO12'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo12_whenListChanged() {
        console.log("Entering CMFMENU_direccionesintro_campo12_whenListChanged");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.go_item("CAMPO12");
        console.log("Exiting CMFMENU_direccionesintro_campo12_whenListChanged");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CAMPO14'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo12_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo12_keyNextItem");
        this.oracleFormsBuiltins.go_item("CAMPO14");
        console.log("Exiting CMFMENU_direccionesintro_campo12_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO11, '0123456789', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER NUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo11_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo11_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO11.replace('0123456789', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "EL CAMPO DEBE SER NUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo11_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO DE LA PLACA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR NUMÉRICO, GENERALMENTE INDICA LA DISTANCIA EN METROS DESDE LA INTERSECCIÓN ENTRE LA VÍA PRINCIPAL Y LA VÍA GENERADORA HASTA EL ACCESO AL PREDIO. CORRESPONDE CON EL SEGUNDO VALOR DE LA PLACA DOMICILIARIA O PREDIAL (NÚMERO QUE ESTA DESPUÉS DEL GUIÓN).';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo11_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo11_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO DE LA PLACA.";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR NUMÉRICO, GENERALMENTE INDICA LA DISTANCIA EN METROS DESDE LA INTERSECCIÓN ENTRE LA VÍA PRINCIPAL Y LA VÍA GENERADORA HASTA EL ACCESO AL PREDIO. CORRESPONDE CON EL SEGUNDO VALOR DE LA PLACA DOMICILIARIA O PREDIAL (NÚMERO QUE ESTA DESPUÉS DEL GUIÓN).";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo11_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo11_whenNewItemInstance() {
        console.log("Entering CMFMENU_direccionesintro_campo11_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo11_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'CUADRANTE (NORTE, SUR, ESTE, OESTE).';
//    // :DIRECCIONESINTRO.EJEMPLO := 'CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:'||CHR(10)||CHR(13)||
    // 'NORTE, SUR, ESTE, OESTE';
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R255G0B0');
    // GO_ITEM('CAMPO12'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo11_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo11_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "CUADRANTE (NORTE, SUR, ESTE, OESTE).";
//        this.DIRECCIONESINTRO.EJEMPLO = "CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:" + CHR(10) + CHR(13) + "NORTE, SUR, ESTE, OESTE";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.go_item("CAMPO12");
        console.log("Exiting CMFMENU_direccionesintro_campo11_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO10, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo10_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo10_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO10.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo10_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR ALFANUMÉRICO, EN ESTE CASO SIRVE PARA DIFERENCIAR LAS VÍAS QUE SE LE ASIGNADO EL SUFIJO BIS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo10_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo10_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR ALFANUMÉRICO, EN ESTE CASO SIRVE PARA DIFERENCIAR LAS VÍAS QUE SE LE ASIGNADO EL SUFIJO BIS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo10_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo10_whenNewItemInstance() {
        console.log("Entering CMFMENU_direccionesintro_campo10_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo10_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO DE LA PLACA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR NUMÉRICO, GENERALMENTE INDICA LA DISTANCIA EN METROS DESDE LA INTERSECCIÓN ENTRE LA VÍA PRINCIPAL Y LA VÍA GENERADORA HASTA EL ACCESO AL PREDIO. CORRESPONDE CON EL SEGUNDO VALOR DE LA PLACA DOMICILIARIA O PREDIAL (NÚMERO QUE ESTA DESPUÉS DEL GUIÓN).';
    // GO_ITEM('CAMPO11'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo10_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo10_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO DE LA PLACA.";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR NUMÉRICO, GENERALMENTE INDICA LA DISTANCIA EN METROS DESDE LA INTERSECCIÓN ENTRE LA VÍA PRINCIPAL Y LA VÍA GENERADORA HASTA EL ACCESO AL PREDIO. CORRESPONDE CON EL SEGUNDO VALOR DE LA PLACA DOMICILIARIA O PREDIAL (NÚMERO QUE ESTA DESPUÉS DEL GUIÓN).";
        this.oracleFormsBuiltins.go_item("CAMPO11");
        console.log("Exiting CMFMENU_direccionesintro_campo10_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'CUADRANTE (NORTE, SUR, ESTE, OESTE).';
//    // :DIRECCIONESINTRO.EJEMPLO := 'CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:'||CHR(10)||CHR(13)||
    // 'NORTE, SUR, ESTE, OESTE';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --BORRA FORMATO DEMAS CAMPOS
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo6_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo6_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "CUADRANTE (NORTE, SUR, ESTE, OESTE).";
//        this.DIRECCIONESINTRO.EJEMPLO = "CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:" + CHR(10) + CHR(13) + "NORTE, SUR, ESTE, OESTE";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo6_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CAMPO7'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo6_whenListChanged() {
        console.log("Entering CMFMENU_direccionesintro_campo6_whenListChanged");
        this.oracleFormsBuiltins.go_item("CAMPO7");
        console.log("Exiting CMFMENU_direccionesintro_campo6_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO DE LA VÍA GENERADORA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR NUMÉRICO CON QUE SE IDENTIFICA EL EJE VÍA, EN ESTE CASO LA VÍA GENERADORA.';
    // GO_ITEM('CAMPO7'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo6_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo6_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO DE LA VÍA GENERADORA.";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR NUMÉRICO CON QUE SE IDENTIFICA EL EJE VÍA, EN ESTE CASO LA VÍA GENERADORA.";
        this.oracleFormsBuiltins.go_item("CAMPO7");
        console.log("Exiting CMFMENU_direccionesintro_campo6_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO7, '0123456789', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER NUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    // NULL;
    //#endregion
    async CMFMENU_direccionesintro_campo7_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo7_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO7.replace('0123456789', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "EL CAMPO DEBE SER NUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo7_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO DE LA VÍA GENERADORA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR NUMÉRICO CON QUE SE IDENTIFICA EL EJE VÍA, EN ESTE CASO LA VÍA GENERADORA.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo7_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo7_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO DE LA VÍA GENERADORA.";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR NUMÉRICO CON QUE SE IDENTIFICA EL EJE VÍA, EN ESTE CASO LA VÍA GENERADORA.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo7_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo7_whenNewItemInstance() {
        console.log("Entering CMFMENU_direccionesintro_campo7_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo7_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑAN LA VÍA GENERADORA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS';
    // GO_ITEM('CAMPO8'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo7_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo7_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑAN LA VÍA GENERADORA.";
        this.DIRECCIONESINTRO.EJEMPLO = "CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS";
        this.oracleFormsBuiltins.go_item("CAMPO8");
        console.log("Exiting CMFMENU_direccionesintro_campo7_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo8_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo8_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO8.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo8_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑAN LA VÍA GENERADORA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo8_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo8_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑAN LA VÍA GENERADORA.";
        this.DIRECCIONESINTRO.EJEMPLO = "CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo8_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo8_whenNewItemInstance() {
        console.log("Entering CMFMENU_direccionesintro_campo8_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo8_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'SUFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'EL SUFIJO BIS ES ASIGNADO PARA DIFERENCIAR EN ESTE CASO LAS VÍAS GENERADORAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.';
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R255G0B0');
    // GO_ITEM('CAMPO9'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo8_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo8_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "SUFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "EL SUFIJO BIS ES ASIGNADO PARA DIFERENCIAR EN ESTE CASO LAS VÍAS GENERADORAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.go_item("CAMPO9");
        console.log("Exiting CMFMENU_direccionesintro_campo8_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'SUFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'EL SUFIJO BIS ES ASIGNADO PARA DIFERENCIAR EN ESTE CASO LAS VÍAS GENERADORAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --BORRA FORMATO DEMAS CAMPOS
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo9_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo9_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "SUFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "EL SUFIJO BIS ES ASIGNADO PARA DIFERENCIAR EN ESTE CASO LAS VÍAS GENERADORAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo9_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CAMPO10'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo9_whenListChanged() {
        console.log("Entering CMFMENU_direccionesintro_campo9_whenListChanged");
        this.oracleFormsBuiltins.go_item("CAMPO10");
        console.log("Exiting CMFMENU_direccionesintro_campo9_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR ALFANUMÉRICO, EN ESTE CASO SIRVE PARA DIFERENCIAR LAS VÍAS QUE SE LE ASIGNADO EL SUFIJO BIS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS.';
    // GO_ITEM('CAMPO10'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo9_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo9_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR ALFANUMÉRICO, EN ESTE CASO SIRVE PARA DIFERENCIAR LAS VÍAS QUE SE LE ASIGNADO EL SUFIJO BIS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS.";
        this.oracleFormsBuiltins.go_item("CAMPO10");
        console.log("Exiting CMFMENU_direccionesintro_campo9_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO2, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo2_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo2_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO2.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo2_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO NOMBRE COMÚN DE LA VÍA PRINCIPAL: VALOR NUMÉRICO O NOMBRE COMÚN QUE IDENTIFICA LA VÍA.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLOS NÚMERICOS: 30, 68, 50, ETC.'||CHR(10)||CHR(13)||
    // 'OTRAS OPCIONES: POR LO GENERAL LAS AVENIDAS O VÍAS PRINCIPALES TIENEN ASOCIADO UN NOMBRE COMÚN COMO POR EJEMPLO: ¿NORTE QUITO SUR¿, ¿PUENTE PALMA¿, ¿MEDELLIN¿, ¿1 DE MAYO¿, ETC.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo2_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo2_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO NOMBRE COMÚN DE LA VÍA PRINCIPAL: VALOR NUMÉRICO O NOMBRE COMÚN QUE IDENTIFICA LA VÍA.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLOS NÚMERICOS: 30, 68, 50, ETC." + CHR(10) + CHR(13) + "OTRAS OPCIONES: POR LO GENERAL LAS AVENIDAS O VÍAS PRINCIPALES TIENEN ASOCIADO UN NOMBRE COMÚN COMO POR EJEMPLO: ¿NORTE QUITO SUR¿, ¿PUENTE PALMA¿, ¿MEDELLIN¿, ¿1 DE MAYO¿, ETC.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo2_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo2_whenNewItemInstance() {
        console.log("Entering CMFMENU_direccionesintro_campo2_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo2_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA LA NOMENCLATURA PRINCIPAL.';
    // :DIRECCIONESINTRO.EJEMPLO := 'CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBAS';
    // GO_ITEM('CAMPO3'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo2_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo2_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA LA NOMENCLATURA PRINCIPAL.";
        this.DIRECCIONESINTRO.EJEMPLO = "CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBAS";
        this.oracleFormsBuiltins.go_item("CAMPO3");
        console.log("Exiting CMFMENU_direccionesintro_campo2_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO3, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo3_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo3_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO3.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo3_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA LA NOMENCLATURA PRINCIPAL.';
    // :DIRECCIONESINTRO.EJEMPLO := 'CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBAS';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo3_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo3_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA LA NOMENCLATURA PRINCIPAL.";
        this.DIRECCIONESINTRO.EJEMPLO = "CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBAS";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo3_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo3_whenNewItemInstance() {
        console.log("Entering CMFMENU_direccionesintro_campo3_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo3_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'PREFIJO (BIS)';
    // :DIRECCIONESINTRO.EJEMPLO := 'EL PREFIJO BIS ES ASIGNADO PARA DIFERENCIAR VÍAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.';
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R255G0B0');
    // GO_ITEM('CAMPO4'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo3_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo3_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "PREFIJO (BIS)";
        this.DIRECCIONESINTRO.EJEMPLO = "EL PREFIJO BIS ES ASIGNADO PARA DIFERENCIAR VÍAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.go_item("CAMPO4");
        console.log("Exiting CMFMENU_direccionesintro_campo3_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'PREFIJO (BIS)';
    // :DIRECCIONESINTRO.EJEMPLO := 'EL PREFIJO BIS ES ASIGNADO PARA DIFERENCIAR VÍAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --BORRA FORMATO DEMAS CAMPOS
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo4_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo4_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "PREFIJO (BIS)";
        this.DIRECCIONESINTRO.EJEMPLO = "EL PREFIJO BIS ES ASIGNADO PARA DIFERENCIAR VÍAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo4_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CAMPO5'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo4_whenListChanged() {
        console.log("Entering CMFMENU_direccionesintro_campo4_whenListChanged");
        this.oracleFormsBuiltins.go_item("CAMPO5");
        console.log("Exiting CMFMENU_direccionesintro_campo4_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'ASIGNACIÓN QUE COMPLEMENTA AL PREFIJO BIS, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBOS, PUEDE TOMAR UN VALOR ALFANUMÉRICO.';
    // GO_ITEM('CAMPO5'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo4_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo4_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "ASIGNACIÓN QUE COMPLEMENTA AL PREFIJO BIS, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBOS, PUEDE TOMAR UN VALOR ALFANUMÉRICO.";
        this.oracleFormsBuiltins.go_item("CAMPO5");
        console.log("Exiting CMFMENU_direccionesintro_campo4_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO5, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo5_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo5_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO5.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo5_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'ASIGNACIÓN QUE COMPLEMENTA AL PREFIJO BIS, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBOS, PUEDE TOMAR UN VALOR ALFANUMÉRICO.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo5_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo5_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "ASIGNACIÓN QUE COMPLEMENTA AL PREFIJO BIS, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBOS, PUEDE TOMAR UN VALOR ALFANUMÉRICO.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo5_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo5_whenNewItemInstance() {
        console.log("Entering CMFMENU_direccionesintro_campo5_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo5_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'CUADRANTE (NORTE, SUR, ESTE, OESTE).';
//    // :DIRECCIONESINTRO.EJEMPLO := 'CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:'||CHR(10)||CHR(13)||
    // 'NORTE, SUR, ESTE, OESTE';
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R255G0B0');
    // GO_ITEM('CAMPO6'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo5_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo5_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "CUADRANTE (NORTE, SUR, ESTE, OESTE).";
//        this.DIRECCIONESINTRO.EJEMPLO = "CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:" + CHR(10) + CHR(13) + "NORTE, SUR, ESTE, OESTE";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.go_item("CAMPO6");
        console.log("Exiting CMFMENU_direccionesintro_campo5_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'TIPO DE VÍA: INGRESE EL TIPO DE VÍA CORRESPONDIENTE.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLOS: CALLE, CARRERA, AVENIDA, ETC.'||CHR(10)||CHR(13)||
    // 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --BORRA FORMATO DE TODOS LOS DEMAS
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo1_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo1_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO DE VÍA: INGRESE EL TIPO DE VÍA CORRESPONDIENTE.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLOS: CALLE, CARRERA, AVENIDA, ETC." + CHR(10) + CHR(13) + "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo1_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'TIPO DE VÍA: INGRESE EL TIPO DE VÍA CORRESPONDIENTE.';
//    //  :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLOS: CALLE, CARRERA, AVENIDA, ETC.'||CHR(10)||CHR(13)||
    //  'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES';
    //  RETURN_LOV := SHOW_LOV('LOV_DIR1');
    //  GO_ITEM('CAMPO2');
    //  --MJE CAMPO 2
    //  :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO NOMBRE COMÚN DE LA VÍA PRINCIPAL: VALOR NUMÉRICO O NOMBRE COMÚN QUE IDENTIFICA LA VÍA.';
//    //  :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLOS NÚMERICOS: 30, 68, 50, ETC.'||CHR(10)||CHR(13)||
    //  'OTRAS OPCIONES: POR LO GENERAL LAS AVENIDAS O VÍAS PRINCIPALES TIENEN ASOCIADO UN NOMBRE COMÚN COMO POR EJEMPLO: ¿NORTE QUITO SUR¿, ¿PUENTE PALMA¿, ¿MEDELLIN¿, ¿1 DE MAYO¿, ETC.';
    //   
    // END;
    //#endregion
    async CMFMENU_direccionesintro_bTipo_whenButtonPressed() {
        console.log("Entering CMFMENU_direccionesintro_bTipo_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO DE VÍA: INGRESE EL TIPO DE VÍA CORRESPONDIENTE.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLOS: CALLE, CARRERA, AVENIDA, ETC." + CHR(10) + CHR(13) + "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_DIR1");
        this.oracleFormsBuiltins.go_item("CAMPO2");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO NOMBRE COMÚN DE LA VÍA PRINCIPAL: VALOR NUMÉRICO O NOMBRE COMÚN QUE IDENTIFICA LA VÍA.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLOS NÚMERICOS: 30, 68, 50, ETC." + CHR(10) + CHR(13) + "OTRAS OPCIONES: POR LO GENERAL LAS AVENIDAS O VÍAS PRINCIPALES TIENEN ASOCIADO UN NOMBRE COMÚN COMO POR EJEMPLO: ¿NORTE QUITO SUR¿, ¿PUENTE PALMA¿, ¿MEDELLIN¿, ¿1 DE MAYO¿, ETC.";
        console.log("Exiting CMFMENU_direccionesintro_bTipo_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA NUMBER;
    //    RETURN_LOV BOOLEAN;
    //    V_ALFANUMERICODES VARCHAR2(100); --DESCRIPCION COMPLETA
    //    V_ALFANUMERICO VARCHAR2(100); --DESCRIPCION SENCILLA
    //    V_NUMERICO VARCHAR2(50); -- SOLO NUMEROS
    //    A NUMBER;        --A, B =  CONTADORES ESPECIFICOS PARA VERIFICAR CARACTERES ESPECIALES EN INDICACIONES
    //   B NUMBER;
    //   INDIC BOOLEAN := TRUE;
    //    
    // BEGIN 
    //  V_ALFANUMERICODES := '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ';
    //  V_ALFANUMERICO := '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ';
    //  V_NUMERICO := '0123456789';
    //  :HOMOLOGAOK := 0;
    //  
    //  IF :RADIO_GROUP = '02' THEN
    //   :CAD_DIRECCION:= 'IND';
    //  ELSE
    //   :CAD_DIRECCION:= NULL;   
    //  END IF;
    //  
    //  IF :RADIO_GROUP = '01' THEN 
    //   IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO2, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO2');
    //   
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO3, V_ALFANUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO3');
    // 
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO5, V_ALFANUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO5');
    // 
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO7, V_NUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER NUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO7');
    // 
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO8, V_ALFANUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO8');
    // 
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO10, V_ALFANUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO10');
    // 
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO11, V_NUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER NUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO11');
    //   
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO15, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO15');
    //  
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO17, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO17');
    //  
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO19, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO19');
    //  
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO21, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO21');
    //    
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO24, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO24');
    //   
    //   ELSIF :CAMPO14 IS NULL AND :CAMPO15 IS NOT NULL THEN 
    //    LIB$ALERTA('MENSAJE','INGRESE EL TIPO DE BARRIO',NULL,NULL,NULL, T_RESPUESTA); 
    //    RETURN_LOV := SHOW_LOV('LOV_BARRIO');
    //    GO_ITEM('CAMPO15');
    //    
    //   ELSIF :CAMPO16 IS NULL AND :CAMPO17 IS NOT NULL THEN 
    //    LIB$ALERTA('MENSAJE','INGRESE EL TIPO DE URBANIZACIÓN',NULL,NULL,NULL, T_RESPUESTA); 
    //    RETURN_LOV := SHOW_LOV('LOV_URB');
    //    GO_ITEM('CAMPO17');
    //   
    //   ELSIF :CAMPO18 IS NULL AND :CAMPO19 IS NOT NULL THEN 
    //    LIB$ALERTA('MENSAJE','INGRESE EL TIPO DE MANZANA',NULL,NULL,NULL, T_RESPUESTA); 
    //    RETURN_LOV := SHOW_LOV('LOV_MANZ');
    //    GO_ITEM('CAMPO19');
    //    
    //   ELSIF :CAMPO20 IS NULL AND :CAMPO21 IS NOT NULL THEN 
    //    LIB$ALERTA('MENSAJE','INGRESE EL TIPO DE PREDIO',NULL,NULL,NULL, T_RESPUESTA); 
    //    RETURN_LOV := SHOW_LOV('LOV_PREDIO');
    //    GO_ITEM('CAMPO21');
    //   
    //   ELSIF :CAMPO22 IS NULL AND :CAMPO24 IS NOT NULL THEN 
    //    LIB$ALERTA('MENSAJE','INGRESE EL TIPO DE COMPLEMENTO',NULL,NULL,NULL, T_RESPUESTA); 
    //    RETURN_LOV := SHOW_LOV('LOV_COMPL');
    //    GO_ITEM('CAMPO24');
    //   
    //   ELSIF :CAMPO1 IS NULL AND :CAMPO2 IS NULL AND :CAMPO3 IS NULL AND :CAMPO4 IS NULL AND
    //         :CAMPO5 IS NULL AND :CAMPO6 IS NULL AND :CAMPO7 IS NULL AND :CAMPO8 IS NULL AND
    //         :CAMPO9 IS NULL AND :CAMPO10 IS NULL AND :CAMPO11 IS NULL AND :CAMPO12 IS NULL AND
    //       :CAMPO14 IS NULL AND :CAMPO15 IS NULL AND :CAMPO16 IS NULL AND :CAMPO17 IS NULL AND 
    //        :CAMPO18 IS NULL AND :CAMPO19 IS NULL AND :CAMPO20 IS NULL AND :CAMPO21 IS NULL AND
    //        :CAMPO22 IS NULL AND :CAMPO24 IS NULL THEN
    //       LIB$ALERTA('MENSAJE','TODOS LOS CAMPOS ESTAN VACIOS',NULL,NULL,NULL, T_RESPUESTA); 
    // 
    //   ELSIF (:CAMPO1 IS NOT NULL OR :CAMPO2 IS NOT NULL OR :CAMPO3 IS NOT NULL OR :CAMPO4 IS NOT NULL OR
    //         :CAMPO5 IS NOT NULL OR :CAMPO6 IS NOT NULL OR :CAMPO7 IS NOT NULL OR :CAMPO8 IS NOT NULL OR
    //         :CAMPO9 IS NOT NULL OR :CAMPO10 IS NOT NULL OR :CAMPO11 IS NOT NULL OR :CAMPO12 IS NOT NULL) AND :CAMPO1 IS  NULL THEN
    //        LIB$ALERTA('MENSAJE','EL TIPO DE VÍA ES OBLIGATORIO',NULL,NULL,NULL, T_RESPUESTA);
    //        RETURN_LOV := SHOW_LOV('LOV_DIR1');
    //        GO_ITEM('CAMPO2');
    //     
    //   ELSIF (:CAMPO1 IS NOT NULL OR :CAMPO2 IS NOT NULL OR :CAMPO3 IS NOT NULL OR :CAMPO4 IS NOT NULL OR
    //         :CAMPO5 IS NOT NULL OR :CAMPO6 IS NOT NULL OR :CAMPO7 IS NOT NULL OR :CAMPO8 IS NOT NULL OR
    //         :CAMPO9 IS NOT NULL OR :CAMPO10 IS NOT NULL OR :CAMPO11 IS NOT NULL OR :CAMPO12 IS NOT NULL) AND :CAMPO2 IS  NULL THEN
    //        LIB$ALERTA('MENSAJE','INGRESE EL NOMBRE DE LA VÍA PRINCIPAL',NULL,NULL,NULL, T_RESPUESTA);
    //        GO_ITEM('CAMPO2');
    //     
    //   ELSIF (:CAMPO1 IS NOT NULL OR :CAMPO2 IS NOT NULL OR :CAMPO3 IS NOT NULL OR :CAMPO4 IS NOT NULL OR
    //         :CAMPO5 IS NOT NULL OR :CAMPO6 IS NOT NULL OR :CAMPO7 IS NOT NULL OR :CAMPO8 IS NOT NULL OR
    //         :CAMPO9 IS NOT NULL OR :CAMPO10 IS NOT NULL OR :CAMPO11 IS NOT NULL OR :CAMPO12 IS NOT NULL) AND :CAMPO7 IS  NULL THEN
    //        LIB$ALERTA('MENSAJE','INGRESE EL NÚMERO DE LA VÍA GENERADORA',NULL,NULL,NULL, T_RESPUESTA);
    //        GO_ITEM('CAMPO7');
    //     
    //   ELSIF (:CAMPO1 IS NOT NULL OR :CAMPO2 IS NOT NULL OR :CAMPO3 IS NOT NULL OR :CAMPO4 IS NOT NULL OR
    //         :CAMPO5 IS NOT NULL OR :CAMPO6 IS NOT NULL OR :CAMPO7 IS NOT NULL OR :CAMPO8 IS NOT NULL OR
    //         :CAMPO9 IS NOT NULL OR :CAMPO10 IS NOT NULL OR :CAMPO11 IS NOT NULL OR :CAMPO12 IS NOT NULL) AND :CAMPO11 IS NULL THEN
    //        LIB$ALERTA('MENSAJE','INGRESE EL NUMERO DE LA PLACA',NULL,NULL,NULL, T_RESPUESTA);
    //        GO_ITEM('CAMPO11'); 
    //   ELSE
    //    :CAD_DIRECCION:= 
    //    RTRIM(LTRIM(:CAMPO1))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO2))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO3))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO4))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO5))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO6))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO7))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO8))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO9))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO10))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO11))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO12))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO14))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO15))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO16))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO17))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO18))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO19))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO20))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO21))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO22))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO24))
    //    ))))))))))))))))))))
    //    );
    //   
    //   IF PLSQLBuiltins.string_length(:CAD_DIRECCION) < 5 THEN 
    //     LIB$ALERTA('MENSAJE','LA DIRECCION DEBE CONTENER AL MENOS 5 CARACTERES',NULL,NULL,NULL, T_RESPUESTA); 
    //     :CAD_DIRECCION:= NULL;
    //    ELSE
    //     :HOMOLOGAOK := 1;
    //     LIB$ALERTA('MENSAJE','PARA FINALIZAR LA HOMOLOGACIÓN PRESIONE EL BOTON GUARDAR, UBICADO EN LA PARTE INFERIOR IZQUIERDA.',NULL,NULL,NULL, T_RESPUESTA); 
    //    END IF;
    //   
    //   END IF;
    //   
    //  ELSIF :RADIO_GROUP = '02' THEN
    //   IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO23, V_ALFANUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA);  
    //   ELSE
    //    :CAD_DIRECCION:= :CAD_DIRECCION||' '||RTRIM(LTRIM(:CAMPO23));
    //    IF PLSQLBuiltins.string_length(:CAD_DIRECCION) < 5 THEN 
    //     LIB$ALERTA('MENSAJE','LA DIRECCION DEBE CONTENER AL MENOS 5 CARACTERES',NULL,NULL,NULL, T_RESPUESTA); 
    //     :CAD_DIRECCION:= 'IND';
    //    ELSE
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := UPPER(:CAD_DIRECCION);
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' NRO ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BIS ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'NUMERO','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'NÚMERO','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' NO ','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' AP ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' APART ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' APT ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'APARTAMENTO','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'APTO','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' AV ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' AVE ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'AVENIDA','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'AVDA','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BRR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'BARRIO','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BL ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BQ ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'BLOQUE','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BG ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BOD ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'BODEGA','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CC ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' C C ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CIAL ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'CCIAL','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'CENTRO COMERCIAL','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CL ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CALLE ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CALL ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'CLLE','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'CLL','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' KR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CAR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CRA ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' KRA ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'CARRERA','  ');     
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' DG ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' DIAG ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'DIAGONAL','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' ED ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'EDIFICIO','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' IN ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' INTERIOR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' INT ','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' LC ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' LOCAL ','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' MZ ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' MANZ ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'MANZANA','  ');  
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' OF ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' OFC ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' OFI ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' OFIC ','  ');    
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'OFICINA','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' PI ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' PISO ','  ');   
    //     ----------------------------------------------------    ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TO ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TORRE ','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TV ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TRANSV ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TRANS ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'TRANSVERSAL','  ');   
    //     ----------------------------------------------------
    //        
    //     
    //       
    //       --BUSCA ERRORES POR MEDIO DE 2 ESPACIOS CONSECUTIVOS
    //        
    //     --IF INSTR(:CAD_DIRECCION,' ') <> 0 THEN
    //         B := INSTR(:CAD_DIRECCION,' ') + 1;
    //         A := 1;
    //          --MESSAGE('PLSQLBuiltins.string_length(:CAD_DIRECCION) = '||PLSQLBuiltins.string_length(:CAD_DIRECCION));
    //         -- MESSAGE('PLSQLBuiltins.string_length(:CAD_DIRECCION) = '||PLSQLBuiltins.string_length(:CAD_DIRECCION));
    //         FOR I IN B..PLSQLBuiltins.string_length(:CAD_DIRECCION) LOOP
    //           --MESSAGE('A, B = '||A||' '||B);
    //          --MESSAGE('A, B = '||A||' '||B);
    //          IF A < 2 THEN
    //             --MESSAGE('SUBSTR(:CAD_DIRECCION,B,1)  = '||SUBSTR(:CAD_DIRECCION,B,1));
    //              --MESSAGE('SUBSTR(:CAD_DIRECCION,B,1)  = '||SUBSTR(:CAD_DIRECCION,B,1));
    //            IF SUBSTR(:CAD_DIRECCION,B,1) = ' ' THEN 
    //            A := A + 1;
    //            ELSE
    //            A := 0;
    //            END IF;
    //           IF A = 2 THEN
    //             INDIC := FALSE;         
    //           END IF;
    //          B := B + 1;
    //          END IF;         
    //         END LOOP;
    //            
    //     --END IF;
    //     ----------------------------------------------------
    //     IF INDIC = TRUE THEN
    //      :HOMOLOGAOK := 1;
    //      LIB$ALERTA('MENSAJE','PARA FINALIZAR LA HOMOLOGACIÓN PRESIONE EL BOTON GUARDAR, UBICADO EN LA PARTE INFERIOR IZQUIERDA.',NULL,NULL,NULL, T_RESPUESTA); 
    //     ELSE
    //       LIB$ALERTA('MENSAJE','HAY ERRORES EN LA CAPTURA DE LA INDICACIÓN',NULL,NULL,NULL, T_RESPUESTA);
    //       LIB$ALERTA('MENSAJE','RECUERDE QUE DIRECCIONES CON CALLE, CARRERA, DIAGONAL, TRANSVERSAL, ETC, SE DEBEN CAPTURAR POR MEDIO DE LA OPCIÓN BÁSICA.',NULL,NULL,NULL, T_RESPUESTA);--STOP  
    //       :CAD_DIRECCION:= 'IND';
    //     END IF;
    //    END IF;
    //   END IF; 
    //  
    //  ELSE 
    //    LIB$ALERTA('MENSAJE','SELECCIONE UNA OPCIÓN ENTRE DIRECCIÓN BÁSICA O INDICACIÓN',NULL,NULL,NULL, T_RESPUESTA); 
    //    
    //  END IF;
    //  
    //  --
    //  :CAD_DIRECCION:= LTRIM(RTRIM(UPPER(:CAD_DIRECCION)));
    // 
    //  
    // END;
    //#endregion
    async CMFMENU_direccionesintro_homologar_whenButtonPressed() {
        console.log("Entering CMFMENU_direccionesintro_homologar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let RETURN_LOV: boolean = null;
        let V_ALFANUMERICODES: string = null;
        let V_ALFANUMERICO: string = null;
        let V_NUMERICO: string = null;
        let A: number = null;
        let B: number = null;
        let INDIC: boolean = true;
        V_ALFANUMERICODES = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ";
        V_ALFANUMERICO = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ";
        V_NUMERICO = "0123456789";
        this.DIRECCIONESINTRO.HOMOLOGAOK = 0;
        // if (RADIO_GROUP == "02") {
        //     this.DIRECCIONESINTRO.CAD_DIRECCION = "IND";
        // }
        // else {
        //     this.DIRECCIONESINTRO.CAD_DIRECCION = null;
        // }
        // if (RADIO_GROUP == "01") {
        //     if ((PLSQLBuiltins.string_length(LTRIM(CAMPO2.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO2");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO3.replace(V_ALFANUMERICO, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO3");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO5.replace(V_ALFANUMERICO, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO5");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO7.replace(V_NUMERICO, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER NUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO7");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO8.replace(V_ALFANUMERICO, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO8");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO10.replace(V_ALFANUMERICO, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO10");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO11.replace(V_NUMERICO, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER NUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO11");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO15.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO15");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO17.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO17");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO19.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO19");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO21.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO21");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO24.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO24");
        //     }
        //     else if (((CAMPO14 == null) && (CAMPO15 != null))) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "INGRESE EL TIPO DE BARRIO", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_BARRIO");
        //         this.oracleFormsBuiltins.go_item("CAMPO15");
        //     }
        //     else if (((CAMPO16 == null) && (CAMPO17 != null))) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "INGRESE EL TIPO DE URBANIZACIÓN", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_URB");
        //         this.oracleFormsBuiltins.go_item("CAMPO17");
        //     }
        //     else if (((CAMPO18 == null) && (CAMPO19 != null))) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "INGRESE EL TIPO DE MANZANA", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_MANZ");
        //         this.oracleFormsBuiltins.go_item("CAMPO19");
        //     }
        //     else if (((CAMPO20 == null) && (CAMPO21 != null))) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "INGRESE EL TIPO DE PREDIO", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_PREDIO");
        //         this.oracleFormsBuiltins.go_item("CAMPO21");
        //     }
        //     else if (((CAMPO22 == null) && (CAMPO24 != null))) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "INGRESE EL TIPO DE COMPLEMENTO", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_COMPL");
        //         this.oracleFormsBuiltins.go_item("CAMPO24");
        //     }
        //     else if (((((((((((((((((((((((CAMPO1 == null) && (CAMPO2 == null)) && (CAMPO3 == null)) && (CAMPO4 == null)) && (CAMPO5 == null)) && (CAMPO6 == null)) && (CAMPO7 == null)) && (CAMPO8 == null)) && (CAMPO9 == null)) && (CAMPO10 == null)) && (CAMPO11 == null)) && (CAMPO12 == null)) && (CAMPO14 == null)) && (CAMPO15 == null)) && (CAMPO16 == null)) && (CAMPO17 == null)) && (CAMPO18 == null)) && (CAMPO19 == null)) && (CAMPO20 == null)) && (CAMPO21 == null)) && (CAMPO22 == null)) && (CAMPO24 == null))) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "TODOS LOS CAMPOS ESTAN VACIOS", null, null, null, T_RESPUESTA);
        //     }
        //     else if ((((((((((((((CAMPO1 != null) || (CAMPO2 != null)) || (CAMPO3 != null)) || (CAMPO4 != null)) || (CAMPO5 != null)) || (CAMPO6 != null)) || (CAMPO7 != null)) || (CAMPO8 != null)) || (CAMPO9 != null)) || (CAMPO10 != null)) || (CAMPO11 != null)) || (CAMPO12 != null)) && (CAMPO1 == null))) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "EL TIPO DE VÍA ES OBLIGATORIO", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_DIR1");
        //         this.oracleFormsBuiltins.go_item("CAMPO2");
        //     }
        //     else if ((((((((((((((CAMPO1 != null) || (CAMPO2 != null)) || (CAMPO3 != null)) || (CAMPO4 != null)) || (CAMPO5 != null)) || (CAMPO6 != null)) || (CAMPO7 != null)) || (CAMPO8 != null)) || (CAMPO9 != null)) || (CAMPO10 != null)) || (CAMPO11 != null)) || (CAMPO12 != null)) && (CAMPO2 == null))) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "INGRESE EL NOMBRE DE LA VÍA PRINCIPAL", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO2");
        //     }
        //     else if ((((((((((((((CAMPO1 != null) || (CAMPO2 != null)) || (CAMPO3 != null)) || (CAMPO4 != null)) || (CAMPO5 != null)) || (CAMPO6 != null)) || (CAMPO7 != null)) || (CAMPO8 != null)) || (CAMPO9 != null)) || (CAMPO10 != null)) || (CAMPO11 != null)) || (CAMPO12 != null)) && (CAMPO7 == null))) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "INGRESE EL NÚMERO DE LA VÍA GENERADORA", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO7");
        //     }
        //     else if ((((((((((((((CAMPO1 != null) || (CAMPO2 != null)) || (CAMPO3 != null)) || (CAMPO4 != null)) || (CAMPO5 != null)) || (CAMPO6 != null)) || (CAMPO7 != null)) || (CAMPO8 != null)) || (CAMPO9 != null)) || (CAMPO10 != null)) || (CAMPO11 != null)) || (CAMPO12 != null)) && (CAMPO11 == null))) {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "INGRESE EL NUMERO DE LA PLACA", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO11");
        //     }
        //     else {
        //         this.DIRECCIONESINTRO.CAD_DIRECCION = RTRIM(LTRIM(CAMPO1)) + " " + LTRIM(RTRIM(LTRIM(CAMPO2)) + " " + LTRIM(RTRIM(LTRIM(CAMPO3)) + " " + LTRIM(RTRIM(LTRIM(CAMPO4)) + " " + LTRIM(RTRIM(LTRIM(CAMPO5)) + " " + LTRIM(RTRIM(LTRIM(CAMPO6)) + " " + LTRIM(RTRIM(LTRIM(CAMPO7)) + " " + LTRIM(RTRIM(LTRIM(CAMPO8)) + " " + LTRIM(RTRIM(LTRIM(CAMPO9)) + " " + LTRIM(RTRIM(LTRIM(CAMPO10)) + " " + LTRIM(RTRIM(LTRIM(CAMPO11)) + " " + LTRIM(RTRIM(LTRIM(CAMPO12)) + " " + LTRIM(RTRIM(LTRIM(CAMPO14)) + " " + LTRIM(RTRIM(LTRIM(CAMPO15)) + " " + LTRIM(RTRIM(LTRIM(CAMPO16)) + " " + LTRIM(RTRIM(LTRIM(CAMPO17)) + " " + LTRIM(RTRIM(LTRIM(CAMPO18)) + " " + LTRIM(RTRIM(LTRIM(CAMPO19)) + " " + LTRIM(RTRIM(LTRIM(CAMPO20)) + " " + LTRIM(RTRIM(LTRIM(CAMPO21)) + " " + LTRIM(RTRIM(LTRIM(CAMPO22)) + " " + LTRIM(RTRIM(LTRIM(CAMPO24)))))))))))))))))))))));
        //         if (PLSQLBuiltins.string_length(CAD_DIRECCION) < 5) {
        //             // CMFMENU_LIB$ALERTA("MENSAJE", "LA DIRECCION DEBE CONTENER AL MENOS 5 CARACTERES", null, null, null, T_RESPUESTA);
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = null;
        //         }
        //         else {
        //             this.DIRECCIONESINTRO.HOMOLOGAOK = 1;
        //             // CMFMENU_LIB$ALERTA("MENSAJE", "PARA FINALIZAR LA HOMOLOGACIÓN PRESIONE EL BOTON GUARDAR, UBICADO EN LA PARTE INFERIOR IZQUIERDA.", null, null, null, T_RESPUESTA);
        //         }
        //     }
        // }
        // else if (RADIO_GROUP == "02") {
        //     if ((PLSQLBuiltins.string_length(LTRIM(CAMPO23.replace(V_ALFANUMERICO, ' '))) != null)) {
        //         // CMFMENU_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //     }
        //     else {
        //         this.DIRECCIONESINTRO.CAD_DIRECCION = this.DIRECCIONESINTRO.CAD_DIRECCION || ' ' || RTRIM(LTRIM(CAMPO23));
        //         if (PLSQLBuiltins.string_length(CAD_DIRECCION) < 5) {
        //             // CMFMENU_LIB$ALERTA("MENSAJE", "LA DIRECCION DEBE CONTENER AL MENOS 5 CARACTERES", null, null, null, T_RESPUESTA);
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = "IND";
        //         }
        //         else {
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = PLSQLBuiltins.upper(CAD_DIRECCION);
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " NRO ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BIS ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "NUMERO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "NÚMERO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " NO ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " AP ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " APART ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " APT ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "APARTAMENTO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "APTO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " AV ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " AVE ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "AVENIDA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "AVDA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BRR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "BARRIO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BL ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BQ ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "BLOQUE", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BG ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BOD ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "BODEGA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CC ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " C C ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CIAL ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "CCIAL", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "CENTRO COMERCIAL", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CL ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CALLE ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CALL ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "CLLE", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "CLL", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " KR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CAR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CRA ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " KRA ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "CARRERA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " DG ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " DIAG ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "DIAGONAL", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " ED ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "EDIFICIO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " IN ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " INTERIOR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " INT ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " LC ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " LOCAL ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " MZ ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " MANZ ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "MANZANA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " OF ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " OFC ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " OFI ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " OFIC ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "OFICINA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " PI ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " PISO ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TO ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TORRE ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TV ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TRANSV ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TRANS ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "TRANSVERSAL", "  ");
        //             B = INSTR(CAD_DIRECCION, " ") + 1;
        //             A = 1;
        //             if (INDIC == TRUE) {
        //                 this.DIRECCIONESINTRO.HOMOLOGAOK = 1;
        //                 // CMFMENU_LIB$ALERTA("MENSAJE", "PARA FINALIZAR LA HOMOLOGACIÓN PRESIONE EL BOTON GUARDAR, UBICADO EN LA PARTE INFERIOR IZQUIERDA.", null, null, null, T_RESPUESTA);
        //             }
        //             else {
        //                 // CMFMENU_LIB$ALERTA("MENSAJE", "HAY ERRORES EN LA CAPTURA DE LA INDICACIÓN", null, null, null, T_RESPUESTA);
        //                 // CMFMENU_LIB$ALERTA("MENSAJE", "RECUERDE QUE DIRECCIONES CON CALLE, CARRERA, DIAGONAL, TRANSVERSAL, ETC, SE DEBEN CAPTURAR POR MEDIO DE LA OPCIÓN BÁSICA.", null, null, null, T_RESPUESTA);
        //                 this.DIRECCIONESINTRO.CAD_DIRECCION = "IND";
        //             }
        //         }
        //     }
        // }
        // else {
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "SELECCIONE UNA OPCIÓN ENTRE DIRECCIÓN BÁSICA O INDICACIÓN", null, null, null, T_RESPUESTA);
        // }
        // this.DIRECCIONESINTRO.CAD_DIRECCION = LTRIM(RTRIM(PLSQLBuiltins.upper(CAD_DIRECCION)));
        console.log("Exiting CMFMENU_direccionesintro_homologar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO19, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo19_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo19_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO19.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo19_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.';
    // :DIRECCIONESINTRO.EJEMPLO := 
//    // 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)|| 
    // 'OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo19_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo19_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo19_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ';
    // GO_ITEM('CAMPO21'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo19_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo19_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ";
        this.oracleFormsBuiltins.go_item("CAMPO21");
        console.log("Exiting CMFMENU_direccionesintro_campo19_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.';
    // :DIRECCIONESINTRO.EJEMPLO := 
//    // 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)|| 
    // 'OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo18_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo18_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo18_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO17, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo17_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo17_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO17.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo17_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo17_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo17_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo17_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.';
    // :DIRECCIONESINTRO.EJEMPLO := 
//    // 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)|| 
    // 'OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ';
    // GO_ITEM('CAMPO19'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo17_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo17_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ";
        this.oracleFormsBuiltins.go_item("CAMPO19");
        console.log("Exiting CMFMENU_direccionesintro_campo17_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo16_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo16_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo16_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO15, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo15_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo15_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO15.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo15_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES.'||CHR(10)||CHR(13)||
    // 'POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo15_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo15_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.";
//        this.DIRECCIONESINTRO.EJEMPLO = "SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES." + CHR(10) + CHR(13) + "POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo15_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('HOMOLOGAR',VISIBLE,"PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('HOMOLOGAR',ENABLED,"PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('SIGUIENTE',VISIBLE,"PROPERTY_FALSE");
    // SET_ITEM_PROPERTY('SIGUIENTE',ENABLED,"PROPERTY_FALSE"); END;
    //#endregion
    async CMFMENU_direccionesintro_campo15_preTextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo15_preTextItem");
        this.oracleFormsBuiltins.set_item_property("HOMOLOGAR", "VISIBLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("HOMOLOGAR", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("SIGUIENTE", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("SIGUIENTE", "ENABLED", "PROPERTY_FALSE");
        console.log("Exiting CMFMENU_direccionesintro_campo15_preTextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC';
    // GO_ITEM('CAMPO17'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo15_keyNextItem() {
        console.log("Entering CMFMENU_direccionesintro_campo15_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC";
        this.oracleFormsBuiltins.go_item("CAMPO17");
        console.log("Exiting CMFMENU_direccionesintro_campo15_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES.'||CHR(10)||CHR(13)||
    // 'POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo14_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo14_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.";
//        this.DIRECCIONESINTRO.EJEMPLO = "SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES." + CHR(10) + CHR(13) + "POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo14_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO23, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo23_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo23_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO23.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo23_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'INGRESE LA DIRECCION POR INDICACIÓN CORRESPONDIENTE.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLO = IND KILOMETRO 15 VIA EL CERRITO.'||CHR(10)||CHR(13)||
    // 'EL SISTEMA ANTEPONE EL PREFIJO "IND" QUE SIGNIFICA INDICACIÓN'; END;
    //#endregion
    async CMFMENU_direccionesintro_campo23_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo23_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "INGRESE LA DIRECCION POR INDICACIÓN CORRESPONDIENTE.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLO = IND KILOMETRO 15 VIA EL CERRITO." + CHR(10) + CHR(13) + "EL SISTEMA ANTEPONE EL PREFIJO "IND" QUE SIGNIFICA INDICACIÓN";
        console.log("Exiting CMFMENU_direccionesintro_campo23_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.';
//    //  :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    //  'EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC';
    //  RETURN_LOV := SHOW_LOV('LOV_URB');
    //  GO_ITEM('CAMPO17');
    // END;
    //#endregion
    async CMFMENU_direccionesintro_bCplmto16_whenButtonPressed() {
        console.log("Entering CMFMENU_direccionesintro_bCplmto16_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_URB");
        this.oracleFormsBuiltins.go_item("CAMPO17");
        console.log("Exiting CMFMENU_direccionesintro_bCplmto16_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo22_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo22_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo22_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN IF :RADIO_GROUP = '02' THEN
    //  :DIRECCIONESINTRO.CAD_DIRECCION:= 'IND';
    // ELSE
    //  :DIRECCIONESINTRO.CAD_DIRECCION:= NULL;   
    // END IF;
    // 
    //  :DIRECCIONESINTRO.CAMPO1 := NULL;
    //  :DIRECCIONESINTRO.CAMPO2 := NULL;
    //  :DIRECCIONESINTRO.CAMPO3 := NULL;
    //  :DIRECCIONESINTRO.CAMPO4 := NULL;
    //  :DIRECCIONESINTRO.CAMPO5 := NULL;
    //  :DIRECCIONESINTRO.CAMPO6 := NULL;
    //  :DIRECCIONESINTRO.CAMPO7 := NULL;
    //  :DIRECCIONESINTRO.CAMPO8 := NULL;
    //  :DIRECCIONESINTRO.CAMPO9 := NULL;
    //  :DIRECCIONESINTRO.CAMPO10 := NULL;
    //  :DIRECCIONESINTRO.CAMPO11 := NULL;
    //  :DIRECCIONESINTRO.CAMPO12 := NULL;
    //  :DIRECCIONESINTRO.CAMPO14 := NULL;
    //  :DIRECCIONESINTRO.CAMPO15 := NULL;
    //  :DIRECCIONESINTRO.CAMPO16 := NULL;
    //  :DIRECCIONESINTRO.CAMPO17 := NULL;
    //  :DIRECCIONESINTRO.CAMPO18 := NULL;
    //  :DIRECCIONESINTRO.CAMPO19 := NULL;
    //  :DIRECCIONESINTRO.CAMPO20 := NULL;
    //  :DIRECCIONESINTRO.CAMPO21 := NULL;
    //  :DIRECCIONESINTRO.CAMPO23 := NULL;
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_borrar_whenButtonPressed() {
        console.log("Entering CMFMENU_direccionesintro_borrar_whenButtonPressed");
        // if (RADIO_GROUP == "02") {
        //     this.DIRECCIONESINTRO.CAD_DIRECCION = "IND";
        // }
        // else {
        //     this.DIRECCIONESINTRO.CAD_DIRECCION = null;
        // }
        this.DIRECCIONESINTRO.CAMPO1 = null;
        this.DIRECCIONESINTRO.CAMPO2 = null;
        this.DIRECCIONESINTRO.CAMPO3 = null;
        this.DIRECCIONESINTRO.CAMPO4 = null;
        this.DIRECCIONESINTRO.CAMPO5 = null;
        this.DIRECCIONESINTRO.CAMPO6 = null;
        this.DIRECCIONESINTRO.CAMPO7 = null;
        this.DIRECCIONESINTRO.CAMPO8 = null;
        this.DIRECCIONESINTRO.CAMPO9 = null;
        this.DIRECCIONESINTRO.CAMPO10 = null;
        this.DIRECCIONESINTRO.CAMPO11 = null;
        this.DIRECCIONESINTRO.CAMPO12 = null;
        this.DIRECCIONESINTRO.CAMPO14 = null;
        this.DIRECCIONESINTRO.CAMPO15 = null;
        this.DIRECCIONESINTRO.CAMPO16 = null;
        this.DIRECCIONESINTRO.CAMPO17 = null;
        this.DIRECCIONESINTRO.CAMPO18 = null;
        this.DIRECCIONESINTRO.CAMPO19 = null;
        this.DIRECCIONESINTRO.CAMPO20 = null;
        this.DIRECCIONESINTRO.CAMPO21 = null;
        this.DIRECCIONESINTRO.CAMPO23 = null;
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_borrar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO21, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo21_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo21_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO21.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo21_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo21_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo21_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo21_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.';
//    //  :DIRECCIONESINTRO.EJEMPLO := 'SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES.'||CHR(10)||CHR(13)||
    //  'POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)';
    //  RETURN_LOV := SHOW_LOV('LOV_BARRIO');
    //  GO_ITEM('CAMPO15');
    // END;
    //#endregion
    async CMFMENU_direccionesintro_bCplmto14_whenButtonPressed() {
        console.log("Entering CMFMENU_direccionesintro_bCplmto14_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.";
//        this.DIRECCIONESINTRO.EJEMPLO = "SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES." + CHR(10) + CHR(13) + "POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_BARRIO");
        this.oracleFormsBuiltins.go_item("CAMPO15");
        console.log("Exiting CMFMENU_direccionesintro_bCplmto14_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo20_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo20_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo20_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.';
    //  :DIRECCIONESINTRO.EJEMPLO := 
//    //  'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)|| 
    //  'OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ';
    //  RETURN_LOV := SHOW_LOV('LOV_MANZ');
    //  GO_ITEM('CAMPO19');
    // END;
    //#endregion
    async CMFMENU_direccionesintro_bCplmto18_whenButtonPressed() {
        console.log("Entering CMFMENU_direccionesintro_bCplmto18_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_MANZ");
        this.oracleFormsBuiltins.go_item("CAMPO19");
        console.log("Exiting CMFMENU_direccionesintro_bCplmto18_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :HOMOLOGAOK = 1 THEN
    //   IF  :GLOBAL.DIR1= 'DIR' AND
    //    FRM$ALERTA_SINO ('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //    
    //     :BTER.DIRECC:=:DIRECCIONESINTRO.CAD_DIRECCION;
    //      :DIRECCIONES.CADENA:=NULL;
    //      CLEAR_BLOCK;
    //      HIDE_VIEW('DIRECCIONESINTRO'); 
    //    HIDE_VIEW('DIR_01');
    //    HIDE_VIEW('DIR_02');
    //    HIDE_VIEW('DIR_03');
    //    GO_ITEM('BTER.DEPARTA');
    //     END IF; 
    //  ELSE 
    //    LIB$ALERTA('MENSAJE','POR FAVOR HOMOLOGUE LA DIRECCIÓN PRIMERO',NULL,NULL,NULL, T_RESPUESTA);
    //  END IF;
    // END;       
    //  
    //#endregion
    async CMFMENU_direccionesintro_grabar_whenButtonPressed() {
        console.log("Entering CMFMENU_direccionesintro_grabar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        // if (HOMOLOGAOK == 1) {
        //     if ((GLOBAL.DIR1 == "DIR" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //         this.BTER.DIRECC = this.DIRECCIONESINTRO.CAD_DIRECCION;
        //         this.DIRECCIONES.CADENA = null;
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.oracleFormsBuiltins.go_item("BTER.DEPARTA");
        //     }
        // }
        // else {
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "POR FAVOR HOMOLOGUE LA DIRECCIÓN PRIMERO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_grabar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO24, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_campo24_whenValidateItem() {
        console.log("Entering CMFMENU_direccionesintro_campo24_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO24.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
            // CMFMENU_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_direccionesintro_campo24_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.';
//    // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async CMFMENU_direccionesintro_campo24_whenMouseClick() {
        console.log("Entering CMFMENU_direccionesintro_campo24_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting CMFMENU_direccionesintro_campo24_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.';
//    //  :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    //  'EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ';
    //  RETURN_LOV := SHOW_LOV('LOV_COMPL');
    //  GO_ITEM('CAMPO24');
    // END;
    //#endregion
    async CMFMENU_direccionesintro_bCplmto22_whenButtonPressed() {
        console.log("Entering CMFMENU_direccionesintro_bCplmto22_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_COMPL");
        this.oracleFormsBuiltins.go_item("CAMPO24");
        console.log("Exiting CMFMENU_direccionesintro_bCplmto22_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.';
//    //  :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    //  'EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ';
    //  RETURN_LOV := SHOW_LOV('LOV_PREDIO');
    //  GO_ITEM('CAMPO21');
    // END;
    //#endregion
    async CMFMENU_direccionesintro_bCplmto20_whenButtonPressed() {
        console.log("Entering CMFMENU_direccionesintro_bCplmto20_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.";
//        this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_PREDIO");
        this.oracleFormsBuiltins.go_item("CAMPO21");
        console.log("Exiting CMFMENU_direccionesintro_bCplmto20_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN -- RETORNAR AL ITEM SIGUIENTE, UNA VEZ LIMPIE LO ALMACENADO EN DIRECCIONES.
    // 
    // IF (:HOMOLOGAOK = 1 AND
    //   FRM$ALERTA_SINO ('QUIERE VOLVER SIN GUARDAR LOS CAMBIOS?.....') = 1) OR
    //   :HOMOLOGAOK = 0 THEN
    //  IF :GLOBAL.DIR1= 'DIR' THEN
    //   SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R0G0B0');
    //   CLEAR_BLOCK;
    //    GO_ITEM('BTER.PAIS'); --PY 13888
    //    :GLOBAL.CADENA:=NULL; 
    //   :GLOBAL.DIR1 :=NULL;
    //   HIDE_VIEW('DIRECCIONESINTRO'); 
    //   HIDE_VIEW('DIR_01');
    //   HIDE_VIEW('DIR_02');
    //   HIDE_VIEW('DIR_03');
    //   :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //   :DIRECCIONESINTRO.ESTADO_ZOOM := 0;
    //    
    //  
    // /* ELSIF :GLOBAL.DIR1= 'DIR1' THEN
    //   SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R0G0B0');
    //   CLEAR_BLOCK;
    //   GO_ITEM('ENTMAN02.ENTTEL');
    //   :GLOBAL.CADENA:=NULL; 
    //   :GLOBAL.DIR1 :=NULL;
    //   HIDE_VIEW('DIRECCIONESINTRO'); 
    //   HIDE_VIEW('DIR_01');
    //   HIDE_VIEW('DIR_02');
    //   HIDE_VIEW('DIR_03');
    // 
    //  
    //  ELSIF :GLOBAL.DIR1= 'DIR2' THEN
    //   SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R0G0B0');
    //   CLEAR_BLOCK;
    //   GO_ITEM('ENTMAN02.ENTTEL1');
    //   :GLOBAL.CADENA:=NULL; 
    //   :GLOBAL.DIR1 :=NULL;
    //   HIDE_VIEW('DIRECCIONESINTRO'); 
    //   HIDE_VIEW('DIR_01');
    //   HIDE_VIEW('DIR_02');
    //   HIDE_VIEW('DIR_03');
    // 
    //   */
    //   
    //  END IF;
    // END IF; END;
    //#endregion
    async CMFMENU_direccionesintro_dev_whenButtonPressed() {
        console.log("Entering CMFMENU_direccionesintro_dev_whenButtonPressed");
        // if (((HOMOLOGAOK == 1 && FRM$ALERTA_SINO("QUIERE VOLVER SIN GUARDAR LOS CAMBIOS?.....") == 1) || HOMOLOGAOK == 0)) {
        //     if (GLOBAL.DIR1 == "DIR") {
        //         this.oracleFormsBuiltins.set_item_property("CAD_ANTERIOR", "FOREGROUND_COLOR", "R0G0B0");
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.go_item("BTER.PAIS");
        //         this.GLOBAL.CADENA = null;
        //         this.GLOBAL.DIR1 = null;
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        //         this.DIRECCIONESINTRO.ESTADO_ZOOM = 0;
        //     }
        // }
        console.log("Exiting CMFMENU_direccionesintro_dev_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :DIRECCIONESINTRO.ESTADO_ZOOM = 0 THEN
    //  SHOW_VIEW('ZOOM_DIR');
    //  :DIRECCIONESINTRO.DIRECCION_ZOOM:= :DIRECCIONESINTRO.CAD_DIRECCION;
    //  :DIRECCIONESINTRO.ESTADO_ZOOM := 1;
    // ELSIF
    //  :DIRECCIONESINTRO.ESTADO_ZOOM = 1 THEN
    //  :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //  :DIRECCIONESINTRO.ESTADO_ZOOM := 0;
    //  HIDE_VIEW('ZOOM_DIR'); 
    // END IF; END;
    //#endregion
    async CMFMENU_direccionesintro_verDir_whenButtonPressed() {
        console.log("Entering CMFMENU_direccionesintro_verDir_whenButtonPressed");
        // if (DIRECCIONESINTRO.ESTADO_ZOOM == 0) {
        //     this.oracleFormsBuiltins.show_view("ZOOM_DIR");
        //     this.DIRECCIONESINTRO.DIRECCION_ZOOM = this.DIRECCIONESINTRO.CAD_DIRECCION;
        //     this.DIRECCIONESINTRO.ESTADO_ZOOM = 1;
        // }
        // else if (DIRECCIONESINTRO.ESTADO_ZOOM == 1) {
        //     this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        //     this.DIRECCIONESINTRO.ESTADO_ZOOM = 0;
        //     this.oracleFormsBuiltins.hide_view("ZOOM_DIR");
        // }
        console.log("Exiting CMFMENU_direccionesintro_verDir_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  LIST_INDEX NUMBER(10) := 1;
    // BEGIN
    //  --LIMPIA CAMPOS
    //  :DIRECCIONESINTRO.CAD_DIRECCION := NULL;
    //  :DIRECCIONESINTRO.EJEMPLO := NULL;
    //  :DIRECCIONESINTRO.DESCRIPCION := NULL;
    //  
    //  :DIRECCIONESINTRO.CAMPO1 := NULL;
    //  :DIRECCIONESINTRO.CAMPO2 := NULL;
    //  :DIRECCIONESINTRO.CAMPO3 := NULL;
    //  :DIRECCIONESINTRO.CAMPO4 := NULL;
    //  :DIRECCIONESINTRO.CAMPO5 := NULL;
    //  :DIRECCIONESINTRO.CAMPO6 := NULL;
    //  :DIRECCIONESINTRO.CAMPO7 := NULL;
    //  :DIRECCIONESINTRO.CAMPO8 := NULL;
    //  :DIRECCIONESINTRO.CAMPO9 := NULL;
    //  :DIRECCIONESINTRO.CAMPO10 := NULL;
    //  :DIRECCIONESINTRO.CAMPO11 := NULL;
    //  :DIRECCIONESINTRO.CAMPO12 := NULL;
    //  :DIRECCIONESINTRO.CAMPO14 := NULL;
    //  :DIRECCIONESINTRO.CAMPO15 := NULL;
    //  :DIRECCIONESINTRO.CAMPO16 := NULL;
    //  :DIRECCIONESINTRO.CAMPO17 := NULL;
    //  :DIRECCIONESINTRO.CAMPO18 := NULL;
    //  :DIRECCIONESINTRO.CAMPO19 := NULL;
    //  :DIRECCIONESINTRO.CAMPO20 := NULL;
    //  :DIRECCIONESINTRO.CAMPO21 := NULL;
    //  :DIRECCIONESINTRO.CAMPO23 := NULL;
    //  
    //  HIDE_VIEW('DIR_01');
    //  HIDE_VIEW('DIR_02');
    //  HIDE_VIEW('DIR_03');
    //  :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //  :DIRECCIONESINTRO.ESTADO_ZOOM := 0;
    //  HIDE_VIEW('ZOOM_DIR');
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0');
    //  
    //  --
    //  SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R64G64B64');
    //   IF :GLOBAL.DIR1= 'DIR' THEN
//    //    :CAD_ANTERIOR := 'DIRECCION ANTERIOR = '||CHR(10)||CHR(13)||
    //    :BTER.DIRECC;
    // 
    //   END IF;
    //   
    //  IF :RADIO_GROUP = '01' THEN 
    //   
    //   SHOW_VIEW('DIR_01'); 
    //    :DIRECCIONESINTRO.DESCRIPCION := 'COMPLETE LOS CAMPOS NECESARIOS PARA HOMOLOGAR LA DIRECCIÓN, EN ESTE PANEL SE MOSTRARAN LAS AYUDAS RESPECTIVAS POR CAMPO.';
//    //   :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLO DIRECCION= "CLL 80 D 42-02 MZ 4 LOCAL 44"'||CHR(10)||CHR(13)||
    //   'HOMOLOGACION = CL 80 D 42 2 MZ 4 LC 44';
    //   SHOW_VIEW('DIR_02');
    //   
    //    --
    //   CLEAR_LIST('DIRECCIONESINTRO.CAMPO6');
    //   CLEAR_LIST('DIRECCIONESINTRO.CAMPO12'); 
    //   
    //   FOR I IN ( SELECT HOMODIR_DES,HOMODIR_COD FROM SETHOMODIR WHERE HOMODIR_TIPO = 'CUADRANTE')
    //   LOOP
    //    ADD_LIST_ELEMENT('DIRECCIONESINTRO.CAMPO6',LIST_INDEX,I.HOMODIR_DES, I.HOMODIR_COD);
    //    ADD_LIST_ELEMENT('DIRECCIONESINTRO.CAMPO12',LIST_INDEX,I.HOMODIR_DES, I.HOMODIR_COD);
    //    LIST_INDEX := LIST_INDEX + 1;
    //   END LOOP;
    //   
    //  ELSIF :RADIO_GROUP = '02' THEN 
    //   
    //   SHOW_VIEW('DIR_03'); 
    //   :CAD_DIRECCION:= 'IND';
    //   :DIRECCIONESINTRO.DESCRIPCION := 'POR MEDIO DE ESTA OPCIÓN PODRA INGRESAR DIRECCIONES QUE NO SE AJUSTEN A LA NOMENCLATURA BÁSICA.';
//    //   :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLO = "PARA CUALQUIER CIUDAD O MUNICIPIO"'||CHR(10)||CHR(13)||
    //   'HOMOLOGACION = IND KILOMETRO 15 VIA EL CERRITO'
    //   ;
    //  
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_direccionesintro_radioGroup_whenRadioChanged() {
        console.log("Entering CMFMENU_direccionesintro_radioGroup_whenRadioChanged");
        let LIST_INDEX: number = 1;
        this.DIRECCIONESINTRO.CAD_DIRECCION = null;
        this.DIRECCIONESINTRO.EJEMPLO = null;
        this.DIRECCIONESINTRO.DESCRIPCION = null;
        this.DIRECCIONESINTRO.CAMPO1 = null;
        this.DIRECCIONESINTRO.CAMPO2 = null;
        this.DIRECCIONESINTRO.CAMPO3 = null;
        this.DIRECCIONESINTRO.CAMPO4 = null;
        this.DIRECCIONESINTRO.CAMPO5 = null;
        this.DIRECCIONESINTRO.CAMPO6 = null;
        this.DIRECCIONESINTRO.CAMPO7 = null;
        this.DIRECCIONESINTRO.CAMPO8 = null;
        this.DIRECCIONESINTRO.CAMPO9 = null;
        this.DIRECCIONESINTRO.CAMPO10 = null;
        this.DIRECCIONESINTRO.CAMPO11 = null;
        this.DIRECCIONESINTRO.CAMPO12 = null;
        this.DIRECCIONESINTRO.CAMPO14 = null;
        this.DIRECCIONESINTRO.CAMPO15 = null;
        this.DIRECCIONESINTRO.CAMPO16 = null;
        this.DIRECCIONESINTRO.CAMPO17 = null;
        this.DIRECCIONESINTRO.CAMPO18 = null;
        this.DIRECCIONESINTRO.CAMPO19 = null;
        this.DIRECCIONESINTRO.CAMPO20 = null;
        this.DIRECCIONESINTRO.CAMPO21 = null;
        this.DIRECCIONESINTRO.CAMPO23 = null;
        this.oracleFormsBuiltins.hide_view("DIR_01");
        this.oracleFormsBuiltins.hide_view("DIR_02");
        this.oracleFormsBuiltins.hide_view("DIR_03");
        this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        this.DIRECCIONESINTRO.ESTADO_ZOOM = '0';
        this.oracleFormsBuiltins.hide_view("ZOOM_DIR");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("CAD_ANTERIOR", "FOREGROUND_COLOR", "R64G64B64");
        // if (GLOBAL.DIR1 == "DIR") {
//            this.DIRECCIONESINTRO.CAD_ANTERIOR = "DIRECCION ANTERIOR = " + CHR(10) + CHR(13) + BTER.DIRECC;
        // }
        // if (RADIO_GROUP == "01") {
//             this.oracleFormsBuiltins.show_view("DIR_01");
//             this.DIRECCIONESINTRO.DESCRIPCION = "COMPLETE LOS CAMPOS NECESARIOS PARA HOMOLOGAR LA DIRECCIÓN, EN ESTE PANEL SE MOSTRARAN LAS AYUDAS RESPECTIVAS POR CAMPO.";
// //            this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLO DIRECCION= "CLL 80 D 42 - 02 MZ 4 LOCAL 44" + CHR(10) + CHR(13) + "HOMOLOGACION = CL 80 D 42 2 MZ 4 LC 44";
//             this.oracleFormsBuiltins.show_view("DIR_02");
//             this.oracleFormsBuiltins.clear_list("DIRECCIONESINTRO.CAMPO6");
//             this.oracleFormsBuiltins.clear_list("DIRECCIONESINTRO.CAMPO12");
//         }
//         else if (RADIO_GROUP == "02") {
//             this.oracleFormsBuiltins.show_view("DIR_03");
//             this.DIRECCIONESINTRO.CAD_DIRECCION = "IND";
//             this.DIRECCIONESINTRO.DESCRIPCION = "POR MEDIO DE ESTA OPCIÓN PODRA INGRESAR DIRECCIONES QUE NO SE AJUSTEN A LA NOMENCLATURA BÁSICA.";
// //            this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLO = "PARA CUALQUIER CIUDAD O MUNICIPIO" + CHR(10) + CHR(13) + "HOMOLOGACION = IND KILOMETRO 15 VIA EL CERRITO";
//         }
        console.log("Exiting CMFMENU_direccionesintro_radioGroup_whenRadioChanged");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_bparahisto_postTextItem() {
        console.log("Entering CMFMENU_bparahisto_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_bparahisto_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bparahisto_whenNewItemInstance() {
        console.log("Entering CMFMENU_bparahisto_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bparahisto_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY('BPARAHISTO.MES',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPARAHISTO.AGNO',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE"); END;
    //#endregion
    async CMFMENU_bparahisto_whenNewBlockInstance() {
        console.log("Entering CMFMENU_bparahisto_whenNewBlockInstance");
        // this.oracleFormsBuiltins.set_item_instance_property("BPARAHISTO.MES", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        // this.oracleFormsBuiltins.set_item_instance_property("BPARAHISTO.AGNO", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        console.log("Exiting CMFMENU_bparahisto_whenNewBlockInstance");
    }

    //#region PLSQL
    // DECLARE
    //  V_CODCOMER  SETCOMCIA.COM_CODIGO%TYPE;
    //   V_NOMCOMER  VARCHAR2(80);
    //   T_RESPUESTA NUMBER;
    // BEGIN  
    //   IF :TERCERO IS NULL THEN
    //    LIB$DTNERFRMA('DEBE INGRESAR UN NIT / CC PARA CONSULTAR EL SEGUIMIENTO');
    //   ELSE
    //    --IF :this.PARAMETER.get("PCARGO") IN ('JP','EI','GF','OS') THEN
    //     IF :this.PARAMETER.get("PCARGO") IN ('JP','EI','GF','OS','TS','39') THEN  --PY 7818
    //        BEGIN
    //        /*SELECT TERSEC_CODIGO, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //           INTO V_CODCOMER, V_NOMCOMER
    //         FROM OPS$SEGUI.SETTERSEC, SETCOMCIA
    //       WHERE TERSEC_CODIGO = COM_CODIGO 
    //          AND  TERSEC_NIT  = :BPARAHISTO.TERCERO;*/
    //        
    //        --PY 8045  
    //        SELECT TERSEC_CODIGO, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //         INTO V_CODCOMER, V_NOMCOMER
    //         FROM OPS$SEGUI.SETTERSEC, SETCOMCIA , SGUSUARIOS
    //         WHERE TERSEC_CODIGO = COM_CODIGO 
    //         AND USU_CODIGO = COM_USORAC
    //         AND USU_AREA = 'CAP'         
    //         AND COM_ESTADO = 'A'
    //         AND  TERSEC_NIT  = :BPARAHISTO.TERCERO
    //         AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA;
    //          --PY 8045
    //              
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //          LIB$DTNERFRMA('NO EXISTE DATOS DEL EJECUTIVO DE INVERSION ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.'); 
    //       END;
    //       --IF V_CODCOMER = :this.PARAMETER.get("PCODCOMER")  THEN
    //        IF V_CODCOMER = :this.PARAMETER.get("PCODCOMER") OR :this.PARAMETER.get("PCARGO") = 'TS' THEN  --PY 7818
    //           BEGIN
    //            GO_BLOCK('BHISTO');
    //            EXECUTE_QUERY;
    //           EXCEPTION
    //           WHEN NO_DATA_FOUND THEN
    //             LIB$DTNERFRMA('NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS');
    //           END;
    //         ELSIF V_CODCOMER <> :this.PARAMETER.get("PCODCOMER") THEN
    //           LIB$DTNERFRMA('¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.');    
    //         ELSIF :this.PARAMETER.get("PCODCOMER") IS NULL THEN
    //           LIB$ALERTA('MENSAJE','EL TERCERO ESTA ASIGNADO AL COMERCIAL : "'||V_NOMCOMER||'" '||'SI USTED ES EL SUBGERENTE PUEDE CONSULTAR EL CLIENTE',NULL,NULL,NULL,T_RESPUESTA);
    //           BEGIN
    //            GO_BLOCK('BHISTO');
    //            EXECUTE_QUERY;
    //           EXCEPTION
    //           WHEN NO_DATA_FOUND THEN
    //             LIB$DTNERFRMA('NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS');
    //           END;
    //     ELSE
    //           LIB$DTNERFRMA('¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.');            
    //         END IF;
    //   ELSE
    //      BEGIN
    //         SELECT CXT_CODIGO, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //           INTO V_CODCOMER, V_NOMCOMER
    //       FROM SETTERXCOM, SETCOMCIA
    //       WHERE CXT_CODIGO = COM_CODIGO 
    //          AND CXT_NIT = :BPARAHISTO.TERCERO
    //          AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //        LIB$DTNERFRMA('NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.'); 
    //       END;
    //       BEGIN  
    //       IF  :this.PARAMETER.get("PCODCOMER") IS NULL THEN 
    //          BEGIN
    //             SELECT CXT_CODIGO, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //               INTO V_CODCOMER, V_NOMCOMER
    //        FROM SETTERXCOM, SETCOMCIA
    //        WHERE CXT_CODIGO = COM_CODIGO 
    //          AND CXT_NIT = :BPARAHISTO.TERCERO
    //          AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA;
    //          EXCEPTION WHEN NO_DATA_FOUND THEN
    //            LIB$DTNERFRMA('NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.'); 
    //           END;
    //           IF V_CODCOMER = :this.PARAMETER.get("PCODCOMER") THEN
    //             BEGIN
    //              GO_BLOCK('BHISTO');
    //              EXECUTE_QUERY;
    //             EXCEPTION
    //             WHEN NO_DATA_FOUND THEN
    //               LIB$DTNERFRMA('NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS');
    //             END;
    //           ELSIF V_CODCOMER <> :this.PARAMETER.get("PCODCOMER") THEN
    //             LIB$DTNERFRMA('¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.');    
    //           ELSIF :this.PARAMETER.get("PCODCOMER") IS NULL THEN
    //             LIB$ALERTA('MENSAJE','EL TERCERO ESTA ASIGNADO AL COMERCIAL : "'||V_NOMCOMER||'" '||'SI USTED ES EL SUBGERENTE PUEDE CONSULTAR EL CLIENTE',NULL,NULL,NULL,T_RESPUESTA);
    //             BEGIN
    //              GO_BLOCK('BHISTO');
    //              EXECUTE_QUERY;
    //             EXCEPTION
    //             WHEN NO_DATA_FOUND THEN
    //               LIB$DTNERFRMA('NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS');
    //             END;
    //       ELSE
    //             LIB$DTNERFRMA('¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.');            
    //           END IF;
    //       --ELSIF  :this.PARAMETER.get("PCODCOMER") IS NOT NULL  AND  :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','SR') THEN 
    //       ELSIF  :this.PARAMETER.get("PCODCOMER") IS NOT NULL  AND  :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','SR','TS') THEN 
    //       BEGIN
    //             SELECT CXT_CODIGO, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //               INTO V_CODCOMER, V_NOMCOMER
    //          FROM SETTERXCOM, SETCOMCIA
    //          WHERE CXT_CODIGO = COM_CODIGO 
    //            AND CXT_NIT = :BPARAHISTO.TERCERO
    //            AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA;
    //          EXCEPTION WHEN NO_DATA_FOUND THEN
    //            LIB$DTNERFRMA('NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.'); 
    //           END;
    //           IF V_CODCOMER = :this.PARAMETER.get("PCODCOMER") THEN
    //             BEGIN
    //              GO_BLOCK('BHISTO');
    //              EXECUTE_QUERY;
    //             EXCEPTION
    //             WHEN NO_DATA_FOUND THEN
    //               LIB$DTNERFRMA('NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS');
    //             END;
    //           ELSE
    //             LIB$ALERTA('MENSAJE','EL TERCERO ESTA ASIGNADO AL COMERCIAL : "'||V_NOMCOMER||'" '||'SI USTED ES EL SUBGERENTE PUEDE CONSULTAR EL CLIENTE',NULL,NULL,NULL,T_RESPUESTA);
    //             BEGIN
    //              GO_BLOCK('BHISTO');
    //              EXECUTE_QUERY;
    //             EXCEPTION
    //             WHEN NO_DATA_FOUND THEN
    //               LIB$DTNERFRMA('NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS');
    //             END;
    //           END IF;     
    //       ELSIF V_CODCOMER = :this.PARAMETER.get("PCODCOMER") THEN
    //           BEGIN
    //            GO_BLOCK('BHISTO');
    //            EXECUTE_QUERY;
    //           EXCEPTION
    //           WHEN NO_DATA_FOUND THEN
    //             LIB$DTNERFRMA('NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS');
    //           END;
    //       ELSIF V_CODCOMER <> :this.PARAMETER.get("PCODCOMER") THEN
    //         LIB$DTNERFRMA('¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.');         
    //       END IF;
    //     END;
    //    END IF;
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_bparahisto_vGenhisto_whenButtonPressed() {
        console.log("Entering CMFMENU_bparahisto_vGenhisto_whenButtonPressed");
        let V_CODCOMER: null = null;
        let V_NOMCOMER: string = null;
        let T_RESPUESTA: number = null;
        // if ((TERCERO == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR UN NIT / CC PARA CONSULTAR EL SEGUIMIENTO");
        // }
        // else {
        //     if (["JP", "EI", "GF", "OS", "TS", "39"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("TERCERO", this.BPARAHISTO.TERCERO);
        //         payload1.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        //         // call REST API
        //         const result1 = await Rest.post("/cmfmenu_bparahisto/cmfmenu_bparahisto_vgenhisto_whenbuttonpressed_query1", payload1);
        //         // get values from result
        //         V_CODCOMER = result1[0].get("V_CODCOMER");
        //         V_NOMCOMER = result1[0].get("V_NOMCOMER");
        //         if (result1 == null || result1.length == 0) {

        //             // CMFMENU_LIB$DTNERFRMA("NO EXISTE DATOS DEL EJECUTIVO DE INVERSION ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.");
        //         }

        //         if ((V_CODCOMER == this.PARAMETER.get("PCODCOMER") || this.PARAMETER.get("PCARGO") == "TS")) {
        //             this.oracleFormsBuiltins.go_block("BHISTO");
        //             this.oracleFormsBuiltins.execute_query();
        //             if (result1 == null || result1.length == 0) {

        //                 // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS");
        //             }

        //         }
        //         else if (V_CODCOMER != this.PARAMETER.get("PCODCOMER")) {
        //             // CMFMENU_LIB$DTNERFRMA("¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.");
        //         }
        //         else if ((this.PARAMETER.get("PCODCOMER") == null)) {
        //             // CMFMENU_LIB$ALERTA("MENSAJE", "EL TERCERO ESTA ASIGNADO AL COMERCIAL : " + V_NOMCOMER + " " + "SI USTED ES EL SUBGERENTE PUEDE CONSULTAR EL CLIENTE", null, null, null, T_RESPUESTA);
        //             this.oracleFormsBuiltins.go_block("BHISTO");
        //             this.oracleFormsBuiltins.execute_query();
        //             if (result1 == null || result1.length == 0) {

        //                 // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS");
        //             }

        //         }
        //         else {
        //             // CMFMENU_LIB$DTNERFRMA("¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.");
        //         }
        //     }
        //     else {
        //         // construct payload
        //         let payload2 = new Map();
        //         payload2.set("TERCERO", this.BPARAHISTO.TERCERO);
        //         payload2.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        //         // call REST API
        //         const result2 = await Rest.post("/cmfmenu_bparahisto/cmfmenu_bparahisto_vgenhisto_whenbuttonpressed_query2", payload2);
        //         // get values from result
        //         V_CODCOMER = result2[0].get("V_CODCOMER");
        //         V_NOMCOMER = result2[0].get("V_NOMCOMER");
        //         if (result2 == null || result2.length == 0) {

        //             // CMFMENU_LIB$DTNERFRMA("NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.");
        //         }

        //         if ((this.PARAMETER.get("PCODCOMER") == null)) {
        //             // construct payload
        //             let payload3 = new Map();
        //             payload3.set("TERCERO", this.BPARAHISTO.TERCERO);
        //             payload3.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        //             // call REST API
        //             const result3 = await Rest.post("/cmfmenu_bparahisto/cmfmenu_bparahisto_vgenhisto_whenbuttonpressed_query3", payload3);
        //             // get values from result
        //             V_CODCOMER = result3[0].get("V_CODCOMER");
        //             V_NOMCOMER = result3[0].get("V_NOMCOMER");
        //             if (result3 == null || result3.length == 0) {

        //                 // CMFMENU_LIB$DTNERFRMA("NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.");
        //             }

        //             if (V_CODCOMER == this.PARAMETER.get("PCODCOMER")) {
        //                 this.oracleFormsBuiltins.go_block("BHISTO");
        //                 this.oracleFormsBuiltins.execute_query();
        //                 if (result3 == null || result3.length == 0) {

        //                     // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS");
        //                 }

        //             }
        //             else if (V_CODCOMER != this.PARAMETER.get("PCODCOMER")) {
        //                 // CMFMENU_LIB$DTNERFRMA("¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.");
        //             }
        //             else if ((this.PARAMETER.get("PCODCOMER") == null)) {
        //                 // CMFMENU_LIB$ALERTA("MENSAJE", "EL TERCERO ESTA ASIGNADO AL COMERCIAL : " + V_NOMCOMER + " " + "SI USTED ES EL SUBGERENTE PUEDE CONSULTAR EL CLIENTE", null, null, null, T_RESPUESTA);
        //                 this.oracleFormsBuiltins.go_block("BHISTO");
        //                 this.oracleFormsBuiltins.execute_query();
        //                 if (result3 == null || result3.length == 0) {

        //                     // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS");
        //                 }

        //             }
        //             else {
        //                 // CMFMENU_LIB$DTNERFRMA("¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.");
        //             }
        //         }
        //         else if (((this.PARAMETER.get("PCODCOMER") != null) && ["GF", "GC", "GI", "SR", "TS"].indexOf(this.PARAMETER.get("PCARGO")) != -1)) {
        //             // construct payload
        //             let payload4 = new Map();
        //             payload4.set("TERCERO", this.BPARAHISTO.TERCERO);
        //             payload4.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        //             // call REST API
        //             const result4 = await Rest.post("/cmfmenu_bparahisto/cmfmenu_bparahisto_vgenhisto_whenbuttonpressed_query4", payload4);
        //             // get values from result
        //             V_CODCOMER = result4[0].get("V_CODCOMER");
        //             V_NOMCOMER = result4[0].get("V_NOMCOMER");
        //             if (result4 == null || result4.length == 0) {

        //                 // CMFMENU_LIB$DTNERFRMA("NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.");
        //             }

        //             if (V_CODCOMER == this.PARAMETER.get("PCODCOMER")) {
        //                 this.oracleFormsBuiltins.go_block("BHISTO");
        //                 this.oracleFormsBuiltins.execute_query();
        //                 if (result4 == null || result4.length == 0) {

        //                     // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS");
        //                 }

        //             }
        //             else {
        //                 // CMFMENU_LIB$ALERTA("MENSAJE", "EL TERCERO ESTA ASIGNADO AL COMERCIAL : " + V_NOMCOMER + " " + "SI USTED ES EL SUBGERENTE PUEDE CONSULTAR EL CLIENTE", null, null, null, T_RESPUESTA);
        //                 this.oracleFormsBuiltins.go_block("BHISTO");
        //                 this.oracleFormsBuiltins.execute_query();
        //                 if (result4 == null || result4.length == 0) {

        //                     // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS");
        //                 }

        //             }
        //         }
        //         else if (V_CODCOMER == this.PARAMETER.get("PCODCOMER")) {
        //             this.oracleFormsBuiltins.go_block("BHISTO");
        //             this.oracleFormsBuiltins.execute_query();
        //             if (result4 == null || result4.length == 0) {

        //                 // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS");
        //             }

        //         }
        //         else if (V_CODCOMER != this.PARAMETER.get("PCODCOMER")) {
        //             // CMFMENU_LIB$DTNERFRMA("¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.");
        //         }
        //     }
        // }
        console.log("Exiting CMFMENU_bparahisto_vGenhisto_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_CODCOMER  SETCOMCIA.COM_CODIGO%TYPE;
    //   V_NOMCOMER  VARCHAR2(80);
    //   T_RESPUESTA NUMBER;
    // BEGIN  
    //  BEGIN
    //       SELECT CXT_CODIGO, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //         INTO V_CODCOMER, V_NOMCOMER
    //    FROM SETTERXCOM, SETCOMCIA
    //    WHERE CXT_CODIGO = COM_CODIGO 
    //      AND CXT_NIT = :BPARAHISTO.TERCERO
    //      AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //    BEGIN
    //    SELECT TERSEC_CODIGO, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //       INTO V_CODCOMER, V_NOMCOMER
    //     FROM OPS$SEGUI.SETTERSEC, SETCOMCIA
    //   WHERE TERSEC_CODIGO = COM_CODIGO 
    //       AND  TERSEC_NIT  = :BPARAHISTO.TERCERO
    //       AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.'); 
    //   END;
    //  END; 
    // IF  :this.PARAMETER.get("PCODCOMER") IS NULL THEN 
    //  BEGIN
    //       SELECT CXT_CODIGO, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //         INTO V_CODCOMER, V_NOMCOMER
    //    FROM SETTERXCOM, SETCOMCIA
    //    WHERE CXT_CODIGO = COM_CODIGO 
    //      AND CXT_NIT = :BPARAHISTO.TERCERO
    //      AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   BEGIN
    //    SELECT TERSEC_CODIGO, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //       INTO V_CODCOMER, V_NOMCOMER
    //     FROM OPS$SEGUI.SETTERSEC, SETCOMCIA
    //   WHERE TERSEC_CODIGO = COM_CODIGO 
    //       AND  TERSEC_NIT  = :BPARAHISTO.TERCERO
    //       AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.'); 
    //   END;
    //   END;
    //    IF V_CODCOMER = :this.PARAMETER.get("PCODCOMER") THEN
    //        NEXT_ITEM;
    //    ELSIF (V_CODCOMER) <> :this.PARAMETER.get("PCODCOMER") THEN
    //      LIB$DTNERFRMA('¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.');    
    //    ELSIF :this.PARAMETER.get("PCODCOMER") IS NULL THEN
    //      LIB$ALERTA('MENSAJE','EL TERCERO ESTA ASIGNADO AL COMERCIAL : "'||V_NOMCOMER||'" '||'SI USTED ES EL SUBGERENTE PUEDE CONSULTAR EL CLIENTE',NULL,NULL,NULL,T_RESPUESTA);
    //      NEXT_ITEM; 
    //    END IF;
    // --ELSIF  :this.PARAMETER.get("PCODCOMER") IS NOT NULL  AND  :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','SR','JP') THEN
    //   ELSIF  :this.PARAMETER.get("PCODCOMER") IS NOT NULL  AND  :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','SR','JP','TS') THEN   
    //  BEGIN
    //       SELECT CXT_CODIGO, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //         INTO V_CODCOMER, V_NOMCOMER
    //    FROM SETTERXCOM, SETCOMCIA
    //    WHERE CXT_CODIGO = COM_CODIGO 
    //      AND CXT_NIT = :BPARAHISTO.TERCERO
    //      AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //    BEGIN
    //    SELECT TERSEC_CODIGO, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //       INTO V_CODCOMER, V_NOMCOMER
    //     FROM OPS$SEGUI.SETTERSEC, SETCOMCIA
    //   WHERE TERSEC_CODIGO = COM_CODIGO 
    //       AND  TERSEC_NIT  = :BPARAHISTO.TERCERO
    //       AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.'); 
    //   END;
    //   END;
    //    IF V_CODCOMER = :this.PARAMETER.get("PCODCOMER") THEN
    //        NEXT_ITEM;   
    //    ELSE
    //      LIB$ALERTA('MENSAJE','EL TERCERO ESTA ASIGNADO AL COMERCIAL : "'||V_NOMCOMER||'" '||'SI USTED ES EL SUBGERENTE PUEDE CONSULTAR EL CLIENTE',NULL,NULL,NULL,T_RESPUESTA);
    //      NEXT_ITEM; 
    //    END IF;     
    // ELSIF V_CODCOMER = :this.PARAMETER.get("PCODCOMER") THEN
    //        NEXT_ITEM;
    // ELSIF (V_CODCOMER) <> :this.PARAMETER.get("PCODCOMER") THEN
    //     LIB$DTNERFRMA('¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.');    
    // END IF;
    // END;
    //#endregion
    async CMFMENU_bparahisto_tercero_keyNextItem() {
        console.log("Entering CMFMENU_bparahisto_tercero_keyNextItem");
        let V_CODCOMER: null = null;
        let V_NOMCOMER: string = null;
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TERCERO", this.BPARAHISTO.TERCERO);
        payload1.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bparahisto/cmfmenu_bparahisto_tercero_keynextitem_query1", payload1);
        // get values from result
        V_CODCOMER = result1[0].get("V_CODCOMER");
        V_NOMCOMER = result1[0].get("V_NOMCOMER");
        if (result1 == null || result1.length == 0) {

            // construct payload
            let payload2 = new Map();
            payload2.set("TERCERO", this.BPARAHISTO.TERCERO);
            payload2.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
            // call REST API
            const result2 = await Rest.post("/cmfmenu_bparahisto/cmfmenu_bparahisto_tercero_keynextitem_query2", payload2);
            // get values from result
            V_CODCOMER = result2[0].get("V_CODCOMER");
            V_NOMCOMER = result2[0].get("V_NOMCOMER");
            if (result2 == null || result2.length == 0) {

                // CMFMENU_LIB$DTNERFRMA("NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.");
            }

        }

        if ((this.PARAMETER.get("PCODCOMER") == null)) {
            // construct payload
            let payload3 = new Map();
            payload3.set("TERCERO", this.BPARAHISTO.TERCERO);
            payload3.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
            // call REST API
            const result3 = await Rest.post("/cmfmenu_bparahisto/cmfmenu_bparahisto_tercero_keynextitem_query3", payload3);
            // get values from result
            V_CODCOMER = result3[0].get("V_CODCOMER");
            V_NOMCOMER = result3[0].get("V_NOMCOMER");
            if (result3 == null || result3.length == 0) {

                // construct payload
                let payload4 = new Map();
                payload4.set("TERCERO", this.BPARAHISTO.TERCERO);
                payload4.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
                // call REST API
                const result4 = await Rest.post("/cmfmenu_bparahisto/cmfmenu_bparahisto_tercero_keynextitem_query4", payload4);
                // get values from result
                V_CODCOMER = result4[0].get("V_CODCOMER");
                V_NOMCOMER = result4[0].get("V_NOMCOMER");
                if (result4 == null || result4.length == 0) {

                    // CMFMENU_LIB$DTNERFRMA("NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.");
                }

            }

            if (V_CODCOMER == this.PARAMETER.get("PCODCOMER")) {
                this.oracleFormsBuiltins.next_item();
            }
            else if (V_CODCOMER != this.PARAMETER.get("PCODCOMER")) {
                // CMFMENU_LIB$DTNERFRMA("¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.");
            }
            else if ((this.PARAMETER.get("PCODCOMER") == null)) {
                // CMFMENU_LIB$ALERTA("MENSAJE", "EL TERCERO ESTA ASIGNADO AL COMERCIAL : " + V_NOMCOMER + " " + "SI USTED ES EL SUBGERENTE PUEDE CONSULTAR EL CLIENTE", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.next_item();
            }
        }
        else if (((this.PARAMETER.get("PCODCOMER") != null) && ["GF", "GC", "GI", "SR", "JP", "TS"].indexOf(this.PARAMETER.get("PCARGO")) != -1)) {
            // construct payload
            let payload5 = new Map();
            payload5.set("TERCERO", this.BPARAHISTO.TERCERO);
            payload5.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
            // call REST API
            const result5 = await Rest.post("/cmfmenu_bparahisto/cmfmenu_bparahisto_tercero_keynextitem_query5", payload5);
            // get values from result
            V_CODCOMER = result5[0].get("V_CODCOMER");
            V_NOMCOMER = result5[0].get("V_NOMCOMER");
            if (result5 == null || result5.length == 0) {

                // construct payload
                let payload6 = new Map();
                payload6.set("TERCERO", this.BPARAHISTO.TERCERO);
                payload6.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
                // call REST API
                const result6 = await Rest.post("/cmfmenu_bparahisto/cmfmenu_bparahisto_tercero_keynextitem_query6", payload6);
                // get values from result
                V_CODCOMER = result6[0].get("V_CODCOMER");
                V_NOMCOMER = result6[0].get("V_NOMCOMER");
                if (result6 == null || result6.length == 0) {

                    // CMFMENU_LIB$DTNERFRMA("NO EXISTE DATOS DEL COMERCIAL ASIGNADO A ESE TERCERO, RECTIFIQUE POR FAVOR.");
                }

            }

            if (V_CODCOMER == this.PARAMETER.get("PCODCOMER")) {
                this.oracleFormsBuiltins.next_item();
            }
            else {
                // CMFMENU_LIB$ALERTA("MENSAJE", "EL TERCERO ESTA ASIGNADO AL COMERCIAL : " + V_NOMCOMER + " " + "SI USTED ES EL SUBGERENTE PUEDE CONSULTAR EL CLIENTE", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.next_item();
            }
        }
        else if (V_CODCOMER == this.PARAMETER.get("PCODCOMER")) {
            this.oracleFormsBuiltins.next_item();
        }
        else if (V_CODCOMER != this.PARAMETER.get("PCODCOMER")) {
            // CMFMENU_LIB$DTNERFRMA("¡ERROR!, SOLO SE PUEDE CONSULTAR LA HISTORIA DEL CLIENTE SI USTED ES EL COMERCIAL ASIGNADO.RECTIFIQUE POR FAVOR.");
        }
        console.log("Exiting CMFMENU_bparahisto_tercero_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :RADIO_OPCHISTO = '1' THEN
    //  :BPARAHISTO.AGNO := TO_CHAR(SYSDATE,'YYYY');
    //  :BPARAHISTO.MES  := TO_CHAR(SYSDATE,'MM');
    //  :V_CONDICON := :BPARAHISTO.AGNO||:BPARAHISTO.MES||'01';
    //   BEGIN 
    //    SELECT TO_CHAR(((TO_DATE(:V_CONDICON)-180)),'YYYYMM')
    //      INTO :V_CONDICON
    //   FROM DUAL;
    //   END;
    // ELSIF :RADIO_OPCHISTO = '2' THEN
    //  :BPARAHISTO.AGNO := TO_CHAR(SYSDATE,'YYYY');
    //  :BPARAHISTO.MES  := TO_CHAR(SYSDATE,'MM');
    //  :V_CONDICON := :BPARAHISTO.AGNO-1||:BPARAHISTO.MES;
    // ELSIF :RADIO_OPCHISTO = '3' THEN
    //  :V_CONDICON := NULL;
    // ELSIF :RADIO_OPCHISTO = '4' THEN
    //  SET_ITEM_INSTANCE_PROPERTY('BPARAHISTO.MES',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_TRUE");
    //   SET_ITEM_INSTANCE_PROPERTY('BPARAHISTO.AGNO',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_TRUE");
    //   IF GET_GROUP_ROW_COUNT('GRMESES') <> 0 THEN
    //     :BPARAHISTO.MES := TO_CHAR((SYSDATE),'MM');
    //   END IF;
    //   IF GET_GROUP_ROW_COUNT('GRAGNOS') <> 0 THEN
    //     :BPARAHISTO.AGNO := TO_CHAR((SYSDATE),'YYYY');
    //   END IF;
    //   :V_CONDICON := :BPARAHISTO.AGNO||:BPARAHISTO.MES;
    // END IF; END;
    //#endregion
    async CMFMENU_bparahisto_radioOpchisto_whenRadioChanged() {
        console.log("Entering CMFMENU_bparahisto_radioOpchisto_whenRadioChanged");
        // if (RADIO_OPCHISTO == "1") {
        //     this.BPARAHISTO.AGNO = SYSDATE.toString();
        //     this.BPARAHISTO.MES = SYSDATE.toString();
        //     this.BPARAHISTO.V_CONDICON = this.BPARAHISTO.AGNO || BPARAHISTO.MES || '01';
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("V_CONDICON", V_CONDICON);
        //     // call REST API
        //     const result1 = await Rest.post("/cmfmenu_bparahisto/cmfmenu_bparahisto_radioopchisto_whenradiochanged_query1", payload1);
        //     // get values from result
        //     V_CONDICON = result1[0].get("V_CONDICON");
        // }
        // else if (RADIO_OPCHISTO == "2") {
        //     this.BPARAHISTO.AGNO = SYSDATE.toString();
        //     this.BPARAHISTO.MES = SYSDATE.toString();
        //     this.BPARAHISTO.V_CONDICON = this.BPARAHISTO.AGNO - 1 || BPARAHISTO.MES;
        // }
        // else if (RADIO_OPCHISTO == "3") {
        //     this.BPARAHISTO.V_CONDICON = null;
        // }
        // else if (RADIO_OPCHISTO == "4") {
        //     this.oracleFormsBuiltins.set_item_instance_property("BPARAHISTO.MES", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_instance_property("BPARAHISTO.AGNO", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_TRUE");
        //     if (this.oracleFormsBuiltins.get_group_row_count("GRMESES") != 0) {
        //         this.BPARAHISTO.MES = PLSQLBuiltins.sysdate().toString();
        //     }
        //     if (this.oracleFormsBuiltins.get_group_row_count("GRAGNOS") != 0) {
        //         this.BPARAHISTO.AGNO = PLSQLBuiltins.sysdate().toString();
        //     }
        //     this.BPARAHISTO.V_CONDICON = this.BPARAHISTO.AGNO || BPARAHISTO.MES;
        // }
        console.log("Exiting CMFMENU_bparahisto_radioOpchisto_whenRadioChanged");
    }

    //#region PLSQL
    // BEGIN 
    // 
    //  LIB$GENPLANO(:TXT_BLOQUE,:PLANO.RUTA);
    //  
    //  IF :RG_TIPO = 'E' THEN
    //    --LIB$OFFICE.ABRE_ARCHIVO ('EXCEL', :PLANO.RUTA );
    //    LOFFICE.ABRE_ARCHIVO ('EXCEL', :PLANO.RUTA );
    //    ELSIF :RG_TIPO = 'W' THEN
    //     --LIB$OFFICE.ABRE_ARCHIVO ('WORD', :PLANO.RUTA );
    //     LOFFICE.ABRE_ARCHIVO ('WORD', :PLANO.RUTA );
    //    ELSIF :RG_TIPO = 'B' THEN
    //     --LIB$OFFICE.ABRE_ARCHIVO ('TEXTO', :PLANO.RUTA );
    //     LOFFICE.ABRE_ARCHIVO ('TEXTO', :PLANO.RUTA );
    //  END IF;
    // 
    // END;
    //#endregion
    async CMFMENU_plano_btnGenerar_whenButtonPressed() {
        console.log("Entering CMFMENU_plano_btnGenerar_whenButtonPressed");
        // CMFMENU_LIB$GENPLANO(TXT_BLOQUE, PLANO.RUTA);
        // if (RG_TIPO == "E") {
        //     // CMFMENU_LOFFICE.ABRE_ARCHIVO("EXCEL", PLANO.RUTA);
        // }
        // else if (RG_TIPO == "W") {
        //     // CMFMENU_LOFFICE.ABRE_ARCHIVO("WORD", PLANO.RUTA);
        // }
        // else if (RG_TIPO == "B") {
        //     // CMFMENU_LOFFICE.ABRE_ARCHIVO("TEXTO", PLANO.RUTA);
        // }
        console.log("Exiting CMFMENU_plano_btnGenerar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :RG_TIPO = 'R' THEN
    //   SET_ITEM_PROPERTY ('RUTA',ENABLED, "PROPERTY_FALSE");
    //   SET_ITEM_PROPERTY ('BTN_ABRE',ENABLED, "PROPERTY_FALSE");
    //  ELSE
    //   SET_ITEM_PROPERTY ('RUTA',ENABLED, "PROPERTY_TRUE");
    //   SET_ITEM_PROPERTY ('BTN_ABRE',ENABLED, "PROPERTY_TRUE");
    //  END IF; END;
    //#endregion
    async CMFMENU_plano_rgTipo_whenRadioChanged() {
        console.log("Entering CMFMENU_plano_rgTipo_whenRadioChanged");
        // if (RG_TIPO == "R") {
        //     this.oracleFormsBuiltins.set_item_property("RUTA", "ENABLED", "PROPERTY_FALSE");
        //     this.oracleFormsBuiltins.set_item_property("BTN_ABRE", "ENABLED", "PROPERTY_FALSE");
        // }
        // else {
        //     this.oracleFormsBuiltins.set_item_property("RUTA", "ENABLED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("BTN_ABRE", "ENABLED", "PROPERTY_TRUE");
        // }
        console.log("Exiting CMFMENU_plano_rgTipo_whenRadioChanged");
    }

    //#region PLSQL
    // BEGIN
    // 
    //  HIDE_WINDOW('WIN_PLANO');
    //  
    //  IF :TXT_BLOQUE = 'CMTREFER' THEN
    //   GO_BLOCK('CMTREFER');
    //  ELSE
    //   GO_BLOCK('DETALLE_REF'); 
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_plano_btnRegresar_whenButtonPressed() {
        console.log("Entering CMFMENU_plano_btnRegresar_whenButtonPressed");
        this.oracleFormsBuiltins.hide_window("WIN_PLANO");
        // if (TXT_BLOQUE == "CMTREFER") {
        //     this.oracleFormsBuiltins.go_block("CMTREFER");
        // }
        // else {
        //     this.oracleFormsBuiltins.go_block("DETALLE_REF");
        // }
        console.log("Exiting CMFMENU_plano_btnRegresar_whenButtonPressed");
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
    async CMFMENU_plano_btnAbre_whenButtonPressed() {
        console.log("Entering CMFMENU_plano_btnAbre_whenButtonPressed");
        let V_RUTA: string = null;
        V_RUTA = this.PLANO.RUTA;
        this.PLANO.RUTA = this.oracleFormsBuiltins.get_file_name("DOCUMENTOS (*.DOC,*.XLS,*.TXT)");
        // if ((PLANO.RUTA == null)) {
        //     this.PLANO.RUTA = V_RUTA;
        // }
        console.log("Exiting CMFMENU_plano_btnAbre_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_bbolsa_postTextItem() {
        console.log("Entering CMFMENU_bbolsa_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_bbolsa_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bbolsa_whenNewItemInstance() {
        console.log("Entering CMFMENU_bbolsa_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bbolsa_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_BOLSA;
    // BEGIN
    // PQBD_COL_ADMVEN.PCBOLSA(BK_DATA, :this.PARAMETER.get("POFCNA"), :this.PARAMETER.get("PPLAZU"), :BBOLSA.TER, :BBOLSA.COMERANT);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BBOLSA');
    // END;
    //#endregion
    async CMFMENU_bbolsa_queryProcedure() {
        console.log("Entering CMFMENU_bbolsa_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PCBOLSA(BK_DATA, this.PARAMETER.get("POFCNA"), this.PARAMETER.get("PPLAZU"), BBOLSA.TER, BBOLSA.COMERANT);
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BBOLSA");
        console.log("Exiting CMFMENU_bbolsa_queryProcedure");
    }

    //#region PLSQL
    // BEGIN
    // SELECT P.PIEDRA_PIEDRA
    // INTO :BBOLSA.NOMBRE_PIEDRA
    // FROM COVPIEDRA P
    // WHERE P.PIEDRA_TERCER=:BBOLSA.TER;
    // 
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //   :BBOLSA.NOMBRE_PIEDRA:=NULL;
    // END;
    //#endregion
    async CMFMENU_bbolsa_postQuery() {
        console.log("Entering CMFMENU_bbolsa_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("TER", this.BBOLSA.TER);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bbolsa/cmfmenu_bbolsa_postquery_query1", payload1);
        // get values from result
        this.BBOLSA.NOMBRE_PIEDRA = result1[0].get("BBOLSA.NOMBRE_PIEDRA");
        if (result1 == null || result1.length == 0) {

            this.BBOLSA.NOMBRE_PIEDRA = null;
        }

        console.log("Exiting CMFMENU_bbolsa_postQuery");
    }

    //#region PLSQL
    // DECLARE 
    //    
    //    CURSOR CCTOSXTER (V_TER IN VARCHAR2)IS 
    //     SELECT COLCOD, COLTDOC, COLOFI
    //       FROM COL
    //      WHERE COLESTC    = 'VI'
    //        AND COLBEN     = V_TER
    //        AND COL_CODCOB = '01'
    //        AND COLTDOC IN ('03', '04');
    //       
    //  V_CODABOGADO     COTABOGCIA.ABOG_CODIGO%TYPE;
    //  V_OFCABOG        SETCOMCIA.COM_OFC%TYPE;
    //  T_RESPUESTA     NUMBER;
    //  VBOTON       NUMBER;
    //  V_CANTIDAD     NUMBER;
    //  V_CANT_PROCESAR  NUMBER;
    //  
    // BEGIN 
    // IF :V_COMERCIALES IS NOT NULL THEN
    //  LIB$ALERTA('MENSAJE', 'ESTA SEGURO DE ASIGNAR EL TERCERO '||:BBOLSA.TER||' AL COMERCIAL '||:V_COMERCIALES,'SI', 'NO', NULL,VBOTON);
    //  IF VBOTON = 1 THEN 
    //    
    //    -- VALIDA QUE LOS CONTRATOS ESTEN EN TIPO DE COBRANZA 01 -- MMJ
    //     SELECT COUNT(*)
    //       INTO V_CANTIDAD
    //        FROM COL
    //       WHERE COLESTC    = 'VI'
    //         AND COLBEN     = :BBOLSA.TER
    //         AND COL_CODCOB <> '01'
    //         AND COLTDOC IN ('03', '04');
    //         
    //    IF V_CANTIDAD > 0 THEN
    //     LIB$DTNERFRMA ('EL TERCERO TIENE CONTRATOS EN TIPO DE COBRANZA DIFERENTE A 01. NO SE PUEDE REASIGNAR. REVISAR POR FAVOR.');       
    //    ELSE
    //    -- 
    //      SELECT COUNT(*)
    //        INTO V_CANT_PROCESAR
    //         FROM COL
    //        WHERE COLESTC    = 'VI'
    //          AND COLBEN     = :BBOLSA.TER
    //          AND COL_CODCOB = '01'
    //          AND COLTDOC IN ('03', '04');
    //      
    //       IF V_CANT_PROCESAR > 0 THEN       
    //        IF :BBOLSA.TER IS NOT NULL THEN
    //         UPDATE SETTERXCOM 
    //            SET CXT_CODIGO = :V_COMERCIALES 
    //          WHERE CXT_NIT    = :BBOLSA.TER;
    //          
    //          COMMIT;   
    //          
    //          DELETE CMTBOLTER
    //          WHERE BOLTER_NIT = :BBOLSA.TER;
    //          COMMIT;
    //          --ACTUALIZACION DEL GESTOR DE COBRO
    //          /*
    //          BEGIN
    //           SELECT ABOG_CODIGO, COM_OFC  
    //             INTO V_CODABOGADO, V_OFCABOG
    //          FROM SETCOMCIA, COTABOGCIA
    //         WHERE COM_CODIGO = :V_COMERCIALES
    //            AND COM_NIT    = ABOG_NIT;
    //          END;
    //          */
    //         BEGIN
    //          SELECT ABOG_CODIGO
    //               , COM_AGENCIA
    //            INTO V_CODABOGADO
    //               , V_OFCABOG
    //          FROM SETCOMCIA, COTABOGCIA
    //         WHERE COM_CODIGO = :V_COMERCIALES
    //            AND COM_NIT    = ABOG_NIT
    //            AND COM_CODUNI = ABOG_CODUNI;--ARQUITECTURA
    //         END;
    //         /*
    //         FOR ACT IN CCTOSXTER (:BBOLSA.TER) LOOP
    //           UPDATE COL
    //             SET COL_CODABO = V_CODABOGADO
    //                 ,COL_AGECON = '2'||V_OFCABOG
    //           WHERE COLCOD = ACT.COLCOD
    //             AND COLOFI = ACT.COLOFI
    //             AND COLTDOC = ACT.COLTDOC;
    //           COMMIT;
    //         END LOOP;
    //          */
    //         FOR ACT IN CCTOSXTER (:BBOLSA.TER) LOOP
    //           UPDATE COL
    //              SET COL_CODABO = V_CODABOGADO
    //                 , COL_AGECON = '2'||V_OFCABOG||'0'
    //            WHERE COLCOD  = ACT.COLCOD
    //              AND COLOFI  = ACT.COLOFI
    //              AND COLTDOC = ACT.COLTDOC;
    //           COMMIT;
    //         END LOOP;       
    //          --
    //  
    //         LIB$ALERTA('MENSAJE', 'TERCERO REASIGNADO AL COMERCIAL '||:V_COMERCIALES||' SE REASIGNARON '|| V_CANT_PROCESAR ||' CONTRATOS. '||' FINALIZADO CON EXITO',NULL,NULL, NULL,T_RESPUESTA);    
    //        ELSE
    //        LIB$DTNERFRMA ('NO EXISTE TERCERO A REASIGNAR.RECTIFIQUE POR FAVOR.');
    //        END IF; --IF :BBOLSA.TER IS NOT NULL THEN
    //      ELSE
    //          LIB$ALERTA('MENSAJE', 'EL PROCESO DE REASIGNACIÓN NO SE REALIZÓ PORQUE LOS CONTRATOS PUEDE QUE NO ESTEN EN ESTADO VI O TIENE EL TIPO DE COBRANZA DIFERENTE A 01. POR FAVOR REVISAR.',NULL,NULL, NULL,T_RESPUESTA);
    //      END IF;   --IF V_CANT_PROCESAR > 0 THEN
    //      
    //    END IF; --IF V_CANTIDAD > 0 THEN
    //  ELSE
    //     LIB$ALERTA('MENSAJE','PROCESO CANCELADO X EL USUARIO',NULL, NULL, NULL, T_RESPUESTA);
    //  END IF; --IF VBOTON = 1 THEN
    // 
    // 
    // ELSE
    // 
    //  :V_REASIGCLIE := 'N';
    //  LIB$ALERTA('ALERTA','PROCESO CANCELADO X EL USUARIO',NULL, NULL, NULL, T_RESPUESTA);
    // 
    // END IF;--IF :V_COMERCIALES IS NOT NULL THEN
    // 
    // 
    //  
    // 
    // END;
    //#endregion
    async CMFMENU_bbolsa_vComerciales_whenListChanged() {
        console.log("Entering CMFMENU_bbolsa_vComerciales_whenListChanged");
        let V_CODABOGADO: null = null;
        let V_OFCABOG: null = null;
        let T_RESPUESTA: number = null;
        let VBOTON: number = null;
        let V_CANTIDAD: number = null;
        let V_CANT_PROCESAR: number = null;
        // if ((V_COMERCIALES != null)) {
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "ESTA SEGURO DE ASIGNAR EL TERCERO " + BBOLSA.TER + " AL COMERCIAL " + V_COMERCIALES, "SI", "NO", null, VBOTON);
        //     if (VBOTON == 1) {
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("TER", BBOLSA.TER);
        //         // call REST API
        //         const result1 = await Rest.post("/cmfmenu_bbolsa/cmfmenu_bbolsa_vcomerciales_whenlistchanged_query1", payload1);
        //         // get values from result
        //         V_CANTIDAD = result1[0].get("V_CANTIDAD");
        //         if (V_CANTIDAD > 0) {
        //             // CMFMENU_LIB$DTNERFRMA("EL TERCERO TIENE CONTRATOS EN TIPO DE COBRANZA DIFERENTE A 01. NO SE PUEDE REASIGNAR. REVISAR POR FAVOR.");
        //         }
        //         else {
        //             // construct payload
        //             let payload2 = new Map();
        //             payload2.set("TER", BBOLSA.TER);
        //             // call REST API
        //             const result2 = await Rest.post("/cmfmenu_bbolsa/cmfmenu_bbolsa_vcomerciales_whenlistchanged_query2", payload2);
        //             // get values from result
        //             V_CANT_PROCESAR = result2[0].get("V_CANT_PROCESAR");
        //             if (V_CANT_PROCESAR > 0) {
        //                 if ((BBOLSA.TER != null)) {
        //                     // construct payload
        //                     let payload3 = new Map();
        //                     payload3.V_COMERCIALES = : V_COMERCIALES;
        //                     payload3.TER = : TER;
        //                     // call REST API
        //                     const result3 = await Rest.post("/cmfmenu_bbolsa/cmfmenu_bbolsa_vcomerciales_whenlistchanged_query3", payload3);
        //                     // construct payload
        //                     let payload5 = new Map();
        //                     payload5.TER = : TER;
        //                     // call REST API
        //                     const result5 = await Rest.post("/cmfmenu_bbolsa/cmfmenu_bbolsa_vcomerciales_whenlistchanged_query5", payload5);
        //                     // construct payload
        //                     let payload7 = new Map();
        //                     payload7.set("V_COMERCIALES", V_COMERCIALES);
        //                     // call REST API
        //                     const result7 = await Rest.post("/cmfmenu_bbolsa/cmfmenu_bbolsa_vcomerciales_whenlistchanged_query7", payload7);
        //                     // get values from result
        //                     V_CODABOGADO = result7[0].get("V_CODABOGADO");
        //                     V_OFCABOG = result7[0].get("V_OFCABOG");
        //                     // CMFMENU_LIB$ALERTA("MENSAJE", "TERCERO REASIGNADO AL COMERCIAL " + V_COMERCIALES + " SE REASIGNARON " + V_CANT_PROCESAR + " CONTRATOS. " + " FINALIZADO CON EXITO", null, null, null, T_RESPUESTA);
        //                 }
        //                 else {
        //                     // CMFMENU_LIB$DTNERFRMA("NO EXISTE TERCERO A REASIGNAR.RECTIFIQUE POR FAVOR.");
        //                 }
        //             }
        //             else {
        //                 // CMFMENU_LIB$ALERTA("MENSAJE", "EL PROCESO DE REASIGNACIÓN NO SE REALIZÓ PORQUE LOS CONTRATOS PUEDE QUE NO ESTEN EN ESTADO VI O TIENE EL TIPO DE COBRANZA DIFERENTE A 01. POR FAVOR REVISAR.", null, null, null, T_RESPUESTA);
        //             }
        //         }
        //     }
        //     else {
        //         // CMFMENU_LIB$ALERTA("MENSAJE", "PROCESO CANCELADO X EL USUARIO", null, null, null, T_RESPUESTA);
        //     }
        // }
        // else {
        //     this.BBOLSA.V_REASIGCLIE = "N";
        //     // CMFMENU_LIB$ALERTA("ALERTA", "PROCESO CANCELADO X EL USUARIO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_bbolsa_vComerciales_whenListChanged");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :V_REASIGCLIE = 'S' THEN
    //    LIB$ALERTA('MENSAJE','DEBE SELECCIONAR UN NUEVO COMERCIAL PARA PODERLO REASIGNAR',NULL, NULL, NULL, T_RESPUESTA);
    //     SET_ITEM_PROPERTY('V_COMERCIALES',"DISPLAYED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('V_COMERCIALES',ENABLED, "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('V_COMERCIALES',NAVIGABLE, "PROPERTY_TRUE");
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_bbolsa_vReasigclie_whenCheckboxChanged() {
        console.log("Entering CMFMENU_bbolsa_vReasigclie_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        // if (V_REASIGCLIE == "S") {
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "DEBE SELECCIONAR UN NUEVO COMERCIAL PARA PODERLO REASIGNAR", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.set_item_property("V_COMERCIALES", "DISPLAYED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("V_COMERCIALES", "ENABLED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("V_COMERCIALES", "NAVIGABLE", "PROPERTY_TRUE");
        // }
        console.log("Exiting CMFMENU_bbolsa_vReasigclie_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN --IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN
    // IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP','TS','AP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN --PY 7818 
    //   :this.PARAMETER.get("PCODCOMER") := NULL;
    // END IF; END;
    //#endregion
    async CMFMENU_bdetclivencer_preQuery() {
        console.log("Entering CMFMENU_bdetclivencer_preQuery");
        if ((["GF", "GC", "GI", "JM", "AM", "SR", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1 && (this.PARAMETER.get("PCODCOMER") != null))) {
            this.PARAMETER.set("PCODCOMER", null);
        }
        console.log("Exiting CMFMENU_bdetclivencer_preQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_NCLIVEN;
    // BEGIN
    // PQBD_COL_ADMVEN.PNCLIVEN(BK_DATA, :V_CLIVENCER, :this.PARAMETER.get("PCODCOMER"), :this.PARAMETER.get("PPLAZU"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BDETCLIVENCER');
    // END;
    //#endregion
    async CMFMENU_bdetclivencer_queryProcedure() {
        console.log("Entering CMFMENU_bdetclivencer_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PNCLIVEN(BK_DATA, V_CLIVENCER, this.PARAMETER.get("PCODCOMER"), this.PARAMETER.get("PPLAZU"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BDETCLIVENCER");
        console.log("Exiting CMFMENU_bdetclivencer_queryProcedure");
    }

    //#region PLSQL
    // BEGIN
    //      SELECT INCDES DESCRI1
    //       INTO  :BDETCTOSRENOCDT.V_ACTIVO
    //     FROM   OPS$ACTIVOS.INC
    //     WHERE  INCOFC   = :BDETCTOS.OFICINA
    //     AND    INCTDOC  = :BDETCTOS.TIPOCTO
    //     AND    INCCOL   = :BDETCTOS.CONTRATO
    //     AND    ROWNUM   = 1;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :BDETCTOSRENOCDT.V_ACTIVO := NULL;
    // END;
    //#endregion
    async CMFMENU_bdetclivencer_postQuery() {
        console.log("Entering CMFMENU_bdetclivencer_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("OFICINA", this.BDETCTOS.OFICINA);
        payload1.set("TIPOCTO", this.BDETCTOS.TIPOCTO);
        payload1.set("CONTRATO", this.BDETCTOS.CONTRATO);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bdetclivencer/cmfmenu_bdetclivencer_postquery_query1", payload1);
        // get values from result
        this.BDETCTOSRENOCDT.V_ACTIVO = result1[0].get("BDETCTOSRENOCDT.V_ACTIVO");
        if (result1 == null || result1.length == 0) {

            this.BDETCTOSRENOCDT.V_ACTIVO = null;
        }

        console.log("Exiting CMFMENU_bdetclivencer_postQuery");
    }

    //#region PLSQL
    // BEGIN NULL;
    // 
    // /*
    // DECLARE
    //  V_BOTON NUMBER;
    // BEGIN
    //  
    //  IF :SYSTEM.RECORD_STATUS = 'NEW' AND GET_ITEM_PROPERTY('BTER.SEG_TIPORIG',ENABLED) = 'TRUE' THEN
    //     IF :SEG_TIPORIG IS NULL OR (:SEG_NQREF IS NULL AND  :SEG_DETORIGEN IS NULL) THEN
    //      --LIB$DTNERFRMA('ES NECESARIO QUE INDIQUE EL ORIGEN Y LA IDENTIFICACIÓN O TIPO DE ORIGEN PARA CONTINUAR');
    //      --MESSAGE('ES NECESARIO QUE INDIQUE EL ORIGEN Y LA IDENTIFICACIÓN O TIPO DE ORIGEN PARA CONTINUAR');
    //      
    //      LIB$ALERTA('MENSAJE','ES NECESARIO QUE INDIQUE EL ORIGEN Y LA IDENTIFICACIÓN DE QUIEN REFIERE PARA CONTINUAR ',
    //           'ACEPTAR', NULL, NULL, V_BOTON);  
    //      --PREVIOUS_RECORD;
    //      GO_ITEM('SEG_TIPORIG');
    //      --DELETE_RECORD;
    //      RAISE FORM_TRIGGER_FAILURE;
    // 
    //     END IF;
    //  END IF;
    // END;
    // 
    // */; END;
    //#endregion
    async CMFMENU_cmtsegxter_whenNewRecordInstance() {
        console.log("Entering CMFMENU_cmtsegxter_whenNewRecordInstance");
        console.log("Exiting CMFMENU_cmtsegxter_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_cmtsegxter_postTextItem() {
        console.log("Entering CMFMENU_cmtsegxter_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_cmtsegxter_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_cmtsegxter_whenNewItemInstance() {
        console.log("Entering CMFMENU_cmtsegxter_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_cmtsegxter_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN NULL;
    // /*
    // DECLARE 
    // 
    //    CURSOR COFCDAV IS
    //     SELECT OFI_COD COD,
    //         OFI_DESCRIP DESCR
    //     FROM CRTOFIDAV
    //    ORDER BY 1;  
    // --------------------------------------------------------
    // --VARIABLES
    // --------------------------------------------------------
    //   IT_ID ITEM;
    // BEGIN
    //  IF :this.PARAMETER.get("PEXISTETER") = 'S' THEN
    //   PU_VALIDA_COMER;
    //  END IF;
    //   BEGIN
    //     IT_ID := FIND_ITEM('CMTSEGXTER.SEG_QUIENREF'); 
    //     IF ID_NULL( IT_ID) THEN
    //       MESSAGE('ERROR AL CARGAR LAS OFICINAS DE DAVIVIENDA');
    //     ELSE
    //       CLEAR_LIST(IT_ID);
    //       FOR ACC IN COFCDAV LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.DESCR, ACC.COD);
    //       END LOOP;
    //     END IF;  
    //       EXECUTE_QUERY;
    //   END;
    //   EXECUTE_QUERY;
    // END;
    // */; END;
    //#endregion
    async CMFMENU_cmtsegxter_whenNewBlockInstance() {
        console.log("Entering CMFMENU_cmtsegxter_whenNewBlockInstance");
        console.log("Exiting CMFMENU_cmtsegxter_whenNewBlockInstance");
    }

    //#region PLSQL
    // DECLARE
    //  V_EXTPROVOFCNA NUMBER;
    // BEGIN
    // 
    //  
    // IF :V_OFIDAV IS NOT NULL THEN
    // :BTER.SEG_TIPORIG  := '003';
    // :CMTSEGXTER.SEG_QUIENREF := :V_OFIDAV;
    // :CMTSEGXTER.SEG_TIPGES  := '001';
    // :CMTSEGXTER.SEG_TIPCOMP  := '002';
    //  ELSE
    //   BEGIN
    //     SELECT COUNT(*) 
    //      INTO V_EXTPROVOFCNA
    //    FROM CMTADMPROV
    //    WHERE PROV_NIT  = :BTER.NIT
    //      AND PROV_OFIC = 'S';
    //  END;
    //  IF V_EXTPROVOFCNA > 0 THEN
    // 
    // BEGIN
    //    SELECT '003'
    //      INTO :BTER.SEG_TIPORIG
    //     FROM DUAL;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    :BTER.SEG_TIPORIG  := NULL;
    //     :CMTSEGXTER.SEG_QUIENREF := NULL;
    //   END;
    //  END IF;
    // END IF;
    // 
    // :CMTSEGXTER.SEG_FECGES := TO_DATE(TO_CHAR(SYSDATE,'YYYYMMDD HH12:MI AM'),'YYYYMMDD HH12:MI AM'); 
    // :CMTSEGXTER.SEG_FECSEG := TO_DATE(TO_CHAR(SYSDATE,'YYYYMMDD'),'YYYYMMDD'); 
    // :CMTSEGXTER.SEG_HORSEG := TO_DATE(TO_CHAR(SYSDATE,'YYYYMMDD HH12:MI AM'),'YYYYMMDD HH12:MI AM'); --SYSDATE;
    // :CMTSEGXTER.SEG_ESTSEG := 'GR';
    // :CMTSEGXTER.SEG_COMER  := :BTER.COMER;
    // :CMTSEGXTER.SEG_USUARIO := PLSQLBuiltins.user();
    // :CMTSEGXTER.SEG_COMTER := :BTER.COMER;
    // :CMTSEGXTER.SEG_CODUNI := :this.PARAMETER.get("PUNIDAD");
    // 
    // 
    // END;
    //#endregion
    async CMFMENU_cmtsegxter_whenCreateRecord() {
        console.log("Entering CMFMENU_cmtsegxter_whenCreateRecord");
        let V_EXTPROVOFCNA: number = null;
        // if ((V_OFIDAV != null)) {
        //     this.BTER.SEG_TIPORIG = "003";
        //     this.CMTSEGXTER.SEG_QUIENREF = this.CMTSEGXTER.V_OFIDAV;
        //     this.CMTSEGXTER.SEG_TIPGES = "001";
        //     this.CMTSEGXTER.SEG_TIPCOMP = "002";
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("NIT", this.BTER.NIT);
        //     // call REST API
        //     const result1 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_whencreaterecord_query1", payload1);
        //     // get values from result
        //     V_EXTPROVOFCNA = result1[0].get("V_EXTPROVOFCNA");
        //     if (V_EXTPROVOFCNA > 0) {
        //         // construct payload
        //         let payload2 = new Map();
        //         payload2.set("SEG_TIPORIG", this.BTER.SEG_TIPORIG);
        //         // call REST API
        //         const result2 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_whencreaterecord_query2", payload2);
        //         // get values from result
        //         BTER.SEG_TIPORIG = result2[0].get("BTER.SEG_TIPORIG");
        //         if (result2 == null || result2.length == 0) {

        //             this.BTER.SEG_TIPORIG = null;
        //             this.CMTSEGXTER.SEG_QUIENREF = null;
        //         }

        //     }
        // }
        // this.CMTSEGXTER.SEG_FECGES = new Date(SYSDATE.toString());
        // this.CMTSEGXTER.SEG_FECSEG = new Date(SYSDATE.toString());
        // this.CMTSEGXTER.SEG_HORSEG = new Date(SYSDATE.toString());
        this.CMTSEGXTER.SEG_ESTSEG = "GR";
        this.CMTSEGXTER.SEG_COMER = this.BTER.COMER;
        this.CMTSEGXTER.SEG_USUARIO = PLSQLBuiltins.user();
        this.CMTSEGXTER.SEG_COMTER = this.BTER.COMER;
        this.CMTSEGXTER.SEG_CODUNI = this.PARAMETER.get("PUNIDAD");
        console.log("Exiting CMFMENU_cmtsegxter_whenCreateRecord");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  
    //   IF  GET_ITEM_PROPERTY('BTER.SEG_TIPORIG',ENABLED) = 'TRUE'  THEN
    //    IF :SEG_TIPORIG IS NULL OR (:SEG_NQREF IS NULL AND  :SEG_DETORIGEN IS NULL) THEN     
    //      GO_ITEM ('SEG_TIPORIG');
    //      LIB$DTNERFRMA('ES NECESARIO QUE INDIQUE EL ORIGEN Y LA IDENTIFICACIÓN O TIPO DE ORIGEN PARA CONTINUAR');
    //    END IF;
    //     END IF;
    //  
    //  PU_VALIDA_AGENDA(:BTER.COMER, :SEG_FECSEG, :SEG_HORSEG );
    //  
    //   /*IF :SEG_TIPGES IS NULL THEN 
    //    LIB$DTNERFRMA('ERROR. NO OLVIDE LLENAR LOS CAMPOS DE TIPO DE GESTION O TIPO DE COMPROMISO.');
    //   ELSIF  :SEG_TIPCOMP IS NULL THEN
    //    LIB$DTNERFRMA('ERROR. NO OLVIDE LLENAR LOS CAMPOS DE TIPO DE GESTION O TIPO DE COMPROMISO.');
    //   ELSIF  :SEG_HORSEG IS NULL THEN
    //    LIB$DTNERFRMA('ERROR. NO OLVIDE LLENAR EL CAMPO DE LA HORA DE SU COMPROMISO.');   
    //   ELSE
    //    LIB$ALERTA('MENSAJE','EL REGISTRO DE SEGUIMIENTO CREADO CON ÉXITO', NULL,NULL,NULL, T_RESPUESTA);
    //    
    //  END IF;*/
    //  
    //  
    //  IF :BTER.NIT = '860034313' AND :CMTSEGXTER.SEG_OFIDAV IS NULL  THEN 
    //    LIB$DTNERFRMA('ERROR. EL PROVEEDOR ES DAVIVIENDA POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.');
    //  ELSIF :BTER.NIT <> '860034313' AND :CMTSEGXTER.SEG_OFIDAV IS NOT NULL  THEN
    //     :CMTSEGXTER.SEG_OFIDAV := NULL;
    //  END IF;
    //  
    //  
    //  IF (:SEG_TIPGES IS NULL) OR  (:SEG_TIPCOMP IS NULL)  THEN 
    //    LIB$DTNERFRMA('ERROR. NO OLVIDE LLENAR LOS CAMPOS DE TIPO DE GESTION O TIPO DE COMPROMISO.');
    //  END IF;
    //  
    //  
    //  
    //   IF  (:SEG_HORSEG IS NULL)  OR (:SEG_FECSEG IS NULL) THEN
    //      LIB$DTNERFRMA('ERROR. NO OLVIDE LLENAR EL CAMPO DE LA FECHA Y HORA DE SU COMPROMISO.');   
    //   END IF;
    //  
    //   
    //   --NUEVO SSS
    //    HIDE_VIEW('DAT_OFI');
    //   GO_ITEM('SEG_TIPGES ');
    //  --NUEVO SSS 
    // 
    //   COMMIT_FORM;
    //   COMMIT;
    //   
    //   LIB$ALERTA('MENSAJE','EL REGISTRO DE SEGUIMIENTO CREADO CON ÉXITO', NULL,NULL,NULL, T_RESPUESTA);
    //   
    //   
    // END;
    //#endregion
    async CMFMENU_cmtsegxter_keyCommit() {
        console.log("Entering CMFMENU_cmtsegxter_keyCommit");
        let T_RESPUESTA: number = null;
        if (this.oracleFormsBuiltins.get_item_property("BTER.SEG_TIPORIG", "ENABLED") == "TRUE") {
            // if (((SEG_TIPORIG == null) || ((SEG_NQREF == null) && (SEG_DETORIGEN == null)))) {
            //     this.oracleFormsBuiltins.go_item("SEG_TIPORIG");
            //     // CMFMENU_LIB$DTNERFRMA("ES NECESARIO QUE INDIQUE EL ORIGEN Y LA IDENTIFICACIÓN O TIPO DE ORIGEN PARA CONTINUAR");
            // }
        }
        // CMFMENU_PU_VALIDA_AGENDA(this.BTER.COMER, SEG_FECSEG, SEG_HORSEG);
        if ((this.BTER.NIT == "860034313" && (this.CMTSEGXTER.SEG_OFIDAV == null))) {
            // CMFMENU_LIB$DTNERFRMA("ERROR. EL PROVEEDOR ES DAVIVIENDA POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.");
        }
        else if ((this.BTER.NIT != "860034313" && (this.CMTSEGXTER.SEG_OFIDAV != null))) {
            this.CMTSEGXTER.SEG_OFIDAV = null;
        }
        // if (((SEG_TIPGES == null) || (SEG_TIPCOMP == null))) {
        //     // CMFMENU_LIB$DTNERFRMA("ERROR. NO OLVIDE LLENAR LOS CAMPOS DE TIPO DE GESTION O TIPO DE COMPROMISO.");
        // }
        // if (((SEG_HORSEG == null) || (SEG_FECSEG == null))) {
        //     // CMFMENU_LIB$DTNERFRMA("ERROR. NO OLVIDE LLENAR EL CAMPO DE LA FECHA Y HORA DE SU COMPROMISO.");
        // }
        this.oracleFormsBuiltins.hide_view("DAT_OFI");
        this.oracleFormsBuiltins.go_item("SEG_TIPGES ");
        this.oracleFormsBuiltins.commit_form();
        // CMFMENU_LIB$ALERTA("MENSAJE", "EL REGISTRO DE SEGUIMIENTO CREADO CON ÉXITO", null, null, null, T_RESPUESTA);
        console.log("Exiting CMFMENU_cmtsegxter_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SEG_ESTSEG = 'AP' THEN
    //    BEGIN --7843
    //     SELECT INITCAP(DOMI_VLRCODIGO) DESCR
    //       INTO :V_DESMOT
    //     FROM CMTDOMINIOS
    //     WHERE DOMI_DOMINIO = 'MOTIVOSAPLA'
    //       AND DOMI_CODIGO  = :SEG_CODMOT;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN :V_DESMOT := NULL; --7843
    //    END;  --7843     
    //    ELSIF :SEG_ESTSEG = 'CA' THEN
    //    BEGIN --7843 
    //    SELECT INITCAP(DOMI_VLRCODIGO) DESCR
    //       INTO  :V_DESMOT
    //     FROM CMTDOMINIOS
    //     WHERE DOMI_DOMINIO = 'MOTIVOSCAN'
    //       AND DOMI_CODIGO  = :SEG_CODMOT;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN :V_DESMOT := NULL; --7843
    //    END;  --7843   
    //    END IF;
    //    
    //  BEGIN
    //   SELECT USU_NOMBRE
    //     INTO :V_NOMUSUASEG
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO = :SEG_USUARIO;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :V_NOMUSUASEG := NULL;
    //  END;
    //  
    // END;
    // /*
    //     BEGIN  
    //    SELECT TERNOM, TERAPE 
    //     INTO :NOM_QUIENREF, :APE_QUIENREF
    //    FROM TER      
    //    WHERE TERCOD = :SEG_NQREF;
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //        :NOM_QUIENREF := NULL;
    //        :APE_QUIENREF := NULL;
    //     END;*/
    // 
    // /*
    // BEGIN
    //  SELECT TERSEC_OFIDAV, '003'
    //    INTO :CMTSEGXTER.SEG_QUIENREF, :BTER.SEG_TIPORIG
    // FROM SETTERSEC
    // WHERE TERSEC_NIT = :SEG_NITTER;
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //  :BTER.SEG_TIPORIG  := NULL;
    //   :CMTSEGXTER.SEG_QUIENREF := NULL;
    // END;
    // */
    // 
    // BEGIN
    //   SELECT A.OFI_DESCRIP
    //   INTO :CMTSEGXTER.DESC_OFICINA
    //   FROM CRTOFIDAV A 
    //   WHERE A.OFI_COD = :CMTSEGXTER.SEG_OFIDAV;
    // EXCEPTION WHEN NO_DATA_FOUND THEN :CMTSEGXTER.DESC_OFICINA := NULL;
    // END;
    //#endregion
    async CMFMENU_cmtsegxter_postQuery() {
        console.log("Entering CMFMENU_cmtsegxter_postQuery");
        // if (SEG_ESTSEG == "AP") {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SEG_CODMOT", SEG_CODMOT);
        //     // call REST API
        //     const result1 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_postquery_query1", payload1);
        //     // get values from result
        //     V_DESMOT = result1[0].get("V_DESMOT");
        //     if (result1 == null || result1.length == 0) {

        //         this.CMTSEGXTER.V_DESMOT = null;
        //     }

        // }
        // else if (SEG_ESTSEG == "CA") {
        //     // construct payload
        //     let payload2 = new Map();
        //     payload2.set("SEG_CODMOT", SEG_CODMOT);
        //     // call REST API
        //     const result2 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_postquery_query2", payload2);
        //     // get values from result
        //     V_DESMOT = result2[0].get("V_DESMOT");
        //     if (result2 == null || result2.length == 0) {

        //         this.CMTSEGXTER.V_DESMOT = null;
        //     }

        // }
        // // construct payload
        // let payload3 = new Map();
        // payload3.set("SEG_USUARIO", SEG_USUARIO);
        // // call REST API
        // const result3 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_postquery_query3", payload3);
        // // get values from result
        // V_NOMUSUASEG = result3[0].get("V_NOMUSUASEG");
        // if (result3 == null || result3.length == 0) {

        //     this.CMTSEGXTER.V_NOMUSUASEG = null;
        // }

        // // construct payload
        // let payload4 = new Map();
        // payload4.set("SEG_OFIDAV", this.CMTSEGXTER.SEG_OFIDAV);
        // // call REST API
        // const result4 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_postquery_query4", payload4);
        // // get values from result
        // CMTSEGXTER.DESC_OFICINA = result4[0].get("CMTSEGXTER.DESC_OFICINA");
        // if (result4 == null || result4.length == 0) {

        //     this.CMTSEGXTER.DESC_OFICINA = null;
        // }

        console.log("Exiting CMFMENU_cmtsegxter_postQuery");
    }

    //#region PLSQL
    // BEGIN SET_BLOCK_PROPERTY ('CMTSEGXTER',"UPDATE_ALLOWED","PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY ('CMTSEGXTER', "INSERT_ALLOWED","PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY ('CMTSEGXTER',CURRENT_RECORD_ATTRIBUTE, 'DEFAULT');  
    // SET_ITEM_PROPERTY('SEG_QUIENREF',ENABLED, "PROPERTY_FALSE"); END;
    //#endregion
    async CMFMENU_cmtsegxter_vActual_whenButtonPressed() {
        console.log("Entering CMFMENU_cmtsegxter_vActual_whenButtonPressed");
        this.oracleFormsBuiltins.set_block_property("CMTSEGXTER", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CMTSEGXTER", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CMTSEGXTER", "CURRENT_RECORD_ATTRIBUTE", "DEFAULT");
        this.oracleFormsBuiltins.set_item_property("SEG_QUIENREF", "ENABLED", "PROPERTY_FALSE");
        console.log("Exiting CMFMENU_cmtsegxter_vActual_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF  :V_TIPOCAN = 'CA' AND :V_CODMOT = '001' THEN
    //   LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR LA FECHA Y LA HORA DE ESTE SEGUIMIENTO.',NULL,NULL, NULL, T_RESPUESTA);
    // ELSIF   :V_TIPOCAN = 'AP' AND :V_CODMOT = '001' THEN
    //   LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR LA FECHA Y LA HORA DE ESTE SEGUIMIENTO.',NULL,NULL, NULL, T_RESPUESTA);
    // END IF;
    // END; 
    //#endregion
    async CMFMENU_cmtsegxter_segCodmot_whenlistchanged() {
        console.log("Entering CMFMENU_cmtsegxter_segCodmot_whenlistchanged");
        let T_RESPUESTA: number = null;
        // if ((V_TIPOCAN == "CA" && V_CODMOT == "001")) {
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "DEBE ACTUALIZAR LA FECHA Y LA HORA DE ESTE SEGUIMIENTO.", null, null, null, T_RESPUESTA);
        // }
        // else if ((V_TIPOCAN == "AP" && V_CODMOT == "001")) {
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "DEBE ACTUALIZAR LA FECHA Y LA HORA DE ESTE SEGUIMIENTO.", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CMFMENU_cmtsegxter_segCodmot_whenlistchanged");
    }

    //#region PLSQL
    // BEGIN :CMTSEGXTER.SEG_FECUPD  := SYSDATE;
    // :CMTSEGXTER.SEG_USUARIO := PLSQLBuiltins.user();
    // :CMTSEGXTER.SEG_COMER   := :BTER.COMER;
    // :CMTSEGXTER.SEG_COMTER  := :BTER.COMER;
    // COMMIT_FORM; END;
    //#endregion
    async CMFMENU_cmtsegxter_vGrabar_whenButtonPressed() {
        console.log("Entering CMFMENU_cmtsegxter_vGrabar_whenButtonPressed");
        this.CMTSEGXTER.SEG_FECUPD = PLSQLBuiltins.sysdate().toString();
        this.CMTSEGXTER.SEG_USUARIO = PLSQLBuiltins.user();
        this.CMTSEGXTER.SEG_COMER = this.BTER.COMER;
        this.CMTSEGXTER.SEG_COMTER = this.BTER.COMER;
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CMFMENU_cmtsegxter_vGrabar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_CONTAR NUMBER;
    // BEGIN
    //   BEGIN
    //    SELECT COUNT(*)
    //      INTO V_CONTAR 
    //    FROM CMTSEGXTER
    //    WHERE SEG_NITTER = :CMTSEGXTER.SEG_NITTER
    //      AND TRUNC(SEG_FECSEG) = TRUNC(:CMTSEGXTER.SEG_FECSEG)
    //      AND SEG_COMER = :BTER.COMER
    //      AND SEG_ESTSEG IN ('GR','AP')
    //      AND NVL(SEG_OFIDAV,1) = NVL(:CMTSEGXTER.SEG_OFIDAV,1)--PY 16126
    //      ;
    //  END;
    // IF :CMTSEGXTER.SEG_FECSEG < TRUNC(SYSDATE-8) THEN
    //  LIB$DTNERFRMA('NO SE PERMITE FECHAS INFERIORES A OCHO DIAS. RECTIFIQUE.');
    // ELSE
    //  IF V_CONTAR > 0 THEN
    //   LIB$DTNERFRMA('EL CLIENTE YA TIENE COMPROMISO(S) PARA ESA FECHA EN ESTADO GRABADO O APLAZADO. RECTIFIQUE O CONSULTE SU AGENDA.');
    //  ELSE
    //    :CMTSEGXTER.SEG_FECSEG := TO_DATE(TO_CHAR(:CMTSEGXTER.SEG_FECSEG,'YYYYMMDD'),'YYYYMMDD'); 
    //  END IF;
    // END IF;
    // END;
    //#endregion
    async CMFMENU_cmtsegxter_segFecseg_whenValidateItem() {
        console.log("Entering CMFMENU_cmtsegxter_segFecseg_whenValidateItem");
        let V_CONTAR: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SEG_NITTER", this.CMTSEGXTER.SEG_NITTER);
        payload1.set("COMER", this.BTER.COMER);
        payload1.set("SEG_OFIDAV", this.CMTSEGXTER.SEG_OFIDAV);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_segfecseg_whenvalidateitem_query1", payload1);
        // get values from result
        V_CONTAR = result1[0].get("V_CONTAR");
        if (this.CMTSEGXTER.SEG_FECSEG < PLSQLBuiltins.sysdate()) {
            // CMFMENU_LIB$DTNERFRMA("NO SE PERMITE FECHAS INFERIORES A OCHO DIAS. RECTIFIQUE.");
        }
        else {
            if (V_CONTAR > 0) {
                // CMFMENU_LIB$DTNERFRMA("EL CLIENTE YA TIENE COMPROMISO(S) PARA ESA FECHA EN ESTADO GRABADO O APLAZADO. RECTIFIQUE O CONSULTE SU AGENDA.");
            }
            else {
                this.CMTSEGXTER.SEG_FECSEG = new Date(this.CMTSEGXTER.SEG_FECSEG.toString());
            }
        }
        console.log("Exiting CMFMENU_cmtsegxter_segFecseg_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --ANTES 6754
    // /*IF :OFIDAV IS NOT NULL THEN  
    //   BEGIN
    //      
    //     SELECT TERCOD 
    //      INTO :BTER.SEG_NQREF
    //     FROM TER 
    //     WHERE UPPER (TERAPE) LIKE '%BANCO%DAVIVIENDA%'
    //     AND ROWNUM = 1;
    //   
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      :BTER.SEG_NQREF :=  NULL;
    //     
    //   END;
    // END IF;
    // 
    // HIDE_WINDOW ('W_OFI');
    // GO_ITEM ('SEG_NQREF');
    // */
    // 
    // IF (:BTER.TIPO_REFERENCIA IS NULL) AND (:BTER.W_OFICINA IS NULL) AND   (:BTER.W_CODIGOASESOR IS NULL) THEN --7843
    //  
    //   
    //    HIDE_VIEW('DAT_OFI');   --7843
    //      GO_ITEM('SEG_NQREF ');  --7843
    //  
    // ELSE
    // 
    // IF (:BTER.W_CODIGOASESOR IS NULL) AND (:BTER.TIPO_REFERENCIA IS NULL) THEN
    //     LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.');
    // ELSE
    //  IF (:BTER.W_CODIGOASESOR IS NULL) AND (:BTER.TIPO_REFERENCIA IN (1,2,3)) THEN
    //    LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.');
    //  ELSE
    //   
    //   IF :BTER.TIPO_REFERENCIA = 4 AND :BTER.W_OFICINA IS NULL THEN
    //     LIB$DTNERFRMA('POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.'); 
    //   ELSE 
    //    
    //    IF :BTER.TIPO_REFERENCIA <> 4 THEN
    //    
    //      :BTER.SEG_NQREF  := :BTER.W_CODIGOASESOR;
    //    ELSE
    //    
    //      BEGIN
    //      
    //     SELECT TERCOD 
    //      INTO :BTER.SEG_NQREF
    //     FROM TER 
    //     WHERE UPPER (TERAPE) LIKE '%BANCO%DAVIVIENDA%'
    //     AND ROWNUM = 1;  
    //     EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //        :BTER.SEG_NQREF :=  NULL;     
    //     END;
    //   
    //    END IF;
    //      
    //     -- :BTER.OFIDAV     := :BTER.W_OFICINA;
    //   -- MESSAGE('::::::'||:BTER.W_OFICINA);
    //   -- MESSAGE('::::::'||:BTER.W_OFICINA);
    //    --:BTER.OFIDAV  := :BTER.W_OFICINA;
    //    
    //    HIDE_VIEW('DAT_OFI');
    //      GO_ITEM('SEG_NQREF ');
    //    
    //    END IF;
    //  END IF;
    //  END IF;
    // END IF;  --7843; END;
    //#endregion
    async CMFMENU_cmtsegxter_btnVolver_whenButtonPressed() {
        console.log("Entering CMFMENU_cmtsegxter_btnVolver_whenButtonPressed");
        if ((((this.BTER.TIPO_REFERENCIA == null) && (this.BTER.W_OFICINA == null)) && (this.BTER.W_CODIGOASESOR == null))) {
            this.oracleFormsBuiltins.hide_view("DAT_OFI");
            this.oracleFormsBuiltins.go_item("SEG_NQREF ");
        }
        else {
            if (((this.BTER.W_CODIGOASESOR == null) && (this.BTER.TIPO_REFERENCIA == null))) {
                // CMFMENU_LIB$DTNERFRMA("POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.");
            }
            else {
                if (((this.BTER.W_CODIGOASESOR == null) && ['1', '2', '3'].indexOf(this.BTER.TIPO_REFERENCIA) != -1)) {
                    // CMFMENU_LIB$DTNERFRMA("POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.");
                }
                else {
                    // if ((this.BTER.TIPO_REFERENCIA == 4 && (this.BTER.W_OFICINA == null))) {
                    //     // CMFMENU_LIB$DTNERFRMA("POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.");
                    // }
                    // else {
                    //     if (this.BTER.TIPO_REFERENCIA != 4) {
                    //         this.BTER.SEG_NQREF = this.BTER.W_CODIGOASESOR;
                    //     }
                    //     else {
                    //         // construct payload
                    //         let payload1 = new Map();
                    //         payload1.set("SEG_NQREF", this.BTER.SEG_NQREF);
                    //         // call REST API
                    //         const result1 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_btnvolver_whenbuttonpressed_query1", payload1);
                    //         // get values from result
                    //         BTER.SEG_NQREF = result1[0].get("BTER.SEG_NQREF");
                    //         if (result1 == null || result1.length == 0) {

                    //             this.BTER.SEG_NQREF = null;
                    //         }

                    //     }
                    //     this.oracleFormsBuiltins.hide_view("DAT_OFI");
                    //     this.oracleFormsBuiltins.go_item("SEG_NQREF ");
                    // }
                }
            }
        }
        console.log("Exiting CMFMENU_cmtsegxter_btnVolver_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    //  T_RESPUESTA NUMBER;
    //  V_DEPENDE SGUSUARIOS.USU_DEPEND%TYPE;
    //  V_CODOFI_DEP SGUSUARIOS.USU_CODOFI_N%TYPE;--12522 LCBY
    //  V_CODGERENTE SGUSUARIOS.USU_CODIGO%TYPE;
    //   V_MAILJERAR  SETCOMCIA.COM_MAIL%TYPE;
    //   V_CODCOMSUB  SETCOMCIA.COM_CODIGO%TYPE;
    //   V_NOMSUBGERENTE VARCHAR2(200);
    //   V_JERARQ   SGUSUARIOS.USU_JERARQ%TYPE;
    // BEGIN
    // IF :BTER.NIT IS NULL THEN
    //  LIB$DTNERFRMA('DEBE INGRESAR UN NIT PARA CREAR UN SEGUIMIENTO Y PODER INVITAR AL SUBGERENTE.'); 
    // ELSE  
    //  IF :SEG_ESTSEG <> 'GR' THEN
    //   LIB$DTNERFRMA('¡ERROR! NO SE PUEDE INVITAR AL SUBGERENTE SI SU SEGUIMIENTO SE ENCUENTRA [CA]NCELADO O [AP]LAZADO');
    //   ELSE
    //  LIB$ALERTA('MENSAJE','A QUIÉN DESEA INVITAR EN SU PRÓXIMO SEGUIMIENTO DEL CONTACTO?'
    //           ,'SUBGERENTE','CANCELAR', NULL,VBOTON);
    //     IF VBOTON = 1 THEN --SUBGERENTE
    //      LIB$ALERTA('MENSAJE','SE VA A AGENDAR EL SEGUIMIENTO A LA AGENDA DEL SUBGERENTE DE SU PLAZA COMERCIAL. ESPERE UN SEGUNDO.',NULL,NULL,NULL,T_RESPUESTA);
    //      --
    //       BEGIN
    //         SELECT USU_DEPEND, USU_CODOFI_N
    //           INTO V_DEPENDE, V_CODOFI_DEP
    //         FROM SGUSUARIOS
    //         WHERE USU_CODIGO = UPPER(USER);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       V_DEPENDE := NULL;
    //       END;
    //      BEGIN
    //        SELECT USU_CODIGO
    //           INTO V_CODGERENTE
    //         FROM SGUSUARIOS
    //         WHERE USU_JERARQ = V_DEPENDE
    //           AND USU_ESTADO  = 'A'
    //           AND USU_CODOFI_N = V_CODOFI_DEP;          
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //       V_CODGERENTE := NULL;
    //      END;
    //      IF V_DEPENDE IS NULL OR V_CODGERENTE IS NULL THEN
    //         LIB$DTNERFRMA('ERROR NO ESTA PARAMETRIZADO SU DEPENDENCIA Y NO SE ENCUENTRA SU JERARQUIA.CONSULTE CON A ADMINISTRADOR.');
    //      ELSE 
    //      IF V_DEPENDE  = '2.3'  THEN
    //        BEGIN
    //           SELECT USU_MAIL, USU_NOMBRE, '001'
    //             INTO V_MAILJERAR, V_NOMSUBGERENTE, V_CODCOMSUB
    //           FROM SGUSUARIOS
    //           WHERE USU_CODIGO = V_CODGERENTE;
    //         EXCEPTION WHEN NO_DATA_FOUND THEN
    //        V_MAILJERAR:= NULL;
    //        V_NOMSUBGERENTE := NULL;
    //         END;
    //       ELSE
    //       --BUSCA EL CORREO DEL CODGERENTE
    //       BEGIN
    //       SELECT COM_MAIL, COM_CODIGO, COM_NOMBRE||' '||COM_APELLIDO
    //         INTO V_MAILJERAR, V_CODCOMSUB, V_NOMSUBGERENTE
    //       FROM SETCOMCIA
    //       WHERE COM_USORAC = V_CODGERENTE
    //        AND  COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        V_MAILJERAR := NULL;
    //       END;
    //       END IF;
    //       LIB$ALERTA('MENSAJE','VALIDACIÓN DE LA AGENDA DEL SUBGERENTE '||V_NOMSUBGERENTE,NULL,NULL,NULL,T_RESPUESTA); 
    //       PU_VALIDA_AGENDADELSUBGERENTE (V_CODCOMSUB, :SEG_FECSEG, :SEG_HORSEG);
    //       IF V_MAILJERAR IS NULL THEN
    //        LIB$DTNERFRMA ('NO ESTA PARAMETRIZADO EL CORREO DEL USUARIO :'||V_CODGERENTE||' '|| V_NOMSUBGERENTE ||' NO SE LE ENVIARA CORREO DE INVITACION NI AGENDAMIENTO. ACTUALICE LA INFORMACION');
    //        ELSE
    //          PUP_ENVIO_CORREO2(V_CODGERENTE, V_MAILJERAR, :this.PARAMETER.get("PNOMBCOMER"));
    //        END IF;
    //        --CREAR REGISTRO EN LA AGENDA DEL SUBGERENTE
    //     INSERT INTO CMTSEGXTER
    //      (SEG_NITTER, SEG_TIPGES, SEG_TIPORIG, SEG_QUIENREF
    //      ,SEG_CODSEC, SEG_FECGES, SEG_FECUPD,  SEG_FECSEG
    //      ,SEG_HORSEG, SEG_ESTSEG, SEG_OBSERVA, SEG_USUARIO
    //      ,SEG_COMER, SEG_TIPCOMP, SEG_VISCOM, SEG_COMTER , SEG_CODUNI)
    //     VALUES
    //      (:SEG_NITTER, :SEG_TIPGES, :SEG_TIPORIG, :SEG_QUIENREF
    //      ,:SEG_CODSEC, :SEG_FECGES, :SEG_FECUPD,  :SEG_FECSEG
    //      ,:SEG_HORSEG, :SEG_ESTSEG, :SEG_OBSERVA, :SEG_USUARIO
    //      ,V_CODCOMSUB, :SEG_TIPCOMP, 'S', :SEG_COMER, :this.PARAMETER.get("PUNIDAD"));--V_CODCOMSUB
    //         COMMIT_FORM;
    //         --MODIFICACIÓN DE REGISTRO EN LA AGENDA DEL COMERCIAL
    //         UPDATE CMTSEGXTER
    //           SET SEG_VISCOM = 'S'
    //         WHERE SEG_NITTER = :SEG_NITTER
    //           AND TRUNC(SEG_FECGES) = TO_CHAR(:SEG_FECGES,'YYYY-MM-DD')
    //           AND TO_CHAR(SEG_HORSEG,'HH24:MI PM') = TO_CHAR(:SEG_HORSEG,'HH24:MI PM')
    //           AND TRUNC(SEG_FECSEG) = TO_CHAR(:SEG_FECSEG,'YYYY-MM-DD')
    //           AND SEG_COMER  = :SEG_COMER
    //           AND SEG_CODUNI = :this.PARAMETER.get("PUNIDAD");
    //         COMMIT;
    //         LIB$ALERTA('MENSAJE','SE GENERÓ CORREO ELECTRONICO DE INVITACION A :'||V_NOMSUBGERENTE||' '||V_MAILJERAR||' Y SE INSERTO LA GESTIÓN EN SU AGENDA.',NULL, NULL, NULL,T_RESPUESTA);
    //       END IF;
    //     ELSIF VBOTON = 2 THEN -- CANCELACION
    //     LIB$ALERTA('MENSAJE','PROCESO CANCELADO POR EL USUARIO NO SE GENERARON CORREOS NI AGENDAMIENTOS.',NULL,NULL,NULL,T_RESPUESTA);     
    //     END IF;
    //   END IF;
    // END IF; 
    // END;
    //#endregion
    async CMFMENU_cmtsegxter_vInvitacion_whenButtonPressed() {
        console.log("Entering CMFMENU_cmtsegxter_vInvitacion_whenButtonPressed");
        let VBOTON: number = null;
        let T_RESPUESTA: number = null;
        let V_DEPENDE: null = null;
        let V_CODOFI_DEP: null = null;
        let V_CODGERENTE: null = null;
        let V_MAILJERAR: null = null;
        let V_CODCOMSUB: null = null;
        let V_NOMSUBGERENTE: string = null;
        let V_JERARQ: null = null;
        if ((this.BTER.NIT == null)) {
            // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR UN NIT PARA CREAR UN SEGUIMIENTO Y PODER INVITAR AL SUBGERENTE.");
        }
        else {
            if (this.CMTSEGXTER.SEG_ESTSEG != "GR") {
                // CMFMENU_LIB$DTNERFRMA("¡ERROR! NO SE PUEDE INVITAR AL SUBGERENTE SI SU SEGUIMIENTO SE ENCUENTRA [CA]NCELADO O [AP]LAZADO");
            }
            else {
                // CMFMENU_LIB$ALERTA("MENSAJE", "A QUIÉN DESEA INVITAR EN SU PRÓXIMO SEGUIMIENTO DEL CONTACTO?", "SUBGERENTE", "CANCELAR", null, VBOTON);
                if (VBOTON == 1) {
                    // CMFMENU_LIB$ALERTA("MENSAJE", "SE VA A AGENDAR EL SEGUIMIENTO A LA AGENDA DEL SUBGERENTE DE SU PLAZA COMERCIAL. ESPERE UN SEGUNDO.", null, null, null, T_RESPUESTA);
                    // construct payload
                    let payload1 = new Map();
                    // call REST API
                    const result1 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_vinvitacion_whenbuttonpressed_query1", payload1);
                    // get values from result
                    V_DEPENDE = result1[0].get("V_DEPENDE");
                    V_CODOFI_DEP = result1[0].get("V_CODOFI_DEP");
                    if (result1 == null || result1.length == 0) {

                        V_DEPENDE = null;
                    }

                    // construct payload
                    let payload2 = new Map();
                    // call REST API
                    const result2 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_vinvitacion_whenbuttonpressed_query2", payload2);
                    // get values from result
                    V_CODGERENTE = result2[0].get("V_CODGERENTE");
                    if (result2 == null || result2.length == 0) {

                        V_CODGERENTE = null;
                    }

                    if (((V_DEPENDE == null) || (V_CODGERENTE == null))) {
                        // CMFMENU_LIB$DTNERFRMA("ERROR NO ESTA PARAMETRIZADO SU DEPENDENCIA Y NO SE ENCUENTRA SU JERARQUIA.CONSULTE CON A ADMINISTRADOR.");
                    }
                    else {
                        if (V_DEPENDE == "2.3") {
                            // construct payload
                            let payload3 = new Map();
                            // call REST API
                            const result3 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_vinvitacion_whenbuttonpressed_query3", payload3);
                            // get values from result
                            V_MAILJERAR = result3[0].get("V_MAILJERAR");
                            V_NOMSUBGERENTE = result3[0].get("V_NOMSUBGERENTE");
                            V_CODCOMSUB = result3[0].get("V_CODCOMSUB");
                            if (result3 == null || result3.length == 0) {

                                V_MAILJERAR = null;
                                V_NOMSUBGERENTE = null;
                            }

                        }
                        else {
                            // construct payload
                            let payload4 = new Map();
                            payload4.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
                            // call REST API
                            const result4 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_vinvitacion_whenbuttonpressed_query4", payload4);
                            // get values from result
                            V_MAILJERAR = result4[0].get("V_MAILJERAR");
                            V_CODCOMSUB = result4[0].get("V_CODCOMSUB");
                            V_NOMSUBGERENTE = result4[0].get("V_NOMSUBGERENTE");
                            if (result4 == null || result4.length == 0) {

                                V_MAILJERAR = null;
                            }

                        }
                        // CMFMENU_LIB$ALERTA("MENSAJE", "VALIDACIÓN DE LA AGENDA DEL SUBGERENTE " + V_NOMSUBGERENTE, null, null, null, T_RESPUESTA);
                        // CMFMENU_PU_VALIDA_AGENDADELSUBGERENTE(V_CODCOMSUB, SEG_FECSEG, SEG_HORSEG);
                        if ((V_MAILJERAR == null)) {
                            // CMFMENU_LIB$DTNERFRMA("NO ESTA PARAMETRIZADO EL CORREO DEL USUARIO :" + V_CODGERENTE + " " + V_NOMSUBGERENTE + " NO SE LE ENVIARA CORREO DE INVITACION NI AGENDAMIENTO. ACTUALICE LA INFORMACION");
                        }
                        else {
                            // CMFMENU_PUP_ENVIO_CORREO2(V_CODGERENTE, V_MAILJERAR, this.PARAMETER.get("PNOMBCOMER"));
                        }
                        // construct payload
                        let payload5 = new Map();
                        // payload5.SEG_NITTER = : SEG_NITTER;
                        // payload5.SEG_TIPGES = : SEG_TIPGES;
                        // payload5.SEG_TIPORIG = : SEG_TIPORIG;
                        // payload5.SEG_QUIENREF = : SEG_QUIENREF;
                        // payload5.SEG_CODSEC = : SEG_CODSEC;
                        // payload5.SEG_FECGES = : SEG_FECGES;
                        // payload5.SEG_FECUPD = : SEG_FECUPD;
                        // payload5.SEG_FECSEG = : SEG_FECSEG;
                        // payload5.SEG_HORSEG = : SEG_HORSEG;
                        // payload5.SEG_ESTSEG = : SEG_ESTSEG;
                        // payload5.SEG_OBSERVA = : SEG_OBSERVA;
                        // payload5.SEG_USUARIO = : SEG_USUARIO;
                        // payload5.SEG_TIPCOMP = : SEG_TIPCOMP;
                        // payload5.SEG_COMER = : SEG_COMER;
                        // payload5.PUNIDAD = : this.PARAMETER.get("PUNIDAD");
                        // call REST API
                        const result5 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_vinvitacion_whenbuttonpressed_query5", payload5);
                        this.oracleFormsBuiltins.commit_form();
                        // construct payload
                        let payload6 = new Map();
                        // payload6.SEG_NITTER = : SEG_NITTER;
                        // payload6.SEG_FECGES = : SEG_FECGES;
                        // payload6.SEG_HORSEG = : SEG_HORSEG;
                        // payload6.SEG_FECSEG = : SEG_FECSEG;
                        // payload6.SEG_COMER = : SEG_COMER;
                        // payload6.PUNIDAD = : PUNIDAD;
                        // call REST API
                        const result6 = await Rest.post("/cmfmenu_cmtsegxter/cmfmenu_cmtsegxter_vinvitacion_whenbuttonpressed_query6", payload6);
                        // CMFMENU_LIB$ALERTA("MENSAJE", "SE GENERÓ CORREO ELECTRONICO DE INVITACION A :" + V_NOMSUBGERENTE + " " + V_MAILJERAR + " Y SE INSERTO LA GESTIÓN EN SU AGENDA.", null, null, null, T_RESPUESTA);
                    }
                }
                else if (VBOTON == 2) {
                    // CMFMENU_LIB$ALERTA("MENSAJE", "PROCESO CANCELADO POR EL USUARIO NO SE GENERARON CORREOS NI AGENDAMIENTOS.", null, null, null, T_RESPUESTA);
                }
            }
        }
        console.log("Exiting CMFMENU_cmtsegxter_vInvitacion_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  HIDE_VIEW('SOL_EC');
    //  GO_ITEM('BTER.NIT '); 
    // END;
    //#endregion
    async CMFMENU_solEc_btnCierra_whenButtonPressed() {
        console.log("Entering CMFMENU_solEc_btnCierra_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("SOL_EC");
        this.oracleFormsBuiltins.go_item("BTER.NIT ");
        console.log("Exiting CMFMENU_solEc_btnCierra_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VMOESSO OPS$COLOCA.CRTMOESSO%ROWTYPE;
    // BEGIN
    //  IF :CRTSOLESTOBS.SOBS_MOTEST IS NOT NULL THEN
    //    OPS$COLOCA.PQBD_COL_GEN.PMOESSO(:CRTSOLESTOBS.SOBS_ESTADO, :CRTSOLESTOBS.SOBS_MOTEST, VMOESSO);
    //  END IF;
    //  :CRTSOLESTOBS.MOTEST_DES := VMOESSO.MOESSO_DESCRI;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //     NULL;
    // END;
    //#endregion
    async CMFMENU_crtsolestobs_postQuery() {
        console.log("Entering CMFMENU_crtsolestobs_postQuery");
        let VMOESSO: null = null;
        if ((this.CRTSOLESTOBS.SOBS_MOTEST != null)) {
            // CMFMENU_OPS$COLOCA.PQBD_COL_GEN.PMOESSO(CRTSOLESTOBS.SOBS_ESTADO, CRTSOLESTOBS.SOBS_MOTEST, VMOESSO);
        }
        // this.CRTSOLESTOBS.MOTEST_DES = this.VMOESSO.MOESSO_DESCRI;
        // if (result0 == null || result0.length == 0) {

        // }

        console.log("Exiting CMFMENU_crtsolestobs_postQuery");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_HISTORICO'); END;
    //#endregion
    async CMFMENU_bhisto_postTextItem() {
        console.log("Entering CMFMENU_bhisto_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_HISTORICO");
        console.log("Exiting CMFMENU_bhisto_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bhisto_whenNewItemInstance() {
        console.log("Entering CMFMENU_bhisto_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bhisto_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_HISTO;
    // BEGIN
    // PQBD_COL_ADMVEN.PCTABHISTO(BK_DATA, :BPARAHISTO.TERCERO, :BPARAHISTO.V_CONDICON, :BPARAHISTO.RADIO_OPCHISTO, :this.PARAMETER.get("PUNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BHISTO');
    // END;
    //#endregion
    async CMFMENU_bhisto_queryProcedure() {
        console.log("Entering CMFMENU_bhisto_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PCTABHISTO(BK_DATA, this.BPARAHISTO.TERCERO, this.BPARAHISTO.V_CONDICON, this.BPARAHISTO.RADIO_OPCHISTO, this.PARAMETER.get("PUNIDAD"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BHISTO");
        console.log("Exiting CMFMENU_bhisto_queryProcedure");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_setcomciacapNew_postTextItem() {
        console.log("Entering CMFMENU_setcomciacapNew_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_setcomciacapNew_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_setcomciacapNew_whenNewItemInstance() {
        console.log("Entering CMFMENU_setcomciacapNew_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_setcomciacapNew_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // BEGIN
    //  SELECT PLAZAS_DESCRI 
    //    INTO :SETCOMCIACAP_NEW.V_DESPLA
    //  FROM CMTPLAZAS WHERE PLAZAS_CODIGO = :SETCOMCIACAP_NEW.COM_PLA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :SETCOMCIACAP_NEW.V_DESPLA := NULL;
    // END;
    //#endregion
    async CMFMENU_setcomciacapNew_postQuery() {
        console.log("Entering CMFMENU_setcomciacapNew_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("COM_PLA", this.SETCOMCIACAP_NEW.COM_PLA);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_setcomciacap_new/cmfmenu_setcomciacapnew_postquery_query1", payload1);
        // get values from result
        this.SETCOMCIACAP_NEW.V_DESPLA = result1[0].get("SETCOMCIACAP_NEW.V_DESPLA");
        if (result1 == null || result1.length == 0) {

            this.SETCOMCIACAP_NEW.V_DESPLA = null;
        }

        console.log("Exiting CMFMENU_setcomciacapNew_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //   IF ERROR_CODE = 40200 THEN
    //    LIB$DTNERFRMA('DEBE LIMPIAR EL BLOQUE PARA TENER ACCESO A ESTE ÍTEM');
    //   ELSE
    //    LIB$DTNERFRMA(ERROR_TYPE||'-'||TO_CHAR(ERROR_CODE)||': '||ERROR_TEXT);
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_bperioindica_onError() {
        console.log("Entering CMFMENU_bperioindica_onError");
        let VBOTON: number = null;
        if (this.oracleFormsBuiltins.error_code() == 40200) {
            // CMFMENU_LIB$DTNERFRMA("DEBE LIMPIAR EL BLOQUE PARA TENER ACCESO A ESTE ÍTEM");
        }
        else {
            // CMFMENU_LIB$DTNERFRMA(this.oracleFormsBuiltins.error_type + "-" + ERROR_CODE.toString() + ": " + this.oracleFormsBuiltins.error_text);
        }
        console.log("Exiting CMFMENU_bperioindica_onError");
    }

    //#region PLSQL
    // BEGIN IF GET_GROUP_ROW_COUNT('GRMESES') <> 0 THEN
    //   :BPERIOINDICA.MES := TO_CHAR(ADD_MONTHS(SYSDATE,0),'MM');
    // END IF;
    // --
    // IF GET_GROUP_ROW_COUNT('GRAGNOS') <> 0 THEN
    //   :BPERIOINDICA.AGNO := TO_CHAR(ADD_MONTHS(SYSDATE,-1),'YYYY');
    // END IF;
    // 
    // --
    // 
    // IF GET_GROUP_ROW_COUNT('GRAGNOS') <> 0 AND GET_GROUP_ROW_COUNT('GRMESES') <> 0 THEN
    //  SELECT C.FECCOR_FECINI,C.FECCOR_FECFIN
    //  INTO :BPERIOINDICA.FINICIAL,:BPERIOINDICA.FFINAL
    //  FROM COTFECCOR C
    //  WHERE C.FECCOR_ANO = :BPERIOINDICA.AGNO
    //  AND C.FECCOR_MES = :BPERIOINDICA.MES
    //  ;
    // END IF;
    // --; END;
    //#endregion
    async CMFMENU_bperioindica_whenCreateRecord() {
        console.log("Entering CMFMENU_bperioindica_whenCreateRecord");
        // if (this.oracleFormsBuiltins.get_group_row_count("GRMESES") != 0) {
        //     this.BPERIOINDICA.MES = ADD_MONTHS(PLSQLBuiltins.sysdate(), 0).toString();
        // }
        // if (this.oracleFormsBuiltins.get_group_row_count("GRAGNOS") != 0) {
        //     this.BPERIOINDICA.AGNO = ADD_MONTHS(PLSQLBuiltins.sysdate(), 1).toString();
        // }
        // if ((this.oracleFormsBuiltins.get_group_row_count("GRAGNOS") != 0 && this.oracleFormsBuiltins.get_group_row_count("GRMESES") != 0)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("AGNO", this.BPERIOINDICA.AGNO);
        //     payload1.set("MES", this.BPERIOINDICA.MES);
        //     // call REST API
        //     const result1 = await Rest.post("/cmfmenu_bperioindica/cmfmenu_bperioindica_whencreaterecord_query1", payload1);
        //     // get values from result
        //     BPERIOINDICA.FINICIAL = result1[0].get("BPERIOINDICA.FINICIAL");
        //     BPERIOINDICA.FFINAL = result1[0].get("BPERIOINDICA.FFINAL");
        // }
        console.log("Exiting CMFMENU_bperioindica_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('PAGDETIND');
    // SHOW_VIEW('PAGINDICA');
    // GO_BLOCK('BNIVELINDICA');
//    // SYNCHRONIZE; END;
    //#endregion
    async CMFMENU_bperioindica_cerrarventana_whenButtonPressed() {
        console.log("Entering CMFMENU_bperioindica_cerrarventana_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("PAGDETIND");
        this.oracleFormsBuiltins.show_view("PAGINDICA");
        this.oracleFormsBuiltins.go_block("BNIVELINDICA");
//        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CMFMENU_bperioindica_cerrarventana_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('BPERIOINDICA');
    // CLEAR_BLOCK;
    // GO_BLOCK('BNIVELINDICA');
    // CLEAR_BLOCK;
    // GO_BLOCK('BCALIFICACION');
    // CLEAR_BLOCK;
    // --READ_IMAGE_FILE('CMVISITAS.JPG'  ,'JPG','BNIVELINDICA.POSITIVO');  
    // READ_IMAGE_FILE('EFVISITAS.JPG'  ,'JPG','BNIVELINDICA.NEGATIVO'); END;
    //#endregion
    async CMFMENU_bperioindica_limpiar_whenButtonPressed() {
        console.log("Entering CMFMENU_bperioindica_limpiar_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("BPERIOINDICA");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("BNIVELINDICA");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("BCALIFICACION");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.read_image_file("EFVISITAS.JPG", "JPG", "BNIVELINDICA.NEGATIVO");
        console.log("Exiting CMFMENU_bperioindica_limpiar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  V_CANTIDAD  NUMBER;
    //  VBOTON      NUMBER; 
    //  
    // 
    // BEGIN
    //  
    // 
    //  
    //  
    //  
    //   SELECT COUNT(*)
    //   INTO V_CANTIDAD
    //    FROM  COTFECCOR C
    //    WHERE C.FECCOR_ANO = :BPERIOINDICA.AGNO
    //    AND C.FECCOR_MES = :BPERIOINDICA.MES;
    //  
    //  
    //  IF V_CANTIDAD = 0 THEN 
    //    LIB$ALERTA ('MENSAJE','EL PERIODO Y EL MES SELECCIONADO NO CORRESPONDE A NINGÚN CORTE COMERCIAL, POR FAVOR VERIFIQUE LA INFORMACIÓN.','ACEPTAR',NULL,NULL,VBOTON);   
    //    :BPERIOINDICA.FINICIAL  := NULL;
    //    :BPERIOINDICA.FFINAL    := NULL;
    //    RAISE FORM_TRIGGER_FAILURE;
    //  ELSE 
    //    SELECT C.FECCOR_FECINI
    //    INTO :BPERIOINDICA.FINICIAL
    //        FROM COTFECCOR C
    //      WHERE  
    //        C.FECCOR_ANO||C.FECCOR_MES = (SELECT TO_CHAR(ADD_MONTHS(C.FECCOR_FECINI,-1),'YYYYMM') 
    //                                      FROM COTFECCOR C
    //                                      WHERE  
    //                                       C.FECCOR_ANO = :BPERIOINDICA.AGNO
    //                                       AND C.FECCOR_MES = :BPERIOINDICA.MES
    //                                      )
    //    ;
    //  
    //  
    //  
    //    SELECT C.FECCOR_FECFIN
    //     INTO :BPERIOINDICA.FFINAL
    //      FROM COTFECCOR C
    //      WHERE C.FECCOR_ANO = :BPERIOINDICA.AGNO
    //        AND C.FECCOR_MES = :BPERIOINDICA.MES
    //      ;
    //  
    //  
    //  GO_BLOCK('CMTGRUCOM');
    //  EXECUTE_QUERY;
    //  
    //  
    //  END IF;
    //  
    //  --READ_IMAGE_FILE('CMVISITAS.JPG'  ,'JPG','BNIVELINDICA.POSITIVO');  
    //   READ_IMAGE_FILE('EFVISITAS.JPG'  ,'JPG','BNIVELINDICA.NEGATIVO');  
    //   
    // 
    //   :BCALIFICACION.EFECTIVISITA := NULL;
    // END;     
    //#endregion
    async CMFMENU_bperioindica_agno_whenListChanged() {
        console.log("Entering CMFMENU_bperioindica_agno_whenListChanged");
        let V_CANTIDAD: number = null;
        let VBOTON: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("AGNO", this.BPERIOINDICA.AGNO);
        payload1.set("MES", this.BPERIOINDICA.MES);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bperioindica/cmfmenu_bperioindica_agno_whenlistchanged_query1", payload1);
        // get values from result
        V_CANTIDAD = result1[0].get("V_CANTIDAD");
        if (V_CANTIDAD == 0) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "EL PERIODO Y EL MES SELECCIONADO NO CORRESPONDE A NINGÚN CORTE COMERCIAL, POR FAVOR VERIFIQUE LA INFORMACIÓN.", "ACEPTAR", null, null, VBOTON);
            this.BPERIOINDICA.FINICIAL = null;
            this.BPERIOINDICA.FFINAL = null;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            // construct payload
            let payload2 = new Map();
            payload2.set("MES", this.BPERIOINDICA.MES);
            payload2.set("AGNO", this.BPERIOINDICA.AGNO);
            payload2.set("FINICIAL", this.BPERIOINDICA.FINICIAL);
            // call REST API
            const result2 = await Rest.post("/cmfmenu_bperioindica/cmfmenu_bperioindica_agno_whenlistchanged_query2", payload2);
            // get values from result
            this.BPERIOINDICA.FINICIAL = result2[0].get("BPERIOINDICA.FINICIAL");
            // construct payload
            let payload3 = new Map();
            payload3.set("AGNO", this.BPERIOINDICA.AGNO);
            payload3.set("MES", this.BPERIOINDICA.MES);
            // call REST API
            const result3 = await Rest.post("/cmfmenu_bperioindica/cmfmenu_bperioindica_agno_whenlistchanged_query3", payload3);
            // get values from result
            this.BPERIOINDICA.FFINAL = result3[0].get("BPERIOINDICA.FFINAL");
            this.oracleFormsBuiltins.go_block("CMTGRUCOM");
            this.oracleFormsBuiltins.execute_query();
        }
        this.oracleFormsBuiltins.read_image_file("EFVISITAS.JPG", "JPG", "BNIVELINDICA.NEGATIVO");
        this.BCALIFICACION.EFECTIVISITA = null;
        console.log("Exiting CMFMENU_bperioindica_agno_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  V_CANTIDAD  NUMBER;
    //  VBOTON      NUMBER; 
    // 
    // BEGIN
    //  
    //  
    //   SELECT COUNT(*)
    //   INTO V_CANTIDAD
    //    FROM  COTFECCOR C
    //    WHERE C.FECCOR_ANO = :BPERIOINDICA.AGNO
    //    AND C.FECCOR_MES = :BPERIOINDICA.MES;
    //  
    //  
    //  IF V_CANTIDAD = 0 THEN 
    //    LIB$ALERTA ('MENSAJE','EL PERIODO Y EL MES SELECCIONADO NO CORRESPONDE A NINGÚN CORTE COMERCIAL, POR FAVOR VERIFIQUE LA INFORMACIÓN.','ACEPTAR',NULL,NULL,VBOTON);   
    //    :BPERIOINDICA.FINICIAL  := NULL;
    //    :BPERIOINDICA.FFINAL    := NULL;
    //    RAISE FORM_TRIGGER_FAILURE;
    //  ELSE 
    //  
    //  
    //  
    //    SELECT C.FECCOR_FECINI
    //    INTO :BPERIOINDICA.FINICIAL
    //        FROM COTFECCOR C
    //      WHERE  
    //        C.FECCOR_ANO||C.FECCOR_MES = (SELECT TO_CHAR(ADD_MONTHS(C.FECCOR_FECINI,-1),'YYYYMM') 
    //                                      FROM COTFECCOR C
    //                                      WHERE  
    //                                       C.FECCOR_ANO = :BPERIOINDICA.AGNO
    //                                       AND C.FECCOR_MES = :BPERIOINDICA.MES
    //                                      )
    //    ;
    //  
    //  
    //  
    //    SELECT C.FECCOR_FECFIN
    //     INTO :BPERIOINDICA.FFINAL
    //      FROM COTFECCOR C
    //      WHERE C.FECCOR_ANO = :BPERIOINDICA.AGNO
    //        AND C.FECCOR_MES = :BPERIOINDICA.MES
    //      ;
    //  
    //  
    //  GO_BLOCK('CMTGRUCOM');
    //  EXECUTE_QUERY;
    //  
    //  END IF; 
    //  
    //  
    //  --READ_IMAGE_FILE('CMVISITAS.JPG'  ,'JPG','BNIVELINDICA.POSITIVO');  
    //   READ_IMAGE_FILE('EFVISITAS.JPG'  ,'JPG','BNIVELINDICA.NEGATIVO'); 
    //    
    // 
    //   :BCALIFICACION.EFECTIVISITA := NULL;
    // 
    // END;     
    //#endregion
    async CMFMENU_bperioindica_mes_whenListChanged() {
        console.log("Entering CMFMENU_bperioindica_mes_whenListChanged");
        let V_CANTIDAD: number = null;
        let VBOTON: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("AGNO", this.BPERIOINDICA.AGNO);
        payload1.set("MES", this.BPERIOINDICA.MES);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bperioindica/cmfmenu_bperioindica_mes_whenlistchanged_query1", payload1);
        // get values from result
        V_CANTIDAD = result1[0].get("V_CANTIDAD");
        if (V_CANTIDAD == 0) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "EL PERIODO Y EL MES SELECCIONADO NO CORRESPONDE A NINGÚN CORTE COMERCIAL, POR FAVOR VERIFIQUE LA INFORMACIÓN.", "ACEPTAR", null, null, VBOTON);
            this.BPERIOINDICA.FINICIAL = null;
            this.BPERIOINDICA.FFINAL = null;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            // construct payload
            let payload2 = new Map();
            payload2.set("MES", this.BPERIOINDICA.MES);
            payload2.set("AGNO", this.BPERIOINDICA.AGNO);
            payload2.set("FINICIAL", this.BPERIOINDICA.FINICIAL);
            // call REST API
            const result2 = await Rest.post("/cmfmenu_bperioindica/cmfmenu_bperioindica_mes_whenlistchanged_query2", payload2);
            // get values from result
            this.BPERIOINDICA.FINICIAL = result2[0].get("BPERIOINDICA.FINICIAL");
            // construct payload
            let payload3 = new Map();
            payload3.set("AGNO", this.BPERIOINDICA.AGNO);
            payload3.set("MES", this.BPERIOINDICA.MES);
            // call REST API
            const result3 = await Rest.post("/cmfmenu_bperioindica/cmfmenu_bperioindica_mes_whenlistchanged_query3", payload3);
            // get values from result
            this.BPERIOINDICA.FFINAL = result3[0].get("BPERIOINDICA.FFINAL");
            this.oracleFormsBuiltins.go_block("CMTGRUCOM");
            this.oracleFormsBuiltins.execute_query();
        }
        this.oracleFormsBuiltins.read_image_file("EFVISITAS.JPG", "JPG", "BNIVELINDICA.NEGATIVO");
        this.BCALIFICACION.EFECTIVISITA = null;
        console.log("Exiting CMFMENU_bperioindica_mes_whenListChanged");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('PLANO_INDICADORES');
    // :PLANO_INDICADORES.RUTA := '\\SERVAPL3\COMPARTIDO\ARCHIVO_'||SYSDATE||'.CSV'; END;
    //#endregion
    async CMFMENU_bperioindica_exportarExcel_whenButtonPressed() {
        console.log("Entering CMFMENU_bperioindica_exportarExcel_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("PLANO_INDICADORES");
        this.PLANO_INDICADORES.RUTA = "\\SERVAPL3\COMPARTIDO\ARCHIVO_" + PLSQLBuiltins.sysdate() + ".CSV";
        console.log("Exiting CMFMENU_bperioindica_exportarExcel_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_cmtmnsjs_postTextItem() {
        console.log("Entering CMFMENU_cmtmnsjs_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_cmtmnsjs_postTextItem");
    }

    //#region PLSQL
    // BEGIN NULL;
    // LIB$DTNERFRMA('OPCION NO PERMITIDA EN ESTE BLOQUE. SI DESEA CREAR UN REGISTRO NUEVO RECUERDE QUE DEBE CREAR CON F6 O CON EL ICONO DE CREAR UN REGISTRO.'); END;
    //#endregion
    async CMFMENU_cmtmnsjs_keyEntqry() {
        console.log("Entering CMFMENU_cmtmnsjs_keyEntqry");
        // CMFMENU_LIB$DTNERFRMA("OPCION NO PERMITIDA EN ESTE BLOQUE. SI DESEA CREAR UN REGISTRO NUEVO RECUERDE QUE DEBE CREAR CON F6 O CON EL ICONO DE CREAR UN REGISTRO.");
        console.log("Exiting CMFMENU_cmtmnsjs_keyEntqry");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_cmtmnsjs_whenNewItemInstance() {
        console.log("Entering CMFMENU_cmtmnsjs_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_cmtmnsjs_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //  SET_ITEM_PROPERTY('V_GRABARTER', "ENABLED", "PROPERTY_FALSE");
    // END;
    //#endregion
    async CMFMENU_cmtmnsjs_whenNewBlockInstance() {
        console.log("Entering CMFMENU_cmtmnsjs_whenNewBlockInstance");
        this.oracleFormsBuiltins.set_item_property("V_GRABARTER", "ENABLED", "PROPERTY_FALSE");
        console.log("Exiting CMFMENU_cmtmnsjs_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN
    //  LIST_VALUES(RESTRICT);
    // END;
    //#endregion
    async CMFMENU_cmtmnsjs_keyListval() {
        console.log("Entering CMFMENU_cmtmnsjs_keyListval");
        this.oracleFormsBuiltins.list_values("RESTRICT");
        console.log("Exiting CMFMENU_cmtmnsjs_keyListval");
    }

    //#region PLSQL
    // BEGIN NULL;
    // LIB$DTNERFRMA('OPCION NO PERMITIDA EN ESTE BLOQUE.'); END;
    //#endregion
    async CMFMENU_cmtmnsjs_keyExeqry() {
        console.log("Entering CMFMENU_cmtmnsjs_keyExeqry");
        // CMFMENU_LIB$DTNERFRMA("OPCION NO PERMITIDA EN ESTE BLOQUE.");
        console.log("Exiting CMFMENU_cmtmnsjs_keyExeqry");
    }

    //#region PLSQL
    // :CMTMNSJS.MENS_USUARIO := PLSQLBuiltins.user();
    // :CMTMNSJS.MENS_FECREG  := SYSDATE;
    // IF :this.PARAMETER.get("POFCNA") = '020' THEN
    //   :CMTMNSJS.MENS_DEPART  := '05';
    //   :CMTMNSJS.MENS_CIUDAD  := '001';
    // ELSIF :this.PARAMETER.get("POFCNA") = '030' THEN
    //  :CMTMNSJS.MENS_DEPART  := '76';
    //   :CMTMNSJS.MENS_CIUDAD  := '001';
    // ELSE
    //  :CMTMNSJS.MENS_DEPART  := '11';
    //   :CMTMNSJS.MENS_CIUDAD  := '001';
    // END IF;
    // BEGIN
    //  SELECT USU_NOMBRE 
    //    INTO :CMTMNSJS.V_DESCUSUARIO
    //  FROM SGUSUARIOS
    //  WHERE USU_CODIGO = PLSQLBuiltins.user();
    // END;
    //#endregion
    async CMFMENU_cmtmnsjs_whenCreateRecord() {
        console.log("Entering CMFMENU_cmtmnsjs_whenCreateRecord");
        console.log("Exiting CMFMENU_cmtmnsjs_whenCreateRecord");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_MAILAQUIEN SETCOMCIA.COM_MAIL%TYPE;
    //  V_AVISAR    VARCHAR2(3);
    //  EXISTE   NUMBER;
    // BEGIN 
    // 
    //  --IF :this.PARAMETER.get("PCARGO") IN ('OS') THEN PY 9179
    //   IF :this.PARAMETER.get("PCARGO") IN ('OS','39') THEN
    //   BEGIN
    //      SELECT COUNT(*) 
    //        INTO EXISTE
    //      FROM SETTERSEC 
    //      WHERE TERSEC_NIT = :CMTMNSJS.MENS_NUMIDEN;
    //    END;
    //            IF :CMTMNSJS.MENS_AVISAR IS NULL AND EXISTE = 0 THEN
    //              -- BUSCA EL SUBGERENTE EN ESTE CASO EL COMERCIAL DE CAPTACIONES
    //              PU_BUSCAR_SUBGERENTE_CAPTA (V_AVISAR, :GLOBAL.MAILCOMER, :this.PARAMETER.get("POFCNA")); 
    //              --
    //              IF V_AVISAR IS NULL THEN
    //                LIB$DTNERFRMA('¡ERROR!, NO SE PUDO OBTENER EL CÓDIGO DEL EJECUTIVO DE INVERSIÓN.');
    //              END IF;
    //              INSERT INTO CMTASIGCOM
    //            (ADMON_COMERCIAL, ADMON_TERCERO, ADMON_ASIGCOM)
    //              VALUES
    //            (V_AVISAR,:CMTMNSJS.MENS_NUMIDEN , 0);
    //             --  
    //              --INSERTAR EL CLIENTE Y CRUZARLO CON EL EJECUTIVO DE INVERSIÓN.
    //              
    //              
    //              INSERT INTO SETTERSEC (TERSEC_CODIGO, TERSEC_NIT, TERSEC_DEPCOM) 
    //                VALUES (V_AVISAR,:CMTMNSJS.MENS_NUMIDEN, 'CAP' );
    //              COMMIT;
    //              COMMIT_FORM;
    //            ELSIF :CMTMNSJS.MENS_AVISAR IS NOT NULL AND EXISTE = 0 THEN 
    //              --INSERTAR EL CLIENTE Y CRUZARLO CON EL EJECUTIVO DE INVERSIÓN.
    //              
    //              INSERT INTO SETTERSEC (TERSEC_CODIGO, TERSEC_NIT, TERSEC_DEPCOM) 
    //                VALUES (:CMTMNSJS.MENS_AVISAR,:CMTMNSJS.MENS_NUMIDEN, 'CAP' );
    //            COMMIT;
    //             COMMIT_FORM;
    //            END IF;
    //   END IF;
    //   COMMIT_FORM;
    //   IF :CMTMNSJS.MENS_AVISAR IS NULL AND :CMTMNSJS.MENS_NUMIDEN IS NOT NULL THEN
    //    BEGIN
    //      SELECT ADMON_COMERCIAL, COM_NOMBRE||' '||COM_APELLIDO COMERCIAL 
    //         INTO :CMTMNSJS.MENS_AVISAR , :CMTMNSJS.V_NOMBCOMER
    //      FROM CMTASIGCOM, SETCOMCIA
    //      WHERE ADMON_COMERCIAL= COM_CODIGO 
    //         AND ADMON_TERCERO  = :CMTMNSJS.MENS_NUMIDEN
    //         AND COM_CODUNI     = :this.PARAMETER.get("PUNIDAD");--ARQUITECTURA
    //    EXCEPTION WHEN NO_DATA_FOUND THEN
    //     :CMTMNSJS.MENS_AVISAR       := NULL;
    //      :CMTMNSJS.V_NOMBCOMER       := NULL;
    //    END;
    //   END IF;
    //   IF :CMTMNSJS.MENS_AQUIEN IS NOT NULL THEN
    //   BEGIN
    //    SELECT COM_MAIL
    //      INTO V_MAILAQUIEN
    //    FROM SETCOMCIA
    //    WHERE COM_CODIGO = :CMTMNSJS.MENS_AQUIEN;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    V_MAILAQUIEN := NULL;
    //    
    //   END;
    //    PUP_ENVIO_CORREO5(:CMTMNSJS.MENS_AQUIEN, V_MAILAQUIEN);
    //   END IF;
    // --LLAMAR AL PROCESO DE ENVIO DE CORREO
    //  PUP_ENVIO_CORREO(:CMTMNSJS.MENS_AVISAR, :GLOBAL.MAILCOMER);
    // --CREAR REGISTRO EN LA AGENDA DEL COMERCIAL
    // --           COD COMER  ,  NITTERCERO --,   TIPOGESTION,        TIPOORIGEN, ESTADO
    // PUP_INSERT_SEGXTER (:CMTMNSJS.MENS_AVISAR, :CMTMNSJS.MENS_NUMIDEN, :CMTMNSJS.MENS_OBSERVACIONES||' '||'TELEFONO '||:CMTMNSJS.MENS_TELEFONO, :CMTMNSJS.MENS_AQUIEN);--, :GLOBAL.TIPOGESTION, '007', 'GR');
    // COMMIT_FORM;
    // LIB$ALERTA('MENSAJE','SE GENERÓ CORREO ELECTRONICO A CÓDIGO COMERCIAL :'||:CMTMNSJS.MENS_AVISAR||' '||:CMTMNSJS.V_NOMBCOMER||' Y SE INSERTO UN REGISTRO EN LA AGENDA DEL COMERCIAL CON FECHA DE SEGUIMIENTO MAÑANA.',NULL, NULL, NULL,T_RESPUESTA);
    // COMMIT;
    // END;
    //#endregion
    async CMFMENU_cmtmnsjs_keyCommit() {
        console.log("Entering CMFMENU_cmtmnsjs_keyCommit");
        let T_RESPUESTA: number = null;
        let V_MAILAQUIEN: null = null;
        let V_AVISAR: string = null;
        let EXISTE: number = null;
        if (["OS", "39"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            // construct payload
            let payload1 = new Map();
            payload1.set("MENS_NUMIDEN", this.CMTMNSJS.MENS_NUMIDEN);
            // call REST API
            const result1 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_keycommit_query1", payload1);
            // get values from result
            EXISTE = result1[0].get("EXISTE");
            if (((this.CMTMNSJS.MENS_AVISAR == null) && EXISTE == 0)) {
                // CMFMENU_PU_BUSCAR_SUBGERENTE_CAPTA(V_AVISAR, GLOBAL.MAILCOMER, this.PARAMETER.get("POFCNA"));
                if ((V_AVISAR == null)) {
                    // CMFMENU_LIB$DTNERFRMA("¡ERROR!, NO SE PUDO OBTENER EL CÓDIGO DEL EJECUTIVO DE INVERSIÓN.");
                }
                // construct payload
                let payload2 = new Map();
                // payload2.MENS_NUMIDEN = : CMTMNSJS.MENS_NUMIDEN;
                // call REST API
                const result2 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_keycommit_query2", payload2);
                // construct payload
                let payload3 = new Map();
                // payload3.MENS_NUMIDEN = : CMTMNSJS.MENS_NUMIDEN;
                // call REST API
                const result3 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_keycommit_query3", payload3);
                this.oracleFormsBuiltins.commit_form();
            }
            else if (((this.CMTMNSJS.MENS_AVISAR != null) && EXISTE == 0)) {
                // construct payload
                let payload5 = new Map();
                // payload5.MENS_AVISAR = : CMTMNSJS.MENS_AVISAR;
                // payload5.MENS_NUMIDEN = : CMTMNSJS.MENS_NUMIDEN;
                // call REST API
                const result5 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_keycommit_query5", payload5);
                this.oracleFormsBuiltins.commit_form();
            }
        }
        this.oracleFormsBuiltins.commit_form();
        if (((this.CMTMNSJS.MENS_AVISAR == null) && (this.CMTMNSJS.MENS_NUMIDEN != null))) {
            // construct payload
            let payload7 = new Map();
            payload7.set("MENS_NUMIDEN", this.CMTMNSJS.MENS_NUMIDEN);
            payload7.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
            // call REST API
            const result7 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_keycommit_query7", payload7);
            // get values from result
            // CMTMNSJS.MENS_AVISAR = result7[0].get("CMTMNSJS.MENS_AVISAR");
            // CMTMNSJS.V_NOMBCOMER = result7[0].get("CMTMNSJS.V_NOMBCOMER");
            if (result7 == null || result7.length == 0) {

                this.CMTMNSJS.MENS_AVISAR = null;
                this.CMTMNSJS.V_NOMBCOMER = null;
            }

        }
        if ((this.CMTMNSJS.MENS_AQUIEN != null)) {
            // construct payload
            let payload8 = new Map();
            payload8.set("MENS_AQUIEN", this.CMTMNSJS.MENS_AQUIEN);
            // call REST API
            const result8 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_keycommit_query8", payload8);
            // get values from result
            V_MAILAQUIEN = result8[0].get("V_MAILAQUIEN");
            if (result8 == null || result8.length == 0) {

                V_MAILAQUIEN = null;
            }

            // CMFMENU_PUP_ENVIO_CORREO5(this.CMTMNSJS.MENS_AQUIEN, V_MAILAQUIEN);
        }
        // CMFMENU_PUP_ENVIO_CORREO(this.CMTMNSJS.MENS_AVISAR, GLOBAL.MAILCOMER);
        // CMFMENU_PUP_INSERT_SEGXTER(this.CMTMNSJS.MENS_AVISAR, this.CMTMNSJS.MENS_NUMIDEN, this.CMTMNSJS.MENS_OBSERVACIONES + " " + "TELEFONO " + CMTMNSJS.MENS_TELEFONO, this.CMTMNSJS.MENS_AQUIEN);
        this.oracleFormsBuiltins.commit_form();
        // CMFMENU_LIB$ALERTA("MENSAJE", "SE GENERÓ CORREO ELECTRONICO A CÓDIGO COMERCIAL :" + CMTMNSJS.MENS_AVISAR + " " + CMTMNSJS.V_NOMBCOMER + " Y SE INSERTO UN REGISTRO EN LA AGENDA DEL COMERCIAL CON FECHA DE SEGUIMIENTO MAÑANA.", null, null, null, T_RESPUESTA);
        console.log("Exiting CMFMENU_cmtmnsjs_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    // SELECT COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //    ,COM_PLA
    //    ,COM_MAIL
    //    ,COM_ESTADO 
    //    ,COM_CODUNI
    //  INTO :CMTMNSJS.V_NOMBCOMER
    //      ,:GLOBAL.PLAZA
    //      ,:GLOBAL.MAILCOMER
    //      ,:GLOBAL.ESTADO   
    //      ,:GLOBAL.PUNIDAD
    // FROM SETCOMCIA
    // WHERE COM_ESTADO = 'A'
    //   AND COM_CODIGO = :CMTMNSJS.MENS_AVISAR
    //   AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD");--ARQUITECTURA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // BEGIN
    //   SELECT DEPDES
    //     INTO :CMTMNSJS.V_DEPART
    //     FROM OPS$SEGUI.DEP
    //    WHERE DEPCOD=:CMTMNSJS.MENS_DEPART
    //      AND DEPCOD <> '00'
    //      AND DEPACO = NVL(:BTER.PAIS,'169')  --PY 13888
    //      ;
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // BEGIN
    //  SELECT SUBSTR(TDCDES,1,20)
    //    INTO :CMTMNSJS.V_CIUDAD
    //   FROM OPS$SEGUI.TDC 
    //   WHERE TDCCOD <> '000' 
    //     AND TDCDEP = :CMTMNSJS.MENS_DEPART
    //     AND TDCCOD = :CMTMNSJS.MENS_CIUDAD
    //     AND TDCPAI = (SELECT OPS$SEGUI.DEP.TDECOF
    //                      FROM OPS$SEGUI.DEP
    //                       WHERE DEPCOD <> '00'
    //                        AND DEPCOD= NVL(:BTER.DEPARTA,:CMTMNSJS.MENS_DEPART)
    //                       AND DEPACO = NVL(:BTER.PAIS,'169') ) --PY 13888
    //   ORDER BY TDCCOD;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    // BEGIN
    //  SELECT USU_NOMBRE 
    //    INTO :CMTMNSJS.V_DESCUSUARIO
    //  FROM SGUSUARIOS
    //  WHERE USU_CODIGO = :CMTMNSJS.MENS_USUARIO;
    // END;
    //#endregion
    async CMFMENU_cmtmnsjs_postQuery() {
        console.log("Entering CMFMENU_cmtmnsjs_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_AVISAR", this.CMTMNSJS.MENS_AVISAR);
        payload1.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_postquery_query1", payload1);
        // get values from result
        this.CMTMNSJS.V_NOMBCOMER = result1[0].get("CMTMNSJS.V_NOMBCOMER");
        // GLOBAL.PLAZA = result1[0].get("GLOBAL.PLAZA");
        // GLOBAL.MAILCOMER = result1[0].get("GLOBAL.MAILCOMER");
        // GLOBAL.ESTADO = result1[0].get("GLOBAL.ESTADO");
        // GLOBAL.PUNIDAD = result1[0].get("GLOBAL.PUNIDAD");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("MENS_DEPART", this.CMTMNSJS.MENS_DEPART);
        payload2.set("PAIS", this.BTER.PAIS);
        // call REST API
        const result2 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_postquery_query2", payload2);
        // get values from result
        this.CMTMNSJS.V_DEPART = result2[0].get("CMTMNSJS.V_DEPART");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("MENS_DEPART", this.CMTMNSJS.MENS_DEPART);
        payload3.set("MENS_CIUDAD", this.CMTMNSJS.MENS_CIUDAD);
        // call REST API
        const result3 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_postquery_query3", payload3);
        // get values from result
        this.CMTMNSJS.V_CIUDAD = result3[0].get("CMTMNSJS.V_CIUDAD");
        if (result3 == null || result3.length == 0) {

        }

        // construct payload
        let payload4 = new Map();
        payload4.set("MENS_USUARIO", this.CMTMNSJS.MENS_USUARIO);
        // call REST API
        const result4 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_postquery_query4", payload4);
        // get values from result
        this.CMTMNSJS.V_DESCUSUARIO = result4[0].get("CMTMNSJS.V_DESCUSUARIO");
        console.log("Exiting CMFMENU_cmtmnsjs_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_IDENTI VARCHAR2(2);
    //   TIPO_PER   VARCHAR2(2);
    //   V_TOTALTABLA NUMBER;
    //   V_AVISAR    VARCHAR2(3);
    //   T_RESPUESTA NUMBER;
    //   V_MAILAQUIEN SETCOMCIA.COM_MAIL%TYPE;
    //   
    //   --MEJORA SSS
    //   V_CANSUBGEREN  NUMBER;
    //   --MEJORA SSS
    //   
    //   
    // BEGIN
    //  --NVO CODIGO
    //        IF TO_NUMBER(:CMTMNSJS.MENS_NUMIDEN) BETWEEN 600000000 AND 699999999 OR
    //           TO_NUMBER(:CMTMNSJS.MENS_NUMIDEN) BETWEEN 800000000 AND 999999999 
    //        THEN
    //           TIPO_IDENTI := 'NI';
    //           TIPO_PER    := 'J';
    //        ELSIF TO_NUMBER(:CMTMNSJS.MENS_NUMIDEN) BETWEEN 1 AND 99999999 THEN
    //           TIPO_IDENTI := 'CC'; 
    //           TIPO_PER    := 'N';
    //        END IF;
    //          PU_INSERT_TERCEROXMENSAJE (:CMTMNSJS.MENS_NUMIDEN, TIPO_IDENTI, TIPO_PER, :CMTMNSJS.MENS_NITNOMBRE, :CMTMNSJS.MENS_DEPART, :CMTMNSJS.MENS_CIUDAD);
    //          LIB$ALERTA('MENSAJE','SE CREO EL TERCERO CON DATOS MÍNIMOS.', NULL,NULL,NULL, T_RESPUESTA);
    //        BEGIN
    //          SELECT COUNT(*)
    //            INTO V_TOTALTABLA
    //          FROM CMTASIGCOM;
    //        END;
    //        IF V_TOTALTABLA = 0 THEN
    //          INSERT INTO CMTASIGCOM
    //          (ADMON_COMERCIAL, ADMON_TERCERO, ADMON_ASIGCOM)
    //          VALUES
    //          ('002', :CMTMNSJS.MENS_NUMIDEN, 0);
    //        COMMIT;
    //        SELECT '002'
    //        INTO :CMTMNSJS.MENS_AVISAR
    //        FROM DUAL;
    //        :GLOBAL.MAILCOMER := 'FFEREZ';
    //        ELSE
    //          --
    //          --IF :this.PARAMETER.get("PCARGO") IN ('GF','JP','EI','OS') THEN PY 9179
    //          IF :this.PARAMETER.get("PCARGO") IN ('GF','JP','EI','OS') THEN 
    //            IF :CMTMNSJS.MENS_AVISAR IS NULL THEN
    //              -- BUSCA EL SUBGERENTE EN ESTE CASO EL COMERCIAL DE CAPTACIONES
    //              PU_BUSCAR_SUBGERENTE_CAPTA (V_AVISAR, :GLOBAL.MAILCOMER, :this.PARAMETER.get("POFCNA")); 
    //              --
    //              IF V_AVISAR IS NULL THEN
    //                LIB$DTNERFRMA('¡ERROR!, NO SE PUDO OBTENER EL CÓDIGO DEL EJECUTIVO DE INVERSIÓN.');
    //              END IF;
    //              INSERT INTO CMTASIGCOM
    //            (ADMON_COMERCIAL, ADMON_TERCERO, ADMON_ASIGCOM)
    //              VALUES
    //            (V_AVISAR,:CMTMNSJS.MENS_NUMIDEN , 0);
    //             --  
    //              --INSERTAR EL CLIENTE Y CRUZARLO CON EL EJECUTIVO DE INVERSIÓN.
    //              
    //              INSERT INTO SETTERSEC (TERSEC_CODIGO, TERSEC_NIT, TERSEC_DEPCOM) 
    //                VALUES (V_AVISAR,:CMTMNSJS.MENS_NUMIDEN, 'CAP' );
    //              COMMIT;
    //              COMMIT_FORM;
    //            ELSE 
    //             --INSERTAR EL CLIENTE Y CRUZARLLO CON EL EJECUTIVO DE INVERSIÓN.
    //              
    //              INSERT INTO SETTERSEC (TERSEC_CODIGO, TERSEC_NIT, TERSEC_DEPCOM) 
    //                VALUES (:CMTMNSJS.MENS_AVISAR,:CMTMNSJS.MENS_NUMIDEN, 'CAP' );
    //            COMMIT;
    //             COMMIT_FORM;
    //             V_AVISAR := :CMTMNSJS.MENS_AVISAR;
    //           END IF;
    //          ELSE
    //          PU_BUSCAR_SUBGERENTE (V_AVISAR, :GLOBAL.MAILCOMER, :this.PARAMETER.get("POFCNA"));
    //            
    //            V_CANSUBGEREN := F_SSUBGERENTE(V_AVISAR,:this.PARAMETER.get("POFCNA")); --MEJORA SSS
    //            
    //           
    //            IF V_CANSUBGEREN > 0 THEN --MEJORA SSS         
    //               INSERT INTO CMTASIGCOM
    //             (ADMON_COMERCIAL, ADMON_TERCERO, ADMON_ASIGCOM)
    //             VALUES
    //             (V_AVISAR,:CMTMNSJS.MENS_NUMIDEN , 0);
    //              --  
    //             INSERT INTO SETTERXCOM (CXT_CODIGO, CXT_NIT, CXT_DEPCOM) 
    //                 VALUES (V_AVISAR,:CMTMNSJS.MENS_NUMIDEN, 'COL' );            
    //           END IF;    --MEJORA SSS
    //           
    //           COMMIT;
    //         COMMIT_FORM;
    //           
    //         END IF;
    //      END IF;
    //      IF :CMTMNSJS.MENS_AQUIEN IS NOT NULL THEN
    //        BEGIN
    //          SELECT COM_MAIL
    //            INTO V_MAILAQUIEN
    //          FROM SETCOMCIA
    //       WHERE COM_CODIGO = :CMTMNSJS.MENS_AQUIEN
    //          AND COM_CODUNI= :this.PARAMETER.get("PUNIDAD");--ARQUITECTURA;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        V_MAILAQUIEN := NULL;
    //         END;
    //          PUP_ENVIO_CORREO5(:CMTMNSJS.MENS_AQUIEN, V_MAILAQUIEN);
    //      END IF;
    //      PUP_ENVIO_CORREO3    (V_AVISAR, :GLOBAL.MAILCOMER);  
    //      --CREAR REGISTRO EN LA AGENDA DEL COMERCIAL
    //     -- COD COMER  ,  NITTERCERO --,   TIPOGESTION,        TIPOORIGEN, ESTADO
    //     PUP_INSERT_SEGXTER (V_AVISAR, :CMTMNSJS.MENS_NUMIDEN, :CMTMNSJS.MENS_OBSERVACIONES||' '||'TELEFONO '||:CMTMNSJS.MENS_TELEFONO, :CMTMNSJS.MENS_AQUIEN);--, :GLOBAL.TIPOGESTION, '007', 'GR');
    //     COMMIT_FORM;   
    //        IF FORM_SUCCESS THEN
    //          BEGIN
    //          SELECT COM_NOMBRE||' '||COM_APELLIDO COMERCIAL 
    //               INTO  :CMTMNSJS.V_NOMBCOMER
    //            FROM CMTASIGCOM, SETCOMCIA
    //            WHERE ADMON_COMERCIAL= COM_CODIGO 
    //               AND ADMON_TERCERO  = :CMTMNSJS.MENS_NUMIDEN
    //               AND COM_CODUNI     = :this.PARAMETER.get("PUNIDAD");--ARQUITECTURA;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //            :CMTMNSJS.V_NOMBCOMER       := NULL;
    //         END;
    //          LIB$ALERTA('MENSAJE','SE ENVÍO CORREO AL SUBGERENTE CON CORREO ELECTRONICO : '||UPPER(:GLOBAL.MAILCOMER)||' '||'INFORMANDOLE QUE SE ACABA DE CREAR UN CLIENTE.', NULL,NULL,NULL, T_RESPUESTA);
    //          LIB$ALERTA('MENSAJE','EL REGISTRO FUE CREADO CON EXITO', NULL,NULL,NULL, T_RESPUESTA);
    //        END IF;
    // END;
    //#endregion
    async CMFMENU_cmtmnsjs_vGrabarter_whenButtonPressed() {
        console.log("Entering CMFMENU_cmtmnsjs_vGrabarter_whenButtonPressed");
        let TIPO_IDENTI: string = null;
        let TIPO_PER: string = null;
        let V_TOTALTABLA: number = null;
        let V_AVISAR: string = null;
        let T_RESPUESTA: number = null;
        let V_MAILAQUIEN: null = null;
        let V_CANSUBGEREN: number = null;
        if ((PLSQLBuiltins.to_number(this.CMTMNSJS.MENS_NUMIDEN) || PLSQLBuiltins.to_number(this.CMTMNSJS.MENS_NUMIDEN))) {
            TIPO_IDENTI = "NI";
            TIPO_PER = "J";
        }
        else if (PLSQLBuiltins.to_number(this.CMTMNSJS.MENS_NUMIDEN)) {
            TIPO_IDENTI = "CC";
            TIPO_PER = "N";
        }
        // CMFMENU_PU_INSERT_TERCEROXMENSAJE(this.CMTMNSJS.MENS_NUMIDEN, TIPO_IDENTI, TIPO_PER, this.CMTMNSJS.MENS_NITNOMBRE, this.CMTMNSJS.MENS_DEPART, this.CMTMNSJS.MENS_CIUDAD);
        // CMFMENU_LIB$ALERTA("MENSAJE", "SE CREO EL TERCERO CON DATOS MÍNIMOS.", null, null, null, T_RESPUESTA);
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_vgrabarter_whenbuttonpressed_query1", payload1);
        // get values from result
        V_TOTALTABLA = result1[0].get("V_TOTALTABLA");
        if (V_TOTALTABLA == 0) {
            // construct payload
            let payload2 = new Map();
            // payload2.MENS_NUMIDEN = : CMTMNSJS.MENS_NUMIDEN;
            // call REST API
            const result2 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_vgrabarter_whenbuttonpressed_query2", payload2);
            // construct payload
            let payload4 = new Map();
            payload4.set("MENS_AVISAR", this.CMTMNSJS.MENS_AVISAR);
            // call REST API
            const result4 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_vgrabarter_whenbuttonpressed_query4", payload4);
            // get values from result
            this.CMTMNSJS.MENS_AVISAR = result4[0].get("CMTMNSJS.MENS_AVISAR");
            // this.GLOBAL.MAILCOMER = "FFEREZ";
        }
        else {
            if (["GF", "JP", "EI", "OS"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
                if ((this.CMTMNSJS.MENS_AVISAR == null)) {
                    // CMFMENU_PU_BUSCAR_SUBGERENTE_CAPTA(V_AVISAR, GLOBAL.MAILCOMER, this.PARAMETER.get("POFCNA"));
                    if ((V_AVISAR == null)) {
                        // CMFMENU_LIB$DTNERFRMA("¡ERROR!, NO SE PUDO OBTENER EL CÓDIGO DEL EJECUTIVO DE INVERSIÓN.");
                    }
                    // construct payload
                    let payload5 = new Map();
                    // payload5.MENS_NUMIDEN = : CMTMNSJS.MENS_NUMIDEN;
                    // call REST API
                    const result5 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_vgrabarter_whenbuttonpressed_query5", payload5);
                    // construct payload
                    let payload6 = new Map();
                    // payload6.MENS_NUMIDEN = : CMTMNSJS.MENS_NUMIDEN;
                    // call REST API
                    const result6 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_vgrabarter_whenbuttonpressed_query6", payload6);
                    this.oracleFormsBuiltins.commit_form();
                }
                else {
                    // construct payload
                    let payload8 = new Map();
                    // payload8.MENS_AVISAR = : CMTMNSJS.MENS_AVISAR;
                    // payload8.MENS_NUMIDEN = : CMTMNSJS.MENS_NUMIDEN;
                    // call REST API
                    const result8 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_vgrabarter_whenbuttonpressed_query8", payload8);
                    this.oracleFormsBuiltins.commit_form();
                    V_AVISAR = this.CMTMNSJS.MENS_AVISAR;
                }
            }
            else {
                // CMFMENU_PU_BUSCAR_SUBGERENTE(V_AVISAR, GLOBAL.MAILCOMER, this.PARAMETER.get("POFCNA"));
                // V_CANSUBGEREN = F_SSUBGERENTE(V_AVISAR, this.PARAMETER.get("POFCNA"));
                if (V_CANSUBGEREN > 0) {
                    // construct payload
                    let payload10 = new Map();
                    // payload10.MENS_NUMIDEN = : CMTMNSJS.MENS_NUMIDEN;
                    // call REST API
                    let result10 = Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_vgrabarter_whenbuttonpressed_query10", payload10);
                    // construct payload
                    let payload11 = new Map();
                    // payload11.MENS_NUMIDEN = : CMTMNSJS.MENS_NUMIDEN;
                    // call REST API
                    let result11 = Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_vgrabarter_whenbuttonpressed_query11", payload11);
                }
                this.oracleFormsBuiltins.commit_form();
            }
        }
        if ((this.CMTMNSJS.MENS_AQUIEN != null)) {
            // construct payload
            let payload13 = new Map();
            payload13.set("MENS_AQUIEN", this.CMTMNSJS.MENS_AQUIEN);
            payload13.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
            // call REST API
            let result13 = Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_vgrabarter_whenbuttonpressed_query13", payload13);
            // get values from result
            V_MAILAQUIEN = result13[0].get("V_MAILAQUIEN");
            // if (result13 == null || result13.length == 0) {

            //     V_MAILAQUIEN = null;
            // }

            // CMFMENU_PUP_ENVIO_CORREO5(this.CMTMNSJS.MENS_AQUIEN, V_MAILAQUIEN);
        }
        // CMFMENU_PUP_ENVIO_CORREO3(V_AVISAR, GLOBAL.MAILCOMER);
        // CMFMENU_PUP_INSERT_SEGXTER(V_AVISAR, this.CMTMNSJS.MENS_NUMIDEN, this.CMTMNSJS.MENS_OBSERVACIONES + " " + "TELEFONO " + CMTMNSJS.MENS_TELEFONO, this.CMTMNSJS.MENS_AQUIEN);
        this.oracleFormsBuiltins.commit_form();
        if (this.oracleFormsBuiltins.form_success) {
            // construct payload
            let payload14 = new Map();
            payload14.set("MENS_NUMIDEN", this.CMTMNSJS.MENS_NUMIDEN);
            payload14.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
            // call REST API
            let result14 = Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_vgrabarter_whenbuttonpressed_query14", payload14);
            // get values from result
            this.CMTMNSJS.V_NOMBCOMER = result14[0].get("CMTMNSJS.V_NOMBCOMER");
            // if (result14 == null || result14.length == 0) {

            //     this.CMTMNSJS.V_NOMBCOMER = null;
            // }

            // CMFMENU_LIB$ALERTA("MENSAJE", "SE ENVÍO CORREO AL SUBGERENTE CON CORREO ELECTRONICO : " + PLSQLBuiltins.upper(GLOBAL.MAILCOMER) + " " + "INFORMANDOLE QUE SE ACABA DE CREAR UN CLIENTE.", null, null, null, T_RESPUESTA);
            // CMFMENU_LIB$ALERTA("MENSAJE", "EL REGISTRO FUE CREADO CON EXITO", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CMFMENU_cmtmnsjs_vGrabarter_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    // SELECT COM_CODIGO
    //    ,COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //  INTO :CMTMNSJS.MENS_AQUIEN
    //       ,:CMTMNSJS.V_DESCOMER
    // FROM SETCOMCIA
    // WHERE COM_ESTADO = 'A'
    //   AND COM_CODIGO = :CMTMNSJS.MENS_AQUIEN
    //   AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD");--ARQUITECTURA;
    // 
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :CMTMNSJS.MENS_AQUIEN     := NULL;
    //   :CMTMNSJS.V_DESCOMER      := NULL;
    // END;
    //#endregion
    async CMFMENU_cmtmnsjs_mensAquien_whenValidateItem() {
        console.log("Entering CMFMENU_cmtmnsjs_mensAquien_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_AQUIEN", this.CMTMNSJS.MENS_AQUIEN);
        payload1.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_mensaquien_whenvalidateitem_query1", payload1);
        // get values from result
        this.CMTMNSJS.MENS_AQUIEN = result1[0].get("CMTMNSJS.MENS_AQUIEN");
        this.CMTMNSJS.V_DESCOMER = result1[0].get("CMTMNSJS.V_DESCOMER");
        if (result1 == null || result1.length == 0) {

            this.CMTMNSJS.MENS_AQUIEN = null;
            this.CMTMNSJS.V_DESCOMER = null;
        }

        console.log("Exiting CMFMENU_cmtmnsjs_mensAquien_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //   TIPO_IDENTI VARCHAR2(2);
    //   TIPO_PER   VARCHAR2(2);
    //   V_TOTALTABLA NUMBER;
    // BEGIN
    //  
    //  --NUEVO 5627
    //   PVALTER(:CMTMNSJS.MENS_NUMIDEN); -- TERRES
    //  --NUEVO 5627
    //  
    //  BEGIN
    //   SELECT TBENAPE||' '||TBENNOM
    //     INTO  :CMTMNSJS.MENS_NITNOMBRE
    //   FROM TBEN
    //   WHERE (TBENCOD=:CMTMNSJS.MENS_NUMIDEN);
    //      --LIB$ALERTA('MENSAJE','EL TERCERO EXISTE.',NULL,NULL,NULL,T_RESPUESTA);
    //      --LLAMAR PU_CARGAR_DATOS
    //      :this.PARAMETER.get("PEXISTETER") := 'S';
    //      PU_TIPOGESTION (:this.PARAMETER.get("PEXISTETER"), :GLOBAL.TIPOGESTION);
    //      --
    //      PU_CARGAR_DATOS (:CMTMNSJS.MENS_NUMIDEN);     
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //      IF FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA INGRESARLO AHORA...') = 1 THEN     
    //        SET_ITEM_PROPERTY('CMTMNSJS.MENS_NITNOMBRE', "ENABLED", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTMNSJS.MENS_NITNOMBRE', "NAVIGABLE", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTMNSJS.MENS_DEPART', "ENABLED", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTMNSJS.MENS_DEPART', "NAVIGABLE", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTMNSJS.MENS_CIUDAD', "ENABLED", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTMNSJS.MENS_CIUDAD', "NAVIGABLE", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTMNSJS.V_GRABARTER', "ENABLED", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('CMTMNSJS.V_GRABARTER', "NAVIGABLE", "PROPERTY_TRUE");
    //        :this.PARAMETER.get("PEXISTETER") := 'N';
    //        PU_TIPOGESTION (:this.PARAMETER.get("PEXISTETER"),:GLOBAL.TIPOGESTION);
    //        --IF :this.PARAMETER.get("PCARGO") IN ('GF','JP','OS','EI') THEN PY 9179
    //        IF :this.PARAMETER.get("PCARGO") IN ('GF','JP','OS','EI','39') THEN 
    //      SET_ITEM_PROPERTY('CMTMNSJS.MENS_AVISAR', "UPDATE_COLUMN", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CMTMNSJS.MENS_AVISAR', "UPDATEABLE", "PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('CMTMNSJS.MENS_AVISAR', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('CMTMNSJS.MENS_AVISAR', "UPDATE_PERMISSION", "PROPERTY_TRUE");
    //        ELSE
    //          SET_ITEM_PROPERTY('CMTMNSJS.MENS_AVISAR', "ENABLED", "PROPERTY_FALSE");
    //          SET_ITEM_PROPERTY('CMTMNSJS.MENS_AVISAR', "NAVIGABLE", "PROPERTY_FALSE");
    //       END IF;
    //      ELSE 
    //         LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO ES OBLIGATORIO.....',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //      END IF;
    //   END;
    // END;
    //    
    //#endregion
    async CMFMENU_cmtmnsjs_mensNumiden_whenValidateItem() {
        console.log("Entering CMFMENU_cmtmnsjs_mensNumiden_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPO_IDENTI: string = null;
        let TIPO_PER: string = null;
        let V_TOTALTABLA: number = null;
        // CMFMENU_PVALTER(this.CMTMNSJS.MENS_NUMIDEN);
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_NUMIDEN", this.CMTMNSJS.MENS_NUMIDEN);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_mensnumiden_whenvalidateitem_query1", payload1);
        // get values from result
        this.CMTMNSJS.MENS_NITNOMBRE = result1[0].get("CMTMNSJS.MENS_NITNOMBRE");
        this.PARAMETER.set("PEXISTETER", "S");
        // CMFMENU_PU_TIPOGESTION(this.PARAMETER.get("PEXISTETER"), GLOBAL.TIPOGESTION);
        // CMFMENU_PU_CARGAR_DATOS(this.CMTMNSJS.MENS_NUMIDEN);
        if (result1 == null || result1.length == 0) {

            // if (FRM$ALERTA_SINO("TERCERO INEXISTENTE. DESEA INGRESARLO AHORA...") == 1) {
            //     this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_NITNOMBRE", "ENABLED", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_NITNOMBRE", "NAVIGABLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_DEPART", "ENABLED", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_DEPART", "NAVIGABLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_CIUDAD", "ENABLED", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_CIUDAD", "NAVIGABLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTMNSJS.V_GRABARTER", "ENABLED", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CMTMNSJS.V_GRABARTER", "NAVIGABLE", "PROPERTY_TRUE");
            //     this.PARAMETER.get("PEXISTETER") = "N";
            //     // CMFMENU_PU_TIPOGESTION(this.PARAMETER.get("PEXISTETER"), GLOBAL.TIPOGESTION);
            //     if (["GF", "JP", "OS", "EI", "39"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            //         this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_AVISAR", "UPDATE_COLUMN", "PROPERTY_TRUE");
            //         this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_AVISAR", "UPDATEABLE", "PROPERTY_TRUE");
            //         this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_AVISAR", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            //         this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_AVISAR", "UPDATE_PERMISSION", "PROPERTY_TRUE");
            //     }
            //     else {
            //         this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_AVISAR", "ENABLED", "PROPERTY_FALSE");
            //         this.oracleFormsBuiltins.set_item_property("CMTMNSJS.MENS_AVISAR", "NAVIGABLE", "PROPERTY_FALSE");
            //     }
            // }
            // else {
            //     // CMFMENU_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO ES OBLIGATORIO.....", null, null, null, T_RESPUESTA);
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
        }

        console.log("Exiting CMFMENU_cmtmnsjs_mensNumiden_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.MODE11 = 'NORMAL' THEN
    //   GO_BLOCK('TBEN2');
    //   EXECUTE_QUERY;
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_cmtmnsjs_mensNumiden_keyListval() {
        console.log("Entering CMFMENU_cmtmnsjs_mensNumiden_keyListval");
        if (this._SYSTEM_SERVICE.get("MODE11") == "NORMAL") {
            this.oracleFormsBuiltins.go_block("TBEN2");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CMFMENU_cmtmnsjs_mensNumiden_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT DEPDES
    //     INTO :CMTMNSJS.V_DEPART
    //     FROM OPS$SEGUI.DEP
    //    WHERE DEPCOD=:CMTMNSJS.MENS_DEPART
    //      AND DEPCOD <> '00';
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$DTNERFRMA('DEPARTAMENTO NO EXISTE');
    // END;
    //#endregion
    async CMFMENU_cmtmnsjs_mensDepart_whenValidateItem() {
        console.log("Entering CMFMENU_cmtmnsjs_mensDepart_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_DEPART", this.CMTMNSJS.MENS_DEPART);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_mensdepart_whenvalidateitem_query1", payload1);
        // get values from result
        this.CMTMNSJS.V_DEPART = result1[0].get("CMTMNSJS.V_DEPART");
        if (result1 == null || result1.length == 0) {

            // CMFMENU_LIB$DTNERFRMA("DEPARTAMENTO NO EXISTE");
        }

        console.log("Exiting CMFMENU_cmtmnsjs_mensDepart_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT SUBSTR(TDCDES,1,20)
    //    INTO :CMTMNSJS.V_CIUDAD
    //   FROM OPS$SEGUI.TDC 
    //   WHERE TDCCOD <> '000' 
    //     AND TDCDEP = :CMTMNSJS.MENS_DEPART
    //     AND TDCCOD = :CMTMNSJS.MENS_CIUDAD
    //     AND TDCPAI = (SELECT OPS$SEGUI.DEP.TDECOF
    //                      FROM OPS$SEGUI.DEP
    //                       WHERE DEPCOD <> '00'
    //                        AND DEPCOD= NVL(:BTER.DEPARTA,:CMTMNSJS.MENS_DEPART)
    //                       AND DEPACO = NVL(:BTER.PAIS,'169') ) --PY 13888
    //   ORDER BY TDCCOD;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  LIB$DTNERFRMA('CIUDAD NO EXISTE');
    // END;
    //#endregion
    async CMFMENU_cmtmnsjs_mensCiudad_whenValidateItem() {
        console.log("Entering CMFMENU_cmtmnsjs_mensCiudad_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_DEPART", this.CMTMNSJS.MENS_DEPART);
        payload1.set("MENS_CIUDAD", this.CMTMNSJS.MENS_CIUDAD);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_mensciudad_whenvalidateitem_query1", payload1);
        // get values from result
        this.CMTMNSJS.V_CIUDAD = result1[0].get("CMTMNSJS.V_CIUDAD");
        if (result1 == null || result1.length == 0) {

            // CMFMENU_LIB$DTNERFRMA("CIUDAD NO EXISTE");
        }

        console.log("Exiting CMFMENU_cmtmnsjs_mensCiudad_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // SELECT COM_CODIGO
    //    ,COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //    ,COM_PLA
    //    ,COM_MAIL
    //    ,COM_ESTADO 
    //    ,COM_CODUNI
    //  INTO :CMTMNSJS.MENS_AVISAR 
    //       ,:CMTMNSJS.V_NOMBCOMER
    //       ,:GLOBAL.PLAZA
    //       ,:GLOBAL.MAILCOMER
    //      ,:GLOBAL.ESTADO   
    //      ,:GLOBAL.PUNIDAD --ARQUITECTURA
    // FROM SETCOMCIA
    // WHERE COM_ESTADO = 'A'
    //   AND COM_CODIGO = :CMTMNSJS.MENS_AVISAR
    //   AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD");--ARQUITECTURA
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :CMTMNSJS.MENS_AVISAR       := NULL;
    //   :CMTMNSJS.V_NOMBCOMER       := NULL;
    //   :GLOBAL.PLAZA     := NULL;
    //   :GLOBAL.MAILCOMER  := NULL;
    //   :GLOBAL.ESTADO    := NULL;
    //   :GLOBAL.PUNIDAD   := NULL;
    // END;
    //#endregion
    async CMFMENU_cmtmnsjs_mensAvisar_whenValidateItem() {
        console.log("Entering CMFMENU_cmtmnsjs_mensAvisar_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("MENS_AVISAR", this.CMTMNSJS.MENS_AVISAR);
        payload1.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmtmnsjs/cmfmenu_cmtmnsjs_mensavisar_whenvalidateitem_query1", payload1);
        // get values from result
        this.CMTMNSJS.MENS_AVISAR = result1[0].get("CMTMNSJS.MENS_AVISAR");
        this.CMTMNSJS.V_NOMBCOMER = result1[0].get("CMTMNSJS.V_NOMBCOMER");
        // GLOBAL.PLAZA = result1[0].get("GLOBAL.PLAZA");
        // GLOBAL.MAILCOMER = result1[0].get("GLOBAL.MAILCOMER");
        // GLOBAL.ESTADO = result1[0].get("GLOBAL.ESTADO");
        // GLOBAL.PUNIDAD = result1[0].get("GLOBAL.PUNIDAD");
        if (result1 == null || result1.length == 0) {

            this.CMTMNSJS.MENS_AVISAR = null;
            this.CMTMNSJS.V_NOMBCOMER = null;
            // this.GLOBAL.PLAZA = null;
            // this.GLOBAL.MAILCOMER = null;
            // this.GLOBAL.ESTADO = null;
            // this.GLOBAL.PUNIDAD = null;
        }

        console.log("Exiting CMFMENU_cmtmnsjs_mensAvisar_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_RESUMEN;
    // BEGIN
    // PQBD_COL_ADMVEN.PRESUMEN(BK_DATA, :this.PARAMETER.get("PCODCOMER"), :V_PWHERE);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'SEGRESUM');
    // END;
    //#endregion
    async CMFMENU_segresum_queryProcedure() {
        console.log("Entering CMFMENU_segresum_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PRESUMEN(BK_DATA, this.PARAMETER.get("PCODCOMER"), V_PWHERE);
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "SEGRESUM");
        console.log("Exiting CMFMENU_segresum_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  VBOTON NUMBER;
    // BEGIN
    // --IF :SEGRESUM.CANTIDAD = 0 AND :this.PARAMETER.get("PCARGO") NOT IN ('GF','GC','GI','JM','AM','SR','JP') THEN
    //  IF :SEGRESUM.CANTIDAD = 0 AND :this.PARAMETER.get("PCARGO") NOT IN ('GF','GC','GI','JM','AM','SR','JP','TS','AP') THEN --PY 7818
    //  :V_VERCOMP := 'N';
    //  LIB$DTNERFRMA('NO HAY DATOS PARA CONSULTAR, SI DESEA GENERAR OTRO TIPO DE CONSULTA INGRESE POR EL MENÚ Y SELECCIONE LA OPCION "AGENDA"');
    //  --ELSIF  :SEGRESUM.CANTIDAD = 0  AND :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP') THEN
    //  ELSIF  :SEGRESUM.CANTIDAD = 0  AND :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP','TS','AP') THEN  --PY 7818
    //   LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL SELECCIONE LA OPCIÓN QUE DESEA',NULL,NULL,NULL,T_RESPUESTA);   
    //   LIB$ALERTA('MENSAJE','COMO DESEA CONSULTAR?'
    //           ,'OPCION X MENU', 'POR COMPRIMISO',NULL, VBOTON);
    //     IF VBOTON = 1 THEN 
    //       LIB$ALERTA('MENSAJE','PARA FUTURAS CONSULTAS PUEDE INGRESAR DIRECTAMENTE POR LA OPCIÓN DEL MENÚ',NULL,NULL,NULL,T_RESPUESTA);    
    //       IF :RADIO_SEMAFORO = '1' THEN --VENCIDOS
    //        :RADIO_OPCIONES := '7';
    //     :V_PWHERE := '< TRUNC(SYSDATE)';
    //     :RADIO_OPCIONES := '7';
    //    ELSIF :RADIO_SEMAFORO = '2' THEN --HOY
    //     :V_PWHERE := '= TRUNC(SYSDATE)';
    //     :RADIO_OPCIONES := '5';
    //    ELSIF :RADIO_SEMAFORO = '3' THEN -- MAÑANA
    //      :V_PWHERE := '= TRUNC((SYSDATE)+1)';
    //     :RADIO_OPCIONES := '6';
    //     END IF;
    //      GO_BLOCK('AGENDA');
    //      EXECUTE_QUERY;
    //     ELSIF VBOTON = 2 THEN
    //       LIB$ALERTA('MENSAJE','POR FAVOR SELECCIONE EL TIPO DE COMPROMISO A CONSULTAR Y DESPÚES PUEDE FILTRAR LA INFORMACIÓN POR COMERCIAL',NULL,NULL,NULL,T_RESPUESTA);   
    //     SET_ITEM_PROPERTY('V_CTPOCOMPR',"DISPLAYED", "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('V_CTPOCOMPR',ENABLED, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('V_CTPOCOMPR',NAVIGABLE, "PROPERTY_TRUE");
    //    GO_BLOCK('RESUMEN');
    //    GO_ITEM('V_CTPOCOMPR');
    //    END IF;
    // ELSE
    //   :V_CTPOCOMPR   := :SEGRESUM.TIPO;
    //  GO_BLOCK('AGENDA');
    //  EXECUTE_QUERY;
    // END IF;
    // END;
    //#endregion
    async CMFMENU_segresum_vVercomp_whenCheckboxChanged() {
        console.log("Entering CMFMENU_segresum_vVercomp_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let VBOTON: number = null;
        if ((this.SEGRESUM.CANTIDAD == 0 && ["GF", "GC", "GI", "JM", "AM", "SR", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1)) {
            this.SEGRESUM.V_VERCOMP = "N";
            // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS PARA CONSULTAR, SI DESEA GENERAR OTRO TIPO DE CONSULTA INGRESE POR EL MENÚ Y SELECCIONE LA OPCION "AGENDA");
        }
        else if ((this.SEGRESUM.CANTIDAD == 0 && ["GF", "GC", "GI", "JM", "AM", "SR", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1)) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL SELECCIONE LA OPCIÓN QUE DESEA", null, null, null, T_RESPUESTA);
            // CMFMENU_LIB$ALERTA("MENSAJE", "COMO DESEA CONSULTAR?", "OPCION X MENU", "POR COMPRIMISO", null, VBOTON);
            if (VBOTON == 1) {
                // CMFMENU_LIB$ALERTA("MENSAJE", "PARA FUTURAS CONSULTAS PUEDE INGRESAR DIRECTAMENTE POR LA OPCIÓN DEL MENÚ", null, null, null, T_RESPUESTA);
                // if (RADIO_SEMAFORO == "1") {
                //     this.SEGRESUM.RADIO_OPCIONES = "7";
                //     this.SEGRESUM.V_PWHERE = "< TRUNC(SYSDATE)";
                //     this.SEGRESUM.RADIO_OPCIONES = "7";
                // }
                // else if (RADIO_SEMAFORO == "2") {
                //     this.SEGRESUM.V_PWHERE = "= TRUNC(SYSDATE)";
                //     this.SEGRESUM.RADIO_OPCIONES = "5";
                // }
                // else if (RADIO_SEMAFORO == "3") {
                //     this.SEGRESUM.V_PWHERE = "= TRUNC((SYSDATE)+1)";
                //     this.SEGRESUM.RADIO_OPCIONES = "6";
                // }
                this.oracleFormsBuiltins.go_block("AGENDA");
                this.oracleFormsBuiltins.execute_query();
            }
            else if (VBOTON == 2) {
                // CMFMENU_LIB$ALERTA("MENSAJE", "POR FAVOR SELECCIONE EL TIPO DE COMPROMISO A CONSULTAR Y DESPÚES PUEDE FILTRAR LA INFORMACIÓN POR COMERCIAL", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.set_item_property("V_CTPOCOMPR", "DISPLAYED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("V_CTPOCOMPR", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("V_CTPOCOMPR", "NAVIGABLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.go_block("RESUMEN");
                this.oracleFormsBuiltins.go_item("V_CTPOCOMPR");
            }
        }
        else {
            // this.SEGRESUM.V_CTPOCOMPR = this.SEGRESUM.TIPO;
            this.oracleFormsBuiltins.go_block("AGENDA");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CMFMENU_segresum_vVercomp_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //   IF ERROR_CODE = 40200 THEN
    //    LIB$DTNERFRMA('DEBE LIMPIAR EL BLOQUE PARA TENER ACCESO A ESTE ÍTEM');
    //   ELSE
    //    LIB$DTNERFRMA(ERROR_TYPE||'-'||TO_CHAR(ERROR_CODE)||': '||ERROR_TEXT);
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_bnivelindica_onError() {
        console.log("Entering CMFMENU_bnivelindica_onError");
        let VBOTON: number = null;
        if (this.oracleFormsBuiltins.error_code() == 40200) {
            // CMFMENU_LIB$DTNERFRMA("DEBE LIMPIAR EL BLOQUE PARA TENER ACCESO A ESTE ÍTEM");
        }
        else {
            // CMFMENU_LIB$DTNERFRMA(this.oracleFormsBuiltins.error_type + "-" + ERROR_CODE.toString() + ": " + this.oracleFormsBuiltins.error_text);
        }
        console.log("Exiting CMFMENU_bnivelindica_onError");
    }

    //#region PLSQL
    // DECLARE
    //  V_PAIS VARCHAR2(5);
    // BEGIN 
    //  
    //  V_PAIS := :BNIVELINDICA.PAIS;
    //  
    //  IF V_PAIS = 'S' THEN
    //    :this.PARAMETER.get("PCIUDAD") := '000';
    //  ELSE
    //    :this.PARAMETER.get("PCIUDAD") := :BNIVELINDICA.CIUDAD;
    //    :BNIVELINDICA.PAIS := 'N';
    //  END IF;
    //  :this.PARAMETER.get("PGRUCOM") := :BNIVELINDICA.GRUPO;
    //  :this.PARAMETER.get("PUSUARI") := :BNIVELINDICA.COMERCIAL;
    // 
    // END;
    //  
    //#endregion
    async CMFMENU_bnivelindica_whenValidateRecord() {
        console.log("Entering CMFMENU_bnivelindica_whenValidateRecord");
        let V_PAIS: string = null;
        V_PAIS = this.BNIVELINDICA.PAIS;
        if (V_PAIS == "S") {
            this.PARAMETER.set("PCIUDAD", "000");
        }
        else {
            this.PARAMETER.set("PCIUDAD", this.BNIVELINDICA.CIUDAD);
            this.BNIVELINDICA.PAIS = "N";
        }
        this.PARAMETER.set("PGRUCOM", this.BNIVELINDICA.GRUPO);
        this.PARAMETER.set("PUSUARI", this.BNIVELINDICA.COMERCIAL);
        console.log("Exiting CMFMENU_bnivelindica_whenValidateRecord");
    }

    //#region PLSQL
    // DECLARE
    //  V_CARGO VARCHAR2(50);
    // BEGIN
    //  
    //  BEGIN
    //   SELECT USU_CARGO 
    //   INTO V_CARGO
    //   FROM SGUSUARIOS 
    //   WHERE USU_CODIGO = PLSQLBuiltins.user();
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_CARGO := '%';
    //  END;
    //  
    // IF V_CARGO IN ('GF','JP','GC','GI','SR','JP','JM','AM','OM')  THEN
    //  
    //   :BNIVELINDICA.PAIS := 'S';
    //   :BNIVELINDICA.GRUPO := '0';
    //   :BNIVELINDICA.COMERCIAL := '%';
    //   :BNIVELINDICA.DES_COM := 'TODOS LOS COMERCIALES';
    //   --
    //   IF :BNIVELINDICA.PAIS = 'S' THEN
    //     :this.PARAMETER.get("PCIUDAD") := '000';
    //   ELSE
    //     :this.PARAMETER.get("PCIUDAD") := :BNIVELINDICA.CIUDAD;
    //   END IF;
    //   :this.PARAMETER.get("PGRUCOM") := :BNIVELINDICA.GRUPO;
    //   :this.PARAMETER.get("PUSUARI") := :BNIVELINDICA.COMERCIAL;
    // ELSE
    //   
    //   
    //   :BNIVELINDICA.PAIS := 'N';
    //   :BNIVELINDICA.COMERCIAL :=  USER;
    //   :BNIVELINDICA.DES_COM := :this.PARAMETER.get("PNOMBCOMER");
    //   --
    //   IF :BNIVELINDICA.PAIS = 'S' THEN
    //     :this.PARAMETER.get("PCIUDAD") := '000';
    //   ELSE
    //     :this.PARAMETER.get("PCIUDAD") := :BNIVELINDICA.CIUDAD;
    //   END IF; 
    // 
    //   :this.PARAMETER.get("PGRUCOM") := :BNIVELINDICA.GRUPO;
    //   :this.PARAMETER.get("PUSUARI") := :BNIVELINDICA.COMERCIAL;
    // END IF;
    // 
    // END;
    //#endregion
    async CMFMENU_bnivelindica_whenCreateRecord() {
        console.log("Entering CMFMENU_bnivelindica_whenCreateRecord");
        let V_CARGO: string = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bnivelindica/cmfmenu_bnivelindica_whencreaterecord_query1", payload1);
        // get values from result
        V_CARGO = result1[0].get("V_CARGO");
        if (result1 == null || result1.length == 0) {

            V_CARGO = "%";
        }

        if (["GF", "JP", "GC", "GI", "SR", "JP", "JM", "AM", "OM"].indexOf(V_CARGO) != -1) {
            this.BNIVELINDICA.PAIS = "S";
            this.BNIVELINDICA.GRUPO = "0";
            this.BNIVELINDICA.COMERCIAL = "%";
            this.BNIVELINDICA.DES_COM = "TODOS LOS COMERCIALES";
            if (this.BNIVELINDICA.PAIS == "S") {
                this.PARAMETER.set("PCIUDAD", "000");
            }
            else {
                this.PARAMETER.set("PCIUDAD", this.BNIVELINDICA.CIUDAD);
            }
            this.PARAMETER.set("PGRUCOM", this.BNIVELINDICA.GRUPO);
            this.PARAMETER.set("PUSUARI", this.BNIVELINDICA.COMERCIAL);
        }
        else {
            this.BNIVELINDICA.PAIS = "N";
            this.BNIVELINDICA.COMERCIAL = PLSQLBuiltins.user();
            this.BNIVELINDICA.DES_COM = this.PARAMETER.get("PNOMBCOMER");
            if (this.BNIVELINDICA.PAIS == "S") {
                this.PARAMETER.set("PCIUDAD", "000");
            }
            else {
                this.PARAMETER.set("PCIUDAD", this.BNIVELINDICA.CIUDAD);
            }
            this.PARAMETER.set("PGRUCOM", this.BNIVELINDICA.GRUPO);
            this.PARAMETER.set("PUSUARI", this.BNIVELINDICA.COMERCIAL);
        }
        console.log("Exiting CMFMENU_bnivelindica_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('PAGDETIND');
    // GO_BLOCK('CMTSGINDI');
    // EXECUTE_QUERY; END;
    //#endregion
    async CMFMENU_bnivelindica_consultar_whenButtonPressed() {
        console.log("Entering CMFMENU_bnivelindica_consultar_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("PAGDETIND");
        this.oracleFormsBuiltins.go_block("CMTSGINDI");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CMFMENU_bnivelindica_consultar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --READ_IMAGE_FILE('CMVISITAS.JPG'  ,'JPG','BNIVELINDICA.POSITIVO');  
    // READ_IMAGE_FILE('EFVISITAS.JPG'  ,'JPG','BNIVELINDICA.NEGATIVO');  
    // SET_ITEM_PROPERTY('BNIVELINDICA.CONSULTAR',ENABLED, "PROPERTY_FALSE");
    // 
    // :BCALIFICACION.EFECTIVISITA := NULL; END;
    //#endregion
    async CMFMENU_bnivelindica_grupo_whenListChanged() {
        console.log("Entering CMFMENU_bnivelindica_grupo_whenListChanged");
        this.oracleFormsBuiltins.read_image_file("EFVISITAS.JPG", "JPG", "BNIVELINDICA.NEGATIVO");
        this.oracleFormsBuiltins.set_item_property("BNIVELINDICA.CONSULTAR", "ENABLED", "PROPERTY_FALSE");
        this.BCALIFICACION.EFECTIVISITA = null;
        console.log("Exiting CMFMENU_bnivelindica_grupo_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON  NUMBER;
    // BEGIN
    //  
    //  --READ_IMAGE_FILE('CMVISITAS.JPG'  ,'JPG','BNIVELINDICA.POSITIVO');  
    //  READ_IMAGE_FILE('EFVISITAS.JPG'  ,'JPG','BNIVELINDICA.NEGATIVO');  
    // 
    //  :BCALIFICACION.EFECTIVISITA := NULL;
    //  
    //  SET_ITEM_PROPERTY('BNIVELINDICA.CONSULTAR',ENABLED, "PROPERTY_FALSE"); 
    //   
    //  IF   :BNIVELINDICA.GRUPO IS NULL OR :BNIVELINDICA.COMERCIAL IS NULL OR :BPERIOINDICA.MES IS NULL OR :BPERIOINDICA.AGNO IS NULL THEN      
    //        
    //      -- IF  :BNIVELINDICA.PAIS = 'N' AND :BNIVELINDICA.CIUDAD IS NULL THEN
    //         LIB$ALERTA ('MENSAJE','SELECCIONE ALGÚN PARÁMETRO DE BUSQUEDA, POR FAVOR VERIFIQUE LA INFORMACIÓN.','ACEPTAR',NULL,NULL,VBOTON);   
    //       RAISE FORM_TRIGGER_FAILURE;    
    //    -- END IF;  
    //     
    //  ELSE   
    //   IF :BNIVELINDICA.GRUPO = 'F' THEN
    //     LIB$ALERTA ('MENSAJE','NO SE PUEDE CALCULAR LOS INDICADORES PARA EL GRUPO SELECCIONADO, POR FAVOR VERIFIQUE LA INFORMACIÓN.','ACEPTAR',NULL,NULL,VBOTON);   
    //     RAISE FORM_TRIGGER_FAILURE;
    //   ELSE  
    //    PL_CUMPLVISITA;
    //     SET_ITEM_PROPERTY('BNIVELINDICA.CONSULTAR',ENABLED, "PROPERTY_TRUE");
    //   END IF;
    //  END IF; 
    // END; 
    //#endregion
    async CMFMENU_bnivelindica_ejecutar_whenButtonPressed() {
        console.log("Entering CMFMENU_bnivelindica_ejecutar_whenButtonPressed");
        let VBOTON: number = null;
        this.oracleFormsBuiltins.read_image_file("EFVISITAS.JPG", "JPG", "BNIVELINDICA.NEGATIVO");
        this.BCALIFICACION.EFECTIVISITA = null;
        this.oracleFormsBuiltins.set_item_property("BNIVELINDICA.CONSULTAR", "ENABLED", "PROPERTY_FALSE");
        if (((((this.BNIVELINDICA.GRUPO == null) || (this.BNIVELINDICA.COMERCIAL == null)) || (this.BPERIOINDICA.MES == null)) || (this.BPERIOINDICA.AGNO == null))) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SELECCIONE ALGÚN PARÁMETRO DE BUSQUEDA, POR FAVOR VERIFIQUE LA INFORMACIÓN.", "ACEPTAR", null, null, VBOTON);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            if (this.BNIVELINDICA.GRUPO == "F") {
                // CMFMENU_LIB$ALERTA("MENSAJE", "NO SE PUEDE CALCULAR LOS INDICADORES PARA EL GRUPO SELECCIONADO, POR FAVOR VERIFIQUE LA INFORMACIÓN.", "ACEPTAR", null, null, VBOTON);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CMFMENU_PL_CUMPLVISITA();
                this.oracleFormsBuiltins.set_item_property("BNIVELINDICA.CONSULTAR", "ENABLED", "PROPERTY_TRUE");
            }
        }
        console.log("Exiting CMFMENU_bnivelindica_ejecutar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN /*DECLARE
    //  VUSU SETCOMCIA%ROWTYPE;
    // BEGIN
    //   IF :BNIVELINDICA.COMERCIAL IS NOT NULL THEN
    //    IF :BNIVELINDICA.COMERCIAL <> '%' THEN
    //       PQBD_COL_COMGEN.PCOMCIA(:BNIVELINDICA.COMERCIAL, VUSU);
    //       :BNIVELINDICA.DES_COM := VUSU.COM_NOMBRE||' '||VUSU.COM_APELLIDO;
    //     ELSE
    //       :BNIVELINDICA.DES_COM := 'TODOS LOS COMERCIALES';
    //     END IF;
    //   END IF;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //      LIB$DTNERFRMA('EL USUARIO '||:BNIVELINDICA.COMERCIAL||' NO EXISTE');
    // END;
    // 
    // */NULL; END;
    //#endregion
    async CMFMENU_bnivelindica_comercial_whenValidateItem() {
        console.log("Entering CMFMENU_bnivelindica_comercial_whenValidateItem");
        console.log("Exiting CMFMENU_bnivelindica_comercial_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :BNIVELINDICA.PAIS := 'N';
    // --READ_IMAGE_FILE('CMVISITAS.JPG'  ,'JPG','BNIVELINDICA.POSITIVO');  
    // READ_IMAGE_FILE('EFVISITAS.JPG'  ,'JPG','BNIVELINDICA.NEGATIVO');  
    // :BCALIFICACION.EFECTIVISITA := NULL;
    // SET_ITEM_PROPERTY('BNIVELINDICA.CONSULTAR',ENABLED, "PROPERTY_FALSE");
    // 
    // SET_ITEM_INSTANCE_PROPERTY('BNIVELINDICA.PAIS',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE"); END;
    //#endregion
    async CMFMENU_bnivelindica_ciudad_whenListChanged() {
        console.log("Entering CMFMENU_bnivelindica_ciudad_whenListChanged");
        this.BNIVELINDICA.PAIS = "N";
        this.oracleFormsBuiltins.read_image_file("EFVISITAS.JPG", "JPG", "BNIVELINDICA.NEGATIVO");
        this.BCALIFICACION.EFECTIVISITA = null;
        this.oracleFormsBuiltins.set_item_property("BNIVELINDICA.CONSULTAR", "ENABLED", "PROPERTY_FALSE");
        // this.oracleFormsBuiltins.set_item_instance_property("BNIVELINDICA.PAIS", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        console.log("Exiting CMFMENU_bnivelindica_ciudad_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :BNIVELINDICA.PAIS = 'S' THEN
    //   :BNIVELINDICA.CIUDAD := NULL;
    //    SET_ITEM_PROPERTY('BNIVELINDICA.CIUDAD',ENABLED,"PROPERTY_FALSE");
    //    SET_ITEM_PROPERTY('BNIVELINDICA.CONSULTAR',ENABLED, "PROPERTY_FALSE");
    // ELSE
    //   SET_ITEM_PROPERTY('BNIVELINDICA.CIUDAD',ENABLED,"PROPERTY_TRUE");  
    //   SET_ITEM_PROPERTY('BNIVELINDICA.CONSULTAR',ENABLED, "PROPERTY_FALSE");
    // END IF; END;
    //#endregion
    async CMFMENU_bnivelindica_pais_whenCheckboxChanged() {
        console.log("Entering CMFMENU_bnivelindica_pais_whenCheckboxChanged");
        if (this.BNIVELINDICA.PAIS == "S") {
            this.BNIVELINDICA.CIUDAD = null;
            this.oracleFormsBuiltins.set_item_property("BNIVELINDICA.CIUDAD", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("BNIVELINDICA.CONSULTAR", "ENABLED", "PROPERTY_FALSE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("BNIVELINDICA.CIUDAD", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("BNIVELINDICA.CONSULTAR", "ENABLED", "PROPERTY_FALSE");
        }
        console.log("Exiting CMFMENU_bnivelindica_pais_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  VARBOL  ITEM;
    //  VVALOR  VARCHAR2(15);
    //  VOPCIO  CMTOPCMEN%ROWTYPE;
    //  LPINFORMESID PARAMLIST;
    // BEGIN
    //  VARBOL := FIND_ITEM('VLTOPCIO.OPCION_DESCRI');
    //  VVALOR := FTREE.GET_TREE_NODE_PROPERTY(VARBOL, :SYSTEM.TRIGGER_NODE, FTREE.NODE_VALUE);
    //  PQBD_SEG_ADMVIS.POPC(RTRIM(LTRIM(VVALOR)), VOPCIO);
    //  :this.PARAMETER.get("POPCIONANT") := :this.PARAMETER.get("POPCION");
    //  :this.PARAMETER.get("POPCION")  := VOPCIO.OPCION_FORREP;
    //  --CÓDIGO PARA LA APERTURA DE LAS DIFERENTES OPCIONES
    //  IF VOPCIO.OPCION_FORREP IS NOT NULL THEN
    //   IF VOPCIO.OPCION_TIPOOP IN ('F','M') THEN 
    //   IF VOPCIO.OPCION_FORREP ='ADMONVTAS' THEN
    //    --IMAG
    //     --PLEERIMGEN('ADMONVTAS1.JPG','JPEG','BASE.IMBIENV');
    //     HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //     SHOW_VIEW(VOPCIO.OPCION_FORREP);
//    //     --SYNCHRONIZE;
    //   ELSE
    //    IF VOPCIO.OPCION_FORREP = 'PAG1' THEN
    //     IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //      END IF;
    //     GO_BLOCK('CMTMNSJS');
    //      ELSIF VOPCIO.OPCION_FORREP = 'PAG2' THEN    
    //      
    //       
    //      SHOW_VIEW(VOPCIO.OPCION_FORREP); 
    //      IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //      END IF;
    //      BEGIN
    //      SELECT DOMI_VLRCODIGO, INITCAP(PARA_VALOR)
    //        INTO :V_CONTAC, :V_TITULO
    //      FROM CMTDOMINIOS, CMTPARAM 
    //      WHERE DOMI_DOMINIO = 'PERMANENCIA'
    //        AND PARA_DOMINIO = 'AVISO'
    //        AND PARA_PERMANEN = DOMI_CODIGO;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //      :V_CONTAC := NULL;
    //      :V_TITULO := 'NO SE ENCONTRO PARAMETRO DE VENCIMIENTOS';
    //     END;
    //       :V_PWHERE := '< TRUNC(SYSDATE)';
    //       BEGIN
    //         SELECT COM_CODIGO, COM_CODUNI
    //               INTO :this.PARAMETER.get("PCODCOMER"), :this.PARAMETER.get("PUNIDAD") --ARQUITECTURA
    //        FROM SETCOMCIA
    //           WHERE COM_USORAC = USER
    //           AND COM_ESTADO='A'; --2012-01-19 SSS,RAT ;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        :this.PARAMETER.get("PCODCOMER") := NULL;
    //        :this.PARAMETER.get("PUNIDAD")   := NULL;
    //       END;
    //       
    //         GO_BLOCK('SEGRESUM');
    //         EXECUTE_QUERY;
    //         GO_BLOCK('SEGPRXCONTAC');
    //       EXECUTE_QUERY;
    //       GO_BLOCK('RESUMEN'); 
    //       
    //       PU_VALIDA_COMER;--PY7818
    //       
    //       
//    //     --  SYNCHRONIZE;  
    //   ELSIF VOPCIO.OPCION_FORREP = 'PAG3' THEN
    //    
    //  
    //     HIDE_VIEW('PMENU');
    //     SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_ON');
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);--20 
    //       SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590,289);
    //     --SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148,16);
    //     --SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440,289);
    //     GO_BLOCK('BTER');
    //     GO_ITEM('NIT');
//    //     --SYNCHRONIZE;
    //    ELSIF VOPCIO.OPCION_FORREP = 'PAG4' THEN
    //     IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //     END IF;
    //     HIDE_VIEW('PMENU');
    //     GO_BLOCK('PARAMETROS');
    //     SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_ON');
    //     SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);
    //       SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590,289);     
    //       GO_BLOCK('BPARAHISTO');
//    //       --SYNCHRONIZE;
    //    ELSIF VOPCIO.OPCION_FORREP = 'PAG5' THEN
    //      GO_BLOCK('AGENDA');
//    //      --SYNCHRONIZE;
    //     ELSIF VOPCIO.OPCION_FORREP = 'PG21_DETRESUM' THEN
    //      GO_BLOCK('BDETSEGPRX');
    //      EXECUTE_QUERY;
//    //      --SYNCHRONIZE;
    //    ELSIF VOPCIO.OPCION_FORREP = 'PG2_DETALLE' AND VOPCIO.OPCION_CODIGO = '6.5' THEN
    //     GO_BLOCK('BDETCTOS');
    //      EXECUTE_QUERY;
//    //      --SYNCHRONIZE;
    //      ELSIF VOPCIO.OPCION_FORREP = 'PG2_DETALLE' AND VOPCIO.OPCION_CODIGO = '6.6' THEN
    //     GO_BLOCK('BDETCLIE');
    //      EXECUTE_QUERY;
//    //      --SYNCHRONIZE;
    //      ELSIF VOPCIO.OPCION_FORREP = 'PAG6' THEN
    //       GO_BLOCK('BPERIO');
//    //       --SYNCHRONIZE;
    //      ELSIF VOPCIO.OPCION_FORREP = 'PAG61' THEN
    //       GO_BLOCK('BGEN1');
//    //       --SYNCHRONIZE;
    //      ELSIF VOPCIO.OPCION_FORREP = 'PAG62' THEN
    //       GO_BLOCK('BGEN2');
//    //       --SYNCHRONIZE;      
    //     ELSIF VOPCIO.OPCION_FORREP = 'PAG63' THEN
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148,16);
    //     SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440,289);
    //     --SHOW_VIEW(VOPCIO.OPCION_FORREP);
    //     GO_BLOCK('BESPE');
//    //     --SYNCHRONIZE;
    //     ELSIF VOPCIO.OPCION_FORREP = 'PAG8' THEN
    //      GO_BLOCK('CMTPARAM');
    //       EXECUTE_QUERY;
//    //       SYNCHRONIZE;
    //     ELSIF VOPCIO.OPCION_FORREP = 'PAG81' THEN
    //      GO_BLOCK('BCONTROL');
//    //       --SYNCHRONIZE;
    //     ELSIF VOPCIO.OPCION_FORREP = 'PAG82' THEN
    //      GO_BLOCK('CMTDOMINIOS');
    //       EXECUTE_QUERY;   
//    //       --SYNCHRONIZE;
    //     ELSIF VOPCIO.OPCION_FORREP = 'PAG9' THEN
    //       IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //      END IF;
    //     GO_BLOCK('CMTTELEMER'); 
    //     ELSE 
    //      IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //      END IF;
    //       SHOW_VIEW(VOPCIO.OPCION_FORREP);
//    //       --SYNCHRONIZE;
    //     END IF;
    //    END IF;
    //    ELSIF VOPCIO.OPCION_TIPOOP = 'R' THEN
    //     BEGIN
    // //       LPINFORMESID := CREATE_PARAMETER_LIST('LISTAREPORTES');
    //       IF ID_NULL(LPINFORMESID) THEN
    // //         LPINFORMESID := CREATE_PARAMETER_LIST('LISTAREPORTES');
    //         ADD_PARAMETER(LPINFORMESID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //         ADD_PARAMETER(LPINFORMESID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //       END IF;
//    // //       RUN_PRODUCT(REPORTS,VOPCIO.OPCION_FORREP,ASYNCHRONOUS,RUNTIME,FILESYSTEM,LPINFORMESID,NULL);
    // //       DESTROY_PARAMETER_LIST('LISTAREPORTES');
    //     END;
    //   END IF;
    //  ELSE
    //   IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //   END IF;
    //   HIDE_VIEW(VOPCIO.OPCION_FORREP);
//    //   --SYNCHRONIZE;
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_vltopcio_whenTreeNodeSelected() {
        console.log("Entering CMFMENU_vltopcio_whenTreeNodeSelected");
        let VARBOL: string = null;
        let VVALOR: string = null;
        let VOPCIO = null;
        let LPINFORMESID: number = null;
        VARBOL = this.oracleFormsBuiltins.find_item("VLTOPCIO.OPCION_DESCRI");
        // CMFMENU_PQBD_SEG_ADMVIS.POPC(RTRIM(LTRIM(VVALOR)), VOPCIO);
        this.PARAMETER.set("POPCIONANT", this.PARAMETER.get("POPCION"));
        this.PARAMETER.set("POPCION", VOPCIO.OPCION_FORREP);
        if ((VOPCIO.OPCION_FORREP != null)) {
            if (["F", "M"].indexOf(VOPCIO.OPCION_TIPOOP) != -1) {
                if (VOPCIO.OPCION_FORREP == "ADMONVTAS") {
                    this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                    this.oracleFormsBuiltins.show_view(VOPCIO.OPCION_FORREP);
                }
                else {
                    if (VOPCIO.OPCION_FORREP == "PAG1") {
                        if ((this.PARAMETER.get("POPCIONANT") != null)) {
                            this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                            this.oracleFormsBuiltins.show_view("PMENU");
                            this.oracleFormsBuiltins.go_block("VLTOPCIO");
                            this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
                        }
                        this.oracleFormsBuiltins.go_block("CMTMNSJS");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG2") {
                        this.oracleFormsBuiltins.show_view(VOPCIO.OPCION_FORREP);
                        if ((this.PARAMETER.get("POPCIONANT") != null)) {
                            this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                            this.oracleFormsBuiltins.show_view("PMENU");
                            this.oracleFormsBuiltins.go_block("VLTOPCIO");
                            this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
                        }
                        // construct payload
                        let payload1 = new Map();
                        // payload1.set("V_TITULO", V_TITULO);
                        // payload1.set("V_CONTAC", V_CONTAC);
                        // call REST API
                        const result1 = await Rest.post("/cmfmenu_vltopcio/cmfmenu_vltopcio_whentreenodeselected_query1", payload1);
                        // get values from result
                        // V_CONTAC = result1[0].get("V_CONTAC");
                        // V_TITULO = result1[0].get("V_TITULO");
                        if (result1 == null || result1.length == 0) {

                            // this.VLTOPCIO.V_CONTAC = null;
                            // this.VLTOPCIO.V_TITULO = "NO SE ENCONTRO PARAMETRO DE VENCIMIENTOS";
                        }

                        // this.VLTOPCIO.V_PWHERE = "< TRUNC(SYSDATE)";
                        // construct payload
                        let payload2 = new Map();
                        payload2.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
                        payload2.set("PCODCOMER", this.PARAMETER.get("PCODCOMER"));
                        // call REST API
                        const result2 = await Rest.post("/cmfmenu_vltopcio/cmfmenu_vltopcio_whentreenodeselected_query2", payload2);
                        // get values from result
                        this.PARAMETER.set("PCODCOMER", result2[0].get(this.PARAMETER.get("PCODCOMER")));
                        this.PARAMETER.set("PUNIDAD", result2[0].get(this.PARAMETER.get("PUNIDAD")));
                        if (result2 == null || result2.length == 0) {

                            this.PARAMETER.set("PCODCOMER", null);
                            this.PARAMETER.set("PUNIDAD", null);
                        }

                        this.oracleFormsBuiltins.go_block("SEGRESUM");
                        this.oracleFormsBuiltins.execute_query();
                        this.oracleFormsBuiltins.go_block("SEGPRXCONTAC");
                        this.oracleFormsBuiltins.execute_query();
                        this.oracleFormsBuiltins.go_block("RESUMEN");
                        // CMFMENU_PU_VALIDA_COMER();
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG3") {
                        this.oracleFormsBuiltins.hide_view("PMENU");
                        this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_ON");
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590, 289);
                        this.oracleFormsBuiltins.go_block("BTER");
                        this.oracleFormsBuiltins.go_item("NIT");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG4") {
                        if ((this.PARAMETER.get("POPCIONANT") != null)) {
                            this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                            this.oracleFormsBuiltins.show_view("PMENU");
                            this.oracleFormsBuiltins.go_block("VLTOPCIO");
                            this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
                        }
                        this.oracleFormsBuiltins.hide_view("PMENU");
                        this.oracleFormsBuiltins.go_block("PARAMETROS");
                        this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_ON");
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590, 289);
                        this.oracleFormsBuiltins.go_block("BPARAHISTO");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG5") {
                        this.oracleFormsBuiltins.go_block("AGENDA");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PG21_DETRESUM") {
                        this.oracleFormsBuiltins.go_block("BDETSEGPRX");
                        this.oracleFormsBuiltins.execute_query();
                    }
                    else if ((VOPCIO.OPCION_FORREP == "PG2_DETALLE" && VOPCIO.OPCION_CODIGO == "6.5")) {
                        this.oracleFormsBuiltins.go_block("BDETCTOS");
                        this.oracleFormsBuiltins.execute_query();
                    }
                    else if ((VOPCIO.OPCION_FORREP == "PG2_DETALLE" && VOPCIO.OPCION_CODIGO == "6.6")) {
                        this.oracleFormsBuiltins.go_block("BDETCLIE");
                        this.oracleFormsBuiltins.execute_query();
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG6") {
                        this.oracleFormsBuiltins.go_block("BPERIO");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG61") {
                        this.oracleFormsBuiltins.go_block("BGEN1");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG62") {
                        this.oracleFormsBuiltins.go_block("BGEN2");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG63") {
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148, 16);
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440, 289);
                        this.oracleFormsBuiltins.go_block("BESPE");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG8") {
                        this.oracleFormsBuiltins.go_block("CMTPARAM");
                        this.oracleFormsBuiltins.execute_query();
//                        this.oracleFormsBuiltins.synchronize();
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG81") {
                        this.oracleFormsBuiltins.go_block("BCONTROL");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG82") {
                        this.oracleFormsBuiltins.go_block("CMTDOMINIOS");
                        this.oracleFormsBuiltins.execute_query();
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG9") {
                        if ((this.PARAMETER.get("POPCIONANT") != null)) {
                            this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                            this.oracleFormsBuiltins.show_view("PMENU");
                            this.oracleFormsBuiltins.go_block("VLTOPCIO");
                            this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
                        }
                        this.oracleFormsBuiltins.go_block("CMTTELEMER");
                    }
                    else {
                        if ((this.PARAMETER.get("POPCIONANT") != null)) {
                            this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                            this.oracleFormsBuiltins.show_view("PMENU");
                            this.oracleFormsBuiltins.go_block("VLTOPCIO");
                            this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
                        }
                        this.oracleFormsBuiltins.show_view(VOPCIO.OPCION_FORREP);
                    }
                }
            }
            else if (VOPCIO.OPCION_TIPOOP == "R") {
                // LPINFORMESID = this.oracleFormsBuiltins.create_parameter_list("LISTAREPORTES");
                if (this.oracleFormsBuiltins.id_null(LPINFORMESID)) {
                    // LPINFORMESID = this.oracleFormsBuiltins.create_parameter_list("LISTAREPORTES");
                    this.oracleFormsBuiltins.add_parameter(LPINFORMESID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
                    this.oracleFormsBuiltins.add_parameter(LPINFORMESID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
                }
//                // this.oracleFormsBuiltins.run_product(REPORTS, VOPCIO.OPCION_FORREP, ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPINFORMESID, null);
                // this.oracleFormsBuiltins.destroy_parameter_list("LISTAREPORTES");
            }
        }
        else {
            if ((this.PARAMETER.get("POPCIONANT") != null)) {
                this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                this.oracleFormsBuiltins.show_view("PMENU");
                this.oracleFormsBuiltins.go_block("VLTOPCIO");
                this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
            }
            this.oracleFormsBuiltins.hide_view(VOPCIO.OPCION_FORREP);
        }
        console.log("Exiting CMFMENU_vltopcio_whenTreeNodeSelected");
    }

    //#region PLSQL
    // DECLARE
    //  VARBOL  ITEM;
    //  VVALOR  VARCHAR2(15);
    //  VOPCIO  CMTOPCMEN%ROWTYPE;
    //  LPINFORMESID PARAMLIST;
    // BEGIN
    //  VARBOL := FIND_ITEM('VLTOPCIO.OPCION_DESCRI');
    //  VVALOR := FTREE.GET_TREE_NODE_PROPERTY(VARBOL, :SYSTEM.TRIGGER_NODE, FTREE.NODE_VALUE);
    //  PQBD_SEG_ADMVIS.POPC(RTRIM(LTRIM(VVALOR)), VOPCIO);
    //  :this.PARAMETER.get("POPCIONANT") := :this.PARAMETER.get("POPCION");
    //  :this.PARAMETER.get("POPCION")  := VOPCIO.OPCION_FORREP;
    //  --CÓDIGO PARA LA APERTURA DE LAS DIFERENTES OPCIONES
    //  IF VOPCIO.OPCION_FORREP IS NOT NULL THEN
    //   IF VOPCIO.OPCION_TIPOOP IN ('F','M') THEN
    //   IF VOPCIO.OPCION_FORREP ='ADMONVTAS' THEN
    //    -- IMAG
    //     --PLEERIMGEN('ADMONVTAS1.JPG','JPEG','BASE.IMBIENV');
    //     HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //     SHOW_VIEW(VOPCIO.OPCION_FORREP);
//    //     --SYNCHRONIZE;
    //   ELSE
    //    IF VOPCIO.OPCION_FORREP = 'PAG1' THEN
    //     IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //      END IF;
    //     GO_BLOCK('CMTMNSJS');
    //      ELSIF VOPCIO.OPCION_FORREP = 'PAG2' THEN    
    //      SHOW_VIEW(VOPCIO.OPCION_FORREP); 
    //      IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //      END IF;
    //      BEGIN
    //      SELECT DOMI_VLRCODIGO, INITCAP(PARA_VALOR)
    //        INTO :V_CONTAC, :V_TITULO
    //      FROM CMTDOMINIOS, CMTPARAM 
    //      WHERE DOMI_DOMINIO = 'PERMANENCIA'
    //        AND PARA_DOMINIO = 'AVISO'
    //        AND PARA_PERMANEN = DOMI_CODIGO;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //      :V_CONTAC := NULL;
    //      :V_TITULO := 'NO SE ENCONTRO PARAMETRO DE VENCIMIENTOS';
    //     END;
    //       :V_PWHERE := '< TRUNC(SYSDATE)';
    //       BEGIN
    //         SELECT COM_CODIGO, COM_CODUNI
    //               INTO :this.PARAMETER.get("PCODCOMER") , :this.PARAMETER.get("PUNIDAD") --ARQUITECTURA
    //        FROM SETCOMCIA
    //           WHERE COM_USORAC = USER
    //           AND COM_ESTADO='A'; --2012-01-19 SSS,RAT ;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        :this.PARAMETER.get("PCODCOMER") := NULL;
    //        :this.PARAMETER.get("PUNIDAD")   := NULL;
    //       END;
    //         GO_BLOCK('SEGRESUM');
    //         EXECUTE_QUERY;
    //       GO_BLOCK('SEGPRXCONTAC');
    //       EXECUTE_QUERY;
    //       GO_BLOCK('RESUMEN');       
    //      
    //        
//    //     --  SYNCHRONIZE;  
    //    ELSIF VOPCIO.OPCION_FORREP = 'PAG3' THEN
    //     HIDE_VIEW('PMENU');
    //     SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_ON');
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);--20 
    //       SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590,289);
    //     --SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148,16);
    //     --SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440,289);
    //     GO_BLOCK('BTER');
    //     GO_ITEM('NIT');
//    //     --SYNCHRONIZE;
    //    ELSIF VOPCIO.OPCION_FORREP = 'PAG4' THEN
    //     IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //     END IF;
    //     HIDE_VIEW('PMENU');
    //     GO_BLOCK('PARAMETROS');
    //     SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_ON');
    //     SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);
    //       SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590,289);     
    //       GO_BLOCK('BPARAHISTO');
//    //       --SYNCHRONIZE;
    //    ELSIF VOPCIO.OPCION_FORREP = 'PAG5' THEN
    //      GO_BLOCK('AGENDA');
//    //      --SYNCHRONIZE;
    //     ELSIF VOPCIO.OPCION_FORREP = 'PG21_DETRESUM' THEN
    //      GO_BLOCK('BDETSEGPRX');
    //      EXECUTE_QUERY;
//    //      --SYNCHRONIZE;
    //    ELSIF VOPCIO.OPCION_FORREP = 'PG2_DETALLE' AND VOPCIO.OPCION_CODIGO = '6.5' THEN
    //     GO_BLOCK('BDETCTOS');
    //      EXECUTE_QUERY;
//    //      --SYNCHRONIZE;
    //      ELSIF VOPCIO.OPCION_FORREP = 'PG2_DETALLE' AND VOPCIO.OPCION_CODIGO = '6.6' THEN
    //     GO_BLOCK('BDETCLIE');
    //      EXECUTE_QUERY;
//    //      --SYNCHRONIZE;
    //      ELSIF VOPCIO.OPCION_FORREP = 'PAG6' THEN
    //       GO_BLOCK('BPERIO');
//    //       --SYNCHRONIZE;
    //      ELSIF VOPCIO.OPCION_FORREP = 'PAG61' THEN
    //       GO_BLOCK('BGEN1');
//    //       --SYNCHRONIZE;
    //      ELSIF VOPCIO.OPCION_FORREP = 'PAG62' THEN
    //       GO_BLOCK('BGEN2');
//    //       --SYNCHRONIZE;      
    //     ELSIF VOPCIO.OPCION_FORREP = 'PAG63' THEN
    //      SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148,16);
    //     SET_VIEW_PROPERTY (:this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440,289);
    //     --SHOW_VIEW(VOPCIO.OPCION_FORREP);
    //     GO_BLOCK('BESPE');
//    //     --SYNCHRONIZE;
    //     ELSIF VOPCIO.OPCION_FORREP = 'PAG8' THEN
    //      GO_BLOCK('CMTPARAM');
    //       EXECUTE_QUERY;
//    //       SYNCHRONIZE;
    //     ELSIF VOPCIO.OPCION_FORREP = 'PAG81' THEN
    //      GO_BLOCK('BCONTROL');
//    //       --SYNCHRONIZE;
    //     ELSIF VOPCIO.OPCION_FORREP = 'PAG82' THEN
    //      GO_BLOCK('CMTDOMINIOS');
    //       EXECUTE_QUERY;   
//    //       --SYNCHRONIZE;
    //      ELSIF VOPCIO.OPCION_FORREP = 'PAG9' THEN
    //       IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //      END IF;
    //     GO_BLOCK('CMTTELEMER');       
    //     ELSE 
    //      IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //      END IF;
    //       SHOW_VIEW(VOPCIO.OPCION_FORREP);
//    //       --SYNCHRONIZE;
    //     END IF;
    //    END IF;
    //    ELSIF VOPCIO.OPCION_TIPOOP = 'R' THEN
    //     BEGIN
    // //       LPINFORMESID := CREATE_PARAMETER_LIST('LISTAREPORTES');
    //       IF ID_NULL(LPINFORMESID) THEN
    // //         LPINFORMESID := CREATE_PARAMETER_LIST('LISTAREPORTES');
    //         ADD_PARAMETER(LPINFORMESID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //         ADD_PARAMETER(LPINFORMESID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //       END IF;
//    // //       RUN_PRODUCT(REPORTS,VOPCIO.OPCION_FORREP,ASYNCHRONOUS,RUNTIME,FILESYSTEM,LPINFORMESID,NULL);
    // //       DESTROY_PARAMETER_LIST('LISTAREPORTES');
    //     END;
    //   END IF;
    //  ELSE
    //   IF :this.PARAMETER.get("POPCIONANT") IS NOT NULL THEN
    //       HIDE_VIEW (:this.PARAMETER.get("POPCIONANT"));
    //       SHOW_VIEW('PMENU');
    //          GO_BLOCK('VLTOPCIO');
    //          SET_ITEM_PROPERTY('VER_MENU',ICON_NAME,'CLIC_OFF');
    //   END IF;
    //   HIDE_VIEW(VOPCIO.OPCION_FORREP);
//    //   --SYNCHRONIZE;
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_vltopcio_whenTreeNodeActivated() {
        console.log("Entering CMFMENU_vltopcio_whenTreeNodeActivated");
        let VARBOL = null;
        let VVALOR: string = null;
        let VOPCIO = null;
        let LPINFORMESID: number = null;
        VARBOL = this.oracleFormsBuiltins.find_item("VLTOPCIO.OPCION_DESCRI");
        // VVALOR = FTREE.this.oracleFormsBuiltins.get_tree_node_property(VARBOL, this._SYSTEM_SERVICE.get("TRIGGER_NODE"), FTREE.NODE_VALUE);
        // CMFMENU_PQBD_SEG_ADMVIS.POPC(RTRIM(LTRIM(VVALOR)), VOPCIO);
        this.PARAMETER.set("POPCIONANT", this.PARAMETER.get("POPCION"));
        this.PARAMETER.set("POPCION", VOPCIO.OPCION_FORREP);
        if ((VOPCIO.OPCION_FORREP != null)) {
            if (["F", "M"].indexOf(VOPCIO.OPCION_TIPOOP) != -1) {
                if (VOPCIO.OPCION_FORREP == "ADMONVTAS") {
                    this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                    this.oracleFormsBuiltins.show_view(VOPCIO.OPCION_FORREP);
                }
                else {
                    if (VOPCIO.OPCION_FORREP == "PAG1") {
                        if ((this.PARAMETER.get("POPCIONANT") != null)) {
                            this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                            this.oracleFormsBuiltins.show_view("PMENU");
                            this.oracleFormsBuiltins.go_block("VLTOPCIO");
                            this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
                        }
                        this.oracleFormsBuiltins.go_block("CMTMNSJS");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG2") {
                        this.oracleFormsBuiltins.show_view(VOPCIO.OPCION_FORREP);
                        if ((this.PARAMETER.get("POPCIONANT") != null)) {
                            this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                            this.oracleFormsBuiltins.show_view("PMENU");
                            this.oracleFormsBuiltins.go_block("VLTOPCIO");
                            this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
                        }
                        // construct payload
                        let payload1 = new Map();
                        // payload1.set("V_TITULO", V_TITULO);
                        // payload1.set("V_CONTAC", V_CONTAC);
                        // call REST API
                        const result1 = await Rest.post("/cmfmenu_vltopcio/cmfmenu_vltopcio_whentreenodeactivated_query1", payload1);
                        // get values from result
                        // V_CONTAC = result1[0].get("V_CONTAC");
                        // V_TITULO = result1[0].get("V_TITULO");
                        if (result1 == null || result1.length == 0) {

                            // this.VLTOPCIO.V_CONTAC = null;
                            // this.VLTOPCIO.V_TITULO = "NO SE ENCONTRO PARAMETRO DE VENCIMIENTOS";
                        }

                        // this.VLTOPCIO.V_PWHERE = "< TRUNC(SYSDATE)";
                        // construct payload
                        let payload2 = new Map();
                        payload2.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
                        payload2.set("PCODCOMER", this.PARAMETER.get("PCODCOMER"));
                        // call REST API
                        const result2 = await Rest.post("/cmfmenu_vltopcio/cmfmenu_vltopcio_whentreenodeactivated_query2", payload2);
                        // get values from result
                        this.PARAMETER.set("PCODCOMER", result2[0].get(this.PARAMETER.get("PCODCOMER")));
                        this.PARAMETER.set("PUNIDAD", result2[0].get(this.PARAMETER.get("PUNIDAD")));
                        if (result2 == null || result2.length == 0) {

                            this.PARAMETER.set("PCODCOMER", null);
                            this.PARAMETER.set("PUNIDAD", null);
                        }

                        this.oracleFormsBuiltins.go_block("SEGRESUM");
                        this.oracleFormsBuiltins.execute_query();
                        this.oracleFormsBuiltins.go_block("SEGPRXCONTAC");
                        this.oracleFormsBuiltins.execute_query();
                        this.oracleFormsBuiltins.go_block("RESUMEN");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG3") {
                        this.oracleFormsBuiltins.hide_view("PMENU");
                        this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_ON");
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590, 289);
                        this.oracleFormsBuiltins.go_block("BTER");
                        this.oracleFormsBuiltins.go_item("NIT");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG4") {
                        if ((this.PARAMETER.get("POPCIONANT") != null)) {
                            this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                            this.oracleFormsBuiltins.show_view("PMENU");
                            this.oracleFormsBuiltins.go_block("VLTOPCIO");
                            this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
                        }
                        this.oracleFormsBuiltins.hide_view("PMENU");
                        this.oracleFormsBuiltins.go_block("PARAMETROS");
                        this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_ON");
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 0, 16);
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 590, 289);
                        this.oracleFormsBuiltins.go_block("BPARAHISTO");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG5") {
                        this.oracleFormsBuiltins.go_block("AGENDA");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PG21_DETRESUM") {
                        this.oracleFormsBuiltins.go_block("BDETSEGPRX");
                        this.oracleFormsBuiltins.execute_query();
                    }
                    else if ((VOPCIO.OPCION_FORREP == "PG2_DETALLE" && VOPCIO.OPCION_CODIGO == "6.5")) {
                        this.oracleFormsBuiltins.go_block("BDETCTOS");
                        this.oracleFormsBuiltins.execute_query();
                    }
                    else if ((VOPCIO.OPCION_FORREP == "PG2_DETALLE" && VOPCIO.OPCION_CODIGO == "6.6")) {
                        this.oracleFormsBuiltins.go_block("BDETCLIE");
                        this.oracleFormsBuiltins.execute_query();
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG6") {
                        this.oracleFormsBuiltins.go_block("BPERIO");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG61") {
                        this.oracleFormsBuiltins.go_block("BGEN1");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG62") {
                        this.oracleFormsBuiltins.go_block("BGEN2");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG63") {
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "DISPLAY_POSITION", 148, 16);
                        // this.oracleFormsBuiltins.set_view_property(this.PARAMETER.get("POPCION"), "VIEW_SIZE", 440, 289);
                        this.oracleFormsBuiltins.go_block("BESPE");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG8") {
                        this.oracleFormsBuiltins.go_block("CMTPARAM");
                        this.oracleFormsBuiltins.execute_query();
//                        this.oracleFormsBuiltins.synchronize();
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG81") {
                        this.oracleFormsBuiltins.go_block("BCONTROL");
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG82") {
                        this.oracleFormsBuiltins.go_block("CMTDOMINIOS");
                        this.oracleFormsBuiltins.execute_query();
                    }
                    else if (VOPCIO.OPCION_FORREP == "PAG9") {
                        if ((this.PARAMETER.get("POPCIONANT") != null)) {
                            this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                            this.oracleFormsBuiltins.show_view("PMENU");
                            this.oracleFormsBuiltins.go_block("VLTOPCIO");
                            this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
                        }
                        this.oracleFormsBuiltins.go_block("CMTTELEMER");
                    }
                    else {
                        if ((this.PARAMETER.get("POPCIONANT") != null)) {
                            this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                            this.oracleFormsBuiltins.show_view("PMENU");
                            this.oracleFormsBuiltins.go_block("VLTOPCIO");
                            this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
                        }
                        this.oracleFormsBuiltins.show_view(VOPCIO.OPCION_FORREP);
                    }
                }
            }
            else if (VOPCIO.OPCION_TIPOOP == "R") {
                // LPINFORMESID = this.oracleFormsBuiltins.create_parameter_list("LISTAREPORTES");
                if (this.oracleFormsBuiltins.id_null(LPINFORMESID)) {
                    // LPINFORMESID = this.oracleFormsBuiltins.create_parameter_list("LISTAREPORTES");
                    this.oracleFormsBuiltins.add_parameter(LPINFORMESID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
                    this.oracleFormsBuiltins.add_parameter(LPINFORMESID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
                }
//                // this.oracleFormsBuiltins.run_product(REPORTS, VOPCIO.OPCION_FORREP, ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPINFORMESID, null);
                // this.oracleFormsBuiltins.destroy_parameter_list("LISTAREPORTES");
            }
        }
        else {
            if ((this.PARAMETER.get("POPCIONANT") != null)) {
                this.oracleFormsBuiltins.hide_view(this.PARAMETER.get("POPCIONANT"));
                this.oracleFormsBuiltins.show_view("PMENU");
                this.oracleFormsBuiltins.go_block("VLTOPCIO");
                this.oracleFormsBuiltins.set_item_property("VER_MENU", "ICON_NAME", "CLIC_OFF");
            }
            this.oracleFormsBuiltins.hide_view(VOPCIO.OPCION_FORREP);
        }
        console.log("Exiting CMFMENU_vltopcio_whenTreeNodeActivated");
    }

    //#region PLSQL
    // BEGIN NULL;
    // /*  CAHH PY 1213
    // DECLARE 
    //   CURSOR CARGOS IS 
    //   SELECT DOMI_CODIGO COD
    //      ,DOMI_VLRCODIGO DESCR
    //   FROM CMTDOMINIOS
    //  WHERE DOMI_DOMINIO = 'CARGOS'
    //  ORDER BY 1;
    //   IT_ID ITEM;
    // BEGIN
    // BEGIN
    //   IT_ID := FIND_ITEM('CMTREFER.REF_CARGO'); 
    //   IF ID_NULL( IT_ID) THEN
    //      MESSAGE('ERROR AL CARGAR LOS CARGOS DISPONIBLES');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN CARGOS LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.DESCR, ACC.COD);
    //      END LOOP;
    //   END IF;  
    // END;
    // END;
    // */; END;
    //#endregion
    async CMFMENU_cmtrefer_whenNewBlockInstance() {
        console.log("Entering CMFMENU_cmtrefer_whenNewBlockInstance");
        console.log("Exiting CMFMENU_cmtrefer_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN ----ORIGEN
    // BEGIN
    // 
    // SELECT DOMI_VLRCODIGO
    //   INTO :CMTREFER.DESC_TIPO
    //   FROM CMTDOMINIOS
    //  WHERE DOMI_DOMINIO = 'ORIGEN'
    //   AND DOMI_CODIGO  = :REF_TIPO
    //  ORDER BY 1;
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    :CMTREFER.DESC_TIPO := NULL;
    // END;
    // 
    // 
    // --COMERCIAL
    // BEGIN
    // 
    // SELECT COM_CODIGO ||' - '|| COM_NOMBRE ||' '||COM_APELLIDO
    //  INTO :CMTREFER.DESC_COMER
    //  FROM SETCOMCIA
    // WHERE COM_CODIGO = :REF_COMER
    // AND COM_ESTADO='A' --2012-01-19 SSS,RAT ;
    //  AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    // 
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    :CMTREFER.DESC_COMER := NULL;
    // END;
    // 
    // --OFICINAS DAVIVIENDA
    // BEGIN
    // 
    //  SELECT OFI_COD||' - '||OFI_DESCRIP
    //   INTO :CMTREFER.DESC_OFIDAV
    //   FROM CRTOFIDAV
    //   WHERE OFI_COD = :CMTREFER.REF_OFIDAV;
    //  
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     :CMTREFER.DESC_OFIDAV := NULL;
    // END;
    // 
    // --NOMBRE DE QUIEN REFIERE
    // BEGIN
    // 
    //  SELECT DECODE (TERPER,'N',TERNOM||' '||TERAPE,TERAPE)
    //  INTO :DSP_NOMQREF
    //  FROM TER
    //  WHERE TERCOD = :REF_NITORIG;
    //  
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     BEGIN
    //       SELECT DESORI_DESCRI DESCRI
    //        INTO :CMTREFER.DSP_NOMQREF
    //       FROM OPS$COLOCA.CMTDESORI, CMTDOMINIOS
    //       WHERE DOMI_DOMINIO = 'ORIGEN'
    //        AND   DOMI_CODIGO = DESORI_CODDOM
    //        AND   DESORI_CODDOM = :CMTREFER.REF_TIPO
    //        AND   DESORI_CODIGO = :CMTREFER.REF_DETORG;
    //      EXCEPTION
    //       WHEN NO_DATA_FOUND THEN  
    //        --:CMTREFER.DSP_NOMQREF := NULL; 6754
    //       --6754 
    //         BEGIN
    //           SELECT CONTPR_NOMBRE DESCRI
    //             INTO :CMTREFER.DSP_NOMQREF
    //           FROM OPS$COLOCA.COTCONTPR
    //           WHERE CONTPR_CODPRO = '860034313' --NIT DAVIVIENDA
    //                     AND CONTPR_CODCNT =:REF_NITORIG;
    //         EXCEPTION
    //           WHEN NO_DATA_FOUND THEN  
    //             :CMTREFER.DSP_NOMQREF := NULL;
    //         END;        
    //           
    //       --6754  
    //     END;
    //      
    //  END;
    //  
    //  
    //  --CIUDAD
    //  BEGIN
    // 
    // SELECT PLAZAS_CODIGO||'-'|| PLAZAS_DESCRI
    //  INTO :CMTREFER.DSC_CIUDAD
    // FROM   CMTPLAZAS
    // WHERE PLAZAS_CODIGO = :CMTREFER.REF_CIUDAD;
    // 
    // --MOSTRAR LA REGIONAL    COMPLA
    //  
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     :CMTREFER.DSC_CIUDAD := NULL;
    //  END;
    // 
    // 
    // --6754
    //  BEGIN
    //    SELECT SUBSTR(CAXPRO_DESCRP,3,60)
    //     INTO  :CMTREFER.REF_TIPO1
    //    FROM OPS$COLOCA.COTCONTPR,
    //           (SELECT SUBSTR (CAXPRO_DESCRP,1,1) TIPREF, CAXPRO_CODIGO, CAXPRO_DESCRP  
    //            FROM COTCAXPRO
    //            WHERE CAXPRO_CODPRO = '860034313')TR 
    //    WHERE CONTPR_CARPAD = TR.CAXPRO_CODIGO
    //      AND CONTPR_CODCNT = :REF_NITORIG
    //      AND ROWNUM = 1;  
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     BEGIN
    //       SELECT SUBSTR(CAXPRO_DESCRP,3,60) 
    //         INTO  :CMTREFER.REF_TIPO1  
    //           FROM COTCAXPRO
    //           WHERE CAXPRO_CODPRO = '860034313'
    //             AND  SUBSTR (CAXPRO_DESCRP,1,1) = '4';
    //     EXCEPTION WHEN NO_DATA_FOUND THEN  :CMTREFER.REF_TIPO1 := NULL;
    //     END; 
    //    :CMTREFER.DSC_CIUDAD := NULL;
    //  END;
    // --6754
    // 
    // 
    // 
    // --7735
    // BEGIN
    //  SELECT SC.CXT_CODIGO ||' - '|| S.COM_NOMBRE ||' '||S.COM_APELLIDO
    //   INTO :CMTREFER.DESC_COMER_ACTUAL
    //    FROM SETTERXCOM SC,SETCOMCIA S
    //    WHERE CXT_NIT = :CMTREFER.REF_NITREF
    //    AND SC.CXT_CODIGO = S.COM_CODIGO
    //    AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD");
    //  EXCEPTION WHEN NO_DATA_FOUND THEN  :CMTREFER.DESC_COMER_ACTUAL := NULL;
    // END;
    // 
    // 
    // --7735; END;
    //#endregion
    async CMFMENU_cmtrefer_postQuery() {
        console.log("Entering CMFMENU_cmtrefer_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("REF_TIPO", REF_TIPO);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmtrefer/cmfmenu_cmtrefer_postquery_query1", payload1);
        // get values from result
        this.CMTREFER.DESC_TIPO = result1[0].get("CMTREFER.DESC_TIPO");
        if (result1 == null || result1.length == 0) {

            this.CMTREFER.DESC_TIPO = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("REF_COMER", REF_COMER);
        payload2.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result2 = await Rest.post("/cmfmenu_cmtrefer/cmfmenu_cmtrefer_postquery_query2", payload2);
        // get values from result
        this.CMTREFER.DESC_COMER = result2[0].get("CMTREFER.DESC_COMER");
        if (result2 == null || result2.length == 0) {

            this.CMTREFER.DESC_COMER = null;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("REF_OFIDAV", this.CMTREFER.REF_OFIDAV);
        // call REST API
        const result3 = await Rest.post("/cmfmenu_cmtrefer/cmfmenu_cmtrefer_postquery_query3", payload3);
        // get values from result
        this.CMTREFER.DESC_OFIDAV = result3[0].get("CMTREFER.DESC_OFIDAV");
        if (result3 == null || result3.length == 0) {

            this.CMTREFER.DESC_OFIDAV = null;
        }

        // construct payload
        let payload4 = new Map();
        // payload4.set("REF_NITORIG", REF_NITORIG);
        // call REST API
        const result4 = await Rest.post("/cmfmenu_cmtrefer/cmfmenu_cmtrefer_postquery_query4", payload4);
        // get values from result
        // DSP_NOMQREF = result4[0].get("DSP_NOMQREF");
        if (result4 == null || result4.length == 0) {

            // construct payload
            let payload5 = new Map();
            payload5.set("REF_TIPO", this.CMTREFER.REF_TIPO);
            payload5.set("REF_DETORG", this.CMTREFER.REF_DETORG);
            // call REST API
            const result5 = await Rest.post("/cmfmenu_cmtrefer/cmfmenu_cmtrefer_postquery_query5", payload5);
            // get values from result
            this.CMTREFER.DSP_NOMQREF = result5[0].get("CMTREFER.DSP_NOMQREF");
            if (result5 == null || result5.length == 0) {

                // construct payload
                let payload6 = new Map();
                // payload6.set("REF_NITORIG", REF_NITORIG);
                // call REST API
                const result6 = await Rest.post("/cmfmenu_cmtrefer/cmfmenu_cmtrefer_postquery_query6", payload6);
                // get values from result
                this.CMTREFER.DSP_NOMQREF = result6[0].get("CMTREFER.DSP_NOMQREF");
                if (result6 == null || result6.length == 0) {

                    this.CMTREFER.DSP_NOMQREF = null;
                }

            }

        }

        // construct payload
        let payload7 = new Map();
        payload7.set("REF_CIUDAD", this.CMTREFER.REF_CIUDAD);
        // call REST API
        const result7 = await Rest.post("/cmfmenu_cmtrefer/cmfmenu_cmtrefer_postquery_query7", payload7);
        // get values from result
        this.CMTREFER.DSC_CIUDAD = result7[0].get("CMTREFER.DSC_CIUDAD");
        if (result7 == null || result7.length == 0) {

            this.CMTREFER.DSC_CIUDAD = null;
        }

        // construct payload
        let payload8 = new Map();
        // payload8.set("REF_NITORIG", REF_NITORIG);
        // call REST API
        const result8 = await Rest.post("/cmfmenu_cmtrefer/cmfmenu_cmtrefer_postquery_query8", payload8);
        // get values from result
        this.CMTREFER.REF_TIPO1 = result8[0].get("CMTREFER.REF_TIPO1");
        if (result8 == null || result8.length == 0) {

            // construct payload
            let payload9 = new Map();
            payload9.set("REF_TIPO1", this.CMTREFER.REF_TIPO1);
            // call REST API
            const result9 = await Rest.post("/cmfmenu_cmtrefer/cmfmenu_cmtrefer_postquery_query9", payload9);
            // get values from result
            this.CMTREFER.REF_TIPO1 = result9[0].get("CMTREFER.REF_TIPO1");
            if (result9 == null || result9.length == 0) {

                this.CMTREFER.REF_TIPO1 = null;
            }

            this.CMTREFER.DSC_CIUDAD = null;
        }

        // construct payload
        let payload10 = new Map();
        payload10.set("REF_NITREF", this.CMTREFER.REF_NITREF);
        payload10.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        let result10 = Rest.post("/cmfmenu_cmtrefer/cmfmenu_cmtrefer_postquery_query10", payload10);
        // get values from result
        this.CMTREFER.DESC_COMER_ACTUAL = result10[0].get("CMTREFER.DESC_COMER_ACTUAL");
        // if (result10 == null || result10.length == 0) {

        //     this.CMTREFER.DESC_COMER_ACTUAL = null;
        // }

        console.log("Exiting CMFMENU_cmtrefer_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  T_RESPUESTA NUMBER;
    //  V_CONT NUMBER := 0;
    //  V_MONEDA VARCHAR2(2);
    //  V_CADENA VARCHAR2(200);
    // 
    // 
    //  CURSOR C_ORIMON (P_MONEDA VARCHAR2) IS
    //    SELECT VORMVAL
    //       FROM OPS$COLOCA.VORM
    //      WHERE VORMCOD = P_MONEDA
    //            AND VORMFEC = (SELECT MAX(VORMFEC) FROM OPS$COLOCA.VORM WHERE VORMCOD = P_MONEDA);
    // 
    //  CURSOR C_SOLIDET IS
    //    SELECT SOLICR_LINEA, TERCOD, TERNOM ||' '|| TERAPE NOM,
    //            C.SOLICR_OFCSOL OFI, C.SOLICR_CODSOL CODSOL,
    //            SOLICR_ESTSOL,
    //            SOLICR_USCIAL||' '||COM_NOMBRE ||' '||COM_APELLIDO COMERCIAL,
    //            SOLICR_LINEA||' '||TLINDES LINEA,  SOLICR_VRFINA VALFINA, SOLICR_ORMONET MONEDA,
    //            SOLICR_ACTIVO
    //        FROM TER, SETCOMCIA,  OPS$COLOCA.TLIN, CRTSOLICR C
    //   WHERE 
    //           TERCOD = :CMTREFER.REF_NITREF
    //         AND TERCOD = SOLICR_NITTER
    //         AND SOLICR_USCIAL = COM_USORAC(+)
    //         AND SOLICR_LINEA  = TLINCOD(+)
    //         AND SOLICR_ESTSOL != 'RE'     --CAHH   29 MARZO 2011
    //         AND SOLICR_CODUNI = COM_CODUNI; --ARQUITECTURA
    // 
    //   CURSOR C_CONTR (P_OFI VARCHAR2, P_SOLI VARCHAR2) IS
    //    SELECT COLOFI, COLTDOC, COLCOD, PEXVAL, COLESTC||'-'||COLESTR ESTCOL, COLPLACO, 
    //        COLFAPE, COLFVEN, COLMON, COLVPN, COLMON - NVL(PEXVAL,0) VALFIN, COLORM
    //                  FROM COL, OPS$COLOCA.PEX
    //                 WHERE   COLCOD   = PEXCOD(+)
    //                     AND COLOFI   = PEXOFI(+)
    //                     AND COLTDOC  = PEXTDOC(+)
    //                     AND COLBEN   = :CMTREFER.REF_NITREF
    //                     AND COLOFSOL = P_OFI
    //                     AND COLSOLI  = P_SOLI;
    // 
    //  
    //   CURSOR C_ACTIVO (P_CTTO VARCHAR2, P_OFI VARCHAR2) IS
    //      SELECT INCPRO PROVEEDOR, TERNOM||' '||TERAPE, INCSUB ||'-'|| SUBDES TIPO, INCCLA ||'-'||CLADES CLASE
    //     FROM OPS$COLOCA.INC, TER, OPS$ACTIVOS.SUB, OPS$ACTIVOS.CLA
    //     WHERE INCCOL = P_CTTO
    //    AND INCOFC = P_OFI
    //    AND INCPRO = TERCOD
    //       AND SUBCOD = INCSUB
    //       AND CLACOD = INCCLA
    //    AND ROWNUM = 1;
    //    
    //   CURSOR C_SECTORES (P_NIT VARCHAR2)IS
    //    SELECT ENTSEC CODSEC, SECDES SECTOR, ENTSSC CODSUBSEC, TDSDES SUBSECTOR
    //     FROM ENT, TDS, SEC
    //    WHERE ENTCOD = P_NIT
    //     AND SECCOD = TDSSEC
    //     AND SECCOD = ENTSEC
    //     AND TDSCOD = ENTSSC;
    // 
    // BEGIN
    // 
    //  SHOW_VIEW ('DET_REFER');
    //  GO_BLOCK ('DETALLE_REF');
    //  CLEAR_BLOCK;
    // 
    //  --CAMBIA EL ICONO
    //    SET_ITEM_PROPERTY ('BTN_BUSCAREF',ICON_NAME,'ARROW7B');
    //  --SET_ITEM_PROPERTY ('BTN_BUSCAREF',ICON_NAME,'VOLVER');
    //    SET_ITEM_PROPERTY ('BTN_BUSCAREF',TOOLTIP_TEXT,'REGRESAR');
    //   SET_ITEM_PROPERTY ('BTN_CICLO',ICON_NAME,'CONVERT');
    //   SET_ITEM_PROPERTY ('BTN_CICLO',TOOLTIP_TEXT,'CICLO DE VIDA');
    //   SET_ITEM_PROPERTY ('BTN_LIMPIAR',ICON_NAME,'SMEXCEL');
    //   SET_ITEM_PROPERTY ('BTN_LIMPIAR',TOOLTIP_TEXT,'EXPORTAR DETALLE');
    //  
    //   SET_ITEM_PROPERTY ('BTN_SOLI',VISIBLE, "PROPERTY_TRUE");
    //   SET_ITEM_PROPERTY ('BTN_SOLI',ENABLED, "PROPERTY_TRUE"); 
    // 
//    //  SYNCHRONIZE;
    // BEGIN
    // 
    //    FOR H IN C_SOLIDET  LOOP
    //        
    //      :TXT_LINEA    := H.SOLICR_LINEA;
    //      :TXT_BEN     := H.TERCOD;
    //      :TXT_NOM     := H.NOM;
    //      :TXT_OFSOL    := H.OFI;
    //      :TXT_CODSOL    := H.CODSOL;
    //      :TXT_ESTSOL    := H.SOLICR_ESTSOL;
    //      :TXT_COMERCIAL  := H.COMERCIAL;
    //      :TXT_LINEA    := H.LINEA;
    //      :TXT_VRFINAN   := H.VALFINA;
    //      V_MONEDA     := H.MONEDA;
    //      :TXT_DESCACTIVO  := H.SOLICR_ACTIVO;
    //      
    //      ----------
    //         OPEN C_ORIMON (V_MONEDA);
    //         FETCH  C_ORIMON  INTO T_RESPUESTA;
    //         CLOSE C_ORIMON;
    //        
    //        IF V_MONEDA != 'PE' THEN
    //         :TXT_VRFINAN := :TXT_VRFINAN * T_RESPUESTA;
    //        END IF;
    //      ----------
    //      
    //      
    //      
    //       --PY 11519
    //      :DETALLE_REF.TXT_NITREF            := FBD_REFERIDO (H.TERCOD,1);
    //      :DETALLE_REF.TXT_NOMBRE            := FBD_REFERIDO (H.TERCOD,2);
    //      :DETALLE_REF.TXT_DIRECCION         := FBD_REFERIDO (H.TERCOD,3);
    //      :DETALLE_REF.TXT_TELEFONO          := FBD_REFERIDO (H.TERCOD,4);
    //      :DETALLE_REF.TXT_CONTACTO          := FBD_REFERIDO (H.TERCOD,5);
    //      :DETALLE_REF.TXT_CARGO             := FBD_REFERIDO (H.TERCOD,6);
    //      :DETALLE_REF.TXT_DESC_TIPO         := FBD_REFERIDO (H.TERCOD,7);
    //      :DETALLE_REF.TXT_REF_TIPO1         := FBD_REFERIDO (H.TERCOD,8);
    //      :DETALLE_REF.TXT_DESC_COMER        := FBD_REFERIDO (H.TERCOD,9);
    //      :DETALLE_REF.TXT_DESC_COMER_ACTUAL := FBD_REFERIDO (H.TERCOD,10);
    //         
    //       BEGIN
    //        SELECT REF_FECREG
    //        INTO :DETALLE_REF.TXT_REF_FECREG
    //        FROM CMTREFER
    //        WHERE  REF_NITREF =  H.TERCOD;
    //       END;
    //      
    //      :DETALLE_REF.TXT_DESC_OFIDAV       := FBD_REFERIDO (H.TERCOD,11);
    //      :DETALLE_REF.TXT_REF_NITORIG       := FBD_REFERIDO (H.TERCOD,13);
    //      :DETALLE_REF.TXT_DSP_NOMQREF       := FBD_REFERIDO (H.TERCOD,14);
    //      :DETALLE_REF.TXT_DSC_CIUDAD        := FBD_REFERIDO (H.TERCOD,15);
    //      
    //      --PY 11519
    //      
    //      
    //      
    //      
    //      
    //      
    //      FOR I IN C_CONTR (:TXT_OFSOL, :TXT_CODSOL) LOOP
    //       
    //         OPEN C_ORIMON (I.COLORM);
    //         FETCH  C_ORIMON  INTO T_RESPUESTA;
    //         CLOSE C_ORIMON;
    //        
    //       :TXT_OFI    := I.COLOFI;
    //       :TXT_TIPO    := I.COLTDOC;
    //       :TXT_CONTR   := I.COLCOD;
    //       :TXT_PEX    := I.PEXVAL;
    //       :TXT_ESTCOL   := I.ESTCOL;
    //       :TXT_PLAZO   := I.COLPLACO;
    //       :TXT_FINI      := I.COLFAPE;
    //       :TXT_FFIN    := I.COLFVEN;
    //       :TXT_VALORCTTO := I.COLMON;
    //       :TXT_VPN     := I.COLVPN;
    //       :TXT_VRFINAN   := I.VALFIN;
    // 
    //        IF I.COLORM != 'PE' THEN
    //         :TXT_VRFINAN := :TXT_VRFINAN * T_RESPUESTA;
    //        END IF;
    //        
    //        V_CADENA := F_ACTIVOCOL (I.COLOFI, I.COLTDOC, I.COLCOD);
    //      
    //      END LOOP;
    //    
    //     :TXT_DESCACTIVO := NVL(V_CADENA, :TXT_DESCACTIVO);
    //     V_CADENA := NULL;
    //      --     
    //       IF C_SOLIDET%NOTFOUND AND V_CONT < 1 THEN
    //            CLOSE C_SOLIDET;
    //            RAISE NO_DATA_FOUND;
    //       END IF;
    //       --
    //       FOR I IN C_ACTIVO (:TXT_CONTR, :TXT_OFI) LOOP
    //        :TXT_IDPROVEE := I.PROVEEDOR;
    //        BEGIN
    //         SELECT TERNOM||' '||TERAPE
    //           INTO :TXT_NOMPROVEE
    //           FROM TER
    //          WHERE TERCOD = I.PROVEEDOR;
    //        EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //          :TXT_NOMPROVEE := NULL;
    //        END;
    //        
    //        :TXT_ACTIVO  := I.TIPO;
    //        :TXT_CLASE  := I.CLASE;
    //       END LOOP;
    //       --
    //       FOR I IN C_SECTORES (:TXT_BEN) LOOP
    //        :TXT_CODSEC   := I.CODSEC;
    //        :TXT_SECTOR   := I.SECTOR;
    //        :TXT_CODSUBSEC := I.CODSUBSEC;
    //        :TXT_SUBSEC   := I.SUBSECTOR;
    //       END LOOP;
    //      EXIT WHEN C_SOLIDET%NOTFOUND;
    //       NEXT_RECORD;
    //       V_CONT := V_CONT + 1;
    //  END LOOP;
    // 
    //   FIRST_RECORD;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','EL TERCERO '||:CMTREFER.REF_NOMBRE||' NO TIENE RELACIONES COMERCIALES CON LEASING BOLIVAR',NULL,NULL,NULL,T_RESPUESTA);
    //    HIDE_VIEW ('DET_REFER');
    //    GO_ITEM ('CMTREFER.REF_NITREF');
    // 
//    //    SYNCHRONIZE;
    //  END;
    // END;
    //#endregion
    async CMFMENU_cmtrefer_btnDetalle_whenButtonPressed() {
        console.log("Entering CMFMENU_cmtrefer_btnDetalle_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_CONT: number = 0;
        let V_MONEDA: string = null;
        let V_CADENA: string = null;
        let result0;
        this.oracleFormsBuiltins.show_view("DET_REFER");
        this.oracleFormsBuiltins.go_block("DETALLE_REF");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.set_item_property("BTN_BUSCAREF", "ICON_NAME", "ARROW7B");
        this.oracleFormsBuiltins.set_item_property("BTN_BUSCAREF", "TOOLTIP_TEXT", "REGRESAR");
        this.oracleFormsBuiltins.set_item_property("BTN_CICLO", "ICON_NAME", "CONVERT");
        this.oracleFormsBuiltins.set_item_property("BTN_CICLO", "TOOLTIP_TEXT", "CICLO DE VIDA");
        this.oracleFormsBuiltins.set_item_property("BTN_LIMPIAR", "ICON_NAME", "SMEXCEL");
        this.oracleFormsBuiltins.set_item_property("BTN_LIMPIAR", "TOOLTIP_TEXT", "EXPORTAR DETALLE");
        this.oracleFormsBuiltins.set_item_property("BTN_SOLI", "VISIBLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("BTN_SOLI", "ENABLED", "PROPERTY_TRUE");
//        this.oracleFormsBuiltins.synchronize();
        this.oracleFormsBuiltins.first_record();
        if (result0 == null || result0.length == 0) {

            // CMFMENU_LIB$ALERTA("MENSAJE", "EL TERCERO " + CMTREFER.REF_NOMBRE + " NO TIENE RELACIONES COMERCIALES CON LEASING BOLIVAR", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.hide_view("DET_REFER");
            this.oracleFormsBuiltins.go_item("CMTREFER.REF_NITREF");
//            this.oracleFormsBuiltins.synchronize();
        }

        console.log("Exiting CMFMENU_cmtrefer_btnDetalle_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --PY  11519
    // DECLARE
    //   V_CADENA  VARCHAR2(9000);
    // BEGIN
    //  
    //  DELETE FROM OPS$ACTIVOS.ACTERRORES  WHERE ERR_PROG = 'REFERIDOS';
    //  COMMIT;
    //  
    //  GO_BLOCK('CMTREFER');
    //  FIRST_RECORD;
    //  
    //  LOOP
    //   
    //   INSERT INTO OPS$ACTIVOS.ACTERRORES (ERR_PROG , ERR_DESCRI) VALUES ('REFERIDOS',:CMTREFER.REF_NITREF);
    // 
    //   EXIT WHEN :this._SYSTEM_SERVICE.set("LAST_RECORD", 'TRUE'); 
    //   
    //   NEXT_RECORD;
    //  
    //  END LOOP;
    //  
    //  
    //  COMMIT;
    //  
    //  
    //  PBD_DETREFE ;
    //  
    //  
    // END;
    // 
    // --PY  11519; END;
    //#endregion
    async CMFMENU_cmtrefer_todosDetalles_whenButtonPressed() {
        console.log("Entering CMFMENU_cmtrefer_todosDetalles_whenButtonPressed");
        let V_CADENA: string = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/cmfmenu_cmtrefer/cmfmenu_cmtrefer_todosdetalles_whenbuttonpressed_query1", payload1);
        this.oracleFormsBuiltins.go_block("CMTREFER");
        this.oracleFormsBuiltins.first_record();
        // CMFMENU_PBD_DETREFE();
        console.log("Exiting CMFMENU_cmtrefer_todosDetalles_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_bter_postTextItem() {
        console.log("Entering CMFMENU_bter_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_bter_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bter_whenNewItemInstance() {
        console.log("Entering CMFMENU_bter_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bter_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN SET_BLOCK_PROPERTY ('BTER',"UPDATE_ALLOWED","PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY ('BTER', "INSERT_ALLOWED","PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY ('BTER',CURRENT_RECORD_ATTRIBUTE, 'DEFAULT'); END;
    //#endregion
    async CMFMENU_bter_preQuery() {
        console.log("Entering CMFMENU_bter_preQuery");
        this.oracleFormsBuiltins.set_block_property("BTER", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("BTER", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("BTER", "CURRENT_RECORD_ATTRIBUTE", "DEFAULT");
        console.log("Exiting CMFMENU_bter_preQuery");
    }

    //#region PLSQL
    // BEGIN IF GET_ITEM_PROPERTY('SEG_TIPORIG',ENABLED) = 'TRUE' THEN
    //  PUP_INSREF;
    // END IF; END;
    //#endregion
    async CMFMENU_bter_preUpdate() {
        console.log("Entering CMFMENU_bter_preUpdate");
        if (this.oracleFormsBuiltins.get_item_property("SEG_TIPORIG", "ENABLED") == "TRUE") {
            // CMFMENU_PUP_INSREF();
        }
        console.log("Exiting CMFMENU_bter_preUpdate");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_PARAM;
    // BEGIN
    // PLSQL_TABLE.POPULATE_TABLE(BK_DATA, 'BTER', PLSQL_TABLE.INSERT_RECORDS);
    // PQBD_COL_ADMVEN.P_INS(BK_DATA, :this.PARAMETER.get("PCODCOMER"), :this.PARAMETER.get("PEXISTETER"), :this.PARAMETER.get("PCARGO"));
    // END;
    //#endregion
    async CMFMENU_bter_insertProcedure() {
        console.log("Entering CMFMENU_bter_insertProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PLSQL_TABLE.POPULATE_TABLE(BK_DATA, "BTER", PLSQL_TABLE.INSERT_RECORDS);
        // CMFMENU_PQBD_COL_ADMVEN.P_INS(BK_DATA, this.PARAMETER.get("PCODCOMER"), this.PARAMETER.get("PEXISTETER"), this.PARAMETER.get("PCARGO"));
        console.log("Exiting CMFMENU_bter_insertProcedure");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_PARAM;
    // BEGIN
    // PQBD_COL_ADMVEN.P_CON(BK_DATA, :GLOBAL.AUXTERCERO, :this.PARAMETER.get("PCARGO"), :this.PARAMETER.get("PCODCOMER"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BTER');
    // END;
    //#endregion
    async CMFMENU_bter_queryProcedure() {
        console.log("Entering CMFMENU_bter_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.P_CON(BK_DATA, GLOBAL.AUXTERCERO, this.PARAMETER.get("PCARGO"), this.PARAMETER.get("PCODCOMER"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BTER");
        console.log("Exiting CMFMENU_bter_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_PARAM;
    // BEGIN
    // PLSQL_TABLE.POPULATE_TABLE(BK_DATA, 'BTER', PLSQL_TABLE.LOCK_RECORDS);
    // PQBD_COL_ADMVEN.P_LOCK(BK_DATA);
    // END;
    //#endregion
    async CMFMENU_bter_lockProcedure() {
        console.log("Entering CMFMENU_bter_lockProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PLSQL_TABLE.POPULATE_TABLE(BK_DATA, "BTER", PLSQL_TABLE.LOCK_RECORDS);
        // CMFMENU_PQBD_COL_ADMVEN.P_LOCK(BK_DATA);
        console.log("Exiting CMFMENU_bter_lockProcedure");
    }

    //#region PLSQL
    // DECLARE
    //   V_AREA VARCHAR2(5);
    // 
    // BEGIN
    // 
    //   BEGIN
    //     SELECT USU_AREA INTO V_AREA FROM SGUSUARIOS WHERE USU_CODIGO = PLSQLBuiltins.user();
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //       V_AREA := 'XXX';
    //   END;
    // 
    //   IF (:BTER.AGENCIA IS NULL OR :BTER.OFICINA IS NULL) AND (V_AREA <> 'CAP') THEN
    //     LIB$DTNERFRMA('LOS DATOS DE OFICINA Y AGENCIA SON REQUERIDOS. POR FAVOR RECTIFIQUE.');
    //   END IF;
    //   -----
    //   --  IF :BTER.SEG_TIPORIG IN ('003') AND :BTER.OFIDAV IS NULL THEN  ANTES 2011/11/21
    //   IF :BTER.SEG_TIPORIG IN ('003') AND :BTER.W_OFICINA IS NULL THEN
    //     -- AHORA 7394
    //     LIB$AJUSTAVENTANA('W_OFI', 0, 0);
    //     --GO_ITEM ('OFIDAV');
    //     SHOW_VIEW('DAT_OFI');
    //     LIB$DTNERFRMA('SI EL ORIGEN ES DAVIVIENDA O BANCAFÉ, DEBE ESPECÍFICAR LA OFICINA');
    //   END IF;
    //   -----
    // 
    //   -- PY 20902 LFAC
    // 
    //   IF :BTER.APELLIDO1 IS NULL AND :BTER.TIPPER='N'  THEN
    //   
    //     LIB$DTNERFRMA('EL DATO DE APELLIDO 1 ES REQUERIDO. POR FAVOR RECTIFIQUE.');
    //   
    //   END IF;
    // 
    //   IF :BTER.DIRECC IS NULL THEN
    //   
    //     LIB$DTNERFRMA('EL DATO DE DIRECCIÓN ES REQUERIDO. POR FAVOR RECTIFIQUE.');
    //   
    //   END IF;
    // 
    //   IF :BTER.PAIS IS NULL THEN
    //   
    //     LIB$DTNERFRMA('EL DATO DE PAÍS ES REQUERIDO. POR FAVOR RECTIFIQUE.');
    //   
    //   END IF;
    // 
    //   IF :BTER.DEPARTA IS NULL THEN
    //   
    //     LIB$DTNERFRMA('EL DATO DE DEPARTAMENTO ES REQUERIDO. POR FAVOR RECTIFIQUE.');
    //   
    //   END IF;
    // 
    //   IF :BTER.CIUDAD IS NULL THEN
    //   
    //     LIB$DTNERFRMA('EL DATO DE CIUDAD ES REQUERIDO. POR FAVOR RECTIFIQUE.');
    //   
    //   END IF;
    // 
    //   IF :BTER.TELEFONO IS NULL AND :BTER.CEL IS NULL THEN
    //   
    //     LIB$DTNERFRMA('EL DATO DE CELULAR O TELÉFONO ES REQUERIDO. POR FAVOR RECTIFIQUE.');
    //   
    //   END IF;
    // 
    // END;
    //#endregion
    async CMFMENU_bter_preInsert() {
        console.log("Entering CMFMENU_bter_preInsert");
        let V_AREA: string = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_preinsert_query1", payload1);
        // get values from result
        V_AREA = result1[0].get("V_AREA");
        if (result1 == null || result1.length == 0) {

            V_AREA = "XXX";
        }

        if ((((this.BTER.AGENCIA == null) || (this.BTER.OFICINA == null)) && V_AREA != "CAP")) {
            // CMFMENU_LIB$DTNERFRMA("LOS DATOS DE OFICINA Y AGENCIA SON REQUERIDOS. POR FAVOR RECTIFIQUE.");
        }
        if ((["003"].indexOf(this.BTER.SEG_TIPORIG) != -1 && (this.BTER.W_OFICINA == null))) {
            // CMFMENU_LIB$AJUSTAVENTANA("W_OFI", 0, 0);
            this.oracleFormsBuiltins.show_view("DAT_OFI");
            // CMFMENU_LIB$DTNERFRMA("SI EL ORIGEN ES DAVIVIENDA O BANCAFÉ, DEBE ESPECÍFICAR LA OFICINA");
        }
        if (((this.BTER.APELLIDO1 == null) && this.BTER.TIPPER == "N")) {
            // CMFMENU_LIB$DTNERFRMA("EL DATO DE APELLIDO 1 ES REQUERIDO. POR FAVOR RECTIFIQUE.");
        }
        if ((this.BTER.DIRECC == null)) {
            // CMFMENU_LIB$DTNERFRMA("EL DATO DE DIRECCIÓN ES REQUERIDO. POR FAVOR RECTIFIQUE.");
        }
        if ((this.BTER.PAIS == null)) {
            // CMFMENU_LIB$DTNERFRMA("EL DATO DE PAÍS ES REQUERIDO. POR FAVOR RECTIFIQUE.");
        }
        if ((this.BTER.DEPARTA == null)) {
            // CMFMENU_LIB$DTNERFRMA("EL DATO DE DEPARTAMENTO ES REQUERIDO. POR FAVOR RECTIFIQUE.");
        }
        if ((this.BTER.CIUDAD == null)) {
            // CMFMENU_LIB$DTNERFRMA("EL DATO DE CIUDAD ES REQUERIDO. POR FAVOR RECTIFIQUE.");
        }
        if (((this.BTER.TELEFONO == null) && (this.BTER.CEL == null))) {
            // CMFMENU_LIB$DTNERFRMA("EL DATO DE CELULAR O TELÉFONO ES REQUERIDO. POR FAVOR RECTIFIQUE.");
        }
        console.log("Exiting CMFMENU_bter_preInsert");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :this.PARAMETER.get("PCARGO") IN ('EI','JP') THEN
    //    
    //    BEGIN
    //     SELECT TERSEC_CODIGO, COM_NOMBRE ||' '||COM_APELLIDO 
    //       INTO :COMER, :V_COMERASIG
    //       FROM OPS$SEGUI.SETTERSEC, OPS$SEGUI.SETCOMCIA
    //       WHERE TERSEC_NIT = :BTER.NIT
    //         AND TERSEC_CODIGO=COM_CODIGO
    //         AND COM_CODUNI = '001' -- PROYECTO SOPORTE RDMV
    //         --AND COM_USORAC= USER --NUEVO
    //         ;
    //    END;
    //    
    // ELSE 
    //   BEGIN
    //   SELECT CXT_CODIGO, COM_NOMBRE ||' '||COM_APELLIDO 
    //     INTO :COMER, :V_COMERASIG
    //   FROM OPS$SEGUI.SETTERXCOM, SETCOMCIA
    //   WHERE CXT_NIT = :BTER.NIT
    //     AND CXT_CODIGO=COM_CODIGO
    //     AND COM_CODUNI = '001'; -- PROYECTO SOPORTE RDMV
    //   END;
    //   END IF;
    //   LIB$ALERTA('MENSAJE','NO OLVIDE QUE DEBE ACTUALIZAR LA INFORMACIÓN DEL TERCERO AL MOMENTO DE CREAR LA SOLICITUD DE CRÉDITO.',NULL,NULL,NULL,T_RESPUESTA);   
    // END;
    // 
    // --IF GET_ITEM_PROPERTY('SEG_TIPORIG',ENABLED) = 'TRUE'  THEN
    // IF GET_ITEM_PROPERTY('SEG_TIPORIG',ENABLED) = 'TRUE'  THEN
    //  PUP_INSREF;
    // END IF;
    //#endregion
    async CMFMENU_bter_postInsert() {
        console.log("Entering CMFMENU_bter_postInsert");
        let T_RESPUESTA: number = null;
        if (["EI", "JP"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            // construct payload
            let payload1 = new Map();
            payload1.set("NIT", this.BTER.NIT);
            // call REST API
            const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_postinsert_query1", payload1);
            // get values from result
            // COMER = result1[0].get("COMER");
            // V_COMERASIG = result1[0].get("V_COMERASIG");
        }
        else {
            // construct payload
            let payload2 = new Map();
            payload2.set("NIT", this.BTER.NIT);
            // call REST API
            const result2 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_postinsert_query2", payload2);
            // get values from result
            // COMER = result2[0].get("COMER");
            // V_COMERASIG = result2[0].get("V_COMERASIG");
        }
        // CMFMENU_LIB$ALERTA("MENSAJE", "NO OLVIDE QUE DEBE ACTUALIZAR LA INFORMACIÓN DEL TERCERO AL MOMENTO DE CREAR LA SOLICITUD DE CRÉDITO.", null, null, null, T_RESPUESTA);
        console.log("Exiting CMFMENU_bter_postInsert");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CMTCOMPLEAS DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTCOMPLEAS_CUR IS      
    //     SELECT 1 FROM CMTCOMPLEAS C     
    //     WHERE C.LEAS_TERCERO = :BTER.NIT;
    //   --
    //   -- END CMTCOMPLEAS DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTSEGXTER DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTSEGXTER_CUR IS      
    //     SELECT 1 FROM CMTSEGXTER C     
    //     WHERE C.SEG_NITTER = :BTER.NIT;
    //   --
    //   -- END CMTSEGXTER DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN COVPIEDRA DETAIL DECLARE SECTION
    //   --
    //   CURSOR COVPIEDRA_CUR IS      
    //     SELECT 1 FROM COVPIEDRA C     
    //     WHERE C.PIEDRA_TERCER = :BTER.NIT;
    //   --
    //   -- END COVPIEDRA DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CMTCOMPLEAS DETAIL PROGRAM SECTION
    //   --
    //   OPEN CMTCOMPLEAS_CUR;     
    //   FETCH CMTCOMPLEAS_CUR INTO DUMMY_DEFINE;     
    //   IF ( CMTCOMPLEAS_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CMTCOMPLEAS_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CMTCOMPLEAS_CUR;
    //   --
    //   -- END CMTCOMPLEAS DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTSEGXTER DETAIL PROGRAM SECTION
    //   --
    //   OPEN CMTSEGXTER_CUR;     
    //   FETCH CMTSEGXTER_CUR INTO DUMMY_DEFINE;     
    //   IF ( CMTSEGXTER_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CMTSEGXTER_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CMTSEGXTER_CUR;
    //   --
    //   -- END CMTSEGXTER DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN COVPIEDRA DETAIL PROGRAM SECTION
    //   --
    //   OPEN COVPIEDRA_CUR;     
    //   FETCH COVPIEDRA_CUR INTO DUMMY_DEFINE;     
    //   IF ( COVPIEDRA_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE COVPIEDRA_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE COVPIEDRA_CUR;
    //   --
    //   -- END COVPIEDRA DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CMFMENU_bter_onCheckDeleteMaster() {
        console.log("Entering CMFMENU_bter_onCheckDeleteMaster");
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
        console.log("Exiting CMFMENU_bter_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN
    //  LIST_VALUES(RESTRICT);
    // END;
    //#endregion
    async CMFMENU_bter_keyListval() {
        console.log("Entering CMFMENU_bter_keyListval");
        this.oracleFormsBuiltins.list_values("RESTRICT");
        console.log("Exiting CMFMENU_bter_keyListval");
    }

    //#region PLSQL
    // BEGIN IF :SYSTEM.MODE1 = 'ENTER-QUERY' AND :BTER.NIT IS NULL THEN
    //      SET_BLOCK_PROPERTY ('BTER',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       SET_BLOCK_PROPERTY ('BTER', "INSERT_ALLOWED","PROPERTY_TRUE");
    //       SET_BLOCK_PROPERTY ('BTER',CURRENT_RECORD_ATTRIBUTE, 'DEFAULT');
    //     
    //       SET_BLOCK_PROPERTY ('CMTSEGXTER',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       SET_BLOCK_PROPERTY ('CMTSEGXTER', "INSERT_ALLOWED","PROPERTY_TRUE");
    //       SET_BLOCK_PROPERTY ('CMTSEGXTER',CURRENT_RECORD_ATTRIBUTE,'DEFAULT' );
    //      ERASE('GLOBAL.AUXTERCERO');
    //       DEFAULT_VALUE(NULL,'GLOBAL.AUXTERCERO');
    //       DEFAULT_VALUE(NULL,'GLOBAL.DIGITO');
    //      EXIT_FORM;
    //       LIB$DTNERFRMA('PARA CONSUTAR LOS TERCEROS POR FAVOR UTILICE LA LISTA DE VALORES O INGRESE EL NIT SI LO CONOCE.');     
    // ELSIF :SYSTEM.MODE1 = 'NORMAL' THEN
    //     SET_BLOCK_PROPERTY ('BTER',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       SET_BLOCK_PROPERTY ('BTER', "INSERT_ALLOWED","PROPERTY_TRUE");
    //       SET_BLOCK_PROPERTY ('BTER',CURRENT_RECORD_ATTRIBUTE, 'DEFAULT');
    //       
    //       SET_BLOCK_PROPERTY ('CMTSEGXTER',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       SET_BLOCK_PROPERTY ('CMTSEGXTER', "INSERT_ALLOWED","PROPERTY_TRUE");
    //       SET_BLOCK_PROPERTY ('CMTSEGXTER',CURRENT_RECORD_ATTRIBUTE,'DEFAULT' );
    //      ERASE('GLOBAL.AUXTERCERO');
    //       DEFAULT_VALUE(NULL,'GLOBAL.AUXTERCERO');
    //       DEFAULT_VALUE(NULL,'GLOBAL.DIGITO');
    //      ABORT_QUERY;
    //      LIB$DTNERFRMA('PARA CONSUTAR LOS TERCEROS POR FAVOR UTILICE LA LISTA DE VALORES O INGRESE EL NIT SI LO CONOCE.');     
    // ELSE  
    //  ERASE('GLOBAL.AUXTERCERO');
    //  DEFAULT_VALUE(NULL,'GLOBAL.DIGITO');
    //   DEFAULT_VALUE(NULL,'GLOBAL.AUXTERCERO');
    //   :GLOBAL.AUXTERCERO := :BTER.NIT;
    //   :PARAGESTION.V_NIT :=  :GLOBAL.AUXTERCERO;
    //  EXECUTE_QUERY;
    //   GO_BLOCK('CMTSEGXTER');
    //   EXECUTE_QUERY;
    // END IF; END;
    //#endregion
    async CMFMENU_bter_keyExeqry() {
        console.log("Entering CMFMENU_bter_keyExeqry");
        if ((this._SYSTEM_SERVICE.get("MODE1") == "ENTER-QUERY" && (this.BTER.NIT == null))) {
            this.oracleFormsBuiltins.set_block_property("BTER", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("BTER", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("BTER", "CURRENT_RECORD_ATTRIBUTE", "DEFAULT");
            this.oracleFormsBuiltins.set_block_property("CMTSEGXTER", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTSEGXTER", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTSEGXTER", "CURRENT_RECORD_ATTRIBUTE", "DEFAULT");
            this.oracleFormsBuiltins.erase("GLOBAL.AUXTERCERO");
            this.oracleFormsBuiltins.default_value(null, "GLOBAL.AUXTERCERO");
            this.oracleFormsBuiltins.default_value(null, "GLOBAL.DIGITO");
            this.oracleFormsBuiltins.exit_form();
            // CMFMENU_LIB$DTNERFRMA("PARA CONSUTAR LOS TERCEROS POR FAVOR UTILICE LA LISTA DE VALORES O INGRESE EL NIT SI LO CONOCE.");
        }
        else if (this._SYSTEM_SERVICE.get("MODE1") == "NORMAL") {
            this.oracleFormsBuiltins.set_block_property("BTER", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("BTER", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("BTER", "CURRENT_RECORD_ATTRIBUTE", "DEFAULT");
            this.oracleFormsBuiltins.set_block_property("CMTSEGXTER", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTSEGXTER", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTSEGXTER", "CURRENT_RECORD_ATTRIBUTE", "DEFAULT");
            this.oracleFormsBuiltins.erase("GLOBAL.AUXTERCERO");
            this.oracleFormsBuiltins.default_value(null, "GLOBAL.AUXTERCERO");
            this.oracleFormsBuiltins.default_value(null, "GLOBAL.DIGITO");
            // this.oracleFormsBuiltins.abort_query();
            // CMFMENU_LIB$DTNERFRMA("PARA CONSUTAR LOS TERCEROS POR FAVOR UTILICE LA LISTA DE VALORES O INGRESE EL NIT SI LO CONOCE.");
        }
        else {
            this.oracleFormsBuiltins.erase("GLOBAL.AUXTERCERO");
            this.oracleFormsBuiltins.default_value(null, "GLOBAL.DIGITO");
            this.oracleFormsBuiltins.default_value(null, "GLOBAL.AUXTERCERO");
            // this.GLOBAL.AUXTERCERO = this.BTER.NIT;
            // this.PARAGESTION.V_NIT = this.GLOBAL.AUXTERCERO;
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("CMTSEGXTER");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CMFMENU_bter_keyExeqry");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_PARAM;
    // BEGIN
    // PLSQL_TABLE.POPULATE_TABLE(BK_DATA, 'BTER', PLSQL_TABLE.UPDATE_RECORDS);
    // PQBD_COL_ADMVEN.P_ACT(BK_DATA);
    // END;
    //#endregion
    async CMFMENU_bter_updateProcedure() {
        console.log("Entering CMFMENU_bter_updateProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PLSQL_TABLE.POPULATE_TABLE(BK_DATA, "BTER", PLSQL_TABLE.UPDATE_RECORDS);
        // CMFMENU_PQBD_COL_ADMVEN.P_ACT(BK_DATA);
        console.log("Exiting CMFMENU_bter_updateProcedure");
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
    //   -- BEGIN CMTCOMPLEAS DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:BTER.NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('BTER.BTER_CMTCOMPLEAS');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTCOMPLEAS');   
    //   END IF;
    //   --
    //   -- END CMTCOMPLEAS DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTSEGXTER DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:BTER.NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('BTER.BTER_CMTSEGXTER');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTSEGXTER');   
    //   END IF;
    //   --
    //   -- END CMTSEGXTER DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN COVPIEDRA DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:BTER.NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('BTER.BTER_COVPIEDRA');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'COVPIEDRA');   
    //   END IF;
    //   --
    //   -- END COVPIEDRA DETAIL PROGRAM SECTION
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
    async CMFMENU_bter_onPopulateDetails() {
        console.log("Entering CMFMENU_bter_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.BTER.NIT != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("BTER.BTER_CMTCOMPLEAS");
            // CMFMENU_QUERY_MASTER_DETAILS(REL_ID, "CMTCOMPLEAS");
        }
        if ((this.BTER.NIT != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("BTER.BTER_CMTSEGXTER");
            // CMFMENU_QUERY_MASTER_DETAILS(REL_ID, "CMTSEGXTER");
        }
        if ((this.BTER.NIT != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("BTER.BTER_COVPIEDRA");
            // CMFMENU_QUERY_MASTER_DETAILS(REL_ID, "COVPIEDRA");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CMFMENU_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CMFMENU_bter_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    //  VREQNIT VARCHAR2(1);
    // BEGIN
    // --PROCEDURE PARA APAGAR CAMPOS DEL BLOQUE SI NO ES EL MISMO COMERCIAL
    // PU_VALIDA_COMER;
    // --
    //  --:GLOBAL.AUXTERCERO:=NULL;
    // BEGIN
    //   SELECT TDVDES
    //     INTO :DESVIN
    //     FROM OPS$SEGUI.TDV
    //     WHERE TDVCOD=:BTER.PERFIL;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // BEGIN
    //   SELECT DOMI_VLRCODIGO DESCR
    //    INTO :DESVIN2
    //   FROM CMTDOMINIOS
    //   WHERE DOMI_DOMINIO = 'PERFILES'
    //     AND DOMI_CODIGO = :BTER.PERFIL2;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // BEGIN
    //   SELECT OFIDES
    //     INTO :V_OFIC
    //   FROM OPS$SEGUI.OFI
    //   WHERE (OFICOD=:BTER.OFICINA);
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // --
    // --+PY22058. JDG. 
    // /*BEGIN
    //   SELECT  AGEDES
    //     INTO  :BTER.V_AGENCIA
    //     FROM  OPS$SEGUI.AGE
    //     WHERE AGECOD=:BTER.AGENCIA
    //     AND   AGEOFC=:BTER.OFICINA;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //         LIB$DTNERFRMA('NO EXISTE LA AGENCIA, CONSULTE LISTA DE VALORES.');
    // END;*/
    // BEGIN
    //  
    //  BEGIN
    //    SELECT  AGEDES
    //      INTO  :BTER.V_AGENCIA
    //      FROM  OPS$SEGUI.AGE
    //      WHERE AGECOD=:BTER.AGENCIA
    //      AND   AGEOFC=:BTER.OFICINA;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN
    //      LIB$DTNERFRMA('NO EXISTE LA AGENCIA, CONSULTE LISTA DE VALORES.');
    //    
    //    END;
    // 
    //   EXCEPTION WHEN OTHERS THEN
    //    
    //    NULL;
    //    
    // END;      
    //     
    //     
    //   --MESSAGE(':::EL :BTER.COMER POST QUERY ::'||:BTER.COMER); 
    //   --MESSAGE(':::EL :BTER.COMER POST QUERY ::'||:BTER.COMER);    
    // --
    //   BEGIN
    //     SELECT COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //      INTO :V_COMERASIG
    //   FROM SETCOMCIA
    //     WHERE COM_CODIGO = :BTER.COMER
    //      AND COM_CODUNI = '001' ; --ARQUITECTURA
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //     :V_COMERASIG := 'NO TIENE ASIGNADO COMERCIAL';
    //     :BTER.COMER := NULL;
    //   END;
    //   --CÓDIGO PARA EL 2DO COMERCIAL
    //   BEGIN
    //     SELECT COM_NOMBRE||' '||COM_APELLIDO COMERCIAL
    //      INTO :V_NOM2DOCOMER
    //   FROM SETCOMCIA
    //     WHERE COM_CODIGO = :BTER.COMERSEC
    //      AND COM_CODUNI = '001' ;--ARQUITECTURA
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //     :V_NOM2DOCOMER := NULL;
    //     :BTER.COMERSEC := NULL;
    //   END;
    //   --
    //   
    // 
    //   
    // --KARO
    // 
    // --PY 13888
    // 
    // 
    // BEGIN
    // SELECT P.TDPDES PAIS 
    //  INTO :BTER.V_PAIS
    // FROM TDP P  WHERE 
    //     P.TDPACO = (SELECT NVL(ENTPAIS,'169') FROM ENT WHERE ENTCOD= :BTER.NIT);
    //     
    //     EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // --PY 13888
    //  
    // BEGIN
    //   SELECT DEPDES
    //     INTO :V_DESDEPAR
    //     FROM OPS$SEGUI.DEP
    //    WHERE DEPCOD=:BTER.DEPARTA
    //      AND DEPCOD <> '00'
    //      AND DEPACO = NVL(:BTER.PAIS,'169')  --PY 13888
    //      ;
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    //   --LIB$DTNERFRMA('DEPARTAMENTO NO EXISTE');
    // END;
    // BEGIN
    //  SELECT SUBSTR(TDCDES,1,20)
    //    INTO :V_DESCCIUDAD
    //   FROM OPS$SEGUI.TDC 
    //   WHERE TDCCOD <> '000' 
    //     AND TDCDEP = :BTER.DEPARTA
    //     AND TDCCOD = :BTER.CIUDAD
    //     AND TDCPAI = (SELECT OPS$SEGUI.DEP.TDECOF
    //                      FROM OPS$SEGUI.DEP
    //                       WHERE DEPCOD <> '00'
    //                        AND DEPCOD=:BTER.DEPARTA
    //                       AND DEPACO = NVL(:BTER.PAIS,'169') ) --PY 13888
    //     ;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    // NULL;
    // END;
    // --KARO
    // 
    // PU_HABILIT_ITEMS;
    // 
    //   --+PY22058. JDG. 
    //  BEGIN
    //   
    //   SELECT DECODE( NVL( TERCLI, 'L' ), 'L', 'LEASING', 'V', 'VEHICULO', 'A', 'LEAS+VEHI', NULL )
    //     INTO :BTER.TERCLI_DESCRI
    //     FROM TER
    //    WHERE TERCOD = :BTER.NIT;
    //    
    //  EXCEPTION
    //   
    //  WHEN OTHERS THEN
    //  
    //    :BTER.TERCLI_DESCRI := NULL;
    //  
    //  END;
    // 
    // END;
    //#endregion
    async CMFMENU_bter_postQuery() {
        console.log("Entering CMFMENU_bter_postQuery");
        let VREQNIT: string = null;
        // CMFMENU_PU_VALIDA_COMER();
        // construct payload
        let payload1 = new Map();
        payload1.set("PERFIL", this.BTER.PERFIL);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_postquery_query1", payload1);
        // get values from result
        // DESVIN = result1[0].get("DESVIN");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("PERFIL2", this.BTER.PERFIL2);
        // call REST API
        const result2 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_postquery_query2", payload2);
        // get values from result
        // DESVIN2 = result2[0].get("DESVIN2");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("OFICINA", this.BTER.OFICINA);
        // call REST API
        const result3 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_postquery_query3", payload3);
        // get values from result
        // V_OFIC = result3[0].get("V_OFIC");
        if (result3 == null || result3.length == 0) {

        }

        let result4 = new Map();
        try {

            // construct payload
            let payload4 = new Map();
            payload4.set("AGENCIA", this.BTER.AGENCIA);
            payload4.set("OFICINA", this.BTER.OFICINA);
            // call REST API
            const result4 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_postquery_query4", payload4);
            // get values from result
            this.BTER.V_AGENCIA = result4[0].get("BTER.V_AGENCIA");
            if (result4 == null || result4.length == 0) {

                // CMFMENU_LIB$DTNERFRMA("NO EXISTE LA AGENCIA, CONSULTE LISTA DE VALORES.");
            }

        } catch (ex) {

        }

        // construct payload
        let payload5 = new Map();
        payload5.set("COMER", this.BTER.COMER);
        // call REST API
        const result5 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_postquery_query5", payload5);
        // get values from result
        // V_COMERASIG = result5[0].get("V_COMERASIG");
        if (result5 == null || result5.length == 0) {

            this.BTER.V_COMERASIG = "NO TIENE ASIGNADO COMERCIAL";
            this.BTER.COMER = null;
        }

        // construct payload
        let payload6 = new Map();
        payload6.set("COMERSEC", this.BTER.COMERSEC);
        // call REST API
        const result6 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_postquery_query6", payload6);
        // get values from result
        // V_NOM2DOCOMER = result6[0].get("V_NOM2DOCOMER");
        if (result6 == null || result6.length == 0) {

            this.BTER.V_NOM2DOCOMER = null;
            this.BTER.COMERSEC = null;
        }

        // construct payload
        let payload7 = new Map();
        payload7.set("NIT", this.BTER.NIT);
        payload7.set("V_PAIS", this.BTER.V_PAIS);
        // call REST API
        const result7 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_postquery_query7", payload7);
        // get values from result
        this.BTER.V_PAIS = result7[0].get("BTER.V_PAIS");
        if (result7 == null || result7.length == 0) {

        }

        // construct payload
        let payload8 = new Map();
        payload8.set("DEPARTA", this.BTER.DEPARTA);
        payload8.set("PAIS", this.BTER.PAIS);
        // call REST API
        const result8 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_postquery_query8", payload8);
        // get values from result
        // V_DESDEPAR = result8[0].get("V_DESDEPAR");
        if (result8 == null || result8.length == 0) {

        }

        // construct payload
        let payload9 = new Map();
        payload9.set("DEPARTA", this.BTER.DEPARTA);
        payload9.set("CIUDAD", this.BTER.CIUDAD);
        // call REST API
        const result9 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_postquery_query9", payload9);
        // get values from result
        // V_DESCCIUDAD = result9[0].get("V_DESCCIUDAD");
        if (result9 == null || result9.length == 0) {

        }

        // CMFMENU_PU_HABILIT_ITEMS();
        let result10 = new Map();
        try {

            // construct payload
            let payload10 = new Map();
            payload10.set("NIT", this.BTER.NIT);
            // call REST API
            // result10 = Rest.post("/cmfmenu_bter/cmfmenu_bter_postquery_query10", payload10);
            // get values from result
            this.BTER.TERCLI_DESCRI = result10[0].get("BTER.TERCLI_DESCRI");
        } catch (ex) {

            this.BTER.TERCLI_DESCRI = null;
        }

        console.log("Exiting CMFMENU_bter_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :CONTAC IS NOT NULL THEN
    //  PU_LLAMAR_TERCERO(:BTER.NIT, NULL,NULL, NULL,'O');
    // END IF;
    // NEXT_ITEM; END;
    //#endregion
    async CMFMENU_bter_contac_keyNextItem() {
        console.log("Entering CMFMENU_bter_contac_keyNextItem");
        // if ((CONTAC != null)) {
        //     // CMFMENU_PU_LLAMAR_TERCERO(this.BTER.NIT, null, null, null, "O");
        // }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CMFMENU_bter_contac_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :BTER.W_OFICINA := NULL;
    //    :BTER.W_OFICINA_DESCR := NULL;
    //   
    //   :BTER.W_CODIGOASESOR := NULL;
    //    :BTER.W_NOMBREASESOR := NULL; END;
    //#endregion
    async CMFMENU_bter_tipoReferencia_whenListChanged() {
        console.log("Entering CMFMENU_bter_tipoReferencia_whenListChanged");
        this.BTER.W_OFICINA = null;
        this.BTER.W_OFICINA_DESCR = null;
        this.BTER.W_CODIGOASESOR = null;
        this.BTER.W_NOMBREASESOR = null;
        console.log("Exiting CMFMENU_bter_tipoReferencia_whenListChanged");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('BTER.W_OFICINA'); END;
    //#endregion
    async CMFMENU_bter_tipoReferencia_keyNextItem() {
        console.log("Entering CMFMENU_bter_tipoReferencia_keyNextItem");
        this.oracleFormsBuiltins.go_item("BTER.W_OFICINA");
        console.log("Exiting CMFMENU_bter_tipoReferencia_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  VCONSULTA VARCHAR2(50);
    // BEGIN
    // 
    //   :TXT_BLOQUE := 'BTER';
    //   SHOW_VIEW('TRAE_TER');
    //   
    //   
    //  IF :BTER.SEG_TIPORIG IN ('003') THEN --003 OFICINAS DE DAVIVIENDA  O  011 BANCAFÉ
    //     LIB$AJUSTAVENTANA('W_OFI',0,0);
    //     GO_ITEM ('OFIDAV');
    //     SHOW_VIEW ('DAT_OFI');
    //  ELSE
    //    IF :BTER.SEG_NQREF IS NOT NULL THEN
    //     VCONSULTA := ' TERCOD LIKE ''%'||:BTER.SEG_NQREF ||'%''';
    //     SET_BLOCK_PROPERTY('TER',DEFAULT_WHERE,VCONSULTA);
    //      GO_BLOCK('TER');
    //      EXECUTE_QUERY;
    //    ELSE
    //     GO_ITEM('NOM1');
    //    END IF;
    //    
    //    
    // 
    //  
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_bter_segNqref_whenMouseDoubleclick() {
        console.log("Entering CMFMENU_bter_segNqref_whenMouseDoubleclick");
        let VCONSULTA: string = null;
        // this.BTER.TXT_BLOQUE = "BTER";
        this.oracleFormsBuiltins.show_view("TRAE_TER");
        if (["003"].indexOf(this.BTER.SEG_TIPORIG) != -1) {
            // CMFMENU_LIB$AJUSTAVENTANA("W_OFI", 0, 0);
            this.oracleFormsBuiltins.go_item("OFIDAV");
            this.oracleFormsBuiltins.show_view("DAT_OFI");
        }
        else {
            if ((this.BTER.SEG_NQREF != null)) {
                VCONSULTA = " TERCOD LIKE ''%" + this.BTER.SEG_NQREF + "%''";
                this.oracleFormsBuiltins.set_block_property("TER", "DEFAULT_WHERE", VCONSULTA);
                this.oracleFormsBuiltins.go_block("TER");
                this.oracleFormsBuiltins.execute_query();
            }
            else {
                this.oracleFormsBuiltins.go_item("NOM1");
            }
        }
        console.log("Exiting CMFMENU_bter_segNqref_whenMouseDoubleclick");
    }

    //#region PLSQL
    // DECLARE
    //  VCONSULTA VARCHAR2(50);
    // BEGIN
    // 
    //   :TXT_BLOQUE := 'BTER';
    //   SHOW_VIEW('TRAE_TER');
    //   
    //   
    //  IF :BTER.SEG_TIPORIG IN ('003','011') THEN --003 OFICINAS DE DAVIVIENDA  O  011 BANCAFÉ
    //     LIB$AJUSTAVENTANA('W_OFI',0,0);
    //     GO_ITEM ('OFIDAV');
    //     SHOW_VIEW ('DAT_OFI');
    //  ELSE
    //    IF :BTER.SEG_NQREF IS NOT NULL THEN
    //     VCONSULTA := ' TERCOD LIKE ''%'||:BTER.SEG_NQREF ||'%''';
    //     SET_BLOCK_PROPERTY('TER',DEFAULT_WHERE,VCONSULTA);
    //      GO_BLOCK('TER');
    //      EXECUTE_QUERY;
    //    ELSE
    //     GO_ITEM('NOM1');
    //    END IF;
    //    
    // 
    //    
    //  END IF;
    // END;
    // 
    // 
    // /*
    // BEGIN
    //  IF :SYSTEM.MODE1 = 'ENTER-QUERY' THEN
    //    EXIT_FORM;
    //    GO_BLOCK('TBEN');
    //    EXECUTE_QUERY;
    //   END IF;
    // END;
    // */
    //#endregion
    async CMFMENU_bter_segNqref_keyListval() {
        console.log("Entering CMFMENU_bter_segNqref_keyListval");
        let VCONSULTA: string = null;
        // this.BTER.TXT_BLOQUE = "BTER";
        this.oracleFormsBuiltins.show_view("TRAE_TER");
        if (["003", "011"].indexOf(this.BTER.SEG_TIPORIG) != -1) {
            // CMFMENU_LIB$AJUSTAVENTANA("W_OFI", 0, 0);
            this.oracleFormsBuiltins.go_item("OFIDAV");
            this.oracleFormsBuiltins.show_view("DAT_OFI");
        }
        else {
            if ((this.BTER.SEG_NQREF != null)) {
                VCONSULTA = " TERCOD LIKE ''%" + this.BTER.SEG_NQREF + "%''";
                this.oracleFormsBuiltins.set_block_property("TER", "DEFAULT_WHERE", VCONSULTA);
                this.oracleFormsBuiltins.go_block("TER");
                this.oracleFormsBuiltins.execute_query();
            }
            else {
                this.oracleFormsBuiltins.go_item("NOM1");
            }
        }
        console.log("Exiting CMFMENU_bter_segNqref_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   IF :BTER.SEG_NQREF IS NOT NULL THEN
    //     PVALTER(:BTER.SEG_NQREF); -- TERRES
    //   END IF;
    // END;
    // --------
    // 
    // DECLARE
    //   COUNT_TER NUMBER(9);
    //   TER NUMBER(13);
    //   V_CODCOMER  SETCOMCIA.COM_CODIGO%TYPE;
    //   V_NOMCOMER  VARCHAR2(100);
    //   T_RESPUESTA NUMBER;
    //   V_DEPCOM      VARCHAR2(3);
    //   V_DESDEPCOM   VARCHAR2(50);
    //   V_EXTCOMERSEC  NUMBER;
    //   VDEPCOMSEC     VARCHAR2(3);
    //   V_TIPTER    VARCHAR2(2);
    //   V_EXTPROV    NUMBER;
    //   V_EXTPROVOFCNA NUMBER;
    // BEGIN
    //  
    //  
    //     BEGIN
    //      SELECT COUNT(*), TERTVI
    //       INTO   COUNT_TER, V_TIPTER
    //      FROM   OPS$SEGUI.TER
    //       WHERE  TERCOD = :BTER.SEG_NQREF
    //      GROUP BY TERTVI;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //       COUNT_TER := 0;
    //     END;
    //     
    //    IF COUNT_TER = 0 AND :BTER.SEG_NQREF IS NOT NULL THEN
    //      IF FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA CREARLO ?') = 1 THEN
    //      --  IF FRM$ALERTA_SINO ('DESEA CREARLO POR LA FORMA TRADICIONAL [TODOS LOS DATOS BÁSICOS]') = 1 THEN 
    //         --
    //          PU_LLAMAR_TERCERO(:BTER.SEG_NQREF, NULL,NULL, NULL,'T');
    //          :this.PARAMETER.get("PEXISTETER") := 'N';
    //          PU_CARGAR_TIPOGESTION(:this.PARAMETER.get("PEXISTETER"), :this.PARAMETER.get("TIPGESTION"), :BTER.SEG_NQREF);
    //          IF :BTER.TIPIDEN IS NOT NULL THEN
    //           IF :BTER.TIPIDEN = 'NI' THEN
    //              IF TO_NUMBER(:BTER.SEG_NQREF) BETWEEN 600000000 AND 699999999 OR
    //                 TO_NUMBER(:BTER.SEG_NQREF)  BETWEEN 800000000 AND 999999999 THEN
    //                 NULL;
    //              ELSE
    //                LIB$DTNERFRMA('NIT NO VALIDO');
    //              END IF;
    //            ELSIF :BTER.TIPIDEN = 'CC' AND (
    //              TO_NUMBER(:BTER.SEG_NQREF) NOT BETWEEN 1 AND 9999999999999) THEN
    //              LIB$DTNERFRMA('CEDULA NO VALIDA');
    //            END IF;
    //            BEGIN
    //             TER:=TO_NUMBER(:BTER.SEG_NQREF);
    //             :GLOBAL.DIGITO :=  CALCULAR_DIGITO(:BTER.TIPIDEN,:BTER.SEG_NQREF);
    //             :DIGITO:= :GLOBAL.DIGITO;
    //            END;
    //          ELSE
    //           :BTER.SEG_NQREF := NULL;
    //            CLEAR_BLOCK(NO_VALIDATE);
    //           LIB$DTNERFRMA('DEBE INGRESAR EL TIPO DE IDENTIFICACIÓN PARA PODER CREAR EL TERCERO.');
    //          END IF;
    //        --ELSE DE CREAR EL TERCERO POR ESTA FORMA DE ADMON DE VENTAS
    //     
    //        END IF;
    //    END IF;
    //    NEXT_ITEM;
    // END;
    //#endregion
    async CMFMENU_bter_segNqref_keyNextItem() {
        console.log("Entering CMFMENU_bter_segNqref_keyNextItem");
        if ((this.BTER.SEG_NQREF != null)) {
            // CMFMENU_PVALTER(this.BTER.SEG_NQREF);
        }
        let COUNT_TER: number = null;
        let TER: number = null;
        let V_CODCOMER: null = null;
        let V_NOMCOMER: string = null;
        let T_RESPUESTA: number = null;
        let V_DEPCOM: string = null;
        let V_DESDEPCOM: string = null;
        let V_EXTCOMERSEC: number = null;
        let VDEPCOMSEC: string = null;
        let V_TIPTER: string = null;
        let V_EXTPROV: number = null;
        let V_EXTPROVOFCNA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SEG_NQREF", this.BTER.SEG_NQREF);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_segnqref_keynextitem_query1", payload1);
        // get values from result
        COUNT_TER = result1[0].get("COUNT_TER");
        V_TIPTER = result1[0].get("V_TIPTER");
        if (result1 == null || result1.length == 0) {

            COUNT_TER = 0;
        }

        if ((COUNT_TER == 0 && (this.BTER.SEG_NQREF != null))) {
            // if (FRM$ALERTA_SINO("TERCERO INEXISTENTE. DESEA CREARLO ?") == 1) {
            //     // CMFMENU_PU_LLAMAR_TERCERO(this.BTER.SEG_NQREF, null, null, null, "T");
            //     this.PARAMETER.get("PEXISTETER") = "N";
            //     // CMFMENU_PU_CARGAR_TIPOGESTION(this.PARAMETER.get("PEXISTETER"), this.PARAMETER.get("TIPGESTION"), this.BTER.SEG_NQREF);
            //     if ((this.BTER.TIPIDEN != null)) {
            //         if (this.BTER.TIPIDEN == "NI") {
            //             if ((PLSQLBuiltins.to_number(this.BTER.SEG_NQREF) || PLSQLBuiltins.to_number(this.BTER.SEG_NQREF))) {
            //             }
            //             else {
            //                 // CMFMENU_LIB$DTNERFRMA("NIT NO VALIDO");
            //             }
            //         }
            //         else if ((this.BTER.TIPIDEN == "CC" && PLSQLBuiltins.to_number(this.BTER.SEG_NQREF))) {
            //             // CMFMENU_LIB$DTNERFRMA("CEDULA NO VALIDA");
            //         }
            //         TER = PLSQLBuiltins.to_number(this.BTER.SEG_NQREF);
            //         this.GLOBAL.DIGITO = CALCULAR_DIGITO(this.BTER.TIPIDEN, this.BTER.SEG_NQREF);
            //         this.BTER.DIGITO = this.GLOBAL.DIGITO;
            //     }
            //     else {
            //         this.BTER.SEG_NQREF = null;
            //         this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
            //         // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR EL TIPO DE IDENTIFICACIÓN PARA PODER CREAR EL TERCERO.");
            //     }
            // }
        }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CMFMENU_bter_segNqref_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :V_OFIDAV IS NULL AND :V_DEPARPROV IS NULL THEN
    //  LIB$DTNERFRMA ('DEBE INGRESAR LA OFICINA SI ES EL NIT DE DAVIVIENDA O BANCAFE O DATOS DEL PROVEEDOR (DEPARTAMENTO / CIUDAD).');
    // ELSE
    //   GO_ITEM('BTER.NIT');
    // END IF; END;
    //#endregion
    async CMFMENU_bter_vOfidav_whenListChanged() {
        console.log("Entering CMFMENU_bter_vOfidav_whenListChanged");
        // if (((V_OFIDAV == null) && (V_DEPARPROV == null))) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR LA OFICINA SI ES EL NIT DE DAVIVIENDA O BANCAFE O DATOS DEL PROVEEDOR (DEPARTAMENTO / CIUDAD).");
        // }
        // else {
        //     this.oracleFormsBuiltins.go_item("BTER.NIT");
        // }
        console.log("Exiting CMFMENU_bter_vOfidav_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //  VREQNIT VARCHAR2(1);
    //  V_BOTON NUMBER;
    // BEGIN
    //  
    //   :BTER.SEG_NQREF := NULL;
    //  
    //  BEGIN
    //   SELECT DOMI_REQNIT 
    //    INTO VREQNIT
    //   FROM CMTDOMINIOS
    //   WHERE DOMI_DOMINIO = 'ORIGEN'
    //    AND DOMI_CODIGO = :BTER.SEG_TIPORIG;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    VREQNIT := 'X';
    //  END;
    //   IF VREQNIT = 'N' THEN --007 LLAMÓ DIRECTA/TE.. 008 BASE PROPIA, NO REQUIERE NIT
    //    SET_ITEM_PROPERTY('SEG_NQREF',VISIBLE, "PROPERTY_FALSE");
    //    SET_ITEM_PROPERTY('BTN_DATREFIERE',VISIBLE, "PROPERTY_FALSE"); 
    //        
    //    --LLAME LISTA DE LA TABLA CON DETALLE DEL ORIGEN CUANDO NO SE ESPECIFICA UN NIT
    //    SET_ITEM_PROPERTY('SEG_DETORIGEN',VISIBLE, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('SEG_DETORIGEN',ENABLED, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('SEG_DETORIGEN', "UPDATEABLE", "PROPERTY_TRUE");
    //    :SEG_NQREF := NULL;   --LIMPIA EL NIT DEL REFERIDO YA QUE SEELCCIONÓ DETALLE DE REFERENCIA
    //    PUP_LLENAORIG;
//    //    SYNCHRONIZE;
    //   ELSIF VREQNIT = 'X' THEN
    //    LIB$ALERTA('MENSAJE','NO SELECCIONÓ EL ORIGEN DEL TERCERO', NULL, NULL, NULL, V_BOTON);
    //   ELSE
    //    SET_ITEM_PROPERTY('SEG_NQREF',VISIBLE, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('SEG_NQREF',ENABLED, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('SEG_NQREF',ENTERABLE, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('SEG_NQREF',NAVIGABLE, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('SEG_NQREF', "UPDATEABLE", "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('BTN_DATREFIERE',VISIBLE, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('BTN_DATREFIERE',ENABLED, "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('BTN_DATREFIERE',NAVIGABLE, "PROPERTY_TRUE");
    //    --
    //    SET_ITEM_PROPERTY('SEG_DETORIGEN',VISIBLE, "PROPERTY_FALSE");
    //    :SEG_DETORIGEN := NULL;
//    //    SYNCHRONIZE;
    //   END IF;
    // 
    //    SET_ITEM_PROPERTY('BTER.BTN_DATREFIERE',LABEL,'>>');   --OCULTA EL DETALLE DE QUIEN REFIERE
    //    HIDE_VIEW ('DAT_REFIERE');
    //    GO_ITEM ('BTER.BTN_DATREFIERE');
    // 
    //   IF :BTER.SEG_TIPORIG IN ('003') THEN --003 OFICINAS DE DAVIVIENDA  O  011 BANCAFÉ
    //     
    //     LIB$AJUSTAVENTANA('W_OFI',0,0);
    //     --GO_ITEM ('OFIDAV');6754
    //     GO_ITEM ('TIPO_REFERENCIA');
    //      --6754    
    //      IF NOT LIB$PBLARLSTARG('BTER.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //          LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA BTER.TIPO_REFERENCIA');
    //      END IF;     
    //      --6754
    //      
    //     SHOW_VIEW ('DAT_OFI');
    // 
    //   
    //    ELSE ----6754 - 7384
    //    ----6754 - 7384
    //       HIDE_VIEW('DAT_OFI');
    //      --GO_ITEM('SEG_TIPGES '); PY 13888
    //       GO_ITEM('TIPIDEN'); --PY 13888
    //      
    //      ----6754 - 7384
    //   END IF;
    // 
    // :BTER.EMAIL := :BTER.EMAIL;
    // 
    // /*
    // IF GET_ITEM_PROPERTY('SEG_TIPORIG',ENABLED) = 'TRUE' THEN --KARO
    //  PUP_INSREF;
    // END IF;
    // */
    // 
    // 
    // END;
    // -- CAHH  30 AGO 2010  PY 1213  SE ELIMINÓ ESTE CAMPO
    // /*
    // IF :BTER.SEG_TIPORIG = '003' THEN --003 OFICINAS DE DAVIVIENDA
    //  SET_ITEM_PROPERTY('SEG_QUIENREF',ENABLED, "PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('SEG_QUIENREF',NAVIGABLE, "PROPERTY_TRUE");
    // ELSIF :BTER.SEG_TIPORIG = '002' THEN --002 PROVEEDORES
    //  SET_ITEM_PROPERTY('SEG_QUIENREF',ENABLED, "PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('SEG_QUIENREF',NAVIGABLE, "PROPERTY_TRUE");
    // ELSIF :BTER.SEG_TIPORIG = '005' THEN --005 CONTACTO FREE-LANCE
    //  SET_ITEM_PROPERTY('SEG_QUIENREF',ENABLED, "PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('SEG_QUIENREF',NAVIGABLE, "PROPERTY_TRUE");
    // ELSIF :BTER.SEG_TIPORIG = '001' THEN --001 CLIENTE
    //  SET_ITEM_PROPERTY('SEG_QUIENREF',ENABLED, "PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('SEG_QUIENREF',NAVIGABLE, "PROPERTY_TRUE");
    // ELSIF :BTER.SEG_TIPORIG = '011' THEN --003 OFICINAS DE BANCAFE
    //  SET_ITEM_PROPERTY('SEG_QUIENREF',ENABLED, "PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('SEG_QUIENREF',NAVIGABLE, "PROPERTY_TRUE");
    // ELSE
    //  :CMTSEGXTER.SEG_QUIENREF := NULL;
    //  SET_ITEM_PROPERTY('SEG_QUIENREF',ENABLED, "PROPERTY_FALSE");
    //  
    // END IF;
    // */
    //#endregion
    async CMFMENU_bter_segTiporig_whenListChanged() {
        console.log("Entering CMFMENU_bter_segTiporig_whenListChanged");
        let VREQNIT: string = null;
        let V_BOTON: number = null;
        this.BTER.SEG_NQREF = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SEG_TIPORIG", this.BTER.SEG_TIPORIG);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_segtiporig_whenlistchanged_query1", payload1);
        // get values from result
        VREQNIT = result1[0].get("VREQNIT");
        if (result1 == null || result1.length == 0) {

            VREQNIT = "X";
        }

        if (VREQNIT == "N") {
            this.oracleFormsBuiltins.set_item_property("SEG_NQREF", "VISIBLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("BTN_DATREFIERE", "VISIBLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("SEG_DETORIGEN", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SEG_DETORIGEN", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SEG_DETORIGEN", "UPDATEABLE", "PROPERTY_TRUE");
            this.BTER.SEG_NQREF = null;
            // CMFMENU_PUP_LLENAORIG();
//            this.oracleFormsBuiltins.synchronize();
        }
        else if (VREQNIT == "X") {
            // CMFMENU_LIB$ALERTA("MENSAJE", "NO SELECCIONÓ EL ORIGEN DEL TERCERO", null, null, null, V_BOTON);
        }
        else {
            this.oracleFormsBuiltins.set_item_property("SEG_NQREF", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SEG_NQREF", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SEG_NQREF", "ENTERABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SEG_NQREF", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SEG_NQREF", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("BTN_DATREFIERE", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("BTN_DATREFIERE", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("BTN_DATREFIERE", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SEG_DETORIGEN", "VISIBLE", "PROPERTY_FALSE");
            this.BTER.SEG_DETORIGEN = null;
//            this.oracleFormsBuiltins.synchronize();
        }
        this.oracleFormsBuiltins.set_item_property("BTER.BTN_DATREFIERE", "LABEL", ">>");
        this.oracleFormsBuiltins.hide_view("DAT_REFIERE");
        this.oracleFormsBuiltins.go_item("BTER.BTN_DATREFIERE");
        if (["003"].indexOf(this.BTER.SEG_TIPORIG) != -1) {
            // CMFMENU_LIB$AJUSTAVENTANA("W_OFI", 0, 0);
            this.oracleFormsBuiltins.go_item("TIPO_REFERENCIA");
            // if ((!LIB$PBLARLSTARG("BTER.TIPO_REFERENCIA", "LOV_TIPOREFERENCIA"))) {
            //     // CMFMENU_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA BTER.TIPO_REFERENCIA");
            // }
            this.oracleFormsBuiltins.show_view("DAT_OFI");
        }
        else {
            this.oracleFormsBuiltins.hide_view("DAT_OFI");
            this.oracleFormsBuiltins.go_item("TIPIDEN");
        }
        this.BTER.EMAIL = this.BTER.EMAIL;
        console.log("Exiting CMFMENU_bter_segTiporig_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :BTER.SEG_TIPORIG IN ('003') THEN --003 OFICINAS DE DAVIVIENDA  O  011 BANCAFÉ
    //     
    //     LIB$AJUSTAVENTANA('W_OFI',0,0);
    //     --GO_ITEM ('OFIDAV');6754
    //     GO_ITEM ('TIPO_REFERENCIA');
    //     --6754    
    //      IF NOT LIB$PBLARLSTARG('BTER.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //          LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA BTER.TIPO_REFERENCIA');
    //      END IF;     
    //      --6754
    //     SHOW_VIEW ('DAT_OFI');
    // 
    //  ELSE ----6754 - 7384
    //            ----6754 - 7384
    //       HIDE_VIEW('DAT_OFI');
    //      --GO_ITEM('SEG_TIPGES ');
    //      GO_ITEM('TIPIDEN'); --PY 13888
    //  ----6754 - 7384
    //   
    //   END IF; END;
    //#endregion
    async CMFMENU_bter_segTiporig_keyNextItem() {
        console.log("Entering CMFMENU_bter_segTiporig_keyNextItem");
        if (["003"].indexOf(this.BTER.SEG_TIPORIG) != -1) {
            // CMFMENU_LIB$AJUSTAVENTANA("W_OFI", 0, 0);
            this.oracleFormsBuiltins.go_item("TIPO_REFERENCIA");
            // if ((!LIB$PBLARLSTARG("BTER.TIPO_REFERENCIA", "LOV_TIPOREFERENCIA"))) {
            //     // CMFMENU_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA BTER.TIPO_REFERENCIA");
            // }
            this.oracleFormsBuiltins.show_view("DAT_OFI");
        }
        else {
            this.oracleFormsBuiltins.hide_view("DAT_OFI");
            this.oracleFormsBuiltins.go_item("TIPIDEN");
        }
        console.log("Exiting CMFMENU_bter_segTiporig_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT DEPDES
    //     INTO :V_DESDEPAR
    //     FROM OPS$SEGUI.DEP
    //    WHERE DEPCOD=:BTER.DEPARTA
    //      AND DEPCOD <> '00'
    //      AND DEPACO = NVL(:BTER.PAIS,'169')  --PY 13888
    //      ;
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   --LIB$DTNERFRMA('DEPARTAMENTO NO EXISTE');
    //   NULL;
    // END;
    //#endregion
    async CMFMENU_bter_departa_whenValidateItem() {
        console.log("Entering CMFMENU_bter_departa_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("DEPARTA", this.BTER.DEPARTA);
        payload1.set("PAIS", this.BTER.PAIS);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_departa_whenvalidateitem_query1", payload1);
        // get values from result
        // V_DESDEPAR = result1[0].get("V_DESDEPAR");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CMFMENU_bter_departa_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :BTER.NIT IS NOT NULL THEN --PY 14106
    //  IF (:BTER.TIPPER  IS NULL) OR (:BTER.TIPPER NOT IN ('N','J')) THEN  
    //      LIB$DTNERFRMA('POR FAVOR INGRESE EL TIPO DE PERSONA O EL TIPO NO EXISTE');
    //  END IF;
    // END IF; END;
    //#endregion
    async CMFMENU_bter_tipper_whenValidateItem() {
        console.log("Entering CMFMENU_bter_tipper_whenValidateItem");
        if ((this.BTER.NIT != null)) {
            if (((this.BTER.TIPPER == null) || ["N", "J"].indexOf(this.BTER.TIPPER) != -1)) {
                // CMFMENU_LIB$DTNERFRMA("POR FAVOR INGRESE EL TIPO DE PERSONA O EL TIPO NO EXISTE");
            }
        }
        console.log("Exiting CMFMENU_bter_tipper_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :BTER.TIPIDEN IN ('CC', 'CE', 'TI','NU','RG','PA','RI') THEN
    //    :BTER.TIPPER := 'N';
    // ELSIF :BTER.TIPIDEN IN ('NI','NE','NP') THEN
    //    :BTER.TIPPER := 'J';
    // ELSE  
    //   LIB$DTNERFRMA('TIPO DE PERSONA NO EXISTE');
    // END IF;
    // 
    // -- PY 20902 LFAC 
    //     IF :BTER.TIPPER = 'N' THEN
    //       SET_ITEM_PROPERTY('BTER.RAZON', "ENABLED", "PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('BTER.RAZON', "UPDATE_ALLOWED", "PROPERTY_FALSE");
    //     
    //     ELSIF :BTER.TIPPER = 'J' THEN
    //       SET_ITEM_PROPERTY('BTER.RAZON', "ENABLED", "PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('BTER.RAZON', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    //     END IF;
    //     
    // NEXT_ITEM; END;
    //#endregion
    async CMFMENU_bter_tipper_keyNextItem() {
        console.log("Entering CMFMENU_bter_tipper_keyNextItem");
        if (["CC", "CE", "TI", "NU", "RG", "PA", "RI"].indexOf(this.BTER.TIPIDEN) != -1) {
            this.BTER.TIPPER = "N";
        }
        else if (["NI", "NE", "NP"].indexOf(this.BTER.TIPIDEN) != -1) {
            this.BTER.TIPPER = "J";
        }
        else {
            // CMFMENU_LIB$DTNERFRMA("TIPO DE PERSONA NO EXISTE");
        }
        if (this.BTER.TIPPER == "N") {
            this.oracleFormsBuiltins.set_item_property("BTER.RAZON", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("BTER.RAZON", "UPDATE_ALLOWED", "PROPERTY_FALSE");
        }
        else if (this.BTER.TIPPER == "J") {
            this.oracleFormsBuiltins.set_item_property("BTER.RAZON", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("BTER.RAZON", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CMFMENU_bter_tipper_keyNextItem");
    }

    //#region PLSQL
    // BEGIN /*
    //  SHOW_VIEW('DIRECCIONES');
    //  GO_BLOCK('DIRECCIONES'); 
    //  :DIRECCIONES.CADENA :=  :BTER.DIRECC;
    //  :DIRECCIONES.HOMOLOGA := :BTER.DIRECC;
    //  :GLOBAL.DIR1:= 'DIR'; 
    // */ -- AOV 28/02/2013
    // 
    //  SHOW_VIEW('DIRECCIONESINTRO');
    //  GO_BLOCK('DIRECCIONESINTRO'); 
    //  :GLOBAL.CADENA:= :BTER.DIRECC;
    //  :GLOBAL.DIR1:= 'DIR'; END;
    //#endregion
    async CMFMENU_bter_dir01_whenButtonPressed() {
        console.log("Entering CMFMENU_bter_dir01_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("DIRECCIONESINTRO");
        this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        // this.GLOBAL.CADENA = this.BTER.DIRECC;
        // this.GLOBAL.DIR1 = "DIR";
        console.log("Exiting CMFMENU_bter_dir01_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //    IF GET_ITEM_PROPERTY('BTER.BTN_DATREFIERE',LABEL) = '>>' THEN
    //       IF :BTER.SEG_NQREF IS NULL 
    //        AND :BTER.SEG_TIPORIG NOT IN ('007','008') THEN --007 LLAMÓ DIRECTA/TE.. 008 BASE PROPIA
    //        LIB$ALERTA('MENSAJE','DEBE INDICAR EL NIT DE QUIEN REFIERE'
    //                    ,'ACEPTAR', NULL, NULL, VBOTON);
    //          GO_ITEM('BTER.SEG_NQREF');   
    //       ELSE
    //           /*ANTES 6754
    //           BEGIN  
    //          SELECT TERNOM, TERAPE
    //           INTO :NOM_QUIENREF, :APE_QUIENREF
    //          FROM TER
    //          WHERE TERCOD = :SEG_NQREF;
    //           EXCEPTION
    //            WHEN NO_DATA_FOUND THEN
    //              :NOM_QUIENREF := NULL;
    //              :APE_QUIENREF := NULL;
    //           END;
    //           */
    //           
    //           BEGIN  
    //          SELECT TERNOM, TERAPE
    //           INTO :NOM_QUIENREF, :APE_QUIENREF
    //          FROM TER
    //          WHERE TERCOD = :SEG_NQREF;
    //           EXCEPTION WHEN NO_DATA_FOUND THEN
    //             BEGIN
    //             SELECT CONTPR_NOMBRE  NOMBRE 
    //              INTO :NOM_QUIENREF
    //            FROM OPS$COLOCA.COTCONTPR 
    //            WHERE CONTPR_CODPRO = '860034313' 
    //              AND CONTPR_CODCNT = :SEG_NQREF
    //                      AND ROWNUM =1;
    //                EXCEPTION WHEN NO_DATA_FOUND THEN
    //               :NOM_QUIENREF := NULL;
    //               :APE_QUIENREF := NULL;
    //            END;
    //    END; 
    //    
    //    BEGIN
    //     BEGIN
    //      SELECT O.OFI_COD,O.OFI_DESCRIP 
    //             INTO :BTER.OFICI, :BTER.DESCOFI
    //             FROM CMTREFER CT,CRTOFIDAV O
    //           WHERE REF_NITORIG = :BTER.SEG_NQREF
    //             AND REF_NITREF = :BTER.NIT
    //             AND CT.REF_OFIDAV = O.OFI_COD;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN :BTER.OFICI := NULL;
    //                      :BTER.DESCOFI := NULL;
    //     END;
    // 
    //     IF :BTER.OFICI IS NOT NULL THEN
    //      
    //        SET_ITEM_PROPERTY('BTER.OFICI',VISIBLE,"PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('BTER.DESCOFI',VISIBLE,"PROPERTY_TRUE");
    //      
    //     ELSE
    //        SET_ITEM_PROPERTY('BTER.OFICI',VISIBLE,"PROPERTY_FALSE");
    //        SET_ITEM_PROPERTY('BTER.DESCOFI',VISIBLE,"PROPERTY_FALSE");
    //     
    //     END IF;
    //     
    //     
    //    END; 
    //    
    //           
    //       
    //         SHOW_VIEW ('DAT_REFIERE');
    //         GO_ITEM ('BTER.BTN_DATREFIERE');
    //       END IF;
    //      
    //      -- SHOW_VIEW ('DAT_REFIERE');
    //      -- GO_ITEM ('BTER.NOM_QUIENREF');
    //       --SET_ITEM_PROPERTY('BTER.COL_TIPVIN',VISIBLE,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('BTER.BTN_DATREFIERE',LABEL,'<<');
    //    ELSE
    //     --SET_ITEM_PROPERTY('BTER.COL_TIPVIN',VISIBLE,"PROPERTY_TRUE");
    //        
    //     SET_ITEM_PROPERTY('BTER.BTN_DATREFIERE',LABEL,'>>');
    //     HIDE_VIEW ('DAT_REFIERE');
    //     GO_ITEM ('BTER.BTN_DATREFIERE');
    //    END IF;
//    //    SYNCHRONIZE;
    // END;
    //#endregion
    async CMFMENU_bter_btnDatrefiere_whenButtonPressed() {
        console.log("Entering CMFMENU_bter_btnDatrefiere_whenButtonPressed");
        let VBOTON: number = null;
        if (this.oracleFormsBuiltins.get_item_property("BTER.BTN_DATREFIERE", "LABEL") == ">>") {
            if (((this.BTER.SEG_NQREF == null) && ["007", "008"].indexOf(this.BTER.SEG_TIPORIG) != -1)) {
                // CMFMENU_LIB$ALERTA("MENSAJE", "DEBE INDICAR EL NIT DE QUIEN REFIERE", "ACEPTAR", null, null, VBOTON);
                this.oracleFormsBuiltins.go_item("BTER.SEG_NQREF");
            }
            else {
                // construct payload
                let payload1 = new Map();
                // payload1.set("SEG_NQREF", SEG_NQREF);
                // call REST API
                const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_btndatrefiere_whenbuttonpressed_query1", payload1);
                // get values from result
                // NOM_QUIENREF = result1[0].get("NOM_QUIENREF");
                // APE_QUIENREF = result1[0].get("APE_QUIENREF");
                if (result1 == null || result1.length == 0) {

                    // construct payload
                    let payload2 = new Map();
                    // payload2.set("SEG_NQREF", SEG_NQREF);
                    // call REST API
                    const result2 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_btndatrefiere_whenbuttonpressed_query2", payload2);
                    // get values from result
                    // NOM_QUIENREF = result2[0].get("NOM_QUIENREF");
                    if (result2 == null || result2.length == 0) {

                        this.BTER.NOM_QUIENREF = null;
                        this.BTER.APE_QUIENREF = null;
                    }

                }

                // construct payload
                let payload3 = new Map();
                payload3.set("SEG_NQREF", this.BTER.SEG_NQREF);
                payload3.set("NIT", this.BTER.NIT);
                // call REST API
                const result3 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_btndatrefiere_whenbuttonpressed_query3", payload3);
                // get values from result
                // BTER.OFICI = result3[0].get("BTER.OFICI");
                // BTER.DESCOFI = result3[0].get("BTER.DESCOFI");
                if (result3 == null || result3.length == 0) {

                    this.BTER.OFICI = null;
                    this.BTER.DESCOFI = null;
                }

                if ((this.BTER.OFICI != null)) {
                    this.oracleFormsBuiltins.set_item_property("BTER.OFICI", "VISIBLE", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_item_property("BTER.DESCOFI", "VISIBLE", "PROPERTY_TRUE");
                }
                else {
                    this.oracleFormsBuiltins.set_item_property("BTER.OFICI", "VISIBLE", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_item_property("BTER.DESCOFI", "VISIBLE", "PROPERTY_FALSE");
                }
                this.oracleFormsBuiltins.show_view("DAT_REFIERE");
                this.oracleFormsBuiltins.go_item("BTER.BTN_DATREFIERE");
            }
            this.oracleFormsBuiltins.set_item_property("BTER.BTN_DATREFIERE", "LABEL", "<<");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("BTER.BTN_DATREFIERE", "LABEL", ">>");
            this.oracleFormsBuiltins.hide_view("DAT_REFIERE");
            this.oracleFormsBuiltins.go_item("BTER.BTN_DATREFIERE");
        }
//        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CMFMENU_bter_btnDatrefiere_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :OFIDAV IS NOT NULL THEN
    //  BEGIN
    // 
    //    SELECT TERCOD 
    //     INTO :BTER.SEG_NQREF
    //    FROM TER 
    //    WHERE UPPER (TERAPE) LIKE '%BANCO%DAVIVIENDA%'
    //    AND ROWNUM = 1;
    // 
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     :BTER.SEG_NQREF :=  NULL;
    // 
    //  END;
    // END IF;
    // 
    // NEXT_ITEM; END;
    //#endregion
    async CMFMENU_bter_ofidav_keyNextItem() {
        console.log("Entering CMFMENU_bter_ofidav_keyNextItem");
        // if ((OFIDAV != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SEG_NQREF", this.BTER.SEG_NQREF);
        //     // call REST API
        //     const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_ofidav_keynextitem_query1", payload1);
        //     // get values from result
        //     BTER.SEG_NQREF = result1[0].get("BTER.SEG_NQREF");
        //     if (result1 == null || result1.length == 0) {

        //         this.BTER.SEG_NQREF = null;
        //     }

        // }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CMFMENU_bter_ofidav_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT DOMI_VLRCODIGO DESCR
    //    INTO :DESVIN2
    //  FROM CMTDOMINIOS
    //  WHERE DOMI_DOMINIO = 'PERFILES'
    //   AND DOMI_CODIGO = :BTER.PERFIL2;
    //      EXCEPTION
    //        WHEN NO_DATA_FOUND THEN
    //        NULL;
    // END;
    // NEXT_ITEM;
    //#endregion
    async CMFMENU_bter_perfil2_keyNextItem() {
        console.log("Entering CMFMENU_bter_perfil2_keyNextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("PERFIL2", this.BTER.PERFIL2);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_perfil2_keynextitem_query1", payload1);
        // get values from result
        // DESVIN2 = result1[0].get("DESVIN2");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CMFMENU_bter_perfil2_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --6754
    // P_LISTAREFERIDOS_DAV;
    // --6754; END;
    //#endregion
    async CMFMENU_bter_wCodigoasesor_whenMouseDoubleclick() {
        console.log("Entering CMFMENU_bter_wCodigoasesor_whenMouseDoubleclick");
        console.log("Exiting CMFMENU_bter_wCodigoasesor_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN --6754
    // P_LISTAREFERIDOS_DAV;
    // --6754; END;
    //#endregion
    async CMFMENU_bter_wCodigoasesor_keyListval() {
        console.log("Entering CMFMENU_bter_wCodigoasesor_keyListval");
        console.log("Exiting CMFMENU_bter_wCodigoasesor_keyListval");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CMTSEGXTER');
    // GO_ITEM('BTN_VOLVER'); END;
    //#endregion
    async CMFMENU_bter_wCodigoasesor_keyNextItem() {
        console.log("Entering CMFMENU_bter_wCodigoasesor_keyNextItem");
        this.oracleFormsBuiltins.go_block("CMTSEGXTER");
        this.oracleFormsBuiltins.go_item("BTN_VOLVER");
        console.log("Exiting CMFMENU_bter_wCodigoasesor_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT TDVDES
    //     INTO :DESVIN
    //     FROM OPS$SEGUI.TDV
    //     WHERE TDVCOD=:BTER.PERFIL;
    //      EXCEPTION
    //        WHEN NO_DATA_FOUND THEN
    //        LIB$DTNERFRMA('CODIGO NO EXISTE.');
    //        
    // END;
    // NEXT_ITEM;
    //#endregion
    async CMFMENU_bter_perfil_keyNextItem() {
        console.log("Entering CMFMENU_bter_perfil_keyNextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("PERFIL", this.BTER.PERFIL);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_perfil_keynextitem_query1", payload1);
        // get values from result
        // DESVIN = result1[0].get("DESVIN");
        if (result1 == null || result1.length == 0) {

            // CMFMENU_LIB$DTNERFRMA("CODIGO NO EXISTE.");
        }

        console.log("Exiting CMFMENU_bter_perfil_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT OFIDES
    //     INTO :V_OFIC
    //   FROM OPS$SEGUI.OFI
    //   WHERE (OFICOD=:BTER.OFICINA);
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //       LIB$DTNERFRMA('CODIGO DE LA OFICINA NO EXISTE');
    // END;
    // NEXT_ITEM;
    //#endregion
    async CMFMENU_bter_oficina_keyNextItem() {
        console.log("Entering CMFMENU_bter_oficina_keyNextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("OFICINA", this.BTER.OFICINA);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_oficina_keynextitem_query1", payload1);
        // get values from result
        // V_OFIC = result1[0].get("V_OFIC");
        if (result1 == null || result1.length == 0) {

            // CMFMENU_LIB$DTNERFRMA("CODIGO DE LA OFICINA NO EXISTE");
        }

        console.log("Exiting CMFMENU_bter_oficina_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :V_CIUDADPROV IS NULL THEN
    //  LIB$DTNERFRMA ('DEBE INGRESAR LA CIUDAD.');
    // ELSE
    //   GO_ITEM('BTER.NIT');
    // END IF; END;
    //#endregion
    async CMFMENU_bter_vCiudadprov_whenListChanged() {
        console.log("Entering CMFMENU_bter_vCiudadprov_whenListChanged");
        // if ((V_CIUDADPROV == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR LA CIUDAD.");
        // }
        // else {
        //     this.oracleFormsBuiltins.go_item("BTER.NIT");
        // }
        console.log("Exiting CMFMENU_bter_vCiudadprov_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :DIGITO <> :GLOBAL.DIGITO THEN
    //  LIB$DTNERFRMA('EL DIGITO DE CHEQUEO NO CORRESPONDE, POR FAVOR RECTIFIQUE EL NÚMERO DE IDENTIFICACIÓN');
    // END IF;
    // NEXT_ITEM; END;
    //#endregion
    async CMFMENU_bter_digito_keyNextItem() {
        console.log("Entering CMFMENU_bter_digito_keyNextItem");
        // if (DIGITO != GLOBAL.DIGITO) {
        //     // CMFMENU_LIB$DTNERFRMA("EL DIGITO DE CHEQUEO NO CORRESPONDE, POR FAVOR RECTIFIQUE EL NÚMERO DE IDENTIFICACIÓN");
        // }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CMFMENU_bter_digito_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :V_OFIDAV IS NULL THEN
    //  LIB$DTNERFRMA ('DEBE INGRESAR LA OFICINA.');
    // ELSE
    //   GO_ITEM('BTER.NIT');
    // END IF; END;
    //#endregion
    async CMFMENU_bter_vDesciudprov_whenListChanged() {
        console.log("Entering CMFMENU_bter_vDesciudprov_whenListChanged");
        // if ((V_OFIDAV == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR LA OFICINA.");
        // }
        // else {
        //     this.oracleFormsBuiltins.go_item("BTER.NIT");
        // }
        console.log("Exiting CMFMENU_bter_vDesciudprov_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //   COUNT_TDI NUMBER;
    // BEGIN
    //     SELECT COUNT(*)
    //     INTO   COUNT_TDI
    //     FROM   OPS$SEGUI.TDI
    //     WHERE  (TDICOD = :BTER.TIPIDEN);
    //     IF (NOT (COUNT_TDI = 1)) THEN
    //        LIB$DTNERFRMA('TIPO DE IDENTIFICACION NO EXISTE');
    //     END IF;
    // 
    //     IF :BTER.TIPIDEN IN ('CC', 'CE', 'TI','NU') THEN
    //        :BTER.TIPPER := 'N';
    //     ELSE 
    //        :BTER.TIPPER := 'J';
    //     END IF;
    //     NEXT_ITEM;
    // END;
    //#endregion
    async CMFMENU_bter_tipiden_keyNextItem() {
        console.log("Entering CMFMENU_bter_tipiden_keyNextItem");
        let COUNT_TDI: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TIPIDEN", this.BTER.TIPIDEN);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_tipiden_keynextitem_query1", payload1);
        // get values from result
        COUNT_TDI = result1[0].get("COUNT_TDI");
        // if ((!COUNT_TDI == 1)) {
        //     // CMFMENU_LIB$DTNERFRMA("TIPO DE IDENTIFICACION NO EXISTE");
        // }
        if (["CC", "CE", "TI", "NU"].indexOf(this.BTER.TIPIDEN) != -1) {
            this.BTER.TIPPER = "N";
        }
        else {
            this.BTER.TIPPER = "J";
        }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CMFMENU_bter_tipiden_keyNextItem");
    }

    //#region PLSQL
    // BEGIN 
    //  SELECT TDCCOD
    //  INTO  :BTER.CIUDAD
    //  FROM OPS$SEGUI.TDC 
    //  WHERE TDCDEP =:BTER.DEPARTA 
    //  AND TDCCOD=:BTER.CIUDAD
    //  AND TDCCOD <> '000' 
    //  AND TDCPAI = (SELECT OPS$SEGUI.DEP.TDECOF
    //                      FROM OPS$SEGUI.DEP
    //                       WHERE DEPCOD <> '00'
    //                        AND DEPCOD=:BTER.DEPARTA
    //                       AND DEPACO = NVL(:BTER.PAIS,'169') );
    // 
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   --LIB$DTNERFRMA('DEPARTAMENTO NO EXISTE');
    //   NULL;
    // END;
    //#endregion
    async CMFMENU_bter_ciudad_whenValidateItem() {
        console.log("Entering CMFMENU_bter_ciudad_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("DEPARTA", this.BTER.DEPARTA);
        payload1.set("CIUDAD", this.BTER.CIUDAD);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_ciudad_whenvalidateitem_query1", payload1);
        // get values from result
        this.BTER.CIUDAD = result1[0].get("BTER.CIUDAD");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CMFMENU_bter_ciudad_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :V_OFIDAV IS NULL THEN
    //  LIB$DTNERFRMA ('DEBE INGRESAR LA OFICINA.');
    // ELSE
    //   GO_ITEM('BTER.NIT');
    // END IF; END;
    //#endregion
    async CMFMENU_bter_vDescdeparprov_whenListChanged() {
        console.log("Entering CMFMENU_bter_vDescdeparprov_whenListChanged");
        // if ((V_OFIDAV == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR LA OFICINA.");
        // }
        // else {
        //     this.oracleFormsBuiltins.go_item("BTER.NIT");
        // }
        console.log("Exiting CMFMENU_bter_vDescdeparprov_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :V_DEPARPROV IS NULL THEN
    //  LIB$DTNERFRMA ('DEBE INGRESAR EL DEPARTAMENTO.');
    // ELSE
    //   GO_ITEM('BTER.NIT');
    // END IF; END;
    //#endregion
    async CMFMENU_bter_vDeparprov_whenListChanged() {
        console.log("Entering CMFMENU_bter_vDeparprov_whenListChanged");
        // if ((V_DEPARPROV == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR EL DEPARTAMENTO.");
        // }
        // else {
        //     this.oracleFormsBuiltins.go_item("BTER.NIT");
        // }
        console.log("Exiting CMFMENU_bter_vDeparprov_whenListChanged");
    }

    //#region PLSQL
    // BEGIN --+PY22058. JDG. 
    // /*BEGIN
    //   SELECT  AGEDES
    //     INTO  :BTER.V_AGENCIA
    //     FROM  OPS$SEGUI.AGE
    //     WHERE AGECOD=:BTER.AGENCIA
    //     AND   AGEOFC=:BTER.OFICINA;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        LIB$DTNERFRMA('NO EXISTE LA AGENCIA, CONSULTE LISTA DE VALORES');
    // END;*/
    // BEGIN
    //  BEGIN
    //    SELECT  AGEDES
    //      INTO  :BTER.V_AGENCIA
    //      FROM  OPS$SEGUI.AGE
    //      WHERE AGECOD=:BTER.AGENCIA
    //      AND   AGEOFC=:BTER.OFICINA;
    //    --EXCEPTION WHEN NO_DATA_FOUND THEN
    //     EXCEPTION WHEN OTHERS THEN  
    //      LIB$DTNERFRMA('NO EXISTE LA AGENCIA, CONSULTE LISTA DE VALORES');
    //      NULL;
    //     END;
    //     
    // EXCEPTION WHEN OTHERS THEN
    //  
    //  NULL;
    //  
    // END;
    // 
    // IF :BTER.DIRECC IS NULL THEN
    //   GO_ITEM('DIR_01');
    //   EXECUTE_TRIGGER('WHEN-BUTTON-PRESSED'); 
    // ELSE
    //   NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CMFMENU_bter_agencia_keyNextItem() {
        console.log("Entering CMFMENU_bter_agencia_keyNextItem");
        let result1 = [];
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("AGENCIA", this.BTER.AGENCIA);
                payload1.set("OFICINA", this.BTER.OFICINA);
                // call REST API
                const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_agencia_keynextitem_query1", payload1);
                // get values from result
                this.BTER.V_AGENCIA = result1[0].get("BTER.V_AGENCIA");
            } catch (ex) {

                // CMFMENU_LIB$DTNERFRMA("NO EXISTE LA AGENCIA, CONSULTE LISTA DE VALORES");
            }

        } catch (ex) {

        }

        if ((this.BTER.DIRECC == null)) {
            // this.oracleFormsBuiltins.go_item("DIR_01");
            // this.oracleFormsBuiltins.execute_trigger("WHEN-BUTTON-PRESSED");
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CMFMENU_bter_agencia_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //    IF NOT SHOW_LOV('LOV_OFICINA') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CMFMENU_bter_wOficina_whenMouseClick() {
        console.log("Entering CMFMENU_bter_wOficina_whenMouseClick");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINA"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA");
        }
        console.log("Exiting CMFMENU_bter_wOficina_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //    IF NOT SHOW_LOV('LOV_OFICINA') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CMFMENU_bter_wOficina_whenMouseDoubleclick() {
        console.log("Entering CMFMENU_bter_wOficina_whenMouseDoubleclick");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINA"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA");
        }
        console.log("Exiting CMFMENU_bter_wOficina_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //    IF NOT SHOW_LOV('LOV_OFICINA') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CMFMENU_bter_wOficina_keyListval() {
        console.log("Entering CMFMENU_bter_wOficina_keyListval");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINA"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA");
        }
        console.log("Exiting CMFMENU_bter_wOficina_keyListval");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('BTER.W_CODIGOASESOR'); END;
    //#endregion
    async CMFMENU_bter_wOficina_keyNextItem() {
        console.log("Entering CMFMENU_bter_wOficina_keyNextItem");
        this.oracleFormsBuiltins.go_item("BTER.W_CODIGOASESOR");
        console.log("Exiting CMFMENU_bter_wOficina_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --7818
    // --VALIDACION SOLO CAPTACIONES
    // PVALTER(:BTER.NIT);
    // IF :this.PARAMETER.get("PCARGO") IN ('EI') THEN      
    //    PUVALTERCAP(:BTER.NIT);
    // END IF; 
    // --7818; END;
    //#endregion
    async CMFMENU_bter_nit_whenValidateItem() {
        console.log("Entering CMFMENU_bter_nit_whenValidateItem");
        // CMFMENU_PVALTER(this.BTER.NIT);
        if (["EI"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            // CMFMENU_PUVALTERCAP(this.BTER.NIT);
        }
        console.log("Exiting CMFMENU_bter_nit_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  VCONSULTA VARCHAR2(50);
    // BEGIN
    // 
    //   :TXT_BLOQUE := 'BTER1';
    //   SHOW_VIEW('TRAE_TER');
    //   
    //   IF :REF_PARAM.TXT_ID IS NOT NULL THEN
    //    VCONSULTA := ' TERCOD LIKE ''%'||:REF_PARAM.TXT_ID ||'%''';
    //    SET_BLOCK_PROPERTY('TER',DEFAULT_WHERE,VCONSULTA);
    //     GO_BLOCK('TER');
    //     EXECUTE_QUERY;
    //   ELSE
    //    GO_ITEM('NOM1');
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_bter_nit_whenMouseDoubleclick() {
        console.log("Entering CMFMENU_bter_nit_whenMouseDoubleclick");
        let VCONSULTA: string = null;
        // this.BTER.TXT_BLOQUE = "BTER1";
        this.oracleFormsBuiltins.show_view("TRAE_TER");
        if ((this.REF_PARAM.TXT_ID != null)) {
            VCONSULTA = " TERCOD LIKE ''%" + this.REF_PARAM.TXT_ID + "%''";
            this.oracleFormsBuiltins.set_block_property("TER", "DEFAULT_WHERE", VCONSULTA);
            this.oracleFormsBuiltins.go_block("TER");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.go_item("NOM1");
        }
        console.log("Exiting CMFMENU_bter_nit_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.MODE1 = 'ENTER-QUERY' THEN
    //    EXIT_FORM;
    //    GO_BLOCK('TBEN');
    //    EXECUTE_QUERY;
    //  ELSE
    //   ------------------------CAHH  PY 1213
    //      DECLARE
    //       VCONSULTA VARCHAR2(50);
    //      BEGIN
    //      
    //        :TXT_BLOQUE := 'BTER1';
    //        SHOW_VIEW('TRAE_TER');
    //        
    //        IF :REF_PARAM.TXT_ID IS NOT NULL THEN
    //         VCONSULTA := ' TERCOD LIKE ''%'||:REF_PARAM.TXT_ID ||'%''';
    //         SET_BLOCK_PROPERTY('TER',DEFAULT_WHERE,VCONSULTA);
    //          GO_BLOCK('TER');
    //          EXECUTE_QUERY;
    //        ELSE
    //         GO_ITEM('NOM1');
    //        END IF;
    //      END;
    //    -----------------
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_bter_nit_keyListval() {
        console.log("Entering CMFMENU_bter_nit_keyListval");
        if (this._SYSTEM_SERVICE.get("MODE1") == "ENTER-QUERY") {
            this.oracleFormsBuiltins.exit_form();
            this.oracleFormsBuiltins.go_block("TBEN");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            {

                let VCONSULTA: string = null;
                // this.BTER.TXT_BLOQUE = "BTER1";
                this.oracleFormsBuiltins.show_view("TRAE_TER");
                if ((this.REF_PARAM.TXT_ID != null)) {
                    VCONSULTA = " TERCOD LIKE ''%" + this.REF_PARAM.TXT_ID + "%''";
                    this.oracleFormsBuiltins.set_block_property("TER", "DEFAULT_WHERE", VCONSULTA);
                    this.oracleFormsBuiltins.go_block("TER");
                    this.oracleFormsBuiltins.execute_query();
                }
                else {
                    this.oracleFormsBuiltins.go_item("NOM1");
                }
            }

        }
        console.log("Exiting CMFMENU_bter_nit_keyListval");
    }

    //#region PLSQL
    // BEGIN PUP_VALNIT; END;
    //#endregion
    async CMFMENU_bter_nit_keyNextItem() {
        console.log("Entering CMFMENU_bter_nit_keyNextItem");
        // CMFMENU_PUP_VALNIT();
        console.log("Exiting CMFMENU_bter_nit_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //  
    //      SELECT P.TDPACO,P.TDPDES 
    //      INTO :BTER.PAIS, :BTER.V_PAIS
    //      FROM TDP P WHERE P.TDPACO =NVL(:BTER.PAIS,'169') ; 
    //      
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   --LIB$DTNERFRMA('DEPARTAMENTO NO EXISTE');
    //   NULL;
    // END;
    //#endregion
    async CMFMENU_bter_pais_whenValidateItem() {
        console.log("Entering CMFMENU_bter_pais_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("PAIS", this.BTER.PAIS);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_bter/cmfmenu_bter_pais_whenvalidateitem_query1", payload1);
        // get values from result
        // BTER.PAIS = result1[0].get("BTER.PAIS");
        // BTER.V_PAIS = result1[0].get("BTER.V_PAIS");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CMFMENU_bter_pais_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN SETTERXCOM DETAIL DECLARE SECTION
    //   --
    //   CURSOR SETTERXCOM_CUR IS      
    //     SELECT 1 FROM SETTERXCOM S     
    //     WHERE S.CXT_CODIGO = :SETCOMCIA.COM_CODIGO;
    //   --
    //   -- END SETTERXCOM DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN SETTERXCOM DETAIL PROGRAM SECTION
    //   --
    //   OPEN SETTERXCOM_CUR;     
    //   FETCH SETTERXCOM_CUR INTO DUMMY_DEFINE;     
    //   IF ( SETTERXCOM_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE SETTERXCOM_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE SETTERXCOM_CUR;
    //   --
    //   -- END SETTERXCOM DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CMFMENU_setcomcia_onCheckDeleteMaster() {
        console.log("Entering CMFMENU_setcomcia_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CMFMENU_setcomcia_onCheckDeleteMaster");
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
    //   -- BEGIN SETTERXCOM DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:SETCOMCIA.COM_CODIGO IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('SETCOMCIA.SETCOMCIA_SETTERXCOM');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'SETTERXCOM');   
    //   END IF;
    //   --
    //   -- END SETTERXCOM DETAIL PROGRAM SECTION
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
    async CMFMENU_setcomcia_onPopulateDetails() {
        console.log("Entering CMFMENU_setcomcia_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.SETCOMCIA.COM_CODIGO != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("SETCOMCIA.SETCOMCIA_SETTERXCOM");
            // CMFMENU_QUERY_MASTER_DETAILS(REL_ID, "SETTERXCOM");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CMFMENU_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CMFMENU_setcomcia_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    // BEGIN
    //  SELECT PLAZAS_DESCRI 
    //    INTO :SETCOMCIA.V_DESPLA
    //  FROM CMTPLAZAS WHERE PLAZAS_CODIGO = :SETCOMCIA.COM_PLA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :SETCOMCIA.V_DESPLA := NULL;
    // END;
    //#endregion
    async CMFMENU_setcomcia_postQuery() {
        console.log("Entering CMFMENU_setcomcia_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("COM_PLA", this.SETCOMCIA.COM_PLA);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_setcomcia/cmfmenu_setcomcia_postquery_query1", payload1);
        // get values from result
        this.SETCOMCIA.V_DESPLA = result1[0].get("SETCOMCIA.V_DESPLA");
        if (result1 == null || result1.length == 0) {

            this.SETCOMCIA.V_DESPLA = null;
        }

        console.log("Exiting CMFMENU_setcomcia_postQuery");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_settersec_postTextItem() {
        console.log("Entering CMFMENU_settersec_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_settersec_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_settersec_whenNewItemInstance() {
        console.log("Entering CMFMENU_settersec_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_settersec_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    // SELECT DECODE(TERPER, 'N', TERAPE || ' ' || TERNOM, TERAPE) NOMBRE
    //   INTO :SETTERSEC.V_NOMBTERCAP
    // FROM TER
    // WHERE TERCOD = :SETTERSEC.TERSEC_NIT;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :SETTERSEC.V_NOMBTERCAP :=  NULL;
    // END;
    //#endregion
    async CMFMENU_settersec_postQuery() {
        console.log("Entering CMFMENU_settersec_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("TERSEC_NIT", this.SETTERSEC.TERSEC_NIT);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_settersec/cmfmenu_settersec_postquery_query1", payload1);
        // get values from result
        this.SETTERSEC.V_NOMBTERCAP = result1[0].get("SETTERSEC.V_NOMBTERCAP");
        if (result1 == null || result1.length == 0) {

            this.SETTERSEC.V_NOMBTERCAP = null;
        }

        console.log("Exiting CMFMENU_settersec_postQuery");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //  V_RESPUESTA VARCHAR2(1);
    // BEGIN
    //  PU_REASIGNAR_CLIENTES_CAPTA (:SETTERSEC.TERSEC_NIT, :SETTERSEC.V_NOMBTERCAP, V_RESPUESTA);
    // 
    //  IF V_RESPUESTA = '0' THEN
    //   GO_BLOCK('SETCOMCIACAP');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('SETTERSEC');
    //     EXECUTE_QUERY;
    //  ELSIF V_RESPUESTA = '1' THEN
    //   :SETTERXCOM.V_SELECTER := 'N';
    //   LIB$DTNERFRMA('ACTUALIZACIÓN CON ERRORES Ó PROCESO CANCELADO POR EL USUARIO.');
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_settersec_vSelectercap_whenCheckboxChanged() {
        console.log("Entering CMFMENU_settersec_vSelectercap_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let V_RESPUESTA: string = null;
        // CMFMENU_PU_REASIGNAR_CLIENTES_CAPTA(SETTERSEC.TERSEC_NIT, SETTERSEC.V_NOMBTERCAP, V_RESPUESTA);
        if (V_RESPUESTA == "0") {
            this.oracleFormsBuiltins.go_block("SETCOMCIACAP");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("SETTERSEC");
            this.oracleFormsBuiltins.execute_query();
        }
        else if (V_RESPUESTA == "1") {
            this.SETTERXCOM.V_SELECTER = "N";
            // CMFMENU_LIB$DTNERFRMA("ACTUALIZACIÓN CON ERRORES Ó PROCESO CANCELADO POR EL USUARIO.");
        }
        console.log("Exiting CMFMENU_settersec_vSelectercap_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFMENU_bnivel_postTextItem() {
        console.log("Entering CMFMENU_bnivel_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFMENU_bnivel_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFMENU_bnivel_whenNewItemInstance() {
        console.log("Entering CMFMENU_bnivel_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFMENU_bnivel_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //   IF ERROR_CODE = 40200 THEN
    //    LIB$DTNERFRMA('DEBE LIMPIAR EL BLOQUE PARA TENER ACCESO A ESTE ÍTEM');
    //   ELSE
    //    LIB$DTNERFRMA(ERROR_TYPE||'-'||TO_CHAR(ERROR_CODE)||': '||ERROR_TEXT);
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_bnivel_onError() {
        console.log("Entering CMFMENU_bnivel_onError");
        let VBOTON: number = null;
        if (this.oracleFormsBuiltins.error_code() == 40200) {
            // CMFMENU_LIB$DTNERFRMA("DEBE LIMPIAR EL BLOQUE PARA TENER ACCESO A ESTE ÍTEM");
        }
        else {
            // CMFMENU_LIB$DTNERFRMA(this.oracleFormsBuiltins.error_type + "-" + ERROR_CODE.toString() + ": " + this.oracleFormsBuiltins.error_text);
        }
        console.log("Exiting CMFMENU_bnivel_onError");
    }

    //#region PLSQL
    // BEGIN IF :BNIVEL.PAIS = 'S' THEN
    //   :this.PARAMETER.get("PCIUDAD") := '000';
    // ELSE
    //   :this.PARAMETER.get("PCIUDAD") := :BNIVEL.CIUDAD;
    // END IF;
    // :this.PARAMETER.get("PGRUCOM") := :BNIVEL.GRUPO;
    // :this.PARAMETER.get("PUSUARI") := :BNIVEL.COMERCIAL; END;
    //#endregion
    async CMFMENU_bnivel_whenValidateRecord() {
        console.log("Entering CMFMENU_bnivel_whenValidateRecord");
        if (this.BNIVEL.PAIS == "S") {
            this.PARAMETER.set("PCIUDAD", "000");
        }
        else {
            this.PARAMETER.set("PCIUDAD", this.BNIVEL.CIUDAD);
        }
        this.PARAMETER.set("PGRUCOM" ,this.BNIVEL.GRUPO);
        this.PARAMETER.set("PUSUARI" ,this.BNIVEL.COMERCIAL);
        console.log("Exiting CMFMENU_bnivel_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN --IF :this.PARAMETER.get("PCARGO") IN ('GF','JP','GC','GI','SR','JP','JM','AM') THEN  --CAHH 4 FEB 2011
    //  --IF :this.PARAMETER.get("PCARGO") IN ('GF','JP','GC','GI','SR','JP','JM','AM','OM')  THEN
    //  IF :this.PARAMETER.get("PCARGO") IN ('GF','JP','GC','GI','SR','JP','JM','AM','OM','TS','AP')  THEN 
    //   :BNIVEL.PAIS := 'S';
    //   :BNIVEL.GRUPO := '0';
    //   :BNIVEL.COMERCIAL := '%';
    //   :BNIVEL.DES_COM := 'TODOS LOS COMERCIALES';
    //   --
    //   IF :BNIVEL.PAIS = 'S' THEN
    //     :this.PARAMETER.get("PCIUDAD") := '000';
    //   ELSE
    //     :this.PARAMETER.get("PCIUDAD") := :BNIVEL.CIUDAD;
    //   END IF;
    //   :this.PARAMETER.get("PGRUCOM") := :BNIVEL.GRUPO;
    //   :this.PARAMETER.get("PUSUARI") := :BNIVEL.COMERCIAL;
    // ELSE
    //   :BNIVEL.PAIS := 'N';
    //   --:BNIVEL.GRUPO := '0';
    //   :BNIVEL.COMERCIAL :=  USER;
    //   :BNIVEL.DES_COM := :this.PARAMETER.get("PNOMBCOMER");
    //   --
    //   IF :BNIVEL.PAIS = 'S' THEN
    //     :this.PARAMETER.get("PCIUDAD") := '000';
    //   ELSE
    //     :this.PARAMETER.get("PCIUDAD") := :BNIVEL.CIUDAD;
    //   END IF;   
    //   :this.PARAMETER.get("PGRUCOM") := :BNIVEL.GRUPO;
    //   :this.PARAMETER.get("PUSUARI") := :BNIVEL.COMERCIAL;
    // END IF; END;
    //#endregion
    async CMFMENU_bnivel_whenCreateRecord() {
        console.log("Entering CMFMENU_bnivel_whenCreateRecord");
        if (["GF", "JP", "GC", "GI", "SR", "JP", "JM", "AM", "OM", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            this.BNIVEL.PAIS = "S";
            this.BNIVEL.GRUPO = "0";
            this.BNIVEL.COMERCIAL = "%";
            this.BNIVEL.DES_COM = "TODOS LOS COMERCIALES";
            if (this.BNIVEL.PAIS == "S") {
                this.PARAMETER.set("PCIUDAD", "000");
            }
            else {
                this.PARAMETER.set("PCIUDAD", this.BNIVEL.CIUDAD);
            }
            this.PARAMETER.set("PGRUCOM", this.BNIVEL.GRUPO);
            this.PARAMETER.set("PUSUARI", this.BNIVEL.COMERCIAL);
        }
        else {
            this.BNIVEL.PAIS = "N";
            this.BNIVEL.COMERCIAL = PLSQLBuiltins.user();
            this.BNIVEL.DES_COM = this.PARAMETER.get("PNOMBCOMER");
            if (this.BNIVEL.PAIS == "S") {
                this.PARAMETER.set("PCIUDAD", "000");
            }
            else {
                this.PARAMETER.set("PCIUDAD", this.BNIVEL.CIUDAD);
            }
            this.PARAMETER.set("PGRUCOM", this.BNIVEL.GRUPO);
            this.PARAMETER.set("PUSUARI", this.BNIVEL.COMERCIAL);
        }
        console.log("Exiting CMFMENU_bnivel_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("PITEMANT") := :SYSTEM.CURSOR_ITEM;
    // :this.PARAMETER.get("PREGANT") := TO_NUMBER(:SYSTEM.CURSOR_RECORD); END;
    //#endregion
    async CMFMENU_bnivel_postBlock() {
        console.log("Entering CMFMENU_bnivel_postBlock");
        // this.PARAMETER.set("PITEMANT") = this.SYSTEM.CURSOR_ITEM;
        // this.PARAMETER.set("PREGANT") = PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD"));
        console.log("Exiting CMFMENU_bnivel_postBlock");
    }

    //#region PLSQL
    // BEGIN IF :BNIVEL.GRUPO IS NULL THEN
    //  LIB$DTNERFRMA('ESCOJA EL GRUPO');
    // END IF; END;
    //#endregion
    async CMFMENU_bnivel_grupo_whenValidateItem() {
        console.log("Entering CMFMENU_bnivel_grupo_whenValidateItem");
        if ((this.BNIVEL.GRUPO == null)) {
            // CMFMENU_LIB$DTNERFRMA("ESCOJA EL GRUPO");
        }
        console.log("Exiting CMFMENU_bnivel_grupo_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  VUSU SETCOMCIA%ROWTYPE;
    // BEGIN
    //   IF :BNIVEL.COMERCIAL IS NOT NULL THEN
    //    IF :BNIVEL.COMERCIAL <> '%' THEN
    //       PQBD_COL_COMGEN.PCOMCIA(:BNIVEL.COMERCIAL, VUSU);
    //       :BNIVEL.DES_COM := VUSU.COM_NOMBRE||' '||VUSU.COM_APELLIDO;
    //     ELSE
    //       :BNIVEL.DES_COM := 'TODOS LOS COMERCIALES';
    //     END IF;
    //   END IF;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //      LIB$DTNERFRMA('EL USUARIO '||:BNIVEL.COMERCIAL||' NO EXISTE');
    // END;
    //#endregion
    async CMFMENU_bnivel_comercial_whenValidateItem() {
        console.log("Entering CMFMENU_bnivel_comercial_whenValidateItem");
        let VUSU: null = null;
        if ((this.BNIVEL.COMERCIAL != null)) {
            if (this.BNIVEL.COMERCIAL != "%") {
                // CMFMENU_PQBD_COL_COMGEN.PCOMCIA(BNIVEL.COMERCIAL, VUSU);
                // this.BNIVEL.DES_COM = this.VUSU.COM_NOMBRE + " " + this.VUSU.COM_APELLIDO;
            }
            else {
                this.BNIVEL.DES_COM = "TODOS LOS COMERCIALES";
            }
        }
        // if (result0 == null || result0.length == 0) {

        //     // CMFMENU_LIB$DTNERFRMA("EL USUARIO " + BNIVEL.COMERCIAL + " NO EXISTE");
        // }

        console.log("Exiting CMFMENU_bnivel_comercial_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :BNIVEL.PAIS = 'N' THEN
    //  IF :BNIVEL.CIUDAD IS NULL THEN
    //   LIB$DTNERFRMA('ESCOJA LA CIUDAD');
    //  END IF;
    // END IF; END;
    //#endregion
    async CMFMENU_bnivel_ciudad_whenValidateItem() {
        console.log("Entering CMFMENU_bnivel_ciudad_whenValidateItem");
        if (this.BNIVEL.PAIS == "N") {
            if ((this.BNIVEL.CIUDAD == null)) {
                // CMFMENU_LIB$DTNERFRMA("ESCOJA LA CIUDAD");
            }
        }
        console.log("Exiting CMFMENU_bnivel_ciudad_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :BNIVEL.PAIS := 'N';
    // SET_ITEM_INSTANCE_PROPERTY('BNIVEL.PAIS',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE"); END;
    //#endregion
    async CMFMENU_bnivel_ciudad_whenListChanged() {
        console.log("Entering CMFMENU_bnivel_ciudad_whenListChanged");
        this.BNIVEL.PAIS = "N";
        // this.oracleFormsBuiltins.set_item_instance_property("BNIVEL.PAIS", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        console.log("Exiting CMFMENU_bnivel_ciudad_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :BNIVEL.PAIS = 'S' THEN
    //   :BNIVEL.CIUDAD := NULL;
    //   SET_ITEM_INSTANCE_PROPERTY('BNIVEL.CIUDAD',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // END IF; END;
    //#endregion
    async CMFMENU_bnivel_pais_whenCheckboxChanged() {
        console.log("Entering CMFMENU_bnivel_pais_whenCheckboxChanged");
        if (this.BNIVEL.PAIS == "S") {
            this.BNIVEL.CIUDAD = null;
            // this.oracleFormsBuiltins.set_item_instance_property("BNIVEL.CIUDAD", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        }
        console.log("Exiting CMFMENU_bnivel_pais_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  TB_PG_ID  TAB_PAGE;
    // BEGIN
    //  IF :NIT IS NOT NULL THEN
    //     TB_PG_ID := FIND_TAB_PAGE('TAB_COMLEASI');
    //    IF GET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE") = 'FALSE' THEN
    //      SET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
    //      GO_BLOCK('CMTCOMPLEAS');
    //        EXECUTE_QUERY; 
    //    ELSE
    //     GO_BLOCK('CMTCOMPLEAS');
    //       EXECUTE_QUERY; 
    //    END IF;
    //  ELSE
    //    LIB$DTNERFRMA('DEBE INGRESAR UN NIT PARA INGRESAR LAS COMPAÑIAS DE LEASING.');
    //  END IF;  
    // END;
    //#endregion
    async CMFMENU_paragestion_vCompa_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vCompa_whenButtonPressed");
        let TB_PG_ID: null = null;
        // if ((NIT != null)) {
        //     TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_COMLEASI");
        //     if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
        //         this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.go_block("CMTCOMPLEAS");
        //         this.oracleFormsBuiltins.execute_query();
        //     }
        //     else {
        //         this.oracleFormsBuiltins.go_block("CMTCOMPLEAS");
        //         this.oracleFormsBuiltins.execute_query();
        //     }
        // }
        // else {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR UN NIT PARA INGRESAR LAS COMPAÑIAS DE LEASING.");
        // }
        console.log("Exiting CMFMENU_paragestion_vCompa_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    LISTAREP    PARAMLIST;
    //  BEGIN
    // //      LISTAREP := GET_PARAMETER_LIST('LISTAREPORTES');
    //      IF ID_NULL(LISTAREP) THEN
    // //          LISTAREP := CREATE_PARAMETER_LIST('LISTAREPORTES');
    //          ADD_PARAMETER(LISTAREP,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //          ADD_PARAMETER(LISTAREP,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //          ADD_PARAMETER(LISTAREP,'PU_TER1', "TEXT_PARAMETER",:BTER.NIT);
    //      END IF;
    // 
//    // //       RUN_PRODUCT (REPORTS, 'ANRMOTER', ASYNCHRONOUS, RUNTIME, FILESYSTEM, LISTAREP, NULL);
    // 
    //  END;
    //#endregion
    async CMFMENU_paragestion_vMoraxter_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vMoraxter_whenButtonPressed");
        let LISTAREP: number = null;
        // LISTAREP = this.oracleFormsBuiltins.get_parameter_list("LISTAREPORTES");
        if (this.oracleFormsBuiltins.id_null(LISTAREP)) {
            // LISTAREP = this.oracleFormsBuiltins.create_parameter_list("LISTAREPORTES");
            this.oracleFormsBuiltins.add_parameter(LISTAREP, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LISTAREP, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
            this.oracleFormsBuiltins.add_parameter(LISTAREP, "PU_TER1", "TEXT_PARAMETER", this.BTER.NIT);
        }
//        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRMOTER", ASYNCHRONOUS, RUNTIME, FILESYSTEM, LISTAREP, null);
        console.log("Exiting CMFMENU_paragestion_vMoraxter_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    // IF :NIT IS NOT NULL THEN
    //   PU_LLAMAR_VARIABLES(:NIT);
    // ELSE
    //  LIB$DTNERFRMA('DEBE INGRESAR UN NIT PARA CONSULTAR LAS VARIABLES.');
    // END IF;
    // END;
    //#endregion
    async CMFMENU_paragestion_vVarcua_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vVarcua_whenButtonPressed");
        // if ((NIT != null)) {
        //     // CMFMENU_PU_LLAMAR_VARIABLES(NIT);
        // }
        // else {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR UN NIT PARA CONSULTAR LAS VARIABLES.");
        // }
        console.log("Exiting CMFMENU_paragestion_vVarcua_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :NIT IS NOT NULL THEN
    //   PU_CREAR_SOLICITUDES(:NIT,'S');
    // ELSE
    //  LIB$DTNERFRMA('DEBE INGRESAR UN NIT PARA CREAR LA SOLICITUD.');
    // END IF; END;
    //#endregion
    async CMFMENU_paragestion_vSolicr_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vSolicr_whenButtonPressed");
        // if ((NIT != null)) {
        //     // CMFMENU_PU_CREAR_SOLICITUDES(NIT, "S");
        // }
        // else {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR UN NIT PARA CREAR LA SOLICITUD.");
        // }
        console.log("Exiting CMFMENU_paragestion_vSolicr_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTAR   NUMBER;
    // BEGIN
    //  
    // IF :NIT IS NOT NULL THEN
    // BEGIN
    //  
    //  PUP_VALIDA;
    //  
    //    SELECT COUNT(*)
    //      INTO V_CONTAR
    //    FROM CMTRIO
    //    WHERE RIO_NIT = :NIT;
    //   END;
    //   IF V_CONTAR > 0 THEN
    //    COMMIT_FORM;
    //    PU_LLAMAR_RIO(:BTER.NIT, 'C', :BTER.COMER);
    //   ELSE
    //    COMMIT_FORM;
    //    PU_LLAMAR_RIO(:BTER.NIT, 'T', :BTER.COMER);
    //   END IF;
    //  --LIB$ALERTA('MENSAJE','ESTA TEMPORALMENTE SUSPENDIDO LA CREACIÓN Y/O MODIFICACIÓN DE R.I.O(1).',NULL,NULL,NULL, T_RESPUESTA);
    // ELSE
    //  LIB$DTNERFRMA('DEBE INGRESAR UN NIT PARA CREAR UN R.I.O (1).');
    // END IF;
    // END;
    //#endregion
    async CMFMENU_paragestion_vRio_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vRio_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_CONTAR: number = null;
        // if ((NIT != null)) {
        //     // CMFMENU_PUP_VALIDA();
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("NIT", NIT);
        //     // call REST API
        //     const result1 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vrio_whenbuttonpressed_query1", payload1);
        //     // get values from result
        //     V_CONTAR = result1[0].get("V_CONTAR");
        //     if (V_CONTAR > 0) {
        //         this.oracleFormsBuiltins.commit_form();
        //         // CMFMENU_PU_LLAMAR_RIO(this.BTER.NIT, "C", this.BTER.COMER);
        //     }
        //     else {
        //         this.oracleFormsBuiltins.commit_form();
        //         // CMFMENU_PU_LLAMAR_RIO(this.BTER.NIT, "T", this.BTER.COMER);
        //     }
        // }
        // else {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR UN NIT PARA CREAR UN R.I.O (1).");
        // }
        console.log("Exiting CMFMENU_paragestion_vRio_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('SOL_EC');
    // PUP_SOLICITUDEC;
    // GO_BLOCK('SOL_EC');
    // GO_ITEM('CODIGO'); END;
    //#endregion
    async CMFMENU_paragestion_vSolictudesec_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vSolictudesec_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("SOL_EC");
        // CMFMENU_PUP_SOLICITUDEC();
        this.oracleFormsBuiltins.go_block("SOL_EC");
        this.oracleFormsBuiltins.go_item("CODIGO");
        console.log("Exiting CMFMENU_paragestion_vSolictudesec_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :NIT IS NOT NULL THEN
    //   PU_LLAMAR_SOLICITUDESXTERCERO(:NIT);
    // ELSE
    //  LIB$DTNERFRMA('DEBE INGRESAR UN NIT PARA CONSULTAR LAS SOLICITUDES.');
    // END IF; END;
    //#endregion
    async CMFMENU_paragestion_vSolcli_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vSolcli_whenButtonPressed");
        // if ((NIT != null)) {
        //     // CMFMENU_PU_LLAMAR_SOLICITUDESXTERCERO(NIT);
        // }
        // else {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR UN NIT PARA CONSULTAR LAS SOLICITUDES.");
        // }
        console.log("Exiting CMFMENU_paragestion_vSolcli_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON NUMBER;
    //   VCAMPOANT VARCHAR2(256);
    //   V_MAXPER  ANTCOMCENR.COMCRI_PERCOD%TYPE;
    //   LPCOGENID PARAMLIST;
    //   V_EXISTE  NUMBER;
    // BEGIN
    //    LIB$ALERTA('MENSAJE','QUÉ CENTRAL DE RIESGO DESEA CONSULTAR?'
    //           ,'CIFIN', 'DATACREDITO','CANCELAR', VBOTON);
    //     IF VBOTON = 1 THEN --CIFIN
    //       BEGIN
    //        SELECT MAX(COMCRI_PERCOD) 
    //          INTO V_MAXPER
    //        FROM ANTCOMCENR
    //     WHERE COMCRI_NITTER = :NIT;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        V_MAXPER := NULL;
    //      END;
    //       PU_LLAMAR_CENTRALES('001',:NIT,V_MAXPER);
    //     ELSIF VBOTON = 2 THEN --DATACREDITO     
    //      BEGIN
    //        SELECT MAX(COMCRI_PERCOD) 
    //          INTO V_MAXPER
    //        FROM ANTCOMCENR
    //     WHERE COMCRI_NITTER = :NIT
    //      AND  COMCRI_PERCOD = '002';
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        V_MAXPER := NULL;
    //       END;
    //       BEGIN
    //        SELECT COUNT(*)
    //          INTO V_EXISTE 
    //        FROM ANTCOMCENR
    //     WHERE COMCRI_NITTER = :NIT
    //      AND  COMCRI_PERCOD = '002';  
    //      END;
    //      IF V_EXISTE = 0 THEN 
    //       LIB$DTNERFRMA('EL TERCERO NO TIENE INFORMACIÓN X DATACREDITO.');
    //       ELSE
    //         PU_LLAMAR_CENTRALES('002',:NIT,V_MAXPER);
    //       END IF;
    //     END IF;    
    // END;
    //#endregion
    async CMFMENU_paragestion_vCompago_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vCompago_whenButtonPressed");
        let VBOTON: number = null;
        let VCAMPOANT: string = null;
        let V_MAXPER: null = null;
        let LPCOGENID: number = null;
        let V_EXISTE: number = null;
        // CMFMENU_LIB$ALERTA("MENSAJE", "QUÉ CENTRAL DE RIESGO DESEA CONSULTAR?", "CIFIN", "DATACREDITO", "CANCELAR", VBOTON);
        if (VBOTON == 1) {
            // construct payload
            let payload1 = new Map();
            // payload1.set("NIT", NIT);
            // call REST API
            const result1 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vcompago_whenbuttonpressed_query1", payload1);
            // get values from result
            V_MAXPER = result1[0].get("V_MAXPER");
            if (result1 == null || result1.length == 0) {

                V_MAXPER = null;
            }

            // CMFMENU_PU_LLAMAR_CENTRALES("001", NIT, V_MAXPER);
        }
        else if (VBOTON == 2) {
            // construct payload
            let payload2 = new Map();
            // payload2.set("NIT", NIT);
            // call REST API
            const result2 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vcompago_whenbuttonpressed_query2", payload2);
            // get values from result
            V_MAXPER = result2[0].get("V_MAXPER");
            if (result2 == null || result2.length == 0) {

                V_MAXPER = null;
            }

            // construct payload
            let payload3 = new Map();
            // payload3.set("NIT", NIT);
            // call REST API
            const result3 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vcompago_whenbuttonpressed_query3", payload3);
            // get values from result
            V_EXISTE = result3[0].get("V_EXISTE");
            if (V_EXISTE == 0) {
                // CMFMENU_LIB$DTNERFRMA("EL TERCERO NO TIENE INFORMACIÓN X DATACREDITO.");
            }
            else {
                // CMFMENU_PU_LLAMAR_CENTRALES("002", NIT, V_MAXPER);
            }
        }
        console.log("Exiting CMFMENU_paragestion_vCompago_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VCONDICION  VARCHAR2(200);
    //  VCONDICION2 VARCHAR2(200);
    //  VEXISTE   NUMBER;
    // BEGIN
    //  IF :NIT IS NOT NULL THEN
    //   HIDE_VIEW('PAGSTACK_5');
    //   VCONDICION := 'COM_CODIGO = NVL(:BTER.COMER,COM_CODIGO)';--ARQUITECTURA
    //     VCONDICION2 := 'TERSEC_NIT   = NVL(:BTER.NIT,TERSEC_NIT)';
    //     SET_BLOCK_PROPERTY('SETCOMCIACAP',DEFAULT_WHERE,VCONDICION);
    //     SET_BLOCK_PROPERTY('SETTERSEC',DEFAULT_WHERE,VCONDICION2);
    //     GO_BLOCK('SETCOMCIACAP');
    //     EXECUTE_QUERY;
    //     --GO_BLOCK('SETCOMCIA_NEW');
    //     --ENTER_QUERY;
    //     --GO_BLOCK('SETCOMCIA');
    //   ELSE
    //     LIB$DTNERFRMA('DEBE INGRESAR UN NIT PARA REASIGNAR UN TERCERO.');
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_paragestion_vReasigcomcapta_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vReasigcomcapta_whenButtonPressed");
        let VCONDICION: string = null;
        let VCONDICION2: string = null;
        let VEXISTE: number = null;
        // if ((NIT != null)) {
        //     this.oracleFormsBuiltins.hide_view("PAGSTACK_5");
        //     VCONDICION = "COM_CODIGO = NVL(:BTER.COMER,COM_CODIGO)";
        //     VCONDICION2 = "TERSEC_NIT   = NVL(:BTER.NIT,TERSEC_NIT)";
        //     this.oracleFormsBuiltins.set_block_property("SETCOMCIACAP", "DEFAULT_WHERE", VCONDICION);
        //     this.oracleFormsBuiltins.set_block_property("SETTERSEC", "DEFAULT_WHERE", VCONDICION2);
        //     this.oracleFormsBuiltins.go_block("SETCOMCIACAP");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR UN NIT PARA REASIGNAR UN TERCERO.");
        // }
        console.log("Exiting CMFMENU_paragestion_vReasigcomcapta_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  TB_PG_ID  TAB_PAGE;
    //  V_CONDI VARCHAR2(80);
    // BEGIN
    //  
    //   TB_PG_ID := FIND_TAB_PAGE('TAB_REFERIDOS');
    //    IF GET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE") = 'FALSE' THEN
    //      SET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
    //    END IF;
    //    
    //    IF NOT LIB$PBLARLSTARG('REF_PARAM.TXT_ORIGEN','GR_SEGXTERORIGEN') THEN
    //     LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA REF_PARAM.TXT_ORIGEN');
    //   END IF;
    // 
    //    IF NOT LIB$PBLARLSTARG('REF_PARAM.TXT_CIUDAD','GRPLAZAS2') THEN
    //      LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA REF_PARAM.TXT_CIUDAD');
    //    END IF;
    //  
    //  :TXT_CIUDAD    := :this.PARAMETER.get("PPLAZU");
    //   --:TXT_CIUDAD := F_TRAE(NVL(:BTER.COMER,:BTER.COMERSEC),'PLAZA');
    //  IF :this.PARAMETER.get("PJERAR") NOT IN ('2.3','3.2','3.3','3.4','3.5','3.6','3.8','4.4','2.2','2.4') THEN
    //    :REF_PARAM.TXT_COMER := UPPER(USER);
    //  END IF;
    // 
    //  :CHK_INACTIVOS := 'A';
    //  
    //  IF :NIT IS NOT NULL THEN
    //   ----CAHH    PY 1213
    //   
    //   :TXT_ID := :NIT;
    //   V_CONDI := 'REF_NITORIG = '||:TXT_ID;
    //   
    //  
    //   :DIS_NOMBRE := PUP_FUNOMBRE (:TXT_ID, 'T');
    // 
    //   SET_BLOCK_PROPERTY('CMTREFER',DEFAULT_WHERE,V_CONDI); 
    // 
    //   ----
    //      GO_BLOCK('CMTREFER');
    //        EXECUTE_QUERY; 
    // 
    //   
    // -- ELSE
    // --   LIB$DTNERFRMA('DEBE INGRESAR UN NIT PARA INGRESAR REFERIDOS.'); --CAHH  PY 1213
    // 
    // NULL;
    //  END IF;  
    //  
    // 
    //    
    //  SET_ITEM_PROPERTY('BTER.BTN_DATREFIERE',LABEL,'>>');
    //  HIDE_VIEW ('DAT_REFIERE');
    //  GO_ITEM('REF_PARAM.TXT_ID');
    //  
    //  :REF_PARAM.TXT_CIUDAD := :this.PARAMETER.get("PPLAZU");
    //  
    // END;
    //#endregion
    async CMFMENU_paragestion_vRefer_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vRefer_whenButtonPressed");
        let TB_PG_ID: null = null;
        let V_CONDI: string = null;
        // TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_REFERIDOS");
        // if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
        //     this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
        // }
        // if ((!LIB$PBLARLSTARG("REF_PARAM.TXT_ORIGEN", "GR_SEGXTERORIGEN"))) {
        //     // CMFMENU_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA REF_PARAM.TXT_ORIGEN");
        // }
        // if ((!LIB$PBLARLSTARG("REF_PARAM.TXT_CIUDAD", "GRPLAZAS2"))) {
        //     // CMFMENU_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA REF_PARAM.TXT_CIUDAD");
        // }
        // this.PARAGESTION.TXT_CIUDAD = this.PARAMETER.get("PPLAZU");
        // if (["2.3", "3.2", "3.3", "3.4", "3.5", "3.6", "3.8", "4.4", "2.2", "2.4"].indexOf(this.PARAMETER.get("PJERAR")) != -1) {
        //     this.REF_PARAM.TXT_COMER = PLSQLBuiltins.upper(USER);
        // }
        // this.PARAGESTION.CHK_INACTIVOS = "A";
        // if ((NIT != null)) {
        //     this.PARAGESTION.TXT_ID = this.PARAGESTION.NIT;
        //     V_CONDI = "REF_NITORIG = " + TXT_ID;
        //     this.PARAGESTION.DIS_NOMBRE = PUP_FUNOMBRE(TXT_ID, "T");
        //     this.oracleFormsBuiltins.set_block_property("CMTREFER", "DEFAULT_WHERE", V_CONDI);
        //     this.oracleFormsBuiltins.go_block("CMTREFER");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        this.oracleFormsBuiltins.set_item_property("BTER.BTN_DATREFIERE", "LABEL", ">>");
        this.oracleFormsBuiltins.hide_view("DAT_REFIERE");
        this.oracleFormsBuiltins.go_item("REF_PARAM.TXT_ID");
        this.REF_PARAM.TXT_CIUDAD = this.PARAMETER.get("PPLAZU");
        console.log("Exiting CMFMENU_paragestion_vRefer_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :NIT IS NOT NULL THEN
    //   PU_LLAMAR_COBRANZA(:NIT);
    // ELSE
    //  LIB$DTNERFRMA('DEBE INGRESAR UN NIT PARA CONSULTAR LA CARTERA DEL CLIENTE.');
    // END IF; END;
    //#endregion
    async CMFMENU_paragestion_vCarcli_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vCarcli_whenButtonPressed");
        // if ((NIT != null)) {
        //     // CMFMENU_PU_LLAMAR_COBRANZA(NIT);
        // }
        // else {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR UN NIT PARA CONSULTAR LA CARTERA DEL CLIENTE.");
        // }
        console.log("Exiting CMFMENU_paragestion_vCarcli_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTAR  NUMBER;
    // BEGIN 
    // IF :NIT IS NOT NULL THEN
    //   BEGIN
    //    SELECT COUNT(*)
    //      INTO V_CONTAR
    //    FROM COL
    //    WHERE COLBEN = :BTER.NIT;
    //      --AND COLESTC = 'VI'; SE QUITA A SOLICITUD DE LA DOCTORA MIREYA MORENO
    //   END;
    //   IF V_CONTAR = 0 THEN
    //    LIB$DTNERFRMA('EL CLIENTE NO TIENE CONTRATOS VIGENTES.');
    //   ELSE
    //    PU_LLAMAR_CONTRATO('L',NULL,NULL,NULL,'T', :BTER.NIT);
    //   END IF;
    // ELSE
    //  LIB$DTNERFRMA('DEBE INGRESAR UN NIT PARA CONSULTAR LOS CONTRATOS DEL CLIENTE.');
    // END IF;
    // END;
    //#endregion
    async CMFMENU_paragestion_vBtoctos_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vBtoctos_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_CONTAR: number = null;
        // if ((NIT != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("NIT", this.BTER.NIT);
        //     // call REST API
        //     const result1 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vbtoctos_whenbuttonpressed_query1", payload1);
        //     // get values from result
        //     V_CONTAR = result1[0].get("V_CONTAR");
        //     if (V_CONTAR == 0) {
        //         // CMFMENU_LIB$DTNERFRMA("EL CLIENTE NO TIENE CONTRATOS VIGENTES.");
        //     }
        //     else {
        //         // CMFMENU_PU_LLAMAR_CONTRATO("L", null, null, null, "T", this.BTER.NIT);
        //     }
        // }
        // else {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR UN NIT PARA CONSULTAR LOS CONTRATOS DEL CLIENTE.");
        // }
        console.log("Exiting CMFMENU_paragestion_vBtoctos_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON NUMBER;
    //   VCAMPOANT VARCHAR2(256);
    //   V_MAXPER  ANTENDTER.ENDTER_CODPER%TYPE;
    //   LPCOGENID PARAMLIST;
    //   V_EXISTE  NUMBER;
    // BEGIN
    //      BEGIN
    //        SELECT MAX(ENDTER_CODPER) 
    //          INTO V_MAXPER
    //        FROM ANTENDTER
    //     WHERE ENDTER_CODTER = :NIT;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        V_MAXPER := NULL;
    //       END;
    //       BEGIN
    //        SELECT COUNT(*)
    //          INTO V_EXISTE 
    //        FROM ANTENDTER
    //       WHERE ENDTER_CODTER = :NIT;
    //      END;
    //      IF V_EXISTE = 0 THEN 
    //       LIB$DTNERFRMA('EL TERCERO NO TIENE INFORMACIÓN EN ENDEUDAMIENTO X TERCERO.');
    //       ELSE
    //         PU_LLAMAR_ENDEUXTERCERO(:BTER.NIT,V_MAXPER);
    //       END IF;   
    // END;
    //#endregion
    async CMFMENU_paragestion_vCendeuxter_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vCendeuxter_whenButtonPressed");
        let VBOTON: number = null;
        let VCAMPOANT: string = null;
        let V_MAXPER: null = null;
        let LPCOGENID: number = null;
        let V_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("NIT", NIT);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vcendeuxter_whenbuttonpressed_query1", payload1);
        // get values from result
        V_MAXPER = result1[0].get("V_MAXPER");
        if (result1 == null || result1.length == 0) {

            V_MAXPER = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("NIT", NIT);
        // call REST API
        const result2 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vcendeuxter_whenbuttonpressed_query2", payload2);
        // get values from result
        V_EXISTE = result2[0].get("V_EXISTE");
        if (V_EXISTE == 0) {
            // CMFMENU_LIB$DTNERFRMA("EL TERCERO NO TIENE INFORMACIÓN EN ENDEUDAMIENTO X TERCERO.");
        }
        else {
            // CMFMENU_PU_LLAMAR_ENDEUXTERCERO(this.BTER.NIT, V_MAXPER);
        }
        console.log("Exiting CMFMENU_paragestion_vCendeuxter_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON NUMBER;
    //   VCAMPOANT VARCHAR2(256);
    //   V_MAXPER  ANTBALXTER.BAXTER_CODPER%TYPE;
    //   LPCOGENID PARAMLIST;
    //   V_EXISTE  NUMBER;
    // BEGIN
    //      BEGIN
    //        SELECT MAX(BAXTER_CODPER) 
    //          INTO V_MAXPER
    //        FROM ANTBALXTER
    //     WHERE BAXTER_CODTER = :NIT;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        V_MAXPER := NULL;
    //       END;
    //       BEGIN
    //        SELECT COUNT(*)
    //          INTO V_EXISTE 
    //        FROM ANTBALXTER
    //       WHERE BAXTER_CODTER = :NIT;
    //      END;
    //      IF V_EXISTE = 0 THEN 
    //       LIB$DTNERFRMA('EL TERCERO NO TIENE INFORMACIÓN DE BALANCES X TERCERO.');
    //       ELSE
    //         PU_LLAMAR_CONSULTABALANCES(:NIT,V_MAXPER);
    //       END IF;   
    // END;
    //#endregion
    async CMFMENU_paragestion_vCbalaxter_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vCbalaxter_whenButtonPressed");
        let VBOTON: number = null;
        let VCAMPOANT: string = null;
        let V_MAXPER: null = null;
        let LPCOGENID: number = null;
        let V_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("NIT", NIT);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vcbalaxter_whenbuttonpressed_query1", payload1);
        // get values from result
        V_MAXPER = result1[0].get("V_MAXPER");
        if (result1 == null || result1.length == 0) {

            V_MAXPER = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("NIT", NIT);
        // call REST API
        const result2 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vcbalaxter_whenbuttonpressed_query2", payload2);
        // get values from result
        V_EXISTE = result2[0].get("V_EXISTE");
        if (V_EXISTE == 0) {
            // CMFMENU_LIB$DTNERFRMA("EL TERCERO NO TIENE INFORMACIÓN DE BALANCES X TERCERO.");
        }
        else {
            // CMFMENU_PU_LLAMAR_CONSULTABALANCES(NIT, V_MAXPER);
        }
        console.log("Exiting CMFMENU_paragestion_vCbalaxter_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_EXTERSEC   NUMBER;
    //  V_EXTERXCOM  NUMBER;
    //  T_RESPUESTA  NUMBER;
    // BEGIN
    // IF FRM$ALERTA_SINO ('SE VA A ACTULIZAR EL TERCERO '||:BTER.NOMBRE||' '||'COMO CLIENTE DESCARTADO ESTA SEGURO?') = 1 THEN 
    //        --ACTUALIZACIÓN DEL TERCERO EN PERFIL 2 
    //        --CODIGO DE DESCARTADOS
    //        UPDATE OPS$SEGUI.TER
    //           SET TERPERF = '005'
    //        WHERE TERCOD = :BTER.NIT;
    //        COMMIT;
    //     --ACTUALIZA TODOS LOS REGISTROS QUE FUERON CREADOS POR EL COMERCIAL 
    //     UPDATE CMTSEGXTER
    //        SET SEG_ESTSEG = 'CA'
    //            ,SEG_CODMOT = '002'
    //            ,SEG_OBSMOT = 'SE DESCARTO DESDE LA OPCION DE INFORMACION DE GESTIÓN. CON EL USUARIO : '||:BTER.COMER
    //            ,SEG_FECUPD = SYSDATE
    //      WHERE SEG_NITTER = :BTER.NIT
    //        AND SEG_COMER  = :BTER.COMER
    //        AND SEG_ESTSEG IN ('GR','AP');
    //       COMMIT;
    //     --BORRAR DE LA TABLA DE CADA COMERCIAL; ES DECIR FINANCIEROS SETTERXCOM ; CAPTACIONE Y LOP SETTTERSEC EL VINCULO CON ESE COMERCIAL
    //     -- YA NO SE BORRA DE LAS TABLAS ..RTAG 2009-03-01
    //      BEGIN
    //        SELECT COUNT(*) 
    //          INTO V_EXTERXCOM
    //        FROM SETTERXCOM
    //        WHERE CXT_NIT    = :BTER.NIT
    //          AND CXT_CODIGO = :BTER.COMER;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //        BEGIN
    //          SELECT COUNT(*) 
    //           INTO V_EXTERSEC
    //          FROM SETTERSEC
    //          WHERE TERSEC_NIT    = :BTER.NIT
    //            AND TERSEC_CODIGO = :BTER.COMER;
    //        EXCEPTION WHEN NO_DATA_FOUND THEN
    //          LIB$DTNERFRMA('NO SE PUDO DESVINCULAR EL CLIENTE DEL COMERCIAL'); 
    //        END;
    //     END;
    //     BEGIN
    //        SELECT COUNT(*) 
    //         INTO V_EXTERSEC
    //        FROM SETTERSEC
    //        WHERE TERSEC_NIT    = :BTER.NIT
    //          AND TERSEC_CODIGO = :BTER.COMER;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //        LIB$DTNERFRMA('NO SE PUDO DESVINCULAR EL CLIENTE DEL COMERCIAL'); 
    //     END;
    //     /*
    //      IF V_EXTERXCOM > 0 THEN
    //        DELETE SETTERXCOM
    //        WHERE CXT_NIT =   :BTER.NIT
    //          AND CXT_CODIGO = :BTER.COMER;
    //        COMMIT;
    //      ELSIF V_EXTERSEC > 0 THEN
    //        DELETE SETTERSEC
    //        WHERE TERSEC_NIT    = :BTER.NIT
    //           AND TERSEC_CODIGO = :BTER.COMER;
    //         COMMIT;
    //      END IF;
    //    */
    //      -- GUARDA EN LA TABLA DE HISTORIA QUE EL CLIENTE LO TUVO EL COMERCIAL QUE LO ESTA DESCANTANDO
    //        INSERT INTO SETTERXCH (CXT_CODIGO,CXT_FECREG,CXT_NIT,CXT_USER)
    //           VALUES(:BTER.COMER,SYSDATE,:BTER.NIT,USER);
    //     --
    //       COMMIT;
    //       COMMIT_FORM;
    //       LIB$ALERTA ('MENSAJE','REGISTRO ACTUALIZADO CON MOTIVO CANCELACIÓN DEFINITIVA.',NULL,NULL,NULL, T_RESPUESTA);
    // ELSE
    //   LIB$DTNERFRMA('PROCESO CANCELADO POR EL USUARIO');
    // END IF;   
    // END;
    //#endregion
    async CMFMENU_paragestion_vBtodescartar_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vBtodescartar_whenButtonPressed");
        let V_EXTERSEC: number = null;
        let V_EXTERXCOM: number = null;
        let T_RESPUESTA: number = null;
        // if (FRM$ALERTA_SINO("SE VA A ACTULIZAR EL TERCERO " + BTER.NOMBRE + " " + "COMO CLIENTE DESCARTADO ESTA SEGURO?") == 1) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.NIT = : NIT;
        //     // call REST API
        //     const result1 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vbtodescartar_whenbuttonpressed_query1", payload1);
        //     // construct payload
        //     let payload3 = new Map();
        //     payload3.COMER = : COMER;
        //     payload3.NIT = : NIT;
        //     // call REST API
        //     const result3 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vbtodescartar_whenbuttonpressed_query3", payload3);
        //     // construct payload
        //     let payload5 = new Map();
        //     payload5.set("NIT", this.BTER.NIT);
        //     payload5.set("COMER", this.BTER.COMER);
        //     // call REST API
        //     const result5 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vbtodescartar_whenbuttonpressed_query5", payload5);
        //     // get values from result
        //     V_EXTERXCOM = result5[0].get("V_EXTERXCOM");
        //     if (result5 == null || result5.length == 0) {

        //         // construct payload
        //         let payload6 = new Map();
        //         payload6.set("NIT", this.BTER.NIT);
        //         payload6.set("COMER", this.BTER.COMER);
        //         // call REST API
        //         const result6 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vbtodescartar_whenbuttonpressed_query6", payload6);
        //         // get values from result
        //         V_EXTERSEC = result6[0].get("V_EXTERSEC");
        //         if (result6 == null || result6.length == 0) {

        //             // CMFMENU_LIB$DTNERFRMA("NO SE PUDO DESVINCULAR EL CLIENTE DEL COMERCIAL");
        //         }

        //     }

        //     // construct payload
        //     let payload7 = new Map();
        //     payload7.set("NIT", this.BTER.NIT);
        //     payload7.set("COMER", this.BTER.COMER);
        //     // call REST API
        //     const result7 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vbtodescartar_whenbuttonpressed_query7", payload7);
        //     // get values from result
        //     V_EXTERSEC = result7[0].get("V_EXTERSEC");
        //     if (result7 == null || result7.length == 0) {

        //         // CMFMENU_LIB$DTNERFRMA("NO SE PUDO DESVINCULAR EL CLIENTE DEL COMERCIAL");
        //     }

        //     // construct payload
        //     let payload8 = new Map();
        //     payload8.COMER = : BTER.COMER;
        //     payload8.NIT = : BTER.NIT;
        //     // call REST API
        //     const result8 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vbtodescartar_whenbuttonpressed_query8", payload8);
        //     this.oracleFormsBuiltins.commit_form();
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "REGISTRO ACTUALIZADO CON MOTIVO CANCELACIÓN DEFINITIVA.", null, null, null, T_RESPUESTA);
        // }
        // else {
        //     // CMFMENU_LIB$DTNERFRMA("PROCESO CANCELADO POR EL USUARIO");
        // }
        console.log("Exiting CMFMENU_paragestion_vBtodescartar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VCONDICION  VARCHAR2(200);
    //  VCONDICION2 VARCHAR2(200);
    //  VEXISTE   NUMBER;
    //  --PROYECTO 4613
    //  VREGIONAL   VARCHAR2(5);
    //  VTEXISTE    VARCHAR2(10);
    //   VBOTON    NUMBER;
    //   VBOLSA      VARCHAR2(2);
    //   VCOMERCIAL  VARCHAR2(2);
    //  --PROYECTO 4613
    //  
    // BEGIN
    //  
    //  
    //  IF :NIT IS NOT NULL THEN
    //    COMMIT_FORM;
    //    PUP_VALIDA;
    //  
    //   --PROYECTO 4613
    //    --PARA SABER SI EL TERCERO ES BOLSA
    //    
    //    BEGIN   
    //    SELECT 'S'
    //     INTO VBOLSA
    //     FROM SETTERXCOM 
    //     WHERE CXT_CODIGO = 160
    //     AND CXT_NIT =:NIT;
    //      
    //   EXCEPTION WHEN NO_DATA_FOUND THEN 
    //     VBOLSA := 'N' ;
    //   END;   
    //    
    //    --PARA SABER SI EL TERCERO ES BOLSA
    //    
    //     --PARA SABER SI EL USUARIO ES EL GERENTE COMERCIAL
    //    
    //    BEGIN   
    //    SELECT 'S'
    //     INTO VCOMERCIAL
    //     FROM SGUSUARIOS 
    //     WHERE USU_CODIGO = USER
    //     AND USU_CARGO_N IN('GECO','ASCM');--PROYECTO 5685
    //     --AND USU_CARGO_N = 'GECO'; ANTES
    //      
    //   EXCEPTION WHEN NO_DATA_FOUND THEN 
    //     VCOMERCIAL := 'N' ;
    //   END;   
    //    
    //    --PARA SABER SI EL USUARIO ES EL GERENTE COMERCIAL
    //      
    //  
    //   --BUSQUEDA QUE EL TERCERO PARA EL USUARIO EXISTA CON RESPECTIVA PLAZA    
    //   BEGIN
    //    SELECT 'X'
    //     INTO VTEXISTE
    //     FROM SETTERXCOM C, SETCOMCIA S
    //      WHERE C.CXT_CODIGO = S.COM_CODIGO
    //      AND S.COM_PLA = :this.PARAMETER.get("PPLAZU")
    //      --AND S.COM_ESTADO = 'A'      --SSEGOVIA  31/01/2011
    //      AND C.CXT_NIT = :NIT
    //      AND S.COM_CODUNI = :this.PARAMETER.get("PUNIDAD");
    //      
    //   EXCEPTION WHEN NO_DATA_FOUND THEN 
    //     VTEXISTE := 'Z' ;
    //   END;
    //   --BUSQUEDA DEL TERCERO PARA EL USUARIO CON RESPECTIVA PLAZA
    //   
    //   
    //   --PLAZA DEL COMERCIAL     
    //   BEGIN
    //    SELECT COM_PLA
    //     INTO VREGIONAL
    //    FROM  SETCOMCIA
    //    WHERE COM_CODIGO = :BTER.COMER
    //      AND COM_CODUNI =  :this.PARAMETER.get("PUNIDAD"); --ARQUITECTURA
    //   EXCEPTION WHEN NO_DATA_FOUND THEN 
    //     VREGIONAL := '000';  
    //   END;
    //   --PLAZA DEL COMERCIAL  
    // 
    //   IF VBOLSA = 'S' THEN
    //    
    //     --ANTES PROYECTO 4613
    //        HIDE_VIEW('PAGSTACK_5');
    //        VCONDICION := 'COM_CODIGO = NVL(:BTER.COMER,COM_CODIGO)';
    //          VCONDICION2 := 'CXT_NIT   = NVL(:BTER.NIT,CXT_NIT)';
    //          SET_BLOCK_PROPERTY('SETCOMCIA',DEFAULT_WHERE,VCONDICION);
    //          SET_BLOCK_PROPERTY('SETTERXCOM',DEFAULT_WHERE,VCONDICION2);
    //          GO_BLOCK('SETCOMCIA');
    //          EXECUTE_QUERY;
    //          
    //          VCONDICION2 := 'COM_CODIGO IN (SELECT COM_CODIGO
    //                           FROM SETCOMCIA
    //                        WHERE COM_ESTADO <> ''I''
    //                          AND COM_PLA = '''||:this.PARAMETER.get("PPLAZU")||''')';
    //          
    //          SET_BLOCK_PROPERTY('SETCOMCIA_NEW',DEFAULT_WHERE,VCONDICION2);
    //          GO_BLOCK('SETCOMCIA_NEW');
    //          EXECUTE_QUERY;
    // 
    //          --GO_BLOCK('SETCOMCIA_NEW');
    //          --ENTER_QUERY;
    //          --GO_BLOCK('SETCOMCIA');
    //      --ANTES PROYECTO 4613 
    //      
    //   ELSE 
    //     IF VCOMERCIAL = 'S' THEN
    //      
    //        --ANTES PROYECTO 4613
    //        HIDE_VIEW('PAGSTACK_5');
    //        VCONDICION := 'COM_CODIGO = NVL(:BTER.COMER,COM_CODIGO)';
    //          VCONDICION2 := 'CXT_NIT   = NVL(:BTER.NIT,CXT_NIT)';
    //          SET_BLOCK_PROPERTY('SETCOMCIA',DEFAULT_WHERE,VCONDICION);
    //          SET_BLOCK_PROPERTY('SETTERXCOM',DEFAULT_WHERE,VCONDICION2);
    //          GO_BLOCK('SETCOMCIA');
    //          EXECUTE_QUERY;
    //          
    //                   VCONDICION2 := 'COM_CODIGO IN (SELECT COM_CODIGO 
    //                           FROM SETCOMCIA
    //                        WHERE COM_ESTADO <> ''I''
    //                          AND COM_PLA = '''||:this.PARAMETER.get("PPLAZU")||''')';
    //          
    //          SET_BLOCK_PROPERTY('SETCOMCIA_NEW',DEFAULT_WHERE,VCONDICION2);
    //          GO_BLOCK('SETCOMCIA_NEW');
    //          EXECUTE_QUERY;
    //          
    //          --GO_BLOCK('SETCOMCIA_NEW');
    //          --ENTER_QUERY;
    //          --GO_BLOCK('SETCOMCIA');
    //      --ANTES PROYECTO 4613 
    //      ELSE
    //    
    //    
    //      IF (VTEXISTE = 'X') AND (:this.PARAMETER.get("PPLAZU") = VREGIONAL) THEN
    //           
    //    --ANTES PROYECTO 4613
    //        HIDE_VIEW('PAGSTACK_5');
    //        VCONDICION := 'COM_CODIGO = NVL(:BTER.COMER,COM_CODIGO)';
    //          VCONDICION2 := 'CXT_NIT   = NVL(:BTER.NIT,CXT_NIT)';
    //          SET_BLOCK_PROPERTY('SETCOMCIA',DEFAULT_WHERE,VCONDICION);
    //          SET_BLOCK_PROPERTY('SETTERXCOM',DEFAULT_WHERE,VCONDICION2);
    //          GO_BLOCK('SETCOMCIA');
    //          EXECUTE_QUERY;
    //          
    //          VCONDICION2 := 'COM_CODIGO IN (SELECT COM_CODIGO 
    //              FROM SETCOMCIA
    //             WHERE COM_ESTADO <> ''I''
    //              AND COM_PLA = '''||:this.PARAMETER.get("PPLAZU")||''')';
    //          
    //          SET_BLOCK_PROPERTY('SETCOMCIA_NEW',DEFAULT_WHERE,VCONDICION2);
    //          GO_BLOCK('SETCOMCIA_NEW');
    //          EXECUTE_QUERY;
    //          
    //          --GO_BLOCK('SETCOMCIA_NEW');
    //          --ENTER_QUERY;
    //          --GO_BLOCK('SETCOMCIA');
    //      --ANTES PROYECTO 4613 
    //      
    //          ELSIF (:this.PARAMETER.get("PCARGO") = 'TS') THEN  --PY7818
    //        
    //           HIDE_VIEW('PAGSTACK_5');
    //           
    //          -- MESSAGE(:BTER.COMER);
    //          -- MESSAGE(:BTER.NIT);
    //           
    //          -- MESSAGE(VCONDICION);
    //          -- MESSAGE(VCONDICION2);
    //           
    //           VCONDICION := 'COM_CODIGO = NVL('||:BTER.COMER||',COM_CODIGO)';
    //        VCONDICION2 := 'TERSEC_NIT   = NVL('||:BTER.NIT||',TERSEC_NIT)';
    //        SET_BLOCK_PROPERTY('SETCOMCIACAP',DEFAULT_WHERE,VCONDICION);
    //        SET_BLOCK_PROPERTY('SETTERSEC',DEFAULT_WHERE,VCONDICION2);
    //           
    //        GO_BLOCK('SETCOMCIACAP');
    //         EXECUTE_QUERY;                        --PY7818
    //          
    //          ELSE
    //   
    //            LIB$ALERTA ('MENSAJE','NO PUEDE REASIGNAR EL TERCERO YA QUE NO PERTENECE A SU REGIONAL.','ACEPTAR',NULL,NULL,VBOTON);   
    //     
    //          END IF;
    //        END IF;  
    //        END IF;
    //   --PROYECTO 4613
    //   
    //   ELSE
    //     LIB$DTNERFRMA('DEBE INGRESAR UN NIT PARA REASIGNAR UN TERCERO.');
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_paragestion_vReasigcom_whenButtonPressed() {
        console.log("Entering CMFMENU_paragestion_vReasigcom_whenButtonPressed");
        let VCONDICION: string = null;
        let VCONDICION2: string = null;
        let VEXISTE: number = null;
        let VREGIONAL: string = null;
        let VTEXISTE: string = null;
        let VBOTON: number = null;
        let VBOLSA: string = null;
        let VCOMERCIAL: string = null;
        // if ((NIT != null)) {
        //     this.oracleFormsBuiltins.commit_form();
        //     // CMFMENU_PUP_VALIDA();
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("NIT", NIT);
        //     // call REST API
        //     const result1 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vreasigcom_whenbuttonpressed_query1", payload1);
        //     // get values from result
        //     VBOLSA = result1[0].get("VBOLSA");
        //     if (result1 == null || result1.length == 0) {

        //         VBOLSA = "N";
        //     }

        //     // construct payload
        //     let payload2 = new Map();
        //     // call REST API
        //     const result2 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vreasigcom_whenbuttonpressed_query2", payload2);
        //     // get values from result
        //     VCOMERCIAL = result2[0].get("VCOMERCIAL");
        //     if (result2 == null || result2.length == 0) {

        //         VCOMERCIAL = "N";
        //     }

        //     // construct payload
        //     let payload3 = new Map();
        //     payload3.set("PPLAZU", this.PARAMETER.get("PPLAZU"));
        //     payload3.set("NIT", NIT);
        //     payload3.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        //     // call REST API
        //     const result3 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vreasigcom_whenbuttonpressed_query3", payload3);
        //     // get values from result
        //     VTEXISTE = result3[0].get("VTEXISTE");
        //     if (result3 == null || result3.length == 0) {

        //         VTEXISTE = "Z";
        //     }

        //     // construct payload
        //     let payload4 = new Map();
        //     payload4.set("COMER", this.BTER.COMER);
        //     payload4.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        //     // call REST API
        //     const result4 = await Rest.post("/cmfmenu_paragestion/cmfmenu_paragestion_vreasigcom_whenbuttonpressed_query4", payload4);
        //     // get values from result
        //     VREGIONAL = result4[0].get("VREGIONAL");
        //     if (result4 == null || result4.length == 0) {

        //         VREGIONAL = "000";
        //     }

        //     if (VBOLSA == "S") {
        //         this.oracleFormsBuiltins.hide_view("PAGSTACK_5");
        //         VCONDICION = "COM_CODIGO = NVL(:BTER.COMER,COM_CODIGO)";
        //         VCONDICION2 = "CXT_NIT   = NVL(:BTER.NIT,CXT_NIT)";
        //         this.oracleFormsBuiltins.set_block_property("SETCOMCIA", "DEFAULT_WHERE", VCONDICION);
        //         this.oracleFormsBuiltins.set_block_property("SETTERXCOM", "DEFAULT_WHERE", VCONDICION2);
        //         this.oracleFormsBuiltins.go_block("SETCOMCIA");
        //         this.oracleFormsBuiltins.execute_query();
        //         VCONDICION2 = "COM_CODIGO IN (SELECT COM_CODIGO FROM SETCOMCIA WHERE COM_ESTADO <> 'I' AND COM_PLA = ''" + this.PARAMETER.get("PPLAZU") + "'') ";
        //         this.oracleFormsBuiltins.set_block_property("SETCOMCIA_NEW", "DEFAULT_WHERE", VCONDICION2);
        //         this.oracleFormsBuiltins.go_block("SETCOMCIA_NEW");
        //         this.oracleFormsBuiltins.execute_query();
        //     }
        //     else {
        //         if (VCOMERCIAL == "S") {
        //             this.oracleFormsBuiltins.hide_view("PAGSTACK_5");
        //             VCONDICION = "COM_CODIGO = NVL(:BTER.COMER,COM_CODIGO)";
        //             VCONDICION2 = "CXT_NIT   = NVL(:BTER.NIT,CXT_NIT)";
        //             this.oracleFormsBuiltins.set_block_property("SETCOMCIA", "DEFAULT_WHERE", VCONDICION);
        //             this.oracleFormsBuiltins.set_block_property("SETTERXCOM", "DEFAULT_WHERE", VCONDICION2);
        //             this.oracleFormsBuiltins.go_block("SETCOMCIA");
        //             this.oracleFormsBuiltins.execute_query();
        //             VCONDICION2 = "COM_CODIGO IN (SELECT COM_CODIGO FROM SETCOMCIA WHERE COM_ESTADO <> ''I'' AND COM_PLA = ''" + this.PARAMETER.get("PPLAZU") + "'') ";
        //             this.oracleFormsBuiltins.set_block_property("SETCOMCIA_NEW", "DEFAULT_WHERE", VCONDICION2);
        //             this.oracleFormsBuiltins.go_block("SETCOMCIA_NEW");
        //             this.oracleFormsBuiltins.execute_query();
        //         }
        //         else {
        //             if ((VTEXISTE == "X" && this.PARAMETER.get("PPLAZU") == VREGIONAL)) {
        //                 this.oracleFormsBuiltins.hide_view("PAGSTACK_5");
        //                 VCONDICION = "COM_CODIGO = NVL(:BTER.COMER,COM_CODIGO)";
        //                 VCONDICION2 = "CXT_NIT   = NVL(:BTER.NIT,CXT_NIT)";
        //                 this.oracleFormsBuiltins.set_block_property("SETCOMCIA", "DEFAULT_WHERE", VCONDICION);
        //                 this.oracleFormsBuiltins.set_block_property("SETTERXCOM", "DEFAULT_WHERE", VCONDICION2);
        //                 this.oracleFormsBuiltins.go_block("SETCOMCIA");
        //                 this.oracleFormsBuiltins.execute_query();
        //                 VCONDICION2 = "COM_CODIGO IN (SELECT COM_CODIGO FROM SETCOMCIA WHERE COM_ESTADO <> ''I'' AND COM_PLA = ''" + this.PARAMETER.get("PPLAZU") + "'') ";
        //                 this.oracleFormsBuiltins.set_block_property("SETCOMCIA_NEW", "DEFAULT_WHERE", VCONDICION2);
        //                 this.oracleFormsBuiltins.go_block("SETCOMCIA_NEW");
        //                 this.oracleFormsBuiltins.execute_query();
        //             }
        //             else if (this.PARAMETER.get("PCARGO") == "TS") {
        //                 this.oracleFormsBuiltins.hide_view("PAGSTACK_5");
        //                 VCONDICION = "COM_CODIGO = NVL(" + BTER.COMER + ",COM_CODIGO)";
        //                 VCONDICION2 = "TERSEC_NIT   = NVL(" + BTER.NIT + ",TERSEC_NIT)";
        //                 this.oracleFormsBuiltins.set_block_property("SETCOMCIACAP", "DEFAULT_WHERE", VCONDICION);
        //                 this.oracleFormsBuiltins.set_block_property("SETTERSEC", "DEFAULT_WHERE", VCONDICION2);
        //                 this.oracleFormsBuiltins.go_block("SETCOMCIACAP");
        //                 this.oracleFormsBuiltins.execute_query();
        //             }
        //             else {
        //                 // CMFMENU_LIB$ALERTA("MENSAJE", "NO PUEDE REASIGNAR EL TERCERO YA QUE NO PERTENECE A SU REGIONAL.", "ACEPTAR", null, null, VBOTON);
        //             }
        //         }
        //     }
        // }
        // else {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE INGRESAR UN NIT PARA REASIGNAR UN TERCERO.");
        // }
        console.log("Exiting CMFMENU_paragestion_vReasigcom_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    // SELECT DECODE(TERPER, 'N', TERAPE || ' ' || TERNOM, TERAPE) NOMBRE
    //   INTO :SETTERXCOM_NEW.V_NOMBTER
    // FROM TER
    // WHERE TERCOD = :SETTERXCOM_NEW.CXT_NIT;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :SETTERXCOM_NEW.V_NOMBTER :=  NULL;
    // END;
    // BEGIN
    //  SELECT  DECODE(:SETTERXCOM_NEW.CXT_COMSEC,NULL,NULL,COM_NOMBRE ||' '||COM_APELLIDO)
    //    INTO :SETTERXCOM_NEW.V_COMSEC 
    // FROM SETCOMCIA
    // WHERE (:SETTERXCOM_NEW.CXT_CODIGO = COM_CODIGO OR :SETTERXCOM_NEW.CXT_COMSEC = COM_CODIGO)
    // AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD");  --ARQUITECTURA
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :SETTERXCOM_NEW.V_COMSEC :=  NULL;
    // END;
    //#endregion
    async CMFMENU_setterxcomNew_postQuery() {
        console.log("Entering CMFMENU_setterxcomNew_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("CXT_NIT", this.SETTERXCOM_NEW.CXT_NIT);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_setterxcom_new/cmfmenu_setterxcomnew_postquery_query1", payload1);
        // get values from result
        this.SETTERXCOM_NEW.V_NOMBTER = result1[0].get("SETTERXCOM_NEW.V_NOMBTER");
        if (result1 == null || result1.length == 0) {

            this.SETTERXCOM_NEW.V_NOMBTER = null;
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("CXT_CODIGO", this.SETTERXCOM_NEW.CXT_CODIGO);
        payload2.set("CXT_COMSEC", this.SETTERXCOM_NEW.CXT_COMSEC);
        payload2.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result2 = await Rest.post("/cmfmenu_setterxcom_new/cmfmenu_setterxcomnew_postquery_query2", payload2);
        // get values from result
        this.SETTERXCOM_NEW.V_COMSEC = result2[0].get("SETTERXCOM_NEW.V_COMSEC");
        if (result2 == null || result2.length == 0) {

            this.SETTERXCOM_NEW.V_COMSEC = null;
        }

        console.log("Exiting CMFMENU_setterxcomNew_postQuery");
    }

    //#region PLSQL
    // DECLARE 
    //   CURSOR COMPA IS 
    //   SELECT DOMI_CODIGO COD
    //      ,DOMI_VLRCODIGO DESCR
    //   FROM CMTDOMINIOS
    //  WHERE DOMI_DOMINIO = 'COMPAÑIAS'
    //  ORDER BY 1;
    //   IT_ID ITEM;
    // BEGIN
    // BEGIN
    //   IT_ID := FIND_ITEM('CMTCOMPLEAS.LEAS_CODCOM'); 
    //   IF ID_NULL( IT_ID) THEN
    //      MESSAGE('ERROR AL CARGAR LAS COMPAÑIAS DE LEASING.');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN COMPA LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.DESCR, ACC.COD);
    //      END LOOP;
    //      EXECUTE_QUERY;
    //   END IF;  
    // END;
    // END;
    //#endregion
    async CMFMENU_cmtcompleas_whenNewBlockInstance() {
        console.log("Entering CMFMENU_cmtcompleas_whenNewBlockInstance");
        let IT_ID: null = null;
        IT_ID = this.oracleFormsBuiltins.find_item("CMTCOMPLEAS.LEAS_CODCOM");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LAS COMPAÑIAS DE LEASING.");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CMFMENU_cmtcompleas_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN --IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN
    // IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP','TS','AP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN --PY 7818
    //   :this.PARAMETER.get("PCODCOMER") := NULL;
    // END IF; END;
    //#endregion
    async CMFMENU_bnoctos_preQuery() {
        console.log("Entering CMFMENU_bnoctos_preQuery");
        if ((["GF", "GC", "GI", "JM", "AM", "SR", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1 && (this.PARAMETER.get("PCODCOMER") != null))) {
            this.PARAMETER.set("PCODCOMER", null);
        }
        console.log("Exiting CMFMENU_bnoctos_preQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_RESCTOS;
    // BEGIN
    // PQBD_COL_ADMVEN.PCONCTO(BK_DATA, :V_TIEMPO, :this.PARAMETER.get("PCODCOMER"), :this.PARAMETER.get("PPLAZU"), :this.PARAMETER.get("PUNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BNOCTOS');
    // END;
    //#endregion
    async CMFMENU_bnoctos_queryProcedure() {
        console.log("Entering CMFMENU_bnoctos_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PCONCTO(BK_DATA, V_TIEMPO, this.PARAMETER.get("PCODCOMER"), this.PARAMETER.get("PPLAZU"), this.PARAMETER.get("PUNIDAD"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BNOCTOS");
        console.log("Exiting CMFMENU_bnoctos_queryProcedure");
    }

    //#region PLSQL
    // BEGIN IF :V_CLIENNOREV IS NULL THEN
    //  LIB$DTNERFRMA('DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA DE CLIENTES NO RENOVARON');
    // ELSE
    //  GO_BLOCK('BNOCLIE');
    //  EXECUTE_QUERY;
    // END IF; END;
    //#endregion
    async CMFMENU_resumen_vCliennorev_whenListChanged() {
        console.log("Entering CMFMENU_resumen_vCliennorev_whenListChanged");
        // if ((V_CLIENNOREV == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA DE CLIENTES NO RENOVARON");
        // }
        // else {
        //     this.oracleFormsBuiltins.go_block("BNOCLIE");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        console.log("Exiting CMFMENU_resumen_vCliennorev_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :RESUMEN.V_CANT_VENCER = 0 OR :RESUMEN.V_CANT_VENCER IS NULL THEN
    //  LIB$DTNERFRMA('NO HAY DATOS A CONSULTAR, ESCOJA OTRO CRITERIO DE TIEMPO.');
    // ELSE
    //  GO_BLOCK('BDETCTOSRENOCDT');
    //  CLEAR_BLOCK; 
    //  GO_BLOCK('BDETCTOSRENOCDT');
    //  CLEAR_BLOCK;
    //  
    //  GO_BLOCK('BDETCLIVENCER');
    //   EXECUTE_QUERY;
    // END IF; END;
    //#endregion
    async CMFMENU_resumen_vBotonVencer_whenButtonPressed() {
        console.log("Entering CMFMENU_resumen_vBotonVencer_whenButtonPressed");
        if ((this.RESUMEN.V_CANT_VENCER == 0 || (this.RESUMEN.V_CANT_VENCER == null))) {
            // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS A CONSULTAR, ESCOJA OTRO CRITERIO DE TIEMPO.");
        }
        else {
            this.oracleFormsBuiltins.go_block("BDETCTOSRENOCDT");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("BDETCTOSRENOCDT");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("BDETCLIVENCER");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CMFMENU_resumen_vBotonVencer_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   V_CANTIDAD NUMBER;
    // BEGIN
    //   :RESUMEN.V_CANT_VENCER := 0;
    //   
    //   
    //   V_CANTIDAD := PQBD_COL_ADMVEN.FCANTIDADCNV(:RESUMEN.V_CLIVENCER,:this.PARAMETER.get("PPLAZU"),:this.PARAMETER.get("PCODCOMER"));
    // 
    //  IF :V_CLIVENCER IS NULL THEN
    //   LIB$DTNERFRMA('DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA DE CLIENTES NO RENOVARON');
    //  ELSE
    //   
    //    IF V_CANTIDAD IS NULL THEN
    //      
    //      :RESUMEN.V_CANT_VENCER := 0;
    //     
    //    ELSE
    //      :RESUMEN.V_CANT_VENCER :=V_CANTIDAD;
    //    END IF;
    //  
    //  
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_resumen_vClivencer_whenListChanged() {
        console.log("Entering CMFMENU_resumen_vClivencer_whenListChanged");
        let V_CANTIDAD: number = null;
        this.RESUMEN.V_CANT_VENCER = 0;
        // V_CANTIDAD = PQBD_COL_ADMVEN.FCANTIDADCNV(RESUMEN.V_CLIVENCER, this.PARAMETER.get("PPLAZU"), this.PARAMETER.get("PCODCOMER"));
        // if ((V_CLIVENCER == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA DE CLIENTES NO RENOVARON");
        // }
        // else {
        //     if ((V_CANTIDAD == null)) {
        //         this.RESUMEN.V_CANT_VENCER = 0;
        //     }
        //     else {
        //         this.RESUMEN.V_CANT_VENCER = V_CANTIDAD;
        //     }
        // }
        console.log("Exiting CMFMENU_resumen_vClivencer_whenListChanged");
    }

    //#region PLSQL
    // BEGIN CALL_FORM('COFGESCOB', "HIDE", "NO_REPLACE", "NO_QUERY_ONLY"); END;
    //#endregion
    async CMFMENU_resumen_vBtocobr_whenButtonPressed() {
        console.log("Entering CMFMENU_resumen_vBtocobr_whenButtonPressed");
        this.oracleFormsBuiltins.call_form("COFGESCOB", "HIDE", "NO_REPLACE", "NO_QUERY_ONLY");
        console.log("Exiting CMFMENU_resumen_vBtocobr_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('BCLIXCOMER');
    // EXECUTE_QUERY; END;
    //#endregion
    async CMFMENU_resumen_vBtoclixcomer_whenButtonPressed() {
        console.log("Entering CMFMENU_resumen_vBtoclixcomer_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("BCLIXCOMER");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CMFMENU_resumen_vBtoclixcomer_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE T_RESPUESTA NUMBER;
    // BEGIN
    // IF :V_CONPERFIL IS NOT NULL THEN
    //  GO_BLOCK('BDETSEGPRX');
    //   EXECUTE_QUERY;
    // ELSE
    //  LIB$ALERTA('MENSAJE','SE VA A CONSULTAR TODOS LOS PERFILES DE LOS CONTACTOS A VENCER DE TODOS LOS COMERCIALES.',NULL,NULL,NULL,T_RESPUESTA);
    //  GO_BLOCK('BDETSEGPRX');
    //   EXECUTE_QUERY;
    // END IF;
    // END;
    //#endregion
    async CMFMENU_resumen_vConperfil_whenListChanged() {
        console.log("Entering CMFMENU_resumen_vConperfil_whenListChanged");
        let T_RESPUESTA: number = null;
        // if ((V_CONPERFIL != null)) {
        //     this.oracleFormsBuiltins.go_block("BDETSEGPRX");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "SE VA A CONSULTAR TODOS LOS PERFILES DE LOS CONTACTOS A VENCER DE TODOS LOS COMERCIALES.", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.go_block("BDETSEGPRX");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        console.log("Exiting CMFMENU_resumen_vConperfil_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //   V_CANTIDAD NUMBER;
    // BEGIN
    // 
    //   :RESUMEN.V_DETACICDT := 0;
    // 
    //   V_CANTIDAD := PQBD_COL_ADMVEN.FCANTIDADCDT(:RESUMEN.V_CLIRENCDT,:this.PARAMETER.get("PPLAZU"),:this.PARAMETER.get("PCODCOMER"));
    // 
    // 
    //   
    // 
    //  IF :V_CLIRENCDT IS NULL THEN
    //   LIB$DTNERFRMA('DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA DE CLIENTES NO RENOVARON');
    //  ELSE
    //   
    //    IF V_CANTIDAD IS NULL THEN
    //      
    //      :RESUMEN.V_DETACICDT := 0;
    //     
    //    ELSE
    //      :RESUMEN.V_DETACICDT :=V_CANTIDAD;
    //    END IF;
    //  
    //  
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_resumen_vClirencdt_whenListChanged() {
        console.log("Entering CMFMENU_resumen_vClirencdt_whenListChanged");
        let V_CANTIDAD: number = null;
        this.RESUMEN.V_DETACICDT = 0;
        // V_CANTIDAD = PQBD_COL_ADMVEN.FCANTIDADCDT(RESUMEN.V_CLIRENCDT, this.PARAMETER.get("PPLAZU"), this.PARAMETER.get("PCODCOMER"));
        // if ((V_CLIRENCDT == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA DE CLIENTES NO RENOVARON");
        // }
        // else {
        //     if ((V_CANTIDAD == null)) {
        //         this.RESUMEN.V_DETACICDT = 0;
        //     }
        //     else {
        //         this.RESUMEN.V_DETACICDT = V_CANTIDAD;
        //     }
        // }
        console.log("Exiting CMFMENU_resumen_vClirencdt_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :V_TIEMPO IS NULL THEN
    //  LIB$DTNERFRMA('DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA');
    // ELSE
    //  GO_BLOCK('BNOCTOS');
    //  EXECUTE_QUERY;
    // END IF; END;
    //#endregion
    async CMFMENU_resumen_vTiempo_whenListChanged() {
        console.log("Entering CMFMENU_resumen_vTiempo_whenListChanged");
        // if ((V_TIEMPO == null)) {
        //     // CMFMENU_LIB$DTNERFRMA("DEBE SELECCIONAR UN TIEMPO PARA EJECUTAR LA CONSULTA");
        // }
        // else {
        //     this.oracleFormsBuiltins.go_block("BNOCTOS");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        console.log("Exiting CMFMENU_resumen_vTiempo_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //    LISTAREP    PARAMLIST;
    //  BEGIN
    // //      LISTAREP := GET_PARAMETER_LIST('LISTAREPORTES');
    //      IF ID_NULL(LISTAREP) THEN
    // //          LISTAREP := CREATE_PARAMETER_LIST('LISTAREPORTES');
    //          ADD_PARAMETER(LISTAREP,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //          ADD_PARAMETER(LISTAREP,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //          --ADD_PARAMETER(LISTAREP,'P_PERIODO', "TEXT_PARAMETER",:BPLAFACPOL.FECHA);
    //      END IF;
    // 
//    // //       RUN_PRODUCT (REPORTS, 'ANRMOTER', ASYNCHRONOUS, RUNTIME, FILESYSTEM, LISTAREP, NULL);
    // 
    //  END;
    //#endregion
    async CMFMENU_resumen_btnMoras_whenButtonPressed() {
        console.log("Entering CMFMENU_resumen_btnMoras_whenButtonPressed");
        let LISTAREP: number = null;
        // LISTAREP = this.oracleFormsBuiltins.get_parameter_list("LISTAREPORTES");
        if (this.oracleFormsBuiltins.id_null(LISTAREP)) {
            // LISTAREP = this.oracleFormsBuiltins.create_parameter_list("LISTAREPORTES");
            this.oracleFormsBuiltins.add_parameter(LISTAREP, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LISTAREP, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        }
//        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRMOTER", ASYNCHRONOUS, RUNTIME, FILESYSTEM, LISTAREP, null);
        console.log("Exiting CMFMENU_resumen_btnMoras_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :BNOCTOS.CANTIDAD = 0 OR :BNOCTOS.CANTIDAD IS NULL THEN
    //  LIB$DTNERFRMA('NO HAY DATOS A CONSULTAR, ESCOJA OTRO CRITERIO DE TIEMPO.');
    // ELSE
    //  GO_BLOCK('BDETCTOS');
    //   EXECUTE_QUERY;
    // END IF; END;
    //#endregion
    async CMFMENU_resumen_vBtoverdet_whenButtonPressed() {
        console.log("Entering CMFMENU_resumen_vBtoverdet_whenButtonPressed");
        // if ((BNOCTOS.CANTIDAD == 0 || (BNOCTOS.CANTIDAD == null))) {
        //     // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS A CONSULTAR, ESCOJA OTRO CRITERIO DE TIEMPO.");
        // }
        // else {
        //     this.oracleFormsBuiltins.go_block("BDETCTOS");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        console.log("Exiting CMFMENU_resumen_vBtoverdet_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN CALL_FORM('CMFCOEST', "HIDE", "NO_REPLACE", "NO_QUERY_ONLY"); END;
    //#endregion
    async CMFMENU_resumen_vBtoestad_whenButtonPressed() {
        console.log("Entering CMFMENU_resumen_vBtoestad_whenButtonPressed");
        this.oracleFormsBuiltins.call_form("CMFCOEST", "HIDE", "NO_REPLACE", "NO_QUERY_ONLY");
        console.log("Exiting CMFMENU_resumen_vBtoestad_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('BBOLSA');
    // EXECUTE_QUERY; END;
    //#endregion
    async CMFMENU_resumen_vBtobolsa_whenButtonPressed() {
        console.log("Entering CMFMENU_resumen_vBtobolsa_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("BBOLSA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CMFMENU_resumen_vBtobolsa_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    PL_ID    PARAMLIST;
    // BEGIN
    //      CALL_FORM('CMFCOEST', "HIDE", "NO_REPLACE", "NO_QUERY_ONLY", PL_ID);
    // END;
    //#endregion
    async CMFMENU_resumen_btnEstcred_whenButtonPressed() {
        console.log("Entering CMFMENU_resumen_btnEstcred_whenButtonPressed");
        let PL_ID: number = null;
        this.oracleFormsBuiltins.call_form("CMFCOEST", "HIDE", "NO_REPLACE", "NO_QUERY_ONLY", PL_ID);
        console.log("Exiting CMFMENU_resumen_btnEstcred_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :RESUMEN.V_DETACICDT = 0 OR :RESUMEN.V_DETACICDT IS NULL THEN
    //  LIB$DTNERFRMA('NO HAY DATOS A CONSULTAR, ESCOJA OTRO CRITERIO DE TIEMPO.');
    // ELSE
    //  
    //  GO_BLOCK('BDETCLIVENCER');
    //  CLEAR_BLOCK; 
    //  GO_BLOCK('BDETCTOSRENOCDT');
    //  CLEAR_BLOCK;
    //  
    //  GO_BLOCK('BDETCTOSRENOCDT');
    //   EXECUTE_QUERY;
    // END IF; END;
    //#endregion
    async CMFMENU_resumen_vBtncdt_whenButtonPressed() {
        console.log("Entering CMFMENU_resumen_vBtncdt_whenButtonPressed");
        if ((this.RESUMEN.V_DETACICDT == 0 || (this.RESUMEN.V_DETACICDT == null))) {
            // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS A CONSULTAR, ESCOJA OTRO CRITERIO DE TIEMPO.");
        }
        else {
            this.oracleFormsBuiltins.go_block("BDETCLIVENCER");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("BDETCTOSRENOCDT");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("BDETCTOSRENOCDT");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CMFMENU_resumen_vBtncdt_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :BNOCLIE.CANTIDAD = 0 OR :BNOCLIE.CANTIDAD IS NULL THEN
    //  LIB$DTNERFRMA('NO HAY DATOS A CONSULTAR, ESCOJA OTRO CRITERIO DE TIEMPO.');
    // ELSE
    //  GO_BLOCK('BDETCLIE');
    //   EXECUTE_QUERY;
    // END IF; END;
    //#endregion
    async CMFMENU_resumen_vBtodeta_whenButtonPressed() {
        console.log("Entering CMFMENU_resumen_vBtodeta_whenButtonPressed");
        if ((this.BNOCLIE.CANTIDAD == 0 || (this.BNOCLIE.CANTIDAD == null))) {
            // CMFMENU_LIB$DTNERFRMA("NO HAY DATOS A CONSULTAR, ESCOJA OTRO CRITERIO DE TIEMPO.");
        }
        else {
            this.oracleFormsBuiltins.go_block("BDETCLIE");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CMFMENU_resumen_vBtodeta_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE T_RESPUESTA NUMBER;
    // BEGIN
    // IF :V_CTPOCOMPR IS NOT NULL THEN
    //  GO_BLOCK('AGENDA');
    //   EXECUTE_QUERY;
    // ELSE
    //  LIB$ALERTA('MENSAJE','SE VA A CONSULTAR TODOS LOS COMPROMISOS DE LA AGENDA DE LOS COMERCIALES.PARA CONSULTAR UN COMERCIAL EN ESPECIAL INGRESE CON  [F7]',NULL,NULL,NULL,T_RESPUESTA);
    //  GO_BLOCK('AGENDA');
    //   EXECUTE_QUERY;
    //  --LIB$DTNERFRMA('DEBE SELECCIONAR UN TIPO DE COMPROMISO, PARA PODER CONSULTAR LA AGENDA DE UN COMERCIAL.');
    // END IF;
    // END;
    //#endregion
    async CMFMENU_resumen_vCtpocompr_whenListChanged() {
        console.log("Entering CMFMENU_resumen_vCtpocompr_whenListChanged");
        let T_RESPUESTA: number = null;
        // if ((V_CTPOCOMPR != null)) {
        //     this.oracleFormsBuiltins.go_block("AGENDA");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "SE VA A CONSULTAR TODOS LOS COMPROMISOS DE LA AGENDA DE LOS COMERCIALES.PARA CONSULTAR UN COMERCIAL EN ESPECIAL INGRESE CON  [F7]", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.go_block("AGENDA");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        console.log("Exiting CMFMENU_resumen_vCtpocompr_whenListChanged");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT COM_CODIGO, COM_CODUNI
    //      INTO :this.PARAMETER.get("PCODCOMER"),
    //         :this.PARAMETER.get("PUNIDAD")-- ARQUITECTURA
    //  FROM SETCOMCIA
    // WHERE COM_USORAC = USER
    //  AND COM_ESTADO='A'; --2012-01-19 SSS,RAT ;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :this.PARAMETER.get("PCODCOMER") := NULL;
    //  :this.PARAMETER.get("PUNIDAD")   := NULL;
    // END;
    // IF :RADIO_SEMAFORO = '1' THEN --VENCIDOS
    //  :V_PWHERE := '< TRUNC(SYSDATE)';
    //  :RADIO_OPCIONES := '7';
    //  GO_BLOCK('SEGRESUM');
    //  EXECUTE_QUERY;
    // ELSIF :RADIO_SEMAFORO = '2' THEN --HOY
    //  :V_PWHERE := '= TRUNC(SYSDATE)';
    //  :RADIO_OPCIONES := '5';
    //  GO_BLOCK('SEGRESUM');
    //  EXECUTE_QUERY;
    // ELSIF :RADIO_SEMAFORO = '3' THEN -- MAÑANA
    //  :V_PWHERE := '= TRUNC((SYSDATE)+1)';
    //  :RADIO_OPCIONES := '6';
    //  GO_BLOCK('SEGRESUM');
    //  EXECUTE_QUERY;
    // END IF;
    //#endregion
    async CMFMENU_resumen_radioSemaforo_whenRadioChanged() {
        console.log("Entering CMFMENU_resumen_radioSemaforo_whenRadioChanged");
        // construct payload
        let payload1 = new Map();
        payload1.set("PUNIDAD--", this.PARAMETER.get("PUNIDAD"));
        payload1.set("PCODCOMER", this.PARAMETER.get("PCODCOMER"));
        // call REST API
        const result1 = await Rest.post("/cmfmenu_resumen/cmfmenu_resumen_radiosemaforo_whenradiochanged_query1", payload1);
        // get values from result
        this.PARAMETER.set("PCODCOMER", result1[0].get(this.PARAMETER.get("PCODCOMER")));
        this.PARAMETER.set("PUNIDAD", result1[0].get(this.PARAMETER.get("PUNIDAD")));
        if (result1 == null || result1.length == 0) {

            this.PARAMETER.set("PCODCOMER", null);
            this.PARAMETER.set("PUNIDAD", null);
        }

        console.log("Exiting CMFMENU_resumen_radioSemaforo_whenRadioChanged");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  BEGIN
    //  IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','JM','AM','GI','AP','SR') THEN
    //    LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL, SELECCIONELO Y EJECUTE LA CONSULTA',NULL,NULL,NULL,T_RESPUESTA);  
    //  /*ELSIF :this.PARAMETER.get("PCARGO") = ('SR') AND :this.PARAMETER.get("PPLAZU") <> :this.PARAMETER.get("POFCNA") THEN--QUE ES BOGOTA UNO Y BTA DOS
    //   LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR LOS COMERCIALES DE SU PLAZA COMERCIAL',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSIF :this.PARAMETER.get("PCARGO") = ('SR') AND :this.PARAMETER.get("PPLAZU") = :this.PARAMETER.get("POFCNA") THEN--QUE ES REGIONAL  
    //     LIB$ALERTA('MENSAJE','SU JERARQUÍA LE PERMITE CONSULTAR LOS COMERCIALES Y FREE-LANCE DE SU PLAZA COMERCIAL',NULL,NULL,NULL,T_RESPUESTA); 
    //     */
    //  ELSE
    //   LIB$ALERTA('MENSAJE','SU JERARQUÍA LE IMPIDE CONSULTAR UN COMERCIAL DIFERENTE AL SUYO.',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;
    //  END;
    // ENTER_QUERY;
    //  
    //#endregion
    async CMFMENU_agenda_keyEntqry() {
        console.log("Entering CMFMENU_agenda_keyEntqry");
        let T_RESPUESTA: number = null;
        if (["GF", "GC", "JM", "AM", "GI", "AP", "SR"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SU JERARQUÍA LE PERMITE CONSULTAR CUALQUIER COMERCIAL, SELECCIONELO Y EJECUTE LA CONSULTA", null, null, null, T_RESPUESTA);
        }
        else {
            // CMFMENU_LIB$ALERTA("MENSAJE", "SU JERARQUÍA LE IMPIDE CONSULTAR UN COMERCIAL DIFERENTE AL SUYO.", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CMFMENU_agenda_keyEntqry");
    }

    //#region PLSQL
    // BEGIN --IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN
    // IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','GI','JM','AM','SR','JP','TS','AP') AND :this.PARAMETER.get("PCODCOMER") IS NOT NULL THEN -- PY 7818
    //   :this.PARAMETER.get("PCODCOMER") := NULL;
    // ELSE
    //    :this.PARAMETER.get("PCODCOMER"):=NVL(:AGENDA.CODCOMERCIAL,:this.PARAMETER.get("PCODCOMER"));  
    // END IF; END;
    //#endregion
    async CMFMENU_agenda_preQuery() {
        console.log("Entering CMFMENU_agenda_preQuery");
        if ((["GF", "GC", "GI", "JM", "AM", "SR", "JP", "TS", "AP"].indexOf(this.PARAMETER.get("PCARGO")) != -1 && (this.PARAMETER.get("PCODCOMER") != null))) {
            this.PARAMETER.set("PCODCOMER", null);
        }
        else {
            // this.PARAMETER.get("PCODCOMER", AGENDA.CODCOMERCIAL == null ? this.PARAMETER.get("PCODCOMER") : AGENDA.CODCOMERCIAL);
        }
        console.log("Exiting CMFMENU_agenda_preQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ADMVEN.TAB_DETRESUMEN;
    // BEGIN
    // PQBD_COL_ADMVEN.PDETAGENDA(BK_DATA, :this.PARAMETER.get("PCODCOMER"), :V_PWHERE, :V_CTPOCOMPR, :this.PARAMETER.get("PPLAZU"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'AGENDA');
    // END;
    //#endregion
    async CMFMENU_agenda_queryProcedure() {
        console.log("Entering CMFMENU_agenda_queryProcedure");
        let BK_DATA: null = null;
        // CMFMENU_PQBD_COL_ADMVEN.PDETAGENDA(BK_DATA, this.PARAMETER.get("PCODCOMER"), V_PWHERE, V_CTPOCOMPR, this.PARAMETER.get("PPLAZU"));
        // CMFMENU_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "AGENDA");
        console.log("Exiting CMFMENU_agenda_queryProcedure");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT COM_NOMBRE||' '||COM_APELLIDO
    //    INTO :NOMCOMERAQUIEN
    //  FROM SETCOMCIA
    //  WHERE COM_CODIGO = :CODAQUIEN
    //    AND COM_CODUNI = :this.PARAMETER.get("PUNIDAD");
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :NOMCOMERAQUIEN := NULL;
    // END;
    // 
    // 
    // BEGIN
    //   SELECT A.OFI_DESCRIP
    //   INTO :AGENDA.DESC_OFICINA
    //   FROM CRTOFIDAV A 
    //   WHERE A.OFI_COD = :AGENDA.OFIDAVI;
    // EXCEPTION WHEN NO_DATA_FOUND THEN :AGENDA.DESC_OFICINA := NULL;
    // END;
    //#endregion
    async CMFMENU_agenda_postQuery() {
        console.log("Entering CMFMENU_agenda_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("CODAQUIEN", CODAQUIEN);
        payload1.set("PUNIDAD", this.PARAMETER.get("PUNIDAD"));
        // call REST API
        const result1 = await Rest.post("/cmfmenu_agenda/cmfmenu_agenda_postquery_query1", payload1);
        // get values from result
        // NOMCOMERAQUIEN = result1[0].get("NOMCOMERAQUIEN");
        if (result1 == null || result1.length == 0) {

            this.AGENDA.NOMCOMERAQUIEN = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("OFIDAVI", AGENDA.OFIDAVI);
        // call REST API
        const result2 = await Rest.post("/cmfmenu_agenda/cmfmenu_agenda_postquery_query2", payload2);
        // get values from result
        // AGENDA.DESC_OFICINA = result2[0].get("AGENDA.DESC_OFICINA");
        if (result2 == null || result2.length == 0) {

            this.AGENDA.DESC_OFICINA = null;
        }

        console.log("Exiting CMFMENU_agenda_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON    NUMBER;
    //  T_RESPUESTA NUMBER;
    //  --5988
    //  V_CODTERCOM   VARCHAR2(10);
    //  V_CODTERCAP   VARCHAR2(10);  
    //   V_CANCAP      VARCHAR2(10); 
    //   V_AREA        VARCHAR2(10);
    //  --5988
    //  
    //  --6048 
    //  V_OFDAVIV   VARCHAR2(15);
    //  V_COMPAR    NUMBER; 
    //  --6048
    //  
    //  
    // BEGIN
    //  
    // 
    //  --5988
    //    BEGIN 
    //   SELECT S.CXT_CODIGO
    //   INTO V_CODTERCOM
    //   FROM SETTERXCOM S
    //   WHERE S.CXT_NIT = :AGENDA.NITTER;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN     
    //       V_CODTERCOM := 'XXX';   
    //   END;  
    //   
    //   
    //    BEGIN
    //   SELECT USU_AREA
    //   INTO V_AREA
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO = PLSQLBuiltins.user(); 
    //    EXCEPTION WHEN NO_DATA_FOUND THEN 
    //      V_AREA := 'XXX';
    //   END;
    //     
    //   
    //   BEGIN 
    //   SELECT COUNT(*) 
    //   INTO V_CANCAP
    //   FROM SGUSUARIOS 
    //   WHERE USU_CARGO = 'OS'
    //   AND USU_ESTADO = 'A'
    //   AND USU_AREA = 'CAP'
    //   AND USU_CODIGO = PLSQLBuiltins.user();
    //   EXCEPTION WHEN NO_DATA_FOUND THEN V_CANCAP := 0;
    //   END; 
    //   
    //  --6048
    //  V_OFDAVIV := '860034313';
    //  
    //  BEGIN
    //  SELECT COUNT(*)
    //   INTO V_COMPAR
    //   FROM CMTADMPROV
    //   WHERE  PROV_NIT = :AGENDA.NITTER ;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_COMPAR := 0; 
    //  END;
    //  
    //  --6048 
    //   
    //                                                              
    //  IF (:AGENDA.CODCOMERCIAL = V_CODTERCOM) OR  ( V_AREA = 'CAP')  OR  (V_CANCAP > 0)  OR 
    //     (:AGENDA.NITTER = V_OFDAVIV)         OR  (V_COMPAR > 0)  THEN                                                               
    //  --5988
    //  
    //  
    //    LIB$ALERTA('MENSAJE','QUÉ DESEA REALIZAR CON LA GESTIÓN?'
    //             ,'CANCELAR', 'APLAZAR','SALIR', VBOTON);
    //    IF :AGENDA.ESTADO IN ('CA', 'AP') THEN
    //     LIB$DTNERFRMA('EL REGISTRO YA SE ENCUENTRA CANCELADO O APLAZADO. RECTIFIQUE.');
    //     ELSE
    //       IF VBOTON = 1 THEN --CANCELAR UNA GESTIÓN
    //        --POBLAR LA LISTA DE CANCELACIONES
    //        :V_TIPOCAN := 'CA';
    //        IF NOT LIB$PBLARLSTARG('BPARAMAGE.V_CODMOT','GRMOTCAN') THEN
    //          LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA BPARAMAGE.V_CODMOT');
    //        END IF;
    //        SET_ITEM_PROPERTY('V_CODMOT',"DISPLAYED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('V_CODMOT',ENABLED, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('V_CODMOT',NAVIGABLE, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('V_OBSERMOT',"DISPLAYED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('V_OBSERMOT',ENABLED, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('V_OBSERMOT',NAVIGABLE, "PROPERTY_TRUE");
    //       LIB$ALERTA('MENSAJE','DEBE INGRESAR UN MOTIVO, OBSERVACIÓN. GRABE LA INFORMACIÓN CON EL BOTÓN DE <GRABAR/SEGUI.NVO>', NULL, NULL, NULL, T_RESPUESTA);
    //        GO_ITEM ('V_CODMOT');
    //       ELSIF VBOTON = 2 THEN --APLAZAR
    //        --POBLAR LA LISTA DE APLAZAMIENTOS
    //        :V_TIPOCAN := 'AP';
    //        IF NOT LIB$PBLARLSTARG('BPARAMAGE.V_CODMOT','GRMOTAPLA') THEN
    //          LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA BPARAMAGE.V_CODMOT');
    //        END IF;
    //        SET_ITEM_PROPERTY('V_CODMOT',"DISPLAYED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('V_CODMOT',ENABLED, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('V_CODMOT',NAVIGABLE, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('V_OBSERMOT',"DISPLAYED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('V_OBSERMOT',ENABLED, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('V_OBSERMOT',NAVIGABLE, "PROPERTY_TRUE");
    //       
    //       LIB$ALERTA('MENSAJE','DEBE INGRESAR UN MOTIVO Y SU OBSERVACIÓN', NULL, NULL, NULL, T_RESPUESTA);
    //        GO_ITEM ('V_CODMOT');
    //       ELSIF VBOTON = 3 THEN --CANCELAR PROCESO DE ACTUALIZACIÓN
    //        LIB$ALERTA('MENSAJE', 'PROCESO CANCELADO POR EL USUARIO.', NULL, NULL,NULL, T_RESPUESTA);
    //       END IF;
    //     END IF;
    // --5988   
    //    ELSE        
    //     LIB$DTNERFRMA('NO PUEDE INGRESAR GESTIÓN YA QUE EL TERCERO NO SE ENCUENTRA A SU NOMBRE POR FAVOR VERIFICAR');  
    //   END IF; 
    // --5988   
    // END;
    //#endregion
    async CMFMENU_agenda_vCanapla_whenButtonPressed() {
        console.log("Entering CMFMENU_agenda_vCanapla_whenButtonPressed");
        let VBOTON: number = null;
        let T_RESPUESTA: number = null;
        let V_CODTERCOM: string = null;
        let V_CODTERCAP: string = null;
        let V_CANCAP: string = null;
        let V_AREA: string = null;
        let V_OFDAVIV: string = null;
        let V_COMPAR: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.AGENDA.NITTER);
        // call REST API
        const result1 = await Rest.post("/cmfmenu_agenda/cmfmenu_agenda_vcanapla_whenbuttonpressed_query1", payload1);
        // get values from result
        V_CODTERCOM = result1[0].get("V_CODTERCOM");
        if (result1 == null || result1.length == 0) {

            V_CODTERCOM = "XXX";
        }

        // construct payload
        let payload2 = new Map();
        // call REST API
        const result2 = await Rest.post("/cmfmenu_agenda/cmfmenu_agenda_vcanapla_whenbuttonpressed_query2", payload2);
        // get values from result
        V_AREA = result2[0].get("V_AREA");
        if (result2 == null || result2.length == 0) {

            V_AREA = "XXX";
        }

        // construct payload
        let payload3 = new Map();
        // call REST API
        const result3 = await Rest.post("/cmfmenu_agenda/cmfmenu_agenda_vcanapla_whenbuttonpressed_query3", payload3);
        // get values from result
        V_CANCAP = result3[0].get("V_CANCAP");
        if (result3 == null || result3.length == 0) {

            // V_CANCAP = 0;
        }

        V_OFDAVIV = "860034313";
        // construct payload
        let payload4 = new Map();
        payload4.set("NITTER", this.AGENDA.NITTER);
        // call REST API
        const result4 = await Rest.post("/cmfmenu_agenda/cmfmenu_agenda_vcanapla_whenbuttonpressed_query4", payload4);
        // get values from result
        V_COMPAR = result4[0].get("V_COMPAR");
        if (result4 == null || result4.length == 0) {

            V_COMPAR = 0;
        }

        // if (((((this.AGENDA.CODCOMERCIAL == V_CODTERCOM || V_AREA == "CAP") || V_CANCAP > 0) || AGENDA.NITTER == V_OFDAVIV) || V_COMPAR > 0)) {
        //     // CMFMENU_LIB$ALERTA("MENSAJE", "QUÉ DESEA REALIZAR CON LA GESTIÓN?", "CANCELAR", "APLAZAR", "SALIR", VBOTON);
        //     if (["CA", "AP"].indexOf(AGENDA.ESTADO) != -1) {
        //         // CMFMENU_LIB$DTNERFRMA("EL REGISTRO YA SE ENCUENTRA CANCELADO O APLAZADO. RECTIFIQUE.");
        //     }
        //     else {
        //         if (VBOTON == 1) {
        //             this.AGENDA.V_TIPOCAN = "CA";
        //             if ((!LIB$PBLARLSTARG("BPARAMAGE.V_CODMOT", "GRMOTCAN"))) {
        //                 // CMFMENU_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA BPARAMAGE.V_CODMOT");
        //             }
        //             this.oracleFormsBuiltins.set_item_property("V_CODMOT", "DISPLAYED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("V_CODMOT", "ENABLED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("V_CODMOT", "NAVIGABLE", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("V_OBSERMOT", "DISPLAYED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("V_OBSERMOT", "ENABLED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("V_OBSERMOT", "NAVIGABLE", "PROPERTY_TRUE");
        //             // CMFMENU_LIB$ALERTA("MENSAJE", "DEBE INGRESAR UN MOTIVO, OBSERVACIÓN. GRABE LA INFORMACIÓN CON EL BOTÓN DE <GRABAR/SEGUI.NVO>", null, null, null, T_RESPUESTA);
        //             this.oracleFormsBuiltins.go_item("V_CODMOT");
        //         }
        //         else if (VBOTON == 2) {
        //             this.AGENDA.V_TIPOCAN = "AP";
        //             if ((!LIB$PBLARLSTARG("BPARAMAGE.V_CODMOT", "GRMOTAPLA"))) {
        //                 // CMFMENU_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA BPARAMAGE.V_CODMOT");
        //             }
        //             this.oracleFormsBuiltins.set_item_property("V_CODMOT", "DISPLAYED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("V_CODMOT", "ENABLED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("V_CODMOT", "NAVIGABLE", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("V_OBSERMOT", "DISPLAYED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("V_OBSERMOT", "ENABLED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("V_OBSERMOT", "NAVIGABLE", "PROPERTY_TRUE");
        //             // CMFMENU_LIB$ALERTA("MENSAJE", "DEBE INGRESAR UN MOTIVO Y SU OBSERVACIÓN", null, null, null, T_RESPUESTA);
        //             this.oracleFormsBuiltins.go_item("V_CODMOT");
        //         }
        //         else if (VBOTON == 3) {
        //             // CMFMENU_LIB$ALERTA("MENSAJE", "PROCESO CANCELADO POR EL USUARIO.", null, null, null, T_RESPUESTA);
        //         }
        //     }
        // }
        // else {
        //     // CMFMENU_LIB$DTNERFRMA("NO PUEDE INGRESAR GESTIÓN YA QUE EL TERCERO NO SE ENCUENTRA A SU NOMBRE POR FAVOR VERIFICAR");
        // }
        console.log("Exiting CMFMENU_agenda_vCanapla_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //  VCONDICION   VARCHAR2(200);
    //  VCONDICION2  VARCHAR2(200);
    //  VCONDICION3  VARCHAR2(200);
    // BEGIN
    //  IF :V_REASIGNAR = 'S' THEN
    //   HIDE_VIEW('PAGSTACK_5');
    //    VCONDICION := 'COM_CODIGO = NVL(:AGENDA.CODCOMERCIAL,COM_CODIGO)';
    //     VCONDICION2 := 'CXT_NIT   = NVL(:AGENDA.NITTER,CXT_NIT)';
    //     SET_BLOCK_PROPERTY('SETCOMCIA',DEFAULT_WHERE,VCONDICION);
    //     SET_BLOCK_PROPERTY('SETTERXCOM',DEFAULT_WHERE,VCONDICION2);
    //     GO_BLOCK('SETCOMCIA');
    //     EXECUTE_QUERY;
    //     VCONDICION3 := 'COM_CODIGO = NVL(:AGENDA.CODAQUIEN,COM_CODIGO)';
    //     SET_BLOCK_PROPERTY('SETCOMCIA_NEW',DEFAULT_WHERE,VCONDICION3);
    //     GO_BLOCK('SETCOMCIA_NEW');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('SETCOMCIA');
    //   END IF;
    // END;
    //#endregion
    async CMFMENU_agenda_vReasignar_whenCheckboxChanged() {
        console.log("Entering CMFMENU_agenda_vReasignar_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let VCONDICION: string = null;
        let VCONDICION2: string = null;
        let VCONDICION3: string = null;
        // if (V_REASIGNAR == "S") {
        //     this.oracleFormsBuiltins.hide_view("PAGSTACK_5");
        //     VCONDICION = "COM_CODIGO = NVL(:AGENDA.CODCOMERCIAL,COM_CODIGO)";
        //     VCONDICION2 = "CXT_NIT   = NVL(:AGENDA.NITTER,CXT_NIT)";
        //     this.oracleFormsBuiltins.set_block_property("SETCOMCIA", "DEFAULT_WHERE", VCONDICION);
        //     this.oracleFormsBuiltins.set_block_property("SETTERXCOM", "DEFAULT_WHERE", VCONDICION2);
        //     this.oracleFormsBuiltins.go_block("SETCOMCIA");
        //     this.oracleFormsBuiltins.execute_query();
        //     VCONDICION3 = "COM_CODIGO = NVL(:AGENDA.CODAQUIEN,COM_CODIGO)";
        //     this.oracleFormsBuiltins.set_block_property("SETCOMCIA_NEW", "DEFAULT_WHERE", VCONDICION3);
        //     this.oracleFormsBuiltins.go_block("SETCOMCIA_NEW");
        //     this.oracleFormsBuiltins.execute_query();
        //     this.oracleFormsBuiltins.go_block("SETCOMCIA");
        // }
        console.log("Exiting CMFMENU_agenda_vReasignar_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE 
    //  DUMMY BOOLEAN;
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :this.PARAMETER.get("PCARGO") IN ('GF','GC','JM','AM','GI','AP','SR') THEN
    //   :this.PARAMETER.get("PPLAZU") := NULL;
    //   :this.PARAMETER.get("PCCOM")    := NULL;
    //    DUMMY := SHOW_LOV('LOV_CACOMPLA', 15,10);  
    //    --SE DESHABILITA SEGUN REQUERIMIENTO DE PROYECTOS APROBADO POR LA GERENCIA COMERCIAL 
    //    --JULIO 15 DE 2013 
    //  /*ELSIF :this.PARAMETER.get("PCARGO") = ('SR') AND :this.PARAMETER.get("PPLAZU") <> :this.PARAMETER.get("POFCNA") THEN--QUE ES BOGOTA UNO Y BTA DOS Y BTA TRES
    //   --SE DEJA LA PLAZA DEL COMERCIAL DEL CARGO SR
    //   :this.PARAMETER.get("PCCOM")    := NULL;
    //   DUMMY := SHOW_LOV('LOV_CACOMBTA1', 15,10);
    //  --ELSIF :this.PARAMETER.get("PCARGO") = ('SR') AND :this.PARAMETER.get("PPLAZU") = :this.PARAMETER.get("POFCNA") THEN--QUE ES REGIONAL  
    //   :this.PARAMETER.get("PCCOM")    := NULL;
    //   DUMMY := SHOW_LOV('LOV_CACOMPLA', 15,10);
    //  --ELSE
    //   :this.PARAMETER.get("PCCOM")    := :this.PARAMETER.get("PCODCOMER");
    //   DUMMY := SHOW_LOV('LOV_CACOMPLA', 15,10);  
    //   */
    //  END IF;
    // END;
    //#endregion
    async CMFMENU_agenda_codcomercial_keyListval() {
        console.log("Entering CMFMENU_agenda_codcomercial_keyListval");
        let DUMMY: boolean = null;
        let T_RESPUESTA: number = null;
        if (["GF", "GC", "JM", "AM", "GI", "AP", "SR"].indexOf(this.PARAMETER.get("PCARGO")) != -1) {
            this.PARAMETER.set("PPLAZU", null);
            this.PARAMETER.set("PCCOM", null);
            DUMMY = this.oracleFormsBuiltins.show_lov("LOV_CACOMPLA", 15, 10);
        }
        console.log("Exiting CMFMENU_agenda_codcomercial_keyListval");
    }

    //#region PLSQL
    // BEGIN IF :ZOOM.ESTADO_ZOOM = 0 THEN
    //  SHOW_VIEW('ZOOM_DIR2');
    //  :ZOOM.DIR_ZOOM:= :BTER.DIRECC;
    //  :ZOOM.ESTADO_ZOOM := 1;
    // ELSIF :ZOOM.ESTADO_ZOOM = 1 THEN
    //  :ZOOM.DIR_ZOOM:= '';
    //  :ZOOM.ESTADO_ZOOM := 0; 
    //  HIDE_VIEW('ZOOM_DIR2'); 
    // END IF; END;
    //#endregion
    async CMFMENU_zoom_verDir_whenButtonPressed() {
        console.log("Entering CMFMENU_zoom_verDir_whenButtonPressed");
        if (this.ZOOM.ESTADO_ZOOM == '0') {
            this.oracleFormsBuiltins.show_view("ZOOM_DIR2");
            this.ZOOM.DIR_ZOOM = this.BTER.DIRECC;
            this.ZOOM.ESTADO_ZOOM = '1';
        }
        else if (this.ZOOM.ESTADO_ZOOM == '1') {
            this.ZOOM.DIR_ZOOM = "";
            this.ZOOM.ESTADO_ZOOM = '0';
            this.oracleFormsBuiltins.hide_view("ZOOM_DIR2");
        }
        console.log("Exiting CMFMENU_zoom_verDir_whenButtonPressed");
    }

}

