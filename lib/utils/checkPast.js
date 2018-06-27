export default function check_past(date){
    let now = new Date();
    return date.getTime() <= now.getTime();
}