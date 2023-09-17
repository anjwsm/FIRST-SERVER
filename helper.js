function helpOther(a){
    console.log('I help people:' + a);
  }
  function helpOther2(b){
    console.log('Ohter one');
  }
  function helpOther3(b){
    console.log('Ohter one');
  }
const abc=20;
// module.exports= helpOther;// default export one
 module.exports ={helpOther2,helpOther3, abc} // normal export -multiple