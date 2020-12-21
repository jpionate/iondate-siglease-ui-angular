import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { TER, SETPARTIC, ENT2, ENT, TOOLBAR, SETLEGFIS, SETTARCRE, SETSOCIOS, BASE, FAM, SETJUNTAD, SETSUPLETE, TER1, SETEXTBAN, DESCRIBE } from "./anfterce_models";
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';



@Component({
  selector: 'app-anfterce',
  templateUrl: './anfterce.component.html',
})
export class AnfterceComponent implements OnInit {
  public TER: TER = new TER();
  public SETPARTIC: SETPARTIC = new SETPARTIC();
  public ENT2: ENT2 = new ENT2();
  public ENT: ENT = new ENT();
  public TOOLBAR: TOOLBAR = new TOOLBAR();
  public SETLEGFIS: SETLEGFIS = new SETLEGFIS();
  public SETTARCRE: SETTARCRE = new SETTARCRE();
  public SETSOCIOS: SETSOCIOS = new SETSOCIOS();
  public BASE: BASE = new BASE();
  public FAM: FAM = new FAM();
  public SETJUNTAD: SETJUNTAD = new SETJUNTAD();
  public SETSUPLETE: SETSUPLETE = new SETSUPLETE();
  public TER1: TER1 = new TER1();
  public SETEXTBAN: SETEXTBAN = new SETEXTBAN();
  public DESCRIBE: DESCRIBE = new DESCRIBE();
  public MESSAGE_LINE: string;
  @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
  currentBlock: BlockComponent;
  currentItem: ItemInputComponent;
  @ViewChildren(BlockComponent) blockComponents;
  constructor(private _SYSTEM_SERVICE: SystemService) {
  }
  currentCanvas: string = "CANVAS1"
  visibleCanvases: []
  isKeypressProcessing: boolean;

  async ngOnInit() {

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
        async ANFTERCE_onClearDetails() {
          console.log("Entering ANFTERCE_onClearDetails");
          //ANFTERCE_CLEAR_ALL_MASTER_DETAILS();
          console.log("Exiting ANFTERCE_onClearDetails");
      }

      //#region PLSQL
      // BEGIN LIST_VALUES; END;
      //#endregion
      async ANFTERCE_whenMouseDoubleclick() {
          console.log("Entering ANFTERCE_whenMouseDoubleclick");
          //new OracleFormsBuiltins(this).list_values();
          console.log("Exiting ANFTERCE_whenMouseDoubleclick");
      }

      //#region PLSQL
      // SYSTEM.MESSAGE_LEVEL:=5;
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
      //   
      //   ---------------------------------------------------------------------
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
      // ------------------------------------------------------
      //   
      // GO_BLOCK('TER');
      // ENTER_QUERY;
      // 
      // 
      // DECLARE
      //  V_FORMA VARCHAR2(10);
      // BEGIN
      // V_FORMA := F_SIGUIENTE_F;
      // END;
      //#endregion
      async ANFTERCE_whenNewFormInstance() {
          console.log("Entering ANFTERCE_whenNewFormInstance");
          console.log("Exiting ANFTERCE_whenNewFormInstance");
      }

      //#region PLSQL
      // BEGIN
      //   PANTALLA;
      //   PINCIARSGRDADOFCNAS;
      // END;
      //#endregion
      async ANFTERCE_preForm() {
          console.log("Entering ANFTERCE_preForm");
          //ANFTERCE_PANTALLA();
          //ANFTERCE_PINCIARSGRDADOFCNAS();
          console.log("Exiting ANFTERCE_preForm");
      }

      //#region PLSQL
      // BEGIN
      //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
      //     UP;
      //   END IF;
      // END;
      //#endregion
      async ANFTERCE_keyUp() {
          console.log("Entering ANFTERCE_keyUp");
          if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
              //new OracleFormsBuiltins(this).up();
          }
          console.log("Exiting ANFTERCE_keyUp");
      }

      //#region PLSQL
      // BEGIN
      //   IF SYSTEM.LAST_RECORD='FALSE' THEN
      //      DOWN;
      //   END IF;
      // END;
      //#endregion
      async ANFTERCE_keyDown() {
          console.log("Entering ANFTERCE_keyDown");
          //if (this._SYSTEM_SERVICE.get(new OracleFormsBuiltins(this).last_record) == "FALSE") {
              //new OracleFormsBuiltins(this).down();
          //}
          console.log("Exiting ANFTERCE_keyDown");
      }

      //#region PLSQL
      // BEGIN HIDE_VIEW('CANVAS2');
      // SYNCHRONIZE;
      // HIDE_VIEW('CANVAS3');
      // SYNCHRONIZE;
      // HIDE_VIEW('CANVAS4');
      // SYNCHRONIZE;
      // HIDE_VIEW('CANVAS5');
      // SYNCHRONIZE; END;
      //#endregion
      async ANFTERCE_ter_whenMouseClick() {
          console.log("Entering ANFTERCE_ter_whenMouseClick");
          // new OracleFormsBuiltins(this).hide_view("CANVAS2");
          // new OracleFormsBuiltins(this).synchronize();
          // new OracleFormsBuiltins(this).hide_view("CANVAS3");
          // new OracleFormsBuiltins(this).synchronize();
          // new OracleFormsBuiltins(this).hide_view("CANVAS4");
          // new OracleFormsBuiltins(this).synchronize();
          // new OracleFormsBuiltins(this).hide_view("CANVAS5");
          // new OracleFormsBuiltins(this).synchronize();
          console.log("Exiting ANFTERCE_ter_whenMouseClick");
      }

      async ANFTERCE_ter_keyNxtblk() {
          // null;
      }

