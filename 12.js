var num=window.prompt("Enter number of random numbers you want to generate");
sum=0;
for(var i=0;i<num;i++){
    sum+=(Math.floor(Math.random()*100));
}
var avg=sum/num;
console.log(avg);
