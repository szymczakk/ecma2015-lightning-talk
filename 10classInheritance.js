class a{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  showXY(){
    console.log(this.x,this.y);
  }
}

class b extends a{
  constructor(x,y,z){
    super(x,y);
    this.z = z;
  }

  showAll(){
    console.log(this.x, this.y, this.z);
  }

  showFromSuper(){
    super.showXY();
  }
}

const be = new b(1,2,3);
be.showFromSuper();
be.showAll();
