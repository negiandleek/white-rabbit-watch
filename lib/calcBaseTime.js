import _ from "underscore";

import clock_to_milli from "./utils/clockToMilli";
import pad_time from "./utils/padTime";
import pad_zero from "./utils/padZero";
import milli_to_time from "./utils/milliToTime";
import slice_clock from "./utils/sliceClock";
import time_to_clock from "./utils/timeToClock";

import is_time from "./utils/isTime";
import is_clock from "./utils/isClock";
import is_numeric from "./utils/isNumeric";
import alpha from "./utils/alpha";

import time_to_milli from "./utils/timeToMilli";

//TODO subはmsではなくclockで行う。
export default function calc_base_time(value, sub = {seconds: 1}, start=0, end=1){
    let subject;
    let target;
    let obj_flag = false;

    if(_.isObject(value)){
        is_time(value);
        subject = time_to_milli(pad_time(value));
        obj_flag = true;
    }else{
        is_clock(value);
        subject = clock_to_milli(subject);
    }

    if(_.isObject(sub)){
        is_time(sub);
        target = time_to_milli(pad_time(sub));
    }else{
        is_numeric(sub);
        target = sub;
    }

    let total = parseInt(subject,10) + parseInt(target, 10);
    let result;

    if(total < 0){
        result = alpha.time_init;
    }else{
        result = milli_to_time(total);
    }

    if(obj_flag){
        return result;
    }else{
        return slice_clock(time_to_clock(result, pad_zero), start, end)
    }
}