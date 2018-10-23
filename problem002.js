function stringRotate(a,b){
    if(b<0||isNaN(b)){
    return "";
    }
    var temp = a.substring(0,b);
    a = a.replace(temp,"") + temp;
    console.log(a);
    return a;
}