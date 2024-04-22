function log(target:any,propertyKey:string,descripter:PropertyDescriptor){
    let originalMethod=descripter.value;
    descripter.value=function(...args:any[]){
        console.log("Tên hàm:",propertyKey);
        console.log("Tham số:",args);
        let result=originalMethod.apply(this,args);
        console.log("Kết quả trả về:",result);
    }
}
class Calculater{
    @log
    add(a:number,b:number):number{
        return a+b;
    }
}
let cal=new Calculater();
cal.add(1,2);


