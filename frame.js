let v = JSON.parse(require('fs').readFileSync(`${__dirname}/package.json`)).version;
let d = `\n\t@bixbyte-frame-lite\n\t___________________\nVersion\t${v}`;

console.log(d);


global.frame | {}; 

//@ Make the application essentials available
Object.assign( global, require( require("path").join( __dirname, `essentials/essentials.es6`) )  );

//@ Load the express server configuration file
require("./rest/rest.es6");

//@ Load the [ now overly] simplified mail service provision file
require("./mail/mail.es6");

module.exports = global;