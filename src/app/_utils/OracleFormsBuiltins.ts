import { ItemInputComponent } from '../item-input/item-input.component';

export class OracleFormsBuiltins {

    constructor(private _context) { }

    /*GO_BLOCK navigates to an indicated block. If the target block is non-enterable, an error occurs.*/
    go_block(block_name: string) {
        const selectedBlock = this._context.blockComponents.find((bc) => bc.blockName == block_name);
        console.log('Selected block', selectedBlock)
        this._context.currentBlock = selectedBlock;
    }
    //-------------------------

    /*Flushes the current block, opens a query, and fetches a number of selected records. If there are changes
    to commit, Form Builder prompts the operator to commit them before continuing EXECUTE_QUERY
    processing.*/
    execute_query(keyword_one: string = null, keyword_two: string = null, locking: string = null) {
        this._context.currentBlock.execute_query();
    }
    //-------------------------

    /*Reads an image of the given type from the given file and displays it in the Form Builder image item.*/
    read_image_file(file_name: string, file_type: string, item_name: string) {
        const [blockName, fieldName] = item_name.split('.')
        this._context[blockName][fieldName] = file_name;
    }
    //-------------------------

    /*Removes an indicated global variable, so that it no longer exists, and releases the memory associated
    with the global variable. Globals always allocate 255 bytes of storage. To ensure that performance is
    not impacted more than necessary, always erase any global variable when it is no longer ne*/
    erase(global_variable_name: string) { // remove global variable
        localStorage.removeItem(global_variable_name)
    }

    /*Displays the indicated canvas at the coordinates specified by the canvas’s X Position and Y Position
    property settings. If the view is already displayed, SHOW_VIEW raises it in front of any other views in
    the same window.*/
    show_view(view_or_name) {
        this._context.visibleCanvases.add(view_or_name)
    }

    /*Displays specified text on the message line.*/
    message(message_string: string, user_response: number = null) {
        this._context.MESSAGE_LINE = message_string;
    }

    /*Copies an indicated value to an indicated variable if the variable’s current value is NULL. If the
    variable’s current value is not NULL, DEFAULT_VALUE does nothing. Therefore, for text items this
    built-in works identically to using the COPY built-in on a NULL item. If the variable is an undefined
    global variable, Form Builder creates the variable.*/
    default_value(value_string: string, variable_name: string) {
        if (variable_name.toLowerCase().startsWith('global')) {
            const globalVariableName = variable_name.toLowerCase().replace('global.', '')
            if (localStorage.getItem(globalVariableName) == null) {
                localStorage.setItem(globalVariableName, value_string)
            }
        } else {
            if (this._context[variable_name] == null) {
                this._context[variable_name] = value_string;
            }
        }
    }

    set_item_property(itemName: string, propertyName: string, propertyValue: any) {
        const item = this._context.itemInputComponents.find((input: ItemInputComponent) => {
            return input.name && input.name.toUpperCase() == itemName.toUpperCase()
        })
        if(!item) return;
        if(propertyName.toUpperCase() == 'UPDATEABLE') {
            item.setProperty('UPDATE_ALLOWED', propertyValue.toUpperCase())
        } else {
            item.setProperty(propertyName.toUpperCase(), propertyValue.toUpperCase())
        }
    }

