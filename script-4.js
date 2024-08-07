function dis(num){
    let array=[]
     for(i=0;i<num.length;i++){
         var count=0;
         for(j=0;j<num.length;j++){
             if(num[j]<num[i]){
                 count++
             }
         }
         
         array.push(count)
     }
     return array
  }
  
  console.log(dis([8,1,2,2,3]))