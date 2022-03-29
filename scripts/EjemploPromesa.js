let x=3

const promesaCreada = new Promise((resolve, reject) => {
    if (x==5){
        resolve("si esta bien es 5")
    }
    else
    reject('No es 5')
})

promesaCreada.then((res =>{
    console.log("la respuesta es: " + res)
}))

.catch(error =>{
    console.warn('la respuesta es: ' + error)
})