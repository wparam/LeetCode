function toUpCase(s){
  var result = [];
  for(var i=0,l=s.length; i<l; i++){
    if(s[i].charCodeAt() >=97 && s[i].charCodeAt()<=122){
      result.push(String.fromCharCode(s[i].charCodeAt() - 32));
    }
    else{
      result.push(s[i]);
    }
  }
  return result.join('');
};

console.log(toUpCase('absdcEdfDqaAcd'));