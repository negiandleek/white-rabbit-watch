export default function pad_zero(value, range = 2){
    let m = String(value)
    let str = new Array(range + 1).join("0");
    return (str + m).slice(-1 * range);
}