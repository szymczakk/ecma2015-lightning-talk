//unfortunately this is not implemented in node yet :(

class destructuringAssignment{
  newOne(){
    const list = [1,2,3];
    const [x,,y] = list;
    console.log(x,y);

    const obj = {foo: 2, bar:40, fooBar:true}
    const {fooBar, foo, bar} = obj;
    console.log(bar, fooBar, foo);
  }

  oldOne(){
    const list = [1,2,3];
    const x = list[0];
    const y = list[2];
    console.log(x,y);

    const obj = {foo: 2, bar:40, fooBar:true}
    const foo = obj.foo;
    const bar = obj.bar;
    const fooBar = obj.fooBar;
    console.log(bar, fooBar, foo);
  }
}

const da = new destructuringAssignment();
console.log(da.oldOne());
console.log(da.newOne());
