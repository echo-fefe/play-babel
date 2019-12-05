import * as t from "babel-types"
import generate from "babel-generator";
import template from "babel-template";

const buildRequire = template(`
    var IMPORT_NAME = require(SOURCE);
`);

const ast = buildRequire({
    IMPORT_NAME: t.identifier("myModule"),
    SOURCE: t.stringLiteral("my-module")
});

console.log(generate(ast).code);

