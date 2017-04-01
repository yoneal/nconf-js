import * as vm from "vm";
import * as nconf from "nconf";

export default class JsFormat implements nconf.IFormat {
  stringify(obj: any, replacer?: any, spacing?: any) : string {
    let space = '',
      numSpace = (spacing || 2);
    for (let i=0; i < numSpace; i++) {
        space = space + ' ';
    }
    let prefix = 'module.exports' + space + '=' + space;
    let jsonStr = JSON.stringify(obj, replacer || null , numSpace);
    return prefix + jsonStr + ';';
  }

  parse(text: string) : any {
    let context = {module: {exports: {}}};
    vm.runInNewContext(text, context, {
      lineOffset: 0,
      displayErrors: true
    });
    let result = {};
    for (let key in context.module.exports) {
      result[key] = context.module.exports[key];
    }
    return result;
  }
}

declare module "nconf" {
  interface IFormats {
    js: nconf.IFormat;
  }
}
nconf.formats['js'] = new JsFormat();