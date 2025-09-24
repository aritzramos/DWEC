let numero = 50


for (let i = 0; i <= numero; i++) {
    if (i % 15 === 0 && i !== 0) {
      console.log(i + " -> Viva el Sevilla y el Betis");
    } else if (i % 3 === 0 && i !== 0) {
      console.log(i + " -> Viva el Sevilla");
    } else if (i % 5 === 0 && i !== 0) {
      console.log(i + " -> Viva el Betis");
    } else {
      if (i % 2 === 0) {
        console.log(i + " -> Par");
      } else {
        console.log(i + " -> Impar");
      }
    }
  }