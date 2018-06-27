import _ from "underscore";
export default function diff_dms(dms){
    if(typeof dms === "string"){
        dms = parseInt(dms, 10);
    }
    let result = dms - _.now();
    if(result >= 0){
        return result;
    }else{
        return 0;
    }
}