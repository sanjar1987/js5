// console.log(cartObj());

let obj = cartObj()
let total = 0
let str = ''
let dostavka = 9000
for(const key in obj){
  str += `${key} ${obj[key].info} `
  total += obj[key].price
}
console.log(str);
console.log('zakaz narxi '+(total+dostavka)+' dostavkasi bilan');




let num = +prompt('diametr soni')
line = ''
back = 0
for (let x = 0; x < num; x++) {
    for (let y = num; y > back; y--) {
        if (x == y-1 || x==0|| y==num || y==1|| x==num-1) {
            line += '⬜'
        }
        else {
            line += '⬛'
        }
    }
    console.log(line);
    line = ''
}


let x = 10
let foy = 1
for (let i = 1; i < x + 1; i++) {
    foy = i
    a = prompt('ismingizni kiriting', 'name')
    // while (!isNaN(a)) {
    //     a = prompt('ismingizni kiriting', "yo'q ismingizni kiriting")
    // }
    b = +prompt('yoshingizni kiriting', '27')
    // while (isNaN(b)) {
    //     b = +prompt('yoshingizni kiriting', "yo'q yoshingizni kiriting")
    // }
    let y = 2021
    let c = y - b
    let user = {
        name: a
    }
    let user2 = {
        age: b
    }
    console.log("Foydalanuvchi " + foy);
    console.log("    Sizning ismingiz " + user.name);
    console.log("    Yoshingiz " + user2.age);
    console.log("    Tug'ilgan yilingiz esa " + c);
}  