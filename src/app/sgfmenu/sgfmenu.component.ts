import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { SGUSUARIOS, UNO, OPCIONES, DOS, SGTALERTA, BASE } from "./sgfmenu_models";
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';


@Component({
  selector: 'app-sgfmenu',
  templateUrl: './sgfmenu.component.html',
})
export class SgfmenuComponent implements OnInit {
  @Input() public PARAMETER: Map<string, string> = new Map();
  currentBlock: BlockComponent;
  currentItem: ItemInputComponent;
  @ViewChildren(BlockComponent) blockComponents;
  constructor(private _SYSTEM_SERVICE: SystemService) {
  }
  currentCanvas: string = "PAGE_1"
  visibleCanvases: []
  isKeypressProcessing: boolean;

  canvas: string = "PAGE_1"
  public SGUSUARIOS: SGUSUARIOS = new SGUSUARIOS();
  public UNO: UNO = new UNO();
  public OPCIONES: OPCIONES = new OPCIONES();
  public DOS: DOS = new DOS();
  public SGTALERTA: SGTALERTA = new SGTALERTA();
  public BASE: BASE = new BASE();
  public MESSAGE_LINE: string;

  async ngOnInit() {

  }

  //#region PLSQL
  // BEGIN NULL; END;
  //#endregion
  async SGFMENU_keyOthers() {
    console.log("Entering SGFMENU_keyOthers");
    console.log("Exiting SGFMENU_keyOthers");
  }

  //#region PLSQL
  // BEGIN
  // PANTALLA;
  // END;
  // DECLARE DUMY VARCHAR2(1);
  // BEGIN
  //    SELECT 'X'
  //      INTO DUMY
  //      FROM USUARIOS
  //     WHERE USUARIO = USER;
  // EXCEPTION
  //      WHEN NO_DATA_FOUND
  //      THEN MESSAGE ('USUARIO SIN PRIVILEGIOS');
  //     RAISE FORM_TRIGGER_FAILURE;
  // END;
  // DECLARE DUMY VARCHAR2(1);
  // BEGIN
  //    SELECT 'X'
  //      INTO DUMY
  //      FROM USUARIOS
  //     WHERE USUARIO = USER
  //       AND HABILITADO = 'S';
  // EXCEPTION
  //      WHEN NO_DATA_FOUND
  //      THEN MESSAGE ('USUARIO DESHABILITADO');
  //     RAISE FORM_TRIGGER_FAILURE;
  // END;
  //#endregion
  async SGFMENU_preForm() {
    console.log("Entering SGFMENU_preForm");
    //SGFMENU_PANTALLA();
    let DUMY: string = null;
    // construct payload
    let payload1 = new Map();
    // call REST API
    let result1 = await Rest.post("/sgfmenu/sgfmenu_preform_query1", payload1);
    // get values from result
    DUMY = result1[0].get("DUMY");
    if (result1 == null || result1.length == 0) {

      //new OracleFormsBuiltins(this).message("USUARIO SIN PRIVILEGIOS");
      console.log("FORM_TRIGGER_FAILURE");
      throw new Error('FORM_TRIGGER_FAILURE');
    }

    //let DUMY: string = null;
    // construct payload
    let payload2 = new Map();
    // call REST API
    let result2 = await Rest.post("/sgfmenu/sgfmenu_preform_query2", payload2);
    // get values from result
    DUMY = result2[0].get("DUMY");
    if (result2 == null || result2.length == 0) {

      //new OracleFormsBuiltins(this).message("USUARIO DESHABILITADO");
      console.log("FORM_TRIGGER_FAILURE");
      throw new Error('FORM_TRIGGER_FAILURE');
    }

    console.log("Exiting SGFMENU_preForm");
  }

