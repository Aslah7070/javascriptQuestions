let array = [
    {id:1 , name:"alice" , amount:100 , case: true},
    {id:2 , name:"sahad" , amount:150 , case: false},
    {id:3 , name:"namdn" , amount:300 , case: true}
  ];



let result=array.filter((val)=>val.case===true).map((value)=>{
    value.amount+=100
    return value;
})

console.log(result);
