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


describe("test of ComputSalesCommission", function() {
    it("tests salaried and 200 sales", function() {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function() {
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function() {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function() {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function() {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function() {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});