  //#region PLSQL
  // BEGIN
  //   SYSTEM.MESSAGE_LEVEL := 5;
  //   :BASE.FECHA   := SYSDATE;
  //   :BASE.USUARIO := USER;
  //   :BASE.BD    := GET_APPLICATION_PROPERTY(CONNECT_STRING); 
  //   IF UPPER(:BASE.BD) = 'FIN1' THEN
  //    :BASE.BASE_DAT := 'PRODUCCION';
  //   ELSIF UPPER(:BASE.BD) IN ('DESA') THEN
  //     :BASE.BASE_DAT := 'DESARROLLO';
  //   ELSIF UPPER(:BASE.BD) IN ('TEST') THEN
  //     :BASE.BASE_DAT := 'PRUEBAS';
  //   ELSE
  //     MESSAGE('ESTA INTENTANDO ENTRAR A UNA BASE DE DATOS ERRADA'); 
  //     :BASE.BASE_DAT := UPPER(:BASE.BD);
  // END IF;
  //   GO_BLOCK ('OPCIONES');
  // END;
  // 
  // -------------LEE EL CARGO DEL USUARIO LOGGEADO
  // BEGIN
  //  
  // SELECT USU_CARGO_N 
  //  INTO :CARGO
  // FROM SGUSUARIOS WHERE USU_CODIGO  = USER;
  // 
  // EXCEPTION
  //  WHEN NO_DATA_FOUND THEN
  //   :CARGO := NULL;
  // 
  // END;
  // ------------- TRAE LAS OPCIONES DE MENÚ DE ESE CARGO
  // 
  // BEGIN
  //    SELECT  A.COD_OPCION, A.DESCRIPCION
  //      INTO :OPCION,:UNO.DESCRIPCION
  //      --FROM  OPCIONES A, OPCIONES_USUARIOS B  
  //      FROM  OPCIONES A, SGTOPCXCAR B
  //     WHERE  A.COD_OPCION_PADRE IS NULL
  //       --AND  A.COD_OPCION = B.COD_OPCION
  //       AND  A.COD_OPCION = B.OPCCAR_OPCION
  //       --AND  B.USUARIO = USER;    
  //       AND  B.OPCCAR_CARGON = :CARGO
  //       UNION
  //        SELECT COD_OPCION, DESCRIPCION
  //         FROM SGTNOVEOP, OPCIONES
  //     WHERE 
  //     COD_OPCION = NOVEOP_CODOPC
  //     AND COD_OPCION_PADRE IS NULL
  //     AND SYSDATE BETWEEN NOVEOP_FECINI AND NOVEOP_FECFIN
  //     AND NOVEOP_FECAUT IS NOT NULL
  //     AND NOVEOP_CODUSU = USER;
  // EXCEPTION
  //      WHEN  NO_DATA_FOUND
  //      THEN  NULL;
  //      WHEN  TOO_MANY_ROWS
  //      THEN  NULL;
  // END;
  // 
  // GO_BLOCK ('SGUSUARIOS');
  // EXECUTE_QUERY;
  // 
  // GO_BLOCK ('OPCIONES');
  // EXECUTE_QUERY;
  // 
  // DECLARE
  //  V_TIENE VARCHAR2(1);
  // BEGIN
  // 
  //   :DSP_TITULO      := OPS$SEGUI.PQBD_SEG_ESTUSR.FBD_MSG('T',USER);
  //   :DSP_MENSAJE    := OPS$SEGUI.PQBD_SEG_ESTUSR.FBD_MSG('M',USER);
  //   :TXT_FORMA     := OPS$SEGUI.PQBD_SEG_ESTUSR.FBD_MSG('F',USER);
  //   :ALERTA_CODACT   := OPS$SEGUI.PQBD_SEG_ESTUSR.FBD_MSG('A',USER);  
  //   
  //   IF :DSP_TITULO IS NOT NULL THEN
  //    SET_ITEM_PROPERTY ('BTN_ALERTAS',  VISIBLE, PROPERTY_TRUE);
  //    SET_ITEM_PROPERTY ('BTN_ALERTAS',  ENABLED, PROPERTY_TRUE);
  //    
  //     BEGIN  
  //     SELECT COUNT(1)
  //     INTO :TXT_CANT
  //     FROM SGTALERTA
  //    WHERE ALERTA_CODUSU = USER
  //    AND ALERTA_ACEPTA IS NULL
  //    AND ALERTA_VIGHAS >= SYSDATE;
  //    IF :TXT_CANT = 0 THEN
  //     :TXT_CANT := '';
  //    END IF;
  //   EXCEPTION
  //    WHEN OTHERS THEN
  //     :TXT_CANT := '';
  //   END;
  //    
  //    IF :TXT_FORMA IS NOT NULL THEN
  //     SET_ITEM_PROPERTY ('BTN_FORMA',  VISIBLE, PROPERTY_TRUE);
  //     SET_ITEM_PROPERTY ('BTN_FORMA',  ENABLED, PROPERTY_TRUE);
  //    END IF;
  //   END IF;
  //   
  //   V_TIENE := OPS$SEGUI.PQBD_SEG_ESTUSR.FBD_FOTO(USER);
  // 
  //  IF V_TIENE = 'S' THEN
  //   SET_ITEM_PROPERTY ('IMAG_PORT', VISIBLE, PROPERTY_FALSE);
  //    SET_ITEM_PROPERTY ('USU_FOTO',  VISIBLE, PROPERTY_TRUE);
  //   ELSE
  //    READ_IMAGE_FILE('LOGO.BMP','BMP','DOS.IMAG_PORT');
  //    SET_ITEM_PROPERTY ('IMAG_PORT', VISIBLE, PROPERTY_TRUE);
  //    SET_ITEM_PROPERTY ('USU_FOTO',  VISIBLE, PROPERTY_FALSE);
  //   END IF;
  //   
  //   DECLARE
  //      V_NOMBRE VARCHAR2(120);
  //    BEGIN
  //     SELECT USU_NOMBRE ||', '||INITCAP(SG_DESCRI)
  //     INTO V_NOMBRE
  //      FROM SGUSUARIOS S, SGCARGOS
  //           WHERE USU_CODIGO = USER
  //            AND USU_CARGO_N = CARGO_CODIGO_N;
  //     
  //        SET_ITEM_PROPERTY('USU_FOTO', TOOLTIP_TEXT, V_NOMBRE);
  //        SET_ITEM_PROPERTY('IMAG_PORT', TOOLTIP_TEXT, V_NOMBRE);
  //     END;
  //  
  //  EXCEPTION
  //   WHEN OTHERS THEN
  //   READ_IMAGE_FILE('LOGO.BMP','BMP','DOS.IMAG_PORT');
  //   SET_ITEM_PROPERTY ('IMAG_PORT', VISIBLE, PROPERTY_TRUE);
  //   SET_ITEM_PROPERTY ('USU_FOTO',  VISIBLE, PROPERTY_FALSE);
  // END;
  // 
  // 
  // 
  // VERIFICAR (:OPCION);
  // 
  // EXECUTE_QUERY;
  //#endregion
  async SGFMENU_whenNewFormInstance() {
    console.log("Entering SGFMENU_whenNewFormInstance");
    this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", "5");
    this.BASE.FECHA = PLSQLBuiltins.sysdate();
    if (PLSQLBuiltins.upper(this.BASE.BD) == "FIN1") {
      this.BASE.BASE_DAT = "PRODUCCION";
    }
    else if (["DESA"].indexOf(PLSQLBuiltins.upper(this.BASE.BD)) != -1) {
      this.BASE.BASE_DAT = "DESARROLLO";
    }
    else if (["TEST"].indexOf(PLSQLBuiltins.upper(this.BASE.BD)) != -1) {
      this.BASE.BASE_DAT = "PRUEBAS";
    }
    else {
      //new OracleFormsBuiltins(this).message("ESTA INTENTANDO ENTRAR A UNA BASE DE DATOS ERRADA");
      this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
    }
    new OracleFormsBuiltins(this).go_block("OPCIONES");
    // construct payload
    let payload1 = new Map();
    payload1.set("CARGO", this.BASE.CARGO);
    // call REST API
    let result1 = await Rest.post("/sgfmenu/sgfmenu_whennewforminstance_query1", payload1);
    // get values from result
    this.BASE.CARGO = result1[0].get("CARGO");
    if (result1 == null || result1.length == 0) {

      this.BASE.CARGO = null;
    }

    // construct payload
    let payload2 = new Map();
    payload2.set("CARGO", this.BASE.CARGO);
    // call REST API
    let result2 = await Rest.post("/sgfmenu/sgfmenu_whennewforminstance_query2", payload2);
    // get values from result
    this.UNO.OPCION = result2[0].get("OPCION");
    this.UNO.DESCRIPCION = result2[0].get("UNO.DESCRIPCION");
    if (result2 == null || result2.length == 0) {

    }

    let V_TIENE: string = null;
    try {

      //this.DSP_TITULO = OPS$SEGUI.PQBD_SEG_ESTUSR.FBD_MSG("T", USER);
      //this.DSP_MENSAJE = OPS$SEGUI.PQBD_SEG_ESTUSR.FBD_MSG("M", USER);
      //this.TXT_FORMA = OPS$SEGUI.PQBD_SEG_ESTUSR.FBD_MSG("F", USER);
      //this.ALERTA_CODACT = OPS$SEGUI.PQBD_SEG_ESTUSR.FBD_MSG("A", USER);
      if ((this.BASE.DSP_TITULO != null)) {
        //new OracleFormsBuiltins(this).set_item_property("BTN_ALERTAS", VISIBLE, PROPERTY_TRUE);
        //new OracleFormsBuiltins(this).set_item_property("BTN_ALERTAS", ENABLED, PROPERTY_TRUE);
        let result3: Map<string, any>[] = [];
        try {

          // construct payload
          let payload3 = new Map();
          payload3.set("TXT_CANT", this.BASE.TXT_CANT);
          // call REST API
          result3 = await Rest.post("/sgfmenu/sgfmenu_whennewforminstance_query3", payload3);
          // get values from result
          this.BASE.TXT_CANT = result3[0].get("TXT_CANT");
          if (this.BASE.TXT_CANT == 0) {
            this.BASE.TXT_CANT = 0;
          }
        } catch (ex) {

          this.BASE.TXT_CANT = 0;
        }

        if ((this.BASE.TXT_FORMA != null)) {
          //new OracleFormsBuiltins(this).set_item_property("BTN_FORMA", VISIBLE, PROPERTY_TRUE);
          //new OracleFormsBuiltins(this).set_item_property("BTN_FORMA", ENABLED, PROPERTY_TRUE);
        }
      }
      //V_TIENE = OPS$SEGUI.PQBD_SEG_ESTUSR.FBD_FOTO(USER);
      if (V_TIENE == "S") {
        //new OracleFormsBuiltins(this).set_item_property("IMAG_PORT", VISIBLE, PROPERTY_FALSE);
        //new OracleFormsBuiltins(this).set_item_property("USU_FOTO", VISIBLE, PROPERTY_TRUE);
      }
      else {
        new OracleFormsBuiltins(this).read_image_file("LOGO.BMP", "BMP", "DOS.IMAG_PORT");
        //new OracleFormsBuiltins(this).set_item_property("IMAG_PORT", VISIBLE, PROPERTY_TRUE);
        //new OracleFormsBuiltins(this).set_item_property("USU_FOTO", VISIBLE, PROPERTY_FALSE);
      }
      {

        let V_NOMBRE: string = null;
        // construct payload
        let payload4 = new Map();
        // call REST API
        let result4 = await Rest.post("/sgfmenu/sgfmenu_whennewforminstance_query4", payload4);
        // get values from result
        V_NOMBRE = result4[0].get("V_NOMBRE");
        //new OracleFormsBuiltins(this).set_item_property("USU_FOTO", TOOLTIP_TEXT, V_NOMBRE);
        //new OracleFormsBuiltins(this).set_item_property("IMAG_PORT", TOOLTIP_TEXT, V_NOMBRE);
      }

    } catch (ex) {

      new OracleFormsBuiltins(this).read_image_file("LOGO.BMP", "BMP", "DOS.IMAG_PORT");
      //new OracleFormsBuiltins(this).set_item_property("IMAG_PORT", VISIBLE, PROPERTY_TRUE);
      //new OracleFormsBuiltins(this).set_item_property("USU_FOTO", VISIBLE, PROPERTY_FALSE);
    }

    console.log("Exiting SGFMENU_whenNewFormInstance");
  }

