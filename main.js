function showVerticalMessage(Strada) {
  if (Strada[0] === Strada[0].toLowerCase()) {
    
      let StradaZ = (Strada[0].toUpperCase() + Strada.slice(1, 7));
      for (let char of StradaZ) {
        console.log(char);
      }
    }
    
  }
showVerticalMessage('amandafffffffffffff');
