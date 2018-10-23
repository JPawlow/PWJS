function strangeSum(a, b){
    var result=0;
    if(isNaN(a)||isNaN(b)||(a%1!=0)||(b%1!=0)){
        return null;
    }else if(a==b){
        result = 3*(a+b);
        return result;
    }else{
        result = a+b;
        return result;
    }

}