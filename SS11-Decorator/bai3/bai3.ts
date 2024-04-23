function memorize(target:any,propertyKey:string,descripter:PropertyDescriptor){
    let originalMethod=descripter.value;
    let cache:{[key:string]:any}={};
    descripter.value=function(...args:any[]){
        const key=JSON.stringify(args)
        if(cache[key]){
            return cache[key]*2;
        }
        cache[key]=originalMethod.apply(this,args);
        return cache[key]*3;
    }
    console.log(cache);
}
class Cal{
    @memorize
    add(a:number,b:number):number{
        return a+b;
    }
}
let cal1=new Cal();
console.log(cal1.add(2,3));
console.log(cal1.add(3,3));
console.log(cal1.add(2,3));