      //#region PLSQL
      // BEGIN --
      // -- BEGIN DEFAULT RELATION DECLARE SECTION
      // --
      // DECLARE
      //   DUMMY_DEFINE VARCHAR2(1);
      //   --
      //   -- BEGIN FAM DETAIL DECLARE SECTION
      //   --
      //   CURSOR FAM_CUR IS      
      //     SELECT 1 FROM FAM     
      //     WHERE FAMENT = :TER.TERCOD;
      //   --
      //   -- END FAM DETAIL DECLARE SECTION
      //   --
      //   --
      //   -- BEGIN ENT DETAIL DECLARE SECTION
      //   --
      //   CURSOR ENT_CUR IS      
      //     SELECT 1 FROM ENT     
      //     WHERE ENTCOD = :TER.TERCOD;
      //   --
      //   -- END ENT DETAIL DECLARE SECTION
      //   --
      //   --
      //   -- BEGIN TER1 DETAIL DECLARE SECTION
      //   --
      //   CURSOR TER1_CUR IS      
      //     SELECT 1 FROM TER     
      //     WHERE TERCOD = :TER.TERCOD;
      //   --
      //   -- END TER1 DETAIL DECLARE SECTION
      //   --
      //   --
      //   -- BEGIN SETEXTBAN DETAIL DECLARE SECTION
      //   --
      //   CURSOR SETEXTBAN_CUR IS      
      //     SELECT 1 FROM SETEXTBAN     
      //     WHERE EXTBAN_CODTER = :TER.TERCOD;
      //   --
      //   -- END SETEXTBAN DETAIL DECLARE SECTION
      //   --
      //   --
      //   -- BEGIN SETTARCRE DETAIL DECLARE SECTION
      //   --
      //   CURSOR SETTARCRE_CUR IS      
      //     SELECT 1 FROM SETTARCRE     
      //     WHERE TARCRE_CODTER = :TER.TERCOD;
      //   --
      //   -- END SETTARCRE DETAIL DECLARE SECTION
      //   --
      //   --
      //   -- BEGIN SETPARTIC DETAIL DECLARE SECTION
      //   --
      //   CURSOR SETPARTIC_CUR IS      
      //     SELECT 1 FROM SETPARTIC     
      //     WHERE PARTIC_CODTER = :TER.TERCOD;
      //   --
      //   -- END SETPARTIC DETAIL DECLARE SECTION
      //   --
      //   --
      //   -- BEGIN SETSOCIOS DETAIL DECLARE SECTION
      //   --
      //   CURSOR SETSOCIOS_CUR IS      
      //     SELECT 1 FROM SETSOCIOS S     
      //     WHERE S.SOCIOS_PRINCI = :TER.TERCOD;
      //   --
      //   -- END SETSOCIOS DETAIL DECLARE SECTION
      //   --
      //   --
      //   -- BEGIN SETJUNTAD DETAIL DECLARE SECTION
      //   --
      //   CURSOR SETJUNTAD_CUR IS      
      //     SELECT 1 FROM SETJUNTAD S     
      //     WHERE S.JUNTAD_PRINCI = :TER.TERCOD;
      //   --
      //   -- END SETJUNTAD DETAIL DECLARE SECTION
      //   --
      //   --
      //   -- BEGIN SETSUPLETE DETAIL DECLARE SECTION
      //   --
      //   CURSOR SETSUPLETE_CUR IS      
      //     SELECT 1 FROM SETSUPLETE S     
      //     WHERE S.SUPLET_PRINCI = :TER.TERCOD;
      //   --
      //   -- END SETSUPLETE DETAIL DECLARE SECTION
      //   --
      //   --
      //   -- BEGIN SETLEGFIS DETAIL DECLARE SECTION
      //   --
      //   CURSOR SETLEGFIS_CUR IS      
      //     SELECT 1 FROM SETLEGFIS S     
      //     WHERE S.LEGFIS_PRINCI = :TER.TERCOD;
      //   --
      //   -- END SETLEGFIS DETAIL DECLARE SECTION
      //   --
      // --
      // -- END DEFAULT RELATION DECLARE SECTION
      // --
      // --
      // -- BEGIN DEFAULT RELATION PROGRAM SECTION
      // --
      // BEGIN
      //   --
      //   -- BEGIN FAM DETAIL PROGRAM SECTION
      //   --
      //   OPEN FAM_CUR;     
      //   FETCH FAM_CUR INTO DUMMY_DEFINE;     
      //   IF ( FAM_CUR%FOUND ) THEN     
      //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
      //     CLOSE FAM_CUR;     
      //     RAISE FORM_TRIGGER_FAILURE;     
      //   END IF;
      //   CLOSE FAM_CUR;
      //   --
      //   -- END FAM DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN ENT DETAIL PROGRAM SECTION
      //   --
      //   OPEN ENT_CUR;     
      //   FETCH ENT_CUR INTO DUMMY_DEFINE;     
      //   IF ( ENT_CUR%FOUND ) THEN     
      //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
      //     CLOSE ENT_CUR;     
      //     RAISE FORM_TRIGGER_FAILURE;     
      //   END IF;
      //   CLOSE ENT_CUR;
      //   --
      //   -- END ENT DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN TER1 DETAIL PROGRAM SECTION
      //   --
      //   OPEN TER1_CUR;     
      //   FETCH TER1_CUR INTO DUMMY_DEFINE;     
      //   IF ( TER1_CUR%FOUND ) THEN     
      //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
      //     CLOSE TER1_CUR;     
      //     RAISE FORM_TRIGGER_FAILURE;     
      //   END IF;
      //   CLOSE TER1_CUR;
      //   --
      //   -- END TER1 DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETEXTBAN DETAIL PROGRAM SECTION
      //   --
      //   OPEN SETEXTBAN_CUR;     
      //   FETCH SETEXTBAN_CUR INTO DUMMY_DEFINE;     
      //   IF ( SETEXTBAN_CUR%FOUND ) THEN     
      //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
      //     CLOSE SETEXTBAN_CUR;     
      //     RAISE FORM_TRIGGER_FAILURE;     
      //   END IF;
      //   CLOSE SETEXTBAN_CUR;
      //   --
      //   -- END SETEXTBAN DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETTARCRE DETAIL PROGRAM SECTION
      //   --
      //   OPEN SETTARCRE_CUR;     
      //   FETCH SETTARCRE_CUR INTO DUMMY_DEFINE;     
      //   IF ( SETTARCRE_CUR%FOUND ) THEN     
      //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
      //     CLOSE SETTARCRE_CUR;     
      //     RAISE FORM_TRIGGER_FAILURE;     
      //   END IF;
      //   CLOSE SETTARCRE_CUR;
      //   --
      //   -- END SETTARCRE DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETPARTIC DETAIL PROGRAM SECTION
      //   --
      //   OPEN SETPARTIC_CUR;     
      //   FETCH SETPARTIC_CUR INTO DUMMY_DEFINE;     
      //   IF ( SETPARTIC_CUR%FOUND ) THEN     
      //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
      //     CLOSE SETPARTIC_CUR;     
      //     RAISE FORM_TRIGGER_FAILURE;     
      //   END IF;
      //   CLOSE SETPARTIC_CUR;
      //   --
      //   -- END SETPARTIC DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETSOCIOS DETAIL PROGRAM SECTION
      //   --
      //   OPEN SETSOCIOS_CUR;     
      //   FETCH SETSOCIOS_CUR INTO DUMMY_DEFINE;     
      //   IF ( SETSOCIOS_CUR%FOUND ) THEN     
      //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
      //     CLOSE SETSOCIOS_CUR;     
      //     RAISE FORM_TRIGGER_FAILURE;     
      //   END IF;
      //   CLOSE SETSOCIOS_CUR;
      //   --
      //   -- END SETSOCIOS DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETJUNTAD DETAIL PROGRAM SECTION
      //   --
      //   OPEN SETJUNTAD_CUR;     
      //   FETCH SETJUNTAD_CUR INTO DUMMY_DEFINE;     
      //   IF ( SETJUNTAD_CUR%FOUND ) THEN     
      //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
      //     CLOSE SETJUNTAD_CUR;     
      //     RAISE FORM_TRIGGER_FAILURE;     
      //   END IF;
      //   CLOSE SETJUNTAD_CUR;
      //   --
      //   -- END SETJUNTAD DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETSUPLETE DETAIL PROGRAM SECTION
      //   --
      //   OPEN SETSUPLETE_CUR;     
      //   FETCH SETSUPLETE_CUR INTO DUMMY_DEFINE;     
      //   IF ( SETSUPLETE_CUR%FOUND ) THEN     
      //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
      //     CLOSE SETSUPLETE_CUR;     
      //     RAISE FORM_TRIGGER_FAILURE;     
      //   END IF;
      //   CLOSE SETSUPLETE_CUR;
      //   --
      //   -- END SETSUPLETE DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETLEGFIS DETAIL PROGRAM SECTION
      //   --
      //   OPEN SETLEGFIS_CUR;     
      //   FETCH SETLEGFIS_CUR INTO DUMMY_DEFINE;     
      //   IF ( SETLEGFIS_CUR%FOUND ) THEN     
      //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
      //     CLOSE SETLEGFIS_CUR;     
      //     RAISE FORM_TRIGGER_FAILURE;     
      //   END IF;
      //   CLOSE SETLEGFIS_CUR;
      //   --
      //   -- END SETLEGFIS DETAIL PROGRAM SECTION
      //   --
      // END;
      // --
      // -- END DEFAULT RELATION PROGRAM SECTION
      // --; END;
      //#endregion
      async ANFTERCE_ter_onCheckDeleteMaster() {
          console.log("Entering ANFTERCE_ter_onCheckDeleteMaster");
          let DUMMY_DEFINE: string = null;
          if (null) {
              //new OracleFormsBuiltins(this).message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          if (null) {
              //new OracleFormsBuiltins(this).message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          if (null) {
              //new OracleFormsBuiltins(this).message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          if (null) {
              //new OracleFormsBuiltins(this).message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          if (null) {
              //new OracleFormsBuiltins(this).message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          if (null) {
              //new OracleFormsBuiltins(this).message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          if (null) {
              //new OracleFormsBuiltins(this).message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          if (null) {
              //new OracleFormsBuiltins(this).message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          if (null) {
              //new OracleFormsBuiltins(this).message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          if (null) {
              //new OracleFormsBuiltins(this).message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          console.log("Exiting ANFTERCE_ter_onCheckDeleteMaster");
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
      //   -- BEGIN FAM DETAIL PROGRAM SECTION
      //   --
      //   IF ( (:TER.TERCOD IS NOT NULL) ) THEN   
      //     REL_ID := FIND_RELATION('TER.TER_FAM');   
      //     QUERY_MASTER_DETAILS(REL_ID, 'FAM');   
      //   END IF;
      //   --
      //   -- END FAM DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN ENT DETAIL PROGRAM SECTION
      //   --
      //   IF ( (:TER.TERCOD IS NOT NULL) ) THEN   
      //     REL_ID := FIND_RELATION('TER.ENT');   
      //     QUERY_MASTER_DETAILS(REL_ID, 'ENT');   
      //   END IF;
      //   --
      //   -- END ENT DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN TER1 DETAIL PROGRAM SECTION
      //   --
      //   IF ( (:TER.TERCOD IS NOT NULL) ) THEN   
      //     REL_ID := FIND_RELATION('TER.TER_TER1');   
      //     QUERY_MASTER_DETAILS(REL_ID, 'TER1');   
      //   END IF;
      //   --
      //   -- END TER1 DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETEXTBAN DETAIL PROGRAM SECTION
      //   --
      //   IF ( (:TER.TERCOD IS NOT NULL) ) THEN   
      //     REL_ID := FIND_RELATION('TER.TER_SETEXTBAN');   
      //     QUERY_MASTER_DETAILS(REL_ID, 'SETEXTBAN');   
      //   END IF;
      //   --
      //   -- END SETEXTBAN DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETTARCRE DETAIL PROGRAM SECTION
      //   --
      //   IF ( (:TER.TERCOD IS NOT NULL) ) THEN   
      //     REL_ID := FIND_RELATION('TER.TER_SETTARCRE');   
      //     QUERY_MASTER_DETAILS(REL_ID, 'SETTARCRE');   
      //   END IF;
      //   --
      //   -- END SETTARCRE DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETPARTIC DETAIL PROGRAM SECTION
      //   --
      //   IF ( (:TER.TERCOD IS NOT NULL) ) THEN   
      //     REL_ID := FIND_RELATION('TER.TER_SETPARTIC');   
      //     QUERY_MASTER_DETAILS(REL_ID, 'SETPARTIC');   
      //   END IF;
      //   --
      //   -- END SETPARTIC DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETSOCIOS DETAIL PROGRAM SECTION
      //   --
      //   IF ( (:TER.TERCOD IS NOT NULL) ) THEN   
      //     REL_ID := FIND_RELATION('TER.TER_ESETSOCIOS');   
      //     QUERY_MASTER_DETAILS(REL_ID, 'SETSOCIOS');   
      //   END IF;
      //   --
      //   -- END SETSOCIOS DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETJUNTAD DETAIL PROGRAM SECTION
      //   --
      //   IF ( (:TER.TERCOD IS NOT NULL) ) THEN   
      //     REL_ID := FIND_RELATION('TER.TER_SETJUNTAD');   
      //     QUERY_MASTER_DETAILS(REL_ID, 'SETJUNTAD');   
      //   END IF;
      //   --
      //   -- END SETJUNTAD DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETSUPLETE DETAIL PROGRAM SECTION
      //   --
      //   IF ( (:TER.TERCOD IS NOT NULL) ) THEN   
      //     REL_ID := FIND_RELATION('TER.TER_SETSUPLETE');   
      //     QUERY_MASTER_DETAILS(REL_ID, 'SETSUPLETE');   
      //   END IF;
      //   --
      //   -- END SETSUPLETE DETAIL PROGRAM SECTION
      //   --
      //   --
      //   -- BEGIN SETLEGFIS DETAIL PROGRAM SECTION
      //   --
      //   IF ( (:TER.TERCOD IS NOT NULL) ) THEN   
      //     REL_ID := FIND_RELATION('TER.TER_SETLEGFIS');   
      //     QUERY_MASTER_DETAILS(REL_ID, 'SETLEGFIS');   
      //   END IF;
      //   --
      //   -- END SETLEGFIS DETAIL PROGRAM SECTION
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
      async ANFTERCE_ter_onPopulateDetails() {
          console.log("Entering ANFTERCE_ter_onPopulateDetails");
          let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
          let STARTITM: string = this._SYSTEM_SERVICE.get("SYSTEM.CURSOR_ITEM");
          //let REL_ID: RELATION = null;
          if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
              //return ret;
          }
          if ((this.TER.TERCOD != null)) {
              //REL_ID = new OracleFormsBuiltins(this).find_relation("TER.TER_FAM");
              //ANFTERCE_QUERY_MASTER_DETAILS(REL_ID, "FAM");
          }
          if ((this.TER.TERCOD != null)) {
              //REL_ID = new OracleFormsBuiltins(this).find_relation("TER.ENT");
              //ANFTERCE_QUERY_MASTER_DETAILS(REL_ID, "ENT");
          }
          if ((this.TER.TERCOD != null)) {
              //REL_ID = new OracleFormsBuiltins(this).find_relation("TER.TER_TER1");
              //ANFTERCE_QUERY_MASTER_DETAILS(REL_ID, "TER1");
          }
          if ((this.TER.TERCOD != null)) {
              //REL_ID = new OracleFormsBuiltins(this).find_relation("TER.TER_SETEXTBAN");
              //ANFTERCE_QUERY_MASTER_DETAILS(REL_ID, "SETEXTBAN");
          }
          if ((this.TER.TERCOD != null)) {
              //REL_ID = new OracleFormsBuiltins(this).find_relation("TER.TER_SETTARCRE");
              //ANFTERCE_QUERY_MASTER_DETAILS(REL_ID, "SETTARCRE");
          }
          if ((this.TER.TERCOD != null)) {
              //REL_ID = new OracleFormsBuiltins(this).find_relation("TER.TER_SETPARTIC");
              //ANFTERCE_QUERY_MASTER_DETAILS(REL_ID, "SETPARTIC");
          }
          if ((this.TER.TERCOD != null)) {
              //REL_ID = new OracleFormsBuiltins(this).find_relation("TER.TER_ESETSOCIOS");
              //ANFTERCE_QUERY_MASTER_DETAILS(REL_ID, "SETSOCIOS");
          }
          if ((this.TER.TERCOD != null)) {
              //REL_ID = new OracleFormsBuiltins(this).find_relation("TER.TER_SETJUNTAD");
              //ANFTERCE_QUERY_MASTER_DETAILS(REL_ID, "SETJUNTAD");
          }
          if ((this.TER.TERCOD != null)) {
              //REL_ID = new OracleFormsBuiltins(this).find_relation("TER.TER_SETSUPLETE");
              //ANFTERCE_QUERY_MASTER_DETAILS(REL_ID, "SETSUPLETE");
          }
          if ((this.TER.TERCOD != null)) {
              ///REL_ID = new OracleFormsBuiltins(this).find_relation("TER.TER_SETLEGFIS");
              //ANFTERCE_QUERY_MASTER_DETAILS(REL_ID, "SETLEGFIS");
          }
          if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
              //new OracleFormsBuiltins(this).go_item(STARTITM);
              //ANFTERCE_CHECK_PACKAGE_FAILURE();
          }
          console.log("Exiting ANFTERCE_ter_onPopulateDetails");
      }

