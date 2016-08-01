/**
 * Created by olevabel on 8/1/16.
 */
export class Error {
    code: number;
    message: string;

    constructor(code: number, message: string) {
        this.code = code;
        this.message = message;
    }

}