  //#region PLSQL
  // BEGIN
  //    IF   SYSTEM.CURSOR_RECORD = 1
  //    THEN  BAJAR;
  //    ELSE  UP;
  //    END IF;
  // END;
  //#endregion
  async SGFMENU_keyUp() {
    console.log("Entering SGFMENU_keyUp");
    if (this._SYSTEM_SERVICE.get("CURSOR_RECORD") == "1") {
      //SGFMENU_BAJAR();
    }
    else {
      //new OracleFormsBuiltins(this).up();
    }
    console.log("Exiting SGFMENU_keyUp");
  }

  //#region PLSQL
  // BEGIN
  //    CLEAR_FORM(NO_VALIDATE);
  //    EXIT_FORM;
  // END;
  //#endregion
  async SGFMENU_keyExit() {
    console.log("Entering SGFMENU_keyExit");
    //new OracleFormsBuiltins(this).clear_form(NO_VALIDATE);
    //new OracleFormsBuiltins(this).exit_form();
    console.log("Exiting SGFMENU_keyExit");
  }

  //#region PLSQL
  // BEGIN
  //    IF   SYSTEM.LAST_RECORD = 'TRUE'
  //    THEN  GO_RECORD(1);
  //    ELSE  DOWN;
  //    END IF;
  // END;
  //#endregion
  async SGFMENU_keyDown() {
    console.log("Entering SGFMENU_keyDown");
    // if (this._SYSTEM_SERVICE.get(new OracleFormsBuiltins(this).last_record) == "TRUE") {
    //     new OracleFormsBuiltins(this).go_record(1);
    // }
    // else {
    //     new OracleFormsBuiltins(this).down();
    // }
    console.log("Exiting SGFMENU_keyDown");
  }

