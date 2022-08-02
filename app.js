const textArea = document.querySelector("#textArea")
const passGenerateBtn = document.querySelector("#passGenerateBtn")
const copyPasswordBtn = document.querySelector("#copyPassword")

//EventListener
passGenerateBtn.addEventListener("click",()=>{
    textArea.value = generatePassword(15)})
copyPasswordBtn.addEventListener("click",copyPassword)

//functions
//Generating Random Number
function generatePassword(length = 8){

    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    //length of character
    charactersLength = characters.length
    resultGenerated= " "
    for (let i = 0; i <length; i++) {
         resultGenerated +=characters.charAt(Math.floor(Math.random() * charactersLength))
    }
     return resultGenerated;
}

//Copying 
function copyPassword(){
    if(textArea.value){
        textArea.select()
        navigator.clipboard.writeText(textArea.value)
        alert("Password copied");
        textArea.value =" "
  }
    else{
        alert("No text Copied")
    } 
  
}
 