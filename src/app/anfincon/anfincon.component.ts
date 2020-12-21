import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BVARIABLE, VALIDACION, INSERCION, COVPIEDRA, ANTTINCONS, BNEGADAS, BAPLAZADAS } from './anfincon_models';
import { TOOLBAR, BASE } from '../anfbater/anfbater_models';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';


@Component({
  selector: 'app-anfincon',
  templateUrl: './anfincon.component.html',
})
export class AnfinconComponent implements OnInit {
  @Input() public PARAMETER: Map<string, string> = new Map();
  currentBlock: BlockComponent;
  currentItem: ItemInputComponent;
  @ViewChildren(BlockComponent) blockComponents;
  constructor(private _SYSTEM_SERVICE: SystemService) {
  }
  currentCanvas: string = "PAGE_1"
  visibleCanvases: []
  isKeypressProcessing: boolean;

  public BVARIABLE: BVARIABLE = new BVARIABLE();
  public VALIDACION: VALIDACION = new VALIDACION();
  public INSERCION: INSERCION = new INSERCION();
  public COVPIEDRA: COVPIEDRA = new COVPIEDRA();
  public ANTTINCONS: ANTTINCONS = new ANTTINCONS();
  public BNEGADAS: BNEGADAS = new BNEGADAS();
  public TOOLBAR: TOOLBAR = new TOOLBAR();
  public BAPLAZADAS: BAPLAZADAS = new BAPLAZADAS();
  public BASE: BASE = new BASE();
  public MESSAGE_LINE: string;
  async ngOnInit() {

  }
  //#region PLSQL
  // DECLARE
  //  V_ERRORES VARCHAR2(5);
  //  VBOTON NUMBER;
  // BEGIN
  //   -- DATOS DE REFERENCIA
  //   IF this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") = 'DATREF' THEN
  //     HIDE_VIEW('PAGE_3');
  //     
  //    GO_BLOCK('ANTTLLAMA');   
  //   END IF; 
  //   -- SOLICITUD
  //   IF this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") = 'VSOLICITUD' THEN
  //    GO_BLOCK('ANTTSOLLAMA');  
  //    EXECUTE_QUERY; 
  //     
  //   END IF;
  // 
  //   --ACLARACIONES ESTADOS FINANCIEROS
  //   IF this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") = 'ACLALLAMADA' THEN
  //     HIDE_VIEW('PAGE_3');
  //     
  //     GO_BLOCK('ANTTCUENT'); 
  //     GO_BLOCK('ANTTPERIO');     
  //          
  //   END IF;
  //   --CARTAS DE LLAMADA
  //   IF this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") = 'ACCARTAS' THEN
  //     SHOW_VIEW('PAGE_3');
  //     
  //     GO_BLOCK('ANTTCARTA');       
  //   END IF;   
  //   --ANALISIS Y RECOMENDACIONES
  //   IF this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") = 'ACANALISIS' THEN
  //      HIDE_VIEW('PAGE_3');
  //     
  //      GO_BLOCK('ANTTLLAMA');       
  //   END IF;
  //    --RESULTADOS
  //   IF this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") = 'ACRESULTADOS' THEN
  //      HIDE_VIEW('PAGE_3');
  //     
  //      GO_BLOCK('ANTTLLAMA');       
  //   END IF;
  //    --FORTALEZAS Y DEBILIDADES
  //   IF this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") = 'ACDEBILIDADES' THEN
  //      HIDE_VIEW('PAGE_3');
  //     
  //      GO_BLOCK('ANTTLLAMA');       
  //    END IF;
  //    
  // 
  // END;
  //#endregion
  async ANFINCON_whenTabPageChanged() {
    console.log("Entering ANFINCON_whenTabPageChanged");
    let V_ERRORES: string = null;
    let VBOTON: number = null;
    if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "DATREF") {
      //new OracleFormsBuiltins(this).hide_view("PAGE_3");
      new OracleFormsBuiltins(this).go_block("ANTTLLAMA");
    }
    if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "VSOLICITUD") {
      new OracleFormsBuiltins(this).go_block("ANTTSOLLAMA");
      new OracleFormsBuiltins(this).execute_query();
    }
    if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "ACLALLAMADA") {
      //new OracleFormsBuiltins(this).hide_view("PAGE_3");
      new OracleFormsBuiltins(this).go_block("ANTTCUENT");
      new OracleFormsBuiltins(this).go_block("ANTTPERIO");
    }
    if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "ACCARTAS") {
      //new OracleFormsBuiltins(this).show_view("PAGE_3");
      new OracleFormsBuiltins(this).go_block("ANTTCARTA");
    }
    if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "ACANALISIS") {
      //new OracleFormsBuiltins(this).hide_view("PAGE_3");
      new OracleFormsBuiltins(this).go_block("ANTTLLAMA");
    }
    if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "ACRESULTADOS") {
      //new OracleFormsBuiltins(this).hide_view("PAGE_3");
      new OracleFormsBuiltins(this).go_block("ANTTLLAMA");
    }
    if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "ACDEBILIDADES") {
      //new OracleFormsBuiltins(this).hide_view("PAGE_3");
      new OracleFormsBuiltins(this).go_block("ANTTLLAMA");
    }
    console.log("Exiting ANFINCON_whenTabPageChanged");
  }

  //#region PLSQL
  // BEGIN LIST_VALUES; END;
  //#endregion
  async ANFINCON_whenMouseDoubleclick() {
    console.log("Entering ANFINCON_whenMouseDoubleclick");
    //new OracleFormsBuiltins(this).list_values();
    console.log("Exiting ANFINCON_whenMouseDoubleclick");
  }

  //#region PLSQL
  // BEGIN PR_INICIAR;
  // 
  // ---------------------------------------------------------------------
  // -- LOGO
  // ---------------------------------------------------------------------
  // :BASE.BASE_DAT := UPPER(:BASE.BD) ;
  // DECLARE 
  //  V_IMAGEN VARCHAR2(20);
  // BEGIN 
  //     
  //  IF :PARAMETER.P_OFICINA IS NOT NULL THEN 
  //    BEGIN
  //      SELECT COMPAN_NOLOGF 
  //        INTO V_IMAGEN
  //        FROM SGCOMPAN 
  //       WHERE COMPAN_CODCOM=:PARAMETER.P_OFICINA;
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
  // ------------------------------------------------; END;
  //#endregion
  async ANFINCON_whenNewFormInstance() {
    console.log("Entering ANFINCON_whenNewFormInstance");
    this.ANFINCON_PR_INICIAR();
    this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
    {

      let V_IMAGEN: string = null;
      if ((this.PARAMETER.get("P_OFICINA") != null)) {
        // construct payload
        let payload1 = new Map();
        payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
        // call REST API
        let result1 = await Rest.post("/anfincon/anfincon_whennewforminstance_query1", payload1);
        // get values from result
        V_IMAGEN = result1[0].get("V_IMAGEN");
        if (result1 == null || result1.length == 0) {

          V_IMAGEN = "LOGO_LEASFORM.GIF";
        }

        new OracleFormsBuiltins(this).read_image_file(V_IMAGEN, "GIF", "BASE.LOGO");
      }
      else {
        new OracleFormsBuiltins(this).read_image_file("LOGO_LEASFORM.GIF", "GIF", "BASE.LOGO");
      }
    }

    console.log("Exiting ANFINCON_whenNewFormInstance");
  }

  //#region PLSQL
  // BEGIN
  //   PANTALLA;
  //   --PINCIARSGRDADOFCNAS;
  // END;
  //#endregion
  async ANFINCON_preForm() {
    console.log("Entering ANFINCON_preForm");
    //ANFINCON_PANTALLA();
    console.log("Exiting ANFINCON_preForm");
  }

  //#region PLSQL
  // BEGIN IF NOT ID_NULL(FIND_TIMER('AUTO_COMMIT')) THEN
  //     DELETE_TIMER('AUTO_COMMIT');    
  // END IF;
  // 
  // EXIT_FORM; END;
  //#endregion
  async ANFINCON_keyExit() {
    console.log("Entering ANFINCON_keyExit");
    // if ((!new OracleFormsBuiltins(this).id_null(new OracleFormsBuiltins(this).find_timer("AUTO_COMMIT")))) {
    //   new OracleFormsBuiltins(this).delete_timer("AUTO_COMMIT");
    // }
    //new OracleFormsBuiltins(this).exit_form();
    console.log("Exiting ANFINCON_keyExit");
  }

  //#region PLSQL
  // DECLARE
  //  TB_PG_ID      TAB_PAGE;
  //   TB_PG_ID_1    TAB_PAGE; 
  //   TB_PG_ID_2    TAB_PAGE; 
  //  
  // BEGIN 
  //  
  //  
  //  TB_PG_ID    := FIND_TAB_PAGE('EXISTENTES');
  //  TB_PG_ID_1  := FIND_TAB_PAGE('INSERTAR');
  //  TB_PG_ID_2  := FIND_TAB_PAGE('CREACION');
  // 
  //  
  //  P_INSERCION (:BVARIABLE.TERCERO);
  //   
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID_1,VISIBLE, PROPERTY_TRUE);
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID  ,VISIBLE, PROPERTY_FALSE);   
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID_2,VISIBLE, PROPERTY_FALSE);
  //  
  //  
  // END; 
  //#endregion
  async ANFINCON_bvariable_crear_whenButtonPressed() {
    console.log("Entering ANFINCON_bvariable_crear_whenButtonPressed");
    let TB_PG_ID: null = null;
    let TB_PG_ID_1: null = null;
    let TB_PG_ID_2: null = null;
    // TB_PG_ID = new OracleFormsBuiltins(this).find_tab_page("EXISTENTES");
    // TB_PG_ID_1 = new OracleFormsBuiltins(this).find_tab_page("INSERTAR");
    // TB_PG_ID_2 = new OracleFormsBuiltins(this).find_tab_page("CREACION");
    // ANFINCON_P_INSERCION(BVARIABLE.TERCERO);
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_1, VISIBLE, PROPERTY_TRUE);
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID, VISIBLE, PROPERTY_FALSE);
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_2, VISIBLE, PROPERTY_FALSE);
    console.log("Exiting ANFINCON_bvariable_crear_whenButtonPressed");
  }

  //#region PLSQL
  // DECLARE 
  //  
  //   VCONDICION    VARCHAR2(2000);
  //   TB_PG_ID      TAB_PAGE;
  //   TB_PG_ID_1    TAB_PAGE; 
  //   TB_PG_ID_2    TAB_PAGE; 
  //   V_ESTADO      VARCHAR2(1);
  // BEGIN
  //  
  //  
  //  TB_PG_ID    := FIND_TAB_PAGE('EXISTENTES');
  //  TB_PG_ID_1  := FIND_TAB_PAGE('INSERTAR');
  //  TB_PG_ID_2  := FIND_TAB_PAGE('CREACION'); 
  //   
  //  
  //  IF :VALIDACION.SELECCION IS NULL THEN  
  //    LIB$DTNERFRMA('POR FAVOR SELECCIONAR UNA INCONSISTENCIA PARA CONTINUAR.');  
  //   
  //  END IF;
  //  
  //  
  //  
  //   VCONDICION := 'INCONS_CONSEC = ' || :VALIDACION.CONSECUTIVO;
  //   
  //   SET_BLOCK_PROPERTY('ANTTINCONS', DEFAULT_WHERE, VCONDICION);
  //   
  //  GO_BLOCK('ANTTINCONS');
  //  
  //  EXECUTE_QUERY;
  //  
  // 
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID_2,VISIBLE, PROPERTY_TRUE);
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID  ,VISIBLE, PROPERTY_FALSE);    
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID_1,VISIBLE, PROPERTY_FALSE);
  //  
  //  
  //  BEGIN
  //   SELECT INCONS_INESTA
  //   INTO  V_ESTADO
  //   FROM  ANTTINCONS
  //   WHERE INCONS_CONSEC=:VALIDACION.CONSECUTIVO; 
  //  EXCEPTION WHEN NO_DATA_FOUND THEN V_ESTADO := 'F';
  //  END;
  //  
  //  
  //  IF V_ESTADO = 'A' THEN
  //  
  //   SET_BLOCK_PROPERTY('ANTTINCONS',INSERT_ALLOWED,PROPERTY_TRUE); 
  //   SET_BLOCK_PROPERTY('ANTTINCONS',UPDATE_ALLOWED,PROPERTY_TRUE); 
  //   SET_BLOCK_PROPERTY('ANTTINCONS',DELETE_ALLOWED,PROPERTY_TRUE);
  //   
  //  ELSE 
  //   
  //   SET_BLOCK_PROPERTY('ANTTINCONS',INSERT_ALLOWED,PROPERTY_FALSE); 
  //   SET_BLOCK_PROPERTY('ANTTINCONS',UPDATE_ALLOWED,PROPERTY_FALSE); 
  //   SET_BLOCK_PROPERTY('ANTTINCONS',DELETE_ALLOWED,PROPERTY_FALSE);
  // 
  //  END IF;
  //  
  //  
  //   
  //    
  //   
  // END;
  //#endregion
  async ANFINCON_bvariable_consultar_whenButtonPressed() {
    console.log("Entering ANFINCON_bvariable_consultar_whenButtonPressed");
    let VCONDICION: string = null;
    let TB_PG_ID: null = null;
    let TB_PG_ID_1: null = null;
    let TB_PG_ID_2: null = null;
    let V_ESTADO: string = null;
    // TB_PG_ID = new OracleFormsBuiltins(this).find_tab_page("EXISTENTES");
    // TB_PG_ID_1 = new OracleFormsBuiltins(this).find_tab_page("INSERTAR");
    // TB_PG_ID_2 = new OracleFormsBuiltins(this).find_tab_page("CREACION");
    if ((this.VALIDACION.SELECCION == null)) {
      // ANFINCON_LIB$DTNERFRMA("POR FAVOR SELECCIONAR UNA INCONSISTENCIA PARA CONTINUAR.");
    }
    VCONDICION = "INCONS_CONSEC = " + this.VALIDACION.CONSECUTIVO;
    // new OracleFormsBuiltins(this).set_block_property("ANTTINCONS", DEFAULT_WHERE, VCONDICION);
    // new OracleFormsBuiltins(this).go_block("ANTTINCONS");
    // new OracleFormsBuiltins(this).execute_query();
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_2, VISIBLE, PROPERTY_TRUE);
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID, VISIBLE, PROPERTY_FALSE);
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_1, VISIBLE, PROPERTY_FALSE);
    // construct payload
    let payload1 = new Map();
    payload1.set("CONSECUTIVO", this.VALIDACION.CONSECUTIVO);
    // call REST API
    let result1 = await Rest.post("/anfincon_bvariable/anfincon_bvariable_consultar_whenbuttonpressed_query1", payload1);
    // get values from result
    V_ESTADO = result1[0].get("V_ESTADO");
    if (result1 == null || result1.length == 0) {

      V_ESTADO = "F";
    }

    if (V_ESTADO == "A") {
      // new OracleFormsBuiltins(this).set_block_property("ANTTINCONS", INSERT_ALLOWED, PROPERTY_TRUE);
      // new OracleFormsBuiltins(this).set_block_property("ANTTINCONS", UPDATE_ALLOWED, PROPERTY_TRUE);
      // new OracleFormsBuiltins(this).set_block_property("ANTTINCONS", DELETE_ALLOWED, PROPERTY_TRUE);
    }
    else {
      // new OracleFormsBuiltins(this).set_block_property("ANTTINCONS", INSERT_ALLOWED, PROPERTY_FALSE);
      // new OracleFormsBuiltins(this).set_block_property("ANTTINCONS", UPDATE_ALLOWED, PROPERTY_FALSE);
      // new OracleFormsBuiltins(this).set_block_property("ANTTINCONS", DELETE_ALLOWED, PROPERTY_FALSE);
    }
    console.log("Exiting ANFINCON_bvariable_consultar_whenButtonPressed");
  }

  //#region PLSQL
  // DECLARE
  //  V_CANTIDAD    NUMBER;
  //  TB_PG_ID      TAB_PAGE;
  //   TB_PG_ID_1    TAB_PAGE; 
  //   TB_PG_ID_2    TAB_PAGE; 
  //  
  // BEGIN 
  //  
  //  GO_BLOCK('COVPIEDRA');
  //  EXECUTE_QUERY;
  //  
  //  TB_PG_ID    := FIND_TAB_PAGE('EXISTENTES');
  //  TB_PG_ID_1  := FIND_TAB_PAGE('INSERTAR');
  //  TB_PG_ID_2  := FIND_TAB_PAGE('CREACION');
  // 
  //  
  //  BEGIN
  //   SELECT COUNT(*)
  //    INTO V_CANTIDAD
  //   FROM ANTTINCONS WHERE 
  //    INCONS_TERCER = :BVARIABLE.TERCERO;
  //   EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTIDAD := 0 ;
  //  END;
  //  
  //  
  //  IF (V_CANTIDAD = 0) OR (V_CANTIDAD IS NULL) THEN 
  //      
  //   P_INSERCION (:BVARIABLE.TERCERO);  
  //   SET_TAB_PAGE_PROPERTY(TB_PG_ID_1,VISIBLE, PROPERTY_TRUE);
  //   SET_TAB_PAGE_PROPERTY(TB_PG_ID  ,VISIBLE, PROPERTY_FALSE);   
  //   SET_TAB_PAGE_PROPERTY(TB_PG_ID_2,VISIBLE, PROPERTY_FALSE);
  //   
  //  ELSE
  //   
  //   P_EXISTENTES (:BVARIABLE.TERCERO);  
  //   SET_TAB_PAGE_PROPERTY(TB_PG_ID  ,VISIBLE, PROPERTY_TRUE);
  //   SET_TAB_PAGE_PROPERTY(TB_PG_ID_1,VISIBLE, PROPERTY_FALSE);
  //   SET_TAB_PAGE_PROPERTY(TB_PG_ID_2,VISIBLE, PROPERTY_FALSE);
  //   
  //  END IF;
  //  
  //  
  //  
  // END; 
  //#endregion
  async ANFINCON_bvariable_tercero_keyNextItem() {
    console.log("Entering ANFINCON_bvariable_tercero_keyNextItem");
    let V_CANTIDAD: number = null;
    let TB_PG_ID: null = null;
    let TB_PG_ID_1: null = null;
    let TB_PG_ID_2: null = null;
    new OracleFormsBuiltins(this).go_block("COVPIEDRA");
    new OracleFormsBuiltins(this).execute_query();
    // TB_PG_ID = new OracleFormsBuiltins(this).find_tab_page("EXISTENTES");
    // TB_PG_ID_1 = new OracleFormsBuiltins(this).find_tab_page("INSERTAR");
    // TB_PG_ID_2 = new OracleFormsBuiltins(this).find_tab_page("CREACION");
    // construct payload
    let payload1 = new Map();
    payload1.set("TERCERO", this.BVARIABLE.TERCERO);
    // call REST API
    let result1 = await Rest.post("/anfincon_bvariable/anfincon_bvariable_tercero_keynextitem_query1", payload1);
    // get values from result
    V_CANTIDAD = result1[0].get("V_CANTIDAD");
    if (result1 == null || result1.length == 0) {

      V_CANTIDAD = 0;
    }

    if ((V_CANTIDAD == 0 || (V_CANTIDAD == null))) {
      // ANFINCON_P_INSERCION(BVARIABLE.TERCERO);
      // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_1, VISIBLE, PROPERTY_TRUE);
      // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID, VISIBLE, PROPERTY_FALSE);
      // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_2, VISIBLE, PROPERTY_FALSE);
    }
    else {
      // ANFINCON_P_EXISTENTES(BVARIABLE.TERCERO);
      // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID, VISIBLE, PROPERTY_TRUE);
      // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_1, VISIBLE, PROPERTY_FALSE);
      // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_2, VISIBLE, PROPERTY_FALSE);
    }
    console.log("Exiting ANFINCON_bvariable_tercero_keyNextItem");
  }

  //#region PLSQL
  // DECLARE 
  //  
  //   VCONDICION VARCHAR2(2000);
  //   TB_PG_ID      TAB_PAGE;
  //   TB_PG_ID_1    TAB_PAGE; 
  //   TB_PG_ID_2    TAB_PAGE; 
  //   
  // BEGIN
  //  
  //  
  //  SET_BLOCK_PROPERTY('ANTTINCONS',INSERT_ALLOWED,PROPERTY_TRUE); 
  //  SET_BLOCK_PROPERTY('ANTTINCONS',UPDATE_ALLOWED,PROPERTY_TRUE); 
  //  SET_BLOCK_PROPERTY('ANTTINCONS',DELETE_ALLOWED,PROPERTY_TRUE);
  //  
  //   
  //  P_INSERTAR;
  //  
  //  TB_PG_ID    := FIND_TAB_PAGE('EXISTENTES');
  //  TB_PG_ID_1  := FIND_TAB_PAGE('INSERTAR');
  //  TB_PG_ID_2  := FIND_TAB_PAGE('CREACION'); 
  //  
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID_2,VISIBLE, PROPERTY_TRUE);
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID  ,VISIBLE, PROPERTY_FALSE);   
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID_1,VISIBLE, PROPERTY_FALSE);
  //  
  //  
  //   
  //   
  // END;
  //#endregion
  async ANFINCON_bvariable_siguiente_whenButtonPressed() {
    console.log("Entering ANFINCON_bvariable_siguiente_whenButtonPressed");
    let VCONDICION: string = null;
    let TB_PG_ID: null = null;
    let TB_PG_ID_1: null = null;
    let TB_PG_ID_2: null = null;
    // new OracleFormsBuiltins(this).set_block_property("ANTTINCONS", INSERT_ALLOWED, PROPERTY_TRUE);
    // new OracleFormsBuiltins(this).set_block_property("ANTTINCONS", UPDATE_ALLOWED, PROPERTY_TRUE);
    // new OracleFormsBuiltins(this).set_block_property("ANTTINCONS", DELETE_ALLOWED, PROPERTY_TRUE);
    // ANFINCON_P_INSERTAR();
    // TB_PG_ID = new OracleFormsBuiltins(this).find_tab_page("EXISTENTES");
    // TB_PG_ID_1 = new OracleFormsBuiltins(this).find_tab_page("INSERTAR");
    // TB_PG_ID_2 = new OracleFormsBuiltins(this).find_tab_page("CREACION");
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_2, VISIBLE, PROPERTY_TRUE);
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID, VISIBLE, PROPERTY_FALSE);
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_1, VISIBLE, PROPERTY_FALSE);
    console.log("Exiting ANFINCON_bvariable_siguiente_whenButtonPressed");
  }

  //#region PLSQL
  // DECLARE
  //  TB_PG_ID      TAB_PAGE;
  //   TB_PG_ID_1    TAB_PAGE; 
  //   TB_PG_ID_2    TAB_PAGE; 
  //  
  // BEGIN 
  //  
  //  
  //  TB_PG_ID    := FIND_TAB_PAGE('EXISTENTES');
  //  TB_PG_ID_1  := FIND_TAB_PAGE('INSERTAR');
  //  TB_PG_ID_2  := FIND_TAB_PAGE('CREACION');
  // 
  //  
  //  P_DUPLICAR (:BVARIABLE.TERCERO);
  //   
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID_1,VISIBLE, PROPERTY_TRUE);
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID  ,VISIBLE, PROPERTY_FALSE);   
  //  SET_TAB_PAGE_PROPERTY(TB_PG_ID_2,VISIBLE, PROPERTY_FALSE);
  //  
  //  
  // END; 
  //#endregion
  async ANFINCON_bvariable_duplicar_whenButtonPressed() {
    console.log("Entering ANFINCON_bvariable_duplicar_whenButtonPressed");
    let TB_PG_ID: null = null;
    let TB_PG_ID_1: null = null;
    let TB_PG_ID_2: null = null;
    // TB_PG_ID = new OracleFormsBuiltins(this).find_tab_page("EXISTENTES");
    // TB_PG_ID_1 = new OracleFormsBuiltins(this).find_tab_page("INSERTAR");
    // TB_PG_ID_2 = new OracleFormsBuiltins(this).find_tab_page("CREACION");
    // ANFINCON_P_DUPLICAR(BVARIABLE.TERCERO);
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_1, VISIBLE, PROPERTY_TRUE);
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID, VISIBLE, PROPERTY_FALSE);
    // new OracleFormsBuiltins(this).set_tab_page_property(TB_PG_ID_2, VISIBLE, PROPERTY_FALSE);
    console.log("Exiting ANFINCON_bvariable_duplicar_whenButtonPressed");
  }

  //#region PLSQL
  // BEGIN SET_ITEM_PROPERTY('PIEDRA_IMAGEN', TOOLTIP_TEXT,NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT));
  // SYNCHRONIZE; END;
  //#endregion
  async ANFINCON_covpiedra_postQuery() {
    console.log("Entering ANFINCON_covpiedra_postQuery");
    // new OracleFormsBuiltins(this).set_item_property("PIEDRA_IMAGEN", TOOLTIP_TEXT, PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
    // new OracleFormsBuiltins(this).synchronize();
    console.log("Exiting ANFINCON_covpiedra_postQuery");
  }

  //#region PLSQL
  // BEGIN PR_AYUPIEDRA; END;
  //#endregion
  async ANFINCON_covpiedra_piedraImagen_whenMouseDoubleclick() {
    console.log("Entering ANFINCON_covpiedra_piedraImagen_whenMouseDoubleclick");
    // ANFINCON_PR_AYUPIEDRA();
    console.log("Exiting ANFINCON_covpiedra_piedraImagen_whenMouseDoubleclick");
  }

  //#region PLSQL
  // DECLARE
  //  V_APLA   VARCHAR2(250);
  //  V_NEGA   VARCHAR2(250);
  //  
  // BEGIN
  //  
  //  BEGIN
  //   SELECT DECODE(T.TERPER,'N',T.TERNOM ||' '||T.TERAPE,NVL(T.TERNOM,T.TERAPE)) NOMBRE
  //   INTO :ANTTINCONS.INCONS_TERCERDESC
  //   FROM TER T
  //   WHERE TERCOD = :ANTTINCONS.INCONS_TERCER;
  //   
  //  EXCEPTION WHEN NO_DATA_FOUND THEN   :ANTTINCONS.INCONS_TERCERDESC := NULL;
  //  END;
  //  
  //  
  //  V_APLA :=F_SOLICITUDES ('AZ',:ANTTINCONS.INCONS_CONSEC);
  //  V_NEGA :=F_SOLICITUDES ('NG',:ANTTINCONS.INCONS_CONSEC);
  //  
  //  :ANTTINCONS.SOLI_NEGADA      := V_NEGA;
  //  :ANTTINCONS.SOLI_APLAZADA    := V_APLA;
  //  
  //   BEGIN
  //  SELECT CR.SOLICR_USCIAL,S.USU_NOMBRE
  //   INTO  :ANTTINCONS.COMERCIAL,:ANTTINCONS.COMERCIALNOM
  //    FROM ANTTINSOLI L, CRTSOLICR CR,SGUSUARIOS S 
  //   WHERE L.INSOLI_OFICIN = CR.SOLICR_OFCSOL
  //    AND  L.INSOLI_CODSOL = CR.SOLICR_CODSOL
  //    AND  S.USU_CODIGO = CR.SOLICR_USCIAL
  //    AND  L.INSOLI_CONFIN = :ANTTINCONS.INCONS_CONSEC 
  //    GROUP BY CR.SOLICR_USCIAL,S.USU_NOMBRE
  //   ;
  //   EXCEPTION WHEN TOO_MANY_ROWS THEN
  //      :ANTTINCONS.COMERCIAL    := NULL;
  //      :ANTTINCONS.COMERCIALNOM := 'ERROR NO TIENEN EL MISMO NOMBRE';
  //    
  //  END; 
  //  
  //  IF :ANTTINCONS.INCONS_INESTA = 'A' THEN  
  //     :ANTTINCONS.INCONS_INESTADESC := 'ACTIVA';
  //  ELSE
  //     :ANTTINCONS.INCONS_INESTADESC := 'FINALIZADA';
  //  END IF;
  //  
  //  
  //  
  // END;
  //#endregion
  async ANFINCON_anttincons_postQuery() {
    console.log("Entering ANFINCON_anttincons_postQuery");
    let V_APLA: string = null;
    let V_NEGA: string = null;
    // construct payload
    let payload1 = new Map();
    payload1.set("INCONS_TERCER", this.ANTTINCONS.INCONS_TERCER);
    // call REST API
    let result1 = await Rest.post("/anfincon_anttincons/anfincon_anttincons_postquery_query1", payload1);
    // get values from result
    this.ANTTINCONS.INCONS_TERCERDESC = result1[0].get("ANTTINCONS.INCONS_TERCERDESC");
    if (result1 == null || result1.length == 0) {

      this.ANTTINCONS.INCONS_TERCERDESC = null;
    }

    // V_APLA = F_SOLICITUDES("AZ", this.ANTTINCONS.INCONS_CONSEC);
    // V_NEGA = F_SOLICITUDES("NG", this.ANTTINCONS.INCONS_CONSEC);
    this.ANTTINCONS.SOLI_NEGADA = V_NEGA;
    this.ANTTINCONS.SOLI_APLAZADA = V_APLA;
    // construct payload
    let payload2 = new Map();
    payload2.set("INCONS_CONSEC", this.ANTTINCONS.INCONS_CONSEC);
    // call REST API
    let result2 = await Rest.post("/anfincon_anttincons/anfincon_anttincons_postquery_query2", payload2);
    // get values from result
    this.ANTTINCONS.COMERCIAL = result2[0].get("ANTTINCONS.COMERCIAL");
    this.ANTTINCONS.COMERCIALNOM = result2[0].get("ANTTINCONS.COMERCIALNOM");
    if (this.ANTTINCONS.INCONS_INESTA == "A") {
      this.ANTTINCONS.INCONS_INESTADESC = "ACTIVA";
    }
    else {
      this.ANTTINCONS.INCONS_INESTADESC = "FINALIZADA";
    }
    console.log("Exiting ANFINCON_anttincons_postQuery");
  }

  //#region PLSQL
  // BEGIN TOOLBAR_ACTIONS; END;
  //#endregion
  async ANFINCON_toolbar_whenButtonPressed() {
    console.log("Entering ANFINCON_toolbar_whenButtonPressed");
    // ANFINCON_TOOLBAR_ACTIONS();
    console.log("Exiting ANFINCON_toolbar_whenButtonPressed");
  }

  //#region PLSQL
  // BEGIN
  //   DEL_TIMER('BUBBLE_DELAY');
  //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',DISPLAYED,PROPERTY_OFF);
  // END;
  //#endregion
  async ANFINCON_toolbar_whenMouseLeave() {
    console.log("Entering ANFINCON_toolbar_whenMouseLeave");
    // ANFINCON_DEL_TIMER("BUBBLE_DELAY");
    // new OracleFormsBuiltins(this).set_item_property("TOOLBAR.BUTTON_HELP", DISPLAYED, PROPERTY_OFF);
    console.log("Exiting ANFINCON_toolbar_whenMouseLeave");
  }

  //#region PLSQL
  // BEGIN
  //    EXECUTE_QUERY;
  //    --:BASE.FECHA := SYSDATE;
  //    NEXT_BLOCK;
  //    ENTER_QUERY;
  // END;
  //#endregion
  async ANFINCON_toolbar_whenNewFormInstance() {
    console.log("Entering ANFINCON_toolbar_whenNewFormInstance");
    new OracleFormsBuiltins(this).execute_query();
    // new OracleFormsBuiltins(this).next_block();
    // new OracleFormsBuiltins(this).enter_query();
    console.log("Exiting ANFINCON_toolbar_whenNewFormInstance");
  }

  //#region PLSQL
  // DECLARE
  // COMANDO VARCHAR2(255);
  // PL_ID PARAMLIST;
  // V_CANTIDAD NUMBER;
  // BEGIN
  //      
  //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
  //     IF NOT ID_NULL(PL_ID) THEN
  //        DESTROY_PARAMETER_LIST(PL_ID);
  //     END IF;
  //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
  //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN',TEXT_PARAMETER,'YES');
  //     ADD_PARAMETER(PL_ID,'TERCERO',TEXT_PARAMETER,:ANTTINCONS.INCONS_TERCER);
  //     ADD_PARAMETER(PL_ID,'INCONSISTE',TEXT_PARAMETER,:ANTTINCONS.INCONS_CONSEC);
  //     RUN_PRODUCT(REPORTS,'ANRINCON',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID, NULL);  
  //     REDISPLAY;
  // END; 
  //#endregion
  async ANFINCON_base_imprimir_whenButtonPressed() {
    console.log("Entering ANFINCON_base_imprimir_whenButtonPressed");
    let COMANDO: string = null;
    // let PL_ID: PARAMLIST = null;
    // let V_CANTIDAD: number = null;
    // PL_ID = new OracleFormsBuiltins(this).get_parameter_list("PARAMETROS");
    // if ((!new OracleFormsBuiltins(this).id_null(PL_ID))) {
    //   new OracleFormsBuiltins(this).destroy_parameter_list(PL_ID);
    // }
    // PL_ID = new OracleFormsBuiltins(this).create_parameter_list("PARAMETROS");
    // new OracleFormsBuiltins(this).add_parameter(PL_ID, "ORACLE_SHUTDOWN", TEXT_PARAMETER, "YES");
    // new OracleFormsBuiltins(this).add_parameter(PL_ID, "TERCERO", TEXT_PARAMETER, ANTTINCONS.INCONS_TERCER);
    // new OracleFormsBuiltins(this).add_parameter(PL_ID, "INCONSISTE", TEXT_PARAMETER, ANTTINCONS.INCONS_CONSEC);
    // new OracleFormsBuiltins(this).run_product(REPORTS, "ANRINCON", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
    // new OracleFormsBuiltins(this).redisplay();
    console.log("Exiting ANFINCON_base_imprimir_whenButtonPressed");
  }


  ANFINCON_PR_INICIAR() {
    this._SYSTEM_SERVICE.set('MESSAGE_LEVEL', '5');
    this.BASE.FECHA = PLSQLBuiltins.sysdate();
    this.BASE.USUARIO = PLSQLBuiltins.user();
    this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get('CURRENT_FORM'), 1, 8);

    if (['fin1', 'FIN1'].indexOf(this.BASE.BD) != -1) {
      this.BASE.BASE_DAT = 'PRODUCCION'
    } else if (['fin1', 'FIN1'].indexOf(this.BASE.BD) != -1) {
      this.BASE.BASE_DAT = 'TEST'
    } else {
      this.BASE.BASE_DAT = 'DESARROLLO'
    }
  }

}