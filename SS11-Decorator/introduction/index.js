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
/*
decorator là những hàm nhằm bổ sung cho class,method,prperty cho đối tượng
Decorator trong typescript chia làm 5 loại:
1.class
2.method
3.property
4.param
5.accessor
===> phạm vi áp dụng:netjs
cú pháp:@
*/
//function decorater để thêm thuộc tính
function decoraterProperty(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.address = "hà nội";
        }
    };
}
let Student = class Student {
    constructor(name) {
        this.userName = name;
    }
};
Student = __decorate([
    decoraterProperty,
    __metadata("design:paramtypes", [String])
], Student);
let std1 = new Student("n");
//thêm thuộc tính age cho std1 bằng cách dùng decorater
console.log((std1));
//hàm và phương thức khác nhau ntn: 
//hàm :function tự định nghĩa, phương thức dùng trong đối tượng hoặc lớp
//map,filter,forEach là phương thức
//tạo function decoration cho function sum trong class Test phải có 3 đối số
function decorMethod(target, propertyKey, descripter) {
    console.log(111, target);
    console.log(22, propertyKey);
    console.log(33, descripter);
    descripter.value = function (a, b) {
        return (a + b) * 2;
    };
}
class Test {
    sum1(a, b) {
        return a + b;
    }
    sum2(a, b) {
        return a + b * 2;
    }
}
__decorate([
    decorMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Test.prototype, "sum1", null);
let s1 = new Test();
console.log(7, s1.sum1(1, 2));
console.log((s1.sum2(1, 2)));
