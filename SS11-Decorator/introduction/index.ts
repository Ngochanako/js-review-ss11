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
function decoraterProperty<T extends {new (...args: any[]):{}}>(constructor:T){
    return class extends constructor{
        address="hà nội"
    };
}
@decoraterProperty
class Student{
    userName:string;
    constructor(name:string){
        this.userName=name;

    }
}
let std1=new Student("n")
//thêm thuộc tính age cho std1 bằng cách dùng decorater
console.log((std1));
//hàm và phương thức khác nhau ntn: 
//hàm :function tự định nghĩa, phương thức dùng trong đối tượng hoặc lớp
//map,filter,forEach là phương thức
//tạo function decoration cho function sum trong class Test phải có 3 đối số
function decorMethod(target:any,propertyKey:string,descripter:PropertyDescriptor){
    console.log(111,target);
    console.log(22,propertyKey);
    console.log(33,descripter);
    descripter.value=function(a:number,b:number){
        return (a+b)*2;
    }   
}
class Test{
    @decorMethod
    sum1(a:number,b:number) {
        return a+b;
    }
    sum2(a:number,b:number) {
        return a+b*2;
    }
}
let s1=new Test();
console.log(7,s1.sum1(1,2));
console.log((s1.sum2(1,2)));

