import _ from "underscore";

import alpha from "./alpha";

let base = _.reduce(alpha.time_order, (memo, key, i)=>{
    memo[key] = alpha.time_based[i];
    return memo;
}, {});

export default function time_to_milli(time){
    let result = _.reduce(
        time, 
        (memo, value, key) => {
            if(typeof base[key] === "undefined")return memo;
            return memo + (base[key] * value)
        },
        0
    );
    return result;
}