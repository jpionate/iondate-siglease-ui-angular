import { Component, OnInit, ViewChildren, Input, QueryList } from '@angular/core';
import {
  ANTBALXTER_10, TOOLBAR, ANTBALXTER, BASE, ANTBALXTER_7, ANTBALXTER_6, ANTBALXTER_5, ANTBALXTER_4, ANTBALXTER_3, ANTBALXTER_13,
  ANTBALXTER_2, VARIABLE, ANTBALXTER_1, ANTBALXTER_11, ANTBALXTER_12, ANTBALXTER_9, ANTBALXTER_8
} from "./anfbater_models";
import { Rest } from '../_utils/Rest';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { MatTableDataSource } from '@angular/material/table';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { componentFactoryName } from '@angular/compiler';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-anfbater',
  templateUrl: './anfbater.component.html',
  styleUrls: ['./anfbater.component.css']
})
export class AnfbaterComponent implements OnInit {
  public ANTBALXTER_10: ANTBALXTER_10[] = [];
  public TOOLBAR: TOOLBAR = new TOOLBAR();
  public ANTBALXTER: ANTBALXTER[] = [];
  public BASE: BASE = new BASE();
  public ANTBALXTER_7: ANTBALXTER_7[] = [];
  public ANTBALXTER_6: ANTBALXTER_6[] = [];
  public ANTBALXTER_5: ANTBALXTER_5[] = [];
  public ANTBALXTER_4: ANTBALXTER_4[] = [];
  public ANTBALXTER_3: ANTBALXTER_3[] = [];
  public ANTBALXTER_13: ANTBALXTER_13[] = [];
  public ANTBALXTER_2: ANTBALXTER_2[] = [];
  public VARIABLE: VARIABLE = new VARIABLE();
  public ANTBALXTER_1: ANTBALXTER_1[] = [];
  public ANTBALXTER_11: ANTBALXTER_11[] = [];
  public ANTBALXTER_12: ANTBALXTER_12[] = [];
  public ANTBALXTER_9: ANTBALXTER_9[] = [];
  public ANTBALXTER_8: ANTBALXTER_8[] = [];
  public MESSAGE_LINE: string;
  oracleFormsBuiltins: OracleFormsBuiltins;

