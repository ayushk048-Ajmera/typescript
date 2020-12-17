"use strict";
//  namespace and modules
Object.defineProperty(exports, "__esModule", { value: true });
var namespace_1 = require("./namespace");
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new namespace_1.Validation.ZipCodeValidator();
validators["Letters only"] = new namespace_1.Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s_1 = strings_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s_1 + "\" - " + (validators[name_1].isAcceptable(s_1) ? "matches" : "does not match") + " " + name_1);
    }
}
