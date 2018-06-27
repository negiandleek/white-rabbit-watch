// TODO: millli 対応
export default function display(clock, digits=2){
    const reg = new RegExp("([0-9]{" + digits + "})(?=[0-9]{" + digits + "})","g");
    return clock.replace(reg,(match)=> match + ":");
}