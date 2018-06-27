const alpha = {
    time_split: /[0-9]{0}(?=(?:[0-9]{2})+$)/,
    time_order: ["hours", "minutes", "seconds"],//[, "millis"]
    time_units: ["hours", "minutes", "seconds", "millis"],
    time_head_units:["h", "m", "s", "ms"],
    time_based: [60 * 60 * 1000, 60 * 1000, 1000],
    time_radix: [60 * 60 * 1000, 60 * 1000, 1000, 1],
    time_digits: [2,2,2,4],
    time_index: [0,2,4,6],
    time_init: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        millis: 0
    },
    clock_init: "0000000000"
}
export default alpha;