import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CMFCKCRE business logic
import {
    PENDIENTES,
    COVPIEDRA,
    CRTLCKCAL,
    TOOLBAR,
    CRTLCKCRE,
    BASE
} from "./CMFCKCRE_models";



// class CMFCKCRE
@Component({
    selector: 'app-cmfckcre',
    templateUrl: './cmfckcre.component.html',
})
export class CmfckcreComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map();
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public PENDIENTES: PENDIENTES = new PENDIENTES();
    public COVPIEDRA: COVPIEDRA = new COVPIEDRA();
    public CRTLCKCAL: CRTLCKCAL = new CRTLCKCAL();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public CRTLCKCRE: CRTLCKCRE = new CRTLCKCRE();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async CMFCKCRE_whenMouseDoubleclick() {
        console.log("Entering CMFCKCRE_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting CMFCKCRE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN MENSAJE_ERRORES; END;
    //#endregion
    async CMFCKCRE_onError() {
        console.log("Entering CMFCKCRE_onError");
        // CMFCKCRE_MENSAJE_ERRORES();
        console.log("Exiting CMFCKCRE_onError");
    }

    //#region PLSQL
    // BEGIN MENSAJE_INFORMATIVOS; END;
    //#endregion
    async CMFCKCRE_onMessage() {
        console.log("Entering CMFCKCRE_onMessage");
        // CMFCKCRE_MENSAJE_INFORMATIVOS();
        console.log("Exiting CMFCKCRE_onMessage");
    }

    //#region PLSQL
    // DECLARE
    //     V_CANTIDAD NUMBER;
    //     
    // BEGIN
    // 
    // 
    //  SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD    :=GET_APPLICATION_PROPERTY(CONNECT_STRING); 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //   :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSIF :BASE.BD IN ('FINT','FINT','FINT11G','DAVIT','FINT11G','DAVIT')  THEN
    //   :BASE.BASE_DAT := 'TEST';
    //   ELSE 
    //   :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    // 
    // --------------------------------------------------------------------
    // DECLARE 
    //  V_IMAGEN VARCHAR2(20);
    // BEGIN     
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
    //    READ_IMAGE_FILE(V_IMAGEN,'GIF','BASE.LOGO');
    //  ELSE
    //      READ_IMAGE_FILE('LOGO_LEASFORM.GIF','GIF','BASE.LOGO'); 
    //  END IF;
    //    
    // END;
    // -----------------------------------------------------------------------
    //  
    //  
    //  --PY7593
    //  UPDATE CRTADMANA SET ADMANA_CANTID= 100 WHERE ADMANA_ESTADO ='D' AND ADMANA_CODARE = 'CRE';
    //  COMMIT;
    //  --PY7593
    //   
    //  BEGIN
    //   SELECT COUNT(*) CANTIDAD
    //    INTO V_CANTIDAD
    //    FROM OPS$COLOCA.CRTADMANA A
    //    WHERE TRUNC(A.ADMANA_FECHA) = TRUNC(SYSDATE)
    //    AND   ADMANA_CODARE = 'CRE'
    //    AND   ADMANA_ESTADO = 'A'
    //    ORDER BY A.ADMANA_CONSEC; 
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTIDAD := 0;
    //  END;
    //  
    //   
    //  
    //  
    //  IF V_CANTIDAD = 0 THEN
    //  
    //   UPDATE CRTADMANA 
    //     SET   ADMANA_CONSTE = NULL, 
    //           ADMANA_CONSTN = NULL
    //     WHERE ADMANA_CODARE = 'CRE';     
    //     COMMIT;
    //     
    //     --P_ORDENACONSEC;  
    //     
    //     OPS$COLOCA.PQBD_COL_ENVIOEC.PORDEN_ANALISTAS ('CRE','N');
    //     OPS$COLOCA.PQBD_COL_ENVIOEC.PORDEN_ANALISTAS ('CRE','J');
    //       
    //     
    //    UPDATE OPS$COLOCA.CRTADMANA 
    //     SET  ADMANA_CANTID = 0, 
    //          ADMANA_FECHA = TRUNC(SYSDATE) 
    //     WHERE ADMANA_CODARE = 'CRE';
    //    COMMIT;
    //  
    //  END IF;
    //  
    //  
    //  IF NOT LIB$PBLARLSTARG('CRTLCKCRE.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //         LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CRTLCKCRE.TIPO_REFERENCIA');
    //  END IF;
    //  
    //       
    //  GO_BLOCK('CRTLCKCRE');
    //  :CRTLCKCRE.ASIGNA_ANALISTA := 'N';
    //  GO_ITEM('LCKCRE_CODUNI');--ARQUITECTURA
    //  
    // 
    // END;
    //#endregion
    async CMFCKCRE_whenNewFormInstance() {
        console.log("Entering CMFCKCRE_whenNewFormInstance");
        let V_CANTIDAD: number = null;
        this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", 5);
        this.BASE.FECHA = PLSQLBuiltins.sysdate();
        this.BASE.USUARIO = PLSQLBuiltins.user();
        this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
        this.BASE.BD = this.oracleFormsBuiltins.get_application_property("CONNECT_STRING");
        if (["FIN1", "FIN1"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "PRODUCCION";
        }
        else if (["FINT", "FINT", "FINT11G", "DAVIT", "FINT11G", "DAVIT"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "TEST";
        }
        else {
            this.BASE.BASE_DAT = "DESARROLLO";
        }
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/cmfckcre/cmfckcre_whennewforminstance_query1", payload1);
                // get values from result
                V_IMAGEN = result1[0].get("V_IMAGEN");
                if (result1 == null || result1.length == 0) {

                    V_IMAGEN = "LOGO_LEASFORM.GIF";
                }

                this.oracleFormsBuiltins.read_image_file(V_IMAGEN, "GIF", "BASE.LOGO");
            }
            else {
                this.oracleFormsBuiltins.read_image_file("LOGO_LEASFORM.GIF", "GIF", "BASE.LOGO");
            }
        }

        // construct payload
        let payload2 = new Map();
        // call REST API
        const result2 = await Rest.post("/cmfckcre/cmfckcre_whennewforminstance_query2", payload2);
        // construct payload
        let payload4 = new Map();
        // call REST API
        const result4 = await Rest.post("/cmfckcre/cmfckcre_whennewforminstance_query4", payload4);
        // get values from result
        V_CANTIDAD = result4[0].get("V_CANTIDAD");
        if (result4 == null || result4.length == 0) {

            V_CANTIDAD = 0;
        }

        if (V_CANTIDAD == 0) {
            // construct payload
            let payload5 = new Map();
            // call REST API
            const result5 = await Rest.post("/cmfckcre/cmfckcre_whennewforminstance_query5", payload5);
            // CMFCKCRE_OPS$COLOCA.PQBD_COL_ENVIOEC.PORDEN_ANALISTAS("CRE", "N");
            // CMFCKCRE_OPS$COLOCA.PQBD_COL_ENVIOEC.PORDEN_ANALISTAS("CRE", "J");
            // construct payload
            let payload7 = new Map();
            // call REST API
            const result7 = await Rest.post("/cmfckcre/cmfckcre_whennewforminstance_query7", payload7);
        }
        // if ((!LIB$PBLARLSTARG("CRTLCKCRE.TIPO_REFERENCIA", "LOV_TIPOREFERENCIA"))) {
        //     CMFCKCRE_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA CRTLCKCRE.TIPO_REFERENCIA");
        // }
        this.oracleFormsBuiltins.go_block("CRTLCKCRE");
        this.CRTLCKCRE.ASIGNA_ANALISTA = "N";
        this.oracleFormsBuiltins.go_item("LCKCRE_CODUNI");
        console.log("Exiting CMFCKCRE_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN PANTALLA; END;
    //#endregion
    async CMFCKCRE_preForm() {
        console.log("Entering CMFCKCRE_preForm");
        // CMFCKCRE_PANTALLA();
        console.log("Exiting CMFCKCRE_preForm");
    }

    //#region PLSQL
    // DECLARE
    //  V_CANTCKCR  NUMBER;
    //  V_CANTREDO  NUMBER;
    //  COM_MAIL    VARCHAR2(50);
    //  V_CANTLOC   NUMBER;
    //  V_CANTCOA   NUMBER;
    //  V_CANTSOL   VARCHAR2(20);
    //  V_CANTCKA   VARCHAR2(20);
    //  V_SOLICIT   NUMBER;
    //  V_TERCERO   NUMBER;
    //  
    // BEGIN
    //   
    // 
    //   BEGIN  
    //    SELECT COUNT(*) 
    //     INTO V_CANTCKCR
    //     FROM OPS$COLOCA.CRTLCKCRE R
    //    WHERE --+PY21520. JDG
    //          R.LCKCRE_CODUNI = :CRTLCKCRE.LCKCRE_CODUNI
    //          --+
    //      AND R.LCKCRE_OFICIN  = :CRTLCKCRE.LCKCRE_OFICIN
    //      AND R.LCKCRE_NSOLIC  = :CRTLCKCRE.LCKCRE_NSOLIC
    //      AND LCKCRE_CODARE = 'CRE' ; 
    //  
    //   EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTCKCR := 0;
    //   END;
    //   
    //   
    //   BEGIN  
    //    SELECT COUNT(*) 
    //      INTO V_CANTREDO
    //      FROM OPS$COLOCA.CRTLCKCAL C
    //     WHERE --+PY21520. JDG
    //           C.LCKCAL_CODUNI = :CRTLCKCRE.LCKCRE_CODUNI
    //           --+
    //       AND C.LCKCRE_CALOFI = :CRTLCKCRE.LCKCRE_OFICIN
    //          AND C.LCKCRE_CALNSO = :CRTLCKCRE.LCKCRE_NSOLIC
    //          AND C.LCKCRE_TIPCLI = :CRTLCKCRE.TIPO_REFERENCIA
    //          AND LPAD(C.LCKCRE_TIPPRE,2,'0') = :CRTLCKCRE.TIPO_PERSONA
    //          AND LCKCAL_CODARE = 'CRE';
    //  
    //   EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTREDO := 0;
    //   END;
    //   
    //  
    //   IF V_CANTCKCR = 0 THEN   
    //     P_INSERTCABEZA;
    //   ELSE   
    //     --+PY21520. JDG
    //     --P_UPDATECABEZA(:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC);
    //       P_UPDATECABEZA(:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC, :CRTLCKCRE.LCKCRE_CODUNI);
    //     --+
    //   END IF;
    //   
    //   
    //   
    //   IF V_CANTREDO = 0 THEN   
    //     PU_RESPUDOC(:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.TIPO_REFERENCIA,:CRTLCKCRE.TIPO_PERSONA,:CRTLCKCRE.TIPO_PERSONACOA);
    //   ELSE
    //     --+PY21520. JDG
    //     --PU_UPDADOC (:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.TIPO_REFERENCIA,:CRTLCKCRE.TIPO_PERSONA,:CRTLCKCRE.TIPO_PERSONACOA);
    //     PU_UPDADOC (:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.TIPO_REFERENCIA,:CRTLCKCRE.TIPO_PERSONA,:CRTLCKCRE.TIPO_PERSONACOA,:CRTLCKCRE.LCKCRE_CODUNI);
    //     --+
    //   END IF;
    //    
    //    --+PY21520. JDG
    //    --P_MODESTADOS(:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC);
    //    P_MODESTADOS(:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC, :CRTLCKCRE.LCKCRE_CODUNI);
    //    --+
    // 
    // --MIRAR MEJORAR VALIDACION
    // 
    //   --+PY21520. JDG
    //  /*V_CANTLOC   := CANT_OBSERVA (:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.LCKCRE_OFICIN,'5');
    //  V_CANTCOA   := CANT_OBSERVA (:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.LCKCRE_OFICIN,'13');*/
    //  V_CANTLOC   := CANT_OBSERVA (:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.LCKCRE_OFICIN,'5',:CRTLCKCRE.LCKCRE_CODUNI);
    //  V_CANTCOA   := CANT_OBSERVA (:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.LCKCRE_OFICIN,'13',:CRTLCKCRE.LCKCRE_CODUNI);
    // 
    // --SABER CUANTOS TERCERO TIENE UNA SOLICITUD 13
    //  BEGIN
    //   SELECT OTERSOL_NITTER  
    //     INTO V_CANTSOL 
    //     FROM CRTOTERSOL 
    //    WHERE --+PY21520. JDG
    //          OTERSOL_CODUNI = :CRTLCKCRE.LCKCRE_CODUNI
    //          --+
    //      AND OTERSOL_CODSOL = :CRTLCKCRE.LCKCRE_NSOLIC 
    //      AND OTERSOL_OFCSOL = :CRTLCKCRE.LCKCRE_OFICIN
    //      AND OTERSOL_TIPVIN = '13'
    //      AND ROWNUM = 1;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTSOL := 0;
    //  END;
    // --SABER CUANTOS TERCERO TIENE UNA SOLICITUD
    // 
    // 
    // --SABER CUANTOS TERCEROS QUE SE HAN INGRESADO 
    //  BEGIN
    //   SELECT SOLICR_NITTER  
    //     INTO V_CANTCKA
    //     FROM CRTSOLICR K 
    //    WHERE --+PY21520. JDG
    //          SOLICR_CODUNI = :CRTLCKCRE.LCKCRE_CODUNI
    //          --+
    //      AND SOLICR_CODSOL = :CRTLCKCRE.LCKCRE_NSOLIC
    //      AND SOLICR_OFCSOL = :CRTLCKCRE.LCKCRE_OFICIN;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTCKA := 0;
    //  END; 
    // --SABER CUANTOS TERCEROS QUE SE HAN INGRESADO
    //   
    //   --+PY21520. JDG
    //   /*V_SOLICIT :=  INGRE_CANTIDAD_TERCERO (:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC,V_CANTSOL,13);
    //  V_TERCERO :=  INGRE_CANTIDAD_TERCERO (:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC,V_CANTCKA,5);*/
    //   V_SOLICIT :=  INGRE_CANTIDAD_TERCERO (:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC,V_CANTSOL,13,:CRTLCKCRE.LCKCRE_CODUNI);
    //  V_TERCERO :=  INGRE_CANTIDAD_TERCERO (:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC,V_CANTCKA,5,:CRTLCKCRE.LCKCRE_CODUNI); 
    // 
    //   --+PY21520. JDG
    //  /*V_CANTLOC := CANT_OBSERVA (:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.LCKCRE_OFICIN,13);
    //  V_CANTCOA := CANT_OBSERVA (:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.LCKCRE_OFICIN,5);*/
    //  V_CANTLOC := CANT_OBSERVA (:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.LCKCRE_OFICIN,13,:CRTLCKCRE.LCKCRE_CODUNI);
    //  V_CANTCOA := CANT_OBSERVA (:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.LCKCRE_OFICIN,5,:CRTLCKCRE.LCKCRE_CODUNI);
    // 
    //  IF V_SOLICIT =0 AND  V_TERCERO=0 THEN
    //     LIB$DTNERFRMA('NO HA INGRESADO LA INFORMACIÓN DEL LOCATARIO O COARRENDATARIO'); 
    //  ELSE   
    //    IF (:CRTLCKCRE.LCKCRE_OBSERV IS NULL)AND (:CRTLCKCRE.LCKCRE_CALIOC <> 'OK')   THEN       
    //        
    //        IF V_CANTLOC <>0 OR V_CANTCOA <> 0 THEN
    //         --MESSAGE('HAY INFORMACIÓN DEL LOCATARIO O COARRENDATARIO PENDIENTE');
    //         MESSAGE('HAY INFORMACIÓN DEL LOCATARIO O COARRENDATARIO PENDIENTE');  
    //         IF :CRTLCKCRE.LCKCRE_OBSERV IS NULL THEN 
    //          LIB$DTNERFRMA('POR FAVOR INGRESAR LA OBSERVACIÓN');         
    //         END IF; 
    //        END IF; 
    //    ELSIF (:CRTLCKCRE.LCKCRE_CALIOC <> 'OK')    THEN 
    //       
    //        OPS$COLOCA.PQBD_COL_ENVIOEC.PCOL_SEGUIMIENTO
    //        (:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC,TRUNC(SYSDATE),'CRE'
    //         ,:CRTLCKCRE.LCKCRE_CODUNI --ARQUITECTURA
    //        );
    //        :CRTLCKCRE.LCKCRE_FECMOD := SYSDATE;
    //        IF :CRTLCKCRE.LCKCRE_CALIOC <> 'OK' THEN 
    //         --+PY21520. JDG
    //        --P_ENVIO_CORREO (NULL, :CRTLCKCRE.LCKCRE_COMERC, :CRTLCKCRE.LCKCRE_NSOLIC ,:CRTLCKCRE.LCKCRE_OFICIN);
    //        P_ENVIO_CORREO (NULL, :CRTLCKCRE.LCKCRE_COMERC, :CRTLCKCRE.LCKCRE_NSOLIC ,:CRTLCKCRE.LCKCRE_OFICIN, :CRTLCKCRE.LCKCRE_CODUNI);
    //        --+
    //         LIB$DTNERFRMA('SE HA ENVIADO UN CORREO AL COMERCIAL ' || :CRTLCKCRE.LCKCRE_COMERC ||' - '||:CRTLCKCRE.LCKCRE_COMERCDESC ||' INFORMANDOLE LAS OBSERVACIONES CORRRESPONDIENTES');      
    //        END IF; 
    //       
    //    END IF;
    //  END IF;
    //  
    // 
    //  --:CRTLCKCRE.LCKCRE_USUREC := NVL(:CRTLCKCRE.LCKCRE_USUREC,USER);
    //  
    // 
    // 
    // END;
    //#endregion
    async CMFCKCRE_keyCommit() {
        console.log("Entering CMFCKCRE_keyCommit");
        let V_CANTCKCR: number = null;
        let V_CANTREDO: number = null;
        let COM_MAIL: string = null;
        let V_CANTLOC: number = null;
        let V_CANTCOA: number = null;
        let V_CANTSOL: string = null;
        let V_CANTCKA: string = null;
        let V_SOLICIT: number = null;
        let V_TERCERO: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("LCKCRE_CODUNI", this.CRTLCKCRE.LCKCRE_CODUNI);
        payload1.set("LCKCRE_OFICIN", this.CRTLCKCRE.LCKCRE_OFICIN);
        payload1.set("LCKCRE_NSOLIC", this.CRTLCKCRE.LCKCRE_NSOLIC);
        // call REST API
        const result1 = await Rest.post("/cmfckcre/cmfckcre_keycommit_query1", payload1);
        // get values from result
        V_CANTCKCR = result1[0].get("V_CANTCKCR");
        if (result1 == null || result1.length == 0) {

            V_CANTCKCR = 0;
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("LCKCRE_CODUNI", this.CRTLCKCRE.LCKCRE_CODUNI);
        payload2.set("LCKCRE_OFICIN", this.CRTLCKCRE.LCKCRE_OFICIN);
        payload2.set("LCKCRE_NSOLIC", this.CRTLCKCRE.LCKCRE_NSOLIC);
        payload2.set("TIPO_REFERENCIA", this.CRTLCKCRE.TIPO_REFERENCIA);
        payload2.set("TIPO_PERSONA", this.CRTLCKCRE.TIPO_PERSONA);
        // call REST API
        const result2 = await Rest.post("/cmfckcre/cmfckcre_keycommit_query2", payload2);
        // get values from result
        V_CANTREDO = result2[0].get("V_CANTREDO");
        if (result2 == null || result2.length == 0) {

            V_CANTREDO = 0;
        }

        if (V_CANTCKCR == 0) {
            // CMFCKCRE_P_INSERTCABEZA();
        }
        else {
            // CMFCKCRE_P_UPDATECABEZA(CRTLCKCRE.LCKCRE_OFICIN, CRTLCKCRE.LCKCRE_NSOLIC, CRTLCKCRE.LCKCRE_CODUNI);
        }
        if (V_CANTREDO == 0) {
            // CMFCKCRE_PU_RESPUDOC(CRTLCKCRE.LCKCRE_OFICIN, CRTLCKCRE.LCKCRE_NSOLIC, CRTLCKCRE.TIPO_REFERENCIA, CRTLCKCRE.TIPO_PERSONA, CRTLCKCRE.TIPO_PERSONACOA);
        }
        else {
            // CMFCKCRE_PU_UPDADOC(CRTLCKCRE.LCKCRE_OFICIN, CRTLCKCRE.LCKCRE_NSOLIC, CRTLCKCRE.TIPO_REFERENCIA, CRTLCKCRE.TIPO_PERSONA, CRTLCKCRE.TIPO_PERSONACOA, CRTLCKCRE.LCKCRE_CODUNI);
        }
        // CMFCKCRE_P_MODESTADOS(CRTLCKCRE.LCKCRE_OFICIN, CRTLCKCRE.LCKCRE_NSOLIC, CRTLCKCRE.LCKCRE_CODUNI);
        // V_CANTLOC = CANT_OBSERVA(CRTLCKCRE.LCKCRE_NSOLIC, CRTLCKCRE.LCKCRE_OFICIN, "5", CRTLCKCRE.LCKCRE_CODUNI);
        // V_CANTCOA = CANT_OBSERVA(CRTLCKCRE.LCKCRE_NSOLIC, CRTLCKCRE.LCKCRE_OFICIN, "13", CRTLCKCRE.LCKCRE_CODUNI);
        // construct payload
        let payload3 = new Map();
        payload3.set("LCKCRE_CODUNI", this.CRTLCKCRE.LCKCRE_CODUNI);
        payload3.set("LCKCRE_NSOLIC", this.CRTLCKCRE.LCKCRE_NSOLIC);
        payload3.set("LCKCRE_OFICIN", this.CRTLCKCRE.LCKCRE_OFICIN);
        // call REST API
        const result3 = await Rest.post("/cmfckcre/cmfckcre_keycommit_query3", payload3);
        // get values from result
        V_CANTSOL = result3[0].get("V_CANTSOL");
        if (result3 == null || result3.length == 0) {

            // V_CANTSOL = 0;
        }

        // construct payload
        let payload4 = new Map();
        payload4.set("LCKCRE_CODUNI", this.CRTLCKCRE.LCKCRE_CODUNI);
        payload4.set("LCKCRE_NSOLIC", this.CRTLCKCRE.LCKCRE_NSOLIC);
        payload4.set("LCKCRE_OFICIN", this.CRTLCKCRE.LCKCRE_OFICIN);
        // call REST API
        const result4 = await Rest.post("/cmfckcre/cmfckcre_keycommit_query4", payload4);
        // get values from result
        V_CANTCKA = result4[0].get("V_CANTCKA");
        if (result4 == null || result4.length == 0) {

            // V_CANTCKA = 0;
        }

        // V_SOLICIT = INGRE_CANTIDAD_TERCERO(CRTLCKCRE.LCKCRE_OFICIN, CRTLCKCRE.LCKCRE_NSOLIC, V_CANTSOL, 13, CRTLCKCRE.LCKCRE_CODUNI);
        // V_TERCERO = INGRE_CANTIDAD_TERCERO(CRTLCKCRE.LCKCRE_OFICIN, CRTLCKCRE.LCKCRE_NSOLIC, V_CANTCKA, 5, CRTLCKCRE.LCKCRE_CODUNI);
        // V_CANTLOC = CANT_OBSERVA(CRTLCKCRE.LCKCRE_NSOLIC, CRTLCKCRE.LCKCRE_OFICIN, 13, CRTLCKCRE.LCKCRE_CODUNI);
        // V_CANTCOA = CANT_OBSERVA(CRTLCKCRE.LCKCRE_NSOLIC, CRTLCKCRE.LCKCRE_OFICIN, 5, CRTLCKCRE.LCKCRE_CODUNI);
        if ((V_SOLICIT == 0 && V_TERCERO == 0)) {
            // CMFCKCRE_LIB$DTNERFRMA("NO HA INGRESADO LA INFORMACIÓN DEL LOCATARIO O COARRENDATARIO");
        }
        else {
            if (((this.CRTLCKCRE.LCKCRE_OBSERV == null) && this.CRTLCKCRE.LCKCRE_CALIOC != "OK")) {
                if ((V_CANTLOC != 0 || V_CANTCOA != 0)) {
                    this.oracleFormsBuiltins.message("HAY INFORMACIÓN DEL LOCATARIO O COARRENDATARIO PENDIENTE");
                    if ((this.CRTLCKCRE.LCKCRE_OBSERV == null)) {
                        // CMFCKCRE_LIB$DTNERFRMA("POR FAVOR INGRESAR LA OBSERVACIÓN");
                    }
                }
            }
            else if (this.CRTLCKCRE.LCKCRE_CALIOC != "OK") {
                // CMFCKCRE_OPS$COLOCA.PQBD_COL_ENVIOEC.PCOL_SEGUIMIENTO(CRTLCKCRE.LCKCRE_OFICIN, CRTLCKCRE.LCKCRE_NSOLIC, TRUNC(PLSQLBuiltins.sysdate()), "CRE", CRTLCKCRE.LCKCRE_CODUNI);
                this.CRTLCKCRE.LCKCRE_FECMOD = PLSQLBuiltins.sysdate().toString();
                if (this.CRTLCKCRE.LCKCRE_CALIOC != "OK") {
                    //     CMFCKCRE_P_ENVIO_CORREO(null, CRTLCKCRE.LCKCRE_COMERC, CRTLCKCRE.LCKCRE_NSOLIC, CRTLCKCRE.LCKCRE_OFICIN, CRTLCKCRE.LCKCRE_CODUNI);
                    //     CMFCKCRE_LIB$DTNERFRMA("SE HA ENVIADO UN CORREO AL COMERCIAL " + CRTLCKCRE.LCKCRE_COMERC + " - " + CRTLCKCRE.LCKCRE_COMERCDESC + " INFORMANDOLE LAS OBSERVACIONES CORRRESPONDIENTES");
                }
            }
        }
        console.log("Exiting CMFCKCRE_keyCommit");
    }

    //#region PLSQL
    // BEGIN BLOCK_MENU; END;
    //#endregion
    async CMFCKCRE_keyMenu() {
        console.log("Entering CMFCKCRE_keyMenu");
        this.oracleFormsBuiltins.block_menu();
        console.log("Exiting CMFCKCRE_keyMenu");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('PIEDRA_IMAGEN', TOOLTIP_TEXT,NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT));
    // SYNCHRONIZE; END;
    //#endregion
    async CMFCKCRE_covpiedra_postQuery() {
        console.log("Entering CMFCKCRE_covpiedra_postQuery");
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", TOOLTIP_TEXT, PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CMFCKCRE_covpiedra_postQuery");
    }

    //#region PLSQL
    // BEGIN PR_AYUPIEDRA; END;
    //#endregion
    async CMFCKCRE_covpiedra_piedraImagen_whenMouseDoubleclick() {
        console.log("Entering CMFCKCRE_covpiedra_piedraImagen_whenMouseDoubleclick");
        // CMFCKCRE_PR_AYUPIEDRA();
        console.log("Exiting CMFCKCRE_covpiedra_piedraImagen_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async CMFCKCRE_toolbar_whenButtonPressed() {
        console.log("Entering CMFCKCRE_toolbar_whenButtonPressed");
        // CMFCKCRE_TOOLBAR_ACTIONS();
        console.log("Exiting CMFCKCRE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async CMFCKCRE_toolbar_whenMouseLeave() {
        console.log("Entering CMFCKCRE_toolbar_whenMouseLeave");
        // CMFCKCRE_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting CMFCKCRE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async CMFCKCRE_toolbar_whenNewFormInstance() {
        console.log("Entering CMFCKCRE_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CMFCKCRE_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN FIRST_RECORD; END;
    //#endregion
    async CMFCKCRE_toolbar_first_whenButtonPressed() {
        console.log("Entering CMFCKCRE_toolbar_first_whenButtonPressed");
        this.oracleFormsBuiltins.first_record();
        console.log("Exiting CMFCKCRE_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN LAST_RECORD; END;
    //#endregion
    async CMFCKCRE_toolbar_lastr_whenButtonPressed() {
        console.log("Entering CMFCKCRE_toolbar_lastr_whenButtonPressed");
        this.oracleFormsBuiltins.last_record();
        console.log("Exiting CMFCKCRE_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   V_CANTIDAD NUMBER;
    // BEGIN
    //  
    //  GO_BLOCK('CRTLCKCAL');
    //  CLEAR_BLOCK;
    //  :CRTLCKCRE.SELECCION       := NULL;
    //  
    //  
    //  BEGIN
    //   SELECT COUNT(*)
    //     INTO  V_CANTIDAD
    //     FROM OPS$COLOCA.CRTLCKCAL
    //    WHERE --+PY21520. JDG
    //          LCKCAL_CODUNI = :CRTLCKCRE.LCKCRE_CODUNI
    //          --+
    //      AND LCKCRE_CALOFI = :CRTLCKCRE.LCKCRE_OFICIN
    //      AND LCKCRE_CALNSO = :CRTLCKCRE.LCKCRE_NSOLIC
    //      AND LCKCRE_TIPCLI = :CRTLCKCRE.TIPO_REFERENCIA
    //      AND LPAD(LCKCRE_TIPPRE,2,'0') = :CRTLCKCRE.TIPO_PERSONA
    //      AND LCKCAL_CODARE = 'CRE';
    //  END;
    //  
    //  IF V_CANTIDAD = 0 THEN
    //   
    //   IF (:CRTLCKCRE.TIPO_PERSONACOA IS NULL) OR  (:CRTLCKCRE.TIPO_PERSONACOA = '-') THEN  
    //        LIB$DTNERFRMA('POR FAVOR SELECCIONE LA PERSONA A LA CUAL DESEA VALIDAR LA DOCUMENTACIÓN');
    //   ELSE   
    //      PU_SOLICITUDDOC (:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.TIPO_REFERENCIA);
    //    END IF;  
    //  ELSE
    //  
    //      --+PY21520. JDG
    //      --P_CONSUDOC (:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC ,:CRTLCKCRE.TIPO_REFERENCIA, :CRTLCKCRE.TIPO_PERSONA);
    //      P_CONSUDOC (:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC ,:CRTLCKCRE.TIPO_REFERENCIA, :CRTLCKCRE.TIPO_PERSONA, :CRTLCKCRE.LCKCRE_CODUNI);
    //      --+
    //  
    //  END IF;
    // END;
    //#endregion
    async CMFCKCRE_crtlckcre_tipoReferencia_whenListChanged() {
        console.log("Entering CMFCKCRE_crtlckcre_tipoReferencia_whenListChanged");
        let V_CANTIDAD: number = null;
        this.oracleFormsBuiltins.go_block("CRTLCKCAL");
        this.oracleFormsBuiltins.clear_block();
        this.CRTLCKCRE.SELECCION = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("LCKCRE_CODUNI", this.CRTLCKCRE.LCKCRE_CODUNI);
        payload1.set("LCKCRE_OFICIN", this.CRTLCKCRE.LCKCRE_OFICIN);
        payload1.set("LCKCRE_NSOLIC", this.CRTLCKCRE.LCKCRE_NSOLIC);
        payload1.set("TIPO_REFERENCIA", this.CRTLCKCRE.TIPO_REFERENCIA);
        payload1.set("TIPO_PERSONA", this.CRTLCKCRE.TIPO_PERSONA);
        // call REST API
        const result1 = await Rest.post("/cmfckcre_crtlckcre/cmfckcre_crtlckcre_tiporeferencia_whenlistchanged_query1", payload1);
        // get values from result
        V_CANTIDAD = result1[0].get("V_CANTIDAD");
        if (V_CANTIDAD == 0) {
            if (((this.CRTLCKCRE.TIPO_PERSONACOA == null) || this.CRTLCKCRE.TIPO_PERSONACOA == "-")) {
                // CMFCKCRE_LIB$DTNERFRMA("POR FAVOR SELECCIONE LA PERSONA A LA CUAL DESEA VALIDAR LA DOCUMENTACIÓN");
            }
            else {
                // CMFCKCRE_PU_SOLICITUDDOC(CRTLCKCRE.LCKCRE_OFICIN, CRTLCKCRE.LCKCRE_NSOLIC, CRTLCKCRE.TIPO_REFERENCIA);
            }
        }
        else {
            // CMFCKCRE_P_CONSUDOC(CRTLCKCRE.LCKCRE_OFICIN, CRTLCKCRE.LCKCRE_NSOLIC, CRTLCKCRE.TIPO_REFERENCIA, CRTLCKCRE.TIPO_PERSONA, CRTLCKCRE.LCKCRE_CODUNI);
        }
        console.log("Exiting CMFCKCRE_crtlckcre_tipoReferencia_whenListChanged");
    }

    //#region PLSQL
    // BEGIN
    //  IF (:CRTLCKCRE.LCKCRE_CODUNI IS NOT NULL) AND 
    //   (:CRTLCKCRE.LCKCRE_OFICIN IS NOT NULL) AND   (:CRTLCKCRE.LCKCRE_NSOLIC IS NOT NULL) THEN --ARQUITECTURA
    //   
    //         BEGIN
    //        INSERT INTO OPS$COLOCA.CRTLCKCRE (LCKCRE_OFICIN,LCKCRE_NSOLIC,LCKCRE_TERCER,LCKCRE_RFECHA,LCKCRE_COMERC,
    //                                          LCKCRE_ESTADO,LCKCRE_CODARE,LCKCRE_USUREC,
    //                                          LCKCRE_CODUNI --ARQUITECTURA
    //                              )
    //                        VALUES(:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.LCKCRE_TERCER,
    //                     :CRTLCKCRE.LCKCRE_RFECHA,:CRTLCKCRE.LCKCRE_COMERC,'GR','CRE',USER,
    //                     :CRTLCKCRE.LCKCRE_CODUNI --ARQUITECTURA
    //                     );
    //        COMMIT;       
    //       EXCEPTION WHEN OTHERS THEN
    //         
    //          MESSAGE('SE HA PRESENTADO UN ERROR DE INSERCIÓN BOTON');
    //          MESSAGE('SE HA PRESENTADO UN ERROR DE INSERCIÓN BOTON');
    //        
    //       END;
    //   
    //        GO_ITEM('TIPO_PERSONA');
    //        SET_ITEM_PROPERTY('RECIBICREDITO',ENABLED,"PROPERTY_FALSE");
    //  ELSE
    //     NULL;
    //    
    //  END IF;
    //   
    //  
    //   
    // END;
    //#endregion
    async CMFCKCRE_crtlckcre_recibicredito_whenButtonPressed() {
        console.log("Entering CMFCKCRE_crtlckcre_recibicredito_whenButtonPressed");
        if ((((this.CRTLCKCRE.LCKCRE_CODUNI != null) && (this.CRTLCKCRE.LCKCRE_OFICIN != null)) && (this.CRTLCKCRE.LCKCRE_NSOLIC != null))) {
            let result2 = new Map();
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("LCKCRE_OFICIN", this.CRTLCKCRE.LCKCRE_OFICIN);
                payload1.set("LCKCRE_NSOLIC", this.CRTLCKCRE.LCKCRE_NSOLIC);
                payload1.set("LCKCRE_TERCER", this.CRTLCKCRE.LCKCRE_TERCER);
                payload1.set("LCKCRE_RFECHA", this.CRTLCKCRE.LCKCRE_RFECHA);
                payload1.set("LCKCRE_COMERC", this.CRTLCKCRE.LCKCRE_COMERC);
                payload1.set("LCKCRE_CODUNI", this.CRTLCKCRE.LCKCRE_CODUNI);
                // call REST API
                const result1 = await Rest.post("/cmfckcre_crtlckcre/cmfckcre_crtlckcre_recibicredito_whenbuttonpressed_query1", payload1);
            } catch (ex) {

                this.oracleFormsBuiltins.message("SE HA PRESENTADO UN ERROR DE INSERCIÓN BOTON");
                this.oracleFormsBuiltins.message("SE HA PRESENTADO UN ERROR DE INSERCIÓN BOTON");
            }

            this.oracleFormsBuiltins.go_item("TIPO_PERSONA");
            this.oracleFormsBuiltins.set_item_property("RECIBICREDITO", "ENABLED", "PROPERTY_FALSE");
        }
        else {
        }
        console.log("Exiting CMFCKCRE_crtlckcre_recibicredito_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_CANTSOLI  NUMBER;
    //  V_CANTCKCR  NUMBER;
    //  V_OFICINA   VARCHAR2(3);
    //  V_SOLICIT   VARCHAR2(9);
    //  V_UNIDAD    VARCHAR2(3);
    //  V_TPERSONA  NUMBER; 
    //  V_TCLIENTE  NUMBER;
    //  V_TPERSOARR VARCHAR2(100);
    //  V_CANTIDAD  NUMBER;
    //  V_CANTIDADV   NUMBER;
    //  
    // BEGIN
    //  IF (:CRTLCKCRE.LCKCRE_CODUNI IS NULL) OR (:CRTLCKCRE.LCKCRE_OFICIN IS NULL) 
    //   OR (:CRTLCKCRE.LCKCRE_NSOLIC IS NULL) THEN --ARQUITECTURA
    //   
    //    LIB$DTNERFRMA('LOS CAMPOS UNIDAD,OFICINA Y SOLICITUD SON OBLIGATORIOS');
    //   
    //  ELSE
    //   
    //   
    //    BEGIN 
    //   SELECT COUNT(*)
    //    INTO V_CANTIDADV
    //    FROM CRTSOLICR
    //     WHERE SOLICR_OFCSOL=:CRTLCKCRE.LCKCRE_OFICIN
    //      AND SOLICR_CODSOL=:CRTLCKCRE.LCKCRE_NSOLIC
    //      AND SOLICR_CODUNI=:CRTLCKCRE.LCKCRE_CODUNI --ARQUITECTURA
    //      AND SOLICR_ESTSOL <> 'GR';
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTIDAD:= 0;
    //  END;
    //   
    //    
    //  IF V_CANTIDADV >= 1 AND SYSTEM.RECORD_STATUS = 'INSERT' THEN     
    //      LIB$DTNERFRMA('LA OFICINA Y SOLICITUD INGRESADA NO ESTA EN ESTADO GR, POR FAVOR INGRESAR LA SOLICITUD Y OFICINA VALIDA. ');     
    //  END IF;
    //   
    //   
    //   
    //   
    //   V_OFICINA :=:CRTLCKCRE.LCKCRE_OFICIN;
    //   V_SOLICIT :=:CRTLCKCRE.LCKCRE_NSOLIC;
    //   V_UNIDAD  :=:CRTLCKCRE.LCKCRE_CODUNI; --ARQUITECTURA
    //   
    //   
    //   BEGIN
    //    SELECT COUNT(*)
    //    INTO  V_CANTIDAD
    //    FROM CRTLCKCRE
    //    WHERE LCKCRE_NSOLIC = V_SOLICIT
    //    AND LCKCRE_OFICIN   = V_OFICINA
    //    AND LCKCRE_CODUNI   = V_UNIDAD --ARQUITECTURA
    //    AND LCKCRE_CODARE= 'CRE';  
    //    EXCEPTION WHEN NO_DATA_FOUND THEN  V_CANTIDAD := 0;
    //   END;
    //  
    //   IF V_CANTIDAD <> 0 THEN 
    //     UPDATE CRTLCKCRE SET LCKCRE_ESTADO = 'GR' 
    //     WHERE LCKCRE_NSOLIC = V_SOLICIT 
    //     AND LCKCRE_OFICIN = V_OFICINA 
    //     AND LCKCRE_CODARE= 'CRE'
    //     AND LCKCRE_CODUNI= V_UNIDAD;  
    //     COMMIT; 
    //   END IF; 
    //   
    //   
    //   GO_BLOCK('CRTLCKCAL'); 
    //   CLEAR_BLOCK;
    //   GO_BLOCK('CRTLCKCRE'); 
    //   CLEAR_BLOCK;
    //   
    //   GO_BLOCK('COVPIEDRA');
    //    CLEAR_BLOCK;
    //    
    //   :CRTLCKCRE.SELECCION       := NULL;
    //   
    //   
    //   BEGIN
    //    SELECT COUNT(*) 
    //      INTO V_CANTSOLI
    //     FROM CRTSOLICR S
    //     WHERE S.SOLICR_OFCSOL = V_OFICINA
    //     AND S.SOLICR_CODSOL   = V_SOLICIT
    //     AND S.SOLICR_CODUNI   = V_UNIDAD; --ARQUITECTURA
    //  
    //   EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTSOLI := 0;
    //   END; 
    //   
    //  BEGIN  
    //    SELECT COUNT(*) 
    //     INTO V_CANTCKCR
    //     FROM OPS$COLOCA.CRTLCKCRE R
    //     WHERE R.LCKCRE_OFICIN  = V_OFICINA
    //       AND R.LCKCRE_NSOLIC  = V_SOLICIT
    //       AND R.LCKCRE_CODUNI  = V_UNIDAD --ARQUITECTURA
    //       AND LCKCRE_CODARE= 'CRE';  
    //  
    //   EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTCKCR := 0;
    //   END;
    //   
    //   IF V_CANTCKCR = 0 AND V_CANTSOLI = 1 THEN 
    //      SET_ITEM_PROPERTY('RECIBICREDITO',ENABLED,"PROPERTY_TRUE");   
    //      --+PY21520. JDG
    //     --P_SOLICITUD(V_OFICINA,V_SOLICIT);
    //     P_SOLICITUD(V_OFICINA,V_SOLICIT,V_UNIDAD);    
    //     --+
    //     :CRTLCKCRE.LCKCRE_RFECHA := SYSDATE;
    //   ELSE
    //      SET_ITEM_PROPERTY('RECIBICREDITO',ENABLED,"PROPERTY_FALSE"); 
    //      --+PY21520. JDG
    //      P_TIPOPER(V_OFICINA,V_SOLICIT,V_UNIDAD);
    //      --P_TIPOPER(V_OFICINA,V_SOLICIT);
    //      --+
    //      
    //    BEGIN
    //     SELECT LCKCRE_TIPCLI,LCKCRE_TIPPRE,LCKCRE_CEDULA
    //     INTO V_TCLIENTE,V_TPERSONA ,V_TPERSOARR
    //      FROM OPS$COLOCA.CRTLCKCAL
    //     WHERE LCKCRE_CALOFI = V_OFICINA
    //     AND LCKCRE_CALNSO   = V_SOLICIT
    //     AND LCKCAL_CODUNI   = V_UNIDAD --ARQUITECTURA
    //     AND LCKCAL_CODARE= 'CRE'
    //     AND ROWNUM = 1;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN  
    //       V_TCLIENTE  := NULL;
    //       V_TPERSONA  := NULL;
    //       V_TPERSOARR := NULL;
    //    END;
    // 
    //    :CRTLCKCRE.TIPO_PERSONA     := LPAD(V_TPERSONA,2,'0');
    //    :CRTLCKCRE.TIPO_REFERENCIA  := V_TCLIENTE;
    //     
    //  
    //    :CRTLCKCRE.LCKCRE_OFICIN := V_OFICINA;
    //    :CRTLCKCRE.LCKCRE_NSOLIC := V_SOLICIT;
    //    :CRTLCKCRE.LCKCRE_CODUNI := V_UNIDAD; --ARQUITECTURA
    //    
    //    
    //    IF NOT LIB$PBLARLSTARG('CRTLCKCRE.TIPO_PERSONACOA','LOV_TIPOPERSONA') THEN
    //        LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CRTLCKCRE.TIPO_PERSONACOA');
    //    END IF;
    //    
    //    
    //     :CRTLCKCRE.TIPO_PERSONACOA := V_TPERSOARR;
    //     
    //     --+PY21520. JDG
    //     --P_CONSUDOC (V_OFICINA,V_SOLICIT ,V_TCLIENTE,V_TPERSONA);
    //     P_CONSUDOC (V_OFICINA,V_SOLICIT ,V_TCLIENTE,V_TPERSONA,V_UNIDAD);
    //     --+
    //       
    //   END IF;  
    // 
    //     :CRTLCKCRE.LCKCRE_OFICIN := V_OFICINA;
    //    :CRTLCKCRE.LCKCRE_NSOLIC := V_SOLICIT;
    //     :CRTLCKCRE.LCKCRE_CODUNI := V_UNIDAD; --ARQUITECTURA
    //  END IF; 
    //  
    //  
    //   GO_BLOCK('COVPIEDRA');
    //    EXECUTE_QUERY; 
    //  
    //  
    // END;
    //#endregion
    async CMFCKCRE_crtlckcre_ejecucion_whenButtonPressed() {
        console.log("Entering CMFCKCRE_crtlckcre_ejecucion_whenButtonPressed");
        let V_CANTSOLI: number = null;
        let V_CANTCKCR: number = null;
        let V_OFICINA: string = null;
        let V_SOLICIT: string = null;
        let V_UNIDAD: string = null;
        let V_TPERSONA: number = null;
        let V_TCLIENTE: number = null;
        let V_TPERSOARR: string = null;
        let V_CANTIDAD: number = null;
        let V_CANTIDADV: number = null;
        if ((((this.CRTLCKCRE.LCKCRE_CODUNI == null) || (this.CRTLCKCRE.LCKCRE_OFICIN == null)) || (this.CRTLCKCRE.LCKCRE_NSOLIC == null))) {
            // CMFCKCRE_LIB$DTNERFRMA("LOS CAMPOS UNIDAD,OFICINA Y SOLICITUD SON OBLIGATORIOS");
        }
        else {
            // construct payload
            let payload1 = new Map();
            payload1.set("LCKCRE_OFICIN", this.CRTLCKCRE.LCKCRE_OFICIN);
            payload1.set("LCKCRE_NSOLIC", this.CRTLCKCRE.LCKCRE_NSOLIC);
            payload1.set("LCKCRE_CODUNI", this.CRTLCKCRE.LCKCRE_CODUNI);
            // call REST API
            const result1 = await Rest.post("/cmfckcre_crtlckcre/cmfckcre_crtlckcre_ejecucion_whenbuttonpressed_query1", payload1);
            // get values from result
            V_CANTIDADV = result1[0].get("V_CANTIDADV");
            if (result1 == null || result1.length == 0) {

                V_CANTIDAD = 0;
            }

            // if ((V_CANTIDADV >= 1 && SYSTEM.RECORD_STATUS == "INSERT")) {
            //     CMFCKCRE_LIB$DTNERFRMA("LA OFICINA Y SOLICITUD INGRESADA NO ESTA EN ESTADO GR, POR FAVOR INGRESAR LA SOLICITUD Y OFICINA VALIDA. ");
            // }
            V_OFICINA = this.CRTLCKCRE.LCKCRE_OFICIN;
            V_SOLICIT = this.CRTLCKCRE.LCKCRE_NSOLIC;
            V_UNIDAD = this.CRTLCKCRE.LCKCRE_CODUNI;
            // construct payload
            let payload2 = new Map();
            // call REST API
            const result2 = await Rest.post("/cmfckcre_crtlckcre/cmfckcre_crtlckcre_ejecucion_whenbuttonpressed_query2", payload2);
            // get values from result
            V_CANTIDAD = result2[0].get("V_CANTIDAD");
            if (result2 == null || result2.length == 0) {

                V_CANTIDAD = 0;
            }

            if (V_CANTIDAD != 0) {
                // construct payload
                let payload3 = new Map();
                // call REST API
                const result3 = await Rest.post("/cmfckcre_crtlckcre/cmfckcre_crtlckcre_ejecucion_whenbuttonpressed_query3", payload3);
            }
            this.oracleFormsBuiltins.go_block("CRTLCKCAL");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("CRTLCKCRE");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("COVPIEDRA");
            this.oracleFormsBuiltins.clear_block();
            this.CRTLCKCRE.SELECCION = null;
            // construct payload
            let payload5 = new Map();
            // call REST API
            const result5 = await Rest.post("/cmfckcre_crtlckcre/cmfckcre_crtlckcre_ejecucion_whenbuttonpressed_query5", payload5);
            // get values from result
            V_CANTSOLI = result5[0].get("V_CANTSOLI");
            if (result5 == null || result5.length == 0) {

                V_CANTSOLI = 0;
            }

            // construct payload
            let payload6 = new Map();
            // call REST API
            const result6 = await Rest.post("/cmfckcre_crtlckcre/cmfckcre_crtlckcre_ejecucion_whenbuttonpressed_query6", payload6);
            // get values from result
            V_CANTCKCR = result6[0].get("V_CANTCKCR");
            if (result6 == null || result6.length == 0) {

                V_CANTCKCR = 0;
            }

            if ((V_CANTCKCR == 0 && V_CANTSOLI == 1)) {
                this.oracleFormsBuiltins.set_item_property("RECIBICREDITO", "ENABLED", "PROPERTY_TRUE");
                // CMFCKCRE_P_SOLICITUD(V_OFICINA, V_SOLICIT, V_UNIDAD);
                this.CRTLCKCRE.LCKCRE_RFECHA = PLSQLBuiltins.sysdate().toString();
            }
            else {
                this.oracleFormsBuiltins.set_item_property("RECIBICREDITO", "ENABLED", "PROPERTY_FALSE");
                // CMFCKCRE_P_TIPOPER(V_OFICINA, V_SOLICIT, V_UNIDAD);
                // construct payload
                let payload7 = new Map();
                // call REST API
                const result7 = await Rest.post("/cmfckcre_crtlckcre/cmfckcre_crtlckcre_ejecucion_whenbuttonpressed_query7", payload7);
                // get values from result
                V_TCLIENTE = result7[0].get("V_TCLIENTE");
                V_TPERSONA = result7[0].get("V_TPERSONA");
                V_TPERSOARR = result7[0].get("V_TPERSOARR");
                if (result7 == null || result7.length == 0) {

                    V_TCLIENTE = null;
                    V_TPERSONA = null;
                    V_TPERSOARR = null;
                }

                // this.CRTLCKCRE.TIPO_PERSONA = LPAD(V_TPERSONA, 2, "0");
                // this.CRTLCKCRE.TIPO_REFERENCIA = V_TCLIENTE;
                this.CRTLCKCRE.LCKCRE_OFICIN = V_OFICINA;
                this.CRTLCKCRE.LCKCRE_NSOLIC = V_SOLICIT;
                this.CRTLCKCRE.LCKCRE_CODUNI = V_UNIDAD;
                // if ((!LIB$PBLARLSTARG("CRTLCKCRE.TIPO_PERSONACOA", "LOV_TIPOPERSONA"))) {
                //     CMFCKCRE_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA CRTLCKCRE.TIPO_PERSONACOA");
                // }
                this.CRTLCKCRE.TIPO_PERSONACOA = V_TPERSOARR;
                // CMFCKCRE_P_CONSUDOC(V_OFICINA, V_SOLICIT, V_TCLIENTE, V_TPERSONA, V_UNIDAD);
            }
            this.CRTLCKCRE.LCKCRE_OFICIN = V_OFICINA;
            this.CRTLCKCRE.LCKCRE_NSOLIC = V_SOLICIT;
            this.CRTLCKCRE.LCKCRE_CODUNI = V_UNIDAD;
        }
        this.oracleFormsBuiltins.go_block("COVPIEDRA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CMFCKCRE_crtlckcre_ejecucion_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTLCKCRE');
    // CLEAR_BLOCK; 
    // GO_BLOCK('CRTLCKCAL');
    // CLEAR_BLOCK;
    // HIDE_VIEW('SOLI_PENDIENTES');
    // GO_ITEM('CRTLCKCRE.LCKCRE_OFICIN'); END;
    //#endregion
    async CMFCKCRE_crtlckcre_cerrar_whenButtonPressed() {
        console.log("Entering CMFCKCRE_crtlckcre_cerrar_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("CRTLCKCRE");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTLCKCAL");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.hide_view("SOLI_PENDIENTES");
        this.oracleFormsBuiltins.go_item("CRTLCKCRE.LCKCRE_OFICIN");
        console.log("Exiting CMFCKCRE_crtlckcre_cerrar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :CRTLCKCRE.SELECCION ='S'  THEN
    //   
    //   GO_BLOCK('CRTLCKCAL');  
    //   FIRST_RECORD;
    //   LOOP   
    //     
    //      :CRTLCKCAL.LCKCRE_CALOPC := 'OK';
    //      NEXT_RECORD;
    //      SYNCHRONIZE;
    //      
    //      IF :SYSTEM.LAST_RECORD ='TRUE' AND :CRTLCKCRE.SELECCION ='S'  THEN
    //          :CRTLCKCAL.LCKCRE_CALOPC := 'OK';
    //       END IF;      
    //      
    //     EXIT WHEN :SYSTEM.LAST_RECORD ='TRUE'; 
    //   END LOOP;
    //     FIRST_RECORD;
    // ELSE
    // 
    // 
    //   GO_BLOCK('CRTLCKCAL');  
    //   FIRST_RECORD;
    //   LOOP   
    //     
    //      :CRTLCKCAL.LCKCRE_CALOPC := NULL;
    //      NEXT_RECORD;
    //      SYNCHRONIZE;
    //      
    //      IF :SYSTEM.LAST_RECORD ='TRUE' AND :CRTLCKCRE.SELECCION ='S'  THEN
    //          :CRTLCKCAL.LCKCRE_CALOPC := NULL;
    //      END IF; 
    //       
    //     EXIT WHEN :SYSTEM.LAST_RECORD ='TRUE'; 
    //   END LOOP;
    //     FIRST_RECORD;
    // 
    //    
    // END IF; END;
    //#endregion
    async CMFCKCRE_crtlckcre_seleccion_whenCheckboxChanged() {
        console.log("Entering CMFCKCRE_crtlckcre_seleccion_whenCheckboxChanged");
        if (this.CRTLCKCRE.SELECCION == "S") {
            this.oracleFormsBuiltins.go_block("CRTLCKCAL");
            this.oracleFormsBuiltins.first_record();
            this.oracleFormsBuiltins.first_record();
        }
        else {
            this.oracleFormsBuiltins.go_block("CRTLCKCAL");
            this.oracleFormsBuiltins.first_record();
            this.oracleFormsBuiltins.first_record();
        }
        console.log("Exiting CMFCKCRE_crtlckcre_seleccion_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE    V_ANALISTA  VARCHAR2(20);    T_RESPUESTA NUMBER;    V_NOMBRE    VARCHAR2(150);    V_OPCION    NUMBER;    V_SOLICI    NUMBER;    V_CARGO     VARCHAR2(20);    V_TIPOPER   VARCHAR2(2);    V_CANTNU    NUMBER;    V_CANTJU    NUMBER;    V_CANTRE    NUMBER;        --+PY21248. JDG. ARQUITECTURA   V_GETCO_ESTBLQ   VARCHAR2( 15 );   V_MENSAJE           VARCHAR2( 500);    --+    BEGIN        --+PY26978. JDG. 2018.07.27. AJUSTE PARA FIJAR EL TIPO DE COMITÉ DE CRÉDITO A NACIONAL PARA LA UNIDAD DE LEASING    --+DADO. MARIO RODRÍGUEZ.    IF :CRTLCKCRE.LCKCRE_CODUNI = '001' THEN          UPDATE CRTSOLICR         SET SOLICR_COMITE = 'N'       WHERE SOLICR_CODUNI = :CRTLCKCRE.LCKCRE_CODUNI        AND SOLICR_OFCSOL = :CRTLCKCRE.LCKCRE_OFICIN        AND SOLICR_CODSOL = :CRTLCKCRE.LCKCRE_NSOLIC;             COMMIT;              END IF;    --+      BEGIN       SELECT S.USU_CARGO_N     INTO  V_CARGO    FROM       SGUSUARIOS S      WHERE S.USU_CODIGO = PLSQLBuiltins.user(); --  AND S.USU_CODUNI = :CRTLCKCRE.LCKCRE_CODUNI; --ARQUITECTURA  END;           -- MESSAGE('EL VALOR QUE SE TIENE ES DE::::'||:CRTLCKCRE.ASIGNA_ANALISTA); -- MESSAGE('EL VALOR QUE SE TIENE ES DE::::'||:CRTLCKCRE.ASIGNA_ANALISTA);         IF    (:CRTLCKCRE.ASIGNA_ANALISTA = 'S') AND (:CRTLCKCRE.ANALISTA IS NULL) AND  (V_CARGO IN ('ANCR','JECR','COCR'))  THEN                          LIB$DTNERFRMA('POR FAVOR INGRESAR EL ANALISTA.');                      ELSIF (:CRTLCKCRE.ASIGNA_ANALISTA = 'S') AND (:CRTLCKCRE.ANALISTA IS  NULL) AND  (V_CARGO = 'ANMC')   THEN                     LIB$DTNERFRMA('ESTA OPCIÓN SOLO PUEDE SER USADA POR ANALISTAS DE CRÉDITO.');                 ELSIF (:CRTLCKCRE.ASIGNA_ANALISTA = 'N'  OR :CRTLCKCRE.ASIGNA_ANALISTA IS NULL) AND (:CRTLCKCRE.ANALISTA IS NOT NULL) AND  (V_CARGO = 'ANMC')   THEN                     LIB$DTNERFRMA('ESTA OPCIÓN SOLO PUEDE SER USADA POR ANALISTAS DE CRÉDITO.');                           ELSIF (:CRTLCKCRE.ASIGNA_ANALISTA = 'N'  OR :CRTLCKCRE.ASIGNA_ANALISTA IS NULL) AND (:CRTLCKCRE.ANALISTA IS NOT NULL) AND  (V_CARGO IN ('ANCR','JECR','COCR'))   THEN                     LIB$DTNERFRMA('POR FAVOR SELECCIONE SI ASIGNA ANALISTA.');             ELSIF (:CRTLCKCRE.ASIGNA_ANALISTA = 'N'  OR :CRTLCKCRE.ASIGNA_ANALISTA IS NULL) AND (:CRTLCKCRE.ANALISTA IS NULL)    THEN                      BEGIN             V_ANALISTA :=  OPS$COLOCA.PQBD_COL_ENVIOEC.FPRINCI_ASIGNA(:CRTLCKCRE.LCKCRE_OFICIN,                                           :CRTLCKCRE.LCKCRE_NSOLIC ,                                           :CRTLCKCRE.LCKCRE_CODUNI, --ARQUITECTURA                                           'CRE',                                           :CRTLCKCRE.LCKCRE_CALIOC                                                                    );                                        EXCEPTION WHEN OTHERS THEN              IF SQLCODE = -20010 THEN                LIB$ALERTA('MENSAJE',DBMS_ERROR_CODE ||DBMS_ERROR_TEXT,NULL,NULL,NULL,T_RESPUESTA);                 RAISE FORM_TRIGGER_FAILURE;                    ELSIF SQLCODE = -20011 THEN                LIB$ALERTA('MENSAJE',DBMS_ERROR_CODE ||DBMS_ERROR_TEXT,NULL,NULL,NULL,T_RESPUESTA);                 RAISE FORM_TRIGGER_FAILURE;                  ELSIF SQLCODE = -20012 THEN                LIB$ALERTA('MENSAJE',DBMS_ERROR_CODE ||DBMS_ERROR_TEXT,NULL,NULL,NULL,T_RESPUESTA);                 RAISE FORM_TRIGGER_FAILURE;               ELSIF SQLCODE = -20013 THEN                LIB$ALERTA('MENSAJE',DBMS_ERROR_CODE ||DBMS_ERROR_TEXT,NULL,NULL,NULL,T_RESPUESTA);                 RAISE FORM_TRIGGER_FAILURE;                ELSIF SQLCODE = -20014 THEN                LIB$ALERTA('MENSAJE',DBMS_ERROR_CODE ||DBMS_ERROR_TEXT,NULL,NULL,NULL,T_RESPUESTA);                 RAISE FORM_TRIGGER_FAILURE;                           ELSIF SQLCODE = -20015 THEN                LIB$ALERTA('MENSAJE',DBMS_ERROR_CODE ||DBMS_ERROR_TEXT,NULL,NULL,NULL,T_RESPUESTA);                 RAISE FORM_TRIGGER_FAILURE;               ELSIF SQLCODE = -20016 THEN                LIB$ALERTA('MENSAJE',DBMS_ERROR_CODE ||DBMS_ERROR_TEXT,NULL,NULL,NULL,T_RESPUESTA);                 RAISE FORM_TRIGGER_FAILURE;               ELSIF SQLCODE = -20017 THEN                LIB$ALERTA('MENSAJE',DBMS_ERROR_CODE ||DBMS_ERROR_TEXT,NULL,NULL,NULL,T_RESPUESTA);                 RAISE FORM_TRIGGER_FAILURE;               ELSIF SQLCODE = -20018 THEN                LIB$ALERTA('MENSAJE',DBMS_ERROR_CODE ||DBMS_ERROR_TEXT,NULL,NULL,NULL,T_RESPUESTA);                 RAISE FORM_TRIGGER_FAILURE;                                  ELSE                               RAISE FORM_TRIGGER_FAILURE;                END IF;                               END;     ELSIF (:CRTLCKCRE.ASIGNA_ANALISTA = 'S') AND (:CRTLCKCRE.ANALISTA IS NOT NULL) AND  (V_CARGO IN ('ANCR','JECR','COCR','ANMC'))   THEN                   V_ANALISTA :=    OPS$COLOCA.PQBD_COL_ENVIOEC.FACTUALIZAANA         (:CRTLCKCRE.LCKCRE_OFICIN,:CRTLCKCRE.LCKCRE_NSOLIC,:CRTLCKCRE.CODANALISTA,         :CRTLCKCRE.LCKCRE_CODUNI --ARQUITECTURA        );                     END IF;             IF V_ANALISTA IS NOT NULL THEN            V_NOMBRE :=F_NOMBRE (V_ANALISTA,NULL,'A');                    LIB$ALERTA('MENSAJE','LA SOLICITUD FUE ASIGNADA AL ANÁLISTA :'||V_ANALISTA ||' --- '||V_NOMBRE,'A C E P T A R',NULL,NULL,V_OPCION);                     --+PY21248. JDG         --SE CONTROLA SI TERCERO DE LA SOLICITUD PERTENECE A GRUPOS ECONÓMICOS TOP 30         --Y SI ES ASÍ SE BLOQUEA AUTOMÁTICAMENTE Y SE ALERTA CON MENSAJE AL USUARIO DE ESTA FORMA         --Y SE ENVÍA DETALLE DEL CONTROL A LOS CORREOS ELECTRÓNICOS DEL USUARIO QUE MANEJA ESTA         --FORMA Y A SU(S) JEFE(S).         IF FBDCONTROLGETOP30( V_GETCO_ESTBLQ ) = 'FALLO' THEN                      V_MENSAJE := 'FALLÓ PROCESO DE VALIDACIÓN DEL TERCERO POR GRUPOS ECONÓMICOS TOP30';                                                                          LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );                                  END IF;                          IF V_OPCION = 1 THEN           --PARA SABER SI SE TIENEN OTRAS SOLICITUDES CON ESE COMERCIAL               BEGIN                SELECT COUNT(*)                INTO V_SOLICI                FROM CRTSOLICR                WHERE SOLICR_ESTSOL = 'GR'               AND SOLICR_USCIAL = :CRTLCKCRE.LCKCRE_COMERC               AND SOLICR_NITTER = :CRTLCKCRE.LCKCRE_TERCER;                                                         EXCEPTION WHEN NO_DATA_FOUND THEN  V_SOLICI := 0;               END;                         IF V_SOLICI = 0 THEN               EXIT_FORM(NO_COMMIT,NO_VALIDATE);           ELSE              P_LLENAR_PENDIENTES (:CRTLCKCRE.LCKCRE_TERCER,:CRTLCKCRE.LCKCRE_COMERC);              SHOW_VIEW ('SOLI_PENDIENTES');             END IF;                      --PARA SABER SI SE TIENEN OTRAS SOLICITUDES CON ESE COMERCIAL     END IF;    END IF;                END;
    //#endregion
    async CMFCKCRE_crtlckcre_ec_whenButtonPressed() {
        console.log("Entering CMFCKCRE_crtlckcre_ec_whenButtonPressed");
        console.log("Exiting CMFCKCRE_crtlckcre_ec_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_CANTIDAD   NUMBER;
    // BEGIN
    //   
    //   
    //   
    //   
    //  IF :CRTLCKCRE.LCKCRE_OFICIN IS NULL THEN     
    //      LIB$DTNERFRMA('POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.');     
    //  END IF;
    // 
    // END;
    //#endregion
    async CMFCKCRE_crtlckcre_lckcreNsolic_whenValidateItem() {
        console.log("Entering CMFCKCRE_crtlckcre_lckcreNsolic_whenValidateItem");
        let V_CANTIDAD: number = null;
        if ((this.CRTLCKCRE.LCKCRE_OFICIN == null)) {
            // CMFCKCRE_LIB$DTNERFRMA("POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.");
        }
        console.log("Exiting CMFCKCRE_crtlckcre_lckcreNsolic_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  V_CANTIDAD   NUMBER;
    // BEGIN
    //   
    //    
    //   BEGIN 
    //   SELECT COUNT(*)
    //     INTO V_CANTIDAD
    //     FROM CRTSOLICR
    //    WHERE --+PY21520. JDG
    //            SOLICR_CODUNI = :CRTLCKCRE.LCKCRE_CODUNI
    //            --+
    //        AND SOLICR_OFCSOL = :CRTLCKCRE.LCKCRE_OFICIN
    //      AND SOLICR_CODSOL = :CRTLCKCRE.LCKCRE_NSOLIC
    //      AND SOLICR_ESTSOL <> 'GR';
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTIDAD:= 0;
    //  END;
    //   
    //    
    //  IF V_CANTIDAD >= 1 THEN     
    //      LIB$DTNERFRMA('LA OFICINA Y SOLICITUD INGRESADA NO ESTA EN ESTADO GR, POR FAVOR INGRESAR LA SOLICITUD Y OFICINA VALIDA. ');     
    //  END IF;
    //   
    // END;
    //#endregion
    async CMFCKCRE_crtlckcre_lckcreNsolic_keyNextItem() {
        console.log("Entering CMFCKCRE_crtlckcre_lckcreNsolic_keyNextItem");
        let V_CANTIDAD: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("LCKCRE_CODUNI", this.CRTLCKCRE.LCKCRE_CODUNI);
        payload1.set("LCKCRE_OFICIN", this.CRTLCKCRE.LCKCRE_OFICIN);
        payload1.set("LCKCRE_NSOLIC", this.CRTLCKCRE.LCKCRE_NSOLIC);
        // call REST API
        const result1 = await Rest.post("/cmfckcre_crtlckcre/cmfckcre_crtlckcre_lckcrensolic_keynextitem_query1", payload1);
        // get values from result
        V_CANTIDAD = result1[0].get("V_CANTIDAD");
        if (result1 == null || result1.length == 0) {

            V_CANTIDAD = 0;
        }

        if (V_CANTIDAD >= 1) {
            // CMFCKCRE_LIB$DTNERFRMA("LA OFICINA Y SOLICITUD INGRESADA NO ESTA EN ESTADO GR, POR FAVOR INGRESAR LA SOLICITUD Y OFICINA VALIDA. ");
        }
        console.log("Exiting CMFCKCRE_crtlckcre_lckcreNsolic_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // VBOTON NUMBER;
    // BEGIN
    //   IF (:PENDIENTES.SELECCION IS NULL) OR (:PENDIENTES.OFICINA IS NULL OR :PENDIENTES.SOLICITUD IS NULL) THEN   
    //    LIB$ALERTA ('MENSAJE','POR FAVOR SELECCIONE LA SOLICITUD QUE QUIERE ANALISIS DEL TERCERO.','ACEPTAR',NULL,NULL,VBOTON); 
    //   ELSE
    //    
    //    LIB$ALERTA ('MENSAJE','A CONTINUACIÓN VA HA VERIFICAR LOS DATOS DEL LA SOLICITUD '||:PENDIENTES.OFICINA||'-'||:PENDIENTES.SOLICITUD,'ACEPTAR','CANCELAR',NULL,VBOTON);   
    //   
    //      IF VBOTON = '1' THEN  
    //       
    //        GO_BLOCK('CRTLCKCRE');
    //      CLEAR_BLOCK; 
    //      GO_BLOCK('CRTLCKCAL');
    //      CLEAR_BLOCK;
    //      HIDE_VIEW('SOLI_PENDIENTES');
    //      
    //      :CRTLCKCRE.LCKCRE_CODUNI := :PENDIENTES.UNIDAD; --ARQUITECTURA 
    //         :CRTLCKCRE.LCKCRE_OFICIN := :PENDIENTES.OFICINA ;
    //         :CRTLCKCRE.LCKCRE_NSOLIC := :PENDIENTES.SOLICITUD;
    //         
    //         GO_ITEM('CRTLCKCRE.LCKCRE_NSOLIC');
    //         NEXT_ITEM;
    //      END IF;
    //   
    //   END IF;    
    // END;
    //#endregion
    async CMFCKCRE_crtlckcre_aceptar_whenButtonPressed() {
        console.log("Entering CMFCKCRE_crtlckcre_aceptar_whenButtonPressed");
        let VBOTON: number = null;
        if (((this.PENDIENTES.SELECCION == null) || ((this.PENDIENTES.OFICINA == null) || (this.PENDIENTES.SOLICITUD == null)))) {
            // CMFCKCRE_LIB$ALERTA("MENSAJE", "POR FAVOR SELECCIONE LA SOLICITUD QUE QUIERE ANALISIS DEL TERCERO.", "ACEPTAR", null, null, VBOTON);
        }
        else {
            // CMFCKCRE_LIB$ALERTA("MENSAJE", "A CONTINUACIÓN VA HA VERIFICAR LOS DATOS DEL LA SOLICITUD " + PENDIENTES.OFICINA + "-" + PENDIENTES.SOLICITUD, "ACEPTAR", "CANCELAR", null, VBOTON);
            if (VBOTON == 1) {
                this.oracleFormsBuiltins.go_block("CRTLCKCRE");
                this.oracleFormsBuiltins.clear_block();
                this.oracleFormsBuiltins.go_block("CRTLCKCAL");
                this.oracleFormsBuiltins.clear_block();
                this.oracleFormsBuiltins.hide_view("SOLI_PENDIENTES");
                this.CRTLCKCRE.LCKCRE_CODUNI = this.PENDIENTES.UNIDAD;
                this.CRTLCKCRE.LCKCRE_OFICIN = this.PENDIENTES.OFICINA;
                this.CRTLCKCRE.LCKCRE_NSOLIC = this.PENDIENTES.SOLICITUD;
                this.oracleFormsBuiltins.go_item("CRTLCKCRE.LCKCRE_NSOLIC");
                this.oracleFormsBuiltins.next_item();
            }
        }
        console.log("Exiting CMFCKCRE_crtlckcre_aceptar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    // 
    //  GO_ITEM('TIPO_REFERENCIA');
    //  GO_BLOCK('CRTLCKCAL');
    //  CLEAR_BLOCK;
    //  
    //  
    //  --MESSAGE('TIPO_PERSONACOATIPO_PERSONACOA'||:CRTLCKCRE.TIPO_PERSONACOA);
    //  --MESSAGE('TIPO_PERSONACOATIPO_PERSONACOA'||:CRTLCKCRE.TIPO_PERSONACOA);
    //  
    //  
    //  
    //  :CRTLCKCRE.TIPO_REFERENCIA := NULL;
    //  :CRTLCKCRE.SELECCION       := NULL;
    //  
    // END;
    //#endregion
    async CMFCKCRE_crtlckcre_tipoPersonacoa_whenListChanged() {
        console.log("Entering CMFCKCRE_crtlckcre_tipoPersonacoa_whenListChanged");
        this.oracleFormsBuiltins.go_item("TIPO_REFERENCIA");
        this.oracleFormsBuiltins.go_block("CRTLCKCAL");
        this.oracleFormsBuiltins.clear_block();
        this.CRTLCKCRE.TIPO_REFERENCIA = null;
        this.CRTLCKCRE.SELECCION = null;
        console.log("Exiting CMFCKCRE_crtlckcre_tipoPersonacoa_whenListChanged");
    }

    //#region PLSQL
    // BEGIN
    //  GO_BLOCK('CRTLCKCAL');
    //  CLEAR_BLOCK;
    //  :CRTLCKCRE.TIPO_REFERENCIA := NULL;
    //  :CRTLCKCRE.TIPO_PERSONACOA := NULL;
    //  :CRTLCKCRE.SELECCION       := NULL;
    //  
    //  IF NOT LIB$PBLARLSTARG('CRTLCKCRE.TIPO_PERSONACOA','LOV_TIPOPERSONA') THEN
    //         LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CRTLCKCRE.TIPO_PERSONACOA');
    //  END IF;
    //  GO_ITEM('TIPO_PERSONACOA');
    // END;
    //#endregion
    async CMFCKCRE_crtlckcre_tipoPersona_whenListChanged() {
        console.log("Entering CMFCKCRE_crtlckcre_tipoPersona_whenListChanged");
        this.oracleFormsBuiltins.go_block("CRTLCKCAL");
        this.oracleFormsBuiltins.clear_block();
        this.CRTLCKCRE.TIPO_REFERENCIA = null;
        this.CRTLCKCRE.TIPO_PERSONACOA = null;
        this.CRTLCKCRE.SELECCION = null;
        // if ((!LIB$PBLARLSTARG("CRTLCKCRE.TIPO_PERSONACOA", "LOV_TIPOPERSONA"))) {
        //     CMFCKCRE_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA CRTLCKCRE.TIPO_PERSONACOA");
        // }
        this.oracleFormsBuiltins.go_item("TIPO_PERSONACOA");
        console.log("Exiting CMFCKCRE_crtlckcre_tipoPersona_whenListChanged");
    }

}

