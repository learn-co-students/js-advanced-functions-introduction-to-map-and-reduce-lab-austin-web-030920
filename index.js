// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(e => -e);
};

function mapToNoChange(sourceArray) {
    return sourceArray.map(e => e);
};

function mapToDouble(sourceArray) {
    return sourceArray.map(e => e * 2);
};

function mapToSquare(sourceArray) {
    return sourceArray.map(e => e ** 2);
};

function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce((t, e) => t + e, startingPoint);
};

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((t, e) => {
        if (e == false){
           return false
        } else {
           return t = t 
        };
    }, true);
};

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((t, e) => {
        if (e == true){
           return true
        } else {
           return t = t 
        };
    }, false);
};
