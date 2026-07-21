//Method Chaining means calling multiple methods one after another on the same object in a single line.

let username="    tushar       ";
username=username.trim();

username=username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

//agar first 1 index metion kiye slice(1) toh waha se sare index forward lega  
console.log(username);