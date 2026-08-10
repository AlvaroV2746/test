const run = (text) => {
  // BEGIN (write your solution here)
  if (text == ""){
    return null
  }
  const takeLast = (text, num) => {

    let newText = [];

    if (text.length < num){
    return null
    }
    
    for (let i = 0; i <= num; i++){

            newText.push(text[text.length-i]);
        }
        text=newText;
        return text.join("")
    
        }
  // END

  return takeLast(text, 4);
};

export default run;


console.log(run("power"));