      async ANFTERCE_ter_keyPrvblk() {
          // null;
      }

      //#region PLSQL
      // BEGIN
      //  IF :TERPER='N' THEN
      //     :DES_TIPOPERSONA:='PERSONA NATURAL';
      //  ELSIF :TERPER='J' THEN
      //     :DES_TIPOPERSONA:='PERSONA JURIDICA';
      //  END IF;
      // END;
      // 
      // BEGIN
      //   SELECT TDVDES
      //     INTO :DES_VINCULO
      //     FROM OPS$SEGUI.TDV
      //    WHERE TDVCOD=:TERTVI;
      //  EXCEPTION
      //    WHEN NO_DATA_FOUND THEN
      //     NULL;
      // END;
      // BEGIN
      //   SELECT DEPDES
      //     INTO :DES_DEPARTAMENTO
      //     FROM OPS$SEGUI.DEP
      //    WHERE DEPCOD=:TERDEP;
      //    EXCEPTION
      //    WHEN NO_DATA_FOUND THEN
      //     NULL;
      // END;
      // BEGIN
      //     SELECT TDCDES
      //     INTO  :DES_CIUDAD
      //     FROM TDC
      //     WHERE TDCCOD =:TERTCI
      //     AND   TDCDEP =:TERDEP; 
      //    EXCEPTION
      //     WHEN NO_DATA_FOUND THEN
      //      NULL;
      // END;
      // BEGIN
      //   SELECT OFIDES
      //     INTO :DES_OFICINA
      //     FROM OPS$SEGUI.OFI
      //     WHERE (OFICOD=:TEROFC);
      //       EXCEPTION WHEN NO_DATA_FOUND THEN
      //     NULL;
      // END;
      // BEGIN
      //   SELECT  AGEDES
      //     INTO  :DES_AGENCIA
      //    FROM  OPS$SEGUI.AGE
      //     WHERE AGECOD=:TERAGE
      //     AND   AGEOFC=:TEROFC;
      //       EXCEPTION WHEN NO_DATA_FOUND THEN
      //      NULL;
      // END;
      //#endregion
      async ANFTERCE_ter_postQuery() {
          console.log("Entering ANFTERCE_ter_postQuery");
          if (this.TER.TERPER == "N") {
              this.TER.DES_TIPOPERSONA = "PERSONA NATURAL";
          }
          else if (this.TER.TERPER == "J") {
              this.TER.DES_TIPOPERSONA = "PERSONA JURIDICA";
          }
          // construct payload
          let payload1 = new Map();
          payload1.set("TERTVI", this.TER.TERTVI);
          // call REST API
          let result1 = await Rest.post("/anfterce_ter/anfterce_ter_postquery_query1", payload1);
          // get values from result
          this.TER.DES_VINCULO = result1[0].get("DES_VINCULO");
          if (result1 == null || result1.length == 0) {

          }

          // construct payload
          let payload2 = new Map();
          payload2.set("TERDEP", this.TER.TERDEP);
          // call REST API
          let result2 = await Rest.post("/anfterce_ter/anfterce_ter_postquery_query2", payload2);
          // get values from result
          this.TER.DES_DEPARTAMENTO = result2[0].get("DES_DEPARTAMENTO");
          if (result2 == null || result2.length == 0) {

          }

          // construct payload
          let payload3 = new Map();
          payload3.set("TERTCI", this.TER.TERTCI);
          payload3.set("TERDEP", this.TER.TERDEP);
          // call REST API
          let result3 = await Rest.post("/anfterce_ter/anfterce_ter_postquery_query3", payload3);
          // get values from result
          this.TER.DES_CIUDAD = result3[0].get("DES_CIUDAD");
          if (result3 == null || result3.length == 0) {

          }

          // construct payload
          let payload4 = new Map();
          payload4.set("TEROFC", this.TER.TEROFC);
          // call REST API
          let result4 = await Rest.post("/anfterce_ter/anfterce_ter_postquery_query4", payload4);
          // get values from result
          this.TER.DES_OFICINA = result4[0].get("DES_OFICINA");
          if (result4 == null || result4.length == 0) {

          }

          // construct payload
          let payload5 = new Map();
          payload5.set("TERAGE", this.TER.TERAGE);
          payload5.set("TEROFC", this.TER.TEROFC);
          // call REST API
          let result5 = await Rest.post("/anfterce_ter/anfterce_ter_postquery_query5", payload5);
          // get values from result
          this.TER.DES_AGENCIA = result5[0].get("DES_AGENCIA");
          if (result5 == null || result5.length == 0) {

          }

          console.log("Exiting ANFTERCE_ter_postQuery");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //   SELECT OFIDES
      //     INTO :DES_OFICINA
      //     FROM OPS$SEGUI.OFI
      //     WHERE (OFICOD=:TEROFC);
      //       EXCEPTION WHEN NO_DATA_FOUND THEN
      //         LIB$ALERTA('MENSAJE','CODIGO DE LA OFICINA NO EXISTE.....',NULL,NULL,NULL,T_RESPUESTA);
      //         RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ter_terofc_whenValidateItem() {
          console.log("Entering ANFTERCE_ter_terofc_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("TEROFC", this.TER.TEROFC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ter/anfterce_ter_terofc_whenvalidateitem_query1", payload1);
          // get values from result
          this.TER.DES_OFICINA = result1[0].get("DES_OFICINA");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "CODIGO DE LA OFICINA NO EXISTE.....", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ter_terofc_whenValidateItem");
      }

      //#region PLSQL
      // IF :TERTID IN ('CC', 'CE', 'TI') THEN
      //    :TERPER := 'N';
      // ELSE 
      //    :TERPER := 'J';
      // END IF;
      // BEGIN
      //  IF :TERPER='N' THEN
      //     :DES_TIPOPERSONA:='PERSONA NATURAL';
      //  ELSIF :TERPER='J' THEN
      //     :DES_TIPOPERSONA:='PERSONA JURIDICA';
      //  END IF;
      // END;
      //#endregion
      async ANFTERCE_ter_terclv_whenValidateItem() {
          console.log("Entering ANFTERCE_ter_terclv_whenValidateItem");
          console.log("Exiting ANFTERCE_ter_terclv_whenValidateItem");
      }