  @Input() public PARAMETER: Map<string, string> = new Map([
    ['P_OFICINA', null],
    ['P_NIT', null],
    ['P_CTRL', null],
  ]);
  currentBlock: BlockComponent;
  currentItem: ItemInputComponent;
  @ViewChildren(ItemInputComponent) itemInputComponents: QueryList<ItemInputComponent>;
  @ViewChildren(BlockComponent) blockComponents: QueryList<BlockComponent>;
  constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
    this.oracleFormsBuiltins = new OracleFormsBuiltins(this);
  }
  currentCanvas: string = "CANVAS1"
  visibleCanvases: []
  isKeypressProcessing: boolean;

  async ngOnInit() {
    this.isKeypressProcessing = true;
    this._SYSTEM_SERVICE.set("CURRENT_FORM", "ANFBATER")
    await this.ANFBATER_whenNewFormInstance();
    this.isKeypressProcessing = false;
  }

  //#region PLSQL
  // BEGIN :SYSTEM.MESSAGE_LEVEL:=5;
  //   :BASE.FECHA   := SYSDATE;
  //   :BASE.USUARIO := USER;
  //   :BASE.FORMA   := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
  //   :BASE.BD      := GET_APPLICATION_PROPERTY(CONNECT_STRING);
  // 
  //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
  //      :BASE.BASE_DAT := 'PRODUCCION';
  //   ELSE
  //      :BASE.BASE_DAT := 'DESARROLLO';
  //   END IF; 
  //  ---------------------------------------------------------------------
  // -- LOGO
  // ---------------------------------------------------------------------
  // :BASE.BASE_DAT := UPPER(:BASE.BD) ;
  // DECLARE 
  //  V_IMAGEN VARCHAR2(20);
  // 
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
  //    READ_IMAGE_FILE('LOGO_LEASFORM.GIF','GIF','BASE.LOGO'); 
  //  END IF;
  // END; 
  // ---------------------------------------------------------
  //#endregion
  async ANFBATER_whenNewFormInstance() {
    console.log("Entering ANFBATER_whenNewFormInstance");
    this._SYSTEM_SERVICE.set('MESSAGE_LEVEL', '5');
    this.BASE.FECHA = PLSQLBuiltins.sysdate();
    this.BASE.USUARIO = PLSQLBuiltins.user();
    this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
    //this.BASE.BD = this.oracleFormsBuiltins.get_application_property(CONNECT_STRING);
    if (["FIN1", "FIN1"].indexOf(this.BASE.BD) != -1) {
      this.BASE.BASE_DAT = "PRODUCCION";
    }
    else {
      this.BASE.BASE_DAT = "DESARROLLO";
    }
    this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);

    let V_IMAGEN: string = null;
    if ((this.PARAMETER.get('P_OFICINA') != null)) {
      // construct payload
      let payload1 = new Map();
      payload1.set("P_OFICINA", this.PARAMETER.get('P_OFICINA'));
      // call REST API
      let result1 = await Rest.post("/anfbater/anfbater_whennewforminstance_query1", payload1);
      // get values from result

      if (result1 != null && result1.length != 0) {
        V_IMAGEN = result1[0].get("V_IMAGEN");
        V_IMAGEN = "LOGO_LEASFORM.GIF";
        this.oracleFormsBuiltins.read_image_file(V_IMAGEN, "GIF", "BASE.LOGO");
      }
    }
    else {
      this.oracleFormsBuiltins.read_image_file("LOGO_LEASFORM.GIF", "GIF", "BASE.LOGO");
    }
    console.log("Exiting ANFBATER_whenNewFormInstance");
  }

  //#region PLSQL
  // DECLARE
  //  T_RESPUESTA NUMBER;
  //  TIPTER TER.TERPER%TYPE;
  // BEGIN
  //  BEGIN
  //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) ,TERPER
  //    INTO :DES_NITTER,TIPTER
  //    FROM TER
  //    WHERE TERCOD=:DIAXBA_CODTER;
  //   EXCEPTION
  //    WHEN NO_DATA_FOUND THEN
  //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
  //    RAISE FORM_TRIGGER_FAILURE;
  //  END;
  // IF TIPTER <> 'J' THEN  
  //      LIB$ALERTA ('MENSAJE','TERCERO DIFERENTE A PERSONA JURIDICA ES PERSONA NATURAL ...',NULL,NULL,NULL,T_RESPUESTA);
  //   --- RAISE FORM_TRIGGER_FAILURE;
  // END IF;
  // END;  
  //#endregion
  async ANFBATER_variable_diaxbaCodter_whenValidateItem() {
    console.log("Entering ANFBATER_variable_diaxbaCodter_whenValidateItem");
    let T_RESPUESTA: number = null;
    let TIPTER: null = null;
    // construct payload
    let payload1 = new Map();
    payload1.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);

    // call REST API
    let result1 = await Rest.post("/anfbater_variable/anfbater_variable_diaxbacodter_whenvalidateitem_query1", payload1);
    // get values from result
    if (result1 == null || result1.length == 0) {
      alert("TERCERO INEXISTENTE ...");
      return;
    }
    this.VARIABLE.DES_NITTER = result1[0]["DES_NITTER"];
    TIPTER = result1[0]["TIPTER"];

    if (TIPTER != "J") {
      alert("TERCERO DIFERENTE A PERSONA JURIDICA ES PERSONA NATURAL ...");
    }
    console.log("Exiting ANFBATER_variable_diaxbaCodter_whenValidateItem");
  }

  //#region PLSQL
  // DECLARE
  //  T_RESPUESTA NUMBER;
  //  V_CONTADOR NUMBER;
  // BEGIN
  //  V_CONTADOR:=0;
  // BEGIN
  //  SELECT PERDES
  //    INTO :DES_PERCOD
  //    FROM PER
  //    WHERE PERCOD=:DIAXBA_CODPER;
  //   EXCEPTION
  //    WHEN NO_DATA_FOUND THEN
  //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
  //    RAISE FORM_TRIGGER_FAILURE;
  // END;
  //  BEGIN
  //    SELECT COUNT(*)
  //      INTO V_CONTADOR
  //      FROM ANTDIASXBAL
  //     WHERE  DIAXBA_CODTER = :DIAXBA_CODTER
  //       AND  DIAXBA_CODPER = :DIAXBA_CODPER;
  //  END;
  //   IF  V_CONTADOR > 0 THEN
  //      LIB$ALERTA('MENSAJE','ESTE REGISTRO YA SE ENCUENTRA CREADO....',NULL,NULL,NULL,T_RESPUESTA);
  //   BEGIN
  //    SELECT DIAXBA_DIASAN
  //      INTO :DIAXBA_DIASAN
  //      FROM ANTDIASXBAL
  //     WHERE  DIAXBA_CODTER = :DIAXBA_CODTER
  //       AND  DIAXBA_CODPER = :DIAXBA_CODPER;
  //   EXCEPTION
  //    WHEN NO_DATA_FOUND THEN
  //    NULL;
  //  END;
  //  
  //  SET_ITEM_property('diaxba_codter',UPDATEABLE,ATTR_OFF);
  //  SET_ITEM_PROPERTY('diaxba_codter',insert_allowed,property_off);
  //  SET_ITEM_PROPERTY('diaxba_codper',UPDATEABLE,ATTR_OFF);
  //  SET_ITEM_PROPERTY('diaxba_codper',insert_allowed,property_off);
  // 
  //   END IF;    
  // 
  // END; 
  //#endregion
  async ANFBATER_variable_diaxbaCodper_whenValidateItem() {
    console.log("Entering ANFBATER_variable_diaxbaCodper_whenValidateItem");
    let T_RESPUESTA: number = null;
    let V_CONTADOR: number = null;
    V_CONTADOR = 0;
    // construct payload
    let payload1 = new Map();
    payload1.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
    // call REST API
    let result1 = await Rest.post("/anfbater_variable/anfbater_variable_diaxbacodper_whenvalidateitem_query1", payload1);
    // get values from result
    if (result1 == null || result1.length == 0) {
      //ANFBATER_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
      alert("PERIODO INEXISTENTE ...")
      console.log("FORM_TRIGGER_FAILURE");
      //throw new Error('FORM_TRIGGER_FAILURE');
    }
    this.VARIABLE.DES_PERCOD = result1[0]["DES_PERCOD"]

    // construct payload
    let payload2 = new Map();
    payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
    payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
    // call REST API
    let result2 = await Rest.post("/anfbater_variable/anfbater_variable_diaxbacodper_whenvalidateitem_query2", payload2);
    // get values from result
    V_CONTADOR = result2[0]["V_CONTADOR"]
    if (V_CONTADOR > 0) {
      alert("ESTE REGISTRO YA SE ENCUENTRA CREADO....");
      // construct payload
      let payload3 = new Map();
      payload3.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
      payload3.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
      // call REST API
      let result3 = await Rest.post("/anfbater_variable/anfbater_variable_diaxbacodper_whenvalidateitem_query3", payload3);
      // get values from result
      if (result3 == null || result3.length == 0) {
      }
      this.VARIABLE.DIAXBA_DIASAN = result3[0]["DIAXBA_DIASAN"]
    }

    this.oracleFormsBuiltins.set_item_property('diaxba_codter', 'UPDATEABLE', 'ATTR_OFF')
    this.oracleFormsBuiltins.set_item_property('diaxba_codter', 'insert_allowed', 'property_off');
    this.oracleFormsBuiltins.set_item_property('diaxba_codper', 'UPDATEABLE', 'ATTR_OFF');
    this.oracleFormsBuiltins.set_item_property('diaxba_codper', 'insert_allowed', 'property_off');

    console.log("Exiting ANFBATER_variable_diaxbaCodper_whenValidateItem");
  }

  //#region PLSQL
  // DECLARE
  //  T_RESPUESTA NUMBER;
  //  V_CONTADOR  NUMBER(8);
  //  V_CONTADOR1  NUMBER(8);
  //  MODULO      NUMBER(18);
  // BEGIN
  //  V_CONTADOR  :=0;
  //  V_CONTADOR1 :=0;
  //     
  //  IF NVL(:DIAXBA_DIASAN,0)=0 THEN
  //     LIB$ALERTA('MENSAJE','ESTE CAMPO NO PUEDE SER NULO NI CERO .....',NULL,NULL,NULL,T_RESPUESTA);
  //     RAISE FORM_TRIGGER_FAILURE;
  //  ELSE
  //  BEGIN
  //   BEGIN
  //   SELECT MOD(:DIAXBA_DIASAN,30) 
  //     INTO MODULO
  //     FROM DUAL;
  //   END;
  //   IF MODULO <> 0 THEN
  //    LIB$ALERTA ('MENSAJE','ESTE CAMPO NO ES MULTIPLO DE 30 DÍAS .....',NULL,NULL,NULL,T_RESPUESTA);
  //    RAISE FORM_TRIGGER_FAILURE;
  //   END IF;
  //  END; 
  // BEGIN
  //   SELECT COUNT(*)
  //     INTO V_CONTADOR1
  //    FROM ANTDIASXBAL
  //     WHERE DIAXBA_CODTER =:DIAXBA_CODTER
  //       AND DIAXBA_CODPER  =:DIAXBA_CODPER;
  //  
  //  END;
  //  IF V_CONTADOR1 = 0 THEN
  //  
  //      INSERT INTO ANTDIASXBAL(DIAXBA_CODTER  ,DIAXBA_CODPER  ,DIAXBA_DIASAN  )
  //                 VALUES (:DIAXBA_CODTER  ,:DIAXBA_CODPER  ,:DIAXBA_DIASAN  );
  //      COMMIT;
  //  ELSE
  //     UPDATE ANTDIASXBAL
  //       SET DIAXBA_DIASAN=:DIAXBA_DIASAN 
  //     WHERE DIAXBA_CODTER =:DIAXBA_CODTER
  //       AND DIAXBA_CODPER  =:DIAXBA_CODPER;
  //   COMMIT;
  //  END IF; 
  //   SELECT COUNT(*)
  //     INTO V_CONTADOR
  //     FROM ANTBALXTER
  //     WHERE BAXTER_CODTER=:DIAXBA_CODTER
  //       AND BAXTER_CODPER=:DIAXBA_CODPER;
  //  IF V_CONTADOR =0 THEN
  //       PUP_INSERT_BLOQUES ;
  //      COMMIT;
  //      GO_BLOCK('ANTBALXTER');
  //      EXECUTE_QUERY;
  //         GO_BLOCK('ANTBALXTER_1');
  //      EXECUTE_QUERY;
  //         GO_BLOCK('ANTBALXTER_2');
  //      EXECUTE_QUERY;
  //         GO_BLOCK('ANTBALXTER_3');
  //      EXECUTE_QUERY;
  //        GO_BLOCK('ANTBALXTER');
  //  ELSE  
  //  GO_BLOCK('ANTBALXTER');
  //  EXECUTE_QUERY;
  //         GO_BLOCK('ANTBALXTER_1');
  //      EXECUTE_QUERY;
  //         GO_BLOCK('ANTBALXTER_2');
  //      EXECUTE_QUERY;
  //         GO_BLOCK('ANTBALXTER_3');
  //      EXECUTE_QUERY;
  //        GO_BLOCK('ANTBALXTER');
  // 
  // END IF;
  // END IF;
  // END;
  //#endregion
  async ANFBATER_variable_diaxbaDiasan_keyNextItem() {
    console.log("Entering ANFBATER_variable_diaxbaDiasan_keyNextItem");
    let T_RESPUESTA: number = null;
    let V_CONTADOR: number = null;
    let V_CONTADOR1: number = null;
    let MODULO: number = null;
    V_CONTADOR = 0;
    V_CONTADOR1 = 0;
    if (this.VARIABLE.DIAXBA_DIASAN == null ? 0 : this.VARIABLE.DIAXBA_DIASAN == 0) {
      alert("ESTE CAMPO NO PUEDE SER NULO NI CERO .....");
      return
    }
    else {
      // construct payload
      let payload1 = new Map();
      payload1.set("DIAXBA_DIASAN", this.VARIABLE.DIAXBA_DIASAN);
      // call REST API
      let result1 = await Rest.post("/anfbater_variable/anfbater_variable_diaxbadiasan_keynextitem_query1", payload1);
      // get values from result
      MODULO = result1[0]["MODULO"]
      if (MODULO != 0) {
        alert("ESTE CAMPO NO ES MULTIPLO DE 30 DÍAS .....");
        return
      }
      // construct payload
      let payload2 = new Map();
      payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
      payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
      // call REST API
      let result2 = await Rest.post("/anfbater_variable/anfbater_variable_diaxbadiasan_keynextitem_query2", payload2);
      // get values from result
      V_CONTADOR1 = result2[0]["V_CONTADOR1"]
      if (V_CONTADOR1 == 0) {
        // construct payload
        let payload3 = new Map();
        payload3.set('DIAXBA_CODTER', this.VARIABLE.DIAXBA_CODTER);
        payload3.set('DIAXBA_CODPER', this.VARIABLE.DIAXBA_CODPER);
        payload3.set('DIAXBA_DIASAN', this.VARIABLE.DIAXBA_DIASAN.toString());
        // call REST API
        let result3 = await Rest.post("/anfbater_variable/anfbater_variable_diaxbadiasan_keynextitem_query3", payload3);
      }
      else {
        // construct payload
        let payload5 = new Map();
        payload5.set('DIAXBA_CODTER', this.VARIABLE.DIAXBA_CODTER);
        payload5.set('DIAXBA_CODPER', this.VARIABLE.DIAXBA_CODPER);
        payload5.set('DIAXBA_DIASAN', this.VARIABLE.DIAXBA_DIASAN.toString());
        // call REST API
        let result5 = await Rest.post("/anfbater_variable/anfbater_variable_diaxbadiasan_keynextitem_query5", payload5);
      }
      // construct payload
      let payload7 = new Map();
      payload7.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
      payload7.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
      // call REST API
      let result7 = await Rest.post("/anfbater_variable/anfbater_variable_diaxbadiasan_keynextitem_query7", payload7);
      // get values from result
      V_CONTADOR = result7[0]["V_CONTADOR"];
      if (V_CONTADOR == 0) {
        this.oracleFormsBuiltins.go_block("ANTBALXTER");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_1");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_3");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER");
      }
      else {
        this.oracleFormsBuiltins.go_block("ANTBALXTER");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_1");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_3");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER");
      }
    }
    console.log("Exiting ANFBATER_variable_diaxbaDiasan_keyNextItem");
  }

  //#region PLSQL
  // declare
  //  t_respuesta number;
  // bEGIN       
  //  if :variable.DIAXBA_CODTER is null or :DIAXBA_CODPER is null then
  //     Lib$alerta('mensaje','El tercero no Seleccionado o Periodo no seleccionado .....',null,null,null,t_respuesta);
  //     raise form_trigger_failure;
  //  else
  //  commit;
  //  go_block('ANTBALXTER_4');
  //  execute_query;
  //  go_block('ANTBALXTER_5');
  //  Execute_query;
  //  go_block('ANTBALXTER_6');
  //  Execute_query;
  //  go_block('ANTBALXTER_7');
  //  execute_query;
  //  Go_block('ANTBALXTER_4');
  //  end if;
  // END;
  //#endregion
  ANFBATER_variable_pasivo_whenMouseClick() {
    let t_respuesta: number;

    if (!this.VARIABLE.DIAXBA_CODTER || !this.VARIABLE.DIAXBA_CODPER) {
      alert('El tercero no Seleccionado o Periodo no seleccionado .....')
      //throw new Error('FORM_TRIGGER_FAILURE');
    }
  }



  async ANFBATER_variable_diaxbaCodter_whenValidateItem_wrapped() {
    console.log('+ ANFBATER_variable_diaxbaCodter_whenValidateItem_wrapped')
    this.isKeypressProcessing = true;
    await this.ANFBATER_variable_diaxbaCodter_whenValidateItem();
    this.isKeypressProcessing = false;
    console.log('- ANFBATER_variable_diaxbaCodter_whenValidateItem_wrapped')
  }

  async ANFBATER_variable_diaxbaCodper_whenValidateItem_wrapped() {
    console.log('+ ANFBATER_variable_diaxbaCodper_whenValidateItem_wrapped')
    this.isKeypressProcessing = true;
    await this.ANFBATER_variable_diaxbaCodper_whenValidateItem();
    this.isKeypressProcessing = false;
    console.log('- ANFBATER_variable_diaxbaCodper_whenValidateItem_wrapped')
  }

  async ANFBATER_variable_diaxbaDiasan_keyNextItem_wrapped() {
    console.log('+ ANFBATER_variable_diaxbaDiasan_keyNextItem_wrapped')
    this.isKeypressProcessing = true;
    await this.ANFBATER_variable_diaxbaDiasan_keyNextItem();
    this.isKeypressProcessing = false;
    console.log('- ANFBATER_variable_diaxbaDiasan_keyNextItem_wrapped')
  }

  async ANFBATER_variable_pasivo_whenMouseClick_wrapped() {
    console.log('+ ANFBATER_variable_diaxbaDiasan_keyNextItem_wrapped')
    this.isKeypressProcessing = true;
    await this.ANFBATER_variable_pasivo_whenMouseClick();
    this.isKeypressProcessing = false;
    console.log('- ANFBATER_variable_diaxbaDiasan_keyNextItem_wrapped')
  }


  dataSource1 = new MatTableDataSource<any>(this.ANTBALXTER);
  dataSource2 = new MatTableDataSource<any>(this.ANTBALXTER_1);
  dataSource3 = new MatTableDataSource<any>(this.ANTBALXTER_2);
  dataSource4 = new MatTableDataSource<any>(this.ANTBALXTER_3);
  displayedColumns = ['col1', 'col2', 'col3', 'col4'];
}