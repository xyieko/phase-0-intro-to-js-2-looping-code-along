// Code your solutions in this file
function countDown(startingNumber) {
    if (typeof startingNumber !== 'number' || startingNumber < 0 || !Number.isInteger(startingNumber)) {
      console.log("Please provide a positive integer");
      return;
    }
  
    let current = startingNumber;
    
    while (current >= 0) {
      console.log(current);
      current--; 
    }
  }
  
  countDown(10); 

  function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }