# `babel-plugin-transform-binary-operator`

*This repo was made strictly for educational purposes*

> This plugin (see `plugin.js`) allows you to transform abstract equality comparison (==) to strict eqaulity comparison (===) and vice-versa

#### Configuration

In your `.babelrc` add the plugin `plugin.js` to your array of plugins. This plugin has two options available, `twoToThree` which will convert all abstract equality comparisons (==) to strict equality comparisons (===) and `threeToTwo`, which will go in the other direction (strict to abstract). You must specify one of the two options to be true, otherwise nothing happens.

``` json
 {
  "plugins": [
    ["./plugin.js", {
      "twoToThree": true,
      "threeToTwo": false
    }]
  ]
}
```

#### Examples

You can see what happens when you run babel with this plugin by looking at both the `test.js` file and the `compiled.js` file. `test.js` contains the comparisons prior to transformation and `compiled.js` has them after. In this case the `twoToThree` option was turned on.

test.js
``` javascript
// binary expressions with ==
"a" == "a"
"b" == "a"
1 == 2
3 == 3

// binary expressions with ===
"a" === "a"
"b" === "a"
1 === 2
3 === 3
```

compiled.js
``` javascript
// binary expressions with ==
"a" === "a";
"b" === "a";
1 === 2;
3 === 3;

// binary expressions with ===
"a" === "a";
"b" === "a";
1 === 2;
3 === 3;
```

As you can see all of the abstract eqaulity operators were replaced by strict equality operators.

#### Why?

This was made so that I could better understand babel/babel plugins and learn enough to make more useful plugins.
