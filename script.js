var usernumber = Number(prompt('Enter The Number :', 0))
var sum = 0
for (var i = 0 ;(usernumber / 10) != 0 ; i++){
    sum = sum + (usernumber % 10)
    usernumber = Math.floor(usernumber / 10)
}

console.log('Sum Of Digits' , sum)