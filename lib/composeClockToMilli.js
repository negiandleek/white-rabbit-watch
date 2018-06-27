import is_clock from "./utils/isClock";
import clock_to_milli from "./utils/clockToMilli";

export default function compose_clock_to_milli(clock, alarm=false, start=0){
    is_clock(clock);
    return clock_to_milli(clock, alarm, start);
}