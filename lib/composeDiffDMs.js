import is_numeric from "./utils/isNumeric";
import diff_dms from "./utils/diffDMs";

export default function compose_diff_dms(dms){
    is_numeric(dms);
    return diff_dms(dms);
}