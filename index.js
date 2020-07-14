function add_item(chosen_id) {
    console.log(chosen_id);
    console.log(chosen_id+'_total');
    amt = parseInt(document.getElementById(chosen_id+'_total').textContent,10);
    document.getElementById(chosen_id+'_total').textContent = ++amt;
    document.getElementById(chosen_id+'_total').style.display = "inline";
    document.getElementById(chosen_id+'_total_text').style.display = "inline";
    calculate_price();
}
function remove_item(chosen_id) {
    console.log(chosen_id)
    console.log(chosen_id+'_total')
    amt = parseInt(document.getElementById(chosen_id+'_total').textContent,10);
    amt--;
    if (amt <= 0) {
        amt = 0;
        document.getElementById(chosen_id+'_total').style.display = "none";
        document.getElementById(chosen_id+'_total_text').style.display = "none";
    }
    document.getElementById(chosen_id+'_total').textContent = amt;
    calculate_price();
}
function calculate_price(coupon = 0) {
    total = 
    Math.max(parseInt(document.getElementById('italian_total').textContent,10) * 4.50 +
    parseInt(document.getElementById('american_total').textContent,10) * 3.50 +
    parseInt(document.getElementById('tea_total').textContent,10) * 3.00 +
    parseInt(document.getElementById('chocolate_total').textContent,10) * 3.00 -
    coupon,0);
    document.getElementById('discount').textContent = 'Discount: $' + coupon.toFixed(2);
    document.getElementById('total').textContent = 'Total: $' + total.toFixed(2);
    if (total > 10) {
        document.getElementById('cash-pay').style.display="none";
    } else {
        document.getElementById('cash-pay').style.display="inline";
    }
}
function evaluate_coupon() {
    if (document.getElementById("coupon").value == "yeehaw!") {
        calculate_price(2);
    }
}