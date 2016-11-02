var debug = require('debug')('example');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

var s1 = "test";
var s2 = s1;
var n = 16;

debug(s2);
debug(n.toString());
debug(n.toString(8));
debug(n.toString(16));

test('### Some tests - primitive data types ###', function(t) {
    var n = 15;
    t.deepEqual('F', n.toString(16).toUpperCase(), 'Number to string');
    t.end();
    var k;
    t.equal(k,undefined, 'Variable is undefined');
    var k2 = undefined;
    t.equal(k2,undefined, 'Variable is undefined');
    var k3 = null;
    t.ok(k3 == undefined, 'null equal to undefined with ==');
    t.notOk(k3 === k2, 'null not equal to undefined with ===');
    debug('Arithmetic operations:');
    t.equal('2' - 2, 0, 'string is converted to number in substraction');
    t.equal('2' + 2, '22', 'number is converted to string in addition');
    t.equal('3' + true, '3true', 'boolean is converted to string');
    t.equal(3 + false, 3, 'false is converted to 0');
    t.equal(3 + null, 3, 'null is converted to 0' );
    t.equal(isNaN(3 + undefined), true, 'undefined is coerced to NaN');
});