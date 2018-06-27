import is_numeric from "./utils/isNumeric";
import generate_dms from "./utils/generateDMs";

export default function compose_generate_dms(ms){
    is_numeric(ms);
    return generate_dms(ms);
}