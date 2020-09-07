async function logKeypress(keypresses, e, time){
    if (!(e.code in keypresses)) {
        keypresses[e.code] = []
    }
    keypresses[e.code].push(time);
}