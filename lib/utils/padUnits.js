import _ from "underscore";
import alpha from "./alpha";
import sort_units from "./sortUnits";

export default function pad_units(obj, indexes){
    let units = _.filter(alpha.time_units, (parm,i)=> indexes.indexOf(i) === -1)
    if(_.isObject(obj) && !_.isArray(obj)){
        let zero = _.object(units, _.map(units,()=>0));
        return Object.assign({}, obj, zero);
    }else if(_.isArray(obj)){
        return sort_units(Array.prototype.concat([], obj, units));
    }
}