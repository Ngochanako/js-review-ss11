function paramValidate(validation:(...args:any[])=>boolean){
    return function(target:any,propertyKey:string,descripter:PropertyDescriptor){
        let originalMethod=descripter.value;
        descripter.value=function(...args:any[]){
            if(validation(...args)){
                return originalMethod.apply(this,args);
            }else{
                throw new Error("Invalid");
            }
        }
    }
}
function Validation(...args:any[]):boolean{
    return args.every(item=>typeof(item)==='number');
}
class Cal{
    @paramValidate(Validation)
    add(a:number,b:number):number{
        return a+b;
    }
}
let cal=new Cal();
    console.log(cal.add(1,2));
    console.log(cal.add(1,'2'));


