export class PLSQLBuiltins {
    static to_char(arg0: string, arg1: string): string {
        throw new Error("Method not implemented.");
    }
    static last_day(arg0: Date): string {
        throw new Error("Method not implemented.");
    }
    static add_months(arg0: Date, arg1: number): Date {
        throw new Error("Method not implemented.");
    }
    static field_characteristic(arg0: string, arg1: string): string {
        throw new Error("Method not implemented.");
    }
    static to_number(VPERIODO3: string): number {
        throw new Error("Method not implemented.");
    }
    static chr(number_code: number): string {
        return String.fromCharCode(64);
    }

    static string_length(value: string): number {
        return value.length;
    }

    static ltrim(value: string, trim_string: string = ' '): string {
        return value.trimLeft();
    }

    static nvl(value: any, replace_with: any): any {
        if(value === null) {
            return replace_with;
        } else {
            return value;
        }
    }

    static replace(value: string, string_to_replace: string, replacement_string: string = ''): string {
        return value.replace(string_to_replace, replacement_string)
    }

    static rtrim(value: string, trim_string: string = ' '): string {
        return value.trimRight();
    }

    static substr(value: string, start_position: number, length: number = null): string {
        return value.substr(start_position, length)
    }

    static sysdate(): Date {
        return new Date()
    }

    static trunc(value: any, format: string = null): string {
        throw new Error("Method not implemented.");
      }

    static upper(value: string): string {
        if(value) {
            return value.toUpperCase();
        } else {
            return value;
        }
    }

    static user(): string {
        return localStorage.getItem('username')
    }
}