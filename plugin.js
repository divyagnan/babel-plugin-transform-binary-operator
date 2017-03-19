module.exports = function({ types: t }) {
  return {
    visitor: {
      BinaryExpression(path, state) {
        if (state.opts.twoToThree) {
          twoToThree(path, t)
        } else if (state.opts.threeToTwo) {
          threeToTwo(path, t)
        } else {
          return
        }
      }
    }
  }
}

function twoToThree(path, t) {
  if (path.node.operator === '==') {
    path.replaceWith(t.binaryExpression("===", path.node.left, path.node.right))
  } else {
    return
  }
}

function threeToTwo(path, t) {
  if (path.node.operator === '===') {
    path.replaceWith(t.binaryExpression("==", path.node.left, path.node.right))
  } else {
    return
  }
}
