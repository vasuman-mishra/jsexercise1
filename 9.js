var a;
a= window.prompt("Enter the String");
dict={}
for (var i=0;i<a.length;i++){
    if(dict[a[i]]==undefined){
        dict[a[i]]=0;
    }
    dict[a[i]]+=1;
}
console.log(dict);