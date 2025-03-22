const accountId = 1234
let accountEmail = "pikupatel515@gmail.com"
var accountPass = 'Piyu1015'
accountCity = 'Ahmedabad'
let accountState;

accountPass = 'Piyu1015$'

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])
