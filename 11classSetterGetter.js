class foo{
  constructor(x){
    this._x = x;
  }

  set x(x){this._x = x}
  get x(){return this._x};

}

var bar = new foo(5);
bar.x = 10;
console.log(bar.x);
