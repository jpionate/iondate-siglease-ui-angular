import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFPAQCRE business logic
import {
    VARIABLE,
    TOOLBAR,
    BASE
} from "./ANFPAQCRE_models";



// class ANFPAQCRE
@Component({
    selector: 'app-anfpaqcre',
    templateUrl: './anfpaqcre.component.html',
})
export class AnfpaqcreComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_NIT', null],
        ['P_CTRL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFPAQCRE_whenMouseDoubleclick() {
        console.log("Entering ANFPAQCRE_whenMouseDoubleclick");
        console.log("Exiting ANFPAQCRE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFPAQCRE_preForm() {
        console.log("Entering ANFPAQCRE_preForm");
        console.log("Exiting ANFPAQCRE_preForm");
    }

    //#region PLSQL
    // BEGIN SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA   := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD      := GET_APPLICATION_PROPERTY(CONNECT_STRING);
    // 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //      :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSE
    //      :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    // 
    // 
    // 
    // --ARQUITECTURA
    // /*BEGIN
    //   SELECT S.USU_CODUNI 
    //    INTO :this.PARAMETER.get("P_UNIDAD")
    //   FROM SGUSUARIOS S
    //   WHERE S.USU_CODIGO = PLSQLBuiltins.user();
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //   LIB$DTNERFRMA('EL USUARIO '||USER||' NO TIENE ASIGNADA LA UNIDAD');
    //   
    // END;*/
    // :this.PARAMETER.get("P_UNIDAD") := FBD_CON_UNICON (:VARIABLE.UNIDAD);
    // --ARQUITECTURA
    // 
    // 
    // DECLARE
    //  V_FORMA VARCHAR2(10);
    // BEGIN
    // V_FORMA := F_SIGUIENTE_F;
    // END;
    // 
    // --PARA SER INVOCADO POR OTRA VENTANA
    // IF  :this.PARAMETER.get("P_CTRL") ='Q' THEN
    // :VARIABLE.TERCERO  :=  :this.PARAMETER.get("P_NIT");
    // NEXT_ITEM;
    // END IF; END;
    //#endregion
    async ANFPAQCRE_whenNewFormInstance() {
        console.log("Entering ANFPAQCRE_whenNewFormInstance");
        this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", 5);
        this.BASE.FECHA = PLSQLBuiltins.sysdate();
        this.BASE.USUARIO = PLSQLBuiltins.user();
        this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
        this.BASE.BD = this.oracleFormsBuiltins.get_application_property("CONNECT_STRING");
        if (["FIN1", "FIN1"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "PRODUCCION";
        }
        else {
            this.BASE.BASE_DAT = "DESARROLLO";
        }
        // this.PARAMETER.set("P_UNIDAD", FBD_CON_UNICON(VARIABLE.UNIDAD));
        {

            let V_FORMA: string = null;
            // V_FORMA = F_SIGUIENTE_F;
        }

        if (this.PARAMETER.get("P_CTRL") == "Q") {
            this.VARIABLE.TERCERO = this.PARAMETER.get("P_NIT");
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting ANFPAQCRE_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  --PY 6663
    //  T_RESPUESTA   NUMBER;
    //   V_SOLICITUD   VARCHAR2(10);
    //   V_LLAMADA     NUMBER;  
    //   V_FECHA       VARCHAR2(10);
    //   V_CANTIDAD    NUMBER;
    //   V_CANTI       NUMBER;  
    //  --PY 6663
    //  
    // ------------------------------------------------
    // -- CURSOR DE CORRENDATARIOS
    // ------------------------------------------------
    // CURSOR CORRENDATARIOS IS 
    //  SELECT DISTINCT OTERSOL_NITTER NITTER
    //     FROM CRTOTERSOL
    //    WHERE (OTERSOL_OFCSOL ,OTERSOL_CODSOL,OTERSOL_CODUNI) IN (SELECT SOLICR_OFCSOL,SOLICR_CODSOL,SOLICR_CODUNI --ARQUITECTURA
    //                                                 FROM CRTSOLICR
    //                                                WHERE SOLICR_NITTER = :TERCERO
    //                                                  AND SOLICR_ESTSOL = 'EC'
    //                                                  AND SOLICR_CODUNI = :this.PARAMETER.get("P_UNIDAD"))--ARQUITECTURA
    //       AND OTERSOL_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //                 FROM CTTUNICO
    //                WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD")) --ARQUITECTURA
    //      AND OTERSOL_TIPVIN='13';
    // ------------------------------------------------
    // -- CURSOR DE SOLICITUDES
    // ------------------------------------------------
    // CURSOR SOLICITUDES IS 
    //  SELECT SOLICR_OFCSOL OFCSOL,SOLICR_CODSOL CODSOL,SOLICR_CODUNI CODUNI --ARQUITECTURA
    //     FROM CRTSOLICR
    //    WHERE SOLICR_NITTER=:TERCERO
    //      AND SOLICR_ESTSOL ='EC'
    //      AND SOLICR_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //                FROM CTTUNICO
    //               WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD"))--ARQUITECTURA
    //      ;
    //      
    //      
    // ------------------------------------------------
    // -- CURSOR DE CORRENDATARIOS PDFS   --PDF 9078
    // ------------------------------------------------
    // CURSOR CORRENDATARIOSPDF IS 
    //  SELECT DISTINCT OTERSOL_NITTER NITTER,OTERSOL_TIPVIN
    //     FROM CRTOTERSOL
    //    WHERE (OTERSOL_OFCSOL ,OTERSOL_CODSOL,OTERSOL_CODUNI) IN (SELECT SOLICR_OFCSOL,SOLICR_CODSOL,SOLICR_CODUNI --ARQUITECTURA
    //                                                 FROM CRTSOLICR
    //                                                WHERE SOLICR_NITTER=:TERCERO
    //                                                  AND SOLICR_ESTSOL ='EC'
    //                                                  AND SOLICR_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //                                                           FROM CTTUNICO
    //                                                           WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD"))--ARQUITECTURA
    //                                                  )
    //      AND OTERSOL_TIPVIN IN ('13','05')
    //      ORDER BY OTERSOL_TIPVIN DESC;
    // ------------------------------------------------    --PDF 9078  
    //      
    // ------------------------------------------------
    // -- VARIABLES
    // ------------------------------------------------
    //  COMANDO VARCHAR2(255);
    //  PL_ID PARAMLIST;
    //  CONT_REG NUMBER(20);
    //  V_TIPTER TER.TERPER%TYPE;
    //  V_SUBSECTOR ENT.ENTSSC%TYPE;
    //  P_PERIODO1 VARCHAR2(4);
    //  P_PERIODO2 VARCHAR2(4);
    //  P_PERIODO3 VARCHAR2(4);
    //  V_PERIODO  VARCHAR2(4);
    //  V_PERTER1  VARCHAR2(4);
    //  
    //  --PDF 9078
    //  
    //  V_RUTAGEN    VARCHAR2(500);
    //  V_RUTAJAVA   VARCHAR2(500);
    //  V_GENEPDF    VARCHAR2(500);
    //  V_RUTAGENDEF VARCHAR2(500);
    //  
    //  V_RUTAUNI  VARCHAR2(5000);
    //  V_CORRENT  VARCHAR2(5000);
    //  V_RUTAUNO  VARCHAR2(5000);
    //  V_SALIDDEF VARCHAR2(5000);
    //  V_SALIDDEU VARCHAR2(5000);
    //  V_UNIFICAC VARCHAR2(5000);
    //  
    //  V_REPORTE1 VARCHAR2(500);
    //  V_REPORTE2 VARCHAR2(500);
    //  V_REPORTE3 VARCHAR2(500);
    //  V_REPORTE4 VARCHAR2(500);
    //  V_REPORTE5 VARCHAR2(500);
    //  V_REPORTE6 VARCHAR2(500);
    //  V_REPORTE7 VARCHAR2(500);
    //  V_REPORTE8 VARCHAR2(500);
    //  V_CARGO    VARCHAR2(5);
    // 
    //  --PY13096. SE AUMENTA EL TAMAÑO DE CARACTERES DE LAS VARIABLES DE CADENA QUE CONTIENEN LOS COMANDOS QUE PERMITEN GENERAR LOS SUBPAQUETES DE CRÉDITO 
    //  --PARA ALMACENAR COMANDOS EN LOS QUE SE INVOLUCRAN UN NÚMERO DE GRANDE DE ARCHIVOS .PDF COMPONENTE.
    //  --V_SALIDUNO VARCHAR2(1000);
    //  --V_SALIDDOS VARCHAR2(1000);
    //  --V_SALIDTRE VARCHAR2(1000);
    //  --V_SALIDSOL VARCHAR2(1000);
    //  
    //  V_SALIDUNO VARCHAR2(4000);
    //  V_SALIDDOS VARCHAR2(4000);
    //  V_SALIDTRE VARCHAR2(4000);
    //  V_SALIDSOL VARCHAR2(4000);
    //  
    //  V_RIO         NUMBER;
    //  V_BORRADO1    VARCHAR2(5000);
    //  V_BORRADO2    VARCHAR2(5000);
    //  V_BORRADO3    VARCHAR2(5000);
    //  
    //  V_RATING     VARCHAR2(10);
    //  
    //  V_RUTASOL     VARCHAR2(5000);
    //  V_SOLICI      VARCHAR2(5000);
    //  V_SOLICIRECO  VARCHAR2(5000);
    //  V_RUTARECO    VARCHAR2(5000);
    //  V_SALIDCER    VARCHAR2(5000);
    //  V_SALIDREC    VARCHAR2(5000);
    //  V_CANTREC     NUMBER; 
    //   
    //  --PDF 9078
    // ------------------------------------------------
    // -- PROCESO PRINCIPAL
    // ------------------------------------------------
    // BEGIN  
    //  
    //   P_PERIODO1:=NULL;
    //   P_PERIODO2:=NULL;
    //   P_PERIODO3:=NULL;
    //   V_TIPTER:=NULL;
    //   V_SUBSECTOR:=NULL;
    //   
    //   --PDF 9078
    //   
    // BEGIN
    //  SELECT REPLACE(PARAME_VALOR,'"',NULL)
    //   INTO V_RUTAGENDEF
    //   FROM SETPARAMETRO WHERE PARAME_PROCES = 'SIGLEASE' 
    //    AND PARAME_CODIGO= 'DIRPDF';
    // END;
    // 
    // BEGIN
    //  SELECT REPLACE(PARAME_VALOR,'"',NULL)
    //   INTO V_RUTAGEN
    //   FROM SETPARAMETRO WHERE PARAME_PROCES = 'SIGLEASE' 
    //    AND PARAME_CODIGO= 'DIRTEMPPDF';
    // END;
    // 
    // 
    // BEGIN
    //  SELECT PARAME_VALOR
    //   INTO V_GENEPDF
    //   FROM SETPARAMETRO WHERE PARAME_PROCES = 'SIGLEASE' 
    //    AND PARAME_CODIGO= 'DIRSOFPDF';
    // END;
    // 
    // BEGIN
    //  SELECT PARAME_VALOR
    //   INTO V_RUTAJAVA
    //   FROM SETPARAMETRO WHERE PARAME_PROCES = 'SIGLEASE' 
    //    AND PARAME_CODIGO= 'DIRJAVA';
    // END;
    // 
    //  --BORRADO DE ARHIVOS  
    //     
    //     
    //   FOR CPDF IN CORRENDATARIOSPDF LOOP 
    //    HOST('BORRARPDFS.BAT "'||V_RUTAGEN||:VARIABLE.TERCERO||'_'||CPDF.NITTER||'_UNO.PDF'||'" ',NO_SCREEN);
    //   END LOOP;    
    //   
    //      
    //     
    //  HOST('BORRARPDFS.BAT "'||V_RUTAGEN||:VARIABLE.TERCERO||'_CERO.PDF'||'" ',NO_SCREEN);   
    //  HOST('BORRARPDFS.BAT "'||V_RUTAGEN||:VARIABLE.TERCERO||'_UNO.PDF'||'" ',NO_SCREEN);
    //  HOST('BORRARPDFS.BAT "'||V_RUTAGEN||:VARIABLE.TERCERO||'_DOS.PDF'||'" ',NO_SCREEN);
    //  HOST('BORRARPDFS.BAT "'||V_RUTAGEN||:VARIABLE.TERCERO||'_TRES.PDF'||'" ',NO_SCREEN);
    //  
    //  HOST('BORRARPDFS.BAT "'||V_RUTAGENDEF||:VARIABLE.TERCERO||'_UP_'||REPLACE(:VARIABLE.V_NOMBRE,' ','_') ||'.PDF'||'" ',NO_SCREEN);
    //    
    //   --BORRADO DE ARHIVOS 
    // 
    //   
    //    --PDF 9078
    //    
    // 
    //   -----------------------------------------------
    //   -- PROCESO VALIDACION
    //   ------------------------------------------------
    //    PUP_PROCESOVALIDACION; 
    //   ------------------------------------------------ 
    //    
    //   
    //   BEGIN
    //     SELECT TERPER,ENTSSC
    //       INTO V_TIPTER,V_SUBSECTOR
    //       FROM OPS$SEGUI.TER,
    //            OPS$SEGUI.ENT
    //      WHERE TERCOD=ENTCOD
    //        AND TERCOD=:TERCERO;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    V_TIPTER:=NULL;
    //    V_SUBSECTOR:=NULL;
    //   END;   
    //  IF V_TIPTER ='J'  OR (V_TIPTER ='N' AND V_SUBSECTOR ='204') THEN
    //     PUP_PERSONAJURIDICA(:TERCERO,:TERCERO,:CENTRAL,V_TIPTER,'PDF');
    //  ELSE 
    //   PUP_PERSONANATURAL(:TERCERO,:TERCERO,:CENTRAL,'PDF');   --PRUEBA 9078 PDF   
    //  END IF;
    //  --------------------------------------------------
    //  -- REALIZA LA INFORMACIÓN DE LOS CORRENDATARIOS   
    //  --------------------------------------------------
    //  FOR COR IN CORRENDATARIOS LOOP
    //   V_TIPTER:=NULL;
    //     V_SUBSECTOR:=NULL;
    //     BEGIN
    //     SELECT TERPER,ENTSSC
    //       INTO V_TIPTER,V_SUBSECTOR
    //       FROM OPS$SEGUI.TER,
    //            OPS$SEGUI.ENT
    //      WHERE TERCOD=ENTCOD
    //        AND TERCOD=COR.NITTER;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //      V_TIPTER:=NULL;
    //      V_SUBSECTOR:=NULL;
    //     END;   
    //    IF V_TIPTER ='J'  OR (V_TIPTER ='N' AND V_SUBSECTOR ='204') THEN
    //       PUP_PERSONAJURIDICA(COR.NITTER,:TERCERO,:CENTRAL,V_TIPTER,'PDF');       
    //    ELSE 
    //     PUP_PERSONANATURAL(COR.NITTER,:TERCERO,:CENTRAL,'PDF');   
    //    END IF;
    //  END LOOP;
    //  ---------------------------------------------
    //  -- IMPRIME EL SOPORTE DE LAS SOLICITUDES
    //  -- EN ESTADO EC
    //  ---------------------------------------------
    //   FOR SOL IN SOLICITUDES LOOP
    //    PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //       DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //     ADD_PARAMETER(PL_ID,'P_OFICINA',"TEXT_PARAMETER",SOL.OFCSOL);
    //     ADD_PARAMETER(PL_ID,'P_SOLICITUD',"TEXT_PARAMETER",SOL.CODSOL); 
    //     ADD_PARAMETER(PL_ID,'P_UNIDAD',"TEXT_PARAMETER",SOL.CODUNI); 
    //     --PDF 9078    
    //   ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'FILE');   --PDF 9078 
    //   ADD_PARAMETER(PL_ID,'DESFORMAT',"TEXT_PARAMETER",'PDF');  --PDF 9078  
    //   ADD_PARAMETER(PL_ID,'DESNAME',"TEXT_PARAMETER",V_RUTAGEN||:VARIABLE.TERCERO||'_'||SOL.OFCSOL||'_'||SOL.CODSOL||'_CRRSOPCR.PDF');   --PDF 9078 
    //     RUN_PRODUCT (REPORTS, 'CRRSOPCR', SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, NULL)  ;              --PDF 9078 
    //     V_RUTASOL := ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_'||SOL.OFCSOL||'_'||SOL.CODSOL||'_CRRSOPCR.PDF';
    //     V_SOLICI := V_RUTASOL ||' '|| V_SOLICI;
    //     
    //     
    //     BEGIN     
    //    SELECT COUNT(*)
    //    INTO V_CANTREC 
    //    FROM CRTSOLICR CR, TER T 
    //    WHERE T.TERCOD= CR.SOLICR_NITTER 
    //     AND CR.SOLICR_CODREC IS NOT NULL 
    //     AND CR.SOLICR_OFCSOL = SOL.OFCSOL
    //     AND CR.SOLICR_CODSOL = SOL.CODSOL
    //     AND CR.SOLICR_CODUNI = SOL.CODUNI --ARQUITECTURA
    //     --AND T.TERPER = 'N'
    //     ;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN  V_CANTREC := 0; 
    //     END;
    //     
    //      
    //    /* IF V_CANTREC = 0 THEN
    //     
    //       PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //      IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //      END IF;
    //      PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //      ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //      ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //      ADD_PARAMETER(PL_ID,'P_OFICINA',"TEXT_PARAMETER",SOL.OFCSOL);
    //      ADD_PARAMETER(PL_ID,'P_SOLICITUD',"TEXT_PARAMETER",SOL.CODSOL); 
    //  
    //      --PDF 9078    
    //    ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'FILE');   --PDF 9078 
    //    ADD_PARAMETER(PL_ID,'DESFORMAT',"TEXT_PARAMETER",'PDF');  --PDF 9078  
    //    ADD_PARAMETER(PL_ID,'DESNAME',"TEXT_PARAMETER",V_RUTAGEN||:VARIABLE.TERCERO||'_'||SOL.OFCSOL||'_'||SOL.CODSOL||'_CRRSOPCR1.PDF');   --PDF 9078 
    //      RUN_PRODUCT (REPORTS, 'CRRSOCR', SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, NULL)  ;              --PDF 9078 
    //      V_RUTARECO := ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_'||SOL.OFCSOL||'_'||SOL.CODSOL||'_CRRSOPCR1.PDF';
    //      V_SOLICIRECO := V_RUTARECO ||' '|| V_SOLICIRECO;
    //     
    //     END IF;*/
    //     
    //     
    //     --PDF 9078
    //     
    //   END LOOP;    
    //   
    //   --PY 6663  
    //   
    //   
    //    --FORMATO DE LLAMADA   
    //    
    //    --PY14917. SE SACA LA ÚLTIMA SOLICITUD PARA REPORTAR EN EL FORMATO DE LLAMADA    
    //     BEGIN     
    //       SELECT A.LLAMAD_CONSEC CONSEC,MAX(L.SOLILL_SOLICI)
    //        INTO   V_LLAMADA,V_SOLICITUD
    //      FROM ANTTLLAMAD A , ANTTSOLILL L
    //       WHERE A.LLAMAD_CONSEC = (SELECT MAX(D.LLAMAD_CONSEC) 
    //                                FROM ANTTLLAMAD D
    //                                WHERE D.LLAMAD_TERCER =:VARIABLE.TERCERO
    //                                )
    //         AND A.LLAMAD_CONSEC = L.SOLILL_CONLLA
    //            GROUP BY A.LLAMAD_CONSEC;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN 
    //       V_LLAMADA   := NULL;
    //       V_SOLICITUD := NULL;    
    //     END;
    //     
    //     
    //      
    //    PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //     ADD_PARAMETER(PL_ID,'TERCERO',"TEXT_PARAMETER",:VARIABLE.TERCERO);
    //     ADD_PARAMETER(PL_ID,'SOLICITUD1',"TEXT_PARAMETER",V_SOLICITUD);
    //     ADD_PARAMETER(PL_ID,'LLAMADA1',"TEXT_PARAMETER",V_LLAMADA);
    //     
    //     --PDF 9078    
    //   ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'FILE');   --PDF 9078 
    //   ADD_PARAMETER(PL_ID,'DESFORMAT',"TEXT_PARAMETER",'PDF');  --PDF 9078  
    //   ADD_PARAMETER(PL_ID,'DESNAME',"TEXT_PARAMETER",V_RUTAGEN|| :VARIABLE.TERCERO||'_ANRLLAMA.PDF');   --PDF 9078 
    //     RUN_PRODUCT (REPORTS, 'ANRLLAMA', SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, NULL)  ;             --PDF 9078 
    //     V_REPORTE2 := ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_ANRLLAMA.PDF';
    //     
    //     --PDF 9078
    //     
    //     --FORMATO DE LLAMADA
    //     
    //     
    //     
    //     --RATING DE OTORGAMIENTO
    //     
    //     
    //     BEGIN     
    //      SELECT  TO_CHAR(MAX(RATOTO_FECREG),'YYYY-MM-DD')
    //       INTO   V_RATING
    //      FROM ANTRATOTO 
    //       WHERE RATOTO_TERCER = :VARIABLE.TERCERO ; 
    //     EXCEPTION WHEN NO_DATA_FOUND THEN 
    //       V_RATING   := NULL;      
    //     END;
    //     
    //     
    //      
    //    PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //     ADD_PARAMETER(PL_ID,'P_TERCERO',"TEXT_PARAMETER",:VARIABLE.TERCERO);
    //     ADD_PARAMETER(PL_ID,'P_FECHA',"TEXT_PARAMETER",V_RATING);
    //     
    //     
    //     --PDF 9078    
    //   ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'FILE');   --PDF 9078 
    //   ADD_PARAMETER(PL_ID,'DESFORMAT',"TEXT_PARAMETER",'PDF');  --PDF 9078  
    //   ADD_PARAMETER(PL_ID,'DESNAME',"TEXT_PARAMETER",V_RUTAGEN|| :VARIABLE.TERCERO||'_ANTRATOT.PDF');   --PDF 9078 
    //     RUN_PRODUCT (REPORTS, 'ANTRATOT', SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, NULL)  ;             --PDF 9078 
    //     V_REPORTE6 := ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_ANTRATOT.PDF';
    // 
    //     
    //     --RATING DE OTORGAMIENTO
    //     
    //       
    //   
    //     --VALIDACION DE LA INFORMACION        
    //     BEGIN     
    //      SELECT COUNT(*)
    //      INTO V_CANTIDAD
    //      FROM COTTVAINF I
    //    WHERE I.TVAINF_CODTER = :VARIABLE.TERCERO
    //    AND TRUNC(I.TVAINF_FREGIS) = TRUNC(SYSDATE);     
    //     END ;  
    //     
    //     IF V_CANTIDAD = 0 THEN
    //       V_FECHA :=   NULL;
    //     ELSE
    //        V_FECHA :=  TO_CHAR(SYSDATE,'YYYY-MM-DD');      
    //           
    //     END IF;
    //     
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     
    //                                            
    //      
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //     ADD_PARAMETER(PL_ID,'FECHA',"TEXT_PARAMETER",NVL(V_FECHA,NULL));
    //     ADD_PARAMETER(PL_ID,'SOLICITUD',"TEXT_PARAMETER",NULL);
    //     ADD_PARAMETER(PL_ID,'TERCERO',"TEXT_PARAMETER",:VARIABLE.TERCERO);
    //     
    //     --PDF 9078    
    //   ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'FILE');   --PDF 9078 
    //   ADD_PARAMETER(PL_ID,'DESFORMAT',"TEXT_PARAMETER",'PDF');  --PDF 9078  
    //   ADD_PARAMETER(PL_ID,'DESNAME',"TEXT_PARAMETER",V_RUTAGEN|| :VARIABLE.TERCERO||'_ANRVALTER.PDF');   --PDF 9078 
    //     RUN_PRODUCT (REPORTS, 'ANRVALTER', SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, NULL)  ;             --PDF 9078 
    //     V_REPORTE3 := ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_ANRVALTER.PDF';    
    //     --PDF 9078
    //     
    //     
    //     --VALIDACION DE LA INFORMACION
    //   
    //     --MORAS TERCERO    
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //     ADD_PARAMETER(PL_ID,'PU_TER1',"TEXT_PARAMETER",:VARIABLE.TERCERO);
    //     ADD_PARAMETER(PL_ID,'PU_IMPVI',"TEXT_PARAMETER",'VI');
    //     ADD_PARAMETER(PL_ID,'PU_IMPCA',"TEXT_PARAMETER",'CA');
    //     
    //     --PDF 9078    
    //   ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'FILE');   --PDF 9078 
    //   ADD_PARAMETER(PL_ID,'DESFORMAT',"TEXT_PARAMETER",'PDF');  --PDF 9078  
    //   ADD_PARAMETER(PL_ID,'DESNAME',"TEXT_PARAMETER",V_RUTAGEN|| :VARIABLE.TERCERO||'_ANRMOTER.PDF');   --PDF 9078 
    //     RUN_PRODUCT (REPORTS, 'ANRMOTER', SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, NULL)  ;             --PDF 9078 
    //     V_REPORTE4 := ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_ANRMOTER.PDF';
    //     --PDF 9078
    //     
    //     
    //     --MORAS TERCERO
    //     
    //     --ESTADO CUENTA    
    //    
    //      PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //      IF NOT ID_NULL(PL_ID) THEN
    //         DESTROY_PARAMETER_LIST(PL_ID);
    //      END IF;
    //      PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //      ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //      ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //      ADD_PARAMETER(PL_ID,'NIT',"TEXT_PARAMETER",:VARIABLE.TERCERO);
    //      
    //      --PDF 9078    
    //   ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'FILE');   --PDF 9078 
    //   ADD_PARAMETER(PL_ID,'DESFORMAT',"TEXT_PARAMETER",'PDF');  --PDF 9078  
    //   ADD_PARAMETER(PL_ID,'DESNAME',"TEXT_PARAMETER",V_RUTAGEN|| :VARIABLE.TERCERO||'_ESTACNIT.PDF');   --PDF 9078 
    //     RUN_PRODUCT (REPORTS, 'ESTACNIT', SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, NULL)  ;             --PDF 9078     
    //     V_REPORTE5 := ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_ESTACNIT.PDF';
    //     
    //     --PDF 9078
    //      
    //   
    //     --ESTADO CUENTA
    //     
    //   
    //     
    //     --UNIFACION PDF
    //     
    //     
    //     V_REPORTE7 :=  ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_FLUJO.PDF';
    //     V_REPORTE8 :=  ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_SIMULADOR.PDF';
    //     
    //     
    //     
    //     BEGIN
    //      SELECT S.USU_CARGO_N 
    //      INTO V_CARGO
    //      FROM SGUSUARIOS S
    //      WHERE USU_CODIGO = USER
    //       --AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN V_CARGO := 'XXX';
    //     END;
    //    
    //    
    //     IF V_CARGO IN ('COAF','JERF','ANFI') THEN 
    //          
    //       --V_RUTAUNI :=  V_REPORTE3||' '||V_REPORTE6 ||' '||V_REPORTE4||' '||V_REPORTE5||' '||V_REPORTE7||' '||V_REPORTE8;  PY 12681
    //       V_RUTAUNI :=  V_REPORTE4||' '||V_REPORTE5||' '||V_REPORTE7||' '||V_REPORTE8;
    //     ELSE
    //       V_RUTAUNI :=  V_REPORTE3||' '||V_REPORTE2 ||' '||V_REPORTE6 ||' '||V_REPORTE4||' '||V_REPORTE5||' '||V_REPORTE7;
    //     END IF;
    //    
    //        
    //     
    //     FOR CPDF IN CORRENDATARIOSPDF LOOP 
    //     
    //     V_RUTAUNO := ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_'||CPDF.NITTER||'_UNO.PDF';
    //     
    //     V_CORRENT := V_RUTAUNO ||' '|| V_CORRENT;
    //     
    //     END LOOP;  
    //     
    //     
    //     V_SALIDCER :=  ' -O  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_CERO.PDF';    
    //     V_SALIDUNO :=  ' -O  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_UNO.PDF';    
    //     V_SALIDDOS :=  ' -O  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_DOS.PDF ';
    //     V_SALIDTRE :=  ' -O  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_TRES.PDF';
    //    
    //    
    //      
    //     V_SALIDREC := V_RUTAJAVA||' -JAR ' ||V_GENEPDF ||' '||V_SOLICIRECO ||' '|| V_SALIDCER  ||'  CONCAT';
    //     V_SALIDDEU := V_RUTAJAVA||' -JAR ' ||V_GENEPDF ||' '||V_CORRENT ||' '|| V_SALIDUNO  ||'  CONCAT';
    //     V_SALIDDEF := V_RUTAJAVA||' -JAR ' ||V_GENEPDF ||' '||V_RUTAUNI ||' '|| V_SALIDDOS  ||'  CONCAT';
    //     V_SALIDSOL := V_RUTAJAVA||' -JAR ' ||V_GENEPDF ||' '||V_SOLICI  ||' '|| V_SALIDTRE  ||'  CONCAT';
    //    
    //   
    //    --UNIFACION PDF
    //     HOST(V_SALIDREC,NO_SCREEN);
    //     HOST(V_SALIDDEU,NO_SCREEN);
    //     HOST(V_SALIDDEF,NO_SCREEN);
    //     HOST(V_SALIDSOL,NO_SCREEN);          
    //     
    //     
    //     V_SALIDTRE :=  ' -O  '|| V_RUTAGENDEF ||:VARIABLE.TERCERO||'_UP_'||REPLACE(:VARIABLE.V_NOMBRE,' ','_') ||'.PDF';
    //     
    //    
    //     V_UNIFICAC := V_RUTAJAVA||' -JAR ' ||V_GENEPDF||' '||' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_UNO.PDF'||' '|| ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_DOS.PDF' ||' '||' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_TRES.PDF' ||' '|| V_SALIDTRE ||'  CONCAT';
    //       
    //     HOST(V_UNIFICAC,NO_SCREEN); 
    // 
    //    LIB$ALERTA( 'MENSAJE' , 'POR FAVOR VERIFICAR EL PAQUETE DEL TERCERO...'||:VARIABLE.TERCERO ||' EN LA RUTA  :'||V_RUTAGENDEF,NULL,NULL,NULL,T_RESPUESTA);   
    //   
    // 
    // 
    //   
    // END;
    //#endregion
    async ANFPAQCRE_variable_actualizapdf_whenMouseClick() {
        console.log("Entering ANFPAQCRE_variable_actualizapdf_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_SOLICITUD: string = null;
        let V_LLAMADA: number = null;
        let V_FECHA: string = null;
        let V_CANTIDAD: number = null;
        let V_CANTI: number = null;
        let COMANDO: string = null;
        let PL_ID: number = null;
        let CONT_REG: number = null;
        let V_TIPTER: null = null;
        let V_SUBSECTOR: null = null;
        let P_PERIODO1: string = null;
        let P_PERIODO2: string = null;
        let P_PERIODO3: string = null;
        let V_PERIODO: string = null;
        let V_PERTER1: string = null;
        let V_RUTAGEN: string = null;
        let V_RUTAJAVA: string = null;
        let V_GENEPDF: string = null;
        let V_RUTAGENDEF: string = null;
        let V_RUTAUNI: string = null;
        let V_CORRENT: string = null;
        let V_RUTAUNO: string = null;
        let V_SALIDDEF: string = null;
        let V_SALIDDEU: string = null;
        let V_UNIFICAC: string = null;
        let V_REPORTE1: string = null;
        let V_REPORTE2: string = null;
        let V_REPORTE3: string = null;
        let V_REPORTE4: string = null;
        let V_REPORTE5: string = null;
        let V_REPORTE6: string = null;
        let V_REPORTE7: string = null;
        let V_REPORTE8: string = null;
        let V_CARGO: string = null;
        let V_SALIDUNO: string = null;
        let V_SALIDDOS: string = null;
        let V_SALIDTRE: string = null;
        let V_SALIDSOL: string = null;
        let V_RIO: number = null;
        let V_BORRADO1: string = null;
        let V_BORRADO2: string = null;
        let V_BORRADO3: string = null;
        let V_RATING: string = null;
        let V_RUTASOL: string = null;
        let V_SOLICI: string = null;
        let V_SOLICIRECO: string = null;
        let V_RUTARECO: string = null;
        let V_SALIDCER: string = null;
        let V_SALIDREC: string = null;
        let V_CANTREC: number = null;
        P_PERIODO1 = null;
        P_PERIODO2 = null;
        P_PERIODO3 = null;
        V_TIPTER = null;
        V_SUBSECTOR = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualizapdf_whenmouseclick_query1", payload1);
        // get values from result
        V_RUTAGENDEF = result1[0].get("V_RUTAGENDEF");
        // construct payload
        let payload2 = new Map();
        // call REST API
        const result2 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualizapdf_whenmouseclick_query2", payload2);
        // get values from result
        V_RUTAGEN = result2[0].get("V_RUTAGEN");
        // construct payload
        let payload3 = new Map();
        // call REST API
        const result3 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualizapdf_whenmouseclick_query3", payload3);
        // get values from result
        V_GENEPDF = result3[0].get("V_GENEPDF");
        // construct payload
        let payload4 = new Map();
        // call REST API
        const result4 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualizapdf_whenmouseclick_query4", payload4);
        // get values from result
        V_RUTAJAVA = result4[0].get("V_RUTAJAVA");
        // this.oracleFormsBuiltins.host("BORRARPDFS.BAT " + V_RUTAGEN + this.VARIABLE.TERCERO + "_CERO.PDF" + " ", NO_SCREEN);
        // this.oracleFormsBuiltins.host("BORRARPDFS.BAT " + V_RUTAGEN + this.VARIABLE.TERCERO + "_UNO.PDF" + " ", NO_SCREEN);
        // this.oracleFormsBuiltins.host("BORRARPDFS.BAT " + V_RUTAGEN + this.VARIABLE.TERCERO + "_DOS.PDF" + " ", NO_SCREEN);
        // this.oracleFormsBuiltins.host("BORRARPDFS.BAT " + V_RUTAGEN + this.VARIABLE.TERCERO + "_TRES.PDF" + " ", NO_SCREEN);
        // this.oracleFormsBuiltins.host("BORRARPDFS.BAT " + V_RUTAGENDEF + this.VARIABLE.TERCERO + "_UP_" + REPLACE(VARIABLE.V_NOMBRE, " ", "_") + ".PDF" + " ", NO_SCREEN);
        // ANFPAQCRE_PUP_PROCESOVALIDACION();
        // construct payload
        let payload5 = new Map();
        payload5.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result5 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualizapdf_whenmouseclick_query5", payload5);
        // get values from result
        V_TIPTER = result5[0].get("V_TIPTER");
        V_SUBSECTOR = result5[0].get("V_SUBSECTOR");
        if (result5 == null || result5.length == 0) {

            V_TIPTER = null;
            V_SUBSECTOR = null;
        }

        if ((V_TIPTER == "J" || (V_TIPTER == "N" && V_SUBSECTOR == "204"))) {
            // ANFPAQCRE_PUP_PERSONAJURIDICA(this.VARIABLE.TERCERO, this.VARIABLE.TERCERO, "CENTRAL", V_TIPTER, "PDF");
        }
        else {
            // ANFPAQCRE_PUP_PERSONANATURAL(this.VARIABLE.TERCERO, this.VARIABLE.TERCERO, "CENTRAL", "PDF");
        }
        // construct payload
        let payload6 = new Map();
        payload6.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result6 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualizapdf_whenmouseclick_query6", payload6);
        // get values from result
        V_LLAMADA = result6[0].get("V_LLAMADA");
        V_SOLICITUD = result6[0].get("V_SOLICITUD");
        if (result6 == null || result6.length == 0) {

            V_LLAMADA = null;
            V_SOLICITUD = null;
        }

        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "TERCERO", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "SOLICITUD1", "TEXT_PARAMETER", V_SOLICITUD);
        // this.oracleFormsBuiltins.add_parameter(PL_ID, "LLAMADA1", "TEXT_PARAMETER", V_LLAMADA);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "FILE");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESFORMAT", "TEXT_PARAMETER", "PDF");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESNAME", "TEXT_PARAMETER", V_RUTAGEN + this.VARIABLE.TERCERO + "_ANRLLAMA.PDF");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRLLAMA", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        // V_REPORTE2 = " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_ANRLLAMA.PDF";
        // construct payload
        let payload7 = new Map();
        payload7.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result7 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualizapdf_whenmouseclick_query7", payload7);
        // get values from result
        V_RATING = result7[0].get("V_RATING");
        if (result7 == null || result7.length == 0) {

            V_RATING = null;
        }

        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_TERCERO", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_FECHA", "TEXT_PARAMETER", V_RATING);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "FILE");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESFORMAT", "TEXT_PARAMETER", "PDF");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESNAME", "TEXT_PARAMETER", V_RUTAGEN + this.VARIABLE.TERCERO + "_ANTRATOT.PDF");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANTRATOT", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        // V_REPORTE6 = " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_ANTRATOT.PDF";
        // construct payload
        let payload8 = new Map();
        payload8.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result8 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualizapdf_whenmouseclick_query8", payload8);
        // get values from result
        V_CANTIDAD = result8[0].get("V_CANTIDAD");
        if (V_CANTIDAD == 0) {
            V_FECHA = null;
        }
        else {
            V_FECHA = PLSQLBuiltins.sysdate().toString();
        }
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "FECHA", "TEXT_PARAMETER", V_FECHA == null ? null : V_FECHA);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "SOLICITUD", "TEXT_PARAMETER", null);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "TERCERO", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "FILE");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESFORMAT", "TEXT_PARAMETER", "PDF");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESNAME", "TEXT_PARAMETER", V_RUTAGEN + this.VARIABLE.TERCERO + "_ANRVALTER.PDF");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRVALTER", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        // V_REPORTE3 = " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_ANRVALTER.PDF";
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "PU_TER1", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "PU_IMPVI", "TEXT_PARAMETER", "VI");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "PU_IMPCA", "TEXT_PARAMETER", "CA");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "FILE");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESFORMAT", "TEXT_PARAMETER", "PDF");
        // this.oracleFormsBuiltins.add_parameter(PL_ID, "DESNAME", "TEXT_PARAMETER", V_RUTAGEN + this.VARIABLE.TERCERO + "_ANRMOTER.PDF");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRMOTER", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        V_REPORTE4 = " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_ANRMOTER.PDF";
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NIT", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "FILE");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESFORMAT", "TEXT_PARAMETER", "PDF");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESNAME", "TEXT_PARAMETER", V_RUTAGEN + this.VARIABLE.TERCERO + "_ESTACNIT.PDF");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ESTACNIT", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        V_REPORTE5 = " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_ESTACNIT.PDF";
        V_REPORTE7 = " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_FLUJO.PDF";
        V_REPORTE8 = " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_SIMULADOR.PDF";
        // construct payload
        let payload9 = new Map();
        // call REST API
        const result9 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualizapdf_whenmouseclick_query9", payload9);
        // get values from result
        V_CARGO = result9[0].get("V_CARGO");
        if (result9 == null || result9.length == 0) {

            V_CARGO = "XXX";
        }

        if (["COAF", "JERF", "ANFI"].indexOf(V_CARGO) != -1) {
            V_RUTAUNI = V_REPORTE4 + " " + V_REPORTE5 + " " + V_REPORTE7 + " " + V_REPORTE8;
        }
        else {
            V_RUTAUNI = V_REPORTE3 + " " + V_REPORTE2 + " " + V_REPORTE6 + " " + V_REPORTE4 + " " + V_REPORTE5 + " " + V_REPORTE7;
        }
        V_SALIDCER = " -O  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_CERO.PDF";
        V_SALIDUNO = " -O  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_UNO.PDF";
        V_SALIDDOS = " -O  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_DOS.PDF ";
        V_SALIDTRE = " -O  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_TRES.PDF";
        V_SALIDREC = V_RUTAJAVA + " -JAR " + V_GENEPDF + " " + V_SOLICIRECO + " " + V_SALIDCER + "  CONCAT";
        V_SALIDDEU = V_RUTAJAVA + " -JAR " + V_GENEPDF + " " + V_CORRENT + " " + V_SALIDUNO + "  CONCAT";
        V_SALIDDEF = V_RUTAJAVA + " -JAR " + V_GENEPDF + " " + V_RUTAUNI + " " + V_SALIDDOS + "  CONCAT";
        V_SALIDSOL = V_RUTAJAVA + " -JAR " + V_GENEPDF + " " + V_SOLICI + " " + V_SALIDTRE + "  CONCAT";
        // this.oracleFormsBuiltins.host(V_SALIDREC, NO_SCREEN);
        // this.oracleFormsBuiltins.host(V_SALIDDEU, NO_SCREEN);
        // this.oracleFormsBuiltins.host(V_SALIDDEF, NO_SCREEN);
        // this.oracleFormsBuiltins.host(V_SALIDSOL, NO_SCREEN);
        // V_SALIDTRE = " -O  " + V_RUTAGENDEF + this.VARIABLE.TERCERO + "_UP_" + REPLACE(VARIABLE.V_NOMBRE, " ", "_") + ".PDF";
        V_UNIFICAC = V_RUTAJAVA + " -JAR " + V_GENEPDF + " " + " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_UNO.PDF" + " " + " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_DOS.PDF" + " " + " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_TRES.PDF" + " " + V_SALIDTRE + "  CONCAT";
        // this.oracleFormsBuiltins.host(V_UNIFICAC, NO_SCREEN);
        // ANFPAQCRE_LIB$ALERTA("MENSAJE", "POR FAVOR VERIFICAR EL PAQUETE DEL TERCERO..." + this.VARIABLE.TERCERO + " EN LA RUTA  :" + V_RUTAGENDEF, null, null, null, T_RESPUESTA);
        console.log("Exiting ANFPAQCRE_variable_actualizapdf_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  --PY 6663
    //  T_RESPUESTA   NUMBER;
    //  V_SOLICITUD   VARCHAR2(10);
    //   V_LLAMADA     NUMBER;  
    //   V_FECHA       VARCHAR2(10);
    //   V_CANTIDAD    NUMBER;
    //   V_CANTI       NUMBER;
    //  --PY 6663
    // ------------------------------------------------
    // -- CURSOR DE CORRENDATARIOS
    // ------------------------------------------------
    // CURSOR CORRENDATARIOS IS 
    //  SELECT  DISTINCT OTERSOL_NITTER NITTER
    //     FROM CRTOTERSOL
    //   WHERE (OTERSOL_OFCSOL ,OTERSOL_CODSOL,OTERSOL_CODUNI) IN  (SELECT SOLICR_OFCSOL,SOLICR_CODSOL,SOLICR_CODUNI --ARQUITECTURA
    //                                                 FROM CRTSOLICR
    //                                                WHERE SOLICR_NITTER=:TERCERO
    //                                                 AND SOLICR_ESTSOL ='EC'
    //                                                 AND SOLICR_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //                                                           FROM CTTUNICO
    //                                                           WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD")) --ARQUITECTURA
    //                                                 )
    //  AND OTERSOL_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //             FROM CTTUNICO
    //             WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD")) --ARQUITECTURA
    // AND OTERSOL_TIPVIN='13';
    // ------------------------------------------------
    // -- CURSOR DE SOLICITUDES
    // ------------------------------------------------
    // CURSOR SOLICITUDES IS 
    //  SELECT SOLICR_OFCSOL OFCSOL,SOLICR_CODSOL CODSOL
    //     FROM CRTSOLICR
    //    WHERE SOLICR_NITTER=:TERCERO
    //      AND SOLICR_ESTSOL ='EC'
    //      AND SOLICR_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //                FROM CTTUNICO
    //               WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD")); --ARQUITECTURA;
    // ------------------------------------------------
    // 
    // ------------------------------------------------
    // -- CURSOR DE CORRENDATARIOS PDFS   --PDF 9078
    // ------------------------------------------------
    // CURSOR CORRENDATARIOSPDF IS 
    //  SELECT DISTINCT OTERSOL_NITTER NITTER,OTERSOL_TIPVIN
    //     FROM CRTOTERSOL
    //    WHERE (OTERSOL_OFCSOL,OTERSOL_CODSOL,OTERSOL_CODUNI) IN (SELECT SOLICR_OFCSOL,SOLICR_CODSOL,SOLICR_CODUNI--ARQUITECTURA
    //                                                 FROM CRTSOLICR
    //                                                WHERE SOLICR_NITTER = :TERCERO
    //                                                  AND SOLICR_ESTSOL = 'EC'
    //                                                  AND SOLICR_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //                                                           FROM CTTUNICO
    //                                                           WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD")) --ARQUITECTURA
    //                                                  )
    //      AND OTERSOL_TIPVIN IN ('13','05')
    //      AND OTERSOL_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //                 FROM CTTUNICO
    //                  WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD")) --ARQUITECTURA
    //      ORDER BY OTERSOL_TIPVIN DESC;
    // ------------------------------------------------    --PDF 9078  
    // 
    // 
    // 
    // -- VARIABLES
    // ------------------------------------------------
    //  COMANDO VARCHAR2(255);
    //  PL_ID PARAMLIST;
    //  CONT_REG NUMBER(20);
    //  V_TIPTER TER.TERPER%TYPE;
    //  V_SUBSECTOR ENT.ENTSSC%TYPE;
    //  P_PERIODO1 VARCHAR2(4);
    //  P_PERIODO2 VARCHAR2(4);
    //  P_PERIODO3 VARCHAR2(4);
    //  V_PERIODO VARCHAR2(4);
    //  V_PERTER1 VARCHAR2(4);
    //  
    //   --PDF 9078
    //   V_RUTAGEN   VARCHAR2(500);
    //  V_RUTAJAVA   VARCHAR2(500);
    //  V_GENEPDF    VARCHAR2(500);
    //  V_RUTAGENDEF VARCHAR2(500);
    //  
    //  V_RUTAUNI  VARCHAR2(5000); 
    //  V_SALIDDEF VARCHAR2(5000);
    //  V_UNIFICAC VARCHAR2(5000);
    //  V_SALIDDEU VARCHAR2(5000);
    //  
    //  V_REPORTE1 VARCHAR2(500);
    //  V_REPORTE2 VARCHAR2(500);
    //  V_REPORTE3 VARCHAR2(500);
    //  V_REPORTE4 VARCHAR2(500);
    //  V_REPORTE5 VARCHAR2(500);
    //  V_REPORTE6 VARCHAR2(500);
    //  V_REPORTE7 VARCHAR2(500);
    //  
    //  V_REPORTE8 VARCHAR2(500);
    //  V_CARGO    VARCHAR2(5);
    //  
    //  V_SALIDUNO VARCHAR2(1000);
    //  V_SALIDDOS VARCHAR2(1000);
    //  V_SALIDTRE VARCHAR2(1000);
    //  V_CORRENT  VARCHAR2(1000);
    //  
    //  
    //  V_RIO       NUMBER;
    //  V_BORRADO1  VARCHAR2(5000);
    //  V_BORRADO2  VARCHAR2(5000);
    //  V_BORRADO3  VARCHAR2(5000);
    //  V_RUTAUNO   VARCHAR2(5000);
    //  
    //  V_RATING    VARCHAR2(10);
    //   
    //  --PDF 9078
    //  
    // ------------------------------------------------
    // -- PROCESO PRINCIPAL
    // ------------------------------------------------
    // BEGIN  
    //  
    //  
    //    --PDF 9078
    //   
    // BEGIN
    //  SELECT REPLACE(PARAME_VALOR,'"',NULL)
    //   INTO V_RUTAGENDEF
    //   FROM SETPARAMETRO WHERE PARAME_PROCES = 'SIGLEASE' 
    //    AND PARAME_CODIGO= 'DIRPDF';
    // END;
    // 
    // BEGIN
    //  SELECT REPLACE(PARAME_VALOR,'"',NULL)
    //   INTO V_RUTAGEN
    //   FROM SETPARAMETRO WHERE PARAME_PROCES = 'SIGLEASE' 
    //    AND PARAME_CODIGO= 'DIRTEMPPDF';
    // END;
    // 
    // 
    // BEGIN
    //  SELECT PARAME_VALOR
    //   INTO V_GENEPDF
    //   FROM SETPARAMETRO WHERE PARAME_PROCES = 'SIGLEASE' 
    //    AND PARAME_CODIGO= 'DIRSOFPDF';
    // END;
    // 
    // BEGIN
    //  SELECT PARAME_VALOR
    //   INTO V_RUTAJAVA
    //   FROM SETPARAMETRO WHERE PARAME_PROCES = 'SIGLEASE' 
    //    AND PARAME_CODIGO= 'DIRJAVA';
    // END;
    //   
    //    --BORRADO DE ARHIVOS 
    //    
    //   FOR CPDF IN CORRENDATARIOSPDF LOOP 
    //    HOST('BORRARPDFS.BAT "'||V_RUTAGEN||:VARIABLE.TERCERO||'_'||CPDF.NITTER||'_UNOJ.PDF'||'" ',NO_SCREEN);
    //   END LOOP;     
    //       
    //    
    //   
    //  HOST('BORRARPDFS.BAT "'||V_RUTAGEN||:VARIABLE.TERCERO||'_UNOJ.PDF'||'" ',NO_SCREEN);
    //  HOST('BORRARPDFS.BAT "'||V_RUTAGEN||:VARIABLE.TERCERO||'_DOSJ.PDF'||'" ',NO_SCREEN);
    //  HOST('BORRARPDFS.BAT "'||V_RUTAGENDEF||:VARIABLE.TERCERO||'_UJ_'||REPLACE(:VARIABLE.V_NOMBRE,' ','_') ||'.PDF'||'" ',NO_SCREEN);
    //   
    //   
    //    --PDF 9078
    //  
    //  
    // -----------------------------------------------
    // -- PROCESO VALIDACION
    // ------------------------------------------------
    //  PUP_PROCESOVALIDACION; 
    // ------------------------------------------------ 
    //  P_PERIODO1:=NULL;
    //  P_PERIODO2:=NULL;
    //  P_PERIODO3:=NULL;
    //  V_TIPTER:=NULL;
    //  V_SUBSECTOR:=NULL;
    //  BEGIN
    //     SELECT TERPER,ENTSSC
    //       INTO V_TIPTER,V_SUBSECTOR
    //        FROM OPS$SEGUI.TER,
    //             OPS$SEGUI.ENT
    //       WHERE TERCOD=ENTCOD
    //         AND TERCOD=:TERCERO
    //         ;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      V_TIPTER:=NULL;
    //      V_SUBSECTOR:=NULL;
    //   END;   
    //  IF V_TIPTER ='J'  OR (V_TIPTER ='N' AND V_SUBSECTOR ='204') THEN
    // 
    //     PUP_PERSONAJURIDICA_JUNTA(:TERCERO,:TERCERO,:CENTRAL,V_TIPTER,'PDF');
    //  ELSE 
    //   PUP_PERSONANATURAL_JUNTA(:TERCERO,:TERCERO,:CENTRAL,'PDF');
    //   
    //  END IF;
    //  --------------------------------------------------
    //  -- REALIZA LA INFORMACIÓN DE LOS CORRENDATARIOS   
    //  --------------------------------------------------
    //  FOR COR IN CORRENDATARIOS LOOP
    //   V_TIPTER:=NULL;
    //     V_SUBSECTOR:=NULL;
    //     BEGIN
    //     SELECT TERPER,ENTSSC
    //       INTO V_TIPTER,V_SUBSECTOR
    //        FROM OPS$SEGUI.TER,
    //             OPS$SEGUI.ENT
    //       WHERE TERCOD=ENTCOD
    //         AND TERCOD=COR.NITTER
    //         ;
    //      EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      V_TIPTER:=NULL;
    //      V_SUBSECTOR:=NULL;
    //   END;   
    //  IF V_TIPTER ='J'  OR (V_TIPTER ='N' AND V_SUBSECTOR ='204') THEN
    //     PUP_PERSONAJURIDICA_JUNTA(COR.NITTER,:TERCERO,:CENTRAL,V_TIPTER,'PDF');
    //  ELSE 
    //   PUP_PERSONANATURAL_JUNTA(COR.NITTER,:TERCERO,:CENTRAL,'PDF');
    //  END IF;
    //  END LOOP;
    //  
    //        
    //   --UNIFACION PDF
    //   
    //   
    //     --TAPA DE JUNTA    
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');    
    //     ADD_PARAMETER(PL_ID,'P_TERCERO',"TEXT_PARAMETER", :VARIABLE.TERCERO);
    //     ADD_PARAMETER(PL_ID,'P_TERCERO2',"TEXT_PARAMETER",:VARIABLE.TERCERO);    
    //     ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'FILE');  
    //   ADD_PARAMETER(PL_ID,'DESFORMAT',"TEXT_PARAMETER",'PDF');   
    //   ADD_PARAMETER(PL_ID,'DESNAME',"TEXT_PARAMETER",V_RUTAGEN|| :VARIABLE.TERCERO||'_ANRTAPJU.PDF');   
    //     RUN_PRODUCT(REPORTS,'ANRTAPJU',SYNCHRONOUS,BATCH,FILESYSTEM,PL_ID,NULL); 
    //     
    //     V_REPORTE1 :=  ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_ANRTAPJU.PDF';
    //     V_REPORTE7 :=  ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_FLUJO.PDF'; 
    //        
    //     --TAPA DE JUNTA
    //   
    //     V_RUTAUNI :=  V_REPORTE1;    
    //       
    //    
    //     FOR CPDF IN CORRENDATARIOSPDF LOOP     
    //      V_RUTAUNO := ' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_'||CPDF.NITTER||'_UNOJ.PDF';     
    //      V_CORRENT := V_RUTAUNO ||' '|| V_CORRENT;    
    //     END LOOP;  
    //     
    //     
    //     V_SALIDUNO :=  ' -O  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_UNOJ.PDF'; 
    //     V_SALIDDEU := V_RUTAJAVA||' -JAR ' ||V_GENEPDF ||' '||V_CORRENT ||' '|| V_SALIDUNO  ||'  CONCAT';
    //     
    //    
    //    --UNIFACION PDF
    //     
    //     HOST(V_SALIDDEU,NO_SCREEN); 
    //     
    //  
    //    V_SALIDTRE :=  ' -O  '|| V_RUTAGENDEF ||:VARIABLE.TERCERO||'_UJ_'||REPLACE(:VARIABLE.V_NOMBRE,' ','_')||'.PDF';
    //     
    //     V_UNIFICAC := V_RUTAJAVA||' -JAR ' ||V_GENEPDF ||' '||V_REPORTE1||' '||' -F  '|| V_RUTAGEN ||:VARIABLE.TERCERO||'_UNOJ.PDF'||' '|| V_REPORTE7 ||' '|| V_SALIDTRE ||'  CONCAT';
    //     
    //     HOST(V_UNIFICAC,NO_SCREEN); 
    //     
    //     
    //     LIB$ALERTA( 'MENSAJE' , 'POR FAVOR VERIFICAR EL PAQUETE DEL TERCERO...'||:VARIABLE.TERCERO ||' EN LA RUTA  :'||V_RUTAGENDEF,NULL,NULL,NULL,T_RESPUESTA);   
    //   
    //     
    //  
    //  
    // END;
    //#endregion
    async ANFPAQCRE_variable_archivopdf_whenMouseClick() {
        console.log("Entering ANFPAQCRE_variable_archivopdf_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_SOLICITUD: string = null;
        let V_LLAMADA: number = null;
        let V_FECHA: string = null;
        let V_CANTIDAD: number = null;
        let V_CANTI: number = null;
        let COMANDO: string = null;
        let PL_ID: number = null;
        let CONT_REG: number = null;
        let V_TIPTER: null = null;
        let V_SUBSECTOR: null = null;
        let P_PERIODO1: string = null;
        let P_PERIODO2: string = null;
        let P_PERIODO3: string = null;
        let V_PERIODO: string = null;
        let V_PERTER1: string = null;
        let V_RUTAGEN: string = null;
        let V_RUTAJAVA: string = null;
        let V_GENEPDF: string = null;
        let V_RUTAGENDEF: string = null;
        let V_RUTAUNI: string = null;
        let V_SALIDDEF: string = null;
        let V_UNIFICAC: string = null;
        let V_SALIDDEU: string = null;
        let V_REPORTE1: string = null;
        let V_REPORTE2: string = null;
        let V_REPORTE3: string = null;
        let V_REPORTE4: string = null;
        let V_REPORTE5: string = null;
        let V_REPORTE6: string = null;
        let V_REPORTE7: string = null;
        let V_REPORTE8: string = null;
        let V_CARGO: string = null;
        let V_SALIDUNO: string = null;
        let V_SALIDDOS: string = null;
        let V_SALIDTRE: string = null;
        let V_CORRENT: string = null;
        let V_RIO: number = null;
        let V_BORRADO1: string = null;
        let V_BORRADO2: string = null;
        let V_BORRADO3: string = null;
        let V_RUTAUNO: string = null;
        let V_RATING: string = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_archivopdf_whenmouseclick_query1", payload1);
        // get values from result
        V_RUTAGENDEF = result1[0].get("V_RUTAGENDEF");
        // construct payload
        let payload2 = new Map();
        // call REST API
        const result2 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_archivopdf_whenmouseclick_query2", payload2);
        // get values from result
        V_RUTAGEN = result2[0].get("V_RUTAGEN");
        // construct payload
        let payload3 = new Map();
        // call REST API
        const result3 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_archivopdf_whenmouseclick_query3", payload3);
        // get values from result
        V_GENEPDF = result3[0].get("V_GENEPDF");
        // construct payload
        let payload4 = new Map();
        // call REST API
        const result4 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_archivopdf_whenmouseclick_query4", payload4);
        // get values from result
        V_RUTAJAVA = result4[0].get("V_RUTAJAVA");
        // this.oracleFormsBuiltins.host("BORRARPDFS.BAT " + V_RUTAGEN + this.VARIABLE.TERCERO + "_UNOJ.PDF" + " ", NO_SCREEN);
        // this.oracleFormsBuiltins.host("BORRARPDFS.BAT " + V_RUTAGEN + this.VARIABLE.TERCERO + "_DOSJ.PDF" + " ", NO_SCREEN);
        // this.oracleFormsBuiltins.host("BORRARPDFS.BAT " + V_RUTAGENDEF + this.VARIABLE.TERCERO + "_UJ_" + REPLACE(VARIABLE.V_NOMBRE, " ", "_") + ".PDF" + " ", NO_SCREEN);
        // ANFPAQCRE_PUP_PROCESOVALIDACION();
        P_PERIODO1 = null;
        P_PERIODO2 = null;
        P_PERIODO3 = null;
        V_TIPTER = null;
        V_SUBSECTOR = null;
        // construct payload
        let payload5 = new Map();
        payload5.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result5 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_archivopdf_whenmouseclick_query5", payload5);
        // get values from result
        V_TIPTER = result5[0].get("V_TIPTER");
        V_SUBSECTOR = result5[0].get("V_SUBSECTOR");
        if (result5 == null || result5.length == 0) {

            V_TIPTER = null;
            V_SUBSECTOR = null;
        }

        if ((V_TIPTER == "J" || (V_TIPTER == "N" && V_SUBSECTOR == "204"))) {
            // ANFPAQCRE_PUP_PERSONAJURIDICA_JUNTA(this.VARIABLE.TERCERO, this.VARIABLE.TERCERO, CENTRAL, V_TIPTER, "PDF");
        }
        else {
            // ANFPAQCRE_PUP_PERSONANATURAL_JUNTA(this.VARIABLE.TERCERO, this.VARIABLE.TERCERO, CENTRAL, "PDF");
        }
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_TERCERO", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_TERCERO2", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "FILE");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESFORMAT", "TEXT_PARAMETER", "PDF");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESNAME", "TEXT_PARAMETER", V_RUTAGEN + this.VARIABLE.TERCERO + "_ANRTAPJU.PDF");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRTAPJU", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        V_REPORTE1 = " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_ANRTAPJU.PDF";
        V_REPORTE7 = " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_FLUJO.PDF";
        V_RUTAUNI = V_REPORTE1;
        V_SALIDUNO = " -O  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_UNOJ.PDF";
        V_SALIDDEU = V_RUTAJAVA + " -JAR " + V_GENEPDF + " " + V_CORRENT + " " + V_SALIDUNO + "  CONCAT";
        // this.oracleFormsBuiltins.host(V_SALIDDEU, NO_SCREEN);
        // V_SALIDTRE = " -O  " + V_RUTAGENDEF + this.VARIABLE.TERCERO + "_UJ_" + REPLACE(VARIABLE.V_NOMBRE, " ", "_") + ".PDF";
        V_UNIFICAC = V_RUTAJAVA + " -JAR " + V_GENEPDF + " " + V_REPORTE1 + " " + " -F  " + V_RUTAGEN + this.VARIABLE.TERCERO + "_UNOJ.PDF" + " " + V_REPORTE7 + " " + V_SALIDTRE + "  CONCAT";
        // this.oracleFormsBuiltins.host(V_UNIFICAC, NO_SCREEN);
        // ANFPAQCRE_LIB$ALERTA("MENSAJE", "POR FAVOR VERIFICAR EL PAQUETE DEL TERCERO..." + this.VARIABLE.TERCERO + " EN LA RUTA  :" + V_RUTAGENDEF, null, null, null, T_RESPUESTA);
        console.log("Exiting ANFPAQCRE_variable_archivopdf_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //     INTO :V_NOMBRE
    //     FROM TER
    //     WHERE TERCOD=:TERCERO;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE.....',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;   
    // END;
    //#endregion
    async ANFPAQCRE_variable_central_whenValidateItem() {
        console.log("Entering ANFPAQCRE_variable_central_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result1 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_central_whenvalidateitem_query1", payload1);
        // get values from result
        // V_NOMBRE = result1[0].get("V_NOMBRE");
        if (result1 == null || result1.length == 0) {

            // ANFPAQCRE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE.....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFPAQCRE_variable_central_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  --PY 6663
    //  T_RESPUESTA   NUMBER;
    //  V_SOLICITUD   VARCHAR2(10);
    //   V_LLAMADA     NUMBER;  
    //   V_FECHA       DATE;
    //   V_CANTIDAD    NUMBER;
    //   V_CANTI       NUMBER;
    //  --PY 6663
    //  
    //  
    //  V_RIO         NUMBER;
    // ------------------------------------------------
    // -- CURSOR DE CORRENDATARIOS
    // ------------------------------------------------
    // CURSOR CORRENDATARIOS IS 
    //  SELECT  DISTINCT OTERSOL_NITTER NITTER
    //     FROM CRTOTERSOL
    //   WHERE (OTERSOL_OFCSOL ,OTERSOL_CODSOL,OTERSOL_CODUNI) IN  (SELECT SOLICR_OFCSOL,SOLICR_CODSOL,SOLICR_CODUNI --ARQUITECTURA
    //                                                 FROM CRTSOLICR
    //                                                WHERE SOLICR_NITTER=:TERCERO
    //                                                 AND SOLICR_ESTSOL ='EC'
    //                                                 AND SOLICR_CODUNI = :this.PARAMETER.get("P_UNIDAD")) --ARQUITECTURA
    //  AND OTERSOL_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //             FROM CTTUNICO
    //               WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD")) --ARQUITECTURA
    // AND OTERSOL_TIPVIN='13';
    // ------------------------------------------------
    // -- CURSOR DE SOLICITUDES
    // ------------------------------------------------
    // CURSOR SOLICITUDES IS 
    //  SELECT SOLICR_OFCSOL OFCSOL,SOLICR_CODSOL CODSOL
    //     FROM CRTSOLICR
    //    WHERE SOLICR_NITTER=:TERCERO
    //      AND SOLICR_ESTSOL ='EC'
    //      AND SOLICR_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //                FROM CTTUNICO
    //                 WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD")) --ARQUITECTURA
    //      ;
    // ------------------------------------------------
    // -- VARIABLES
    // ------------------------------------------------
    //  COMANDO VARCHAR2(255);
    //  PL_ID PARAMLIST;
    //  CONT_REG NUMBER(20);
    //  V_TIPTER TER.TERPER%TYPE;
    //  V_SUBSECTOR ENT.ENTSSC%TYPE;
    //  P_PERIODO1 VARCHAR2(4);
    //  P_PERIODO2 VARCHAR2(4);
    //  P_PERIODO3 VARCHAR2(4);
    //  V_PERIODO VARCHAR2(4);
    //  V_PERTER1 VARCHAR2(4);
    // ------------------------------------------------
    // -- PROCESO PRINCIPAL
    // ------------------------------------------------
    // BEGIN  
    // -----------------------------------------------
    // -- PROCESO VALIDACION
    // ------------------------------------------------
    //  PUP_PROCESOVALIDACION; 
    // ------------------------------------------------ 
    //  P_PERIODO1:=NULL;
    //  P_PERIODO2:=NULL;
    //  P_PERIODO3:=NULL;
    //  V_TIPTER:=NULL;
    //  V_SUBSECTOR:=NULL;
    //  BEGIN
    //     SELECT TERPER,ENTSSC
    //       INTO V_TIPTER,V_SUBSECTOR
    //        FROM OPS$SEGUI.TER,
    //             OPS$SEGUI.ENT
    //       WHERE TERCOD=ENTCOD
    //         AND TERCOD=:TERCERO
    //         ;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      V_TIPTER:=NULL;
    //      V_SUBSECTOR:=NULL;
    //   END;   
    //  
    //   --TAPA DE JUNTA    
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //     ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'PRINTER');
    //     ADD_PARAMETER(PL_ID,'P_TERCERO',"TEXT_PARAMETER", :VARIABLE.TERCERO);
    //     ADD_PARAMETER(PL_ID,'P_TERCERO2',"TEXT_PARAMETER",:VARIABLE.TERCERO);    
    //     RUN_PRODUCT(REPORTS,'ANRTAPJU',SYNCHRONOUS,BATCH,FILESYSTEM,PL_ID,NULL);    
    //     --TAPA DE JUNTA
    //  
    //  
    //  IF V_TIPTER ='J'  OR (V_TIPTER ='N' AND V_SUBSECTOR ='204') THEN
    // 
    //     PUP_PERSONAJURIDICA_JUNTA(:TERCERO,:TERCERO,:CENTRAL,V_TIPTER,'PAT');
    //  ELSE 
    //   PUP_PERSONANATURAL_JUNTA(:TERCERO,:TERCERO,:CENTRAL,'PAT');
    //   
    //  END IF;
    //  --------------------------------------------------
    //  -- REALIZA LA INFORMACIÓN DE LOS CORRENDATARIOS   
    //  --------------------------------------------------
    //  FOR COR IN CORRENDATARIOS LOOP
    //   V_TIPTER:=NULL;
    //     V_SUBSECTOR:=NULL;
    //     BEGIN
    //     SELECT TERPER,ENTSSC
    //       INTO V_TIPTER,V_SUBSECTOR
    //        FROM OPS$SEGUI.TER,
    //             OPS$SEGUI.ENT
    //       WHERE TERCOD=ENTCOD
    //         AND TERCOD=COR.NITTER
    //         ;
    //      EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      V_TIPTER:=NULL;
    //      V_SUBSECTOR:=NULL;
    //   END;   
    //  IF V_TIPTER ='J'  OR (V_TIPTER ='N' AND V_SUBSECTOR ='204') THEN
    //     PUP_PERSONAJURIDICA_JUNTA(COR.NITTER,:TERCERO,:CENTRAL,V_TIPTER,'PAT');
    //  ELSE 
    //   PUP_PERSONANATURAL_JUNTA(COR.NITTER,:TERCERO,:CENTRAL,'PAT');
    //  END IF;
    //  END LOOP;
    //      
    //    LIB$ALERTA( 'MENSAJE' , 'POR FAVOR RECOGER EL PAQUETE DEL TERCERO...'||:VARIABLE.TERCERO,NULL,NULL,NULL,T_RESPUESTA);   
    //   
    //  
    //  
    // END;
    //#endregion
    async ANFPAQCRE_variable_archivo_whenMouseClick() {
        console.log("Entering ANFPAQCRE_variable_archivo_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_SOLICITUD: string = null;
        let V_LLAMADA: number = null;
        let V_FECHA: Date = null;
        let V_CANTIDAD: number = null;
        let V_CANTI: number = null;
        let V_RIO: number = null;
        let COMANDO: string = null;
        let PL_ID: number = null;
        let CONT_REG: number = null;
        let V_TIPTER: null = null;
        let V_SUBSECTOR: null = null;
        let P_PERIODO1: string = null;
        let P_PERIODO2: string = null;
        let P_PERIODO3: string = null;
        let V_PERIODO: string = null;
        let V_PERTER1: string = null;
        // ANFPAQCRE_PUP_PROCESOVALIDACION();
        P_PERIODO1 = null;
        P_PERIODO2 = null;
        P_PERIODO3 = null;
        V_TIPTER = null;
        V_SUBSECTOR = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result1 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_archivo_whenmouseclick_query1", payload1);
        // get values from result
        V_TIPTER = result1[0].get("V_TIPTER");
        V_SUBSECTOR = result1[0].get("V_SUBSECTOR");
        if (result1 == null || result1.length == 0) {

            V_TIPTER = null;
            V_SUBSECTOR = null;
        }

        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "PRINTER");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_TERCERO", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_TERCERO2", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRTAPJU", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        if ((V_TIPTER == "J" || (V_TIPTER == "N" && V_SUBSECTOR == "204"))) {
            // ANFPAQCRE_PUP_PERSONAJURIDICA_JUNTA(this.VARIABLE.TERCERO, this.VARIABLE.TERCERO, CENTRAL, V_TIPTER, "PAT");
        }
        else {
            // ANFPAQCRE_PUP_PERSONANATURAL_JUNTA(this.VARIABLE.TERCERO, this.VARIABLE.TERCERO, CENTRAL, "PAT");
        }
        // ANFPAQCRE_LIB$ALERTA("MENSAJE", "POR FAVOR RECOGER EL PAQUETE DEL TERCERO..." + this.VARIABLE.TERCERO, null, null, null, T_RESPUESTA);
        console.log("Exiting ANFPAQCRE_variable_archivo_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //     INTO :V_NOMBRE
    //     FROM TER
    //     WHERE TERCOD=:TERCERO;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE.....',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;   
    // END;
    //#endregion
    async ANFPAQCRE_variable_tercero_whenValidateItem() {
        console.log("Entering ANFPAQCRE_variable_tercero_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result1 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_tercero_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.V_NOMBRE = result1[0].get("V_NOMBRE");
        if (result1 == null || result1.length == 0) {

            // ANFPAQCRE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE.....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFPAQCRE_variable_tercero_whenValidateItem");
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
    async ANFPAQCRE_variable_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFPAQCRE_variable_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFPAQCRE_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFPAQCRE_variable_btnSiguiente_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  --PY 6663
    //  T_RESPUESTA   NUMBER;
    //   V_SOLICITUD   VARCHAR2(10);
    //   V_LLAMADA     NUMBER;  
    //   V_FECHA       DATE;
    //   V_CANTIDAD    NUMBER;
    //   V_CANTI       NUMBER;
    //  --PY 6663
    //  
    //  V_RIO         NUMBER;
    //  
    // ------------------------------------------------
    // -- CURSOR DE CORRENDATARIOS
    // ------------------------------------------------
    // CURSOR CORRENDATARIOS IS 
    //  SELECT DISTINCT OTERSOL_NITTER NITTER
    //     FROM CRTOTERSOL
    //    WHERE (OTERSOL_OFCSOL ,OTERSOL_CODSOL,OTERSOL_CODUNI) IN (SELECT SOLICR_OFCSOL,SOLICR_CODSOL,SOLICR_CODUNI --ARQUITECTURA
    //                                                 FROM CRTSOLICR
    //                                                WHERE SOLICR_NITTER = :TERCERO
    //                                                  AND SOLICR_ESTSOL = 'EC'
    //                                                  AND SOLICR_CODUNI  IN ( SELECT CTTUNICO_UNDNEG
    //                                                           FROM CTTUNICO
    //                                                           WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD"))
    //                                                  
    //                                                  
    //                                                  ) --ARQUITECTURA
    //      
    //       AND OTERSOL_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //                 FROM CTTUNICO
    //                 WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD")) --ARQUITECTURA
    //      AND OTERSOL_TIPVIN='13';
    // ------------------------------------------------
    // -- CURSOR DE SOLICITUDES
    // ------------------------------------------------
    // CURSOR SOLICITUDES IS 
    //  SELECT SOLICR_OFCSOL OFCSOL,SOLICR_CODSOL CODSOL,SOLICR_CODUNI UNIDAD
    //     FROM CRTSOLICR
    //    WHERE SOLICR_NITTER=:TERCERO
    //      AND SOLICR_ESTSOL ='EC'
    //      AND SOLICR_CODUNI IN ( SELECT CTTUNICO_UNDNEG
    //               FROM CTTUNICO
    //               WHERE CTTUNICO_UNDCON = :this.PARAMETER.get("P_UNIDAD")) --ARQUITECTURA
    //      ;
    // ------------------------------------------------
    // -- VARIABLES
    // ------------------------------------------------
    //  COMANDO VARCHAR2(255);
    //  PL_ID PARAMLIST;
    //  CONT_REG NUMBER(20);
    //  V_TIPTER TER.TERPER%TYPE;
    //  V_SUBSECTOR ENT.ENTSSC%TYPE;
    //  P_PERIODO1 VARCHAR2(4);
    //  P_PERIODO2 VARCHAR2(4);
    //  P_PERIODO3 VARCHAR2(4);
    //  V_PERIODO VARCHAR2(4);
    //  V_PERTER1 VARCHAR2(4);
    // ------------------------------------------------
    // -- PROCESO PRINCIPAL
    // ------------------------------------------------
    // BEGIN  
    //   -----------------------------------------------
    //   -- PROCESO VALIDACION
    //   ------------------------------------------------
    //    PUP_PROCESOVALIDACION; 
    //   ------------------------------------------------ 
    //   P_PERIODO1:=NULL;
    //   P_PERIODO2:=NULL;
    //   P_PERIODO3:=NULL;
    //   V_TIPTER:=NULL;
    //   V_SUBSECTOR:=NULL;
    //   BEGIN
    //     SELECT TERPER,ENTSSC
    //       INTO V_TIPTER,V_SUBSECTOR
    //       FROM OPS$SEGUI.TER,
    //            OPS$SEGUI.ENT
    //      WHERE TERCOD=ENTCOD
    //        AND TERCOD=:TERCERO;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    V_TIPTER:=NULL;
    //    V_SUBSECTOR:=NULL;
    //   END;   
    //  IF V_TIPTER ='J'  OR (V_TIPTER ='N' AND V_SUBSECTOR ='204') THEN
    //     PUP_PERSONAJURIDICA(:TERCERO,:TERCERO,:CENTRAL,V_TIPTER,'PAT');
    //  ELSE 
    //    PUP_PERSONANATURAL(:TERCERO,:TERCERO,:CENTRAL,'PAT');
    //  END IF;
    //  --------------------------------------------------
    //  -- REALIZA LA INFORMACIÓN DE LOS CORRENDATARIOS   
    //  --------------------------------------------------
    //  FOR COR IN CORRENDATARIOS LOOP
    //   V_TIPTER:=NULL;
    //     V_SUBSECTOR:=NULL;
    //     BEGIN
    //     SELECT TERPER,ENTSSC
    //       INTO V_TIPTER,V_SUBSECTOR
    //       FROM OPS$SEGUI.TER,
    //            OPS$SEGUI.ENT
    //      WHERE TERCOD=ENTCOD
    //        AND TERCOD=COR.NITTER;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //      V_TIPTER:=NULL;
    //      V_SUBSECTOR:=NULL;
    //     END;   
    //    IF V_TIPTER ='J'  OR (V_TIPTER ='N' AND V_SUBSECTOR ='204') THEN
    //       PUP_PERSONAJURIDICA(COR.NITTER,:TERCERO,:CENTRAL,V_TIPTER,'PAT');
    //    ELSE 
    //     PUP_PERSONANATURAL(COR.NITTER,:TERCERO,:CENTRAL,'PAT');
    //    END IF;
    //  END LOOP;
    //  ---------------------------------------------
    //  -- IMPRIME EL SOPORTE DE LAS SOLICITUDES
    //  -- EN ESTADO EC
    //  ---------------------------------------------
    //   FOR SOL IN SOLICITUDES LOOP
    //    PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //       DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //     ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'PRINTER');
    //     ADD_PARAMETER(PL_ID,'P_OFICINA',"TEXT_PARAMETER",SOL.OFCSOL);
    //     ADD_PARAMETER(PL_ID,'P_SOLICITUD',"TEXT_PARAMETER",SOL.CODSOL); 
    //     ADD_PARAMETER(PL_ID,'P_UNIDAD',"TEXT_PARAMETER",SOL.UNIDAD); 
    //     
    //     RUN_PRODUCT(REPORTS,'CRRSOPCR',SYNCHRONOUS,BATCH,FILESYSTEM,PL_ID,NULL);
    //     --REDISPLAY;
    //   END LOOP;    
    //   
    //   --PY 6663  
    //   
    //   
    //    --FORMATO DE LLAMADA   
    //    
    //    --PY14917. SE SACA LA ÚLTIMA SOLICITUD PARA REPORTAR EN EL FORMATO DE LLAMADA 
    //     BEGIN     
    //       SELECT A.LLAMAD_CONSEC CONSEC,MAX(L.SOLILL_SOLICI)
    //        INTO   V_LLAMADA,V_SOLICITUD
    //      FROM ANTTLLAMAD A , ANTTSOLILL L
    //       WHERE A.LLAMAD_CONSEC = (SELECT MAX(D.LLAMAD_CONSEC) 
    //                                FROM ANTTLLAMAD D
    //                                WHERE D.LLAMAD_TERCER =:VARIABLE.TERCERO
    //                                )
    //         AND A.LLAMAD_CONSEC = L.SOLILL_CONLLA
    //            GROUP BY A.LLAMAD_CONSEC;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN 
    //       V_LLAMADA   := NULL;
    //       V_SOLICITUD := NULL;    
    //     END;
    // 
    //     
    //     
    //      
    //    PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //     ADD_PARAMETER(PL_ID,'TERCERO',"TEXT_PARAMETER",:VARIABLE.TERCERO);
    //     ADD_PARAMETER(PL_ID,'SOLICITUD1',"TEXT_PARAMETER",V_SOLICITUD);
    //     ADD_PARAMETER(PL_ID,'LLAMADA1',"TEXT_PARAMETER",V_LLAMADA);
    //     ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'PRINTER');
    //     RUN_PRODUCT(REPORTS,'ANRLLAMA',SYNCHRONOUS,BATCH,FILESYSTEM,PL_ID,NULL);    
    //     --FORMATO DE LLAMADA
    //   
    //   
    //     --VALIDACION DE LA INFORMACION        
    //     BEGIN     
    //      SELECT COUNT(*)
    //      INTO V_CANTIDAD
    //      FROM COTTVAINF I
    //    WHERE I.TVAINF_CODTER = :VARIABLE.TERCERO
    //    AND TRUNC(I.TVAINF_FREGIS) = TRUNC(SYSDATE);     
    //     END ;  
    //     
    //     IF V_CANTIDAD = 0 THEN
    //       V_FECHA :=   NULL;
    //     ELSE
    //        V_FECHA :=  TO_DATE(SYSDATE,'YYYY-MM-DD');    
    //     END IF;
    //     
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //      
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //     ADD_PARAMETER(PL_ID,'FECHA',"TEXT_PARAMETER",NVL(V_FECHA,NULL));
    //     ADD_PARAMETER(PL_ID,'SOLICITUD',"TEXT_PARAMETER",NULL);
    //     ADD_PARAMETER(PL_ID,'TERCERO',"TEXT_PARAMETER",:VARIABLE.TERCERO);
    //     ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'PRINTER');
    //     RUN_PRODUCT(REPORTS,'ANRVALTER',SYNCHRONOUS,BATCH,FILESYSTEM,PL_ID,NULL);
    //     --VALIDACION DE LA INFORMACION
    //   
    //     --MORAS TERCERO    
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //     ADD_PARAMETER(PL_ID,'PU_TER1',"TEXT_PARAMETER",:VARIABLE.TERCERO);
    //     ADD_PARAMETER(PL_ID,'PU_IMPVI',"TEXT_PARAMETER",'VI');
    //     ADD_PARAMETER(PL_ID,'PU_IMPCA',"TEXT_PARAMETER",'CA');
    //     ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'PRINTER');
    //     RUN_PRODUCT(REPORTS,'ANRMOTER',SYNCHRONOUS,BATCH,FILESYSTEM,PL_ID,NULL);   
    //     --MORAS TERCERO
    //     
    //     
    //     --ESTADO CUENTA  
    //     BEGIN   
    //     SELECT COUNT(*)
    //     INTO V_CANTI
    //     FROM COTVALMO, COL, OPS$SEGUI.TER, OPS$SEGUI.TDC, DEP, FAM
    //    WHERE DOCUME = COLTDOC
    //      AND OFICIN = COLOFI
    //      AND CODIGO = COLCOD
    //      AND COLBEN = TERCOD
    //      AND TERDEP = TDCDEP
    //      AND TERCOD = FAMENT(+)
    //      AND FAMTRL(+) = 'C1'
    //      AND COLBEN = :VARIABLE.TERCERO
    //      AND TERDEP = DEPCOD(+)
    //      AND TERTCI = TDCCOD(+)
    //      AND TDCDEP = DEPCOD
    //      AND ESTADO = '11';
    //     EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTI := 0;    
    //     END;
    //     
    //     IF V_CANTI <> 0 THEN    
    //      PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //      IF NOT ID_NULL(PL_ID) THEN
    //         DESTROY_PARAMETER_LIST(PL_ID);
    //      END IF;
    //      PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //      ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //      ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //      ADD_PARAMETER(PL_ID,'NIT',"TEXT_PARAMETER",:VARIABLE.TERCERO);
    //      ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'PRINTER');
    //      RUN_PRODUCT(REPORTS,'ESTACNIT',SYNCHRONOUS,BATCH,FILESYSTEM,PL_ID,NULL);       
    //      END IF;   
    //     --ESTADO CUENTA
    //     
    //     
    //     
    //     
    //     --RIO
    //      BEGIN   
    //     SELECT MAX(RIO_CODIGO)
    //     INTO V_RIO
    //     FROM CMTRIO
    //    WHERE  RIO_NIT = :VARIABLE.TERCERO
    //      ;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN V_RIO := 0;    
    //     END;
    //     
    //     IF V_RIO <> 0 THEN    
    //      PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //      IF NOT ID_NULL(PL_ID) THEN
    //         DESTROY_PARAMETER_LIST(PL_ID);
    //      END IF;
    //      PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //      ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //      ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //      ADD_PARAMETER(PL_ID,'P_CODRIO',"TEXT_PARAMETER",V_RIO);
    //      ADD_PARAMETER(PL_ID,'P_NIT',"TEXT_PARAMETER",:VARIABLE.TERCERO);
    //      ADD_PARAMETER(PL_ID,'DESTYPE',"TEXT_PARAMETER",'PRINTER');
    //      RUN_PRODUCT(REPORTS,'CORRIO1',SYNCHRONOUS,BATCH,FILESYSTEM,PL_ID,NULL);       
    //      END IF;   
    //     --RIO
    //     
    //    
    //   
    //    LIB$ALERTA( 'MENSAJE' , 'POR FAVOR RECOGER EL PAQUETE DEL TERCERO...'||:VARIABLE.TERCERO,NULL,NULL,NULL,T_RESPUESTA);   
    //    --PY 6663
    //   
    //   
    // END;
    //#endregion
    async ANFPAQCRE_variable_actualiza_whenMouseClick() {
        console.log("Entering ANFPAQCRE_variable_actualiza_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_SOLICITUD: string = null;
        let V_LLAMADA: number = null;
        let V_FECHA: Date = null;
        let V_CANTIDAD: number = null;
        let V_CANTI: number = null;
        let V_RIO: number = null;
        let COMANDO: string = null;
        let PL_ID: number = null;
        let CONT_REG: number = null;
        let V_TIPTER: null = null;
        let V_SUBSECTOR: null = null;
        let P_PERIODO1: string = null;
        let P_PERIODO2: string = null;
        let P_PERIODO3: string = null;
        let V_PERIODO: string = null;
        let V_PERTER1: string = null;
        // ANFPAQCRE_PUP_PROCESOVALIDACION();
        P_PERIODO1 = null;
        P_PERIODO2 = null;
        P_PERIODO3 = null;
        V_TIPTER = null;
        V_SUBSECTOR = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result1 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualiza_whenmouseclick_query1", payload1);
        // get values from result
        V_TIPTER = result1[0].get("V_TIPTER");
        V_SUBSECTOR = result1[0].get("V_SUBSECTOR");
        if (result1 == null || result1.length == 0) {

            V_TIPTER = null;
            V_SUBSECTOR = null;
        }

        if ((V_TIPTER == "J" || (V_TIPTER == "N" && V_SUBSECTOR == "204"))) {
            // ANFPAQCRE_PUP_PERSONAJURIDICA(this.VARIABLE.TERCERO, this.VARIABLE.TERCERO, CENTRAL, V_TIPTER, "PAT");
        }
        else {
            // ANFPAQCRE_PUP_PERSONANATURAL(this.VARIABLE.TERCERO, this.VARIABLE.TERCERO, CENTRAL, "PAT");
        }
        // construct payload
        let payload2 = new Map();
        payload2.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result2 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualiza_whenmouseclick_query2", payload2);
        // get values from result
        V_LLAMADA = result2[0].get("V_LLAMADA");
        V_SOLICITUD = result2[0].get("V_SOLICITUD");
        if (result2 == null || result2.length == 0) {

            V_LLAMADA = null;
            V_SOLICITUD = null;
        }

        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "TERCERO", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "SOLICITUD1", "TEXT_PARAMETER", V_SOLICITUD);
        // this.oracleFormsBuiltins.add_parameter(PL_ID, "LLAMADA1", "TEXT_PARAMETER", V_LLAMADA);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "PRINTER");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRLLAMA", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        // construct payload
        let payload3 = new Map();
        payload3.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result3 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualiza_whenmouseclick_query3", payload3);
        // get values from result
        V_CANTIDAD = result3[0].get("V_CANTIDAD");
        if (V_CANTIDAD == 0) {
            V_FECHA = null;
        }
        else {
            V_FECHA = new Date(PLSQLBuiltins.sysdate());
        }
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        // this.oracleFormsBuiltins.add_parameter(PL_ID, "FECHA", "TEXT_PARAMETER", this.VARIABLE.V_FECHA == null ? null : this.VARIABLE.V_FECHA);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "SOLICITUD", "TEXT_PARAMETER", null);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "TERCERO", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "PRINTER");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRVALTER", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "PU_TER1", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "PU_IMPVI", "TEXT_PARAMETER", "VI");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "PU_IMPCA", "TEXT_PARAMETER", "CA");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "PRINTER");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRMOTER", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        // construct payload
        let payload4 = new Map();
        payload4.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result4 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualiza_whenmouseclick_query4", payload4);
        // get values from result
        V_CANTI = result4[0].get("V_CANTI");
        if (result4 == null || result4.length == 0) {

            V_CANTI = 0;
        }

        if (V_CANTI != 0) {
            PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
            if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
            }
            PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
            this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
            this.oracleFormsBuiltins.add_parameter(PL_ID, "NIT", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
            this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "PRINTER");
            // this.oracleFormsBuiltins.run_product(REPORTS, "ESTACNIT", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        }
        // construct payload
        let payload5 = new Map();
        payload5.set("TERCERO", this.VARIABLE.TERCERO);
        // call REST API
        const result5 = await Rest.post("/anfpaqcre_variable/anfpaqcre_variable_actualiza_whenmouseclick_query5", payload5);
        // get values from result
        V_RIO = result5[0].get("V_RIO");
        if (result5 == null || result5.length == 0) {

            V_RIO = 0;
        }

        if (V_RIO != 0) {
            PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
            if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
                this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
            }
            PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
            this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
            // this.oracleFormsBuiltins.add_parameter(PL_ID, "P_CODRIO", "TEXT_PARAMETER", V_RIO);
            this.oracleFormsBuiltins.add_parameter(PL_ID, "P_NIT", "TEXT_PARAMETER", this.VARIABLE.TERCERO);
            this.oracleFormsBuiltins.add_parameter(PL_ID, "DESTYPE", "TEXT_PARAMETER", "PRINTER");
            // this.oracleFormsBuiltins.run_product(REPORTS, "CORRIO1", SYNCHRONOUS, BATCH, FILESYSTEM, PL_ID, null);
        }
        // ANFPAQCRE_LIB$ALERTA("MENSAJE", "POR FAVOR RECOGER EL PAQUETE DEL TERCERO..." + this.VARIABLE.TERCERO, null, null, null, T_RESPUESTA);
        console.log("Exiting ANFPAQCRE_variable_actualiza_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFPAQCRE_toolbar_whenButtonPressed() {
        console.log("Entering ANFPAQCRE_toolbar_whenButtonPressed");
        console.log("Exiting ANFPAQCRE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFPAQCRE_toolbar_whenMouseLeave() {
        console.log("Entering ANFPAQCRE_toolbar_whenMouseLeave");
        console.log("Exiting ANFPAQCRE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFPAQCRE_toolbar_whenNewFormInstance() {
        console.log("Entering ANFPAQCRE_toolbar_whenNewFormInstance");
        console.log("Exiting ANFPAQCRE_toolbar_whenNewFormInstance");
    }

}