    error_type(): string {
        throw new Error("Method not implemented.");
    }
    pause() {
        throw new Error("Method not implemented.");
    }
    clear_form(arg0: string = null, arg1: string = null) {
        throw new Error("Method not implemented.");
    }
    set_alert_property(arg0: string, arg1: string, arg2: string) {
        throw new Error("Method not implemented.");
    }
    form_success(): boolean {
        throw new Error("Method not implemented.");
    }
    previous_record() {
        throw new Error("Method not implemented.");
    }
    block_menu() {
        throw new Error("Method not implemented.");
    }
    get_view_property(arg0: string, arg1: string): string {
        throw new Error("Method not implemented.");
    }
    get_group_row_count(arg0: string): number {
        throw new Error("Method not implemented.");
    }
    error_code(): number {
        throw new Error("Method not implemented.");
    }
    dbms_error_code(): number {
        throw new Error("Method not implemented.");
    }
    find_editor(arg0: string): null {
        throw new Error("Method not implemented.");
    }
    show_editor(arg0: null, arg1: string, arg2: number, arg3: number, arg4: string, arg5: boolean) {
        throw new Error("Method not implemented.");
    }
    show_lov(arg0: string, arg1: number = null, arg2: number = null): boolean {
        throw new Error("Method not implemented.");
    }
    get_block_property(arg0: string, STATUS: any): string {
        throw new Error("Method not implemented.");
    }
    do_key(arg0: string) {
        throw new Error("Method not implemented.");
    }
    go_record(arg0: any) {
        throw new Error("Method not implemented.");
    }
    get_form_property(arg0: string, FIRST_NAVIGATION_BLOCK: any): string {
        throw new Error("Method not implemented.");
    }
    static last_day(arg0: Date): Date {
        throw new Error("Method not implemented.");
    }
    get_item_property(arg0: string, arg1: any): string {
        throw new Error("Method not implemented.");
    }
    forms_ddl(arg0: string) {
        throw new Error("Method not implemented.");
    }
    set_application_property(arg0: string, arg1: string) {
        throw new Error("Method not implemented.");
    }
    synchronize() {
        throw new Error("Method not implemented.");
    }
    call_form(arg0: string, arg1: string = null, arg2: string = null, arg3: string = null, arg4: any = null) {
        throw new Error("Method not implemented.");
    }
    delete_parameter(PL_ID: any, arg1: string) {
        throw new Error("Method not implemented.");
    }
    set_block_property(arg0: string, arg1: any, arg2: string) {
        throw new Error("Method not implemented.");
    }
    clear_record() {
        throw new Error("Method not implemented.");
    }
    last_record() {
        throw new Error("Method not implemented.");
    }
    first_record() {
        throw new Error("Method not implemented.");
    }
    clear_list(IT_ID: number) {
        throw new Error("Method not implemented.");
    }
    find_item(arg0: string): null {
        throw new Error("Method not implemented.");
    }
    get_file_name(arg0: string, arg1: any = null): string {
        throw new Error("Method not implemented.");
    }
    hide_window(arg0: string) {
        throw new Error("Method not implemented.");
    }
    find_relation(arg0: string): any {
        throw new Error("Method not implemented.");
    }
    static lpad(arg0: string, arg1: number, arg2: string): string {
        throw new Error("Method not implemented.");
    }
    redisplay() {
        throw new Error("Method not implemented.");
    }
    run_product(REPORTS: any, arg1: string, arg2: any, arg3: any, arg4: any, arg5: any, arg6: null) {
        throw new Error("Method not implemented.");
    }
    add_parameter(PL_ID: any, arg1: string, arg2: any, arg3: string) {
        throw new Error("Method not implemented.");
    }
    create_parameter_list(arg0: string): any {
        throw new Error("Method not implemented.");
    }
    destroy_parameter_list(arg0: any) {
        throw new Error("Method not implemented.");
    }
    id_null(PL_ID: any): boolean {
        throw new Error("Method not implemented.");
    }
    get_parameter_list(arg0: string): any {
        throw new Error("Method not implemented.");
    }
    next_record() {
        throw new Error("Method not implemented.");
    }
    next_block() {
        throw new Error("Method not implemented.");
    }
    exit_form(arg0: string = null) {
        throw new Error("Method not implemented.");
    }
    next_item() {
        throw new Error("Method not implemented.");
    }
    go_item(arg0: string) {
        throw new Error("Method not implemented.");
    }
    get_application_property(CONNECT_STRING: any): string {
        throw new Error("Method not implemented.");
    }
    hide_view(arg0: string) {
        throw new Error("Method not implemented.");
    }
    list_values(arg0: string = null) {
        throw new Error("Method not implemented.");
    }
    up() {
        throw new Error("Method not implemented.");
    }
    enter_query() {
        throw new Error("Method not implemented.");
    }
    clear_block(arg0: any = null) {
        throw new Error("Method not implemented.");
    }
    down() {
        throw new Error("Method not implemented.");
    }
    delete_record() {
        throw new Error("Method not implemented.");
    }
    get(arg0: string): string {
        throw new Error("Method not implemented.");
    }
    enter() {
        throw new Error("Method not implemented.");
    }
    create_record() {
        throw new Error("Method not implemented.");
    }
    commit_form() {
        throw new Error("Method not implemented.");
    }

}


