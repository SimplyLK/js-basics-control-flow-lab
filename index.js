function scuberGreetingForFeet(value){
  if (value <= 400)
  return "This one is on me!"

  if (value <2500)
  return 'I will gladly take your thirty bucks.'

  if (value > 2500)
  return 'No can do.'

}

function ternaryCheckCity(location){

  if (location === 'NYC')
  return "Ok, sounds good."
  else 
  return "No go."
}

function switchOnCharmFromTip(tips){
  
  switch (tips) {
    case 'generous':
    return 'Thank you so much.';
    break;
    case 'not as generous':
    return "Thank you.";
    break;
    default: 
    return "Bye.";
  }
}