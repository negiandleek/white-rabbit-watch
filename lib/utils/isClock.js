import _ from "underscore";

const reg = /[^0-9]/g;

export default function is_clock(){
    if(arguments[0] == null || arguments[0] == ""){
        throw new Error("argument is null or undefined");
    }

    for(let i = 0; i < arguments.length; i += 1){
        let args = arguments
        if(!_.isString(args[i])){
            throw new TypeError("argument must be string type");
        }
        let length = [2,4,6,10].filter((index)=> index === args[i].length).length;
        if(length === 0){
            throw new Error("argument length must be 2 or 4 or 6");
        }
        if(reg.test(args[i])){
            throw new TypeError("argument must be num of String type")
        }
    }

    return true;
}