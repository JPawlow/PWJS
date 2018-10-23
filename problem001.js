function triangleArea(a,b,c){
  if(((a<=0)||(b<=0)||(c<=0))||((a+b)<c)||((b+c)<a)||((c+a)<b)){
    return -1;
  }else{
    var S = 0;
    S=Math.sqrt((a+b+c)*(a+b-c)*(a-b+c)*(-a+b+c))/4;
    S=S*100;
    S=Math.round(S);
    S=S/100;
    return S;
  }
  
}