      //#region PLSQL
      // DECLARE
      //   COUNT_TDI NUMBER;
      //   T_RESPUESTA NUMBER;
      // BEGIN
      // 
      //     SELECT COUNT(*)
      //     INTO   COUNT_TDI
      //     FROM   OPS$SEGUI.TDI
      //     WHERE  (TDICOD = :TERTID);
      // 
      //     IF (NOT (COUNT_TDI = 1)) THEN
      //        LIB$ALERTA('MENSAJE','TIPO DE IDENTIFICACION NO EXISTE.......',NULL,NULL,NULL,T_RESPUESTA);
      //        RAISE FORM_TRIGGER_FAILURE;
      //      END IF;
      // IF :TERTID IN ('CC', 'CE', 'TI') THEN
      //    :TERPER := 'N';
      // ELSE 
      //    :TERPER := 'J';
      // END IF;
      // END;
      //#endregion
      async ANFTERCE_ter_tertid_whenValidateItem() {
          console.log("Entering ANFTERCE_ter_tertid_whenValidateItem");
          let COUNT_TDI: number = null;
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("TERTID", this.TER.TERTID);
          // call REST API
          let result1 = await Rest.post("/anfterce_ter/anfterce_ter_tertid_whenvalidateitem_query1", payload1);
          // get values from result
          COUNT_TDI = result1[0].get("COUNT_TDI");
          if (!(COUNT_TDI == 1)) {
              //ANFTERCE_LIB$ALERTA("MENSAJE", "TIPO DE IDENTIFICACION NO EXISTE.......", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          if (["CC", "CE", "TI"].indexOf(this.TER.TERTID) != -1) {
              this.TER.TERPER = "N";
          }
          else {
              this.TER.TERPER = "J";
          }
          console.log("Exiting ANFTERCE_ter_tertid_whenValidateItem");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //   SELECT DEPDES
      //     INTO :DES_DEPARTAMENTO
      //     FROM OPS$SEGUI.DEP
      //    WHERE DEPCOD=:TERDEP
      //      ;
      //       EXCEPTION
      //         WHEN NO_DATA_FOUND THEN
      //         LIB$ALERTA('MENSAJE','NO EXISTE EL DEPARTAMENTO.....',NULL,NULL,NULL,T_RESPUESTA);
      //         RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ter_terdep_whenValidateItem() {
          console.log("Entering ANFTERCE_ter_terdep_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("TERDEP", this.TER.TERDEP);
          // call REST API
          let result1 = await Rest.post("/anfterce_ter/anfterce_ter_terdep_whenvalidateitem_query1", payload1);
          // get values from result
          this.TER.DES_DEPARTAMENTO = result1[0].get("DES_DEPARTAMENTO");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "NO EXISTE EL DEPARTAMENTO.....", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ter_terdep_whenValidateItem");
      }

      //#region PLSQL
      // DECLARE
      // 
      //  V_PROGRAMA VARCHAR2(10);
      // 
      // BEGIN
      //  COMMIT_FORM;
      //   V_PROGRAMA := F_SIGUIENTE_F;
      //  PUP_LLAMAR_SIGUIENTE (V_PROGRAMA);
      // 
      // END;
      //#endregion
      async ANFTERCE_ter_btnSiguiente_whenButtonPressed() {
          console.log("Entering ANFTERCE_ter_btnSiguiente_whenButtonPressed");
          let V_PROGRAMA: string = null;
          //new OracleFormsBuiltins(this).commit_form();
          //V_PROGRAMA = F_SIGUIENTE_F;
          //ANFTERCE_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
          console.log("Exiting ANFTERCE_ter_btnSiguiente_whenButtonPressed");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //   SELECT TDVDES
      //     INTO :DES_VINCULO
      //     FROM OPS$SEGUI.TDV
      //     WHERE TDVCOD=:TERTVI;
      // 
      //      EXCEPTION
      //        WHEN NO_DATA_FOUND THEN
      //        LIB$ALERTA('MENSAJE','CODIGO NO EXISTE.........',NULL,NULL,NULL,T_RESPUESTA);
      //        RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ter_tertvi_whenValidateItem() {
          console.log("Entering ANFTERCE_ter_tertvi_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("TERTVI", this.TER.TERTVI);
          // call REST API
          let result1 = await Rest.post("/anfterce_ter/anfterce_ter_tertvi_whenvalidateitem_query1", payload1);
          // get values from result
          this.TER.DES_VINCULO = result1[0].get("DES_VINCULO");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "CODIGO NO EXISTE.........", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ter_tertvi_whenValidateItem");
      }

      //#region PLSQL
      // BEGIN IF :TERTCI IS NOT NULL THEN
      // DECLARE 
      // T_RESPUESTA     NUMBER;
      // W_DESCRIP       VARCHAR2(25); 
      // BEGIN
      //    BEGIN
      //     SELECT TDCDES
      //     INTO  :DES_CIUDAD
      //     FROM TDC
      //     WHERE TDCCOD =:TERTCI
      //     AND   TDCDEP =:TERDEP; 
      //    EXCEPTION
      //     WHEN NO_DATA_FOUND THEN
      //     LIB$ALERTA('MENSAJE','CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
      //     RAISE FORM_TRIGGER_FAILURE;
      //    END;
      //  END;
      // END IF; END;
      //#endregion
      async ANFTERCE_ter_tertci_whenValidateItem() {
          console.log("Entering ANFTERCE_ter_tertci_whenValidateItem");
          if ((this.TER.TERTCI != null)) {
              {

                  let T_RESPUESTA: number = null;
                  let W_DESCRIP: string = null;
                  // construct payload
                  let payload1 = new Map();
                  payload1.set("TERTCI", this.TER.TERTCI);
                  payload1.set("TERDEP", this.TER.TERDEP);
                  // call REST API
                  let result1 = await Rest.post("/anfterce_ter/anfterce_ter_tertci_whenvalidateitem_query1", payload1);
                  // get values from result
                  this.TER.DES_CIUDAD = result1[0].get("DES_CIUDAD");
                  if (result1 == null || result1.length == 0) {

                      //ANFTERCE_LIB$ALERTA("MENSAJE", "CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                      console.log("FORM_TRIGGER_FAILURE");
                      throw new Error('FORM_TRIGGER_FAILURE');
                  }

              }

          }
          console.log("Exiting ANFTERCE_ter_tertci_whenValidateItem");
      }

      //#region PLSQL
      // IF :TERTID IN ('CC', 'CE', 'TI') THEN
      //    :TERPER := 'N';
      // ELSE 
      //    :TERPER := 'J';
      // END IF;
      // BEGIN
      //  IF :TERPER='N' THEN
      //     :DES_TIPOPERSONA:='PERSONA NATURAL';
      //  ELSIF :TERPER='J' THEN
      //     :DES_TIPOPERSONA:='PERSONA JURIDICA';
      //  END IF;
      // END;
      //#endregion
      async ANFTERCE_ter_terper_whenValidateItem() {
          console.log("Entering ANFTERCE_ter_terper_whenValidateItem");
          console.log("Exiting ANFTERCE_ter_terper_whenValidateItem");
      }

      //#region PLSQL
      // BEGIN IF :TERPER ='N' THEN
      //   GO_BLOCK('ENT2');
      //   EXECUTE_QUERY;
      // ELSE
      //     GO_BLOCK('ENT');
      //   EXECUTE_QUERY;
      // END IF; END;
      //#endregion
      async ANFTERCE_ter_terper_whenNewItemInstance() {
          console.log("Entering ANFTERCE_ter_terper_whenNewItemInstance");
          if (this.TER.TERPER == "N") {
              new OracleFormsBuiltins(this).go_block("ENT2");
              new OracleFormsBuiltins(this).execute_query();
          }
          else {
              new OracleFormsBuiltins(this).go_block("ENT");
              new OracleFormsBuiltins(this).execute_query();
          }
          console.log("Exiting ANFTERCE_ter_terper_whenNewItemInstance");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //   SELECT  AGEDES
      //     INTO  :DES_AGENCIA
      //    FROM  OPS$SEGUI.AGE
      //     WHERE AGECOD=:TERAGE
      //     AND   AGEOFC=:TEROFC;
      //       EXCEPTION WHEN NO_DATA_FOUND THEN
      //         LIB$ALERTA('MENSAJE','NO EXISTE LA AGENCIA, CONSULTE LISTA DE VALORES.....',NULL,NULL,NULL,T_RESPUESTA);
      //         RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ter_terage_whenValidateItem() {
          console.log("Entering ANFTERCE_ter_terage_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("TERAGE", this.TER.TERAGE);
          payload1.set("TEROFC", this.TER.TEROFC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ter/anfterce_ter_terage_whenvalidateitem_query1", payload1);
          // get values from result
          this.TER.DES_AGENCIA = result1[0].get("DES_AGENCIA");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "NO EXISTE LA AGENCIA, CONSULTE LISTA DE VALORES.....", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ter_terage_whenValidateItem");
      }

      //#region PLSQL
      // BEGIN IF :TERPER ='N' THEN
      //   GO_BLOCK('ENT2');
      //   EXECUTE_QUERY;
      // ELSIF  :TERPER ='J' THEN
      //     GO_BLOCK('ENT');
      //   EXECUTE_QUERY;
      // END IF; END;
      //#endregion
      async ANFTERCE_ter_tercod_whenNewItemInstance() {
          console.log("Entering ANFTERCE_ter_tercod_whenNewItemInstance");
          if (this.TER.TERPER == "N") {
              new OracleFormsBuiltins(this).go_block("ENT2");
              new OracleFormsBuiltins(this).execute_query();
          }
          else if (this.TER.TERPER == "J") {
              new OracleFormsBuiltins(this).go_block("ENT");
              new OracleFormsBuiltins(this).execute_query();
          }
          console.log("Exiting ANFTERCE_ter_tercod_whenNewItemInstance");
      }

      async ANFTERCE_setpartic_keyNxtblk() {
          // null;
      }

      async ANFTERCE_setpartic_keyPrvblk() {
          // null;
      }

      //#region PLSQL
      // BEGIN
      //  SELECT DECODE (TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
      //     INTO :PARTIC_NOMBRE
      //     FROM TER
      //     WHERE TERCOD=:PARTIC_CODCOM;
      //   EXCEPTION
      //    WHEN NO_DATA_FOUND THEN
      //     NULL;
      //  END;
      //#endregion
      async ANFTERCE_setpartic_postQuery() {
          console.log("Entering ANFTERCE_setpartic_postQuery");
          // construct payload
          let payload1 = new Map();
          payload1.set("PARTIC_CODCOM", this.SETPARTIC.PARTIC_CODCOM);
          // call REST API
          let result1 = await Rest.post("/anfterce_setpartic/anfterce_setpartic_postquery_query1", payload1);
          // get values from result
          this.SETPARTIC.PARTIC_NOMBRE = result1[0].get("PARTIC_NOMBRE");
          if (result1 == null || result1.length == 0) {

          }

          console.log("Exiting ANFTERCE_setpartic_postQuery");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //  BEGIN
      //   SELECT DECODE (TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
      //     INTO :PARTIC_NOMBRE
      //     FROM TER
      //     WHERE TERCOD=:PARTIC_CODCOM;
      //   EXCEPTION
      //    WHEN NO_DATA_FOUND THEN
      //    LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
      //  END;
      // END;
      //#endregion
      async ANFTERCE_setpartic_particCodcom_whenValidateItem() {
          console.log("Entering ANFTERCE_setpartic_particCodcom_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("PARTIC_CODCOM", this.SETPARTIC.PARTIC_CODCOM);
          // call REST API
          let result1 = await Rest.post("/anfterce_setpartic/anfterce_setpartic_particcodcom_whenvalidateitem_query1", payload1);
          // get values from result
          this.SETPARTIC.PARTIC_NOMBRE = result1[0].get("PARTIC_NOMBRE");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE .....", null, null, null, T_RESPUESTA);
          }

          console.log("Exiting ANFTERCE_setpartic_particCodcom_whenValidateItem");
      }

      async ANFTERCE_ent2_keyNxtblk() {
          // null;
      }

      async ANFTERCE_ent2_keyPrvblk() {
          // null;
      }

      //#region PLSQL
      // BEGIN
      //     SELECT TDSODES
      //       INTO :ENT2.DES_SOCIEDAD
      //       FROM OPS$SEGUI.TDSO
      //       WHERE (TDSOCOD=:ENT2.ENTSOC);
      //       EXCEPTION 
      //         WHEN NO_DATA_FOUND THEN
      //     NULL;
      // END;
      // BEGIN
      //   SELECT TGEDES
      //     INTO :ENT2.DES_GRUPO
      //     FROM TGE
      //     WHERE (TGECOD=:ENT2.ENTGEC);
      //     EXCEPTION WHEN NO_DATA_FOUND THEN
      //     NULL;
      // END;
      // BEGIN
      //   SELECT SECDES
      //     INTO :ENT2.DES_SECTOR
      //     FROM OPS$SEGUI.SEC
      //    WHERE SECCOD=:ENT2.ENTSEC;
      //      EXCEPTION WHEN NO_DATA_FOUND THEN
      //     NULL;
      // END;
      // BEGIN
      //    SELECT TDSDES
      //      INTO :ENT2.SUBSEC
      //      FROM OPS$SEGUI.TDS
      //     WHERE TDSCOD = :ENT2.ENTSSC
      //       AND TDSSEC = :ENT2.ENTSEC;
      //     EXCEPTION 
      //       WHEN NO_DATA_FOUND THEN
      //        NULL;
      //     END;
      // IF :ENT_DECLARA IS NULL OR :ENT_DECLARA = ' ' THEN
      //  :ENT_DECLARA := '03';
      // END IF; 
      // --MAGO 21/06/2010
      // IF :ENT_DECLARA IS NULL OR :ENT_DECLARA = ' ' THEN
      //  :ENT_DECLARA := '03';
      // ELSIF :ENT_DECLARA = 01 THEN --PERIODO DE CARTA Y VALANCE.
      //   BEGIN
      //  SELECT TO_CHAR(MAX(TO_DATE(DRXTER_CODPER,'YYMM')),'YYMM')
      //  INTO :DESCRIBE.PERIODO
      //  FROM ANTDRXTER F
      //  WHERE F.DRXTER_CODTER = :TER.TERCOD;
      //  
      //  SELECT  TO_CHAR(MAX(TO_DATE(BAXTER_CODPER,'YYMM')),'YYMM')
      //  INTO :DESCRIBE.PER_BALAN
      //  FROM ANTBALXTER
      //  WHERE  BAXTER_GRUCTA='AC'
      //  AND  BAXTER_TIPCTA='ACC' 
      //  AND  ANTBALXTER.BAXTER_CODTER = :TER.TERCOD;
      //    SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',VISIBLE,PROPERTY_FALSE);
      //   SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',ENABLED,PROPERTY_FALSE); 
      //   EXCEPTION WHEN OTHERS THEN
      //    NULL;
      //   END;
      // ELSIF :ENT_DECLARA = 02 THEN  --PERIODO CARTA.
      //   BEGIN
      //  SELECT TO_CHAR(MAX(TO_DATE(DRXTER_CODPER,'YYMM')),'YYMM')
      //  INTO :DESCRIBE.PERIODO
      //  FROM ANTDRXTER F
      //  WHERE F.DRXTER_CODTER = :TER.TERCOD;
      //    SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',VISIBLE,PROPERTY_FALSE);
      //   SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',ENABLED,PROPERTY_FALSE);  
      //   EXCEPTION WHEN OTHERS THEN
      //    NULL;
      //   END;
      // ELSIF :ENT_DECLARA = 03 THEN  
      //    SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',VISIBLE,PROPERTY_TRUE);
      //   SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',ENABLED,PROPERTY_TRUE);  
      //   SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',NAVIGABLE,PROPERTY_TRUE); 
      //   SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',UPDATE_ALLOWED,PROPERTY_TRUE);
      //  END IF;
      //#endregion
      async ANFTERCE_ent2_postQuery() {
          console.log("Entering ANFTERCE_ent2_postQuery");
          // construct payload
          let payload1 = new Map();
          payload1.set("ENTSOC", this.ENT2.ENTSOC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ent2/anfterce_ent2_postquery_query1", payload1);
          // get values from result
          this.ENT2.DES_SOCIEDAD = result1[0].get("ENT2.DES_SOCIEDAD");
          if (result1 == null || result1.length == 0) {

          }

          // construct payload
          let payload2 = new Map();
          payload2.set("ENTGEC", this.ENT2.ENTGEC);
          // call REST API
          let result2 = await Rest.post("/anfterce_ent2/anfterce_ent2_postquery_query2", payload2);
          // get values from result
          this.ENT2.DES_GRUPO = result2[0].get("ENT2.DES_GRUPO");
          if (result2 == null || result2.length == 0) {

          }

          // construct payload
          let payload3 = new Map();
          payload3.set("ENTSEC", this.ENT2.ENTSEC);
          // call REST API
          let result3 = await Rest.post("/anfterce_ent2/anfterce_ent2_postquery_query3", payload3);
          // get values from result
          this.ENT2.DES_SECTOR = result3[0].get("ENT2.DES_SECTOR");
          if (result3 == null || result3.length == 0) {

          }

          // construct payload
          let payload4 = new Map();
          payload4.set("ENTSSC", this.ENT2.ENTSSC);
          payload4.set("ENTSEC", this.ENT2.ENTSEC);
          // call REST API
          let result4 = await Rest.post("/anfterce_ent2/anfterce_ent2_postquery_query4", payload4);
          // get values from result
          this.ENT2.SUBSEC = result4[0].get("ENT2.SUBSEC");
          if (result4 == null || result4.length == 0) {

          }

          console.log("Exiting ANFTERCE_ent2_postQuery");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //    SELECT TDSDES
      //      INTO :ENT2.SUBSEC
      //      FROM OPS$SEGUI.TDS
      //     WHERE TDSCOD = :ENT2.ENTSSC
      //       AND TDSSEC = :ENT2.ENTSEC;
      //     EXCEPTION 
      //       WHEN NO_DATA_FOUND THEN
      //        LIB$ALERTA('MENSAJE','CODIGO DEL SUBSECTOR INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA);
      //        RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ent2_entssc_whenValidateItem() {
          console.log("Entering ANFTERCE_ent2_entssc_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("ENTSSC", this.ENT2.ENTSSC);
          payload1.set("ENTSEC", this.ENT2.ENTSEC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ent2/anfterce_ent2_entssc_whenvalidateitem_query1", payload1);
          // get values from result
          this.ENT2.SUBSEC = result1[0].get("ENT2.SUBSEC");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "CODIGO DEL SUBSECTOR INEXISTENTE ....", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ent2_entssc_whenValidateItem");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //   SELECT TGEDES
      //     INTO :ENT2.DES_GRUPO
      //     FROM TGE
      //     WHERE (TGECOD=:ENT2.ENTGEC);
      //     EXCEPTION WHEN NO_DATA_FOUND THEN
      //       LIB$ALERTA('MENSAJE','CODIGO DEL GRUPO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
      //       RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ent2_entgec_whenValidateItem() {
          console.log("Entering ANFTERCE_ent2_entgec_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("ENTGEC", this.ENT2.ENTGEC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ent2/anfterce_ent2_entgec_whenvalidateitem_query1", payload1);
          // get values from result
          this.ENT2.DES_GRUPO = result1[0].get("ENT2.DES_GRUPO");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "CODIGO DEL GRUPO INEXISTENTE .....", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ent2_entgec_whenValidateItem");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //     SELECT TDSODES
      //       INTO :ENT2.DES_SOCIEDAD
      //       FROM OPS$SEGUI.TDSO
      //       WHERE (TDSOCOD=:ENT2.ENTSOC);
      //       EXCEPTION 
      //         WHEN NO_DATA_FOUND THEN
      //             LIB$ALERTA('MENSAJE','CODIGO DE SOCIEDAD NO EXISTE....',NULL,NULL,NULL,T_RESPUESTA);
      //              RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ent2_entsoc_whenValidateItem() {
          console.log("Entering ANFTERCE_ent2_entsoc_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("ENTSOC", this.ENT2.ENTSOC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ent2/anfterce_ent2_entsoc_whenvalidateitem_query1", payload1);
          // get values from result
          this.ENT2.DES_SOCIEDAD = result1[0].get("ENT2.DES_SOCIEDAD");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "CODIGO DE SOCIEDAD NO EXISTE....", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ent2_entsoc_whenValidateItem");
      }

      //#region PLSQL
      // BEGIN --MAGO 21/06/2010
      // IF :ENT_DECLARA IS NULL OR :ENT_DECLARA = ' ' THEN
      //  :ENT_DECLARA := '03';
      // ELSIF :ENT_DECLARA = 01 THEN --PERIODO DE CARTA Y VALANCE.
      //   BEGIN
      //  SELECT TO_CHAR(MAX(TO_DATE(DRXTER_CODPER,'YYMM')),'YYMM')
      //  INTO :DESCRIBE.PERIODO
      //  FROM ANTDRXTER F
      //  WHERE F.DRXTER_CODTER = :TER.TERCOD;
      //    
      //  SELECT  TO_CHAR(MAX(TO_DATE(BAXTER_CODPER,'YYMM')),'YYMM')
      //  INTO :DESCRIBE.PER_BALAN
      //  FROM ANTBALXTER
      //  WHERE  BAXTER_GRUCTA='AC'
      //  AND  BAXTER_TIPCTA='ACC' 
      //  AND  ANTBALXTER.BAXTER_CODTER = :TER.TERCOD;
      //  
      //    SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',VISIBLE,PROPERTY_FALSE);
      //   SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',ENABLED,PROPERTY_FALSE);
      //   EXCEPTION WHEN OTHERS THEN
      //    NULL;
      //   END;
      // 
      // ELSIF :ENT_DECLARA = 02 THEN  --PERIODO CARTA.
      //   BEGIN
      //  SELECT TO_CHAR(MAX(TO_DATE(DRXTER_CODPER,'YYMM')),'YYMM')
      //  INTO :DESCRIBE.PERIODO
      //  FROM ANTDRXTER F
      //  WHERE F.DRXTER_CODTER = :TER.TERCOD;
      //    SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',VISIBLE,PROPERTY_FALSE);
      //   SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',ENABLED,PROPERTY_FALSE);
      //  :DESCRIBE.PER_BALAN := NULL;  
      //   EXCEPTION WHEN OTHERS THEN
      //    NULL;
      //   END;
      // ELSIF :ENT_DECLARA = 03 THEN  
      //    SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',VISIBLE,PROPERTY_TRUE);
      //   SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',ENABLED,PROPERTY_TRUE);  
      //   SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',NAVIGABLE,PROPERTY_TRUE); 
      //   SET_ITEM_PROPERTY('ENT2.ENT_FECLARA',UPDATE_ALLOWED,PROPERTY_TRUE);
      //   :DESCRIBE.PERIODO := NULL;
      //   :DESCRIBE.PER_BALAN := NULL;
      //  END IF; END;
      //#endregion
      async ANFTERCE_ent2_entDeclara_whenListChanged() {
          console.log("Entering ANFTERCE_ent2_entDeclara_whenListChanged");
          if (((this.ENT2.ENT_DECLARA == null) || this.ENT2.ENT_DECLARA == " ")) {
              this.ENT2.ENT_DECLARA = "03";
          }
          else if (this.ENT2.ENT_DECLARA == '1') {
              let result2: Map<string, string>[] = [];
              try {

                  // construct payload
                  let payload1 = new Map();
                  payload1.set("TERCOD", this.TER.TERCOD);
                  // call REST API
                  const result1 = await Rest.post("/anfterce_ent2/anfterce_ent2_entdeclara_whenlistchanged_query1", payload1);
                  // get values from result
                  this.DESCRIBE.PERIODO = result1[0].get("DESCRIBE.PERIODO");
                  // construct payload
                  let payload2 = new Map();
                  payload2.set("TERCOD", this.TER.TERCOD);
                  // call REST API
                  result2 = await Rest.post("/anfterce_ent2/anfterce_ent2_entdeclara_whenlistchanged_query2", payload2);
                  // get values from result
                  this.DESCRIBE.PER_BALAN = result2[0].get("DESCRIBE.PER_BALAN");
                  //new OracleFormsBuiltins(this).set_item_property("ENT2.ENT_FECLARA", 'VISIBLE', 'PROPERTY_FALSE');
                  //new OracleFormsBuiltins(this).set_item_property("ENT2.ENT_FECLARA", 'ENABLED', 'PROPERTY_FALSE');
              } catch {

              }

          }
          else if (this.ENT2.ENT_DECLARA == '2') {
              let result3: Map<string, string>[] = []
              try {

                  // construct payload
                  let payload3 = new Map();
                  payload3.set("TERCOD", this.TER.TERCOD);
                  // call REST API
                  result3 = await Rest.post("/anfterce_ent2/anfterce_ent2_entdeclara_whenlistchanged_query3", payload3);
                  // get values from result
                  this.DESCRIBE.PERIODO = result3[0].get("DESCRIBE.PERIODO");
                  //new OracleFormsBuiltins(this).set_item_property("ENT2.ENT_FECLARA", VISIBLE, PROPERTY_FALSE);
                  //new OracleFormsBuiltins(this).set_item_property("ENT2.ENT_FECLARA", ENABLED, PROPERTY_FALSE);
                  this.DESCRIBE.PER_BALAN = null;
              } catch {

              }

          }
          else if (this.ENT2.ENT_DECLARA == '3') {
              //new OracleFormsBuiltins(this).set_item_property("ENT2.ENT_FECLARA", VISIBLE, PROPERTY_TRUE);
              //new OracleFormsBuiltins(this).set_item_property("ENT2.ENT_FECLARA", ENABLED, PROPERTY_TRUE);
              //new OracleFormsBuiltins(this).set_item_property("ENT2.ENT_FECLARA", NAVIGABLE, PROPERTY_TRUE);
              //new OracleFormsBuiltins(this).set_item_property("ENT2.ENT_FECLARA", UPDATE_ALLOWED, PROPERTY_TRUE);
              this.DESCRIBE.PERIODO = null;
              this.DESCRIBE.PER_BALAN = null;
          }
          console.log("Exiting ANFTERCE_ent2_entDeclara_whenListChanged");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //   SELECT SECDES
      //     INTO :ENT2.DES_SECTOR
      //     FROM OPS$SEGUI.SEC
      //    WHERE SECCOD=:ENT2.ENTSEC;
      //      EXCEPTION WHEN NO_DATA_FOUND THEN
      //      LIB$ALERTA('MENSAJE','SECTOR INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
      //      RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ent2_entsec_whenValidateItem() {
          console.log("Entering ANFTERCE_ent2_entsec_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("ENTSEC", this.ENT2.ENTSEC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ent2/anfterce_ent2_entsec_whenvalidateitem_query1", payload1);
          // get values from result
          this.ENT2.DES_SECTOR = result1[0].get("ENT2.DES_SECTOR");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "SECTOR INEXISTENTE ...", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ent2_entsec_whenValidateItem");
      }

      async ANFTERCE_ent_keyNxtblk() {
          // null;
      }

      async ANFTERCE_ent_keyPrvblk() {
          // null;
      }

      //#region PLSQL
      // BEGIN
      //     SELECT TDSODES
      //       INTO :ENT.DES_SOCIEDAD
      //       FROM OPS$SEGUI.TDSO
      //       WHERE (TDSOCOD=:ENT.ENTSOC);
      //       EXCEPTION 
      //         WHEN NO_DATA_FOUND THEN
      //     NULL;
      // END;
      // BEGIN
      //   SELECT TGEDES
      //     INTO :ENT.DES_GRUPO
      //     FROM TGE
      //     WHERE (TGECOD=:ENT.ENTGEC);
      //     EXCEPTION WHEN NO_DATA_FOUND THEN
      //     NULL;
      // END;
      // BEGIN
      //   SELECT SECDES
      //     INTO :ENT.DES_SECTOR
      //     FROM OPS$SEGUI.SEC
      //    WHERE SECCOD=:ENT.ENTSEC;
      //      EXCEPTION WHEN NO_DATA_FOUND THEN
      //     NULL;
      // END;
      // BEGIN
      //    SELECT TDSDES
      //      INTO :ENT.SUBSEC
      //      FROM OPS$SEGUI.TDS
      //     WHERE TDSCOD = :ENT.ENTSSC
      //       AND TDSSEC = :ENT.ENTSEC;
      //     EXCEPTION 
      //       WHEN NO_DATA_FOUND THEN
      //        NULL;
      // END;
      //#endregion
      async ANFTERCE_ent_postQuery() {
          console.log("Entering ANFTERCE_ent_postQuery");
          // construct payload
          let payload1 = new Map();
          payload1.set("ENTSOC", this.ENT.ENTSOC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ent/anfterce_ent_postquery_query1", payload1);
          // get values from result
          this.ENT.DES_SOCIEDAD = result1[0].get("ENT.DES_SOCIEDAD");
          if (result1 == null || result1.length == 0) {

          }

          // construct payload
          let payload2 = new Map();
          payload2.set("ENTGEC", this.ENT.ENTGEC);
          // call REST API
          let result2 = await Rest.post("/anfterce_ent/anfterce_ent_postquery_query2", payload2);
          // get values from result
          this.ENT.DES_GRUPO = result2[0].get("ENT.DES_GRUPO");
          if (result2 == null || result2.length == 0) {

          }

          // construct payload
          let payload3 = new Map();
          payload3.set("ENTSEC", this.ENT.ENTSEC);
          // call REST API
          let result3 = await Rest.post("/anfterce_ent/anfterce_ent_postquery_query3", payload3);
          // get values from result
          this.ENT.DES_SECTOR = result3[0].get("ENT.DES_SECTOR");
          if (result3 == null || result3.length == 0) {

          }

          // construct payload
          let payload4 = new Map();
          payload4.set("ENTSSC", this.ENT.ENTSSC);
          payload4.set("ENTSEC", this.ENT.ENTSEC);
          // call REST API
          let result4 = await Rest.post("/anfterce_ent/anfterce_ent_postquery_query4", payload4);
          // get values from result
          this.ENT.SUBSEC = result4[0].get("ENT.SUBSEC");
          if (result4 == null || result4.length == 0) {

          }

          console.log("Exiting ANFTERCE_ent_postQuery");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //    SELECT TDSDES
      //      INTO :ENT.SUBSEC
      //      FROM OPS$SEGUI.TDS
      //     WHERE TDSCOD = :ENT.ENTSSC
      //       AND TDSSEC = :ENT.ENTSEC;
      //     EXCEPTION 
      //       WHEN NO_DATA_FOUND THEN
      //        LIB$ALERTA('MENSAJE','CODIGO DEL SUBSECTOR INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA);
      //        RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ent_entssc_whenValidateItem() {
          console.log("Entering ANFTERCE_ent_entssc_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("ENTSSC", this.ENT.ENTSSC);
          payload1.set("ENTSEC", this.ENT.ENTSEC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ent/anfterce_ent_entssc_whenvalidateitem_query1", payload1);
          // get values from result
          this.ENT.SUBSEC = result1[0].get("ENT.SUBSEC");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "CODIGO DEL SUBSECTOR INEXISTENTE ....", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ent_entssc_whenValidateItem");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //   SELECT TGEDES
      //     INTO :ENT.DES_GRUPO
      //     FROM TGE
      //     WHERE (TGECOD=:ENT.ENTGEC);
      //     EXCEPTION WHEN NO_DATA_FOUND THEN
      //       LIB$ALERTA('MENSAJE','CODIGO DEL GRUPO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
      //       RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ent_entgec_whenValidateItem() {
          console.log("Entering ANFTERCE_ent_entgec_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("ENTGEC", this.ENT.ENTGEC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ent/anfterce_ent_entgec_whenvalidateitem_query1", payload1);
          // get values from result
          this.ENT.DES_GRUPO = result1[0].get("ENT.DES_GRUPO");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "CODIGO DEL GRUPO INEXISTENTE .....", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ent_entgec_whenValidateItem");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //     SELECT TDSODES
      //       INTO :ENT.DES_SOCIEDAD
      //       FROM OPS$SEGUI.TDSO
      //       WHERE (TDSOCOD=:ENT.ENTSOC);
      //       EXCEPTION 
      //         WHEN NO_DATA_FOUND THEN
      //             LIB$ALERTA('MENSAJE','CODIGO DE SOCIEDAD NO EXISTE....',NULL,NULL,NULL,T_RESPUESTA);
      //              RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ent_entsoc_whenValidateItem() {
          console.log("Entering ANFTERCE_ent_entsoc_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("ENTSOC", this.ENT.ENTSOC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ent/anfterce_ent_entsoc_whenvalidateitem_query1", payload1);
          // get values from result
          this.ENT.DES_SOCIEDAD = result1[0].get("ENT.DES_SOCIEDAD");
          if (result1 == null || result1.length == 0) {

            //ANFTERCE_LIB$ALERTA("MENSAJE", "CODIGO DE SOCIEDAD NO EXISTE....", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ent_entsoc_whenValidateItem");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //   SELECT SECDES
      //     INTO :ENT.DES_SECTOR
      //     FROM OPS$SEGUI.SEC
      //    WHERE SECCOD=:ENT.ENTSEC;
      //      EXCEPTION WHEN NO_DATA_FOUND THEN
      //      LIB$ALERTA('MENSAJE','SECTOR INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
      //      RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_ent_entsec_whenValidateItem() {
          console.log("Entering ANFTERCE_ent_entsec_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("ENTSEC", this.ENT.ENTSEC);
          // call REST API
          let result1 = await Rest.post("/anfterce_ent/anfterce_ent_entsec_whenvalidateitem_query1", payload1);
          // get values from result
          this.ENT.DES_SECTOR = result1[0].get("ENT.DES_SECTOR");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "SECTOR INEXISTENTE ...", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_ent_entsec_whenValidateItem");
      }

      //#region PLSQL
      // BEGIN TOOLBAR_ACTIONS; END;
      //#endregion
      async ANFTERCE_toolbar_whenButtonPressed() {
          console.log("Entering ANFTERCE_toolbar_whenButtonPressed");
          //ANFTERCE_TOOLBAR_ACTIONS();
          console.log("Exiting ANFTERCE_toolbar_whenButtonPressed");
      }

      //#region PLSQL
      // BEGIN
      //   DEL_TIMER('BUBBLE_DELAY');
      //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',DISPLAYED,PROPERTY_OFF);
      // END;
      //#endregion
      async ANFTERCE_toolbar_whenMouseLeave() {
          console.log("Entering ANFTERCE_toolbar_whenMouseLeave");
          //ANFTERCE_DEL_TIMER("BUBBLE_DELAY");
          //new OracleFormsBuiltins(this).set_item_property("TOOLBAR.BUTTON_HELP", DISPLAYED, PROPERTY_OFF);
          console.log("Exiting ANFTERCE_toolbar_whenMouseLeave");
      }

      //#region PLSQL
      // BEGIN
      //    EXECUTE_QUERY;
      //    --:BASE.FECHA := SYSDATE;
      //    NEXT_BLOCK;
      //    ENTER_QUERY;
      // END;
      //#endregion
      async ANFTERCE_toolbar_whenNewFormInstance() {
          console.log("Entering ANFTERCE_toolbar_whenNewFormInstance");
          new OracleFormsBuiltins(this).execute_query();
          //new OracleFormsBuiltins(this).next_block();
          //new OracleFormsBuiltins(this).enter_query();
          console.log("Exiting ANFTERCE_toolbar_whenNewFormInstance");
      }

      //#region PLSQL
      // DECLARE
      // -----------------------------------
      // -- CURSORES
      // -----------------------------------
      // CURSOR SOCIOS IS
      // SELECT  SOCIOS_PRINCI  V_SOCIOS
      //   FROM SETSOCIOS
      //    WHERE SOCIOS_CODSOC = :LEGFIS_CODSOC
      //      AND  SOCIOS_PRINCI <> :TER.TERCOD;
      // -----
      // CURSOR JUNTA IS
      //  SELECT  JUNTAD_PRINCI  V_JUNTA
      //     FROM SETJUNTAD
      //    WHERE JUNTAD_CODSOC = :LEGFIS_CODSOC
      //      AND  JUNTAD_PRINCI <> :TER.TERCOD;
      // ----- 
      // CURSOR SUPLENTES IS
      //   SELECT  SUPLET_PRINCI  V_SUPLENTE
      //     FROM SETSUPLETE
      //    WHERE SUPLET_CODSOC = :LEGFIS_CODSOC
      //      AND  SUPLET_PRINCI <> :TER.TERCOD;
      // -------------
      // -- VARIABLES
      // -------------
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //  PVALTER(:SETLEGFIS.LEGFIS_CODSOC);
      //  BEGIN
      //   SELECT DECODE (TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
      //     INTO :LEGFIS_NOMBRE
      //     FROM TER
      //     WHERE TERCOD=:LEGFIS_CODSOC;
      //   EXCEPTION
      //    WHEN NO_DATA_FOUND THEN
      //    LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
      //  END;
      // 
      // BEGIN
      //  FOR ACT IN SOCIOS LOOP 
      //     LIB$ALERTA('MENSAJE','TERCERO '||:LEGFIS_CODSOC||' YA EXISTE COMO SOCIO DEL TERCERO '||ACT.V_SOCIOS ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      //  END; 
      //  BEGIN
      //  FOR ACT1 IN JUNTA LOOP
      //     LIB$ALERTA('MENSAJE','TERCERO '||:LEGFIS_CODSOC||' YA EXISTE COMO SOCIO DE JUNTA DEL TERCERO '||ACT1.V_JUNTA ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      //  END;
      // BEGIN
      //  FOR ACT2 IN SUPLENTES LOOP
      //     LIB$ALERTA('MENSAJE','TERCERO '||:LEGFIS_CODSOC||' YA EXISTE COMO SUPLENTE DEL TERCERO '||ACT2.V_SUPLENTE ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      // END;
      // END; 
      // -- ENVIA AL CAMPO ESTADO EN ACTIVO SI ESTE ESTA NULO.
      // IF :SETLEGFIS.LEGFIS_ESTADO IS NULL THEN
      //  :SETLEGFIS.LEGFIS_ESTADO := 'A';
      // END IF;
      //#endregion
      async ANFTERCE_setlegfis_legfisCodsoc_whenValidateItem() {
          console.log("Entering ANFTERCE_setlegfis_legfisCodsoc_whenValidateItem");
          let T_RESPUESTA: number = null;
          //ANFTERCE_PVALTER(this.SETLEGFIS.LEGFIS_CODSOC);
          // construct payload
          let payload1 = new Map();
          payload1.set("LEGFIS_CODSOC", this.SETLEGFIS.LEGFIS_CODSOC);
          // call REST API
          let result1 = await Rest.post("/anfterce_setlegfis/anfterce_setlegfis_legfiscodsoc_whenvalidateitem_query1", payload1);
          // get values from result
          this.SETLEGFIS.LEGFIS_NOMBRE = result1[0].get("LEGFIS_NOMBRE");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE .....", null, null, null, T_RESPUESTA);
          }

          console.log("Exiting ANFTERCE_setlegfis_legfisCodsoc_whenValidateItem");
      }

      //#region PLSQL
      // BEGIN
      //  GO_BLOCK('SETSOCIOS');
      // END;
      //#endregion
      async ANFTERCE_setlegfis_volver3_whenMouseClick() {
          console.log("Entering ANFTERCE_setlegfis_volver3_whenMouseClick");
          new OracleFormsBuiltins(this).go_block("SETSOCIOS");
          console.log("Exiting ANFTERCE_setlegfis_volver3_whenMouseClick");
      }

      async ANFTERCE_settarcre_keyNxtblk() {
          // null;
      }

      async ANFTERCE_settarcre_keyPrvblk() {
          // null;
      }

      //#region PLSQL
      // BEGIN
      //  SELECT ENTFIN_DESENT
      //    INTO :DES_ENTAR
      //    FROM ANTENTFIN
      //   WHERE ENTFIN_CODENT=:TARCRE_CODENT;
      //  EXCEPTION
      //  WHEN NO_DATA_FOUND THEN
      // NULL;
      // END;
      //#endregion
      async ANFTERCE_settarcre_postQuery() {
          console.log("Entering ANFTERCE_settarcre_postQuery");
          // construct payload
          let payload1 = new Map();
          payload1.set("TARCRE_CODENT", this.SETTARCRE.TARCRE_CODENT);
          // call REST API
          let result1 = await Rest.post("/anfterce_settarcre/anfterce_settarcre_postquery_query1", payload1);
          // get values from result
          this.SETTARCRE.DES_ENTAR = result1[0].get("DES_ENTAR");
          if (result1 == null || result1.length == 0) {

          }

          console.log("Exiting ANFTERCE_settarcre_postQuery");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //  SELECT ENTFIN_DESENT
      //    INTO :DES_ENTAR
      //    FROM ANTENTFIN
      //   WHERE ENTFIN_CODENT=:TARCRE_CODENT;
      //  EXCEPTION
      //  WHEN NO_DATA_FOUND THEN
      //  LIB$ALERTA('MENSAJE','ENTIDAD FINANCIERA INEXISTENTE ..',NULL,NULL,NULL,T_RESPUESTA);
      //  RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_settarcre_tarcreCodent_whenValidateItem() {
          console.log("Entering ANFTERCE_settarcre_tarcreCodent_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("TARCRE_CODENT", this.SETTARCRE.TARCRE_CODENT);
          // call REST API
          let result1 = await Rest.post("/anfterce_settarcre/anfterce_settarcre_tarcrecodent_whenvalidateitem_query1", payload1);
          // get values from result
          this.SETTARCRE.DES_ENTAR = result1[0].get("DES_ENTAR");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "ENTIDAD FINANCIERA INEXISTENTE ..", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_settarcre_tarcreCodent_whenValidateItem");
      }

      async ANFTERCE_setsocios_keyNxtblk() {
          // null;
      }

      //#region PLSQL
      // BEGIN IF :SETSOCIOS.SUMAR > 100 THEN
      //  MESSAGE('ERROR EL VALOR NO PUEDE SUPERAR EL 100%');
      //  MESSAGE('ERROR EL VALOR NO PUEDE SUPERAR EL 100%');
      //  RAISE FORM_TRIGGER_FAILURE;
      // END IF; END;
      //#endregion
      async ANFTERCE_setsocios_postChange() {
          console.log("Entering ANFTERCE_setsocios_postChange");
          if (this.SETSOCIOS.SUMAR > 100) {
             // new OracleFormsBuiltins(this).message("ERROR EL VALOR NO PUEDE SUPERAR EL 100%");
              //new OracleFormsBuiltins(this).message("ERROR EL VALOR NO PUEDE SUPERAR EL 100%");
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          console.log("Exiting ANFTERCE_setsocios_postChange");
      }

      async ANFTERCE_setsocios_keyPrvblk() {
          // null;
      }

      //#region PLSQL
      // BEGIN
      //  GO_BLOCK('SETJUNTAD');
      // END;
      //#endregion
      async ANFTERCE_setsocios_junta_whenMouseClick() {
          console.log("Entering ANFTERCE_setsocios_junta_whenMouseClick");
          new OracleFormsBuiltins(this).go_block("SETJUNTAD");
          console.log("Exiting ANFTERCE_setsocios_junta_whenMouseClick");
      }

      //#region PLSQL
      // BEGIN
      //  GO_BLOCK('SETSUPLETE');
      // END;
      //#endregion
      async ANFTERCE_setsocios_supletes_whenMouseClick() {
          console.log("Entering ANFTERCE_setsocios_supletes_whenMouseClick");
          new OracleFormsBuiltins(this).go_block("SETSUPLETE");
          console.log("Exiting ANFTERCE_setsocios_supletes_whenMouseClick");
      }

      //#region PLSQL
      // BEGIN
      //  GO_BLOCK('SETLEGFIS');
      // END;
      //#endregion
      async ANFTERCE_setsocios_repFis_whenMouseClick() {
          console.log("Entering ANFTERCE_setsocios_repFis_whenMouseClick");
          new OracleFormsBuiltins(this).go_block("SETLEGFIS");
          console.log("Exiting ANFTERCE_setsocios_repFis_whenMouseClick");
      }

      //#region PLSQL
      // DECLARE
      // -----------------------------------
      // -- CURSORES
      // -----------------------------------
      // CURSOR SOCIOS IS
      // SELECT  SOCIOS_PRINCI  V_SOCIOS
      //   FROM SETSOCIOS
      //    WHERE SOCIOS_CODSOC = :SOCIOS_CODSOC
      //      AND  SOCIOS_PRINCI <> :TER.TERCOD;
      // -----
      // CURSOR JUNTA IS
      //  SELECT  JUNTAD_PRINCI  V_JUNTA
      //     FROM SETJUNTAD
      //    WHERE JUNTAD_CODSOC = :SOCIOS_CODSOC
      //      AND  JUNTAD_PRINCI <> :TER.TERCOD;
      // ----- 
      // CURSOR SUPLENTES IS
      //   SELECT  SUPLET_PRINCI  V_SUPLENTE
      //     FROM SETSUPLETE
      //    WHERE SUPLET_CODSOC = :SOCIOS_CODSOC
      //      AND  SUPLET_PRINCI <> :TER.TERCOD;
      // -----------------------------------
      // -- VARIABLES
      // -----------------------------------
      //  T_RESPUESTA NUMBER;
      // -----------------------------------
      // BEGIN
      //   PVALTER(:SETSOCIOS.SOCIOS_CODSOC);
      //  BEGIN
      //   SELECT DECODE (TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
      //     INTO :SOCIOS_NOMBRE
      //     FROM TER
      //     WHERE TERCOD=:SOCIOS_CODSOC;
      //   EXCEPTION
      //    WHEN NO_DATA_FOUND THEN
      //    LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
      //  END;
      //  BEGIN
      //  FOR ACT IN SOCIOS LOOP 
      //     LIB$ALERTA('MENSAJE','TERCERO '||:SOCIOS_CODSOC||' YA EXISTE COMO SOCIO DEL TERCERO '||ACT.V_SOCIOS ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      //  END; 
      //  BEGIN
      //  FOR ACT1 IN JUNTA LOOP
      //     LIB$ALERTA('MENSAJE','TERCERO '||:SOCIOS_CODSOC||' YA EXISTE COMO SOCIO DE JUNTA DEL TERCERO '||ACT1.V_JUNTA ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      //  END;
      // BEGIN
      //  FOR ACT2 IN SUPLENTES LOOP
      //     LIB$ALERTA('MENSAJE','TERCERO '||:SOCIOS_CODSOC||' YA EXISTE COMO SUPLENTE DEL TERCERO '||ACT2.V_SUPLENTE ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      // END;
      // END;
      // -- ENVIA AL CAMPO ESTADO EN ACTIVO SI ESTE ESTA NULO.
      // IF :SETSOCIOS.SOCIO_ESTADO IS NULL THEN
      //  :SETSOCIOS.SOCIO_ESTADO := 'A';
      // END IF;
      //#endregion
      async ANFTERCE_setsocios_sociosCodsoc_whenValidateItem() {
          console.log("Entering ANFTERCE_setsocios_sociosCodsoc_whenValidateItem");
          let T_RESPUESTA: number = null;
          //ANFTERCE_PVALTER(SETSOCIOS.SOCIOS_CODSOC);
          // construct payload
          let payload1 = new Map();
          payload1.set("SOCIOS_CODSOC", this.SETSOCIOS.SOCIOS_CODSOC);
          // call REST API
          let result1 = await Rest.post("/anfterce_setsocios/anfterce_setsocios_socioscodsoc_whenvalidateitem_query1", payload1);
          // get values from result
          this.SETSOCIOS.SOCIOS_NOMBRE = result1[0].get("SOCIOS_NOMBRE");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE .....", null, null, null, T_RESPUESTA);
          }

          console.log("Exiting ANFTERCE_setsocios_sociosCodsoc_whenValidateItem");
      }

      async ANFTERCE_setjuntad_keyNxtblk() {
          // null;
      }

      async ANFTERCE_setjuntad_keyPrvblk() {
          // null;
      }

      //#region PLSQL
      // DECLARE
      // -----------------------------------
      // -- CURSORES
      // -----------------------------------
      // CURSOR SOCIOS IS
      // SELECT  SOCIOS_PRINCI  V_SOCIOS
      //   FROM SETSOCIOS
      //    WHERE SOCIOS_CODSOC = :JUNTAD_CODSOC
      //      AND  SOCIOS_PRINCI <> :TER.TERCOD;
      // -----
      // CURSOR JUNTA IS
      //  SELECT  JUNTAD_PRINCI  V_JUNTA
      //     FROM SETJUNTAD
      //    WHERE JUNTAD_CODSOC = :JUNTAD_CODSOC
      //      AND  JUNTAD_PRINCI <> :TER.TERCOD;
      // ----- 
      // CURSOR SUPLENTES IS
      //   SELECT  SUPLET_PRINCI  V_SUPLENTE
      //     FROM SETSUPLETE
      //    WHERE SUPLET_CODSOC = :JUNTAD_CODSOC
      //      AND  SUPLET_PRINCI <> :TER.TERCOD;
      // -------------
      // -- VARIABLES
      // -------------
      //  T_RESPUESTA NUMBER;
      // 
      // BEGIN
      //  PVALTER(:SETJUNTAD.JUNTAD_CODSOC);
      //  BEGIN
      //   SELECT DECODE (TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
      //     INTO :JUNTAD_NOMBRE
      //     FROM TER
      //     WHERE TERCOD=:JUNTAD_CODSOC;
      //   EXCEPTION
      //    WHEN NO_DATA_FOUND THEN
      //    LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
      //   END;
      // BEGIN
      //  FOR ACT IN SOCIOS LOOP 
      //     LIB$ALERTA('MENSAJE','TERCERO '||:JUNTAD_CODSOC||' YA EXISTE COMO SOCIO DEL TERCERO '||ACT.V_SOCIOS ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      //  END; 
      //  BEGIN
      //  FOR ACT1 IN JUNTA LOOP
      //     LIB$ALERTA('MENSAJE','TERCERO '||:JUNTAD_CODSOC||' YA EXISTE COMO SOCIO DE JUNTA DEL TERCERO '||ACT1.V_JUNTA ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      //  END;
      // BEGIN
      //  FOR ACT2 IN SUPLENTES LOOP
      //     LIB$ALERTA('MENSAJE','TERCERO '||:JUNTAD_CODSOC||' YA EXISTE COMO SUPLENTE DEL TERCERO '||ACT2.V_SUPLENTE ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      // END;
      // END; 
      // -- ENVIA AL CAMPO ESTADO EN ACTIVO SI ESTE ESTA NULO.
      // IF :SETJUNTAD.JUNTAD_ESTADO IS NULL THEN
      //  :SETJUNTAD.JUNTAD_ESTADO := 'A';
      // END IF;
      //#endregion
      async ANFTERCE_setjuntad_juntadCodsoc_whenValidateItem() {
          console.log("Entering ANFTERCE_setjuntad_juntadCodsoc_whenValidateItem");
          let T_RESPUESTA: number = null;
          //ANFTERCE_PVALTER(SETJUNTAD.JUNTAD_CODSOC);
          // construct payload
          let payload1 = new Map();
          payload1.set("JUNTAD_CODSOC", this.SETJUNTAD.JUNTAD_CODSOC);
          // call REST API
          let result1 = await Rest.post("/anfterce_setjuntad/anfterce_setjuntad_juntadcodsoc_whenvalidateitem_query1", payload1);
          // get values from result
          this.SETJUNTAD.JUNTAD_NOMBRE = result1[0].get("JUNTAD_NOMBRE");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE .....", null, null, null, T_RESPUESTA);
          }

          console.log("Exiting ANFTERCE_setjuntad_juntadCodsoc_whenValidateItem");
      }

      //#region PLSQL
      // BEGIN
      //  GO_BLOCK('SETSOCIOS');
      // END;
      //#endregion
      async ANFTERCE_setjuntad_volver1_whenMouseClick() {
          console.log("Entering ANFTERCE_setjuntad_volver1_whenMouseClick");
          new OracleFormsBuiltins(this).go_block("SETSOCIOS");
          console.log("Exiting ANFTERCE_setjuntad_volver1_whenMouseClick");
      }

      async ANFTERCE_setsuplete_keyNxtblk() {
          // null;
      }

      async ANFTERCE_setsuplete_keyPrvblk() {
          // null;
      }

      //#region PLSQL
      // DECLARE
      // -----------------------------------
      // -- CURSORES
      // -----------------------------------
      // CURSOR SOCIOS IS
      // SELECT  SOCIOS_PRINCI  V_SOCIOS
      //   FROM SETSOCIOS
      //    WHERE SOCIOS_CODSOC = :SUPLET_CODSOC
      //      AND  SOCIOS_PRINCI <> :TER.TERCOD;
      // -----
      // CURSOR JUNTA IS
      //  SELECT  JUNTAD_PRINCI  V_JUNTA
      //     FROM SETJUNTAD
      //    WHERE JUNTAD_CODSOC = :SUPLET_CODSOC
      //      AND  JUNTAD_PRINCI <> :TER.TERCOD;
      // ----- 
      // CURSOR SUPLENTES IS
      //   SELECT  SUPLET_PRINCI  V_SUPLENTE
      //     FROM SETSUPLETE
      //    WHERE SUPLET_CODSOC = :SUPLET_CODSOC
      //      AND  SUPLET_PRINCI <> :TER.TERCOD;
      // -------------
      // -- VARIABLES
      // -------------
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //   PVALTER(:SETSUPLETE.SUPLET_CODSOC);
      //  BEGIN
      //   SELECT DECODE (TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
      //     INTO :SUPLET_NOMBRE
      //     FROM TER
      //     WHERE TERCOD=:SUPLET_CODSOC;
      //   EXCEPTION
      //    WHEN NO_DATA_FOUND THEN
      //    LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
      //  END;
      // 
      // BEGIN
      //  FOR ACT IN SOCIOS LOOP 
      //     LIB$ALERTA('MENSAJE','TERCERO '||:SUPLET_CODSOC||' YA EXISTE COMO SOCIO DEL TERCERO '||ACT.V_SOCIOS ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      //  END; 
      //  BEGIN
      //  FOR ACT1 IN JUNTA LOOP
      //     LIB$ALERTA('MENSAJE','TERCERO '||:SUPLET_CODSOC||' YA EXISTE COMO SOCIO DE JUNTA DEL TERCERO '||ACT1.V_JUNTA ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      //  END;
      // BEGIN
      //  FOR ACT2 IN SUPLENTES LOOP
      //     LIB$ALERTA('MENSAJE','TERCERO '||:SUPLET_CODSOC||' YA EXISTE COMO SUPLENTE DEL TERCERO '||ACT2.V_SUPLENTE ,NULL,NULL,NULL,T_RESPUESTA);
      //  END LOOP;
      // END;
      // END; 
      // -- ENVIA AL CAMPO ESTADO EN ACTIVO SI ESTE ESTA NULO.
      // IF :SETSUPLETE.SUPLET_ESTADO IS NULL THEN
      //  :SETSUPLETE.SUPLET_ESTADO := 'A';
      // END IF;
      //#endregion
      async ANFTERCE_setsuplete_supletCodsoc_whenValidateItem() {
          console.log("Entering ANFTERCE_setsuplete_supletCodsoc_whenValidateItem");
          let T_RESPUESTA: number = null;
          //ANFTERCE_PVALTER(this.SETSUPLETE.SUPLET_CODSOC);
          // construct payload
          let payload1 = new Map();
          payload1.set("SUPLET_CODSOC", this.SETSUPLETE.SUPLET_CODSOC);
          // call REST API
          let result1 = await Rest.post("/anfterce_setsuplete/anfterce_setsuplete_supletcodsoc_whenvalidateitem_query1", payload1);
          // get values from result
          this.SETSUPLETE.SUPLET_NOMBRE = result1[0].get("SUPLET_NOMBRE");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE .....", null, null, null, T_RESPUESTA);
          }

          console.log("Exiting ANFTERCE_setsuplete_supletCodsoc_whenValidateItem");
      }

      //#region PLSQL
      // BEGIN
      //  GO_BLOCK('SETSOCIOS');
      // END;
      //#endregion
      async ANFTERCE_setsuplete_volver2_whenMouseClick() {
          console.log("Entering ANFTERCE_setsuplete_volver2_whenMouseClick");
          new OracleFormsBuiltins(this).go_block("SETSOCIOS");
          console.log("Exiting ANFTERCE_setsuplete_volver2_whenMouseClick");
      }

      async ANFTERCE_ter1_keyNxtblk() {
          // null;
      }

      async ANFTERCE_ter1_keyPrvblk() {
          // null;
      }

      //#region PLSQL
      // DECLARE
      // T_RESPUESTA NUMBER;
      // BEGIN
      // IF :TERCPPA >  :TERCPSU  THEN
      //   LIB$ALERTA('MENSAJE','EL VALOR CAPITAL  PAGADO DEBE SER MENOR QUE EL CAPITAL SUSCRITO..',
      //   NULL,NULL,NULL,T_RESPUESTA);
      //   RAISE FORM_TRIGGER_FAILURE;
      // END IF;
      // END;
      //  
      //#endregion
      async ANFTERCE_ter1_tercppa_whenValidateItem() {
          console.log("Entering ANFTERCE_ter1_tercppa_whenValidateItem");
          let T_RESPUESTA: number = null;
          if (this.TER1.TERCPPA > this.TER1.TERCPSU) {
              //ANFTERCE_LIB$ALERTA("MENSAJE", "EL VALOR CAPITAL  PAGADO DEBE SER MENOR QUE EL CAPITAL SUSCRITO..", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          console.log("Exiting ANFTERCE_ter1_tercppa_whenValidateItem");
      }

      //#region PLSQL
      // DECLARE
      // T_RESPUESTA NUMBER;
      // BEGIN
      // IF  :TERCPSU > :TERCPAU THEN
      //   LIB$ALERTA('MENSAJE','EL VALOR CAPITAL SUSCRITO DEBE SER MENOR QUE EL CAPITAL AUTORIZADO..',
      //   NULL,NULL,NULL,T_RESPUESTA);
      //   RAISE FORM_TRIGGER_FAILURE;
      // END IF;
      // END;
      //#endregion
      async ANFTERCE_ter1_tercpsu_whenValidateItem() {
          console.log("Entering ANFTERCE_ter1_tercpsu_whenValidateItem");
          let T_RESPUESTA: number = null;
          if (this.TER1.TERCPSU > this.TER1.TERCPAU) {
              //ANFTERCE_LIB$ALERTA("MENSAJE", "EL VALOR CAPITAL SUSCRITO DEBE SER MENOR QUE EL CAPITAL AUTORIZADO..", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }
          console.log("Exiting ANFTERCE_ter1_tercpsu_whenValidateItem");
      }

      async ANFTERCE_setextban_keyNxtblk() {
          // null;
      }

      async ANFTERCE_setextban_keyPrvblk() {
          // null;
      }

      //#region PLSQL
      // BEGIN
      //  SELECT ENTFIN_DESENT
      //    INTO :DES_ENEXTRA
      //    FROM ANTENTFIN
      //   WHERE ENTFIN_CODENT=:EXTBAN_CODENT;
      //  EXCEPTION
      //  WHEN NO_DATA_FOUND THEN
      //  NULL;
      // END;
      //#endregion
      async ANFTERCE_setextban_postQuery() {
          console.log("Entering ANFTERCE_setextban_postQuery");
          // construct payload
          let payload1 = new Map();
          payload1.set("EXTBAN_CODENT", this.SETEXTBAN.EXTBAN_CODENT);
          // call REST API
          let result1 = await Rest.post("/anfterce_setextban/anfterce_setextban_postquery_query1", payload1);
          // get values from result
          this.SETEXTBAN.DES_ENEXTRA = result1[0].get("DES_ENEXTRA");
          if (result1 == null || result1.length == 0) {

          }

          console.log("Exiting ANFTERCE_setextban_postQuery");
      }

      //#region PLSQL
      // DECLARE
      //  T_RESPUESTA NUMBER;
      // BEGIN
      //  SELECT ENTFIN_DESENT
      //    INTO :DES_ENEXTRA
      //    FROM ANTENTFIN
      //   WHERE ENTFIN_CODENT=:EXTBAN_CODENT;
      //  EXCEPTION
      //  WHEN NO_DATA_FOUND THEN
      //  LIB$ALERTA('MENSAJE','ENTIDAD FINANCIERA INEXISTENTE..',NULL,NULL,NULL,T_RESPUESTA);
      //  RAISE FORM_TRIGGER_FAILURE;
      // END;
      //#endregion
      async ANFTERCE_setextban_extbanCodent_whenValidateItem() {
          console.log("Entering ANFTERCE_setextban_extbanCodent_whenValidateItem");
          let T_RESPUESTA: number = null;
          // construct payload
          let payload1 = new Map();
          payload1.set("EXTBAN_CODENT", this.SETEXTBAN.EXTBAN_CODENT);
          // call REST API
          let result1 = await Rest.post("/anfterce_setextban/anfterce_setextban_extbancodent_whenvalidateitem_query1", payload1);
          // get values from result
          this.SETEXTBAN.DES_ENEXTRA = result1[0].get("DES_ENEXTRA");
          if (result1 == null || result1.length == 0) {

              //ANFTERCE_LIB$ALERTA("MENSAJE", "ENTIDAD FINANCIERA INEXISTENTE..", null, null, null, T_RESPUESTA);
              console.log("FORM_TRIGGER_FAILURE");
              throw new Error('FORM_TRIGGER_FAILURE');
          }

          console.log("Exiting ANFTERCE_setextban_extbanCodent_whenValidateItem");
      }

}
