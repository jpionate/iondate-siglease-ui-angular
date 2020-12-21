import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFESTOPE business logic
import {
    DETCARGAS,
    BPERIO,
    CRESCTOSXDIA,
    TOOLBAR,
    CRTCTOXOUT,
    OUTXOFCTO,
    BASE,
    CTOXOFICTOS,
    CRTCONTROL,
    OFCTOSCARGA,
    CRTSOLPASO,
    OUTXOFDEM,
    CRTENCASOL,
    CTOSXDIA,
    PARAMETROS,
    BESPECI,
    VLTOPCIO,
    DETSOL,
    CTRESXAREA,
    CRTPASOXSOL,
    CRTERRXCTOS,
    BNIVEL,
    PCRTRADICA,
    CTERRXAREA,
    RESUMEN1,
    DETERROR,
    RESUMEN2,
    CTOXOFIDESEM,
    BCONGRAL,
    CRTCTOXDIA,
    PRESERRADICA,
    CTRESTAXSOL,
    PRESUMRADICA
} from "./CRFESTOPE_models";



// class CRFESTOPE
@Component({
    selector: 'app-crfestope',
    templateUrl: './crfestope.component.html',
})
export class CrfestopeComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['PPROGRAMA', null],
        ['PCONTROL1', null],
        ['PCONTROL2', null],
        ['PCONTROL3', null],
        ['PCONTROL4', null],
        ['PPROGROBJT', null],
        ['PNODOANT', null],
        ['POPCION', null],
        ['PFORREP', null],
        ['POPCIONANT', null],
        ['PAGNOS', null],
        ['PMAXF', null],
        ['PMINF', null],
        ['PCARGO', null],
        ['PGRUOPE', null],
        ['POFICIAL', null],
        ['PITEMANT', null],
        ['PREGANT', null],
        ['PCIUDAD', null],
        ['PFECINI', null],
        ['PFECFIN', null],
        ['PPROGEXEC', null],
        ['PCODPASO', null],
        ['PCAMPOFECHA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public DETCARGAS: DETCARGAS = new DETCARGAS();
    public BPERIO: BPERIO = new BPERIO();
    public CRESCTOSXDIA: CRESCTOSXDIA = new CRESCTOSXDIA();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public CRTCTOXOUT: CRTCTOXOUT = new CRTCTOXOUT();
    public OUTXOFCTO: OUTXOFCTO = new OUTXOFCTO();
    public BASE: BASE = new BASE();
    public CTOXOFICTOS: CTOXOFICTOS = new CTOXOFICTOS();
    public CRTCONTROL: CRTCONTROL = new CRTCONTROL();
    public OFCTOSCARGA: OFCTOSCARGA = new OFCTOSCARGA();
    public CRTSOLPASO: CRTSOLPASO = new CRTSOLPASO();
    public OUTXOFDEM: OUTXOFDEM = new OUTXOFDEM();
    public CRTENCASOL: CRTENCASOL = new CRTENCASOL();
    public CTOSXDIA: CTOSXDIA = new CTOSXDIA();
    public PARAMETROS: PARAMETROS = new PARAMETROS();
    public BESPECI: BESPECI = new BESPECI();
    public VLTOPCIO: VLTOPCIO = new VLTOPCIO();
    public DETSOL: DETSOL = new DETSOL();
    public CTRESXAREA: CTRESXAREA = new CTRESXAREA();
    public CRTPASOXSOL: CRTPASOXSOL = new CRTPASOXSOL();
    public CRTERRXCTOS: CRTERRXCTOS = new CRTERRXCTOS();
    public BNIVEL: BNIVEL = new BNIVEL();
    public PCRTRADICA: PCRTRADICA = new PCRTRADICA();
    public CTERRXAREA: CTERRXAREA = new CTERRXAREA();
    public RESUMEN1: RESUMEN1 = new RESUMEN1();
    public DETERROR: DETERROR = new DETERROR();
    public RESUMEN2: RESUMEN2 = new RESUMEN2();
    public CTOXOFIDESEM: CTOXOFIDESEM = new CTOXOFIDESEM();
    public BCONGRAL: BCONGRAL = new BCONGRAL();
    public CRTCTOXDIA: CRTCTOXDIA = new CRTCTOXDIA();
    public PRESERRADICA: PRESERRADICA = new PRESERRADICA();
    public CTRESTAXSOL: CTRESTAXSOL = new CTRESTAXSOL();
    public PRESUMRADICA: PRESUMRADICA = new PRESUMRADICA();


    //#region PLSQL
    // BEGIN --TAB_NEW_PAGE
    // --TAB_PREVIOUS_PAGE
    // IF :SYSTEM.TAB_NEW_PAGE = 'CONCOMP' THEN
    //  HIDE_VIEW('DETXSUC');
    //  HIDE_VIEW('DETALLE');
    //  HIDE_VIEW('DETCTOXDIA');
    //  HIDE_VIEW('DETRCTOXDIA');
    //  SHOW_VIEW ('PAG2_CONCOMP');
    //  GO_BLOCK('BCONGRAL');
    //  GO_ITEM('C006');
    // END IF;
    // IF :SYSTEM.TAB_NEW_PAGE = 'RESUMEN' THEN
    //  HIDE_VIEW('PAG2_CONCOMP');
    //  HIDE_VIEW('DETXSUC');
    //  HIDE_VIEW('DETALLE');
    //   HIDE_VIEW('DETCTOXDIA');
    //   HIDE_VIEW('DETRCTOXDIA');
    //  GO_BLOCK('RESUMEN1');
    //  EXECUTE_QUERY;
    //   GO_BLOCK('RESUMEN2');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('RESUMEN1');
    //  GO_ITEM('CODIGO');
    // END IF;
    // IF :SYSTEM.TAB_NEW_PAGE = 'CONTRATOS' THEN
    //  HIDE_VIEW('PAG2_CONCOMP');
    //  HIDE_VIEW('DETXSUC');
    //  HIDE_VIEW('DETCTOXDIA');
    //  HIDE_VIEW('DETRCTOXDIA');
    //  GO_ITEM('V_FECHA');
    // END IF;
    // IF :SYSTEM.TAB_NEW_PAGE = 'CTOSXOFC' THEN
    //  HIDE_VIEW('PAG2_CONCOMP');
    //  HIDE_VIEW('DETXSUC');
    //  HIDE_VIEW('DETCTOXDIA');
    //  HIDE_VIEW('DETRCTOXDIA');
    //  GO_ITEM('V_OFCDESEM');
    // END IF;
    // IF :SYSTEM.TAB_NEW_PAGE = 'CTOSOFICTOS' THEN
    //  HIDE_VIEW('PAG2_CONCOMP');
    //  HIDE_VIEW('DETXSUC');
    //  HIDE_VIEW('DETCTOXDIA');
    //  HIDE_VIEW('DETRCTOXDIA');
    //  GO_ITEM('V_OFCCTOS');
    // END IF;
    // IF :SYSTEM.TAB_NEW_PAGE = 'ERRORES' THEN
    //  HIDE_VIEW('PAG2_CONCOMP');
    //  HIDE_VIEW('DETXSUC');
    //  HIDE_VIEW('DETCTOXDIA');
    //  HIDE_VIEW('DETRCTOXDIA');
    //  GO_ITEM ('VAR_FECERRI');
    // END IF;
    // IF :SYSTEM.TAB_NEW_PAGE = 'CTOOUT' THEN
    //  HIDE_VIEW('DETRCTOXDIA');
    //  HIDE_VIEW('PAG2_CONCOMP');
    //  HIDE_VIEW('DETXSUC');
    //  HIDE_VIEW('DETCTOXDIA');
    //  GO_ITEM('PARAMETROS.VAR_OPCCTRL');
    // END IF;
    // IF :SYSTEM.TAB_NEW_PAGE = 'CTOSDIA' THEN
    //  HIDE_VIEW('PAG2_CONCOMP');
    //  HIDE_VIEW('DETXSUC');
    //  GO_ITEM('VAR_FECINI');
    // END IF;
    // IF :SYSTEM.TAB_NEW_PAGE = 'CTOSXOFICIAL' THEN
    //  HIDE_VIEW('PAG2_CONCOMP');
    //  HIDE_VIEW('DETXSUC');
    //  HIDE_VIEW('DETALLE');
    //   HIDE_VIEW('DETCTOXDIA');
    //   HIDE_VIEW('DETRCTOXDIA');
    //   GO_ITEM('V_FECINICIAL');
    // END IF;
    // IF :SYSTEM.TAB_NEW_PAGE = 'RADICACION' THEN
    //   HIDE_VIEW('PAG2_CONCOMP');
    //  HIDE_VIEW('DETXSUC');
    //  HIDE_VIEW('DETALLE');
    //  HIDE_VIEW('DETCTOXDIA');
    //  HIDE_VIEW('DETRCTOXDIA');
    //  GO_ITEM('V_OFIDESEMRAD');
    // END IF;
    // IF :SYSTEM.TAB_NEW_PAGE = 'CONSULTAPUNTUAL' THEN
    //  HIDE_VIEW('PAG2_CONCOMP');
    //  HIDE_VIEW('DETXSUC');
    //  HIDE_VIEW('DETCTOXDIA');
    //  HIDE_VIEW('DETRCTOXDIA');
    //  GO_BLOCK ('CRTENCASOL');
    //  --ENTER_QUERY;
    //  GO_ITEM ('CRTENCASOL.OFC');
    // END IF; END;
    //#endregion
    async CRFESTOPE_whenTabPageChanged() {
        console.log("Entering CRFESTOPE_whenTabPageChanged");
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "CONCOMP") {
            this.oracleFormsBuiltins.hide_view("DETXSUC");
            this.oracleFormsBuiltins.hide_view("DETALLE");
            this.oracleFormsBuiltins.hide_view("DETCTOXDIA");
            this.oracleFormsBuiltins.hide_view("DETRCTOXDIA");
            this.oracleFormsBuiltins.show_view("PAG2_CONCOMP");
            this.oracleFormsBuiltins.go_block("BCONGRAL");
            this.oracleFormsBuiltins.go_item("C006");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "RESUMEN") {
            this.oracleFormsBuiltins.hide_view("PAG2_CONCOMP");
            this.oracleFormsBuiltins.hide_view("DETXSUC");
            this.oracleFormsBuiltins.hide_view("DETALLE");
            this.oracleFormsBuiltins.hide_view("DETCTOXDIA");
            this.oracleFormsBuiltins.hide_view("DETRCTOXDIA");
            this.oracleFormsBuiltins.go_block("RESUMEN1");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("RESUMEN2");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("RESUMEN1");
            this.oracleFormsBuiltins.go_item("CODIGO");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "CONTRATOS") {
            this.oracleFormsBuiltins.hide_view("PAG2_CONCOMP");
            this.oracleFormsBuiltins.hide_view("DETXSUC");
            this.oracleFormsBuiltins.hide_view("DETCTOXDIA");
            this.oracleFormsBuiltins.hide_view("DETRCTOXDIA");
            this.oracleFormsBuiltins.go_item("V_FECHA");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "CTOSXOFC") {
            this.oracleFormsBuiltins.hide_view("PAG2_CONCOMP");
            this.oracleFormsBuiltins.hide_view("DETXSUC");
            this.oracleFormsBuiltins.hide_view("DETCTOXDIA");
            this.oracleFormsBuiltins.hide_view("DETRCTOXDIA");
            this.oracleFormsBuiltins.go_item("V_OFCDESEM");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "CTOSOFICTOS") {
            this.oracleFormsBuiltins.hide_view("PAG2_CONCOMP");
            this.oracleFormsBuiltins.hide_view("DETXSUC");
            this.oracleFormsBuiltins.hide_view("DETCTOXDIA");
            this.oracleFormsBuiltins.hide_view("DETRCTOXDIA");
            this.oracleFormsBuiltins.go_item("V_OFCCTOS");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "ERRORES") {
            this.oracleFormsBuiltins.hide_view("PAG2_CONCOMP");
            this.oracleFormsBuiltins.hide_view("DETXSUC");
            this.oracleFormsBuiltins.hide_view("DETCTOXDIA");
            this.oracleFormsBuiltins.hide_view("DETRCTOXDIA");
            this.oracleFormsBuiltins.go_item("VAR_FECERRI");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "CTOOUT") {
            this.oracleFormsBuiltins.hide_view("DETRCTOXDIA");
            this.oracleFormsBuiltins.hide_view("PAG2_CONCOMP");
            this.oracleFormsBuiltins.hide_view("DETXSUC");
            this.oracleFormsBuiltins.hide_view("DETCTOXDIA");
            this.oracleFormsBuiltins.go_item("PARAMETROS.VAR_OPCCTRL");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "CTOSDIA") {
            this.oracleFormsBuiltins.hide_view("PAG2_CONCOMP");
            this.oracleFormsBuiltins.hide_view("DETXSUC");
            this.oracleFormsBuiltins.go_item("VAR_FECINI");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "CTOSXOFICIAL") {
            this.oracleFormsBuiltins.hide_view("PAG2_CONCOMP");
            this.oracleFormsBuiltins.hide_view("DETXSUC");
            this.oracleFormsBuiltins.hide_view("DETALLE");
            this.oracleFormsBuiltins.hide_view("DETCTOXDIA");
            this.oracleFormsBuiltins.hide_view("DETRCTOXDIA");
            this.oracleFormsBuiltins.go_item("V_FECINICIAL");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "RADICACION") {
            this.oracleFormsBuiltins.hide_view("PAG2_CONCOMP");
            this.oracleFormsBuiltins.hide_view("DETXSUC");
            this.oracleFormsBuiltins.hide_view("DETALLE");
            this.oracleFormsBuiltins.hide_view("DETCTOXDIA");
            this.oracleFormsBuiltins.hide_view("DETRCTOXDIA");
            this.oracleFormsBuiltins.go_item("V_OFIDESEMRAD");
        }
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "CONSULTAPUNTUAL") {
            this.oracleFormsBuiltins.hide_view("PAG2_CONCOMP");
            this.oracleFormsBuiltins.hide_view("DETXSUC");
            this.oracleFormsBuiltins.hide_view("DETCTOXDIA");
            this.oracleFormsBuiltins.hide_view("DETRCTOXDIA");
            this.oracleFormsBuiltins.go_block("CRTENCASOL");
            this.oracleFormsBuiltins.go_item("CRTENCASOL.OFC");
        }
        console.log("Exiting CRFESTOPE_whenTabPageChanged");
    }

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
    async CRFESTOPE_onClearDetails() {
        console.log("Entering CRFESTOPE_onClearDetails");
        // CRFESTOPE_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFESTOPE_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTOPE_whenMouseDoubleclick() {
        console.log("Entering CRFESTOPE_whenMouseDoubleclick");
        console.log("Exiting CRFESTOPE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // DECLARE
    //  VMINF DATE;
    //  VMAXF DATE;
    // --
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    //   BEGIN
    //  PQBD_COL_ESTCRE.PMMFAPRCR(VMINF, VMAXF);
    //   :this.PARAMETER.get("PMINF") := NVL(VMINF,SYSDATE);
    //   :this.PARAMETER.get("PMAXF") := NVL(VMAXF,SYSDATE);
    //   :this.PARAMETER.get("PAGNOS") := NVL(TO_NUMBER(TO_CHAR(:this.PARAMETER.get("PMAXF"),'YYYY')),0)
    //                      - NVL(TO_NUMBER(TO_CHAR(:this.PARAMETER.get("PMINF"),'YYYY')),0) + 1;
    //   :PARAMETROS.V_CODUNI := FUNIDAD_USUARIO(USER);
    //   END;
    // END;
    //#endregion
    async CRFESTOPE_preForm() {
        console.log("Entering CRFESTOPE_preForm");
        let VMINF: Date = null;
        let VMAXF: Date = null;
        // CRFESTOPE_PANTALLA();
        // CRFESTOPE_PINCIARSGRDADOFCNAS();
        // CRFESTOPE_PQBD_COL_ESTCRE.PMMFAPRCR(VMINF, VMAXF);
        // this.PARAMETER.get("PMINF") = VMINF == null ? PLSQLBuiltins.sysdate() : VMINF;
        // this.PARAMETER.get("PMAXF") = VMAXF == null ? PLSQLBuiltins.sysdate() : VMAXF;
        // this.PARAMETER.get("PAGNOS") = PLSQLBuiltins.to_number(this.PARAMETER.get("PMAXF").toString()) == null ? 0 : PLSQLBuiltins.to_number(this.PARAMETER.get("PMAXF").toString()) - PLSQLBuiltins.to_number(this.PARAMETER.get("PMINF").toString()) == null ? 0 : PLSQLBuiltins.to_number(this.PARAMETER.get("PMINF").toString()) + 1;
        // this.PARAMETROS.V_CODUNI = FUNIDAD_USUARIO(USER);
        console.log("Exiting CRFESTOPE_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTOPE_whenNewFormInstance() {
        console.log("Entering CRFESTOPE_whenNewFormInstance");
        console.log("Exiting CRFESTOPE_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //    DELETE CRTPASOXSOL
    //     WHERE SOL_USUARIO = PLSQLBuiltins.user();
    //    COMMIT;
    //     EXIT_FORM;
    //  END;
    //#endregion
    async CRFESTOPE_keyExit() {
        console.log("Entering CRFESTOPE_keyExit");
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestope/crfestope_keyexit_query1", payload1);
        this.oracleFormsBuiltins.exit_form();
        console.log("Exiting CRFESTOPE_keyExit");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_DETCARGAS;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_DETCARGAS(BK_DATA, :OFCTOSCARGA.CODIGO, :V_FECINICIAL, :V_FECFINAL, :V_CODUNI);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'DETCARGAS');
    // END;
    //#endregion
    async CRFESTOPE_detcargas_queryProcedure() {
        console.log("Entering CRFESTOPE_detcargas_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_DETCARGAS(BK_DATA, OFCTOSCARGA.CODIGO, V_FECINICIAL, V_FECFINAL, V_CODUNI);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "DETCARGAS");
        console.log("Exiting CRFESTOPE_detcargas_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    //  VFECINI DATE;
    //  VFECFIN DATE;
    // BEGIN
    //  IF :BPERIO.FECHAINI IS NOT NULL OR :BPERIO.FECHAFIN IS NOT NULL THEN
    //     VFECINI := :BPERIO.FECHAINI;
    //    VFECFIN := :BPERIO.FECHAFIN;
    //    :this.PARAMETER.get("PFECINI") := VFECINI;
    //    :this.PARAMETER.get("PFECFIN") := VFECFIN;
    //    IF VFECINI > VFECFIN THEN
    //     LIB$DTNERFRMA('LA FECHA INICIAL, '||TO_CHAR(VFECINI,'DD/MM/YYYY')||', DEBE SER '
    //                 ||'INFERIOR A LA FECHA FINAL, '||TO_CHAR(VFECFIN,'DD/MM/YYYY'));
    //    END IF; 
    //   ELSIF :BPERIO.MESINI IS NOT NULL OR :BPERIO.AGNOINI IS NOT NULL
    //    OR :BPERIO.MESFIN IS NOT NULL OR :BPERIO.AGNOFIN IS NOT NULL THEN
    //    IF :BPERIO.MESINI IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE EL MES INICIAL');
    //    ELSIF :BPERIO.AGNOINI IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE EL AÑO INICIAL');
    //    ELSIF :BPERIO.MESFIN IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE EL MES FINAL');
    //    ELSIF :BPERIO.AGNOFIN IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE EL AÑO FINAL');
    //    END IF;
    //    VFECINI := TO_DATE(:BPERIO.MESINI||:BPERIO.AGNOINI,'MMYYYY');
    //    VFECFIN := LAST_DAY(TO_DATE(:BPERIO.MESFIN||:BPERIO.AGNOFIN,'MMYYYY'));
    //    :this.PARAMETER.get("PFECINI") := VFECINI;
    //    :this.PARAMETER.get("PFECFIN") := VFECFIN;
    //    IF VFECINI > VFECFIN THEN
    //     LIB$DTNERFRMA('LA FECHA INICIAL, '||TO_CHAR(VFECINI,'DD/MM/YYYY')||', DEBE SER '
    //                 ||'INFERIOR A LA FECHA FINAL, '||TO_CHAR(VFECFIN,'DD/MM/YYYY'));
    //    END IF;
    //   ELSE
    //    :this.PARAMETER.get("PFECINI") := TO_DATE(:BPERIO.MES||:BPERIO.AGNO,'MMYYYY');
    //    :this.PARAMETER.get("PFECFIN") := LAST_DAY(:this.PARAMETER.get("PFECINI"));
    //   END IF;
    // END;
    //#endregion
    async CRFESTOPE_bperio_whenValidateRecord() {
        console.log("Entering CRFESTOPE_bperio_whenValidateRecord");
        let VFECINI: Date = null;
        let VFECFIN: Date = null;
        if (((this.BPERIO.FECHAINI != null) || (this.BPERIO.FECHAFIN != null))) {
            VFECINI = this.BPERIO.FECHAINI;
            VFECFIN = this.BPERIO.FECHAFIN;
            this.PARAMETER.set("PFECINI", VFECINI.toString());
            this.PARAMETER.set("PFECFIN", VFECFIN.toString());
            if (VFECINI > VFECFIN) {
                // CRFESTOPE_LIB$DTNERFRMA("LA FECHA INICIAL, " + VFECINI.toString() + ", DEBE SER " + "INFERIOR A LA FECHA FINAL, " + VFECFIN.toString());
            }
        }
        else if (((((this.BPERIO.MESINI != null) || (this.BPERIO.AGNOINI != null)) || (this.BPERIO.MESFIN != null)) || (this.BPERIO.AGNOFIN != null))) {
            if ((this.BPERIO.MESINI == null)) {
                // CRFESTOPE_LIB$DTNERFRMA("ENTRE EL MES INICIAL");
            }
            else if ((this.BPERIO.AGNOINI == null)) {
                // CRFESTOPE_LIB$DTNERFRMA("ENTRE EL AÑO INICIAL");
            }
            else if ((this.BPERIO.MESFIN == null)) {
                // CRFESTOPE_LIB$DTNERFRMA("ENTRE EL MES FINAL");
            }
            else if ((this.BPERIO.AGNOFIN == null)) {
                // CRFESTOPE_LIB$DTNERFRMA("ENTRE EL AÑO FINAL");
            }
            VFECINI = new Date(this.BPERIO.MESINI + this.BPERIO.AGNOINI);
            // VFECFIN = LAST_DAY(new Date(this.BPERIO.MESFIN + this.BPERIO.AGNOFIN));
            this.PARAMETER.set("PFECINI", VFECINI.toString());
            this.PARAMETER.set("PFECFIN", VFECFIN.toString());
            if (VFECINI > VFECFIN) {
                // CRFESTOPE_LIB$DTNERFRMA("LA FECHA INICIAL, " + VFECINI.toString() + ", DEBE SER " + "INFERIOR A LA FECHA FINAL, " + VFECFIN.toString());
            }
        }
        else {
            // this.PARAMETER.get("PFECINI") = new Date(this.BPERIO.MES + this.BPERIO.AGNO);
            // this.PARAMETER.get("PFECFIN") = LAST_DAY(this.PARAMETER.get("PFECINI"));
        }
        console.log("Exiting CRFESTOPE_bperio_whenValidateRecord");
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
    async CRFESTOPE_bperio_whenCreateRecord() {
        console.log("Entering CRFESTOPE_bperio_whenCreateRecord");
        if (this.oracleFormsBuiltins.get_group_row_count("GRMESES") != 0) {
            // this.BPERIO.MES = ADD_MONTHS(PLSQLBuiltins.sysdate(), 0).toString();
        }
        if (this.oracleFormsBuiltins.get_group_row_count("GRAGNOS") != 0) {
            // this.BPERIO.AGNO = ADD_MONTHS(PLSQLBuiltins.sysdate(), 1).toString();
        }
        // this.PARAMETER.get("PFECINI") = new Date(this.BPERIO.MES + this.BPERIO.AGNO);
        // this.PARAMETER.get("PFECFIN") = LAST_DAY(this.PARAMETER.get("PFECINI"));
        console.log("Exiting CRFESTOPE_bperio_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN :BPERIO.MES := NULL;
    // :BPERIO.AGNO := NULL;
    // --SET_ITEM_INSTANCE_PROPERTY('BPERIO.MES',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // --SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNO',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE"); END;
    //#endregion
    async CRFESTOPE_bperio_agnoini_whenListChanged() {
        console.log("Entering CRFESTOPE_bperio_agnoini_whenListChanged");
        this.BPERIO.MES = null;
        this.BPERIO.AGNO = null;
        console.log("Exiting CRFESTOPE_bperio_agnoini_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :BPERIO.MES := NULL;
    // :BPERIO.AGNO := NULL;
    // --SET_ITEM_INSTANCE_PROPERTY('BPERIO.MES',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // --SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNO',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE"); END;
    //#endregion
    async CRFESTOPE_bperio_mesini_whenListChanged() {
        console.log("Entering CRFESTOPE_bperio_mesini_whenListChanged");
        this.BPERIO.MES = null;
        this.BPERIO.AGNO = null;
        console.log("Exiting CRFESTOPE_bperio_mesini_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //  VFECINI DATE;
    //  VFECFIN DATE;
    // BEGIN
    //  :BPERIO.MES    := NULL;
    // :BPERIO.AGNO   := NULL;
    // :BPERIO.MESINI := NULL;
    // :BPERIO.AGNOINI:= NULL;
    // :BPERIO.MESFIN := NULL;
    // :BPERIO.AGNOFIN:= NULL;
    // IF :FECHAINI > :FECHAFIN THEN
    //   LIB$DTNERFRMA('LA FECHA INICIAL, '||TO_CHAR(:FECHAINI,'DD/MM/YYYY')||', DEBE SER '
    //                 ||'INFERIOR A LA FECHA FINAL, '||TO_CHAR(:FECHAFIN,'DD/MM/YYYY'));
    // END IF;
    // NEXT_ITEM;
    // END;
    //#endregion
    async CRFESTOPE_bperio_fechafin_keyNextItem() {
        console.log("Entering CRFESTOPE_bperio_fechafin_keyNextItem");
        let VFECINI: Date = null;
        let VFECFIN: Date = null;
        this.BPERIO.MES = null;
        this.BPERIO.AGNO = null;
        this.BPERIO.MESINI = null;
        this.BPERIO.AGNOINI = null;
        this.BPERIO.MESFIN = null;
        this.BPERIO.AGNOFIN = null;
        // if (FECHAINI > FECHAFIN) {
        // CRFESTOPE_LIB$DTNERFRMA("LA FECHA INICIAL, " + FECHAINI.toString() + ", DEBE SER " + "INFERIOR A LA FECHA FINAL, " + FECHAFIN.toString());
        // }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFESTOPE_bperio_fechafin_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :BPERIO.MES := NULL;
    // :BPERIO.AGNO := NULL;
    // --SET_ITEM_INSTANCE_PROPERTY('BPERIO.MES',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // --SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNO',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE"); END;
    //#endregion
    async CRFESTOPE_bperio_mesfin_whenListChanged() {
        console.log("Entering CRFESTOPE_bperio_mesfin_whenListChanged");
        this.BPERIO.MES = null;
        this.BPERIO.AGNO = null;
        console.log("Exiting CRFESTOPE_bperio_mesfin_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //  VFECINI DATE;
    //  VFECFIN DATE;
    // BEGIN
    // :BPERIO.MES  := NULL;
    // :BPERIO.AGNO := NULL;
    // --SET_ITEM_INSTANCE_PROPERTY('BPERIO.MES',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // --SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNO',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    //  VFECINI := TO_DATE(:BPERIO.MESINI||:BPERIO.AGNOINI,'MMYYYY');
    //    VFECFIN := LAST_DAY(TO_DATE(:BPERIO.MESFIN||:BPERIO.AGNOFIN,'MMYYYY'));
    //    :this.PARAMETER.get("PFECINI") := VFECINI;
    //    :this.PARAMETER.get("PFECFIN") := VFECFIN;
    // END;
    //#endregion
    async CRFESTOPE_bperio_agnofin_whenListChanged() {
        console.log("Entering CRFESTOPE_bperio_agnofin_whenListChanged");
        let VFECINI: Date = null;
        let VFECFIN: Date = null;
        this.BPERIO.MES = null;
        this.BPERIO.AGNO = null;
        VFECINI = new Date(this.BPERIO.MESINI + this.BPERIO.AGNOINI);
        // VFECFIN = LAST_DAY(new Date(this.BPERIO.MESFIN + this.BPERIO.AGNOFIN));
        // this.PARAMETER.get("PFECINI") = VFECINI;
        // this.PARAMETER.get("PFECFIN") = VFECFIN;
        console.log("Exiting CRFESTOPE_bperio_agnofin_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :BPERIO.MESINI := NULL;
    // :BPERIO.AGNOINI := NULL;
    // :BPERIO.MESFIN := NULL;
    // :BPERIO.AGNOFIN := NULL;
    // /*SET_ITEM_INSTANCE_PROPERTY('BPERIO.MESINI',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNOINI',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.MESFIN',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNOFIN',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // */; END;
    //#endregion
    async CRFESTOPE_bperio_mes_whenListChanged() {
        console.log("Entering CRFESTOPE_bperio_mes_whenListChanged");
        this.BPERIO.MESINI = null;
        this.BPERIO.AGNOINI = null;
        this.BPERIO.MESFIN = null;
        this.BPERIO.AGNOFIN = null;
        console.log("Exiting CRFESTOPE_bperio_mes_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :BPERIO.MES    := NULL;
    // :BPERIO.AGNO   := NULL;
    // :BPERIO.MESINI := NULL;
    // :BPERIO.AGNOINI:= NULL;
    // :BPERIO.MESFIN := NULL;
    // :BPERIO.AGNOFIN:= NULL;
    // NEXT_ITEM;
    // /*SET_ITEM_INSTANCE_PROPERTY('BPERIO.MES',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNO',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.MESINI',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNOINI',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.MESFIN',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // SET_ITEM_INSTANCE_PROPERTY('BPERIO.AGNOFIN',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // */; END;
    //#endregion
    async CRFESTOPE_bperio_fechaini_keyNextItem() {
        console.log("Entering CRFESTOPE_bperio_fechaini_keyNextItem");
        this.BPERIO.MES = null;
        this.BPERIO.AGNO = null;
        this.BPERIO.MESINI = null;
        this.BPERIO.AGNOINI = null;
        this.BPERIO.MESFIN = null;
        this.BPERIO.AGNOFIN = null;
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFESTOPE_bperio_fechaini_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_RESCTODIA;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_CTOXDIA2(BK_DATA, :VAR_FECINI, :VAR_FECFIN, :VAR_CTRLSOL, '%%%%', 'C');
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'CRESCTOSXDIA');
    // END;
    //#endregion
    async CRFESTOPE_cresctosxdia_queryProcedure() {
        console.log("Entering CRFESTOPE_cresctosxdia_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_CTOXDIA2(BK_DATA, VAR_FECINI, VAR_FECFIN, VAR_CTRLSOL, "%%%%", "C");
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "CRESCTOSXDIA");
        console.log("Exiting CRFESTOPE_cresctosxdia_queryProcedure");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT  USU_NOMBRE   NOMBRE
    //    INTO :NOMOFIC2
    //  FROM SGUSUARIOS
    //  WHERE USU_CODIGO = :CRESCTOSXDIA.OFICIAL;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :NOMOFIC2 := 'SIN OFICIAL';
    // END;
    //#endregion
    async CRFESTOPE_cresctosxdia_postQuery() {
        console.log("Entering CRFESTOPE_cresctosxdia_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("OFICIAL", this.CRESCTOSXDIA.OFICIAL);
        // call REST API
        const result1 = await Rest.post("/crfestope_cresctosxdia/crfestope_cresctosxdia_postquery_query1", payload1);
        // get values from result
        // NOMOFIC2 = result1[0].get("NOMOFIC2");
        if (result1 == null || result1.length == 0) {

            this.CRESCTOSXDIA.NOMOFIC2 = "SIN OFICIAL";
        }

        console.log("Exiting CRFESTOPE_cresctosxdia_postQuery");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTOPE_toolbar_whenButtonPressed() {
        console.log("Entering CRFESTOPE_toolbar_whenButtonPressed");
        console.log("Exiting CRFESTOPE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTOPE_toolbar_whenMouseLeave() {
        console.log("Entering CRFESTOPE_toolbar_whenMouseLeave");
        console.log("Exiting CRFESTOPE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTOPE_toolbar_whenNewFormInstance() {
        console.log("Entering CRFESTOPE_toolbar_whenNewFormInstance");
        console.log("Exiting CRFESTOPE_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    // SELECT PASO_DESCRIP
    //  INTO :DESPASO
    // FROM CRTSOLPASO
    // WHERE PASO_CODIGO = :OUT_CODPASO;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :DESPASO := NULL;
    // END;
    // BEGIN
    //   BEGIN
    //    SELECT SOLICR_USCIAL, COM_NOMBRE||COM_APELLIDO NOMBRE
    //      INTO :VAR_CODCOM, :DESNOMCOM
    //     FROM CRTSOLICR, SETCOMCIA
    //     WHERE SOLICR_USCIAL = COM_USORAC
    //      AND  SOLICR_CODUNI = COM_CODUNI
    //      AND  SOLICR_OFCSOL = :OUT_OFCNA
    //      AND  SOLICR_CODSOL = :OUT_SOL;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //     :VAR_CODCOM := NULL;
    //     :DESNOMCOM  := NULL;
    //   WHEN TOO_MANY_ROWS THEN
    //    :VAR_CODCOM := NULL;
    //      :DESNOMCOM  := NULL;  
    //   END;
    // END;
    //#endregion
    async CRFESTOPE_crtctoxout_postQuery() {
        console.log("Entering CRFESTOPE_crtctoxout_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("OUT_CODPASO", OUT_CODPASO);
        // call REST API
        const result1 = await Rest.post("/crfestope_crtctoxout/crfestope_crtctoxout_postquery_query1", payload1);
        // get values from result
        // DESPASO = result1[0].get("DESPASO");
        if (result1 == null || result1.length == 0) {

            this.CRTCTOXOUT.DESPASO = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("OUT_OFCNA", OUT_OFCNA);
        // payload2.set("OUT_SOL", OUT_SOL);
        // call REST API
        const result2 = await Rest.post("/crfestope_crtctoxout/crfestope_crtctoxout_postquery_query2", payload2);
        // get values from result
        // VAR_CODCOM = result2[0].get("VAR_CODCOM");
        // DESNOMCOM = result2[0].get("DESNOMCOM");
        if (result2 == null || result2.length == 0) {

            this.CRTCTOXOUT.VAR_CODCOM = null;
            this.CRTCTOXOUT.DESNOMCOM = null;
        }

        console.log("Exiting CRFESTOPE_crtctoxout_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_CTOXOUTOFICCTO;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_RESOUTXOFCTOS(BK_DATA, :VAR_OPCCTRL, :VAR_AGENCIA);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'OUTXOFCTO');
    // END;
    //#endregion
    async CRFESTOPE_outxofcto_queryProcedure() {
        console.log("Entering CRFESTOPE_outxofcto_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_RESOUTXOFCTOS(BK_DATA, VAR_OPCCTRL, VAR_AGENCIA);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "OUTXOFCTO");
        console.log("Exiting CRFESTOPE_outxofcto_queryProcedure");
    }

    //#region PLSQL
    // BEGIN IF :V_VERD = 'S' THEN
    //  SHOW_VIEW ('SOLICI2');
    //  SYNCHRONIZE;
    //  GO_BLOCK('CRTCTOXOUT');
    //  EXECUTE_QUERY;
    // ELSE
    //  HIDE_VIEW ('SOLICI2');
    // END IF; END;
    //#endregion
    async CRFESTOPE_outxofcto_vVerd_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_outxofcto_vVerd_whenCheckboxChanged");
        // if (V_VERD == "S") {
        //     this.oracleFormsBuiltins.show_view("SOLICI2");
        //     this.oracleFormsBuiltins.synchronize();
        //     this.oracleFormsBuiltins.go_block("CRTCTOXOUT");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.hide_view("SOLICI2");
        // }
        console.log("Exiting CRFESTOPE_outxofcto_vVerd_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_OFICICTO;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_OFICICTO(BK_DATA, :V_OFCCTOS, :V_CTRLOFCTO, :V_AGENCCTOS, :V_CODUNI);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'CTOXOFICTOS');
    // END;
    //#endregion
    async CRFESTOPE_ctoxofictos_queryProcedure() {
        console.log("Entering CRFESTOPE_ctoxofictos_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_OFICICTO(BK_DATA, V_OFCCTOS, V_CTRLOFCTO, V_AGENCCTOS, V_CODUNI);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "CTOXOFICTOS");
        console.log("Exiting CRFESTOPE_ctoxofictos_queryProcedure");
    }

    //#region PLSQL
    // BEGIN IF :V_VERSOL = 'S' THEN
    //  :VAR_OFICTO := :CTOXOFICTOS.OFICTO;
    //  :VAR_PASO   := :CTOXOFICTOS.PASO;
    //  :VAR_OFIDES := NULL;
    //  :VAR_NOMBRE := :CTOXOFICTOS.NOMBRE;
    //  SHOW_VIEW('SOLICI');
    //  SHOW_VIEW('DETALLE');
    //  SYNCHRONIZE;
    //  GO_BLOCK('CRTCONTROL');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('DETSOL');
    //  EXECUTE_QUERY;
    // ELSE
    //  :VAR_OFICTO := NULL;
    //  :VAR_PASO   := NULL;
    //  :VAR_OFIDES := NULL;
    //  :VAR_NOMBRE := NULL;
    //  HIDE_VIEW('SOLICI');
    //  HIDE_VIEW('DETALLE');
    // END IF; END;
    //#endregion
    async CRFESTOPE_ctoxofictos_vVersol_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_ctoxofictos_vVersol_whenCheckboxChanged");
        // if (V_VERSOL == "S") {
        //     this.CTOXOFICTOS.VAR_OFICTO = this.CTOXOFICTOS.OFICTO;
        //     this.CTOXOFICTOS.VAR_PASO = this.CTOXOFICTOS.PASO;
        //     this.CTOXOFICTOS.VAR_OFIDES = null;
        //     this.CTOXOFICTOS.VAR_NOMBRE = this.CTOXOFICTOS.NOMBRE;
        //     this.oracleFormsBuiltins.show_view("SOLICI");
        //     this.oracleFormsBuiltins.show_view("DETALLE");
        //     this.oracleFormsBuiltins.synchronize();
        //     this.oracleFormsBuiltins.go_block("CRTCONTROL");
        //     this.oracleFormsBuiltins.execute_query();
        //     this.oracleFormsBuiltins.go_block("DETSOL");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.CTOXOFICTOS.VAR_OFICTO = null;
        //     this.CTOXOFICTOS.VAR_PASO = null;
        //     this.CTOXOFICTOS.VAR_OFIDES = null;
        //     this.CTOXOFICTOS.VAR_NOMBRE = null;
        //     this.oracleFormsBuiltins.hide_view("SOLICI");
        //     this.oracleFormsBuiltins.hide_view("DETALLE");
        // }
        console.log("Exiting CRFESTOPE_ctoxofictos_vVersol_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_CARGAS;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_CARGAS(BK_DATA, :V_OFICTOS, :V_FECINICIAL, :V_FECFINAL, :V_CODUNI);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'OFCTOSCARGA');
    // END;
    //#endregion
    async CRFESTOPE_ofctoscarga_queryProcedure() {
        console.log("Entering CRFESTOPE_ofctoscarga_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_CARGAS(BK_DATA, V_OFICTOS, V_FECINICIAL, V_FECFINAL, V_CODUNI);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "OFCTOSCARGA");
        console.log("Exiting CRFESTOPE_ofctoscarga_queryProcedure");
    }

    //#region PLSQL
    // BEGIN
    // IF :V_CTOS = 'S' THEN
    //  GO_BLOCK('DETCARGAS');
    //  EXECUTE_QUERY;
    // ELSE
    //  GO_BLOCK('DETCARGAS');
    //  CLEAR_BLOCK;
    //  GO_ITEM('V_CTOS');
    //  END IF;
    // END;
    //#endregion
    async CRFESTOPE_ofctoscarga_vCtos_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_ofctoscarga_vCtos_whenCheckboxChanged");
        // if (V_CTOS == "S") {
        //     this.oracleFormsBuiltins.go_block("DETCARGAS");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.go_block("DETCARGAS");
        //     this.oracleFormsBuiltins.clear_block();
        //     this.oracleFormsBuiltins.go_item("V_CTOS");
        // }
        console.log("Exiting CRFESTOPE_ofctoscarga_vCtos_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTPASOXSOL DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTPASOXSOL_CUR IS      
    //     SELECT 1 FROM CRTPASOXSOL C     
    //     WHERE C.SOL_CODPASO = :CRTSOLPASO.PASO_CODIGO;
    //   --
    //   -- END CRTPASOXSOL DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTPASOXSOL DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTPASOXSOL_CUR;     
    //   FETCH CRTPASOXSOL_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTPASOXSOL_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTPASOXSOL_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTPASOXSOL_CUR;
    //   --
    //   -- END CRTPASOXSOL DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFESTOPE_crtsolpaso_onCheckDeleteMaster() {
        console.log("Entering CRFESTOPE_crtsolpaso_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFESTOPE_crtsolpaso_onCheckDeleteMaster");
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
    //   -- BEGIN CRTPASOXSOL DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLPASO.PASO_CODIGO IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLPASO.CRTSOLPASO_CRTPASOXSOL');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTPASOXSOL');   
    //   END IF;
    //   --
    //   -- END CRTPASOXSOL DETAIL PROGRAM SECTION
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
    async CRFESTOPE_crtsolpaso_onPopulateDetails() {
        console.log("Entering CRFESTOPE_crtsolpaso_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.CRTSOLPASO.PASO_CODIGO != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLPASO.CRTSOLPASO_CRTPASOXSOL");
            // CRFESTOPE_QUERY_MASTER_DETAILS(REL_ID, "CRTPASOXSOL");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFESTOPE_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFESTOPE_crtsolpaso_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT COUNT(SOL_SOLICITUD)
    //    INTO :BOGOTA
    //  FROM CRTPASOXSOL
    //  WHERE SOL_CODPASO = :CRTSOLPASO.PASO_CODIGO
    //     AND SOL_AGENCIA = '001'
    //     AND SOL_TIPCONS = 'C';
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :BOGOTA := 0;
    // END;
    // BEGIN
    //  SELECT COUNT(SOL_SOLICITUD)
    //    INTO :MEDELLIN
    //  FROM CRTPASOXSOL
    //  WHERE SOL_CODPASO = :CRTSOLPASO.PASO_CODIGO
    //     AND SOL_AGENCIA = '020'
    //     AND SOL_TIPCONS = 'C';
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :MEDELLIN := 0;
    // END;
    // BEGIN
    //  SELECT COUNT(SOL_SOLICITUD)
    //    INTO :CALI
    //  FROM CRTPASOXSOL
    //  WHERE SOL_CODPASO = :CRTSOLPASO.PASO_CODIGO
    //     AND SOL_AGENCIA = '030'
    //     AND SOL_TIPCONS = 'C';
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :CALI := 0;
    // END;
    //#endregion
    async CRFESTOPE_crtsolpaso_postQuery() {
        console.log("Entering CRFESTOPE_crtsolpaso_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("PASO_CODIGO", this.CRTSOLPASO.PASO_CODIGO);
        // call REST API
        const result1 = await Rest.post("/crfestope_crtsolpaso/crfestope_crtsolpaso_postquery_query1", payload1);
        // get values from result
        // BOGOTA = result1[0].get("BOGOTA");
        if (result1 == null || result1.length == 0) {

            this.CRTSOLPASO.BOGOTA = 0;
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("PASO_CODIGO", this.CRTSOLPASO.PASO_CODIGO);
        // call REST API
        const result2 = await Rest.post("/crfestope_crtsolpaso/crfestope_crtsolpaso_postquery_query2", payload2);
        // get values from result
        // MEDELLIN = result2[0].get("MEDELLIN");
        if (result2 == null || result2.length == 0) {

            this.CRTSOLPASO.MEDELLIN = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("PASO_CODIGO", this.CRTSOLPASO.PASO_CODIGO);
        // call REST API
        const result3 = await Rest.post("/crfestope_crtsolpaso/crfestope_crtsolpaso_postquery_query3", payload3);
        // get values from result
        // CALI = result3[0].get("CALI");
        if (result3 == null || result3.length == 0) {

            this.CRTSOLPASO.CALI = 0;
        }

        console.log("Exiting CRFESTOPE_crtsolpaso_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :V_DETCAL = 'S' THEN
    //  :V_DETMEL  := NULL;
    //  :V_DETBTA  := NULL;
    //  :V_AGENCIA := '030';
    //  SHOW_VIEW('DETXSUC');
    //   GO_BLOCK('CRTPASOXSOL');  
    //   EXECUTE_QUERY;
    // ELSE
    //  HIDE_VIEW('DETXSUC');
    //  :V_AGENCIA := NULL;
    //  :V_DETMEL  := NULL;
    //  :V_DETBTA  := NULL;
    // END IF; END;
    //#endregion
    async CRFESTOPE_crtsolpaso_vDetcal_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_crtsolpaso_vDetcal_whenCheckboxChanged");
        // if (V_DETCAL == "S") {
        //     this.CRTSOLPASO.V_DETMEL = null;
        //     this.CRTSOLPASO.V_DETBTA = null;
        //     this.CRTSOLPASO.V_AGENCIA = "030";
        //     this.oracleFormsBuiltins.show_view("DETXSUC");
        //     this.oracleFormsBuiltins.go_block("CRTPASOXSOL");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.hide_view("DETXSUC");
        //     this.CRTSOLPASO.V_AGENCIA = null;
        //     this.CRTSOLPASO.V_DETMEL = null;
        //     this.CRTSOLPASO.V_DETBTA = null;
        // }
        console.log("Exiting CRFESTOPE_crtsolpaso_vDetcal_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN IF :V_DETBTA = 'S' THEN
    //  :V_AGENCIA := '001';
    //  :V_DETMEL  := NULL;
    //  :V_DETCAL  := NULL;
    //  SHOW_VIEW('DETXSUC');
    //   GO_BLOCK('CRTPASOXSOL');  
    //   EXECUTE_QUERY;
    // ELSE
    //  HIDE_VIEW('DETXSUC');
    //  :V_AGENCIA := NULL;
    //  :V_DETMEL  := NULL;
    //  :V_DETCAL  := NULL;
    // END IF; END;
    //#endregion
    async CRFESTOPE_crtsolpaso_vDetbta_whenCheckboxChanged() {
        // console.log("Entering CRFESTOPE_crtsolpaso_vDetbta_whenCheckboxChanged");
        // if (V_DETBTA == "S") {
        //     this.CRTSOLPASO.V_AGENCIA = "001";
        //     this.CRTSOLPASO.V_DETMEL = null;
        //     this.CRTSOLPASO.V_DETCAL = null;
        //     this.oracleFormsBuiltins.show_view("DETXSUC");
        //     this.oracleFormsBuiltins.go_block("CRTPASOXSOL");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.hide_view("DETXSUC");
        //     this.CRTSOLPASO.V_AGENCIA = null;
        //     this.CRTSOLPASO.V_DETMEL = null;
        //     this.CRTSOLPASO.V_DETCAL = null;
        // }
        console.log("Exiting CRFESTOPE_crtsolpaso_vDetbta_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN IF :V_DETMEL = 'S' THEN
    //  :V_DETBTA  := NULL;
    //  :V_DETCAL  := NULL;
    //  :V_AGENCIA := '020';
    //  SHOW_VIEW('DETXSUC');
    //   GO_BLOCK('CRTPASOXSOL');  
    //   EXECUTE_QUERY;
    // ELSE
    //  HIDE_VIEW('DETXSUC');
    //  :V_AGENCIA := NULL;
    //  :V_DETBTA  := NULL;
    //  :V_DETCAL  := NULL;
    // END IF; END;
    //#endregion
    async CRFESTOPE_crtsolpaso_vDetmel_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_crtsolpaso_vDetmel_whenCheckboxChanged");
        // if (V_DETMEL == "S") {
        //     this.CRTSOLPASO.V_DETBTA = null;
        //     this.CRTSOLPASO.V_DETCAL = null;
        //     this.CRTSOLPASO.V_AGENCIA = "020";
        //     this.oracleFormsBuiltins.show_view("DETXSUC");
        //     this.oracleFormsBuiltins.go_block("CRTPASOXSOL");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.hide_view("DETXSUC");
        //     this.CRTSOLPASO.V_AGENCIA = null;
        //     this.CRTSOLPASO.V_DETBTA = null;
        //     this.CRTSOLPASO.V_DETCAL = null;
        // }
        console.log("Exiting CRFESTOPE_crtsolpaso_vDetmel_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_CTOXOUTOFIDESEM;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_RESOUTXOFDESE(BK_DATA, :VAR_OPCCTRL, :VAR_AGENCIA);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'OUTXOFDEM');
    // END;
    //#endregion
    async CRFESTOPE_outxofdem_queryProcedure() {
        console.log("Entering CRFESTOPE_outxofdem_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_RESOUTXOFDESE(BK_DATA, VAR_OPCCTRL, VAR_AGENCIA);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "OUTXOFDEM");
        console.log("Exiting CRFESTOPE_outxofdem_queryProcedure");
    }

    //#region PLSQL
    // BEGIN IF :V_VERD2 = 'S' THEN
    //  SHOW_VIEW ('SOLICI2');
    //  SYNCHRONIZE;
    //  GO_BLOCK('CRTCTOXOUT');
    //  EXECUTE_QUERY;
    // ELSE
    //  HIDE_VIEW ('SOLICI2');
    // END IF; END;
    //#endregion
    async CRFESTOPE_outxofdem_vVerd2_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_outxofdem_vVerd2_whenCheckboxChanged");
        // if (V_VERD2 == "S") {
        //     this.oracleFormsBuiltins.show_view("SOLICI2");
        //     this.oracleFormsBuiltins.synchronize();
        //     this.oracleFormsBuiltins.go_block("CRTCTOXOUT");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.hide_view("SOLICI2");
        // }
        console.log("Exiting CRFESTOPE_outxofdem_vVerd2_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CTRESTAXSOL DETAIL DECLARE SECTION
    //   --
    //   CURSOR CTRESTAXSOL_CUR IS      
    //     SELECT 1 FROM CTRESTAXSOL C     
    //     WHERE C.ESTASOL_OFICINA = :CRTENCASOL.OFC AND C.ESTASOL_SOLICITUD = :CRTENCASOL.SOL AND C.ESTASOL_PLANEA = :CRTENCASOL.PLANEA AND C.ESTASOL_CODUNI = :CRTENCASOL.CODUNI;
    //   --
    //   -- END CTRESTAXSOL DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CTRESTAXSOL DETAIL PROGRAM SECTION
    //   --
    //   OPEN CTRESTAXSOL_CUR;     
    //   FETCH CTRESTAXSOL_CUR INTO DUMMY_DEFINE;     
    //   IF ( CTRESTAXSOL_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CTRESTAXSOL_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CTRESTAXSOL_CUR;
    //   --
    //   -- END CTRESTAXSOL DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFESTOPE_crtencasol_onCheckDeleteMaster() {
        console.log("Entering CRFESTOPE_crtencasol_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFESTOPE_crtencasol_onCheckDeleteMaster");
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
    //   -- BEGIN CTRESTAXSOL DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTENCASOL.OFC IS NOT NULL) OR (:CRTENCASOL.SOL IS NOT NULL) OR (:CRTENCASOL.PLANEA IS NOT NULL) OR (:CRTENCASOL.CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTENCASOL.CRTENCASOL_CTRESTAXSOL');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CTRESTAXSOL');   
    //   END IF;
    //   --
    //   -- END CTRESTAXSOL DETAIL PROGRAM SECTION
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
    async CRFESTOPE_crtencasol_onPopulateDetails() {
        console.log("Entering CRFESTOPE_crtencasol_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((((this.CRTENCASOL.OFC != null) || (this.CRTENCASOL.SOL != null)) || (this.CRTENCASOL.PLANEA != null)) || (this.CRTENCASOL.CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTENCASOL.CRTENCASOL_CTRESTAXSOL");
            // CRFESTOPE_QUERY_MASTER_DETAILS(REL_ID, "CTRESTAXSOL");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFESTOPE_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFESTOPE_crtencasol_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT COM_NOMBRE||COM_APELLIDO NOMBRE
    //      INTO :DESCOMER
    //     FROM SETCOMCIA
    //     WHERE COM_USORAC = :SOLICR_USCIAL;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :DESCOMER := NULL;
    // END;
    // BEGIN
    //  SELECT USU_NOMBRE
    //    INTO :DESOFCTO
    //  FROM SGUSUARIOS
    //  WHERE USU_CODIGO = :CRTENCASOL.CONTROL_USUCTO;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :DESOFCTO := NULL;
    // END;
    // BEGIN
    //  SELECT USU_NOMBRE
    //    INTO :DESOFDEM
    //  FROM SGUSUARIOS
    // WHERE USU_CODIGO = :CRTENCASOL.SOLICR_USOFID;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :DESOFDEM := NULL;
    // END;
    // PQBD_COL_ESTAOPE.PBD_CONSCTOS (:CRTENCASOL.OFC, :CRTENCASOL.SOL, :CRTENCASOL.PLANEA);
    //#endregion
    async CRFESTOPE_crtencasol_postQuery() {
        console.log("Entering CRFESTOPE_crtencasol_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_USCIAL", SOLICR_USCIAL);
        // call REST API
        const result1 = await Rest.post("/crfestope_crtencasol/crfestope_crtencasol_postquery_query1", payload1);
        // get values from result
        // DESCOMER = result1[0].get("DESCOMER");
        if (result1 == null || result1.length == 0) {

            this.CRTENCASOL.DESCOMER = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("CONTROL_USUCTO", CRTENCASOL.CONTROL_USUCTO);
        // call REST API
        const result2 = await Rest.post("/crfestope_crtencasol/crfestope_crtencasol_postquery_query2", payload2);
        // get values from result
        // DESOFCTO = result2[0].get("DESOFCTO");
        if (result2 == null || result2.length == 0) {

            this.CRTENCASOL.DESOFCTO = null;
        }

        // construct payload
        let payload3 = new Map();
        // payload3.set("SOLICR_USOFID", CRTENCASOL.SOLICR_USOFID);
        // call REST API
        const result3 = await Rest.post("/crfestope_crtencasol/crfestope_crtencasol_postquery_query3", payload3);
        // get values from result
        // DESOFDEM = result3[0].get("DESOFDEM");
        if (result3 == null || result3.length == 0) {

            this.CRTENCASOL.DESOFDEM = null;
        }

        console.log("Exiting CRFESTOPE_crtencasol_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_CTOSXDIA;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_CTOXDIA(BK_DATA, :VAR_FECINI, :VAR_FECFIN, :VAR_CTRLSOL, :VAR_OFCCTOS);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'CTOSXDIA');
    // END;
    //#endregion
    async CRFESTOPE_ctosxdia_queryProcedure() {
        console.log("Entering CRFESTOPE_ctosxdia_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_CTOXDIA(BK_DATA, VAR_FECINI, VAR_FECFIN, VAR_CTRLSOL, VAR_OFCCTOS);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "CTOSXDIA");
        console.log("Exiting CRFESTOPE_ctosxdia_queryProcedure");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT  USU_NOMBRE   NOMBRE
    //    INTO :NOMOFIC
    //  FROM SGUSUARIOS
    //  WHERE USU_CODIGO = :CTOSXDIA.OFICTO;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :NOMOFIC := 'SIN OFICIAL';
    // END;
    //#endregion
    async CRFESTOPE_ctosxdia_postQuery() {
        console.log("Entering CRFESTOPE_ctosxdia_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("OFICTO", this.CTOSXDIA.OFICTO);
        // call REST API
        const result1 = await Rest.post("/crfestope_ctosxdia/crfestope_ctosxdia_postquery_query1", payload1);
        // get values from result
        // NOMOFIC = result1[0].get("NOMOFIC");
        if (result1 == null || result1.length == 0) {

            this.CTOSXDIA.NOMOFIC = "SIN OFICIAL";
        }

        console.log("Exiting CRFESTOPE_ctosxdia_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :V_DETCTOS = 'S' THEN
    //  SHOW_VIEW('DETCTOXDIA');
    //   GO_BLOCK('CRTCTOXDIA');  
    //   EXECUTE_QUERY;
    // ELSE
    //  GO_BLOCK('CRTCTOXDIA');  
    //  CLEAR_BLOCK;
    //  GO_ITEM('V_DETCTOS');
    //  HIDE_VIEW('DETCTOXDIA');
    // END IF; END;
    //#endregion
    async CRFESTOPE_ctosxdia_vDetctos_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_ctosxdia_vDetctos_whenCheckboxChanged");
        // if (V_DETCTOS == "S") {
        //     this.oracleFormsBuiltins.show_view("DETCTOXDIA");
        //     this.oracleFormsBuiltins.go_block("CRTCTOXDIA");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.go_block("CRTCTOXDIA");
        //     this.oracleFormsBuiltins.clear_block();
        //     this.oracleFormsBuiltins.go_item("V_DETCTOS");
        //     this.oracleFormsBuiltins.hide_view("DETCTOXDIA");
        // }
        console.log("Exiting CRFESTOPE_ctosxdia_vDetctos_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  --CALCULOS DE TIEMPO
    //   CURSOR C1 IS     
    //     SELECT TIEMPO_CODIGO COD,
    //            TIEMPO_OBSERV OBS
    //     FROM CRTTIEMPO
    //     WHERE TIEMPO_ABREV = 'OPC'
    //     ORDER BY 1 DESC;   
    //   -- OFICIALES DE DESEMBOLSO
    //   CURSOR C2 IS 
    //     SELECT '%%%%' COD, 'TODOS OFICIALES DESEMBOLSO' DESCR
    //   FROM DUAL
    //     UNION
    //   SELECT USU_CODIGO COD,
    //           USU_NOMBRE DESCR
    //   FROM SGUSUARIOS
    //   WHERE USU_CARGO = ('OD')
    //     AND USU_ESTADO='A'
    //   ORDER BY 1 DESC ;
    //  --OFICIALES CONTRATOS
    //    CURSOR C3 IS 
    //    SELECT '%%%%' COD, 'TODOS OFICIALES DE CONTRATOS' DESCR
    //   FROM DUAL
    //     UNION
    //   SELECT USU_CODIGO COD,
    //           USU_NOMBRE DESCR
    //   FROM SGUSUARIOS
    //   WHERE USU_CARGO IN ('OC','OI')
    //     AND USU_ESTADO='A'  
    //   UNION
    //   SELECT 'XX' COD, 'SIN OFICIAL DE CONTRATO' DESCR
    //   FROM DUAL
    //   ORDER BY 1 ASC ;
    //   
    //   --AREAS COMPAÑÍA
    //   CURSOR C4 IS 
    //     SELECT AREA_CODIGO COD, AREA_DESCRI  DESCR
    //     FROM CRTARECOM
    //     UNION
    //         SELECT '%%%' COD, 'TODAS LAS AREAS' DESCR
    //     FROM DUAL
    //   ORDER BY 1 DESC;
    //   --TIPOS DE ERROR
    //   CURSOR C5 IS 
    //    SELECT '%%%%' COD, 'TODOS LOS TIPOS DE ERROR' DESCR
    //   FROM DUAL
    //   UNION
    //     SELECT TIPERR_CODIGO COD,
    //            TIPERR_DESCRI DESCR
    //    FROM CRTTIPERR
    //    ORDER BY 1;
    //  --PASOS DE CONTROL
    //   CURSOR C6 IS 
    //     SELECT  PASO_CODIGO COD,
    //           PASO_DESCRIP DESCR
    //     FROM CRTSOLPASO
    //     ORDER BY 1 DESC;
    //   --PASOS DE CONTROL
    //    CURSOR C7 IS 
    //     SELECT  PASO_CODIGO COD,
    //           PASO_DESCRIP DESCR
    //     FROM CRTSOLPASO
    //     ORDER BY 1 DESC;  
    //    --OFICIALES DE CONTRATOS
    //    CURSOR C8 IS 
    //    SELECT '%%%%' COD, 'TODOS OFICIALES DE CONTRATOS' DESCR
    //   FROM DUAL
    //     UNION
    //   SELECT USU_CODIGO COD,
    //           USU_NOMBRE DESCR
    //   FROM SGUSUARIOS
    //   WHERE USU_CARGO IN ('OC','OI')
    //     AND USU_ESTADO='A' 
    //   UNION
    //   SELECT 'XX' COD, 'SIN OFICIAL DE CONTRATO' DESCR
    //   FROM DUAL
    //   ORDER BY 1 ASC;
    //    --PASOS DE CONTROL
    //    CURSOR C9 IS 
    //     SELECT  PASO_CODIGO COD,
    //           PASO_DESCRIP DESCR
    //     FROM CRTSOLPASO
    //     ORDER BY 1 DESC;  
    //      --PASOS DE CONTROL
    //    CURSOR C10 IS 
    //     SELECT  PASO_CODIGO COD,
    //           PASO_DESCRIP DESCR
    //     FROM CRTSOLPASO
    //     ORDER BY 1 DESC; 
    //   --OFICIALES DE CONTRATOS
    //    CURSOR C11 IS 
    //    SELECT '%%%%' COD, 'TODOS OFICIALES DE CONTRATOS' DESCR
    //   FROM DUAL
    //     UNION
    //   SELECT USU_CODIGO COD,
    //           USU_NOMBRE DESCR
    //   FROM SGUSUARIOS
    //   WHERE USU_CARGO IN ('OC','OI')
    //     AND USU_ESTADO='A'  
    //    UNION
    //   SELECT 'XX' COD, 'SIN OFICIAL DE CONTRATO' DESCR
    //   FROM DUAL  
    //   ORDER BY 1 ASC ;
    //   
    //    -- OFICIALES DE DESEMBOLSO
    //    CURSOR C12 IS 
    //     SELECT '%%%%' COD, 'TODOS OFICIALES DESEMBOLSO' DESCR
    //   FROM DUAL
    //     UNION
    //   SELECT USU_CODIGO COD,
    //           USU_NOMBRE DESCR
    //   FROM SGUSUARIOS
    //   WHERE USU_CARGO = ('OD')
    //     AND USU_ESTADO='A'
    //   ORDER BY 1 DESC ;
    // --
    // /* -- TIEMPOS PARA EL ESTANDAR 
    //  CURSOR C9 IS 
    //     SELECT PASO_ESTANDAR COD, PASO_DESCRIP DESCR
    //     FROM CRTSOLPASO;
    //     */
    // ----------------------------------------------------------------
    // -- VARIABLES
    // -----------------------------------------------------------------    
    // --VARIABLES
    //   IT_ID  ITEM;
    //   IT_ID2 ITEM;
    //   IT_ID3 ITEM;
    //   IT_ID4 ITEM;
    //   IT_ID5 ITEM;
    //   IT_ID6 ITEM;
    //   IT_ID7 ITEM;
    //   IT_ID8 ITEM;
    //   IT_ID9 ITEM;
    //   IT_ID10 ITEM;
    //   IT_ID11 ITEM;
    //   IT_ID12 ITEM;                
    // BEGIN
    //   IT_ID := FIND_ITEM('PARAMETROS.V_OPCION'); 
    //   IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LAS OPCIONES DE PROCESO');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN C1 LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.OBS, ACC.COD);
    //      END LOOP;
    //   END IF;  
    //   BEGIN
    //   IT_ID2 := FIND_ITEM('PARAMETROS.V_OFCDESEM'); 
    //   IF ID_NULL( IT_ID2 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS OFICIALES DE DESEMBOLSO');
    //   ELSE
    //      CLEAR_LIST(IT_ID2);
    //      FOR ACC2 IN C2 LOOP
    //         ADD_LIST_ELEMENT( IT_ID2, 1, ACC2.DESCR, ACC2.COD);
    //      END LOOP;
    //   END IF;  
    //   END;
    //   BEGIN
    //   IT_ID3 := FIND_ITEM('PARAMETROS.V_OFCCTOS'); 
    //   IF ID_NULL( IT_ID3 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS OFICIALES DE CONTRATOS');
    //   ELSE
    //      CLEAR_LIST(IT_ID3);
    //      FOR ACC3 IN C3 LOOP
    //         ADD_LIST_ELEMENT( IT_ID3, 1, ACC3.DESCR, ACC3.COD);
    //      END LOOP;
    //   END IF;  
    //   END;
    //   BEGIN
    //   IT_ID4 := FIND_ITEM('PARAMETROS.VAR_AREAS'); 
    //   IF ID_NULL( IT_ID4 ) THEN
    //      MESSAGE('ERROR AL CARGAR LAS ÁREAS DE LA COMPAÑIA');
    //   ELSE
    //      CLEAR_LIST(IT_ID4);
    //      FOR ACC4 IN C4 LOOP
    //         ADD_LIST_ELEMENT( IT_ID4, 1, ACC4.DESCR, ACC4.COD);
    //      END LOOP;
    //   END IF;  
    //   END;
    //  /* BEGIN
    //   IT_ID5 := FIND_ITEM('PARAMETROS.VAR_TIPOERR'); 
    //   IF ID_NULL( IT_ID5 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS TIPOS DE ERROR.TAB-ERRORES');
    //   ELSE
    //      CLEAR_LIST(IT_ID5);
    //      FOR ACC5 IN C5 LOOP
    //         ADD_LIST_ELEMENT( IT_ID5, 1, ACC5.DESCR, ACC5.COD);
    //      END LOOP;
    //   END IF;  
    //   END;
    //  */
    //   BEGIN
    //   IT_ID6 := FIND_ITEM('PARAMETROS.VAR_OPCCTRL'); 
    //   IF ID_NULL( IT_ID6 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS TIPOS DE CONTROL.');
    //   ELSE
    //      CLEAR_LIST(IT_ID6);
    //      FOR ACC6 IN C6 LOOP
    //         ADD_LIST_ELEMENT( IT_ID6, 1, ACC6.DESCR, ACC6.COD);
    //      END LOOP;
    //   END IF;  
    //   END;
    //   BEGIN
    //   IT_ID7 := FIND_ITEM('PARAMETROS.VAR_CTRLSOL'); 
    //   IF ID_NULL( IT_ID6 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS TIPOS DE CONTROL.');
    //   ELSE
    //      CLEAR_LIST(IT_ID7);
    //      FOR ACC7 IN C7 LOOP
    //         ADD_LIST_ELEMENT( IT_ID7, 1, ACC7.DESCR, ACC7.COD);
    //      END LOOP;
    //   END IF;  
    //   END;
    //   BEGIN
    //   IT_ID8 := FIND_ITEM('PARAMETROS.VAR_OFCCTOS'); 
    //   IF ID_NULL( IT_ID8 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS TIPOS DE CONTROL.');
    //   ELSE
    //      CLEAR_LIST(IT_ID8);
    //      FOR ACC8 IN C8 LOOP
    //         ADD_LIST_ELEMENT( IT_ID8, 1, ACC8.DESCR, ACC8.COD);
    //      END LOOP;
    //   END IF;  
    //   END;      
    //   /*BEGIN
    //   IT_ID9 := FIND_ITEM('PARAMETROS.VAR_ESTANDAR'); 
    //   IF ID_NULL( IT_ID9 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS TIEMPOS DE ESTANDAR.');
    //   ELSE
    //      CLEAR_LIST(IT_ID9);
    //      FOR ACC9 IN C9 LOOP
    //         ADD_LIST_ELEMENT( IT_ID9, 1, ACC9.DESCR, ACC9.COD);
    //      END LOOP;
    //   END IF;  
    //   END;*/
    //   BEGIN
    //   IT_ID9 := FIND_ITEM('PARAMETROS.V_CTRLOFDES'); 
    //   IF ID_NULL( IT_ID9 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS TIPOS DE CONTROL, PARA LA CONSULTA CTOS X OFICIAL DE DESEMBOLSO.');
    //   ELSE
    //      CLEAR_LIST(IT_ID9);
    //      FOR ACC9 IN C9 LOOP
    //         ADD_LIST_ELEMENT( IT_ID9, 1, ACC9.DESCR, ACC9.COD);
    //      END LOOP;
    //   END IF;  
    //   END;
    //   BEGIN
    //   IT_ID10 := FIND_ITEM('PARAMETROS.V_CTRLOFCTO'); 
    //   IF ID_NULL( IT_ID10 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS TIPOS DE CONTROL, PARA LA CONSULTA CTOS X OFICIAL DE CTOS.');
    //   ELSE
    //      CLEAR_LIST(IT_ID10);
    //      FOR ACC10 IN C10 LOOP
    //         ADD_LIST_ELEMENT( IT_ID10, 1, ACC10.DESCR, ACC10.COD);
    //      END LOOP;
    //   END IF;  
    //   END;
    //   BEGIN
    //   IT_ID11 := FIND_ITEM('PARAMETROS.V_OFICTOS'); 
    //   IF ID_NULL( IT_ID11 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS OFICIALES DE CONTRATOS, PARA LA CONSULTA CARGA LABORAL OFICIALES DE CTOS.');
    //   ELSE
    //      CLEAR_LIST(IT_ID11);
    //      FOR ACC11 IN C11 LOOP
    //         ADD_LIST_ELEMENT( IT_ID11, 1, ACC11.DESCR, ACC11.COD);
    //      END LOOP;
    //   END IF;  
    //   END;
    //   BEGIN
    //   IT_ID12 := FIND_ITEM('PARAMETROS.V_OFIDESEMRAD'); 
    //   IF ID_NULL( IT_ID12 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS OFICIALES DE CONTRATOS, PARA LA CONSULTA DE RADICACIONES.');
    //   ELSE
    //      CLEAR_LIST(IT_ID12);
    //      FOR ACC12 IN C12 LOOP
    //         ADD_LIST_ELEMENT( IT_ID12, 1, ACC12.DESCR, ACC12.COD);
    //      END LOOP;
    //   END IF;  
    //   END;
    // END;
    //#endregion
    async CRFESTOPE_parametros_whenNewRecordInstance() {
        console.log("Entering CRFESTOPE_parametros_whenNewRecordInstance");
        let IT_ID: number = null;
        let IT_ID2: number = null;
        let IT_ID3: number = null;
        let IT_ID4: number = null;
        let IT_ID5: number = null;
        let IT_ID6: number = null;
        let IT_ID7: number = null;
        let IT_ID8: number = null;
        let IT_ID9: number = null;
        let IT_ID10: number = null;
        let IT_ID11: number = null;
        let IT_ID12: number = null;
        IT_ID = this.oracleFormsBuiltins.find_item("PARAMETROS.V_OPCION");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LAS OPCIONES DE PROCESO");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        IT_ID2 = this.oracleFormsBuiltins.find_item("PARAMETROS.V_OFCDESEM");
        if (this.oracleFormsBuiltins.id_null(IT_ID2)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS OFICIALES DE DESEMBOLSO");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID2);
        }
        IT_ID3 = this.oracleFormsBuiltins.find_item("PARAMETROS.V_OFCCTOS");
        if (this.oracleFormsBuiltins.id_null(IT_ID3)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS OFICIALES DE CONTRATOS");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID3);
        }
        IT_ID4 = this.oracleFormsBuiltins.find_item("PARAMETROS.VAR_AREAS");
        if (this.oracleFormsBuiltins.id_null(IT_ID4)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LAS ÁREAS DE LA COMPAÑIA");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID4);
        }
        IT_ID6 = this.oracleFormsBuiltins.find_item("PARAMETROS.VAR_OPCCTRL");
        if (this.oracleFormsBuiltins.id_null(IT_ID6)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS TIPOS DE CONTROL.");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID6);
        }
        IT_ID7 = this.oracleFormsBuiltins.find_item("PARAMETROS.VAR_CTRLSOL");
        if (this.oracleFormsBuiltins.id_null(IT_ID6)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS TIPOS DE CONTROL.");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID7);
        }
        IT_ID8 = this.oracleFormsBuiltins.find_item("PARAMETROS.VAR_OFCCTOS");
        if (this.oracleFormsBuiltins.id_null(IT_ID8)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS TIPOS DE CONTROL.");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID8);
        }
        IT_ID9 = this.oracleFormsBuiltins.find_item("PARAMETROS.V_CTRLOFDES");
        if (this.oracleFormsBuiltins.id_null(IT_ID9)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS TIPOS DE CONTROL, PARA LA CONSULTA CTOS X OFICIAL DE DESEMBOLSO.");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID9);
        }
        IT_ID10 = this.oracleFormsBuiltins.find_item("PARAMETROS.V_CTRLOFCTO");
        if (this.oracleFormsBuiltins.id_null(IT_ID10)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS TIPOS DE CONTROL, PARA LA CONSULTA CTOS X OFICIAL DE CTOS.");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID10);
        }
        IT_ID11 = this.oracleFormsBuiltins.find_item("PARAMETROS.V_OFICTOS");
        if (this.oracleFormsBuiltins.id_null(IT_ID11)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS OFICIALES DE CONTRATOS, PARA LA CONSULTA CARGA LABORAL OFICIALES DE CTOS.");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID11);
        }
        IT_ID12 = this.oracleFormsBuiltins.find_item("PARAMETROS.V_OFIDESEMRAD");
        if (this.oracleFormsBuiltins.id_null(IT_ID12)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS OFICIALES DE CONTRATOS, PARA LA CONSULTA DE RADICACIONES.");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID12);
        }
        console.log("Exiting CRFESTOPE_parametros_whenNewRecordInstance");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON   NUMBER;
    //   LPOFIIDD PARAMLIST;
    // BEGIN
    //  LIB$ALERTA('MENSAJE','ESCOJA EL MODO DE EXTRACCIÓN'
    //           ,'IMPRESIÓN','CANCELAR',NULL ,VBOTON);
    //   IF VBOTON = 1 THEN
    //     LPOFIIDD := GET_PARAMETER_LIST('LPOFID');
    //      IF NOT ID_NULL(LPOFIIDD) THEN
    //       DESTROY_PARAMETER_LIST(LPOFIIDD);
    //      END IF;
    //      LPOFIIDD := CREATE_PARAMETER_LIST('LPOFID');
    //      ADD_PARAMETER(LPOFIIDD, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //      ADD_PARAMETER(LPOFIIDD, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //      ADD_PARAMETER(LPOFIIDD, 'PU_ESTANDAR', "TEXT_PARAMETER", :VAR_ESTANDAR);
    //      ADD_PARAMETER(LPOFIIDD, 'PU_OFIDESEM', "TEXT_PARAMETER", :OUTXOFDEM.OFICIAL);
    //      RUN_PRODUCT(REPORTS, 'CRRCTOFD', ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPOFIIDD, NULL);
    //     NULL;
    //   ELSIF VBOTON = 2 THEN
    //     LIB$DTNERFRMA ('GENERACIÓN DE REPORTE CANCELADO POR EL USUARIO.');
    //   END IF;
    // END;
    //#endregion
    async CRFESTOPE_parametros_vImprrteofd_whenButtonPressed() {
        console.log("Entering CRFESTOPE_parametros_vImprrteofd_whenButtonPressed");
        let VBOTON: number = null;
        let LPOFIIDD: number = null;
        // CRFESTOPE_LIB$ALERTA("MENSAJE", "ESCOJA EL MODO DE EXTRACCIÓN", "IMPRESIÓN", "CANCELAR", null, VBOTON);
        if (VBOTON == 1) {
            LPOFIIDD = this.oracleFormsBuiltins.get_parameter_list("LPOFID");
            if ((!this.oracleFormsBuiltins.id_null(LPOFIIDD))) {
                this.oracleFormsBuiltins.destroy_parameter_list(LPOFIIDD);
            }
            LPOFIIDD = this.oracleFormsBuiltins.create_parameter_list("LPOFID");
            // this.oracleFormsBuiltins.add_parameter(LPOFIIDD, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            // this.oracleFormsBuiltins.add_parameter(LPOFIIDD, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
            // this.oracleFormsBuiltins.add_parameter(LPOFIIDD, "PU_ESTANDAR", "TEXT_PARAMETER", VAR_ESTANDAR);
            // this.oracleFormsBuiltins.add_parameter(LPOFIIDD, "PU_OFIDESEM", "TEXT_PARAMETER", OUTXOFDEM.OFICIAL);
            // this.oracleFormsBuiltins.run_product(REPORTS, "CRRCTOFD", ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPOFIIDD, null);
        }
        else if (VBOTON == 2) {
            // CRFESTOPE_LIB$DTNERFRMA("GENERACIÓN DE REPORTE CANCELADO POR EL USUARIO.");
        }
        console.log("Exiting CRFESTOPE_parametros_vImprrteofd_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  CALL_FORM('CRFCONTAB', HIDE, NO_REPLACE, "NO_QUERY_ONLY");
    // END;
    //#endregion
    async CRFESTOPE_parametros_contruir_whenButtonPressed() {
        console.log("Entering CRFESTOPE_parametros_contruir_whenButtonPressed");
        this.oracleFormsBuiltins.call_form("CRFCONTAB", "HIDE", "NO_REPLACE", "NO_QUERY_ONLY");
        console.log("Exiting CRFESTOPE_parametros_contruir_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --------------------------------------------------------------
    // -- LLAMA PROCEDIMIENTO CALCULOS DE CTOS X FUERA DE RANGO
    // ------------------------------------------------------------------
    // PQBD_COL_ESTAOPE.PBD_OUTXCTOS (:VAR_ESTANDAR, :VAR_OPCCTRL , :VAR_FECHACTOI, :VAR_FECHACTO);
    // IF :VAR_OPOFICIALES = 'C' THEN
    //   GO_BLOCK('OUTXOFDEM');
    //   CLEAR_BLOCK;
    //   GO_BLOCK('OUTXOFCTO');
    //   EXECUTE_QUERY;
    // ELSIF :VAR_OPOFICIALES = 'D' THEN
    //   GO_BLOCK('OUTXOFCTO');
    //   CLEAR_BLOCK;
    //   GO_BLOCK('OUTXOFDEM');
    //   EXECUTE_QUERY;
    // ELSIF :VAR_OPOFICIALES = '%%' THEN
    //  GO_BLOCK('OUTXOFCTO');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('OUTXOFDEM');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('OUTXOFCTO');
    // END IF; END;
    //#endregion
    async CRFESTOPE_parametros_varFechacto_keyNextItem() {
        console.log("Entering CRFESTOPE_parametros_varFechacto_keyNextItem");
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_OUTXCTOS(VAR_ESTANDAR, VAR_OPCCTRL, VAR_FECHACTOI, VAR_FECHACTO);
        // if (VAR_OPOFICIALES == "C") {
        //     this.oracleFormsBuiltins.go_block("OUTXOFDEM");
        //     this.oracleFormsBuiltins.clear_block();
        //     this.oracleFormsBuiltins.go_block("OUTXOFCTO");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else if (VAR_OPOFICIALES == "D") {
        //     this.oracleFormsBuiltins.go_block("OUTXOFCTO");
        //     this.oracleFormsBuiltins.clear_block();
        //     this.oracleFormsBuiltins.go_block("OUTXOFDEM");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else if (VAR_OPOFICIALES == "%%") {
        //     this.oracleFormsBuiltins.go_block("OUTXOFCTO");
        //     this.oracleFormsBuiltins.execute_query();
        //     this.oracleFormsBuiltins.go_block("OUTXOFDEM");
        //     this.oracleFormsBuiltins.execute_query();
        //     this.oracleFormsBuiltins.go_block("OUTXOFCTO");
        // }
        console.log("Exiting CRFESTOPE_parametros_varFechacto_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //  GO_BLOCK('CTRESXAREA');
    //   EXECUTE_QUERY; 
    // END;
    //#endregion
    async CRFESTOPE_parametros_varAreas_whenListChanged() {
        console.log("Entering CRFESTOPE_parametros_varAreas_whenListChanged");
        this.oracleFormsBuiltins.go_block("CTRESXAREA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFESTOPE_parametros_varAreas_whenListChanged");
    }

    //#region PLSQL
    // BEGIN DO_KEY('CLEAR_FORM'); END;
    //#endregion
    async CRFESTOPE_parametros_limpiar_whenButtonPressed() {
        console.log("Entering CRFESTOPE_parametros_limpiar_whenButtonPressed");
        this.oracleFormsBuiltins.do_key("CLEAR_FORM");
        console.log("Exiting CRFESTOPE_parametros_limpiar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('CTOXOFICTOS');
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async CRFESTOPE_parametros_vAgencctos_whenListChanged() {
        console.log("Entering CRFESTOPE_parametros_vAgencctos_whenListChanged");
        this.oracleFormsBuiltins.go_block("CTOXOFICTOS");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFESTOPE_parametros_vAgencctos_whenListChanged");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('OFCTOSCARGA');
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async CRFESTOPE_parametros_vFecfinal_keyNextItem() {
        console.log("Entering CRFESTOPE_parametros_vFecfinal_keyNextItem");
        this.oracleFormsBuiltins.go_block("OFCTOSCARGA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFESTOPE_parametros_vFecfinal_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :V_FECINI IS NULL OR :V_FECFIN IS NULL THEN
    //    LIB$DTNERFRMA('LAS FECHAS DE CONSULTA NO PUEDEN SER NULAS');
    //  ELSIF :V_FECFIN < :V_FECINI THEN
    //    LIB$DTNERFRMA('LA FECHA FINAL NO PUEDE SER MENOR A LA FECHA INICIAL.');
    //  END IF;
    //  LIB$ALERTA('SI_NO','ESTA SEGURO DE EJECUTAR EL PROCESO PARA LA TABLA CONSTRUIDA','SI','NO','CANCELAR',T_RESPUESTA);
    //    IF T_RESPUESTA = '2' THEN 
    //     LIB$DTNERFRMA('PROCESO CANCELADO POR EL USUARIO');
    //    ELSIF T_RESPUESTA = '1' THEN
    //      IF :V_OPCION IS NULL THEN
    //       GO_ITEM('V_OPCION');
    //       LIB$DTNERFRMA('LA OPCION DE PROCESO NO PUEDE SER NULA.');
    //      ELSE 
    //        LIB$ALERTA('MENSAJE','PROCESANDO ESPERE UN MOMENTO POR FAVOR....',NULL,NULL,NULL,T_RESPUESTA);
    //        LIB$CURSOR('W');
    //        -- NVO PARAMETRO PARA CALCULAR LOS NUEVOS TIEMPOS ENTRE PROCESOS INDICADORES GRÁFICOS 
    //        --POR ESTA OPCION VA SIEMPRE EN N(NO.)
    //        PQBD_COL_ESTAOPE.PBD_ESTAOPE (:V_FECINI, :V_FECFIN,:V_OPCION,:V_OFC, :V_SOLIC, :V_PLANEA, :V_CODUNI);
    //        --
    //       SYNCHRONIZE;
    //       LIB$CURSOR('N');
    //       LIB$ALERTA('MENSAJE','PROCESO EJECUTADO EXITOSAMENTE',NULL,NULL,NULL,T_RESPUESTA);
    //       GO_BLOCK('BCONGRAL');
    //       EXECUTE_QUERY;
    //      END IF;
    //    ELSE 
    //      LIB$DTNERFRMA('PROCESO CANCELADO POR EL USUARIO');
    //   END IF;
    // END;
    //#endregion
    async CRFESTOPE_parametros_consulta_whenButtonPressed() {
        console.log("Entering CRFESTOPE_parametros_consulta_whenButtonPressed");
        let T_RESPUESTA: number = null;
        // if (((V_FECINI == null) || (V_FECFIN == null))) {
        //     // CRFESTOPE_LIB$DTNERFRMA("LAS FECHAS DE CONSULTA NO PUEDEN SER NULAS");
        // }
        // else if (V_FECFIN < V_FECINI) {
        //     // CRFESTOPE_LIB$DTNERFRMA("LA FECHA FINAL NO PUEDE SER MENOR A LA FECHA INICIAL.");
        // }
        // CRFESTOPE_LIB$ALERTA("SI_NO", "ESTA SEGURO DE EJECUTAR EL PROCESO PARA LA TABLA CONSTRUIDA", "SI", "NO", "CANCELAR", T_RESPUESTA);
        // if (T_RESPUESTA == "2") {
        //     // CRFESTOPE_LIB$DTNERFRMA("PROCESO CANCELADO POR EL USUARIO");
        // }
        // else if (T_RESPUESTA == "1") {
        //     if ((V_OPCION == null)) {
        //         this.oracleFormsBuiltins.go_item("V_OPCION");
        //         // CRFESTOPE_LIB$DTNERFRMA("LA OPCION DE PROCESO NO PUEDE SER NULA.");
        //     }
        //     else {
        //         // CRFESTOPE_LIB$ALERTA("MENSAJE", "PROCESANDO ESPERE UN MOMENTO POR FAVOR....", null, null, null, T_RESPUESTA);
        //         // CRFESTOPE_LIB$CURSOR("W");
        //         // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_ESTAOPE(V_FECINI, V_FECFIN, V_OPCION, V_OFC, V_SOLIC, V_PLANEA, V_CODUNI);
        //         this.oracleFormsBuiltins.synchronize();
        //         // CRFESTOPE_LIB$CURSOR("N");
        //         // CRFESTOPE_LIB$ALERTA("MENSAJE", "PROCESO EJECUTADO EXITOSAMENTE", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_block("BCONGRAL");
        //         this.oracleFormsBuiltins.execute_query();
        //     }
        // }
        // else {
        //     // CRFESTOPE_LIB$DTNERFRMA("PROCESO CANCELADO POR EL USUARIO");
        // }
        console.log("Exiting CRFESTOPE_parametros_consulta_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  /*LIB$ALERTA('SI_NO','ESTA SEGURO DE EJECUTAR EL PROCESO DE INDICADORES.','SI','NO','CANCELAR',T_RESPUESTA);
    //    IF T_RESPUESTA = '2' THEN 
    //     LIB$DTNERFRMA('PROCESO CANCELADO POR EL USUARIO');
    //    ELSIF T_RESPUESTA = '1' THEN
    //       --LIB$ALERTA('MENSAJE','PROCESANDO ESPERE UN MOMENTO POR FAVOR....',NULL,NULL,NULL,T_RESPUESTA);
    //       -- LIB$CURSOR('W');
    //       -- LIB$CURSOR('N');
    //     END IF;
    //       */
    //  GO_BLOCK('VLTOPCIO');
    //  GO_BLOCK('BPERIO');
    //  GO_BLOCK('VLTOPCIO');
    //  GO_ITEM('OPCION_DESCRI');
    // END;
    //#endregion
    async CRFESTOPE_parametros_indicadores_whenButtonPressed() {
        console.log("Entering CRFESTOPE_parametros_indicadores_whenButtonPressed");
        let T_RESPUESTA: number = null;
        this.oracleFormsBuiltins.go_block("VLTOPCIO");
        this.oracleFormsBuiltins.go_block("BPERIO");
        this.oracleFormsBuiltins.go_block("VLTOPCIO");
        this.oracleFormsBuiltins.go_item("OPCION_DESCRI");
        console.log("Exiting CRFESTOPE_parametros_indicadores_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON NUMBER;
    //   LPOFIID PARAMLIST;
    // BEGIN
    //  LIB$ALERTA('MENSAJE','ESCOJA EL MODO DE EXTRACCIÓN'
    //           ,'IMPRESIÓN','CANCELAR',NULL ,VBOTON);
    //   IF VBOTON = 1 THEN
    //     LPOFIID := GET_PARAMETER_LIST('LPOFI');
    //      IF NOT ID_NULL(LPOFIID) THEN
    //       DESTROY_PARAMETER_LIST(LPOFIID);
    //      END IF;
    //      LPOFIID := CREATE_PARAMETER_LIST('LPOFI');
    //      ADD_PARAMETER(LPOFIID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //      ADD_PARAMETER(LPOFIID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //      ADD_PARAMETER(LPOFIID, 'PU_ESTANDAR', "TEXT_PARAMETER", :VAR_ESTANDAR);
    //      ADD_PARAMETER(LPOFIID, 'PU_OFICTO', "TEXT_PARAMETER", :OUTXOFCTO.OFICIAL);
    //      RUN_PRODUCT(REPORTS, 'CRRCTOFC', ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPOFIID, NULL);
    //     NULL;
    //   ELSIF VBOTON = 2 THEN
    //     LIB$DTNERFRMA ('GENERACIÓN DE REPORTE CANCELADO POR EL USUARIO.');
    //   END IF;
    // END;
    //#endregion
    async CRFESTOPE_parametros_vImprpte_whenButtonPressed() {
        console.log("Entering CRFESTOPE_parametros_vImprpte_whenButtonPressed");
        let VBOTON: number = null;
        let LPOFIID: number = null;
        // CRFESTOPE_LIB$ALERTA("MENSAJE", "ESCOJA EL MODO DE EXTRACCIÓN", "IMPRESIÓN", "CANCELAR", null, VBOTON);
        if (VBOTON == 1) {
            LPOFIID = this.oracleFormsBuiltins.get_parameter_list("LPOFI");
            if ((!this.oracleFormsBuiltins.id_null(LPOFIID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(LPOFIID);
            }
            LPOFIID = this.oracleFormsBuiltins.create_parameter_list("LPOFI");
            this.oracleFormsBuiltins.add_parameter(LPOFIID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LPOFIID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
            // this.oracleFormsBuiltins.add_parameter(LPOFIID, "PU_ESTANDAR", "TEXT_PARAMETER", VAR_ESTANDAR);
            // this.oracleFormsBuiltins.add_parameter(LPOFIID, "PU_OFICTO", "TEXT_PARAMETER", OUTXOFCTO.OFICIAL);
            // this.oracleFormsBuiltins.run_product(REPORTS, "CRRCTOFC", ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPOFIID, null);
        }
        else if (VBOTON == 2) {
            // CRFESTOPE_LIB$DTNERFRMA("GENERACIÓN DE REPORTE CANCELADO POR EL USUARIO.");
        }
        console.log("Exiting CRFESTOPE_parametros_vImprpte_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE 
    //  CURSOR CNVOFIC IS 
    //   SELECT DISTINCT CONTROL_USUCTO COD, USU_NOMBRE DESCR
    //    FROM CRTCONTROL, SGUSUARIOS
    //    WHERE  CONTROL_USUCTO = USU_CODIGO(+)
    //  UNION
    //   SELECT '%%%%' COD, 'TODOS OFICIALES DE CONTRATOS' DESCR
    //   FROM DUAL
    //  UNION
    //  SELECT 'XX' COD, 'SIN OFICIAL DE CONTRATO' DESCR
    //   FROM DUAL
    //   ORDER BY 1 ASC;
    //    
    //   IT_ID3  ITEM;
    //  
    // BEGIN
    //  BEGIN
    //   IT_ID3 := FIND_ITEM('PARAMETROS.VAR_OFCCTOS'); 
    //   IF ID_NULL( IT_ID3 ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS OFICIALES DE CONTRATOS [VAR_OFCCTOS].');
    //   ELSE
    //      CLEAR_LIST(IT_ID3);
    //      FOR ACC3 IN CNVOFIC  LOOP
    //         ADD_LIST_ELEMENT( IT_ID3, 1, ACC3.DESCR, ACC3.COD);
    //      END LOOP;
    //   END IF;  
    //  END;
    // END;
    //#endregion
    async CRFESTOPE_parametros_varCtrlsol_whenListChanged() {
        console.log("Entering CRFESTOPE_parametros_varCtrlsol_whenListChanged");
        let IT_ID3: null = null;
        IT_ID3 = this.oracleFormsBuiltins.find_item("PARAMETROS.VAR_OFCCTOS");
        if (this.oracleFormsBuiltins.id_null(IT_ID3)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS OFICIALES DE CONTRATOS [VAR_OFCCTOS].");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID3);
        }
        console.log("Exiting CRFESTOPE_parametros_varCtrlsol_whenListChanged");
    }

    //#region PLSQL
    // BEGIN
    //      SELECT PASO_ESTANDAR
    //        INTO :VAR_ESTANDAR
    //     FROM CRTSOLPASO
    //     WHERE PASO_CODIGO = :VAR_OPCCTRL;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :VAR_ESTANDAR := 0;
    // END;
    //#endregion
    async CRFESTOPE_parametros_varOpcctrl_whenListChanged() {
        console.log("Entering CRFESTOPE_parametros_varOpcctrl_whenListChanged");
        // construct payload
        let payload1 = new Map();
        // payload1.set("VAR_OPCCTRL", VAR_OPCCTRL);
        // call REST API
        const result1 = await Rest.post("/crfestope_parametros/crfestope_parametros_varopcctrl_whenlistchanged_query1", payload1);
        // get values from result
        // VAR_ESTANDAR = result1[0].get("VAR_ESTANDAR");
        if (result1 == null || result1.length == 0) {

            this.PARAMETROS.VAR_ESTANDAR = 0;
        }

        console.log("Exiting CRFESTOPE_parametros_varOpcctrl_whenListChanged");
    }

    //#region PLSQL
    // BEGIN
    // BEGIN
    //      SELECT PASO_ESTANDAR
    //        INTO :VAR_ESTANDAR
    //     FROM CRTSOLPASO
    //     WHERE PASO_CODIGO = :VAR_OPCCTRL;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :VAR_ESTANDAR := 0;
    // END;
    //   NEXT_ITEM;
    // END;
    //#endregion
    async CRFESTOPE_parametros_varOpcctrl_keyNextItem() {
        console.log("Entering CRFESTOPE_parametros_varOpcctrl_keyNextItem");
        // construct payload
        let payload1 = new Map();
        // payload1.set("VAR_OPCCTRL", VAR_OPCCTRL);
        // call REST API
        const result1 = await Rest.post("/crfestope_parametros/crfestope_parametros_varopcctrl_keynextitem_query1", payload1);
        // get values from result
        // VAR_ESTANDAR = result1[0].get("VAR_ESTANDAR");
        if (result1 == null || result1.length == 0) {

            this.PARAMETROS.VAR_ESTANDAR = 0;
        }

        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFESTOPE_parametros_varOpcctrl_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  -- DEVUELVE EL USUARIO CONECTADO
    //  CURSOR C_NOM_USUARIO IS
    //  (SELECT OSUSER
    //    FROM OPS$AUDI.AUVSESION
    //      WHERE USERNAME=USER
    //     AND ROWNUM=1);
    //     
    //  NOM_USUARIO  OPS$AUDI.AUVSESION.OSUSER%TYPE;  
    //   VBOTON NUMBER;
    //   VCAMPOANT VARCHAR2(256);
    //   LPCOESPID PARAMLIST;
    //   CADENA VARCHAR2(100);
    // BEGIN
    //  
    //  OPEN C_NOM_USUARIO;
    //  FETCH C_NOM_USUARIO INTO NOM_USUARIO;
    //  CLOSE C_NOM_USUARIO;
    //  
    //  CADENA := '\\'||NOM_USUARIO||'\\COMPARTIDO\\ARCESTAOPE.TXT';
    //  
    //  LIB$ALERTA('MENSAJE','ESCOJA EL MODO DE EXTRACCIÓN'
    //           ,'ARCHIVO','CANCELAR',NULL ,VBOTON);
    //   IF VBOTON = 1 THEN
    //     LPCOESPID := GET_PARAMETER_LIST('LPCOESP');
    //      IF NOT ID_NULL(LPCOESPID) THEN
    //       DESTROY_PARAMETER_LIST(LPCOESPID);
    //      END IF;
    //      LPCOESPID := CREATE_PARAMETER_LIST('LPCOESP');
    //      ADD_PARAMETER(LPCOESPID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //      ADD_PARAMETER(LPCOESPID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //      ADD_PARAMETER(LPCOESPID, 'DESNAME', "TEXT_PARAMETER", CADENA);
    //      ADD_PARAMETER(LPCOESPID, 'PU_FECINI', "TEXT_PARAMETER", TO_CHAR(:PARAMETROS.V_FECINI,'YYYY-MM-DD'));
    //      ADD_PARAMETER(LPCOESPID, 'PU_FECFIN', "TEXT_PARAMETER", TO_CHAR(:PARAMETROS.V_FECFIN,'YYYY-MM-DD'));
    //      RUN_PRODUCT(REPORTS, 'CRRAREST', ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOESPID, NULL);
    //     NULL;
    //   ELSIF VBOTON = 2 THEN
    //     LIB$DTNERFRMA ('GENERACIÓN DE PLANO CANCELADO POR EL USUARIO.');
    //   END IF;
    // END;
    //#endregion
    async CRFESTOPE_parametros_geninfoe_whenButtonPressed() {
        console.log("Entering CRFESTOPE_parametros_geninfoe_whenButtonPressed");
        let NOM_USUARIO: null = null;
        let VBOTON: number = null;
        let VCAMPOANT: string = null;
        let LPCOESPID: number = null;
        let CADENA: string = null;
        CADENA = "\\" + NOM_USUARIO + "\\COMPARTIDO\\ARCESTAOPE.TXT";
        // CRFESTOPE_LIB$ALERTA("MENSAJE", "ESCOJA EL MODO DE EXTRACCIÓN", "ARCHIVO", "CANCELAR", null, VBOTON);
        if (VBOTON == 1) {
            LPCOESPID = this.oracleFormsBuiltins.get_parameter_list("LPCOESP");
            if ((!this.oracleFormsBuiltins.id_null(LPCOESPID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(LPCOESPID);
            }
            LPCOESPID = this.oracleFormsBuiltins.create_parameter_list("LPCOESP");
            this.oracleFormsBuiltins.add_parameter(LPCOESPID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LPCOESPID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
            this.oracleFormsBuiltins.add_parameter(LPCOESPID, "DESNAME", "TEXT_PARAMETER", CADENA);
            // this.oracleFormsBuiltins.add_parameter(LPCOESPID, "PU_FECINI", "TEXT_PARAMETER", PARAMETROS.V_FECINI.toString());
            // this.oracleFormsBuiltins.add_parameter(LPCOESPID, "PU_FECFIN", "TEXT_PARAMETER", PARAMETROS.V_FECFIN.toString());
            // this.oracleFormsBuiltins.run_product(REPORTS, "CRRAREST", ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOESPID, null);
        }
        else if (VBOTON == 2) {
            // CRFESTOPE_LIB$DTNERFRMA("GENERACIÓN DE PLANO CANCELADO POR EL USUARIO.");
        }
        console.log("Exiting CRFESTOPE_parametros_geninfoe_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --------------------------------------------------------------
    // -- LLAMA PROCEDIMIENTO PARA CALCULOS DE CTOS X SUCURSAL
    // ------------------------------------------------------------------
    // --PARAMETRO DE CIUDAD EN ESTA TIPO DE CONSULTA C SIEMPRE DEBE IR EN 000 QUE SON TODAS LAS AGENCIAS
    // PQBD_COL_ESTAOPE.PBD_CTOSXSUC (:V_FECHA, :V_FECHAF, NULL, 'C');
    // GO_BLOCK('CRTSOLPASO');
    // EXECUTE_QUERY;
    // GO_BLOCK('CRTPASOXSOL');
    // EXECUTE_QUERY;
    // GO_BLOCK('CRTSOLPASO'); END;
    //#endregion
    async CRFESTOPE_parametros_vFechaf_keyNextItem() {
        console.log("Entering CRFESTOPE_parametros_vFechaf_keyNextItem");
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_CTOSXSUC(V_FECHA, V_FECHAF, null, "C");
        this.oracleFormsBuiltins.go_block("CRTSOLPASO");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("CRTPASOXSOL");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("CRTSOLPASO");
        console.log("Exiting CRFESTOPE_parametros_vFechaf_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('PRESUMRADICA');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('PRESERRADICA');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('PRESUMRADICA');
    // END;
    //#endregion
    async CRFESTOPE_parametros_vFecraf_keyNextItem() {
        console.log("Entering CRFESTOPE_parametros_vFecraf_keyNextItem");
        this.oracleFormsBuiltins.go_block("PRESUMRADICA");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("PRESERRADICA");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("PRESUMRADICA");
        console.log("Exiting CRFESTOPE_parametros_vFecraf_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA  PQBD_COL_ESTAOPE.TAB_CTOSXDIA;
    // BK_DATA2 PQBD_COL_ESTAOPE.TAB_RESCTODIA;
    // BEGIN
    //  PQBD_COL_ESTAOPE.PBD_CTOXDIA (BK_DATA, 
    //                              :VAR_FECINI , 
    //                              :VAR_FECFIN ,
    //                              :VAR_CTRLSOL,
    //                              :VAR_OFCCTOS);
    //   GO_BLOCK('CTOSXDIA');
    //   EXECUTE_QUERY;
    //  PQBD_COL_ESTAOPE.PBD_CTOXDIA2 (BK_DATA2, 
    //                               :VAR_FECINI , 
    //                               :VAR_FECFIN ,
    //                               :VAR_CTRLSOL,
    //                               '%%%%',
    //                               'C');  
    //   SHOW_VIEW('DETRCTOXDIA');
    //   GO_BLOCK('CRESCTOSXDIA');
    //   EXECUTE_QUERY;
    //   
    // END;
    //#endregion
    async CRFESTOPE_parametros_varOfcctos_whenListChanged() {
        console.log("Entering CRFESTOPE_parametros_varOfcctos_whenListChanged");
        let BK_DATA: null = null;
        let BK_DATA2: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_CTOXDIA(BK_DATA, VAR_FECINI, VAR_FECFIN, VAR_CTRLSOL, VAR_OFCCTOS);
        this.oracleFormsBuiltins.go_block("CTOSXDIA");
        this.oracleFormsBuiltins.execute_query();
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_CTOXDIA2(BK_DATA2, VAR_FECINI, VAR_FECFIN, VAR_CTRLSOL, "%%%%", "C");
        this.oracleFormsBuiltins.show_view("DETRCTOXDIA");
        this.oracleFormsBuiltins.go_block("CRESCTOSXDIA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFESTOPE_parametros_varOfcctos_whenListChanged");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('CTOXOFIDESEM');
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async CRFESTOPE_parametros_vAgencias_whenListChanged() {
        console.log("Entering CRFESTOPE_parametros_vAgencias_whenListChanged");
        this.oracleFormsBuiltins.go_block("CTOXOFIDESEM");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFESTOPE_parametros_vAgencias_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :BESPECI.COMPARAR = 'S' THEN
    //   :this.PARAMETER.get("PCONTROL")1 := :BESPECI.V_CTROL1;
    //   :this.PARAMETER.get("PCONTROL")2 := :BESPECI.V_CTROL2;
    //   :this.PARAMETER.get("PCONTROL")3 := :BESPECI.V_CTROL3;
    //   :this.PARAMETER.get("PCONTROL")4 := :BESPECI.V_CTROL4;  
    // ELSE
    //   :this.PARAMETER.get("PCONTROL")1 := :BESPECI.V_CTROL1;
    //   :this.PARAMETER.get("PCONTROL")2 := :BESPECI.V_CTROL2;
    //   :this.PARAMETER.get("PCONTROL")3 := :BESPECI.V_CTROL3;
    //   :this.PARAMETER.get("PCONTROL")4 := :BESPECI.V_CTROL4;
    // END IF; END;
    //#endregion
    async CRFESTOPE_bespeci_whenCreateRecord() {
        console.log("Entering CRFESTOPE_bespeci_whenCreateRecord");
        // if (BESPECI.COMPARAR == "S") {
        //     this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL1;
        //     this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL2;
        //     this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL3;
        //     this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL4;
        // }
        // else {
        //     this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL1;
        //     this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL2;
        //     this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL3;
        //     this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL4;
        // }
        console.log("Exiting CRFESTOPE_bespeci_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN IF :BESPECI.COMPARAR = 'S' THEN
    //   :this.PARAMETER.get("PCONTROL")1 := :BESPECI.V_CTROL1;
    //   :this.PARAMETER.get("PCONTROL")2 := :BESPECI.V_CTROL2;
    //   :this.PARAMETER.get("PCONTROL")3 := :BESPECI.V_CTROL3;
    //   :this.PARAMETER.get("PCONTROL")4 := :BESPECI.V_CTROL4;  
    // ELSE
    //   :this.PARAMETER.get("PCONTROL")1 := :BESPECI.V_CTROL1;
    //   :this.PARAMETER.get("PCONTROL")2 := :BESPECI.V_CTROL2;
    //   :this.PARAMETER.get("PCONTROL")3 := :BESPECI.V_CTROL3;
    //   :this.PARAMETER.get("PCONTROL")4 := :BESPECI.V_CTROL4;
    // END IF; END;
    //#endregion
    async CRFESTOPE_bespeci_whenvalidaterecord() {
        console.log("Entering CRFESTOPE_bespeci_whenvalidaterecord");
        if (this.BESPECI.COMPARAR == "S") {
            // this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL1;
            // this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL2;
            // this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL3;
            // this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL4;
        }
        else {
            // this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL1;
            // this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL2;
            // this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL3;
            // this.PARAMETER.get("PCONTROL") = this.BESPECI.V_CTROL4;
        }
        console.log("Exiting CRFESTOPE_bespeci_whenvalidaterecord");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("PITEMANT") := :SYSTEM.CURSOR_ITEM;
    // :this.PARAMETER.get("PREGANT") := TO_NUMBER(:SYSTEM.CURSOR_RECORD); END;
    //#endregion
    async CRFESTOPE_bespeci_postBlock() {
        console.log("Entering CRFESTOPE_bespeci_postBlock");
        // this.PARAMETER.get("PITEMANT") = this.SYSTEM.CURSOR_ITEM;
        // this.PARAMETER.get("PREGANT") = PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD"));
        console.log("Exiting CRFESTOPE_bespeci_postBlock");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('PARAMETROS');
    // SYNCHRONIZE; END;
    //#endregion
    async CRFESTOPE_bespeci_cerrar_whenButtonPressed() {
        console.log("Entering CRFESTOPE_bespeci_cerrar_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("PARAMETROS");
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFESTOPE_bespeci_cerrar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :BESPECI.COMPARAR = 'N' THEN
    //  :BESPECI.V_CTROL1 := NULL;
    //  :BESPECI.V_CTROL2 := NULL;
    //  :BESPECI.V_CTROL3 := NULL;
    //  :BESPECI.V_CTROL4 := NULL;
    //   SET_ITEM_INSTANCE_PROPERTY('BESPECI.V_CTROL1',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");-- "INSERT_ALLOWED"
    //   SET_ITEM_INSTANCE_PROPERTY('BESPECI.V_CTROL1',TO_NUMBER(:SYSTEM.CURSOR_RECORD),NAVIGABLE,"PROPERTY_FALSE");
    //   SET_ITEM_INSTANCE_PROPERTY('BESPECI.V_CTROL2',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");-- "INSERT_ALLOWED"
    //   SET_ITEM_INSTANCE_PROPERTY('BESPECI.V_CTROL2',TO_NUMBER(:SYSTEM.CURSOR_RECORD),NAVIGABLE,"PROPERTY_FALSE");
    //   SET_ITEM_INSTANCE_PROPERTY('BESPECI.V_CTROL3',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");-- "INSERT_ALLOWED"
    //   SET_ITEM_INSTANCE_PROPERTY('BESPECI.V_CTROL3',TO_NUMBER(:SYSTEM.CURSOR_RECORD),NAVIGABLE,"PROPERTY_FALSE");  
    //   SET_ITEM_INSTANCE_PROPERTY('BESPECI.V_CTROL4',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");-- "INSERT_ALLOWED"
    //   SET_ITEM_INSTANCE_PROPERTY('BESPECI.V_CTROL4',TO_NUMBER(:SYSTEM.CURSOR_RECORD),NAVIGABLE,"PROPERTY_FALSE");
    // END IF; END;
    //#endregion
    async CRFESTOPE_bespeci_comparar_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_bespeci_comparar_whenCheckboxChanged");
        if (this.BESPECI.COMPARAR == "N") {
            this.BESPECI.V_CTROL1 = null;
            this.BESPECI.V_CTROL2 = null;
            this.BESPECI.V_CTROL3 = null;
            this.BESPECI.V_CTROL4 = null;
            // this.oracleFormsBuiltins.set_item_instance_property("BESPECI.V_CTROL1", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
            // this.oracleFormsBuiltins.set_item_instance_property("BESPECI.V_CTROL1", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), NAVIGABLE, "PROPERTY_FALSE");
            // this.oracleFormsBuiltins.set_item_instance_property("BESPECI.V_CTROL2", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
            // this.oracleFormsBuiltins.set_item_instance_property("BESPECI.V_CTROL2", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), NAVIGABLE, "PROPERTY_FALSE");
            // this.oracleFormsBuiltins.set_item_instance_property("BESPECI.V_CTROL3", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
            // this.oracleFormsBuiltins.set_item_instance_property("BESPECI.V_CTROL3", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), NAVIGABLE, "PROPERTY_FALSE");
            // this.oracleFormsBuiltins.set_item_instance_property("BESPECI.V_CTROL4", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
            // this.oracleFormsBuiltins.set_item_instance_property("BESPECI.V_CTROL4", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), NAVIGABLE, "PROPERTY_FALSE");
        }
        console.log("Exiting CRFESTOPE_bespeci_comparar_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN /*LIMPIAS TODOS LOS BLOQUES DE PARAMETROS PARA GENERAR INDICADORES*/
    // --BLOQUE DE TIEMPOS
    // GO_BLOCK('BPERIO');
    // --CLEAR_BLOCK(NO_VALIDATE);
    // DO_KEY('CLEAR_BLOCK');
    // --BLOQUE DE NIVEL DE CONSULTA
    // GO_BLOCK('BNIVEL');
    // DO_KEY('CLEAR_BLOCK');
    // --BLOQUE DE TIPO DE INDICADORES
    // GO_BLOCK('VLTOPCIO');
    // DO_KEY('CLEAR_BLOCK');
    // --BLOQUE ESPECIFICACIONES
    // GO_BLOCK('BESPECI');
    // DO_KEY('CLEAR_BLOCK'); END;
    //#endregion
    async CRFESTOPE_bespeci_limpiar_whenButtonPressed() {
        console.log("Entering CRFESTOPE_bespeci_limpiar_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("BPERIO");
        this.oracleFormsBuiltins.do_key("CLEAR_BLOCK");
        this.oracleFormsBuiltins.go_block("BNIVEL");
        this.oracleFormsBuiltins.do_key("CLEAR_BLOCK");
        this.oracleFormsBuiltins.go_block("VLTOPCIO");
        this.oracleFormsBuiltins.do_key("CLEAR_BLOCK");
        this.oracleFormsBuiltins.go_block("BESPECI");
        this.oracleFormsBuiltins.do_key("CLEAR_BLOCK");
        console.log("Exiting CRFESTOPE_bespeci_limpiar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VARBOL     ITEM;
    //  VVALOR     VARCHAR2(15);
    //  VOPCIO     CRTOPCIND%ROWTYPE;
    //  LPCOGENID  PARAMLIST;
    //  V_PROGEXEC VARCHAR2(200);
    //  T_RESPUESTA NUMBER;
    //  V_EXTDATOS  NUMBER :=0;
    // BEGIN
    //   /*
    //   BEGIN
    //       SELECT COUNT(*) 
    //         INTO V_EXTDATOS 
    //       FROM CRTPASOXSOL
    //       WHERE SOL_USUARIO = USER
    //         AND SOL_TIPCONS = 'I'
    //         AND TRUNC(SOL_FECHAFIN) BETWEEN :this.PARAMETER.get("PFECINI") AND :this.PARAMETER.get("PFECFIN");
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //      V_EXTDATOS := 0;
    //     END;
    //     */
    //    PU_CARGAR_PARAMETROSFECHAS;
    //    IF :this.PARAMETER.get("POPCION") IS NULL THEN
    //     LIB$DTNERFRMA('DEBE SELECCIONAR UNA OPCION DE TIPOS DE INDICADORES A GENERAR.');
    //    ELSIF :this.PARAMETER.get("POPCION") = '1.1' AND :this.PARAMETER.get("PCIUDAD") IS NULL THEN
    //     LIB$DTNERFRMA('DEBE SELECCIONAR UNA OPCION DEL CAMPO PLAZA COMERCIAL.');
    //    ELSIF :this.PARAMETER.get("POPCION") = '1.2' AND :this.PARAMETER.get("POFICIAL") IS NULL THEN 
    //      LIB$DTNERFRMA('DEBE SELECCIONAR COMO MÍNIMO UN OFICIAL.');
    //     ELSIF :this.PARAMETER.get("POPCION") = '2' AND (:this.PARAMETER.get("POFICIAL") IS NULL OR :this.PARAMETER.get("PCIUDAD") IS NULL) THEN 
    //      LIB$DTNERFRMA('DEBE SELECCIONAR COMO MÍNIMO UN GRUPO, UN OFICIAL Y UNA PLAZA.');
    //     ELSIF :this.PARAMETER.get("POPCION") = '3.1' AND :this.PARAMETER.get("PCIUDAD") IS NULL THEN
    //     LIB$DTNERFRMA('DEBE SELECCIONAR UNA OPCION DEL CAMPO PLAZA COMERCIAL.');     
    //     ELSIF :this.PARAMETER.get("POPCION") = '3.2' AND (:this.PARAMETER.get("POFICIAL") IS NULL OR :this.PARAMETER.get("PCIUDAD") IS NULL) THEN 
    //      LIB$DTNERFRMA('DEBE SELECCIONAR COMO MÍNIMO UN GRUPO, UN OFICIAL Y UNA PLAZA.');    
    //     ELSIF :this.PARAMETER.get("POPCION") LIKE '4%' AND :BESPECI.V_TIPOBIEN IS NULL THEN 
    //      LIB$DTNERFRMA('DEBE SELECCIONAR COMO MÍNIMO UN TIPO DE BIEN.');     
    //     ELSIF :this.PARAMETER.get("POPCION") NOT IN ('2','4') THEN
    //      IF :this.PARAMETER.get("PFECINI") IS NULL OR :this.PARAMETER.get("PFECFIN") IS NULL THEN
    //     LIB$DTNERFRMA('DEBE SELECCIONAR ALGÚN PERIODO DE TIEMPO.');
    //     END IF;
    //     LIB$ALERTA('MENSAJE','PROCESANDO INFORMACIÓN DEL PERIODO '||:this.PARAMETER.get("PFECINI")||' AL '||:this.PARAMETER.get("PFECFIN")||' ESPERE UN MOMENTO POR FAVOR....',NULL,NULL,NULL,T_RESPUESTA);
    //      SET_APPLICATION_PROPERTY(CURSOR_STYLE,'BUSY');
    //      --IF V_EXTDATOS = 0 THEN
    //       PQBD_COL_ESTAOPE.PPROCINDICA(
    //                 :this.PARAMETER.get("PFECINI"),    -- FECHA INICIAL DE INDICADORES
    //                           :this.PARAMETER.get("PFECFIN"),    -- FECHA FINAL DE INDICADORES
    //                           :this.PARAMETER.get("PCIUDAD"),    -- CODIGO CIUDAD, SUCURSAL O PLAZA 
    //                            :this.PARAMETER.get("PGRUOPE"),    -- GRUPO OPERATIVO
    //                            :this.PARAMETER.get("POFICIAL"),   -- CODIGO DEL OFICIAL A CONSULTAR 
    //                           :this.PARAMETER.get("POPCION"),    -- OPCION DEL MENU DE INDICADORES
    //                            :this.PARAMETER.get("PPROGRAMA"),  -- NOMBRE DEL PAQUETE DE BASE DE DATOS A PROCESAR
    //                           :this.PARAMETER.get("PPROGROBJT"), -- NOMBRE DEL PROCEDIMIENTO O FUNCIÓN DEL PAQUETE DE BASE DE DATOS A PROCESAR
    //                            :V_OPCONGRAL,        -- OPCIÓN DEL INDICADOR A PROCESAR ESTO APLICA PARA LA CONSULTA GENERAL
    //                           :this.PARAMETER.get("PCONTROL")1,  -- CAMPO 1 PARA LA COMPARACIÓN
    //                           :this.PARAMETER.get("PCONTROL")2,  -- CAMPO 2 PARA LA COMPARACIÓN
    //                           :this.PARAMETER.get("PCONTROL")3,  -- CAMPO 3 PARA LA COMPARACIÓN
    //                           :this.PARAMETER.get("PCONTROL")4,  -- CAMPO 4 PARA LA COMPARACIÓN
    //                           NULL,           -- CAMPO 5 PARA LA GENERACION DE TODOS LOS CONTROLES
    //                           :V_LINEAS,        -- LINEA A CONSULTAR LINEA NORMAL O IMPORTACIONES
    //                           :V_TIPOBIEN,       -- TIPO DE BIEN A CONSULTAR
    //                           'I'           -- TIPO DE CONSULTA I:INDICADORES GRAFICAS
    //                             );
    //       --END IF;
    //     ELSIF   :this.PARAMETER.get("POPCION") LIKE '4%' THEN                          
    //      IF :this.PARAMETER.get("PFECINI") IS NULL OR :this.PARAMETER.get("PFECFIN") IS NULL OR  :this.PARAMETER.get("PCIUDAD") IS NULL THEN
    //       LIB$DTNERFRMA('DEBE SELECCIONAR ALGÚN PERIODO DE TIEMPO Y LA CIUDAD.');
    //     END IF;
    //     LIB$ALERTA('MENSAJE','PROCESANDO INFORMACIÓN DEL PERIODO '||:this.PARAMETER.get("PFECINI")||' AL '||:this.PARAMETER.get("PFECFIN")||' ESPERE UN MOMENTO POR FAVOR....',NULL,NULL,NULL,T_RESPUESTA);
    //      SET_APPLICATION_PROPERTY(CURSOR_STYLE,'BUSY');
    //      --IF V_EXTDATOS = 0 THEN
    //       PQBD_COL_ESTAOPE.PPROCINDICA(
    //                 :this.PARAMETER.get("PFECINI"),    -- FECHA INICIAL DE INDICADORES
    //                           :this.PARAMETER.get("PFECFIN"),    -- FECHA FINAL DE INDICADORES
    //                           :this.PARAMETER.get("PCIUDAD"),    -- CODIGO CIUDAD, SUCURSAL O PLAZA 
    //                            :this.PARAMETER.get("PGRUOPE"),    -- GRUPO OPERATIVO
    //                            :this.PARAMETER.get("POFICIAL"),   -- CODIGO DEL OFICIAL A CONSULTAR 
    //                           :this.PARAMETER.get("POPCION"),    -- OPCION DEL MENU DE INDICADORES
    //                            :this.PARAMETER.get("PPROGRAMA"),  -- NOMBRE DEL PAQUETE DE BASE DE DATOS A PROCESAR
    //                           :this.PARAMETER.get("PPROGROBJT"), -- NOMBRE DEL PROCEDIMIENTO O FUNCIÓN DEL PAQUETE DE BASE DE DATOS A PROCESAR
    //                            :V_OPCONGRAL,        -- OPCIÓN DEL INDICADOR A PROCESAR ESTO APLICA PARA LA CONSULTA GENERAL
    //                           :this.PARAMETER.get("PCONTROL")1,  -- CAMPO 1 PARA LA COMPARACIÓN
    //                           :this.PARAMETER.get("PCONTROL")2,  -- CAMPO 2 PARA LA COMPARACIÓN
    //                           :this.PARAMETER.get("PCONTROL")3,  -- CAMPO 3 PARA LA COMPARACIÓN
    //                           :this.PARAMETER.get("PCONTROL")4,  -- CAMPO 4 PARA LA COMPARACIÓN
    //                           NULL,           -- CAMPO 5 PARA LA GENERACION DE TODOS LOS CONTROLES
    //                           :V_LINEAS,        -- LINEA A CONSULTAR LINEA NORMAL O IMPORTACIONES
    //                           :V_TIPOBIEN,       -- TIPO DE BIEN A CONSULTAR
    //                           'I'           -- TIPO DE CONSULTA I:INDICADORES GRAFICAS
    //                             );       
    //       --END IF;
    //    END IF;        
    //    SET_APPLICATION_PROPERTY(CURSOR_STYLE,'DEFAULT');
    //    IF :this.PARAMETER.get("POPCION") = '1.1' THEN --CTOS X SUCURSAL 
    //        --LIB$ALERTA('MENSAJE','GENERANDO REPORTE.',NULL,NULL,NULL, T_RESPUESTA);
    //      LPCOGENID := GET_PARAMETER_LIST('LPCOGEN');
    //        IF NOT ID_NULL(LPCOGENID) THEN
    //         DESTROY_PARAMETER_LIST(LPCOGENID);
    //        END IF;
    //        LPCOGENID := CREATE_PARAMETER_LIST('LPCOGEN');
    //        ADD_PARAMETER(LPCOGENID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //        ADD_PARAMETER(LPCOGENID, 'PARAMFORM', "TEXT_PARAMETER", 'NO');
    //        ADD_PARAMETER(LPCOGENID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //        ADD_PARAMETER(LPCOGENID, 'PU_CONTROL1', "TEXT_PARAMETER", :this.PARAMETER.get("PCONTROL")2);--CONTROL 2 PORQUE ES EL QUE TIENE EL 004 GARANTIAS ELABORADAS
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECINI', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECINI"),'YYYY-MM-DD'));
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECFIN', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECFIN"),'YYYY-MM-DD')); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_PLAZA', "TEXT_PARAMETER", :this.PARAMETER.get("PCIUDAD")); 
    //        RUN_PRODUCT(REPORTS, :this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, NULL);
    //     ELSIF :this.PARAMETER.get("POPCION") = '1.2' THEN --ELABORACION DE CTOS X OFICIAL DE OPERACIONES
    //        --LIB$ALERTA('MENSAJE','GENERANDO REPORTE.',NULL,NULL,NULL, T_RESPUESTA);
    //      LPCOGENID := GET_PARAMETER_LIST('LPCOGEN');
    //        IF NOT ID_NULL(LPCOGENID) THEN
    //         DESTROY_PARAMETER_LIST(LPCOGENID);
    //        END IF;
    //        LPCOGENID := CREATE_PARAMETER_LIST('LPCOGEN');
    //        ADD_PARAMETER(LPCOGENID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //        ADD_PARAMETER(LPCOGENID, 'PARAMFORM', "TEXT_PARAMETER", 'NO');
    //        ADD_PARAMETER(LPCOGENID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //        ADD_PARAMETER(LPCOGENID, 'PU_CONTROL1', "TEXT_PARAMETER", :this.PARAMETER.get("PCONTROL")2);--CONTROL 2 PORQUE ES EL QUE TIENE EL 004 GARANTIAS ELABORADAS
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECINI', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECINI"),'YYYY-MM-DD'));
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECFIN', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECFIN"),'YYYY-MM-DD')); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_PLAZA', "TEXT_PARAMETER", :this.PARAMETER.get("PCIUDAD"));
    //        ADD_PARAMETER(LPCOGENID, 'PU_OFICIAL', "TEXT_PARAMETER", :this.PARAMETER.get("POFICIAL")); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_GRUPO', "TEXT_PARAMETER", :this.PARAMETER.get("PGRUOPE"));  
    //        RUN_PRODUCT(REPORTS, :this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, NULL);
    //     ELSIF :this.PARAMETER.get("POPCION") = '2' THEN --CONTRATOS EN TRÁMITE
    //        --LIB$ALERTA('MENSAJE','GENERANDO REPORTE.',NULL,NULL,NULL, T_RESPUESTA);
    //      LPCOGENID := GET_PARAMETER_LIST('LPCOGEN');
    //        IF NOT ID_NULL(LPCOGENID) THEN
    //         DESTROY_PARAMETER_LIST(LPCOGENID);
    //        END IF;
    //        LPCOGENID := CREATE_PARAMETER_LIST('LPCOGEN');
    //        ADD_PARAMETER(LPCOGENID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //        ADD_PARAMETER(LPCOGENID, 'PARAMFORM', "TEXT_PARAMETER", 'NO');
    //        ADD_PARAMETER(LPCOGENID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //        ADD_PARAMETER(LPCOGENID, 'PU_LINEAS', "TEXT_PARAMETER", :V_LINEAS);--CONTROL 2 PORQUE ES EL QUE TIENE EL 004 GARANTIAS ELABORADAS
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECINI', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECINI"),'YYYY-MM-DD'));
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECFIN', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECFIN"),'YYYY-MM-DD')); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_PLAZAS', "TEXT_PARAMETER", :this.PARAMETER.get("PCIUDAD"));
    //        ADD_PARAMETER(LPCOGENID, 'PU_OFICIAL', "TEXT_PARAMETER", :this.PARAMETER.get("POFICIAL")); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_GRUPO', "TEXT_PARAMETER", :this.PARAMETER.get("PGRUOPE"));  
    //        RUN_PRODUCT(REPORTS, :this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, NULL);            
    //     ELSIF :this.PARAMETER.get("POPCION") = '3.1' THEN --DESEMBOLSOS DE CONTRATOS X SUCURSAL
    //        --LIB$ALERTA('MENSAJE','GENERANDO REPORTE.',NULL,NULL,NULL, T_RESPUESTA);
    //      LPCOGENID := GET_PARAMETER_LIST('LPCOGEN');
    //        IF NOT ID_NULL(LPCOGENID) THEN
    //         DESTROY_PARAMETER_LIST(LPCOGENID);
    //        END IF;
    //        LPCOGENID := CREATE_PARAMETER_LIST('LPCOGEN');
    //        ADD_PARAMETER(LPCOGENID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //        ADD_PARAMETER(LPCOGENID, 'PARAMFORM', "TEXT_PARAMETER", 'NO');
    //        ADD_PARAMETER(LPCOGENID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //        ADD_PARAMETER(LPCOGENID, 'PU_CONTROL1', "TEXT_PARAMETER", '009');--CONTROL 2 PORQUE ES EL QUE TIENE EL 004 GARANTIAS ELABORADAS
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECINI', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECINI"),'YYYY-MM-DD'));
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECFIN', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECFIN"),'YYYY-MM-DD')); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_PLAZA', "TEXT_PARAMETER", :this.PARAMETER.get("PCIUDAD"));
    //        RUN_PRODUCT(REPORTS, :this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, NULL);
    //     ELSIF :this.PARAMETER.get("POPCION") = '3.2' THEN --DESEMBOLSOS DE CONTRATOS X OFICIAL
    //        --LIB$ALERTA('MENSAJE','GENERANDO REPORTE DESEMBOLSOS CTOS X OFICIAL.',NULL,NULL,NULL, T_RESPUESTA);
    //      LPCOGENID := GET_PARAMETER_LIST('LPCOGEN');
    //        IF NOT ID_NULL(LPCOGENID) THEN
    //         DESTROY_PARAMETER_LIST(LPCOGENID);
    //        END IF;
    //        LPCOGENID := CREATE_PARAMETER_LIST('LPCOGEN');
    //        ADD_PARAMETER(LPCOGENID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //        ADD_PARAMETER(LPCOGENID, 'PARAMFORM', "TEXT_PARAMETER", 'NO');
    //        ADD_PARAMETER(LPCOGENID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //        ADD_PARAMETER(LPCOGENID, 'PU_CONTROL1', "TEXT_PARAMETER", '009');--CONTROL 2 PORQUE ES EL QUE TIENE EL 004 GARANTIAS ELABORADAS
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECINI', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECINI"),'YYYY-MM-DD'));
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECFIN', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECFIN"),'YYYY-MM-DD')); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_OFICIAL', "TEXT_PARAMETER", :this.PARAMETER.get("POFICIAL")); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_GRUPO', "TEXT_PARAMETER", :this.PARAMETER.get("PGRUOPE"));  
    //        ADD_PARAMETER(LPCOGENID, 'PU_PLAZA', "TEXT_PARAMETER", :this.PARAMETER.get("PCIUDAD"));
    //        RUN_PRODUCT(REPORTS, :this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, NULL);                        
    //     ELSIF :this.PARAMETER.get("POPCION") IN ('4','4.1','4.2') THEN --TIEMPOS ENTRE PROCESOS ASIGNACIÓN-IMPRESIÓN
    //        --LIB$ALERTA('MENSAJE','GENERANDO REPORTE TIEMPOS ENTRE PROCESOS.'||:this.PARAMETER.get("POPCION"),NULL,NULL,NULL, T_RESPUESTA);
    //      LPCOGENID := GET_PARAMETER_LIST('LPCOGEN');
    //        IF NOT ID_NULL(LPCOGENID) THEN
    //         DESTROY_PARAMETER_LIST(LPCOGENID);
    //        END IF;
    //        LPCOGENID := CREATE_PARAMETER_LIST('LPCOGEN');
    //        ADD_PARAMETER(LPCOGENID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //        ADD_PARAMETER(LPCOGENID, 'PARAMFORM', "TEXT_PARAMETER", 'NO');
    //        ADD_PARAMETER(LPCOGENID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECINI', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECINI"),'YYYY-MM-DD'));
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECFIN', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECFIN"),'YYYY-MM-DD')); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_PLAZA', "TEXT_PARAMETER", :this.PARAMETER.get("PCIUDAD"));
    //        RUN_PRODUCT(REPORTS, :this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, NULL);                                 
    //     ELSIF :this.PARAMETER.get("POPCION") = ('4.3') THEN --TIEMPOS ENTRE PROCESOS RADICACIÓN-DESEMBOLSO
    //        --LIB$ALERTA('MENSAJE','GENERANDO REPORTE TIEMPOS ENTRE PROCESOS.'||:this.PARAMETER.get("POPCION"),NULL,NULL,NULL, T_RESPUESTA);
    //      LPCOGENID := GET_PARAMETER_LIST('LPCOGEN');
    //        IF NOT ID_NULL(LPCOGENID) THEN
    //         DESTROY_PARAMETER_LIST(LPCOGENID);
    //        END IF;
    //        LPCOGENID := CREATE_PARAMETER_LIST('LPCOGEN');
    //        ADD_PARAMETER(LPCOGENID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //        ADD_PARAMETER(LPCOGENID, 'PARAMFORM', "TEXT_PARAMETER", 'NO');
    //        ADD_PARAMETER(LPCOGENID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECINI', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECINI"),'YYYY-MM-DD'));
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECFIN', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECFIN"),'YYYY-MM-DD')); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_PLAZA', "TEXT_PARAMETER", :this.PARAMETER.get("PCIUDAD"));
    //        ADD_PARAMETER(LPCOGENID, 'PU_LINEAS', "TEXT_PARAMETER", :V_LINEAS);
    //        RUN_PRODUCT(REPORTS, :this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, NULL);
    //     ELSIF :this.PARAMETER.get("POPCION") = ('4.4') THEN --TIEMPOS ENTRE ENVIO DOCUMENTOS - DESEMBOLSO SEGUI.DOC DESEMBOLSO
    //        --LIB$ALERTA('MENSAJE','GENERANDO REPORTE TIEMPOS ENTRE PROCESOS.'||:this.PARAMETER.get("POPCION"),NULL,NULL,NULL, T_RESPUESTA);
    //      LPCOGENID := GET_PARAMETER_LIST('LPCOGEN');
    //        IF NOT ID_NULL(LPCOGENID) THEN
    //         DESTROY_PARAMETER_LIST(LPCOGENID);
    //        END IF;
    //        LPCOGENID := CREATE_PARAMETER_LIST('LPCOGEN');
    //        ADD_PARAMETER(LPCOGENID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //        ADD_PARAMETER(LPCOGENID, 'PARAMFORM', "TEXT_PARAMETER", 'NO');
    //        ADD_PARAMETER(LPCOGENID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECINI', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECINI"),'YYYY-MM-DD'));
    //        ADD_PARAMETER(LPCOGENID, 'PU_FECFIN', "TEXT_PARAMETER", TO_CHAR(:this.PARAMETER.get("PFECFIN"),'YYYY-MM-DD')); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_OFICIAL', "TEXT_PARAMETER", :this.PARAMETER.get("POFICIAL")); 
    //        ADD_PARAMETER(LPCOGENID, 'PU_PLAZA', "TEXT_PARAMETER", :this.PARAMETER.get("PCIUDAD"));
    //        ADD_PARAMETER(LPCOGENID, 'PU_LINEAS', "TEXT_PARAMETER", :V_LINEAS);
    //        ADD_PARAMETER(LPCOGENID, 'PU_TIPOBIEN', "TEXT_PARAMETER", :V_TIPOBIEN); 
    //        RUN_PRODUCT(REPORTS, :this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, NULL);                                                       
    //     ELSE 
    //       LIB$DTNERFRMA('INDICADOR EN CONSTRUCCIÓN.');    
    //     END IF;   
    // END;
    //#endregion
    async CRFESTOPE_bespeci_procesar_whenButtonPressed() {
        console.log("Entering CRFESTOPE_bespeci_procesar_whenButtonPressed");
        let VARBOL: null = null;
        let VVALOR: string = null;
        let VOPCIO: null = null;
        let LPCOGENID: number = null;
        let V_PROGEXEC: string = null;
        let T_RESPUESTA: number = null;
        let V_EXTDATOS: number = 0;
        // CRFESTOPE_PU_CARGAR_PARAMETROSFECHAS();
        if ((this.PARAMETER.get("POPCION") == null)) {
            // CRFESTOPE_LIB$DTNERFRMA("DEBE SELECCIONAR UNA OPCION DE TIPOS DE INDICADORES A GENERAR.");
        }
        else if ((this.PARAMETER.get("POPCION") == "1.1" && (this.PARAMETER.get("PCIUDAD") == null))) {
            // CRFESTOPE_LIB$DTNERFRMA("DEBE SELECCIONAR UNA OPCION DEL CAMPO PLAZA COMERCIAL.");
        }
        else if ((this.PARAMETER.get("POPCION") == "1.2" && (this.PARAMETER.get("POFICIAL") == null))) {
            // CRFESTOPE_LIB$DTNERFRMA("DEBE SELECCIONAR COMO MÍNIMO UN OFICIAL.");
        }
        else if ((this.PARAMETER.get("POPCION") == "2" && ((this.PARAMETER.get("POFICIAL") == null) || (this.PARAMETER.get("PCIUDAD") == null)))) {
            // CRFESTOPE_LIB$DTNERFRMA("DEBE SELECCIONAR COMO MÍNIMO UN GRUPO, UN OFICIAL Y UNA PLAZA.");
        }
        else if ((this.PARAMETER.get("POPCION") == "3.1" && (this.PARAMETER.get("PCIUDAD") == null))) {
            // CRFESTOPE_LIB$DTNERFRMA("DEBE SELECCIONAR UNA OPCION DEL CAMPO PLAZA COMERCIAL.");
        }
        else if ((this.PARAMETER.get("POPCION") == "3.2" && ((this.PARAMETER.get("POFICIAL") == null) || (this.PARAMETER.get("PCIUDAD") == null)))) {
            // CRFESTOPE_LIB$DTNERFRMA("DEBE SELECCIONAR COMO MÍNIMO UN GRUPO, UN OFICIAL Y UNA PLAZA.");
        }
        else if ((this.PARAMETER.get("POPCION") && (this.BESPECI.V_TIPOBIEN == null))) {
            // CRFESTOPE_LIB$DTNERFRMA("DEBE SELECCIONAR COMO MÍNIMO UN TIPO DE BIEN.");
        }
        else if (["2", "4"].indexOf(this.PARAMETER.get("POPCION")) != -1) {
            if (((this.PARAMETER.get("PFECINI") == null) || (this.PARAMETER.get("PFECFIN") == null))) {
                // CRFESTOPE_LIB$DTNERFRMA("DEBE SELECCIONAR ALGÚN PERIODO DE TIEMPO.");
            }
            // CRFESTOPE_LIB$ALERTA("MENSAJE", "PROCESANDO INFORMACIÓN DEL PERIODO " + this.PARAMETER.get("PFECINI") + " AL " + this.PARAMETER.get("PFECFIN") + " ESPERE UN MOMENTO POR FAVOR....", null, null, null, T_RESPUESTA);
            // this.oracleFormsBuiltins.set_application_property(CURSOR_STYLE, "BUSY");
            // CRFESTOPE_PQBD_COL_ESTAOPE.PPROCINDICA(this.PARAMETER.get("PFECINI"), this.PARAMETER.get("PFECFIN"), this.PARAMETER.get("PCIUDAD"), this.PARAMETER.get("PGRUOPE"), this.PARAMETER.get("POFICIAL"), this.PARAMETER.get("POPCION"), this.PARAMETER.get("PPROGRAMA"), this.PARAMETER.get("PPROGROBJT"), V_OPCONGRAL, this.PARAMETER.get("PCONTROL")1, this.PARAMETER.get("PCONTROL")2, this.PARAMETER.get("PCONTROL")3, this.PARAMETER.get("PCONTROL")4, null, V_LINEAS, V_TIPOBIEN, "I");
        }
        else if (this.PARAMETER.get("POPCION")) {
            if ((((this.PARAMETER.get("PFECINI") == null) || (this.PARAMETER.get("PFECFIN") == null)) || (this.PARAMETER.get("PCIUDAD") == null))) {
                // CRFESTOPE_LIB$DTNERFRMA("DEBE SELECCIONAR ALGÚN PERIODO DE TIEMPO Y LA CIUDAD.");
            }
            // CRFESTOPE_LIB$ALERTA("MENSAJE", "PROCESANDO INFORMACIÓN DEL PERIODO " + this.PARAMETER.get("PFECINI") + " AL " + this.PARAMETER.get("PFECFIN") + " ESPERE UN MOMENTO POR FAVOR....", null, null, null, T_RESPUESTA);
            // this.oracleFormsBuiltins.set_application_property(CURSOR_STYLE, "BUSY");
            // CRFESTOPE_PQBD_COL_ESTAOPE.PPROCINDICA(this.PARAMETER.get("PFECINI"), this.PARAMETER.get("PFECFIN"), this.PARAMETER.get("PCIUDAD"), this.PARAMETER.get("PGRUOPE"), this.PARAMETER.get("POFICIAL"), this.PARAMETER.get("POPCION"), this.PARAMETER.get("PPROGRAMA"), this.PARAMETER.get("PPROGROBJT"), V_OPCONGRAL, this.PARAMETER.get("PCONTROL")1, this.PARAMETER.get("PCONTROL")2, this.PARAMETER.get("PCONTROL")3, this.PARAMETER.get("PCONTROL")4, null, V_LINEAS, V_TIPOBIEN, "I");
        }
        // this.oracleFormsBuiltins.set_application_property(CURSOR_STYLE, "DEFAULT");
        if (this.PARAMETER.get("POPCION") == "1.1") {
            LPCOGENID = this.oracleFormsBuiltins.get_parameter_list("LPCOGEN");
            if ((!this.oracleFormsBuiltins.id_null(LPCOGENID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(LPCOGENID);
            }
            LPCOGENID = this.oracleFormsBuiltins.create_parameter_list("LPCOGEN");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PARAMFORM", "TEXT_PARAMETER", "NO");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_CONTROL1", "TEXT_PARAMETER", this.PARAMETER.get("PCONTROL"));
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECINI", "TEXT_PARAMETER", this.PARAMETER.get("PFECINI").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECFIN", "TEXT_PARAMETER", this.PARAMETER.get("PFECFIN").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_PLAZA", "TEXT_PARAMETER", this.PARAMETER.get("PCIUDAD"));
            // this.oracleFormsBuiltins.run_product(REPORTS, this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, null);
        }
        else if (this.PARAMETER.get("POPCION") == "1.2") {
            LPCOGENID = this.oracleFormsBuiltins.get_parameter_list("LPCOGEN");
            if ((!this.oracleFormsBuiltins.id_null(LPCOGENID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(LPCOGENID);
            }
            LPCOGENID = this.oracleFormsBuiltins.create_parameter_list("LPCOGEN");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PARAMFORM", "TEXT_PARAMETER", "NO");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_CONTROL1", "TEXT_PARAMETER", this.PARAMETER.get("PCONTROL"));
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECINI", "TEXT_PARAMETER", this.PARAMETER.get("PFECINI").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECFIN", "TEXT_PARAMETER", this.PARAMETER.get("PFECFIN").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_PLAZA", "TEXT_PARAMETER", this.PARAMETER.get("PCIUDAD"));
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_OFICIAL", "TEXT_PARAMETER", this.PARAMETER.get("POFICIAL"));
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_GRUPO", "TEXT_PARAMETER", this.PARAMETER.get("PGRUOPE"));
            // this.oracleFormsBuiltins.run_product(REPORTS, this.PARAMETER.get("PFORRE"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, null);
        }
        else if (this.PARAMETER.get("POPCION") == "2") {
            LPCOGENID = this.oracleFormsBuiltins.get_parameter_list("LPCOGEN");
            if ((!this.oracleFormsBuiltins.id_null(LPCOGENID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(LPCOGENID);
            }
            LPCOGENID = this.oracleFormsBuiltins.create_parameter_list("LPCOGEN");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PARAMFORM", "TEXT_PARAMETER", "NO");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
            // this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_LINEAS", "TEXT_PARAMETER", V_LINEAS);
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECINI", "TEXT_PARAMETER", this.PARAMETER.get("PFECINI").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECFIN", "TEXT_PARAMETER", this.PARAMETER.get("PFECFIN").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_PLAZAS", "TEXT_PARAMETER", this.PARAMETER.get("PCIUDAD"));
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_OFICIAL", "TEXT_PARAMETER", this.PARAMETER.get("POFICIAL"));
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_GRUPO", "TEXT_PARAMETER", this.PARAMETER.get("PGRUOPE"));
            // this.oracleFormsBuiltins.run_product(REPORTS, this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, null);
        }
        else if (this.PARAMETER.get("POPCION") == "3.1") {
            LPCOGENID = this.oracleFormsBuiltins.get_parameter_list("LPCOGEN");
            if ((!this.oracleFormsBuiltins.id_null(LPCOGENID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(LPCOGENID);
            }
            LPCOGENID = this.oracleFormsBuiltins.create_parameter_list("LPCOGEN");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PARAMFORM", "TEXT_PARAMETER", "NO");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_CONTROL1", "TEXT_PARAMETER", "009");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECINI", "TEXT_PARAMETER", this.PARAMETER.get("PFECINI").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECFIN", "TEXT_PARAMETER", this.PARAMETER.get("PFECFIN").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_PLAZA", "TEXT_PARAMETER", this.PARAMETER.get("PCIUDAD"));
            // this.oracleFormsBuiltins.run_product(REPORTS, this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, null);
        }
        else if (this.PARAMETER.get("POPCION") == "3.2") {
            LPCOGENID = this.oracleFormsBuiltins.get_parameter_list("LPCOGEN");
            if ((!this.oracleFormsBuiltins.id_null(LPCOGENID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(LPCOGENID);
            }
            LPCOGENID = this.oracleFormsBuiltins.create_parameter_list("LPCOGEN");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PARAMFORM", "TEXT_PARAMETER", "NO");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_CONTROL1", "TEXT_PARAMETER", "009");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECINI", "TEXT_PARAMETER", this.PARAMETER.get("PFECINI").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECFIN", "TEXT_PARAMETER", this.PARAMETER.get("PFECFIN").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_OFICIAL", "TEXT_PARAMETER", this.PARAMETER.get("POFICIAL"));
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_GRUPO", "TEXT_PARAMETER", this.PARAMETER.get("PGRUOPE"));
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_PLAZA", "TEXT_PARAMETER", this.PARAMETER.get("PCIUDAD"));
            // this.oracleFormsBuiltins.run_product(REPORTS, this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, null);
        }
        else if (["4", "4.1", "4.2"].indexOf(this.PARAMETER.get("POPCION")) != -1) {
            LPCOGENID = this.oracleFormsBuiltins.get_parameter_list("LPCOGEN");
            if ((!this.oracleFormsBuiltins.id_null(LPCOGENID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(LPCOGENID);
            }
            LPCOGENID = this.oracleFormsBuiltins.create_parameter_list("LPCOGEN");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PARAMFORM", "TEXT_PARAMETER", "NO");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECINI", "TEXT_PARAMETER", this.PARAMETER.get("PFECINI").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECFIN", "TEXT_PARAMETER", this.PARAMETER.get("PFECFIN").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_PLAZA", "TEXT_PARAMETER", this.PARAMETER.get("PCIUDAD"));
            // this.oracleFormsBuiltins.run_product(REPORTS, this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, null);
        }
        else if (this.PARAMETER.get("POPCION") == "4.3") {
            LPCOGENID = this.oracleFormsBuiltins.get_parameter_list("LPCOGEN");
            if ((!this.oracleFormsBuiltins.id_null(LPCOGENID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(LPCOGENID);
            }
            LPCOGENID = this.oracleFormsBuiltins.create_parameter_list("LPCOGEN");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PARAMFORM", "TEXT_PARAMETER", "NO");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECINI", "TEXT_PARAMETER", this.PARAMETER.get("PFECINI").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECFIN", "TEXT_PARAMETER", this.PARAMETER.get("PFECFIN").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_PLAZA", "TEXT_PARAMETER", this.PARAMETER.get("PCIUDAD"));
            // this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_LINEAS", "TEXT_PARAMETER", V_LINEAS);
            // this.oracleFormsBuiltins.run_product(REPORTS, this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, null);
        }
        else if (this.PARAMETER.get("POPCION") == "4.4") {
            LPCOGENID = this.oracleFormsBuiltins.get_parameter_list("LPCOGEN");
            if ((!this.oracleFormsBuiltins.id_null(LPCOGENID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(LPCOGENID);
            }
            LPCOGENID = this.oracleFormsBuiltins.create_parameter_list("LPCOGEN");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PARAMFORM", "TEXT_PARAMETER", "NO");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECINI", "TEXT_PARAMETER", this.PARAMETER.get("PFECINI").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECFIN", "TEXT_PARAMETER", this.PARAMETER.get("PFECFIN").toString());
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_OFICIAL", "TEXT_PARAMETER", this.PARAMETER.get("POFICIAL"));
            this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_PLAZA", "TEXT_PARAMETER", this.PARAMETER.get("PCIUDAD"));
            // this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_LINEAS", "TEXT_PARAMETER", V_LINEAS);
            // this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_TIPOBIEN", "TEXT_PARAMETER", V_TIPOBIEN);
            // this.oracleFormsBuiltins.run_product(REPORTS, this.PARAMETER.get("PFORREP"), ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, null);
        }
        else {
            // CRFESTOPE_LIB$DTNERFRMA("INDICADOR EN CONSTRUCCIÓN.");
        }
        console.log("Exiting CRFESTOPE_bespeci_procesar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VARBOL   ITEM;
    //  VVALOR   VARCHAR2(15);
    //  VOPCIO   CRTOPCIND%ROWTYPE;
    //  VCAMPFEC CRTSOLPASO.PASO_CAMFEC%TYPE;
    //  
    // BEGIN
    //  VARBOL := FIND_ITEM('VLTOPCIO.OPCION_DESCRI');
    //  VVALOR := FTREE.GET_TREE_NODE_PROPERTY(VARBOL, :SYSTEM.TRIGGER_NODE, FTREE.NODE_VALUE);
    //   PQBD_COL_ESTAOPE.ADMIND(RTRIM(LTRIM(VVALOR)), VOPCIO);
    //   :this.PARAMETER.get("POPCIONANT") := :this.PARAMETER.get("POPCION");
    //  :this.PARAMETER.get("POPCION")    := VOPCIO.OPCIND_CODIGO;
    //  :this.PARAMETER.get("PFORREP")    := VOPCIO.OPCIND_FORREP;
    //  :this.PARAMETER.get("PPROGRAMA")  := VOPCIO.OPCIND_PROGR;
    //  :this.PARAMETER.get("PPROGROBJT") := VOPCIO.OPCIND_OBJETO;
    //  :this.PARAMETER.get("PCODPASO")  := VOPCIO.OPCIND_CODPASO;
    //  BEGIN
    //    SELECT PASO_CAMFEC    CAMPFEC
    //      INTO VCAMPFEC 
    //         FROM CRTSOLPASO
    //        WHERE PASO_CODIGO NOT IN ('011', '012', '013')
    //          AND PASO_CODIGO = :this.PARAMETER.get("PCODPASO");
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   VCAMPFEC := 'CONTROL_FGTIAS';
    //  END;
    //  :this.PARAMETER.get("PCAMPOFECHA")  := VCAMPFEC;
    // END;
    //#endregion
    async CRFESTOPE_vltopcio_whenTreeNodeSelected() {
        console.log("Entering CRFESTOPE_vltopcio_whenTreeNodeSelected");
        let VARBOL: null = null;
        let VVALOR: string = null;
        let VOPCIO: null = null;
        let VCAMPFEC: null = null;
        VARBOL = this.oracleFormsBuiltins.find_item("VLTOPCIO.OPCION_DESCRI");
        // VVALOR = FTREE.this.oracleFormsBuiltins.get_tree_node_property(VARBOL, this._SYSTEM_SERVICE.get("TRIGGER_NODE"), FTREE.NODE_VALUE);
        // // CRFESTOPE_PQBD_COL_ESTAOPE.ADMIND(RTRIM(LTRIM(VVALOR)), VOPCIO);
        // this.PARAMETER.get("POPCIONANT") = this.PARAMETER.get("POPCION");
        // this.PARAMETER.get("POPCION") = VOPCIO.OPCIND_CODIGO;
        // this.PARAMETER.get("PFORREP") = VOPCIO.OPCIND_FORREP;
        // this.PARAMETER.get("PPROGRAMA") = VOPCIO.OPCIND_PROGR;
        // this.PARAMETER.get("PPROGROBJT") = VOPCIO.OPCIND_OBJETO;
        // this.PARAMETER.get("PCODPASO") = VOPCIO.OPCIND_CODPASO;
        // construct payload
        let payload1 = new Map();
        payload1.set("PCODPASO", this.PARAMETER.get("PCODPASO"));
        // call REST API
        const result1 = await Rest.post("/crfestope_vltopcio/crfestope_vltopcio_whentreenodeselected_query1", payload1);
        // get values from result
        VCAMPFEC = result1[0].get("VCAMPFEC");
        if (result1 == null || result1.length == 0) {

            // VCAMPFEC = "CONTROL_FGTIAS";
        }

        // this.PARAMETER.get("PCAMPOFECHA") = VCAMPFEC;
        console.log("Exiting CRFESTOPE_vltopcio_whenTreeNodeSelected");
    }

    //#region PLSQL
    // DECLARE
    //  VARBOL  ITEM;
    //  VVALOR  VARCHAR2(15);
    //  VOPCIO  CRTOPCIND%ROWTYPE;
    //   VCAMPFEC CRTSOLPASO.PASO_CAMFEC%TYPE;
    // BEGIN
    //  VARBOL := FIND_ITEM('VLTOPCIO.OPCION_DESCRI');
    //  VVALOR := FTREE.GET_TREE_NODE_PROPERTY(VARBOL, :SYSTEM.TRIGGER_NODE, FTREE.NODE_VALUE);
    //   PQBD_COL_ESTAOPE.ADMIND(RTRIM(LTRIM(VVALOR)), VOPCIO);
    //  :this.PARAMETER.get("POPCIONANT") := :this.PARAMETER.get("POPCION");
    //  :this.PARAMETER.get("POPCION")    := VOPCIO.OPCIND_CODIGO;
    //  :this.PARAMETER.get("PFORREP")    := VOPCIO.OPCIND_FORREP;
    //  :this.PARAMETER.get("PPROGRAMA")  := VOPCIO.OPCIND_PROGR;
    //  :this.PARAMETER.get("PPROGROBJT") := VOPCIO.OPCIND_OBJETO;
    //  :this.PARAMETER.get("PCODPASO")  := VOPCIO.OPCIND_CODPASO;
    //  BEGIN
    //    SELECT PASO_CAMFEC    CAMPFEC
    //      INTO VCAMPFEC 
    //         FROM CRTSOLPASO
    //        WHERE PASO_CODIGO NOT IN ('011', '012', '013')
    //          AND PASO_CODIGO = :this.PARAMETER.get("PCODPASO");
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   VCAMPFEC := 'CONTROL_FGTIAS';
    //  END;
    //  :this.PARAMETER.get("PCAMPOFECHA")  := VCAMPFEC;
    // END;
    //#endregion
    async CRFESTOPE_vltopcio_whenTreeNodeActivated() {
        console.log("Entering CRFESTOPE_vltopcio_whenTreeNodeActivated");
        let VARBOL: null = null;
        let VVALOR: string = null;
        let VOPCIO: null = null;
        let VCAMPFEC: null = null;
        VARBOL = this.oracleFormsBuiltins.find_item("VLTOPCIO.OPCION_DESCRI");
        // VVALOR = FTREE.this.oracleFormsBuiltins.get_tree_node_property(VARBOL, this._SYSTEM_SERVICE.get("TRIGGER_NODE"), FTREE.NODE_VALUE);
        // CRFESTOPE_PQBD_COL_ESTAOPE.ADMIND(RTRIM(LTRIM(VVALOR)), VOPCIO);
        // this.PARAMETER.get("POPCIONANT") = this.PARAMETER.get("POPCION");
        // this.PARAMETER.get("POPCION") = VOPCIO.OPCIND_CODIGO;
        // this.PARAMETER.get("PFORREP") = VOPCIO.OPCIND_FORREP;
        // this.PARAMETER.get("PPROGRAMA") = VOPCIO.OPCIND_PROGR;
        // this.PARAMETER.get("PPROGROBJT") = VOPCIO.OPCIND_OBJETO;
        // this.PARAMETER.get("PCODPASO") = VOPCIO.OPCIND_CODPASO;
        // construct payload
        let payload1 = new Map();
        payload1.set("PCODPASO", this.PARAMETER.get("PCODPASO"));
        // call REST API
        const result1 = await Rest.post("/crfestope_vltopcio/crfestope_vltopcio_whentreenodeactivated_query1", payload1);
        // get values from result
        VCAMPFEC = result1[0].get("VCAMPFEC");
        if (result1 == null || result1.length == 0) {

            // VCAMPFEC = "CONTROL_FGTIAS";
        }

        // this.PARAMETER.get("PCAMPOFECHA") = VCAMPFEC;
        console.log("Exiting CRFESTOPE_vltopcio_whenTreeNodeActivated");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTCONTROL DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTCONTROL_CUR IS      
    //     SELECT 1 FROM CRTCONTROL C     
    //     WHERE C.CONTROL_OFCSOL = :DETSOL.SOL_AGENCIA AND C.CONTROL_CODSOL = :DETSOL.SOL_SOLICITUD AND C.CONTROL_PLANEA = :DETSOL.SOL_PLANEA AND C.CONTROL_CODUNI = :DETSOL.SOL_CODUNI;
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
    async CRFESTOPE_detsol_onCheckDeleteMaster() {
        console.log("Entering CRFESTOPE_detsol_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFESTOPE_detsol_onCheckDeleteMaster");
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
    //   IF ( (:DETSOL.SOL_AGENCIA IS NOT NULL) OR (:DETSOL.SOL_SOLICITUD IS NOT NULL) OR (:DETSOL.SOL_PLANEA IS NOT NULL) OR (:DETSOL.SOL_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('DETSOL.DETSOL_CRTCONTROL');   
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
    async CRFESTOPE_detsol_onPopulateDetails() {
        console.log("Entering CRFESTOPE_detsol_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((((this.DETSOL.SOL_AGENCIA != null) || (this.DETSOL.SOL_SOLICITUD != null)) || (this.DETSOL.SOL_PLANEA != null)) || (this.DETSOL.SOL_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("DETSOL.DETSOL_CRTCONTROL");
            // CRFESTOPE_QUERY_MASTER_DETAILS(REL_ID, "CRTCONTROL");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFESTOPE_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFESTOPE_detsol_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTCONTROL'); END;
    //#endregion
    async CRFESTOPE_detsol_solPlanea_keyNextItem() {
        console.log("Entering CRFESTOPE_detsol_solPlanea_keyNextItem");
        this.oracleFormsBuiltins.go_block("CRTCONTROL");
        console.log("Exiting CRFESTOPE_detsol_solPlanea_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_RESUMERRXAREA;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_RESUMERRXAREA(BK_DATA, :PARAMETROS.AREA, :VAR_FECERRI, :VAR_FECERRF, :V_CODUNI);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'CTRESXAREA');
    // END;
    //#endregion
    async CRFESTOPE_ctresxarea_queryProcedure() {
        console.log("Entering CRFESTOPE_ctresxarea_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_RESUMERRXAREA(BK_DATA, PARAMETROS.AREA, VAR_FECERRI, VAR_FECERRF, V_CODUNI);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "CTRESXAREA");
        console.log("Exiting CRFESTOPE_ctresxarea_queryProcedure");
    }

    //#region PLSQL
    // BEGIN   
    //  IF :V_VERRES = 'S' THEN
    //    GO_BLOCK('CTERRXAREA');
    //    EXECUTE_QUERY;
    //  ELSIF :V_VERRES = 'N' THEN
    //   GO_BLOCK('CTERRXAREA');
    //   CLEAR_BLOCK;
    //   GO_BLOCK('CTRESXAREA');
    //   
    //   END IF;
    // END;
    //#endregion
    async CRFESTOPE_ctresxarea_vVerres_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_ctresxarea_vVerres_whenCheckboxChanged");
        // if (V_VERRES == "S") {
        //     this.oracleFormsBuiltins.go_block("CTERRXAREA");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else if (V_VERRES == "N") {
        //     this.oracleFormsBuiltins.go_block("CTERRXAREA");
        //     this.oracleFormsBuiltins.clear_block();
        //     this.oracleFormsBuiltins.go_block("CTRESXAREA");
        // }
        console.log("Exiting CRFESTOPE_ctresxarea_vVerres_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT AGEDES
    //    INTO :V_DESCRI
    //  FROM OPS$SEGUI.AGE
    //  WHERE AGEOFC = :CRTPASOXSOL.SOL_AGENCIA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :V_DESCRI := NULL;
    //  END;
    //#endregion
    async CRFESTOPE_crtpasoxsol_postQuery() {
        console.log("Entering CRFESTOPE_crtpasoxsol_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("SOL_AGENCIA", this.CRTPASOXSOL.SOL_AGENCIA);
        // call REST API
        const result1 = await Rest.post("/crfestope_crtpasoxsol/crfestope_crtpasoxsol_postquery_query1", payload1);
        // get values from result
        // V_DESCRI = result1[0].get("V_DESCRI");
        if (result1 == null || result1.length == 0) {

            this.CRTPASOXSOL.V_DESCRI = null;
        }

        console.log("Exiting CRFESTOPE_crtpasoxsol_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT ERR_DESCRI
    //    INTO :VAR_DESCOD
    //   FROM CRTERROR
    //   WHERE ERR_TIPO   = :ERRCTO_TIPO
    //    AND  ERR_CODIGO = :ERRCTO_CODIGO;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :VAR_DESCOD := NULL;
    // END;
    // BEGIN
    //  SELECT TIPERR_AREA, TIPERR_DESCRI
    //    INTO :VAR_AREA, :VAR_DESCTIPO
    //  FROM CRTTIPERR 
    //  WHERE TIPERR_CODIGO = :ERRCTO_TIPO;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //    :VAR_AREA     := NULL;
    //    :VAR_DESCTIPO := NULL;
    // END;
    // BEGIN
    //  SELECT AREA_DESCRI
    //    INTO :VAR_DESCAREA
    //  FROM CRTARECOM
    //  WHERE AREA_CODIGO = :VAR_AREA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :VAR_DESCAREA := NULL;
    // END;
    //#endregion
    async CRFESTOPE_crterrxctos_postQuery() {
        console.log("Entering CRFESTOPE_crterrxctos_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("ERRCTO_TIPO", ERRCTO_TIPO);
        // payload1.set("ERRCTO_CODIGO", ERRCTO_CODIGO);
        // call REST API
        const result1 = await Rest.post("/crfestope_crterrxctos/crfestope_crterrxctos_postquery_query1", payload1);
        // get values from result
        // VAR_DESCOD = result1[0].get("VAR_DESCOD");
        if (result1 == null || result1.length == 0) {

            this.CRTERRXCTOS.VAR_DESCOD = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("ERRCTO_TIPO", ERRCTO_TIPO);
        // call REST API
        const result2 = await Rest.post("/crfestope_crterrxctos/crfestope_crterrxctos_postquery_query2", payload2);
        // get values from result
        // VAR_AREA = result2[0].get("VAR_AREA");
        // VAR_DESCTIPO = result2[0].get("VAR_DESCTIPO");
        if (result2 == null || result2.length == 0) {

            this.CRTERRXCTOS.VAR_AREA = null;
            this.CRTERRXCTOS.VAR_DESCTIPO = null;
        }

        // construct payload
        let payload3 = new Map();
        // payload3.set("VAR_AREA", VAR_AREA);
        // call REST API
        const result3 = await Rest.post("/crfestope_crterrxctos/crfestope_crterrxctos_postquery_query3", payload3);
        // get values from result
        // VAR_DESCAREA = result3[0].get("VAR_DESCAREA");
        if (result3 == null || result3.length == 0) {

            this.CRTERRXCTOS.VAR_DESCAREA = null;
        }

        console.log("Exiting CRFESTOPE_crterrxctos_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :BNIVEL.PAIS = 'S' THEN
    //   :this.PARAMETER.get("PCIUDAD") := '000';
    // ELSE
    //   :this.PARAMETER.get("PCIUDAD") := :BNIVEL.CIUDAD;
    // END IF;
    // :this.PARAMETER.get("PGRUOPE") := :BNIVEL.GRUPO;
    // :this.PARAMETER.get("POFICIAL") := :BNIVEL.OFICIAL; END;
    //#endregion
    async CRFESTOPE_bnivel_whenValidateRecord() {
        console.log("Entering CRFESTOPE_bnivel_whenValidateRecord");
        if (this.BNIVEL.PAIS == "S") {
            this.PARAMETER.set("PCIUDAD", "000");
        }
        else {
            this.PARAMETER.set("PCIUDAD", this.BNIVEL.CIUDAD);
        }
        this.PARAMETER.set("PGRUOPE", this.BNIVEL.GRUPO);
        this.PARAMETER.set("POFICIAL", this.BNIVEL.OFICIAL);
        console.log("Exiting CRFESTOPE_bnivel_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN IF :BNIVEL.PAIS = 'S' THEN
    //     :this.PARAMETER.get("PCIUDAD") := '000';
    //   ELSE
    //     :this.PARAMETER.get("PCIUDAD") := :BNIVEL.CIUDAD;
    //   END IF;   
    //   :this.PARAMETER.get("PGRUOPE") := :BNIVEL.GRUPO;
    //   :this.PARAMETER.get("POFICIAL") := :BNIVEL.OFICIAL; END;
    //#endregion
    async CRFESTOPE_bnivel_whenCreateRecord() {
        console.log("Entering CRFESTOPE_bnivel_whenCreateRecord");
        if (this.BNIVEL.PAIS == "S") {
            this.PARAMETER.set("PCIUDAD", "000");
        }
        else {
            this.PARAMETER.set("PCIUDAD", this.BNIVEL.CIUDAD);
        }
        this.PARAMETER.set("PGRUOPE", this.BNIVEL.GRUPO);
        this.PARAMETER.set("POFICIAL", this.BNIVEL.OFICIAL);
        console.log("Exiting CRFESTOPE_bnivel_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("POFICIAL") := :BNIVEL.OFICIAL; END;
    //#endregion
    async CRFESTOPE_bnivel_oficial_whenListChanged() {
        console.log("Entering CRFESTOPE_bnivel_oficial_whenListChanged");
        this.PARAMETER.set("POFICIAL", this.BNIVEL.OFICIAL);
        console.log("Exiting CRFESTOPE_bnivel_oficial_whenListChanged");
    }

    //#region PLSQL
    // BEGIN /*
    // IF :BNIVEL.GRUPO IS NULL THEN
    //  LIB$DTNERFRMA('ESCOJA EL GRUPO');
    // ELSE
    //  --
    //   IF NOT LIB$PBLARLSTARG('BNIVEL.OFICIAL','GROFICIAL') THEN
    //       LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA BNIVEL.OFICIAL');
    //   END IF;  
    // END IF;
    // */
    // IF :this.PARAMETER.get("POPCION") = '1.2' AND :this.PARAMETER.get("PGRUOPE") = 'OC' THEN
    //    PU_CARGAR_PARAMETROSFECHAS;
    //    PU_CREAR_LIST_OFICIALES;
    //   
    // ELSE
    //   IF NOT LIB$PBLARLSTARG('BNIVEL.OFICIAL','GROFICIAL') THEN
    //       LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA BNIVEL.OFICIAL');
    //   END IF; 
    //   
    // END IF;
    // /*
    //   IF NOT LIB$PBLARLSTARG('BNIVEL.OFICIAL','GROFICIAL') THEN
    //       LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA BNIVEL.OFICIAL');
    //   END IF;  
    // 
    // */; END;
    //#endregion
    async CRFESTOPE_bnivel_grupo_whenValidateItem() {
        console.log("Entering CRFESTOPE_bnivel_grupo_whenValidateItem");
        if ((this.PARAMETER.get("POPCION") == "1.2" && this.PARAMETER.get("PGRUOPE") == "OC")) {
            // CRFESTOPE_PU_CARGAR_PARAMETROSFECHAS();
            // CRFESTOPE_PU_CREAR_LIST_OFICIALES();
        }
        else {
            // if ((!LIB$PBLARLSTARG("BNIVEL.OFICIAL", "GROFICIAL"))) {
            //     // CRFESTOPE_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA BNIVEL.OFICIAL");
            // }
        }
        console.log("Exiting CRFESTOPE_bnivel_grupo_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("PGRUOPE") := :BNIVEL.GRUPO; END;
    //#endregion
    async CRFESTOPE_bnivel_grupo_whenListChanged() {
        console.log("Entering CRFESTOPE_bnivel_grupo_whenListChanged");
        this.PARAMETER.set("PGRUOPE", this.BNIVEL.GRUPO);
        console.log("Exiting CRFESTOPE_bnivel_grupo_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :BNIVEL.PAIS = 'N' THEN
    //  IF :BNIVEL.CIUDAD IS NULL THEN
    //   LIB$DTNERFRMA('ESCOJA LA CIUDAD');
    //  END IF;
    // END IF; END;
    //#endregion
    async CRFESTOPE_bnivel_ciudad_whenValidateItem() {
        console.log("Entering CRFESTOPE_bnivel_ciudad_whenValidateItem");
        if (this.BNIVEL.PAIS == "N") {
            if ((this.BNIVEL.CIUDAD == null)) {
                // CRFESTOPE_LIB$DTNERFRMA("ESCOJA LA CIUDAD");
            }
        }
        console.log("Exiting CRFESTOPE_bnivel_ciudad_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :this.PARAMETER.get("POPCION") <> '2' THEN
    // :BNIVEL.PAIS := 'N';
    // SET_ITEM_INSTANCE_PROPERTY('BNIVEL.PAIS',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // :this.PARAMETER.get("PCIUDAD") := :BNIVEL.CIUDAD;
    // ELSE
    //  IF :BNIVEL.CIUDAD = '000' THEN
    //   :BNIVEL.PAIS := 'N';
    //      SET_ITEM_INSTANCE_PROPERTY('BNIVEL.PAIS',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    //    --:BNIVEL.CIUDAD := '%%%';
    //    :BNIVEL.CIUDAD := '000';
    //   :this.PARAMETER.get("PCIUDAD") := :BNIVEL.CIUDAD;
    //  ELSE
    //   :this.PARAMETER.get("PCIUDAD") := :BNIVEL.CIUDAD;
    //  END IF;
    // END IF; END;
    //#endregion
    async CRFESTOPE_bnivel_ciudad_whenListChanged() {
        console.log("Entering CRFESTOPE_bnivel_ciudad_whenListChanged");
        if (this.PARAMETER.get("POPCION") != "2") {
            this.BNIVEL.PAIS = "N";
            // this.oracleFormsBuiltins.set_item_instance_property("BNIVEL.PAIS", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
            this.PARAMETER.set("PCIUDAD", this.BNIVEL.CIUDAD);
        }
        else {
            if (this.BNIVEL.CIUDAD == "000") {
                this.BNIVEL.PAIS = "N";
                // this.oracleFormsBuiltins.set_item_instance_property("BNIVEL.PAIS", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.BNIVEL.CIUDAD = "000";
                this.PARAMETER.set("PCIUDAD", this.BNIVEL.CIUDAD);
            }
            else {
                this.PARAMETER.set("PCIUDAD", this.BNIVEL.CIUDAD);
            }
        }
        console.log("Exiting CRFESTOPE_bnivel_ciudad_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :BNIVEL.PAIS = 'S' AND :this.PARAMETER.get("POPCION") <> '2' THEN
    //   :BNIVEL.CIUDAD := '000';
    //   :this.PARAMETER.get("PCIUDAD") := :BNIVEL.CIUDAD;  
    // ELSIF   :BNIVEL.PAIS = 'S' AND :this.PARAMETER.get("POPCION") = '2' THEN
    //  --:BNIVEL.CIUDAD := '%%%';
    //  :BNIVEL.CIUDAD := '000';
    //  :this.PARAMETER.get("PCIUDAD") := :BNIVEL.CIUDAD;  
    // ELSE
    //   :this.PARAMETER.get("PCIUDAD") := :BNIVEL.CIUDAD;  
    //   SET_ITEM_INSTANCE_PROPERTY('BNIVEL.CIUDAD',TO_NUMBER(:SYSTEM.CURSOR_RECORD), "INSERT_ALLOWED","PROPERTY_FALSE");
    // END IF; END;
    //#endregion
    async CRFESTOPE_bnivel_pais_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_bnivel_pais_whenCheckboxChanged");
        if ((this.BNIVEL.PAIS == "S" && this.PARAMETER.get("POPCION") != "2")) {
            this.BNIVEL.CIUDAD = "000";
            this.PARAMETER.set("PCIUDAD", this.BNIVEL.CIUDAD);
        }
        else if ((this.BNIVEL.PAIS == "S" && this.PARAMETER.get("POPCION") == "2")) {
            this.BNIVEL.CIUDAD = "000";
            this.PARAMETER.set("PCIUDAD", this.BNIVEL.CIUDAD);
        }
        else {
            this.PARAMETER.set("PCIUDAD", this.BNIVEL.CIUDAD);
            // this.oracleFormsBuiltins.set_item_instance_property("BNIVEL.CIUDAD", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "INSERT_ALLOWED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFESTOPE_bnivel_pais_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TABRADICA;
    // BEGIN
    // PQBD_COL_ESTAOPE.POBTABRADICA(BK_DATA, :V_OFIDESEMRAD, :V_AGENRAD, :V_FECRADI, :V_FECRAF, :PRESUMRADICA.ESTADO, :V_FLAGERR, :RADICA_CODSOL, :V_CODUNI);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'PCRTRADICA');
    // END;
    //#endregion
    async CRFESTOPE_pcrtradica_queryProcedure() {
        console.log("Entering CRFESTOPE_pcrtradica_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.POBTABRADICA(BK_DATA, V_OFIDESEMRAD, V_AGENRAD, V_FECRADI, V_FECRAF, PRESUMRADICA.ESTADO, V_FLAGERR, RADICA_CODSOL, V_CODUNI);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "PCRTRADICA");
        console.log("Exiting CRFESTOPE_pcrtradica_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    //  V_USCIAL   CRTSOLICR.SOLICR_USCIAL%TYPE;
    // BEGIN
    //   BEGIN
    //    SELECT SOLICR_USCIAL
    //      INTO V_USCIAL
    //    FROM CRTSOLICR
    //    WHERE SOLICR_CODSOL = :PCRTRADICA.RADICA_CODSOL
    //     AND  SOLICR_OFCSOL = :PCRTRADICA.RADICA_OFISOL;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    V_USCIAL:=NULL;
    //   END;  
    //   BEGIN 
    //    SELECT  USU_NOMBRE 
    //     INTO :PCRTRADICA.OFICIAL
    //    FROM SGUSUARIOS
    //    WHERE USU_CODIGO=:RADICA_USUOFI;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //     :PCRTRADICA.OFICIAL:='SIN OFICIAL DE RADICACIÓN';
    //   END;
    //   
    //   BEGIN 
    //    SELECT  ERR_DESCRI
    //     INTO :PCRTRADICA.ERROR
    //    FROM CRTERROR
    //    WHERE ERR_CODIGO=:PCRTRADICA.RADICA_CODERR;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //     :PCRTRADICA.ERROR:=NULL;
    //   WHEN TOO_MANY_ROWS THEN
    //    :PCRTRADICA.ERROR :='TIENE MAS ERRORES. EN LA TABLA DE ERRORES';
    //   END;
    // END;
    //#endregion
    async CRFESTOPE_pcrtradica_postQuery() {
        console.log("Entering CRFESTOPE_pcrtradica_postQuery");
        let V_USCIAL: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RADICA_CODSOL", this.PCRTRADICA.RADICA_CODSOL);
        payload1.set("RADICA_OFISOL", this.PCRTRADICA.RADICA_OFISOL);
        // call REST API
        const result1 = await Rest.post("/crfestope_pcrtradica/crfestope_pcrtradica_postquery_query1", payload1);
        // get values from result
        V_USCIAL = result1[0].get("V_USCIAL");
        if (result1 == null || result1.length == 0) {

            V_USCIAL = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("RADICA_USUOFI", RADICA_USUOFI);
        // call REST API
        const result2 = await Rest.post("/crfestope_pcrtradica/crfestope_pcrtradica_postquery_query2", payload2);
        // get values from result
        this.PCRTRADICA.OFICIAL = result2[0].get("PCRTRADICA.OFICIAL");
        if (result2 == null || result2.length == 0) {

            this.PCRTRADICA.OFICIAL = "SIN OFICIAL DE RADICACIÓN";
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("RADICA_CODERR", this.PCRTRADICA.RADICA_CODERR);
        // call REST API
        const result3 = await Rest.post("/crfestope_pcrtradica/crfestope_pcrtradica_postquery_query3", payload3);
        // get values from result
        this.PCRTRADICA.ERROR = result3[0].get("PCRTRADICA.ERROR");
        if (result3 == null || result3.length == 0) {

            this.PCRTRADICA.ERROR = null;
        }

        console.log("Exiting CRFESTOPE_pcrtradica_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_ERRXAREA;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_ERRXAREA(BK_DATA, :CTRESXAREA.AREA, :VAR_FECERRI, :VAR_FECERRF);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'CTERRXAREA');
    // END;
    //#endregion
    async CRFESTOPE_cterrxarea_queryProcedure() {
        console.log("Entering CRFESTOPE_cterrxarea_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_ERRXAREA(BK_DATA, CTRESXAREA.AREA, VAR_FECERRI, VAR_FECERRF);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "CTERRXAREA");
        console.log("Exiting CRFESTOPE_cterrxarea_queryProcedure");
    }

    //#region PLSQL
    // BEGIN   
    //  IF :V_VERDET = 'S' THEN
    //    SHOW_VIEW('ERROR');
    //    SYNCHRONIZE;
    //    GO_BLOCK('DETERROR');
    //    EXECUTE_QUERY;
    //  ELSE
    //    HIDE_VIEW('ERROR');
    //   END IF;
    // END;
    //#endregion
    async CRFESTOPE_cterrxarea_vVerdet_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_cterrxarea_vVerdet_whenCheckboxChanged");
        // if (V_VERDET == "S") {
        //     this.oracleFormsBuiltins.show_view("ERROR");
        //     this.oracleFormsBuiltins.synchronize();
        //     this.oracleFormsBuiltins.go_block("DETERROR");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.hide_view("ERROR");
        // }
        console.log("Exiting CRFESTOPE_cterrxarea_vVerdet_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_RESUM;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_RESUM(BK_DATA);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'RESUMEN1');
    // END;
    //#endregion
    async CRFESTOPE_resumen1_queryProcedure() {
        console.log("Entering CRFESTOPE_resumen1_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_RESUM(BK_DATA);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "RESUMEN1");
        console.log("Exiting CRFESTOPE_resumen1_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_DETERRXAREA;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_DETERRXAREA(BK_DATA, :CTERRXAREA.AREA, :VAR_FECERRI, :VAR_FECERRF, :CTERRXAREA.USUARIO);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'DETERROR');
    // END;
    //#endregion
    async CRFESTOPE_deterror_queryProcedure() {
        console.log("Entering CRFESTOPE_deterror_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_DETERRXAREA(BK_DATA, CTERRXAREA.AREA, VAR_FECERRI, VAR_FECERRF, CTERRXAREA.USUARIO);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "DETERROR");
        console.log("Exiting CRFESTOPE_deterror_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_RESUM;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_RESUM2(BK_DATA);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'RESUMEN2');
    // END;
    //#endregion
    async CRFESTOPE_resumen2_queryProcedure() {
        console.log("Entering CRFESTOPE_resumen2_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_RESUM2(BK_DATA);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "RESUMEN2");
        console.log("Exiting CRFESTOPE_resumen2_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_OFICIAL;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_OFICIDESEM(BK_DATA, :V_OFCDESEM, :V_CTRLOFDES, :V_AGENCIAS, :V_CODUNI);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'CTOXOFIDESEM');
    // END;
    //#endregion
    async CRFESTOPE_ctoxofidesem_queryProcedure() {
        console.log("Entering CRFESTOPE_ctoxofidesem_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_OFICIDESEM(BK_DATA, V_OFCDESEM, V_CTRLOFDES, V_AGENCIAS, V_CODUNI);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "CTOXOFIDESEM");
        console.log("Exiting CRFESTOPE_ctoxofidesem_queryProcedure");
    }

    //#region PLSQL
    // BEGIN IF :V_VERDTLLE = 'S' THEN
    //  :VAR_OFIDES := :CTOXOFIDESEM.OFICIAL;
    //  :VAR_PASO   := :CTOXOFIDESEM.PASO;
    //  :VAR_OFICTO := NULL;
    //  :VAR_NOMBRE := :CTOXOFIDESEM.NOMBRE;
    //  SHOW_VIEW('SOLICI');
    //  SHOW_VIEW('DETALLE');
    //  SYNCHRONIZE;
    //  GO_BLOCK('CRTCONTROL');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('DETSOL');
    //  EXECUTE_QUERY;
    // ELSE
    //  :VAR_OFIDES := NULL;
    //  :VAR_PASO   := NULL;
    //  :VAR_OFICTO := NULL;
    //  :VAR_NOMBRE := NULL;
    //  HIDE_VIEW('SOLICI');
    //  HIDE_VIEW('DETALLE');
    // END IF; END;
    //#endregion
    async CRFESTOPE_ctoxofidesem_vVerdtlle_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_ctoxofidesem_vVerdtlle_whenCheckboxChanged");
        // if (V_VERDTLLE == "S") {
        //     this.CTOXOFIDESEM.VAR_OFIDES = this.CTOXOFIDESEM.OFICIAL;
        //     this.CTOXOFIDESEM.VAR_PASO = this.CTOXOFIDESEM.PASO;
        //     this.CTOXOFIDESEM.VAR_OFICTO = null;
        //     this.CTOXOFIDESEM.VAR_NOMBRE = this.CTOXOFIDESEM.NOMBRE;
        //     this.oracleFormsBuiltins.show_view("SOLICI");
        //     this.oracleFormsBuiltins.show_view("DETALLE");
        //     this.oracleFormsBuiltins.synchronize();
        //     this.oracleFormsBuiltins.go_block("CRTCONTROL");
        //     this.oracleFormsBuiltins.execute_query();
        //     this.oracleFormsBuiltins.go_block("DETSOL");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.CTOXOFIDESEM.VAR_OFIDES = null;
        //     this.CTOXOFIDESEM.VAR_PASO = null;
        //     this.CTOXOFIDESEM.VAR_OFICTO = null;
        //     this.CTOXOFIDESEM.VAR_NOMBRE = null;
        //     this.oracleFormsBuiltins.hide_view("SOLICI");
        //     this.oracleFormsBuiltins.hide_view("DETALLE");
        // }
        console.log("Exiting CRFESTOPE_ctoxofidesem_vVerdtlle_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TABESTAOPE;
    // BEGIN
    // PQBD_COL_ESTAOPE.POBTABESTAOPE(BK_DATA, :C003, :C004, :C005, :C030);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BCONGRAL');
    // END;
    //#endregion
    async CRFESTOPE_bcongral_queryProcedure() {
        console.log("Entering CRFESTOPE_bcongral_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.POBTABESTAOPE(BK_DATA, C003, C004, C005, C030);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BCONGRAL");
        console.log("Exiting CRFESTOPE_bcongral_queryProcedure");
    }

    //#region PLSQL
    // DECLARE 
    //  V_HORAS   NUMBER:=0;
    //  V_MINUTOS VARCHAR2(30);
    //  V_TOTAL   VARCHAR2(10);
    //  V_MIN   NUMBER;
    // BEGIN
    // BEGIN
    //  SELECT TIEMPO_DESCRI
    //     INTO :V_OPC1
    //   FROM CRTTIEMPO
    //   WHERE TIEMPO_CODIGO = :C023;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :V_OPC1 := NULL;
    // END;
    // BEGIN
    //  SELECT TIEMPO_DESCRI
    //     INTO :V_OPC2
    //   FROM CRTTIEMPO
    //   WHERE TIEMPO_CODIGO = :C024;
    // EXCEPTION WHEN NO_DATA_FOUND THEN  
    //   :V_OPC2 := NULL;
    // END;
    // BEGIN
    //  SELECT SOLICR_ESTSOL
    //     INTO :ESTSOL
    //   FROM CRTSOLICR
    //   WHERE SOLICR_OFCSOL = :C003
    //    AND  SOLICR_CODSOL = :C004
    //    AND  SOLICR_CODUNI = :C030;
    // EXCEPTION WHEN NO_DATA_FOUND THEN  
    //   :ESTSOL := NULL;
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
    //  OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS('INDICADOR_OPERACIONES',:SYSTEM.LAST_QUERY,V_OPCION);
    //  --COMMIT;
    //  :CONTADOR:=1;
    // END;
    // 
    // END IF;
    // END;
    // 
    // /*BEGIN
    //   BEGIN
    //  SELECT (:C010+:C011+:C012+
    //       :C013+:C014+:C015+
    //      :C016+:C017+:C018)
    //    INTO :V_SUBTOTAL
    //  FROM DUAL;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :V_SUBTOTAL := 0;
    //   END;
    //   BEGIN
    //    SELECT LENGTH (TO_CHAR(:V_SUBTOTAL))
    //      INTO V_TOTAL 
    //    FROM DUAL;
    //   IF V_TOTAL = 3 THEN  --QUIERE DECIR QUE SOLO TIENE MINUTOS
    //     IF SUBSTR(:V_SUBTOTAL,2,2) > 60 THEN
    //       V_HORAS := :V_SUBTOTAL+1;
    //      :V_SUBTOTAL := SUBSTR(:V_SUBTOTAL,2,2) - 60;
    //      IF :V_SUBTOTAL < 10 THEN
    //       V_MINUTOS := '0'||:V_SUBTOTAL;
    //      ELSE
    //       V_MINUTOS := SUBSTR(:V_SUBTOTAL,2,2);
    //      END IF;
    //    END IF;
    //    IF SUBSTR(:V_SUBTOTAL,2,2) < 10 THEN
    //     V_MINUTOS := '0'||:V_SUBTOTAL;
    //    ELSE
    //     V_MINUTOS := '.'||SUBSTR(:V_SUBTOTAL,2,2);
    //    END IF;
    //    :V_SUBTOTAL := TO_NUMBER(V_MINUTOS);
    //   ELSIF V_TOTAL = 4 THEN --TIENE UNA HORAS DE 1 A 9 HORAS ...
    //    IF SUBSTR(:V_SUBTOTAL,3,2) > 60 THEN
    //      V_HORAS := :V_SUBTOTAL+1;
    //      :V_SUBTOTAL := SUBSTR(:V_SUBTOTAL,3,2) - 60;
    //      IF :V_SUBTOTAL < 10 THEN
    //        V_MINUTOS := '0'||:V_SUBTOTAL;
    //      ELSE
    //       V_MINUTOS := SUBSTR(:V_SUBTOTAL,3,2);      
    //       V_HORAS   := SUBSTR(:V_SUBTOTAL,1,1);       
    //      END IF;
    //    END IF;
    //    IF SUBSTR(:V_SUBTOTAL,3,2) < 10 THEN
    //     V_MINUTOS := '0'||:V_SUBTOTAL;
    //    ELSE
    //     V_MINUTOS := SUBSTR(:V_SUBTOTAL,3,2);
    //     V_HORAS   := SUBSTR(:V_SUBTOTAL,1,1); 
    //    END IF;
    //       
    //    :V_SUBTOTAL := TO_NUMBER(SUBSTR(V_HORAS,1,1)||'.'||V_MINUTOS);
    //   ELSIF V_TOTAL = 5 THEN 
    //     IF SUBSTR(:V_SUBTOTAL,4,2) > 60 THEN
    //       V_HORAS := SUBSTR(:V_SUBTOTAL,1,2)+1;
    //       V_MIN   := SUBSTR(:V_SUBTOTAL,4,2) - 60;
    //      IF V_MIN < 10 THEN
    //        V_MINUTOS := '0'||V_MIN;
    //      ELSE
    //       V_MINUTOS := V_MIN;
    //      END IF;
    //    ELSIF  SUBSTR(:V_SUBTOTAL,4,2) < 10 THEN
    //        V_MINUTOS := '0'||SUBSTR(:V_SUBTOTAL,4,2);
    //        V_HORAS   := SUBSTR(:V_SUBTOTAL,1,2); 
    //    ELSIF  SUBSTR(:V_SUBTOTAL,4,2) > 10 THEN
    //       V_MINUTOS := SUBSTR(:V_SUBTOTAL,4,2);
    //        V_HORAS   := SUBSTR(:V_SUBTOTAL,1,2); 
    //    END IF;
    //        
    //    :V_SUBTOTAL := TO_NUMBER(V_HORAS||'.'||V_MINUTOS);
    //  END IF;   
    //   END; 
    //    --:V_SUBTOTAL := TO_NUMBER(SUBSTR(V_HORAS,1,2)||'.'||V_MINUTOS);
    // END;*/
    // END;
    //#endregion
    async CRFESTOPE_bcongral_postQuery() {
        console.log("Entering CRFESTOPE_bcongral_postQuery");
        let V_HORAS: number = 0;
        let V_MINUTOS: string = null;
        let V_TOTAL: string = null;
        let V_MIN: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("C023", C023);
        // call REST API
        const result1 = await Rest.post("/crfestope_bcongral/crfestope_bcongral_postquery_query1", payload1);
        // get values from result
        // V_OPC1 = result1[0].get("V_OPC1");
        if (result1 == null || result1.length == 0) {

            this.BCONGRAL.V_OPC1 = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("C024", C024);
        // call REST API
        const result2 = await Rest.post("/crfestope_bcongral/crfestope_bcongral_postquery_query2", payload2);
        // get values from result
        // V_OPC2 = result2[0].get("V_OPC2");
        if (result2 == null || result2.length == 0) {

            this.BCONGRAL.V_OPC2 = null;
        }

        // construct payload
        let payload3 = new Map();
        // payload3.set("C003", C003);
        // payload3.set("C004", C004);
        // payload3.set("C030", C030);
        // call REST API
        const result3 = await Rest.post("/crfestope_bcongral/crfestope_bcongral_postquery_query3", payload3);
        // get values from result
        // ESTSOL = result3[0].get("ESTSOL");
        if (result3 == null || result3.length == 0) {

            this.BCONGRAL.ESTSOL = null;
        }

        {

            let T_RESPUESTA: number = null;
            let V_OPCION: string = null;
            // if (CONTADOR == null ? 0 : CONTADOR == 0) {
            //     let result4 = new Map();
            //     try {

            //         // construct payload
            //         let payload4 = new Map();
            //         payload4.set("CURRENT_FORM", SYSTEM.CURRENT_FORM);
            //         // call REST API
            //         const result4 = await Rest.post("/crfestope_bcongral/crfestope_bcongral_postquery_query4", payload4);
            //         // get values from result
            //         V_OPCION = result4[0].get("V_OPCION");
            //     } catch (ex) {

            //         V_OPCION = null;
            //     }

            //     // CRFESTOPE_OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS("INDICADOR_OPERACIONES", this._SYSTEM_SERVICE.get("LAST_QUERY"), V_OPCION);
            //     this.BCONGRAL.CONTADOR = 1;
            // }
        }

        console.log("Exiting CRFESTOPE_bcongral_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_RESUMERRRADICA;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_RESUMERRRADICA(BK_DATA, :V_FECRADI, :V_FECRAF, :V_OFIDESEMRAD, :V_AGENRAD, :V_CODUNI);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'PRESERRADICA');
    // END;
    //#endregion
    async CRFESTOPE_preserradica_queryProcedure() {
        console.log("Entering CRFESTOPE_preserradica_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_RESUMERRRADICA(BK_DATA, V_FECRADI, V_FECRAF, V_OFIDESEMRAD, V_AGENRAD, V_CODUNI);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "PRESERRADICA");
        console.log("Exiting CRFESTOPE_preserradica_queryProcedure");
    }

    //#region PLSQL
    // BEGIN IF :V_VERERROR = 'S' THEN 
    //   :V_FLAGERR := :PRESERRADICA.CODERROR;
    //    GO_BLOCK('PCRTRADICA');
    //     EXECUTE_QUERY;
    // ELSE
    //  :V_VERERROR:= 'N';
    //   :V_FLAGERR := '%%%';
    //   GO_BLOCK('PCRTRADICA');
    //   CLEAR_BLOCK;
    //   GO_BLOCK('PRESERRADICA');
    // END IF; END;
    //#endregion
    async CRFESTOPE_preserradica_vVererror_whenCheckboxChanged() {
        console.log("Entering CRFESTOPE_preserradica_vVererror_whenCheckboxChanged");
        // if (V_VERERROR == "S") {
        //     this.PRESERRADICA.V_FLAGERR = this.PRESERRADICA.CODERROR;
        //     this.oracleFormsBuiltins.go_block("PCRTRADICA");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.PRESERRADICA.V_VERERROR = "N";
        //     this.PRESERRADICA.V_FLAGERR = "%%%";
        //     this.oracleFormsBuiltins.go_block("PCRTRADICA");
        //     this.oracleFormsBuiltins.clear_block();
        //     this.oracleFormsBuiltins.go_block("PRESERRADICA");
        // }
        console.log("Exiting CRFESTOPE_preserradica_vVererror_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTERRXCTOS DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTERRXCTOS_CUR IS      
    //     SELECT 1 FROM CRTERRXCTOS C     
    //     WHERE C.ERRCTO_OFCSOL = :CTRESTAXSOL.ESTASOL_OFICINA AND C.ERRCTO_CODSOL = :CTRESTAXSOL.ESTASOL_SOLICITUD AND C.ERRCTO_TIPCRE = :CTRESTAXSOL.ESTASOL_TIPOCRE AND C.ERRCTO_PLANEA = :CTRESTAXSOL.ESTASOL_PLANEA AND C.ERRXCTO_CODUNI = :CTRESTAXSOL.ESTASOL_CODUNI;
    //   --
    //   -- END CRTERRXCTOS DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTERRXCTOS DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTERRXCTOS_CUR;     
    //   FETCH CRTERRXCTOS_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTERRXCTOS_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTERRXCTOS_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTERRXCTOS_CUR;
    //   --
    //   -- END CRTERRXCTOS DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFESTOPE_ctrestaxsol_onCheckDeleteMaster() {
        console.log("Entering CRFESTOPE_ctrestaxsol_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFESTOPE_ctrestaxsol_onCheckDeleteMaster");
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
    //   -- BEGIN CRTERRXCTOS DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CTRESTAXSOL.ESTASOL_OFICINA IS NOT NULL) OR (:CTRESTAXSOL.ESTASOL_SOLICITUD IS NOT NULL) OR (:CTRESTAXSOL.ESTASOL_TIPOCRE IS NOT NULL) OR (:CTRESTAXSOL.ESTASOL_PLANEA IS NOT NULL) OR (:CTRESTAXSOL.ESTASOL_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CTRESTAXSOL.CTRESTAXSOL_CRTERRXCTOS');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTERRXCTOS');   
    //   END IF;
    //   --
    //   -- END CRTERRXCTOS DETAIL PROGRAM SECTION
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
    async CRFESTOPE_ctrestaxsol_onPopulateDetails() {
        console.log("Entering CRFESTOPE_ctrestaxsol_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((((((this.CTRESTAXSOL.ESTASOL_OFICINA != null) || (this.CTRESTAXSOL.ESTASOL_SOLICITUD != null)) || (this.CTRESTAXSOL.ESTASOL_TIPOCRE != null)) || (this.CTRESTAXSOL.ESTASOL_PLANEA != null)) || (this.CTRESTAXSOL.ESTASOL_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CTRESTAXSOL.CTRESTAXSOL_CRTERRXCTOS");
            // CRFESTOPE_QUERY_MASTER_DETAILS(REL_ID, "CRTERRXCTOS");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFESTOPE_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFESTOPE_ctrestaxsol_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE 
    //  V_HORAS    NUMBER:=0;
    //  V_MINUTOS  VARCHAR2(2);
    //  V_TOTAL    VARCHAR2(5);
    //  V_SUBTOTAL NUMBER;
    // BEGIN 
    //   BEGIN
    //   SELECT PASO_DESCRIP 
    //     INTO :DESCRPASO
    //   FROM CRTSOLPASO
    //   WHERE PASO_CODIGO = :ESTASOL_PASO;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //     :DESCRPASO := NULL;
    //   END;
    //  /* --CALCULO DEL TOTAL
    //    BEGIN
    //  SELECT SUM(ESTASOL_TIEMPO)
    //    INTO V_SUBTOTAL
    //  FROM CTRESTAXSOL
    //  WHERE ESTASOL_OFICINA   = :CRTENCASOL.OFC
    //   AND  ESTASOL_SOLICITUD = :CRTENCASOL.SOL
    //   AND  ESTASOL_PLANEA    = :CRTENCASOL.PLANEA;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //   V_SUBTOTAL := 0;
    //   END;
    //   BEGIN
    //    SELECT LENGTH (TO_CHAR(V_SUBTOTAL))
    //      INTO V_TOTAL 
    //    FROM DUAL;
    //   IF V_TOTAL = 3 THEN  --QUIERE DECIR QUE SOLO TIENE MINUTOS
    //     IF SUBSTR(V_SUBTOTAL,2,2) > 60 THEN
    //       V_HORAS := V_SUBTOTAL+1;
    //       V_SUBTOTAL := SUBSTR(V_SUBTOTAL,2,2) - 60;
    //    END IF;
    //    IF V_SUBTOTAL < 10 THEN
    //     V_MINUTOS := '0'||V_SUBTOTAL;
    //    ELSE
    //     V_MINUTOS := V_SUBTOTAL;
    //    END IF;
    //    :VAR_TOTALPRO := TO_NUMBER(V_MINUTOS);
    //  ELSIF V_TOTAL = 4 THEN --TIENE UNA HORAS DE 1 A 9 HORAS ...
    //    IF SUBSTR(V_SUBTOTAL,3,2) > 60 THEN
    //      V_HORAS := V_SUBTOTAL+1;
    //      V_SUBTOTAL := SUBSTR(V_SUBTOTAL,3,2) - 60;
    //    END IF;
    //    IF V_SUBTOTAL < 10 THEN
    //     V_MINUTOS := '0'||V_SUBTOTAL;
    //    ELSE
    //     V_MINUTOS := V_SUBTOTAL;
    //    END IF;
    //    :VAR_TOTALPRO := TO_NUMBER(SUBSTR(V_HORAS,1,1)||'.'||V_MINUTOS);
    //  ELSIF V_TOTAL = 5 THEN 
    //     IF SUBSTR(V_SUBTOTAL,4,2) > 60 THEN
    //       V_HORAS := V_SUBTOTAL+1;
    //       V_SUBTOTAL := SUBSTR(V_SUBTOTAL,4,2) - 60;
    //    END IF;
    //    IF V_SUBTOTAL < 10 THEN
    //      V_MINUTOS := '0'||V_SUBTOTAL;
    //    ELSE
    //     V_MINUTOS := V_SUBTOTAL;
    //    END IF;
    //    :VAR_TOTALPRO := TO_NUMBER(SUBSTR(V_HORAS,1,2)||'.'||V_MINUTOS);
    //  END IF;   
    //   END; */
    // END;
    //#endregion
    async CRFESTOPE_ctrestaxsol_postQuery() {
        console.log("Entering CRFESTOPE_ctrestaxsol_postQuery");
        let V_HORAS: number = 0;
        let V_MINUTOS: string = null;
        let V_TOTAL: string = null;
        let V_SUBTOTAL: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("ESTASOL_PASO", ESTASOL_PASO);
        // call REST API
        const result1 = await Rest.post("/crfestope_ctrestaxsol/crfestope_ctrestaxsol_postquery_query1", payload1);
        // get values from result
        // DESCRPASO = result1[0].get("DESCRPASO");
        if (result1 == null || result1.length == 0) {

            this.CTRESTAXSOL.DESCRPASO = null;
        }

        console.log("Exiting CRFESTOPE_ctrestaxsol_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_RESUMRADICA;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_RESUMRADICA(BK_DATA, :V_FECRADI, :V_FECRAF, :V_OFIDESEMRAD, :V_AGENRAD, :V_CODUNI);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'PRESUMRADICA');
    // END;
    //#endregion
    async CRFESTOPE_presumradica_queryProcedure() {
        console.log("Entering CRFESTOPE_presumradica_queryProcedure");
        let BK_DATA: null = null;
        // CRFESTOPE_PQBD_COL_ESTAOPE.PBD_RESUMRADICA(BK_DATA, V_FECRADI, V_FECRAF, V_OFIDESEMRAD, V_AGENRAD, V_CODUNI);
        // CRFESTOPE_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "PRESUMRADICA");
        console.log("Exiting CRFESTOPE_presumradica_queryProcedure");
    }

    //#region PLSQL
    // BEGIN
    //  :V_FLAGERR := '%%%';
    //   GO_BLOCK('PCRTRADICA');
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async CRFESTOPE_presumradica_vBtonver_whenButtonPressed() {
        console.log("Entering CRFESTOPE_presumradica_vBtonver_whenButtonPressed");
        // this.PRESUMRADICA.V_FLAGERR = "%%%";
        this.oracleFormsBuiltins.go_block("PCRTRADICA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFESTOPE_presumradica_vBtonver_whenButtonPressed");
    }

}

