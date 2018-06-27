import alpha from "./alpha";

export default function calculation(subject, target){
    let result = Object.assign({}, subject);
    let base = {
        "plus": [100,100,100,1000],
        "minus": [99,60,60,1000]
    }
    
    for(let i = 3; i >= 0; i -= 1){
        let diff = result[alpha.time_units[i]] + target[alpha.time_units[i]];

        if(diff < 0 && i === 0){
            return Object.assign({}, alpha.time_init);
        }

        if(diff < 0 && Math.sign(diff) === -1){
            diff = base["minus"][i] + diff;
            result[alpha.time_units[(i - 1)]] -= 1;
        }
        if(diff >= base["plus"][i] && Math.sign(diff) === 1){
            diff = diff - base["plus"][i];
            result[alpha.time_units[(i - 1)]] += 1;
        }

        result[alpha.time_units[i]] = diff;
    }

    return result;
}