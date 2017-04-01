import * as nconf from "nconf";
export default class JsFormat implements nconf.IFormat {
    stringify(obj: any, replacer?: any, spacing?: any): string;
    parse(text: string): any;
}
declare module "nconf" {
    interface IFormats {
        js: nconf.IFormat;
    }
}
