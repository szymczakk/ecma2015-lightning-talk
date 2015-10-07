//unfortunately this is not implemented in node yet :(

class defaultParams{
  oldOne(x,y,z){
    if(y === undefined){
      y = 7;
    } //y = y || 7

    if(z === undefined){
      z = 2;
    } // z = z || 2

    return x + y + z;
  }

  newOne(x, y=7, z=2){
    return x + y + z;
  }
}

const dp = new defaultParams();

console.log(dp.oldOne(1));

console.log(dp.newOne(1));
