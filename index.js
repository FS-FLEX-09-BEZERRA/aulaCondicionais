

//Condicionais

// if else
function bomDia () {
  let tomeiCafe = prompt("Bom dia, tomou café? Responda sim ou não").toLowerCase().trim()

  if (tomeiCafe !== 'sim' || tomeiCafe !== 'não' || tomeiCafe !== 'nao') {
    console.log("Tente novamente. Digite sim ou não.")
    return
  }

  console.log("passei depois de entrar no if com return")

  if (tomeiCafe === 'sim') {
    console.log("Bom dia pra você também")
  } else if (tomeiCafe === 'não' || tomeiCafe === 'nao') {
    console.log("Bom dia pra quem?")
  }
}

bomDia()


//verificar se um número é impar ou par 

// const numero = parseFloat(prompt("Digite um número e verifique se é ímpar ou par."))

//NaN
//   if (numero) {
//     alert("Digite um número válido")
//   }

// if (numero % 2 === 0) {
//   alert(`O número ${numero} é par`)
// } else if (numero % 2 === 1) {
//   alert(`O número ${numero} é ímpar`)
// }
// else {
//   alert("Digite um numero válido")
// }



// switch case