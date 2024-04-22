function log(target:any,propertyKey:string,descripter:PropertyDescriptor){
    let startTime=Date.now();
    let originalMethod=descripter.value;
    console.log("tên hàm:",propertyKey);
    descripter.value=function(...args:any[]){
        console.log("Tham số:",args);
        let result=originalMethod.apply(this,args);
        console.log("Kết quả:",result)
        console.log("thời gian thực thi hàm:",Date.now()-startTime,"ms")
    }
}
class Cal{
    @log
    add(a:number,b:number):number{
        return a+b;
    }
}
let cal1=new Cal();
cal1.add(2,3);
