function student(){
    student_name="shivani";
    pin=20;
    branch="ECE";
    document.write("name is:"+student_name+" "+"pin is:"+pin);
}
student();
function add(a,b){
    c=a+b;
    document.write("<h1>"+c+"</h1>");
}
add(4,6);
function sub(a,b){
    return a-b;
}
//  var diff=sub(5,3);
//  document.write(diff);
document.write(sub(5,3));
// @@@@@@@@@@@@@@@@@@Array@@@@@@@@@@@@@@@
var nums=[1,2,4,5,5,6,7,8];
document.write("<h1>"+nums[5]+"<h1>");
for(var i=0;i<nums.length;i++){
    document.write(nums[i]);

}
document.write("<br>")
nums.push(10);

for(var i=0;i<nums.length;i++){
    document.write(" "+ nums[i]);

}
document.write("<br>")
var names=new Array("shi","mani","sra","sar");
for(var i=0;i<names.length;i++){
    document.write(" "+names[i]);
}

// *******************objects****************
document.write("<br>")
 function cars(car_brand,car_model,car_price){
    this.car_brand=car_brand;
    this.car_model=car_model;
    this.car_price=car_price;
    this.taslaauto=function(){
        document.write("function")
    }

 }
 var c1=new cars("tesla","model",30000);
 var c2=new cars("audi","model2",40000);
 document.write(c1.car_brand);
 document.write("<br>")
 c2.taslaauto();
 c1.fuel_type="petrol";
 document.write(c1.fuel_type);
 document.write("<br>")
 delete c1.car_brand;
 document.write(c1.car_brand);
 document.write("<br>")
document.write( delete c1.car_brand)

// *******************objects*************
var car ={
    name:"honda",
    color:"red",
}
document.write("<br>")
document.write(car.name);
car.price="50000";
document.write("<br>");
document.write(car.price);
delete car.price;
document.write(car.price);



 






