//unfortunately this is not implemented in node yet :(

class restParameter{
  weirdo(p1, p2, p3, ...p4){
    return p1 + p2 + p3 + p4.length;
  }
}

const params = [1,2,3];
const othersParams = ['bar', false, 13];

const soarp = new restParameter();

console.log(soarp.weirdo(params, othersParams)); //9
