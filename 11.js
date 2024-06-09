let names= [];
while(confirm("Enter the Names:")){
    var a;
    a= window.prompt("Enter the Name");
    names.push(a);
}
names.sort();
for(var i=0;i<names.length;i++){
    document.write("<li>"+names[i]+"</li>");
}