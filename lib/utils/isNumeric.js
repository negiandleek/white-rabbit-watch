import _ from "underscore";

export default function is_numeric(){
    for(let i = 0; i < arguments.length; i += 1){
        if(!_.isNumber(arguments[i]) && _.isNaN(Number(arguments[i]))){
            throw new TypeError("arg must be Number or String convertible number");
        }
    }
    return true;
}