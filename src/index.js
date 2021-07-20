module.exports = function reverse (n) {
    let a = [];
    if (n<0) {
        a = n.toString().split('').reverse().slice(0, a.length - 1);
    } else {
        a = n.toString().split('').reverse();
    }
    return +a.join('');
}
