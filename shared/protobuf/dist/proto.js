/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots.tauriApp || ($protobuf.roots.tauriApp = new $protobuf.Root()))
.addJSON({
  Greet: {
    fields: {
      name: {
        rule: "required",
        type: "string",
        id: 1
      }
    }
  },
  GreetCallback: {
    fields: {
      message: {
        rule: "required",
        type: "string",
        id: 1
      }
    }
  }
});

module.exports = $root;
