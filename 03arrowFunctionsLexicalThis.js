class arrowFunctions {

  one(){
    this.message1 = 'hello world 1';
    var that = this;
    setTimeout(function(a){
      console.log(that.message1);
    }, 1)
  } //old one

  two(){
    this.message2 = 'hello world 2';
    setTimeout(function(a){
      console.log(this.message2);
    }, 1)
  } //wrong one

  three(){
    this.message3 = 'hello world 3';
    setTimeout(function(a){
      console.log(this.message3);
    }.bind(this), 1);
  } //ES5

  four(){
    this.message4 = 'hello world 4'
    setTimeout(() => {
      console.log(this.message4);
    }, 1);
  }//ES6 (ECMA2015)
}

const af = new arrowFunctions();

af.one();

af.two();

af.three();

af.four();
