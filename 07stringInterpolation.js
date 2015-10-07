class stringInterpolation{
  newOne(){
    const user = {name: 'John', surname: 'Kowalsky'};
    const webBrowser = {name:'IE', ip: '10.01.0.10'};
    const message = `Current user ${user.name} ${user.surname} is connected from
ip: ${webBrowser.ip} by web browser ${webBrowser.name}.`;
    return message;
  }

  oldOne(){
    var user = {name: 'John', surname: 'Kowalsky'};
    var webBrowser = {name:'IE', ip: '10.01.0.10'};
    var message = 'Current user ' + user.name + ' ' + user.surname + ' is connected from \nip: ' + webBrowser.ip
    + ' by web browser ' + webBrowser.name+ '.';
    return message;
  }
}

const si = new stringInterpolation();
console.log(si.newOne());
console.log(si.oldOne());
