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
function log(target, propertyKey, descripter) {
    let startTime = Date.now();
    let originalMethod = descripter.value;
    console.log("tên hàm:", propertyKey);
    descripter.value = function (...args) {
        console.log("Tham số:", args);
        let result = originalMethod.apply(this, args);
        console.log("Kết quả:", result);
        console.log("thời gian thực thi hàm:", Date.now() - startTime, "ms");
    };
}
class Cal {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Cal.prototype, "add", null);
let cal1 = new Cal();
cal1.add(2, 3);
