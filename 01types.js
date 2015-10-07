// //good
// let foo = 1;
// const bar = 2;

// //bad
// var foo = 1;
// var bar = 2;

//var - function-scope
//let, const - block-scope
class types{
  foo() {
    console.log( x ); //Why NOT ReferenceError ?
    console.log( z ); //Why NOT ReferenceError ?
    //console.log( y ); Why ReferenceError ?

    var x = 1;
    if (x === 1) {
      var z = 5;
      let y = 2;
    }
    //console.log( y ); Why ReferenceError ?
  }
}
const t = new types();
t.foo();
//console.log( x ); Why ReferenceError ?
