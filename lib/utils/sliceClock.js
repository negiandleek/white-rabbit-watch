import alpha from "./alpha";

export default function slice_clock(clock, start=0, end=2){
    return clock.slice(alpha.time_index[start], alpha.time_index[end] + alpha.time_digits[end]);
};