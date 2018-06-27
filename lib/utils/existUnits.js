import _ from "underscore";
import alpha from "./alpha";

export default function exist_units(units){  
    let keys;

    if(_.isObject(units) && !_.isArray(units)){
        keys = _.keys(units);
    }else if(_.isArray){
        keys = units.slice();
    }

    return _.map(keys, (key)=>alpha.time_units.indexOf(key));
}