module.exports = { computeSalesCommission };

function computeSalesCommission(salaried, sales) {

    if (salaried == true) {
        if (sales < 300) {

            console.log("Commission: " + 0.00 * sales);
        } else if (sales <= 500) {
            console.log("Commission: " + 0.02 * sales);
        } else {
            console.log("Commission: " + 0.03 * sales);
        }
    } else if (salaried == false) {
        if (sales > 300) {
            console.log("Commission: " + 0.02 * sales);
        } else if (sales > 500) {
            console.log("Commission: " + 0.03 * sales);
        } else {
            console.log("Commission: " + 0.00 * sales);
        }
    }
}
console.log("expect: 8", computeSalesCommission(true, 400));
console.log("expect: 8", computeSalesCommission(false, 600));