let name = prompt("Your name here");
console.log("Hello, " 
            + name.slice(0,1).toLocaleUpperCase()
            + name.slice(1,name.length)
           )