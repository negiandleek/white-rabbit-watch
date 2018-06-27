import _ from "underscore";
import alpha from "./alpha";

export default function sort_units(units){
    let sorted = _.filter(alpha.time_units, param => units.indexOf(param) !== -1);
    return sorted;
}