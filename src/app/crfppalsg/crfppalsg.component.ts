import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFPPALSG business logic
import {
    PARAMETROS,
    TOOLBAR,
    BASE
} from "./CRFPPALSG_models";



// class CRFPPALSG
@Component({
    selector: 'app-crfppalsg',
    templateUrl: './crfppalsg.component.html',
})
export class CrfppalsgComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
        ['OFICINA', null],
        ['TERCERO', null],
        ['SOLICITUD', null],
        ['CONTROL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public PARAMETROS: PARAMETROS = new PARAMETROS();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPPALSG_whenMouseDoubleclick() {
        console.log("Entering CRFPPALSG_whenMouseDoubleclick");
        console.log("Exiting CRFPPALSG_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPPALSG_whenNewFormInstance() {
        console.log("Entering CRFPPALSG_whenNewFormInstance");
        console.log("Exiting CRFPPALSG_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPPALSG_preForm() {
        console.log("Entering CRFPPALSG_preForm");
        console.log("Exiting CRFPPALSG_preForm");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD ='FALSE' THEN
    //     DOWN;
    //  END IF;
    // END;
    //#endregion
    async CRFPPALSG_keyDown() {
        console.log("Entering CRFPPALSG_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFPPALSG_keyDown");
    }

    //#region PLSQL
    // DECLARE  
    //  PL_ID        PARAMLIST;
    //   PL_NOMBRE    VARCHAR2(10) := 'OFICINA';
    // BEGIN
    //        
    //        PL_ID := GET_PARAMETER_LIST(PL_NOMBRE);
    //     
    //        IF ID_NULL(PL_ID) THEN
    //             PL_ID := CREATE_PARAMETER_LIST(PL_NOMBRE); 
    //     
    //             IF ID_NULL(PL_ID) THEN 
    //                 MESSAGE('ERROR CREANDO LISTA DE PARÁMETROS ');
    //          RAISE FORM_TRIGGER_FAILURE;
    //             ELSE
    //                -- AGREGAR LOS PARÁMETROS A LA LISTA.
    //                ADD_PARAMETER(PL_ID, 'P_OFICINA', "TEXT_PARAMETER", :this.PARAMETER.get("P_OFICINA"));
    //                ADD_PARAMETER(PL_ID, 'P_UNIDAD' , "TEXT_PARAMETER", :this.PARAMETER.get("P_UNIDAD")); --ARQUITECTURA
    //                
    //             END IF; 
    //         ELSE
    //             DELETE_PARAMETER(PL_ID, 'P_OFICINA');
    //             DELETE_PARAMETER(PL_ID, 'P_UNIDAD'); --ARQUITECTURA
    //             ADD_PARAMETER(PL_ID, 'P_OFICINA', "TEXT_PARAMETER",  :this.PARAMETER.get("P_OFICINA"));
    //             ADD_PARAMETER(PL_ID, 'P_UNIDAD' , "TEXT_PARAMETER", :this.PARAMETER.get("P_UNIDAD")); --ARQUITECTURA
    //         END IF;
    //  
    //       IF :this.PARAMETER.get("P_OFICINA") IS NOT NULL THEN        
    //             CALL_FORM('CRFESTDOC',  NO_HIDE, DO_REPLACE,NO_QUERY_ONLY,PL_ID);
    //       ELSE   
    //               CALL_FORM('CRFESTDOC',  NO_HIDE, DO_REPLACE);
    //     END IF;
    // END;
    //#endregion
    async CRFPPALSG_parametros_crear_whenButtonPressed() {
        console.log("Entering CRFPPALSG_parametros_crear_whenButtonPressed");
        let PL_ID: any = null;
        let PL_NOMBRE: string = 'OFICINA';
        PL_ID = this.oracleFormsBuiltins.get_parameter_list(PL_NOMBRE);
        if (this.oracleFormsBuiltins.id_null(PL_ID)) {
            PL_ID = this.oracleFormsBuiltins.create_parameter_list(PL_NOMBRE);
            if (this.oracleFormsBuiltins.id_null(PL_ID)) {
                this.oracleFormsBuiltins.message("ERROR CREANDO LISTA DE PARÁMETROS ");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                this.oracleFormsBuiltins.add_parameter(PL_ID, "P_OFICINA", "TEXT_PARAMETER", this.PARAMETER.get("P_OFICINA"));
                this.oracleFormsBuiltins.add_parameter(PL_ID, "P_UNIDAD", "TEXT_PARAMETER", this.PARAMETER.get("P_UNIDAD"));
            }
        }
        else {
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "P_OFICINA");
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "P_UNIDAD");
            this.oracleFormsBuiltins.add_parameter(PL_ID, "P_OFICINA", "TEXT_PARAMETER", this.PARAMETER.get("P_OFICINA"));
            this.oracleFormsBuiltins.add_parameter(PL_ID, "P_UNIDAD", "TEXT_PARAMETER", this.PARAMETER.get("P_UNIDAD"));
        }
        if ((this.PARAMETER.get("P_OFICINA") != null)) {
            this.oracleFormsBuiltins.call_form("CRFESTDOC", "NO_HIDE", "DO_REPLACE", "NO_QUERY_ONLY", PL_ID);
        }
        else {
            this.oracleFormsBuiltins.call_form("CRFESTDOC", "NO_HIDE", "DO_REPLACE");
        }
        console.log("Exiting CRFPPALSG_parametros_crear_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN CALL_FORM('CRFCONSG'); END;
    //#endregion
    async CRFPPALSG_parametros_consultar_whenButtonPressed() {
        console.log("Entering CRFPPALSG_parametros_consultar_whenButtonPressed");
        this.oracleFormsBuiltins.call_form("CRFCONSG");
        console.log("Exiting CRFPPALSG_parametros_consultar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE  
    //  PL_ID        PARAMLIST;
    //   PL_NOMBRE    VARCHAR2(10) := 'OFICINA';
    // BEGIN
    //        
    //        PL_ID := GET_PARAMETER_LIST(PL_NOMBRE);
    //     
    //        IF ID_NULL(PL_ID) THEN
    //             PL_ID := CREATE_PARAMETER_LIST(PL_NOMBRE); 
    //     
    //             IF ID_NULL(PL_ID) THEN 
    //                 MESSAGE('ERROR CREANDO LISTA DE PARÁMETROS ');
    //          RAISE FORM_TRIGGER_FAILURE;
    //             ELSE
    //                -- AGREGAR LOS PARÁMETROS A LA LISTA.
    //                ADD_PARAMETER(PL_ID, 'P_OFICINA', "TEXT_PARAMETER", :this.PARAMETER.get("P_OFICINA"));
    //                ADD_PARAMETER(PL_ID, 'P_UNIDAD' , "TEXT_PARAMETER", :this.PARAMETER.get("P_UNIDAD")); --ARQUITECTURA
    //                
    //             END IF; 
    //         ELSE
    //             DELETE_PARAMETER(PL_ID, 'P_OFICINA');
    //             DELETE_PARAMETER(PL_ID, 'P_UNIDAD'); --ARQUITECTURA
    //             ADD_PARAMETER(PL_ID, 'P_OFICINA', "TEXT_PARAMETER",  :this.PARAMETER.get("P_OFICINA"));
    //             ADD_PARAMETER(PL_ID, 'P_UNIDAD' , "TEXT_PARAMETER", :this.PARAMETER.get("P_UNIDAD")); --ARQUITECTURA
    //             
    //         END IF;
    //  
    //       IF :this.PARAMETER.get("P_OFICINA") IS NOT NULL THEN        
    //             CALL_FORM('CRFDOCVE',  NO_HIDE, DO_REPLACE,NO_QUERY_ONLY,PL_ID);
    //       ELSE   
    //               CALL_FORM('CRFDOCVE',  NO_HIDE, DO_REPLACE);
    //     END IF;
    // END;
    //#endregion
    async CRFPPALSG_parametros_seguimto_whenButtonPressed() {
        console.log("Entering CRFPPALSG_parametros_seguimto_whenButtonPressed");
        let PL_ID: any = null;
        let PL_NOMBRE: string = 'OFICINA';
        PL_ID = this.oracleFormsBuiltins.get_parameter_list(PL_NOMBRE);
        if (this.oracleFormsBuiltins.id_null(PL_ID)) {
            PL_ID = this.oracleFormsBuiltins.create_parameter_list(PL_NOMBRE);
            if (this.oracleFormsBuiltins.id_null(PL_ID)) {
                this.oracleFormsBuiltins.message("ERROR CREANDO LISTA DE PARÁMETROS ");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                this.oracleFormsBuiltins.add_parameter(PL_ID, "P_OFICINA", "TEXT_PARAMETER", this.PARAMETER.get("P_OFICINA"));
                this.oracleFormsBuiltins.add_parameter(PL_ID, "P_UNIDAD", "TEXT_PARAMETER", this.PARAMETER.get("P_UNIDAD"));
            }
        }
        else {
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "P_OFICINA");
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "P_UNIDAD");
            this.oracleFormsBuiltins.add_parameter(PL_ID, "P_OFICINA", "TEXT_PARAMETER", this.PARAMETER.get("P_OFICINA"));
            this.oracleFormsBuiltins.add_parameter(PL_ID, "P_UNIDAD", "TEXT_PARAMETER", this.PARAMETER.get("P_UNIDAD"));
        }
        if ((this.PARAMETER.get("P_OFICINA") != null)) {
            this.oracleFormsBuiltins.call_form("CRFDOCVE", "NO_HIDE", "DO_REPLACE", "NO_QUERY_ONLY", PL_ID);
        }
        else {
            this.oracleFormsBuiltins.call_form("CRFDOCVE", "NO_HIDE", "DO_REPLACE");
        }
        console.log("Exiting CRFPPALSG_parametros_seguimto_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE  
    //  PL_ID        PARAMLIST;
    //   PL_NOMBRE    VARCHAR2(10) := 'OFICINA';
    // BEGIN
    //        
    //        PL_ID := GET_PARAMETER_LIST(PL_NOMBRE);
    //     
    //        IF ID_NULL(PL_ID) THEN
    //             PL_ID := CREATE_PARAMETER_LIST(PL_NOMBRE); 
    //     
    //             IF ID_NULL(PL_ID) THEN 
    //                 MESSAGE('ERROR CREANDO LISTA DE PARÁMETROS ');
    //          RAISE FORM_TRIGGER_FAILURE;
    //             ELSE
    //                -- AGREGAR LOS PARÁMETROS A LA LISTA.
    //                ADD_PARAMETER(PL_ID, 'P_OFICINA', "TEXT_PARAMETER", :this.PARAMETER.get("P_OFICINA"));
    //                ADD_PARAMETER(PL_ID, 'P_UNIDAD' , "TEXT_PARAMETER", :this.PARAMETER.get("P_UNIDAD")); --ARQUITECTURA
    //                
    //             END IF; 
    //         ELSE
    //             DELETE_PARAMETER(PL_ID, 'P_OFICINA');
    //             DELETE_PARAMETER(PL_ID, 'P_UNIDAD'); --ARQUITECTURA
    //             ADD_PARAMETER(PL_ID, 'P_OFICINA', "TEXT_PARAMETER",  :this.PARAMETER.get("P_OFICINA"));
    //             ADD_PARAMETER(PL_ID, 'P_UNIDAD' , "TEXT_PARAMETER", :this.PARAMETER.get("P_UNIDAD")); --ARQUITECTURA
    //             
    //         END IF;
    //  
    //       IF :this.PARAMETER.get("P_OFICINA") IS NOT NULL THEN        
    //             CALL_FORM('CRFRADICA',  NO_HIDE, DO_REPLACE,NO_QUERY_ONLY,PL_ID);
    //       ELSE   
    //               CALL_FORM('CRFRADICA',  NO_HIDE, DO_REPLACE);
    //     END IF;
    // END;
    //#endregion
    async CRFPPALSG_parametros_radicar_whenButtonPressed() {
        console.log("Entering CRFPPALSG_parametros_radicar_whenButtonPressed");
        let PL_ID: any = null;
        let PL_NOMBRE: string = 'OFICINA';
        PL_ID = this.oracleFormsBuiltins.get_parameter_list(PL_NOMBRE);
        if (this.oracleFormsBuiltins.id_null(PL_ID)) {
            PL_ID = this.oracleFormsBuiltins.create_parameter_list(PL_NOMBRE);
            if (this.oracleFormsBuiltins.id_null(PL_ID)) {
                this.oracleFormsBuiltins.message("ERROR CREANDO LISTA DE PARÁMETROS ");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                this.oracleFormsBuiltins.add_parameter(PL_ID, "P_OFICINA", "TEXT_PARAMETER", this.PARAMETER.get("P_OFICINA"));
                this.oracleFormsBuiltins.add_parameter(PL_ID, "P_UNIDAD", "TEXT_PARAMETER", this.PARAMETER.get("P_UNIDAD"));
            }
        }
        else {
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "P_OFICINA");
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "P_UNIDAD");
            this.oracleFormsBuiltins.add_parameter(PL_ID, "P_OFICINA", "TEXT_PARAMETER", this.PARAMETER.get("P_OFICINA"));
            this.oracleFormsBuiltins.add_parameter(PL_ID, "P_UNIDAD", "TEXT_PARAMETER", this.PARAMETER.get("P_UNIDAD"));
        }
        if ((this.PARAMETER.get("P_OFICINA") != null)) {
            this.oracleFormsBuiltins.call_form("CRFRADICA", "NO_HIDE", "DO_REPLACE", "NO_QUERY_ONLY", PL_ID);
        }
        else {
            this.oracleFormsBuiltins.call_form("CRFRADICA", "NO_HIDE", "DO_REPLACE");
        }
        console.log("Exiting CRFPPALSG_parametros_radicar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_PRIVIL  VARCHAR2(15);
    // BEGIN
    //   BEGIN
    //  SELECT USU_PRIVIL
    //    INTO V_PRIVIL
    //    FROM SGUSUARIOS
    //    WHERE USU_CODIGO = :BASE.USUARIO
    //    AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //    ;
    //   EXCEPTION WHEN OTHERS THEN
    //    V_PRIVIL := NULL;
    //   END;
    // IF V_PRIVIL = 'S' THEN
    //  CALL_FORM('COFGARAN');
    // ELSE
    //  LIB$DTNERFRMA('EL USUARIO NO TIENE PERMISO SOBRE ESTA OPCIÓN.');
    // END IF;
    // 
    // END;
    //  
    //#endregion
    async CRFPPALSG_parametros_garantias_whenButtonPressed() {
        console.log("Entering CRFPPALSG_parametros_garantias_whenButtonPressed");
        let V_PRIVIL: string = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("USUARIO", this.BASE.USUARIO);
            payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
            // call REST API
            const result1 = await Rest.post("/crfppalsg_parametros/crfppalsg_parametros_garantias_whenbuttonpressed_query1", payload1);
            // get values from result
            V_PRIVIL = result1[0].get("V_PRIVIL");
        } catch (ex) {

            V_PRIVIL = null;
        }

        if (V_PRIVIL == "S") {
            this.oracleFormsBuiltins.call_form("COFGARAN");
        }
        else {
            // CRFPPALSG_LIB$DTNERFRMA("EL USUARIO NO TIENE PERMISO SOBRE ESTA OPCIÓN.");
        }
        console.log("Exiting CRFPPALSG_parametros_garantias_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('CARACIAL3.BMP'  ,'BMP','VARIABLE.CARATULA'); END;
    //#endregion
    async CRFPPALSG_parametros_caratula_whenMouseClick() {
        console.log("Entering CRFPPALSG_parametros_caratula_whenMouseClick");
        this.oracleFormsBuiltins.read_image_file("CARACIAL3.BMP", "BMP", "VARIABLE.CARATULA");
        console.log("Exiting CRFPPALSG_parametros_caratula_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPPALSG_toolbar_whenButtonPressed() {
        console.log("Entering CRFPPALSG_toolbar_whenButtonPressed");
        console.log("Exiting CRFPPALSG_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPPALSG_toolbar_whenMouseLeave() {
        console.log("Entering CRFPPALSG_toolbar_whenMouseLeave");
        console.log("Exiting CRFPPALSG_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPPALSG_toolbar_whenNewFormInstance() {
        console.log("Entering CRFPPALSG_toolbar_whenNewFormInstance");
        console.log("Exiting CRFPPALSG_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPPALSG_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFPPALSG_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFPPALSG_base_fecha_whenNewItemInstance");
    }

}

