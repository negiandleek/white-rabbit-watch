import exist_units from "./existUnits";
import pad_units from "./padUnits";

export default function pad_time(time){
    let existing = exist_units(time); 
    return pad_units(time, existing);
}