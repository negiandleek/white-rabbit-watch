import _ from "underscore";
import alpha from "./alpha";

// h,m,s,ms
let head = alpha.time_head_units;
const relation = _.object(head, alpha.time_units);

export default function normalize_unit(unit){
    return relation[unit]||unit;
}