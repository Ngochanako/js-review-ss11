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
function memorize(target, propertyKey, descripter) {
    let originalMethod = descripter.value;
    let cache = {};
    descripter.value = function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key] * 2;
        }
        cache[key] = originalMethod.apply(this, args);
        return cache[key] * 3;
    };
    console.log(cache);
}
class Cal {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    memorize,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Cal.prototype, "add", null);
let cal1 = new Cal();
console.log(cal1.add(2, 3));
console.log(cal1.add(3, 3));
console.log(cal1.add(2, 3));
