const reg = /:/g;

export default function undisplay(value){
    return value.replace(reg, "");
}