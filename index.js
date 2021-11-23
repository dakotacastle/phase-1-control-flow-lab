function scuberGreetingForFeet(someVaule){
  if(someVaule <= 400) {
    return 'This one is on me!'
  }
  else if(someVaule > 2500) {
    return 'No can do.'
  }
  else if(someVaule > 2000) {
    return 'I will gladly take your thirty bucks.'
   
  }
  
}

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go."

}

function switchOnCharmFromTip(charm){
  switch(charm) {
      case "generous" :
        return "Thank you so much."
      case "not as generous" :
        return "Thank you."
      case "thanks for everything" :
        return "Bye."
  }
  return charm
}