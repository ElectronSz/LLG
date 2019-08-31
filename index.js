function llg() {
    if(arguments.length == 0) {
        
        console.log("Grap a 🍺", " nothing to output!");
        
    }
    else if(arguments.length == 1){
         for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];
            console.log("🤑  "+element);
            
        }
    }
    else {
        let elements = []

        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];
            
            elements.push(element)
            
        }
        console.log(elements.join(" ➡️  "))
    }
}


module.exports.llg = llg;