import time_to_clock from "./utils/timeToClock";
import is_time from "./utils/timeToClock";
import pad_zero from "./utils/padZero";

export default function compose_time_to_clock(time, pad=pad_zero){
    is_time(time);
    return time_to_clock(time, pad);
}