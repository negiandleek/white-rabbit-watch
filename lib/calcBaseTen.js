import _ from "underscore";

import alpha from "./utils/alpha";
import calculation from  "./utils/putTimeBaseTen";
import clock_to_time from "./utils/clockToTime";
import milli_to_time from "./utils/milliToTime";
import pad_zero from "./utils/padZero";
import pad_time from "./utils/padTime";
import time_to_clock from "./utils/timeToClock";
import slice_clock from "./utils/sliceClock";

import is_clock from "./utils/isClock";
import is_time from "./utils/isTime";
import is_numeric from "./utils/isNumeric";

//TODO subはmsではなくclockで行う。
export default function calc_base_ten(value, sub={seconds: 1}, start=0, end=1){
    let subject;
    let target;
    let clock_flag = false;

    if(_.isObject(value)){
        is_time(value);
        subject = pad_time(value);
    }else{
        is_clock(value);
        subject = clock_to_time(value, start, end);
        clock_flag = true;
    }
    
    if(_.isObject(sub)){
        is_time(sub);
        target = pad_time(sub);
    }else{
        is_numeric(sub);
        target = milli_to_time(sub);
    }
    
    let result = calculation(subject, target);
    
    if(result < 0){
        result = alpha.clock_init;
    }

    if(clock_flag){
        return slice_clock(time_to_clock(result, pad_zero), start, end);
    }else{
        return result;
    }
}