  //#region PLSQL
  // BEGIN GO_RECORD(SYSTEM.MOUSE_RECORD); END;
  //#endregion
  async SGFMENU_opciones_whenMouseEnter() {
    console.log("Entering SGFMENU_opciones_whenMouseEnter");
    //new OracleFormsBuiltins(this).go_record(SYSTEM.MOUSE_RECORD);
    console.log("Exiting SGFMENU_opciones_whenMouseEnter");
  }

  //#region PLSQL
  // BEGIN
  //   --
  //   -- MODIFICACIÓN: CAPTURA DE LA OPCIÓN ESCOGIDA PARA QUE, YA EN LAS FORMAS LLAMADAS,
  //   --               SE PUEDA SABER DESDE DÓNDE SE INVOCÓ LA FORMA.
  //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A.
  //   -- FECHA: 22 DE ENERO DE 2003
  //   --
  //   :GLOBAL.COD_OPCION := :OPCIONES.COD_OPCION; -- ASIGNACIÓN DE LA OPCIÓN
  //   AVANZAR;
  // END;
  //#endregion
  async SGFMENU_opciones_whenMouseClick() {
    console.log("Entering SGFMENU_opciones_whenMouseClick");
    //this.GLOBAL.COD_OPCION = this.OPCIONES.COD_OPCION;
    //SGFMENU_AVANZAR();
    console.log("Exiting SGFMENU_opciones_whenMouseClick");
  }

