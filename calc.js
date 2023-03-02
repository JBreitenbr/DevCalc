let disp=document.getElementById("display");

function cl1() {
 disp.innerText=0;
}

function cl2() {
 disp.innerText="";
}

function op(val) {
  if(disp.innerText=="0")
    cl2();
  disp.innerText+=val;
}

function oq(sig) {   
  let disp=document.getElementById("display");
  let stri=disp.innerText;
  let L=stri.length-1;
  let s1=stri[L];
  let s2=stri.slice(L-1);
  let ops1 = (s1=="+") || (s1=="-") || (s1=="*") || (s1=="/");
  let ops2 = (s2=="+-") || (s2=="--") || (s2=="*-") || (s2=="/-");
  if(ops2) {
    disp.innerText=stri.slice(0,L-1)+sig;
   }
  else if(ops1) {
    if(sig=="+" || sig=="*" || sig=="/") {
       disp.innerText=stri.slice(0,L)+sig;
     }
    if(sig=="-") {
       disp.innerText+=sig;
     }
   }
   if(!ops1) {
       disp.innerText+=sig;
   }
}

function decL(expr) {
    let spl=expr.split(/[-*\/+]/);
    let lst=spl[spl.length-1];
    let pt=/[\.]/;
    if(lst==""){return false;}
    else return {!(pt.test(lst));}
}
   
function decOp() {
   let disp=document.getElementById("display");
   let val=disp.innerText;
   if(val=="0"){
      cl2();
    }
   if(decL(val)) {
    disp.innerText+=".";
   }
 }

function res() {
   let ent=document.getElementById("display");
   let v=ent.innerText;
   let res=eval(v);
   ent.innerText=res;
}

