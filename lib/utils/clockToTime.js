import alpha from "./alpha";

export default function clock_to_time(clock, start = 0, end = 1){
    let time = Object.assign({}, alpha.time_init);
    let index = 0;
    let sign = Math.sign(parseInt(clock, 10));

    if(typeof clock === "number"){
        clock = String(clock);
    }

    let extraction = sign === -1? clock.slice(1): clock;

    for(let i = start; i <= end; i += 1){
        let str = extraction.substr(index*2, alpha.time_digits[i]);
        index += 1;
        time[alpha.time_units[i]] = sign * parseInt(str, 10) || 0;
    };

    return time;
}