  //#region PLSQL
  // BEGIN
  //   :GLOBAL.COD_OPCION := :OPCIONES.COD_OPCION; -- ASIGNACIÓN DE LA OPCIÓN
  //   AVANZAR;
  // END;
  //#endregion
  async SGFMENU_opciones_keyNxtblk() {
    console.log("Entering SGFMENU_opciones_keyNxtblk");
    //this.GLOBAL.COD_OPCION = this.OPCIONES.COD_OPCION;
    //SGFMENU_AVANZAR();
    console.log("Exiting SGFMENU_opciones_keyNxtblk");
  }

  //#region PLSQL
  // BEGIN
  //   --
  //   -- MODIFICACIÓN: CAPTURA DE LA OPCIÓN ESCOGIDA PARA QUE, YA EN LAS FORMAS LLAMADAS,
  //   --               SE PUEDA SABER DESDE DÓNDE SE INVOCÓ LA FORMA.
  //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A.
  //   -- FECHA: 22 DE ENERO DE 2003
  //   --
  //   :GLOBAL.COD_OPCION := :OPCIONES.COD_OPCION; -- ASIGNACIÓN DE LA OPCIÓN
  //   AVANZAR;
  // END;
  //#endregion
  async SGFMENU_opciones_keyNextItem() {
    console.log("Entering SGFMENU_opciones_keyNextItem");
    //this.GLOBAL.COD_OPCION = this.OPCIONES.COD_OPCION;
    //SGFMENU_AVANZAR();
    console.log("Exiting SGFMENU_opciones_keyNextItem");
  }

