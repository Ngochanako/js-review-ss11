"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function paramValidate(validation) {
    return function (target, propertyKey, descripter) {
        let originalMethod = descripter.value;
        descripter.value = function (...args) {
            if (validation(...args)) {
                return originalMethod.apply(this, args);
            }
            else {
                throw new Error("Invalid");
            }
        };
    };
}
function Validation(...args) {
    return args.every(item => typeof (item) === 'number');
}
class Cal {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    paramValidate(Validation),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Cal.prototype, "add", null);
let cal = new Cal();
console.log(cal.add(1, 2));
console.log(cal.add(1, '2'));
