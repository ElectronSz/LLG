
class Llg {
    constructor(token) {
        this.token = token;
    }

    log(message, level, date) {
        if(this.token == "" || this.token == undefined || this.token == null || this.token === ""){
            console.error("Missing token 🤑, please go to https://llg.com and get one");
        }else{
            
        if (arguments.length == 0) {
    
            console.log("Grap a 🍺", " nothing to output!");
    
        }
        else if (arguments.length == 1) {
            for (let index = 0; index < arguments.length; index++) {
                const element = arguments[index];
                console.log("🤑  " + JSON.stringify(element));
    
            }
        }
        else {
            let elements = []
    
            for (let index = 0; index < arguments.length; index++) {
                const element = arguments[index];
    
                elements.push(JSON.stringify(element))
    
            }
            console.log(elements.join(" ➡️  "))
        }
        }
    }
}


const _Llg = Llg;
export { _Llg as Llg };