import is_clock from "./utils/isTime";
import time_to_clock from "./utils/timeToClock";

export default function compose_time_to_clock(clock, start = 0, end = 1){
    is_clock(clock);
    return time_to_clock(clock, start, end);
}