const repeatString = function(word, number) {
    if (number < 0) {
        return 'ERROR';
    }
    if (number == 0) {
        return '';
    }
    return word + repeatString(word, number-1);
};
repeatString('hello', 2);
// Do not edit below this line
module.exports = repeatString;
