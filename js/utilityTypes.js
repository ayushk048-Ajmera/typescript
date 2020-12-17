"use strict";
// Utility Types
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateTodo(todo, updateField) {
    var t = __assign(__assign({}, todo), updateField);
    return t;
}
var t = {
    id: 1,
    todo: "Utility types",
    description: "learning Utility types in typescript",
    complete: true,
};
console.log("before ", t);
t = updateTodo(t, {
    complete: false,
});
console.log("after ", t);
//readonly
var t2 = {
    id: 2,
    todo: "Utility types",
    description: "learning Utility types in typescript",
    complete: true,
};
console.log(t2);
var nav = {
    about: { title: "about" },
    contact: { title: "contact" },
    home: { title: "home" },
};
console.log(nav.contact);
var todo = {
    todo: "Clean room",
    complete: false,
};
console.log(todo);
var todo1 = {
    id: 4,
    todo: "Clean room",
    complete: false,
};
console.log(todo1);
var x = "c";
var y = "a";
console.log(x);
var z = 1;