  //#region PLSQL
  // BEGIN
  //    RETROCEDER;
  // END;
  //#endregion
  async SGFMENU_opciones_keyPrvblk() {
    console.log("Entering SGFMENU_opciones_keyPrvblk");
    //SGFMENU_RETROCEDER();
    console.log("Exiting SGFMENU_opciones_keyPrvblk");
  }

  //#region PLSQL
  // BEGIN
  //    SELECT  COMANDO,  CAMINO
  //      INTO  :COMANDO, :CAMINO
  //      FROM  COMANDOS
  //     WHERE  COD_COMANDO = :COD_COMANDO;
  // EXCEPTION
  //      WHEN  NO_DATA_FOUND
  //      THEN  NULL;
  // END;
  //#endregion
  async SGFMENU_opciones_postQuery() {
    console.log("Entering SGFMENU_opciones_postQuery");
    // construct payload
    let payload1 = new Map();
    payload1.set("COD_COMANDO", this.OPCIONES.COD_COMANDO);
    // call REST API
    let result1 = await Rest.post("/sgfmenu_opciones/sgfmenu_opciones_postquery_query1", payload1);
    // get values from result
    this.OPCIONES.COMANDO = result1[0].get("COMANDO");
    this.OPCIONES.CAMINO = result1[0].get("CAMINO");
    if (result1 == null || result1.length == 0) {

    }

    console.log("Exiting SGFMENU_opciones_postQuery");
  }

  //#region PLSQL
  // BEGIN
  //    RETROCEDER;
  // END;
  //#endregion
  async SGFMENU_dos_anterior_whenMouseClick() {
    console.log("Entering SGFMENU_dos_anterior_whenMouseClick");
    //SGFMENU_RETROCEDER();
    console.log("Exiting SGFMENU_dos_anterior_whenMouseClick");
  }

  //#region PLSQL
  // BEGIN
  //    CLEAR_FORM(NO_VALIDATE);
  //    EXIT_FORM;
  // END;
  //#endregion
  async SGFMENU_dos_salir_whenMouseClick() {
    console.log("Entering SGFMENU_dos_salir_whenMouseClick");
    //new OracleFormsBuiltins(this).clear_form(NO_VALIDATE);
    //new OracleFormsBuiltins(this).exit_form();
    console.log("Exiting SGFMENU_dos_salir_whenMouseClick");
  }

