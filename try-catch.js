function checkAge(){
  const ageField=document.getElementById('age')
  const ageText=ageField.value
  const errorTag=document.getElementById('error')
  try{
    const age=parseInt(ageText)
    if(isNaN(age)){
        throw("enter number");
        
    } 
    else if(age<18){
      throw 'baccha not allowed'
    }
    else if(age>30){
      throw "murubbi not allowed"
    }
    errorTag.innerHTML=''
  }
  catch(err){
    console.log('ERROR:',err)
    errorTag.innerHTML='ERROR '+err;
  }
  finally{
    console.log('all done')
  }
  console.log(1111)
}