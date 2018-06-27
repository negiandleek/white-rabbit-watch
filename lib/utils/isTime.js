import _ from "underscore";

import alpha from "./alpha";
import is_numeric from "./isNumeric";

export default function is_time(time){
    if(time == null || time == ""){
        throw new Error("arguments is null or undefined");
    }
    if(!_.isObject(time) || (_.isObject(time) && _.isArray(time))){
        throw new TypeError("arguments is time object");
    }

    let result = _.reduce(time, (memo, value, key)=>{
        if(alpha.time_units.indexOf(key) === -1 && alpha.time_head_units.indexOf(key) === -1){ 
            console.error("Waring: object key must be hours, minutes, seconds, millis or h, m, s, ms");
        }else{
            memo[key] = value;
        }
        return memo;
    },{});

    _.each(result, (value)=>{
        try{
            is_numeric(value);
        }catch(e){
            let message = e.message.slice(4);
            throw new Error("property of time unit key " + message);
        }
    });

    return true;
}