  //#region PLSQL
  // DECLARE
  //   V_INAC VARCHAR2(1):= 'N';
  //  BEGIN
  // 
  //   IF TRUNC(SYSDATE) > :ALERTA_VIGHAS THEN
  //    V_INAC := 'S';
  //   END IF;
  // 
  //   IF :ALERTA_ACEPTA IS NOT NULL OR V_INAC = 'S' THEN
  //    SET_ITEM_INSTANCE_PROPERTY('ALERTA_VIGDES', CURRENT_RECORD, VISUAL_ATTRIBUTE, 'INACTIVO');
  //    SET_ITEM_INSTANCE_PROPERTY('ALERTA_VIGHAS', CURRENT_RECORD, VISUAL_ATTRIBUTE, 'INACTIVO');
  //   ELSE
  //    SET_ITEM_INSTANCE_PROPERTY('ALERTA_VIGDES', CURRENT_RECORD, VISUAL_ATTRIBUTE, 'ACTIVO');
  //    SET_ITEM_INSTANCE_PROPERTY('ALERTA_VIGHAS', CURRENT_RECORD, VISUAL_ATTRIBUTE, 'ACTIVO');
  //   END IF;
  // 
  //   IF :ALERTA_COMPLE IS NOT NULL THEN
  //    BEGIN
  //     SELECT DESCRIPCION 
  //      INTO :TXT_ACCION
  //     FROM OPCIONES
  //     WHERE LOWER(PROGRAMA) = LOWER(:ALERTA_COMPLE);
  //    EXCEPTION
  //     WHEN NO_DATA_FOUND THEN
  //      :TXT_ACCION := '';
  //    END;
  //   
  // 
  //   END IF;
  // 
  //  END;
  //  
  //#endregion
  async SGFMENU_sgtalerta_postQuery() {
    console.log("Entering SGFMENU_sgtalerta_postQuery");
    let V_INAC: string = 'N';
    if (PLSQLBuiltins.trunc(PLSQLBuiltins.sysdate().toString()) > this.SGTALERTA.ALERTA_VIGHAS.toString()) {
      V_INAC = "S";
    }
    if (((this.SGTALERTA.ALERTA_ACEPTA != null) || V_INAC == "S")) {
      //new OracleFormsBuiltins(this).set_item_instance_property("ALERTA_VIGDES", CURRENT_RECORD, VISUAL_ATTRIBUTE, "INACTIVO");
      //new OracleFormsBuiltins(this).set_item_instance_property("ALERTA_VIGHAS", CURRENT_RECORD, VISUAL_ATTRIBUTE, "INACTIVO");
    }
    else {
      //new OracleFormsBuiltins(this).set_item_instance_property("ALERTA_VIGDES", CURRENT_RECORD, VISUAL_ATTRIBUTE, "ACTIVO");
      //new OracleFormsBuiltins(this).set_item_instance_property("ALERTA_VIGHAS", CURRENT_RECORD, VISUAL_ATTRIBUTE, "ACTIVO");
    }
    if ((this.SGTALERTA.ALERTA_COMPLE != null)) {
      // construct payload
      let payload1 = new Map();
      payload1.set("ALERTA_COMPLE", this.SGTALERTA.ALERTA_COMPLE);
      payload1.set("TXT_ACCION", this.SGTALERTA.TXT_ACCION);
      // call REST API
      let result1 = await Rest.post("/sgfmenu_sgtalerta/sgfmenu_sgtalerta_postquery_query1", payload1);
      // get values from result
      this.SGTALERTA.TXT_ACCION = result1[0].get("TXT_ACCION");
      if (result1 == null || result1.length == 0) {

        this.SGTALERTA.TXT_ACCION = "";
      }

    }
    console.log("Exiting SGFMENU_sgtalerta_postQuery");
  }

  //#region PLSQL
  // BEGIN PUP_IR; END;
  //#endregion
  async SGFMENU_sgtalerta_btnForma2_whenButtonPressed() {
    console.log("Entering SGFMENU_sgtalerta_btnForma2_whenButtonPressed");
    //SGFMENU_PUP_IR();
    console.log("Exiting SGFMENU_sgtalerta_btnForma2_whenButtonPressed");
  }

  //#region PLSQL
  // BEGIN PUP_IR; END;
  //#endregion
  async SGFMENU_sgtalerta_txtAccion_whenMouseClick() {
    console.log("Entering SGFMENU_sgtalerta_txtAccion_whenMouseClick");
    //SGFMENU_PUP_IR();
    console.log("Exiting SGFMENU_sgtalerta_txtAccion_whenMouseClick");
  }

