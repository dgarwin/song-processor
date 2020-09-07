function getBeatPeriod(keyPresses) {
    if (keyPresses['KeyB'].length > 1) {
        let diffs = [];
        for (let i = 1; i < keyPresses['KeyB'].length; ++i) {
            diffs.push(keyPresses['KeyB'][i] - keyPresses['KeyB'][i - 1]);
        }
        return median(diffs);
    }
}

function findCount(keyPresses, time){
    let beatPeriod = getBeatPeriod(keyPresses);
    let nearestOne = getNearestOne(keyPresses, time);
    return _findCount(nearestOne, time, beatPeriod);
}

function _findCount(nearestOne, time, beatPeriod){
    if (nearestOne > time){
        nearestOne -= beatPeriod * 8;
    }
    return (time - nearestOne) / beatPeriod;
}

function getNearestOne(keyPresses, time) {
    if (keyPresses['Digit1'].length > 0) {
        let arr = keyPresses['Digit1'];
        return arr.sort((a, b) => {
            return Math.abs(a - time) - Math.abs(b - time);
        })[0];
    }
}

function median(numbers) {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    var median = 0, numsLen = numbers.length;
    numbers.sort();

    if (
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle numbers
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen - 1) / 2];
    }

    return median;
}