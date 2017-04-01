import 'mocha';
import * as should from 'should';
let persist = should;

import JSFormat from '../src/index';

describe('JSFormat', function() {
  it('stringify & parse should work', function () {
    let obj = { foo: 'bar' };
    let lib = new JSFormat();
    obj.should.eql(lib.parse(lib.stringify(obj)));
  });
});