  //#region PLSQL
  // BEGIN
  //  IF TRUNC(SYSDATE) < :ALERTA_VIGHAS THEN
  //  IF :ALERTA_ACEPTA IS NULL THEN
  //     IF :BASE.TXT_FORMA='SEFALELEAS' THEN
  //      PUP_IR;
  //     ELSE
  //      UPDATE SEGURIDAD.SGTALERTA
  //      SET ALERTA_ACEPTA = SYSDATE
  //      WHERE ALERTA_CODUSU = :ALERTA_CODUSU
  //      AND ALERTA_VIGDES = :ALERTA_VIGDES;
  //      COMMIT;
  //      EXECUTE_QUERY;
  //      
  //     END IF; 
  //  ELSE 
  //   NULL;
  //  END IF;
  //  END IF;
  // END;
  //#endregion
  async SGFMENU_sgtalerta_btnOk_whenButtonPressed() {
    console.log("Entering SGFMENU_sgtalerta_btnOk_whenButtonPressed");
    if (PLSQLBuiltins.trunc(PLSQLBuiltins.sysdate().toString()) < this.SGTALERTA.ALERTA_VIGHAS.toString()) {
      if ((this.SGTALERTA.ALERTA_ACEPTA == null)) {
        if (this.BASE.TXT_FORMA == "SEFALELEAS") {
          //SGFMENU_PUP_IR();
        }
        else {
          // construct payload
          let payload1 = new Map();
          payload1.set("ALERTA_CODUSU", this.SGTALERTA.ALERTA_CODUSU);
          payload1.set("ALERTA_VIGDES", this.SGTALERTA.ALERTA_VIGDES);
          // call REST API
          let result1 = await Rest.post("/sgfmenu_sgtalerta/sgfmenu_sgtalerta_btnok_whenbuttonpressed_query1", payload1);
          new OracleFormsBuiltins(this).execute_query();
        }
      }
      else {
      }
    }
    console.log("Exiting SGFMENU_sgtalerta_btnOk_whenButtonPressed");
  }

  //#region PLSQL
  // BEGIN PUP_IR; END;
  //#endregion
  async SGFMENU_base_btnForma_whenButtonPressed() {
    console.log("Entering SGFMENU_base_btnForma_whenButtonPressed");
    //SGFMENU_PUP_IR();
    console.log("Exiting SGFMENU_base_btnForma_whenButtonPressed");
  }

  //#region PLSQL
  // BEGIN
  //  COMMIT;
  //  HIDE_WINDOW('ALERTAS');
  //  --GO_ITEM('OPCIONES.DESCRIPCION');
  //  --GO_BLOCK ('BASE');
  //  GO_ITEM('BTN_ALERTAS');
  // END;
  //#endregion
  async SGFMENU_base_btnRegresar_whenButtonPressed() {
    console.log("Entering SGFMENU_base_btnRegresar_whenButtonPressed");
    //new OracleFormsBuiltins(this).hide_window("ALERTAS");
    //new OracleFormsBuiltins(this).go_item("BTN_ALERTAS");
    console.log("Exiting SGFMENU_base_btnRegresar_whenButtonPressed");
  }

  //#region PLSQL
  // BEGIN --SHOW_VIEW('WALERTA');
  // --LIB$AJUSTAVENTANA('ALERTAS',0,0);
  // SET_WINDOW_PROPERTY('ALERTAS', POSITION, 100, 200);
  // GO_BLOCK('SGTALERTA');
  // EXECUTE_QUERY; END;
  //#endregion
  async SGFMENU_base_btnAlertas_whenButtonPressed() {
    console.log("Entering SGFMENU_base_btnAlertas_whenButtonPressed");
    //new OracleFormsBuiltins(this).set_window_property("ALERTAS", POSITION, 100, 200);
    new OracleFormsBuiltins(this).go_block("SGTALERTA");
    new OracleFormsBuiltins(this).execute_query();
    console.log("Exiting SGFMENU_base_btnAlertas_whenButtonPressed");
  }

}
