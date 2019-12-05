module.exports = function ({ types: t }) {
    return {
        visitor: {
            // Identifier(path, state) {},
            // ASTNodeTypeHere(path, state) {}

            BinaryExpression(path) {
                if (path.node.operator !== "===") {
                    return;
                }

                path.node.left = t.identifier("kiyola");
                path.node.right = t.identifier("yhw");
            }
        }
    };
};
