"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var WarningAlert = (function () {
    function WarningAlert() {
    }
    return WarningAlert;
}());
WarningAlert = __decorate([
    core_1.Component({
        selector: 'app-warning-alert',
        template: "\n    <h1>SHOW THE ALERT: </h1>\n    <p>This is a warning !</p>\n    \n    ",
        styles: [
            "\n    h1 {\n      font-family: sans-serif;\n      color: brown;\n    }\n    \n    p {\n      text-align: center;\n      font-family: \"Malayalam MN\";\n      font-size: medium;\n      padding: 20px 40px;\n      background: lightpink;\n      border: 4px solid crimson;\n    }\n    \n    "
        ]
    })
], WarningAlert);
exports.WarningAlert = WarningAlert;
