//unfortunately this is not implemented in node yet :(
//but it will works in ff41!
class spreadParameter{
  main(){
    const someCollection = [1, true, 'foo'];
    console.log(someCollection);
    console.log(...someCollection);
  }
}
