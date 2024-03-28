const accountId = 144553
let accountEmail = "saumya@google.com"
var accountPassword = "12345"
accountCity = "Indore"

//accountId = 2 // not allowed

accountEmail = "sk@sk.com"
accountPassword = "4253614"
accountCity = "Bhopal"
let accountState

console.log(accountId);

/*
Prefer not to use var
because of issue of block scope and functional scope
*/  

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])