var M1 = require('./m1.js');
var M2 = require('./m2.js');

var o1 = new M1(2, "djani", true, null, undefined);
var o2 = new M2();
o2.printProperties(o1);