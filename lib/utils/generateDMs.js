export default function generate_dms(dms){
    if(typeof dms === "string"){
        dms = parseInt(dms, 10);
    }
    return new Date().getTime() + dms;
}