import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { TER, REF_PARAM, TOOLBAR, BASE } from "./sefamter_models";
import { SystemService } from '../system.service';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-sefamter',
  templateUrl: './sefamter.component.html',
})
export class SefamterComponent implements OnInit {
  @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_TERPER', null],
        ['P_PERMISOS', null],
        ['P_OFICINA', null],
    ]);
  currentBlock: BlockComponent;
  currentItem: ItemInputComponent;
  @ViewChildren(BlockComponent) blockComponents;
  constructor(private _SYSTEM_SERVICE: SystemService, private titleService: Title) {
  }
  currentCanvas: string = "PAGE_1"
  visibleCanvases: []
  isKeypressProcessing: boolean;

  async ngOnInit() {

  }

  public TER: TER = new TER();
  public REF_PARAM: REF_PARAM = new REF_PARAM();
  public TOOLBAR: TOOLBAR = new TOOLBAR();
  public BASE: BASE = new BASE();
  public MESSAGE_LINE: string;


  //#region PLSQL
  // BEGIN ; END;
  //#endregion
  async SEFAMTER_onError() {
    console.log("Entering SEFAMTER_onError");
    console.log("Exiting SEFAMTER_onError");
  }

  //#region PLSQL
  // BEGIN ; END;
  //#endregion
  async SEFAMTER_whenMouseDoubleclick() {
    console.log("Entering SEFAMTER_whenMouseDoubleclick");
    console.log("Exiting SEFAMTER_whenMouseDoubleclick");
  }

  //#region PLSQL
  // BEGIN ; END;
  //#endregion
  async SEFAMTER_onMessage() {
    console.log("Entering SEFAMTER_onMessage");
    console.log("Exiting SEFAMTER_onMessage");
  }

  //#region PLSQL
  // BEGIN ; END;
  //#endregion
  async SEFAMTER_preForm() {
    console.log("Entering SEFAMTER_preForm");
    console.log("Exiting SEFAMTER_preForm");
  }

  //#region PLSQL
  // BEGIN  
  //   SYSTEM.MESSAGE_LEVEL:=5;
  //   :BASE.FECHA   := SYSDATE;
  //   :BASE.USUARIO := USER;
  //   :BASE.FORMA := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
  //   :BASE.BD    :=GET_APPLICATION_PROPERTY(CONNECT_STRING); 
  //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
  //   :BASE.BASE_DAT := 'PRODUCCION';
  //   ELSE 
  //   :BASE.BASE_DAT := 'DESARROLLO';
  //   END IF; 
  //   
  //   
  //   --PERMISOS POR USUARIO
  //    PU_PERMISO_BLOQUES;
  //   
  //   GO_BLOCK('REF_PARAM');
  // 
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
  // -----------------------------------------------------------------------
  // 
  // 
  // 
  // END;
  //#endregion
  async SEFAMTER_whenNewFormInstance() {
    console.log("Entering SEFAMTER_whenNewFormInstance");
    this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", "5");
    this.BASE.FECHA = PLSQLBuiltins.sysdate().toString();
    this.BASE.USUARIO = PLSQLBuiltins.user();
    this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
    //this.BASE.BD = new OracleFormsBuiltins(this).get_application_property(CONNECT_STRING);
    if (["FIN1", "FIN1"].indexOf(this.BASE.BD) != -1) {
      this.BASE.BASE_DAT = "PRODUCCION";
    }
    else {
      this.BASE.BASE_DAT = "DESARROLLO";
    }
    //SEFAMTER_PU_PERMISO_BLOQUES();
    new OracleFormsBuiltins(this).go_block("REF_PARAM");
    this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
    {

      let V_IMAGEN: string = null;
      if ((this.PARAMETER.get("P_OFICINA") != null)) {
        // construct payload
        let payload1 = new Map();
        payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
        // call REST API
        let result1 = await Rest.post("/sefamter/sefamter_whennewforminstance_query1", payload1);
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

    console.log("Exiting SEFAMTER_whenNewFormInstance");
  }

  //#region PLSQL
  // BEGIN
  //   COMMIT_FORM;
  // END;
  //#endregion
  async SEFAMTER_keyCommit() {
    console.log("Entering SEFAMTER_keyCommit");
    //new OracleFormsBuiltins(this).commit_form();
    console.log("Exiting SEFAMTER_keyCommit");
  }

  //#region PLSQL
  // BEGIN EXIT_FORM; END;
  //#endregion
  async SEFAMTER_keyExit() {
    console.log("Entering SEFAMTER_keyExit");
    //new OracleFormsBuiltins(this).exit_form();
    console.log("Exiting SEFAMTER_keyExit");
  }

  //#region PLSQL
  // BEGIN
  //  
  // IF (:PARAMETER.P_PERMISOS = 'INS') THEN
  //   LIB$DTNERFRMA('NO TIENE PERMISOS DE MODIFICACIÓN.');
  // ELSIF (:PARAMETER.P_PERMISOS = 'MOD')  THEN  
  //  
  //  IF (:TER.TERCOD IS NOT NULL) THEN
  //      PU_LLAMAR_FORTER(:TER.TERCOD, 'M');   
  //  ELSE 
  //     LIB$DTNERFRMA('DEBE INGRESAR UN TERCERO PARA MODIFICARLO O CREAR UN NUEVO TERCERO.');
  //  END IF;
  //  
  // ELSIF  (:PARAMETER.P_PERMISOS = 'IYM') THEN
  //  IF (:TER.TERCOD IS NOT NULL) THEN
  //      PU_LLAMAR_FORTER(:TER.TERCOD, 'A');   
  //  ELSE 
  //     LIB$DTNERFRMA('DEBE INGRESAR UN TERCERO PARA MODIFICARLO O CREAR UN NUEVO TERCERO.');
  //  END IF;
  //   
  // END IF;  
  // END;
  //#endregion
  async SEFAMTER_ter_btnSelter_whenButtonPressed() {
    console.log("Entering SEFAMTER_ter_btnSelter_whenButtonPressed");
    if (this.PARAMETER.get("P_PERMISOS") == "INS") {
      //SEFAMTER_LIB$DTNERFRMA("NO TIENE PERMISOS DE MODIFICACIÓN.");
    }
    else if (this.PARAMETER.get("P_PERMISOS") == "MOD") {
      if ((this.TER.TERCOD != null)) {
        //SEFAMTER_PU_LLAMAR_FORTER(TER.TERCOD, "M");
      }
      else {
        //SEFAMTER_LIB$DTNERFRMA("DEBE INGRESAR UN TERCERO PARA MODIFICARLO O CREAR UN NUEVO TERCERO.");
      }
    }
    else if (this.PARAMETER.get("P_PERMISOS") == "IYM") {
      if ((this.TER.TERCOD != null)) {
        //SEFAMTER_PU_LLAMAR_FORTER(TER.TERCOD, "A");
      }
      else {
        //SEFAMTER_LIB$DTNERFRMA("DEBE INGRESAR UN TERCERO PARA MODIFICARLO O CREAR UN NUEVO TERCERO.");
      }
    }
    console.log("Exiting SEFAMTER_ter_btnSelter_whenButtonPressed");
  }

  //#region PLSQL
  // DECLARE
  //  VBOTON  NUMBER;
  //  VBOTON1 NUMBER;
  // BEGIN
  // 
  // CLEAR_RECORD;
  // GO_BLOCK('TER');
  // CLEAR_BLOCK;
  // :PARAMETER.P_TERPER := NULL;
  // 
  // 
  // IF (:PARAMETER.P_PERMISOS = 'INS' OR :PARAMETER.P_PERMISOS = 'IYM' ) THEN
  //  
  //     LIB$ALERTA('MENSAJE','QUE TIPO DE TERCERO DESEA INGRESAR: '
  //                ,'NATURAL','JURIDICO','CANCELAR',VBOTON);
  //                 
  //     IF (VBOTON = 1) THEN
  //       LIB$ALERTA('MENSAJE','RECUERDE QUE DEBE INGRESAR TODOS LOS DATOS DE LAS REFERENCIAS'
  //                ,'CONTINUAR','CANCELAR',NULL,VBOTON1);
  //       IF (VBOTON1 = 1) THEN
  //        IF (:TER.TERCOD IS NULL) THEN
  //         :PARAMETER.P_TERPER := 'N';
  //           PU_LLAMAR_FORTER(:TER.TERCOD, 'I');   
  //         ELSE 
  //           LIB$DTNERFRMA('DEBE INGRESAR UN TERCERO PARA MODIFICARLO O CREAR UN NUEVO TERCERO.');
  //         END IF;
  //       ELSE
  //          GO_ITEM('REF_PARAM.NITTER');  
  //       END IF; 
  //       ELSIF (VBOTON = 2) THEN
  //        LIB$ALERTA('MENSAJE','RECUERDE CREAR AL REPRESENTANTE LEGAL COMO TERCERO NATURAL PARA PODERLO ASOCIAR AL TERCERO JURÍDICO.'
  //                ,'CONTINUAR','CANCELAR',NULL,VBOTON1);
  //        IF (VBOTON1 = 1) THEN
  //       IF (:TER.TERCOD IS NULL) THEN
  //         :PARAMETER.P_TERPER := 'J';
  //           PU_LLAMAR_FORTER(:TER.TERCOD, 'I');   
  //         ELSE 
  //           LIB$DTNERFRMA('DEBE INGRESAR UN TERCERO PARA MODIFICARLO O CREAR UN NUEVO TERCERO.');
  //         END IF;
  //      ELSE
  //         GO_ITEM('REF_PARAM.NITTER');  
  //      END IF;
  //     ELSE 
  //        GO_ITEM('REF_PARAM.NITTER');   
  //     END IF;
  //     
  // ELSIF (:PARAMETER.P_PERMISOS = 'MOD' OR :PARAMETER.P_PERMISOS = 'CON') THEN
  //  LIB$DTNERFRMA('NO TIENE PERMISOS DE CREACIÓN.');
  // END IF;
  //      
  // END;
  //#endregion
  async SEFAMTER_refParam_btnCreater_whenButtonPressed() {
    console.log("Entering SEFAMTER_refParam_btnCreater_whenButtonPressed");
    let VBOTON: number = null;
    let VBOTON1: number = null;
    //new OracleFormsBuiltins(this).clear_record();
    //new OracleFormsBuiltins(this).go_block("TER");
    //new OracleFormsBuiltins(this).clear_block();
    this.PARAMETER.set("P_TERPER", null);
    if ((this.PARAMETER.get("P_PERMISOS") == "INS" || this.PARAMETER.get("P_PERMISOS") == "IYM")) {
      //SEFAMTER_LIB$ALERTA("MENSAJE", "QUE TIPO DE TERCERO DESEA INGRESAR: ", "NATURAL", "JURIDICO", "CANCELAR", VBOTON);
      if (VBOTON == 1) {
        //SEFAMTER_LIB$ALERTA("MENSAJE", "RECUERDE QUE DEBE INGRESAR TODOS LOS DATOS DE LAS REFERENCIAS", "CONTINUAR", "CANCELAR", null, VBOTON1);
        if (VBOTON1 == 1) {
          if ((this.TER.TERCOD == null)) {
            this.PARAMETER.set("P_TERPER", "N");
            //SEFAMTER_PU_LLAMAR_FORTER(this.TER.TERCOD, "I");
          }
          else {
            //SEFAMTER_LIB$DTNERFRMA("DEBE INGRESAR UN TERCERO PARA MODIFICARLO O CREAR UN NUEVO TERCERO.");
          }
        }
        else {
          //new OracleFormsBuiltins(this).go_item("REF_PARAM.NITTER");
        }
      }
      else if (VBOTON == 2) {
        //SEFAMTER_LIB$ALERTA("MENSAJE", "RECUERDE CREAR AL REPRESENTANTE LEGAL COMO TERCERO NATURAL PARA PODERLO ASOCIAR AL TERCERO JURÍDICO.", "CONTINUAR", "CANCELAR", null, VBOTON1);
        if (VBOTON1 == 1) {
          if ((this.TER.TERCOD == null)) {
            this.PARAMETER.set("P_TERPER", "J");
            //SEFAMTER_PU_LLAMAR_FORTER(this.TER.TERCOD, "I");
          }
          else {
            //SEFAMTER_LIB$DTNERFRMA("DEBE INGRESAR UN TERCERO PARA MODIFICARLO O CREAR UN NUEVO TERCERO.");
          }
        }
        else {
          //new OracleFormsBuiltins(this).go_item("REF_PARAM.NITTER");
        }
      }
      else {
        //new OracleFormsBuiltins(this).go_item("REF_PARAM.NITTER");
      }
    }
    else if ((this.PARAMETER.get("P_PERMISOS") == "MOD" || this.PARAMETER.get("P_PERMISOS") == "CON")) {
      //SEFAMTER_LIB$DTNERFRMA("NO TIENE PERMISOS DE CREACIÓN.");
    }
    console.log("Exiting SEFAMTER_refParam_btnCreater_whenButtonPressed");
  }

  //#region PLSQL
  // BEGIN CLEAR_RECORD;
  // GO_BLOCK('TER');
  // CLEAR_BLOCK;
  // GO_ITEM('REF_PARAM.NITTER'); END;
  //#endregion
  async SEFAMTER_refParam_btnLimpiar_whenButtonPressed() {
    console.log("Entering SEFAMTER_refParam_btnLimpiar_whenButtonPressed");
    //new OracleFormsBuiltins(this).clear_record();
    //new OracleFormsBuiltins(this).go_block("TER");
    //new OracleFormsBuiltins(this).clear_block();
    //new OracleFormsBuiltins(this).go_item("REF_PARAM.NITTER");
    console.log("Exiting SEFAMTER_refParam_btnLimpiar_whenButtonPressed");
  }

  //#region PLSQL
  // DECLARE
  //  V_CADENA VARCHAR2(2000);
  // BEGIN
  //  
  //  IF :NITTER IS NOT NULL THEN
  //   V_CADENA := 'UPPER(TERCOD) LIKE '''||:NITTER||'''';
  // 
  //  ELSIF :NOM1 IS NOT NULL THEN
  //   V_CADENA := 'UPPER(TERNOM) LIKE '''||:NOM1||'%''';
  //   IF :APE1 IS NOT NULL THEN  
  //    V_CADENA := V_CADENA||' AND UPPER(TERAPE) LIKE '''||:APE1||'%''';
  //   END IF;
  //  ELSE
  //   IF :APE1 IS NOT NULL  THEN  
  //    V_CADENA := ' UPPER(TERAPE) LIKE ''%'||:APE1||'%''';
  //   END IF;
  //  
  //  END IF;
  // 
  // 
  //  SET_BLOCK_PROPERTY('TER', DEFAULT_WHERE, V_CADENA);
  //   GO_BLOCK('TER');
  //   
  //   EXECUTE_QUERY;
  //   
  //   GO_ITEM('TER.BTN_SELTER');
  // 
  // END;
  //#endregion
  async SEFAMTER_refParam_btnBuscar_whenButtonPressed() {
    console.log("Entering SEFAMTER_refParam_btnBuscar_whenButtonPressed");
    let V_CADENA: string = null;
    if ((this.REF_PARAM.NITTER != null)) {
      V_CADENA = "UPPER(TERCOD) LIKE ''" + this.REF_PARAM.NITTER + "''";
    }
    else if ((this.REF_PARAM.NOM1 != null)) {
      V_CADENA = "UPPER(TERNOM) LIKE ''" + this.REF_PARAM.NOM1 + "%''";
      if ((this.REF_PARAM.APE1 != null)) {
        V_CADENA = V_CADENA + " AND UPPER(TERAPE) LIKE ''" + this.REF_PARAM.APE1 + "%''";
      }
    }
    else {
      if ((this.REF_PARAM.APE1 != null)) {
        V_CADENA = " UPPER(TERAPE) LIKE ''%" + this.REF_PARAM.APE1 + "%''";
      }
    }
    //new OracleFormsBuiltins(this).set_block_property("TER", DEFAULT_WHERE, V_CADENA);
    new OracleFormsBuiltins(this).go_block("TER");
    new OracleFormsBuiltins(this).execute_query();
    //new OracleFormsBuiltins(this).go_item("TER.BTN_SELTER");
    console.log("Exiting SEFAMTER_refParam_btnBuscar_whenButtonPressed");
  }

  //#region PLSQL
  // BEGIN ; END;
  //#endregion
  async SEFAMTER_toolbar_whenButtonPressed() {
    console.log("Entering SEFAMTER_toolbar_whenButtonPressed");
    console.log("Exiting SEFAMTER_toolbar_whenButtonPressed");
  }

  //#region PLSQL
  // BEGIN ; END;
  //#endregion
  async SEFAMTER_toolbar_whenMouseLeave() {
    console.log("Entering SEFAMTER_toolbar_whenMouseLeave");
    console.log("Exiting SEFAMTER_toolbar_whenMouseLeave");
  }

  //#region PLSQL
  // BEGIN ; END;
  //#endregion
  async SEFAMTER_toolbar_whenNewFormInstance() {
    console.log("Entering SEFAMTER_toolbar_whenNewFormInstance");
    console.log("Exiting SEFAMTER_toolbar_whenNewFormInstance");
  }

  //#region PLSQL
  // BEGIN ; END;
  //#endregion
  async SEFAMTER_toolbar_first_whenButtonPressed() {
    console.log("Entering SEFAMTER_toolbar_first_whenButtonPressed");
    console.log("Exiting SEFAMTER_toolbar_first_whenButtonPressed");
  }

  //#region PLSQL
  // BEGIN ; END;
  //#endregion
  async SEFAMTER_toolbar_lastr_whenButtonPressed() {
    console.log("Entering SEFAMTER_toolbar_lastr_whenButtonPressed");
    console.log("Exiting SEFAMTER_toolbar_lastr_whenButtonPressed");
  }


  SEFAMTER_GET_SYSDATE(): Date {
    return new Date();
  }

  SEFAMTER_PANTALLA() {
    this.titleService.setTitle('S  I  G  L  E  A  S  E  - ');
  }

}
