import _ from "underscore";

import pad_zero from "./utils/padZero";
import time_to_clock from "./utils/timeToClock";

import diff_generate_dms from "./utils/diffDMs";
import milli_to_time from "./utils/milliToTime";
import slice_clock from "./utils/sliceClock";

export default function get_count(dms, start=0, end=1){
    let composed = _.compose(
        (clock)=>slice_clock(clock, start, end),
        (time)=>time_to_clock(time, pad_zero),
        (ms)=>milli_to_time(ms),
        ()=>diff_generate_dms(dms),
    )
    return composed();
}