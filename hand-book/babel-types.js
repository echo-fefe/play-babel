import traverse from "babel-traverse"
import * as t from "babel-types"
import * as babylon from "babylon";

const code = `function square(n) {
  return n * n;
}`;

const ast = babylon.parse(code);

traverse(ast, {
    enter(path, state) {
        if (t.isIdentifier(path.node, { name: "n"})) {
            path.node.name = "x";
        }
    }
});
