import _ from "underscore";

import is_clock from "./utils/isClock";
import normalize_units from "./utils/normalizeUnits";
import pad_time from "./utils/padTime";
import pad_zero from "./utils/padZero";
import time_to_clock from "./utils/timeToClock";
import clock_to_milli from "./utils/clockToMilli";
import generate_dms from "./utils/generateDMs";
import slice_clock from "./utils/sliceClock";

export default function get_date(value, alarm=false, start=0){
    let clock = value;

    if(_.isObject(clock) && !_.isArray(clock)){
        let normalized = _.reduce(clock, (result, value, key)=>{
            let unit = normalize_units(key);
            if(!result[unit]){
                result[unit] = value;
            }
            return result;
        }, {});

        let padded = pad_time(normalized);

        clock = slice_clock.apply(
            this, 
            Array.prototype.concat(
                [], 
                time_to_clock(padded, pad_zero), 
                existing
            )
        );
    }

    if(!alarm){
        return _.compose(
            (ms)=>generate_dms(ms),
            ()=>clock_to_milli(clock, false, start),
            ()=>is_clock(clock)
        )();
    }else{
        return _.compose(
            ()=>clock_to_milli(clock, true, start),
            ()=>is_clock(clock)
        )();
    }
}