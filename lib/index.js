import calc_base_ten from "./calcBaseTen";
import calc_base_time from "./calcBaseTime";
import clock_to_milli from "./composeClockToMilli";
import clock_to_time from "./composeClockToTime";
import diff_dms from "./composeDiffDMs";
import generate_dms from "./composeGenerateDMs";
import milli_to_time from "./composeMilliToTime";
import time_to_clock from "./composeTimeToClock";
import display from "./display";
import get_count from "./getCount";
import get_date from "./getDate";
import shift_clock from "./shiftClock";
import undisplay from "./undisplay";

const whiterabbit = {
    calc_base_ten,
    calc_base_time,
    clock_to_milli,
    clock_to_time,
    diff_dms,
    generate_dms,
    milli_to_time,
    shift_clock,
    time_to_clock,
    display,
    get_count,
    get_date,
    shift_clock,
    undisplay
}

export default whiterabbit;

// clock -> "0000"
// time -> {} or [];
// units -> ["hours", "minutes","seconds","millis"];
// date -> new Date().getTime(). date mills or dms;
// millis -> millis or dms