function cartObj() {
  let rand = randomNumbers(1, 2)

  const priceList = {
    1: {
      'Lavash': {
        info: 'big cheese',
        price: 15000
      },
      'Hot-dog': {
        info: 'mini',
        price: 15000
      },
      'Cola': {
        info: '1.5 L',
        price: 9000
      },
    },
    2: {
      'Sushi': {
        info: 'max-roll',
        price: 32000
      },
      'Soya': {
        info: '200ml',
        price: 5000
      },
    }
  }
  
  // for (const price in priceList) {
  //   if (rand == 1) {
  //     totalPrice = priceList[1]['Lavash'].price + priceList[1]['Hot-dog'].price + priceList[1]['Cola'].price + dostavka
  //     console.log("Sizning buyurmangiz: Lavash Big-cheese, Hot-dog mini, Cola 1.5L. Yetkazib berish bilan bo'lgan narx " + totalPrice + " | Yetkazish narxi (9000)");
  //   }
  //   else if (rand == 2) {
  //     totalPrice = priceList[2]['Sushi'].price + priceList[2]['Soya'].price + dostavka
  //     console.log("Sizning buyurmangiz: Sushi max-roll, Soya 200ml. Yetkazib berish bilan bo'lgan narx " +totalPrice+ " | Yetkazish narxi (9000)");

  //   }
  // }
  return priceList[rand]
}

function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
