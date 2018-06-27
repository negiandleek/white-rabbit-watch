import _ from "underscore";

import alpha from "./alpha";
import check_past from "./checkPast";

let order = alpha.time_order.slice();
let methods = order.map((str)=>{
    return str.replace(/^(.){1}/, (s)=>s.toUpperCase())
})
methods[3]="Milliseconds";

function merge(clock, head){
    let i = 0;
    let start = head;
    let base = [0,0,0,0];
    while(clock[i] != null){
        if(typeof base[start] === "undefined")break;
        base[start] = parseInt(clock.substr(i, alpha.time_digits[(i / 2)]),10);
        start += 1;
        i += alpha.time_digits[(i / 2)];
    }
    return base;
}

export default function clock_to_milli(clock, alarm=false, start=0){
    if(!alarm){
        let sign = Math.sign(parseInt(clock, 10)) === -1? "-": "";
        let sliced = sign === -1? clock.slice(1): clock;
        let result = merge(sliced, start);
        return sign + _.reduce(
            result, 
            (memo, num, index) => {
                return memo + (num * alpha.time_radix[index]);
            },
            0
        );
    }else{
        let feature_date = clock.split(alpha.time_split).map(Number);
        let padding = new Array(methods.length - feature_date.length).fill(0)
        let time_ary = feature_date.concat(padding);
        let feature = new Date();
        methods.forEach((name,i)=>{
            feature["set" + name](time_ary[i])
        });
        if(check_past(feature)){
            feature = new Date(feature.setDate(feature.getDate() + 1))
        }
        return feature.getTime();
    }
}