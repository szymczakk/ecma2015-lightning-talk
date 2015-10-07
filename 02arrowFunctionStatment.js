class arrowFunctions {
  mainOld(){
    const num = [1,2,3,4,5];
    num.forEach(function(val){
      console.log(val);
    })
  }

  mainNew(){
    const num = [6,7,8,9,0];
    num.forEach(v => {
      console.log(v);
    })
  }
}

const af = new arrowFunctions();

af.mainOld();

af.mainNew();
