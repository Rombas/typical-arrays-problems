
exports.min = function min (array) {
    let minRes = 0;
    if (array === undefined || array.length === 0) return minRes;
    for (let i = 0; i < array.length; i++){
      if ( array[i] < minRes){
          minRes = array[i];
      }
    }
    return minRes
}

exports.max = function max (array) {
    let maxRes = 0;
    if (array === undefined || array.length === 0) return maxRes;
    for (let i = 0; i < array.length; i++){
        if ( array[i] > maxRes){
            maxRes = array[i];
        }
    }
    return maxRes;
}

exports.avg = function avg (array) {
    let avgRes = 0;
    if (array === undefined || array.length === 0) return avgRes;
    for (let i = 0; i < array.length; i++){
            avgRes += array[i];
    }
    return avgRes/array.length;
}
