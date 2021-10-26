// When a coffee is selected update the price element and total
document.getElementById('coffeeselect').addEventListener('change', function() {
    var selectprice = document.getElementById('coffeeselect').value;
    var priceelement = document.getElementById('coffeeprice');
    priceelement.innerHTML = '$' + selectprice;

    calcTotal();
});

//Ditto for food
document.getElementById('foodselect').addEventListener('change', function() {
    var selectprice = document.getElementById('foodselect').value;
    var priceelement = document.getElementById('foodprice');
    priceelement.innerHTML = '$' + selectprice;

    calcTotal();
});

//Update total based on quantity selection
document.getElementById('foodqty').addEventListener('change', calcTotal);
document.getElementById('coffeeqty').addEventListener('change', calcTotal);

//Take the total element, convert to a number variable
//Calculate and update total is the sum of coffee/food totals
//Replace the total element with the updated total 
function calcTotal() {
    var grandtotal = 0;
    var totalelement = document.getElementById('grandtotal');

    var coffeetotal = 0;
    var coffeeprice = parseFloat(document.getElementById('coffeeselect').value);
    var coffeeqty = parseFloat(document.getElementById('coffeeqty').value);
    
    coffeetotal = coffeeprice * coffeeqty;

    var foodtotal = 0;
    var foodprice = parseFloat(document.getElementById('foodselect').value);
    var foodqty = parseFloat(document.getElementById('foodqty').value);
    
    foodtotal = foodprice * foodqty;

    grandtotal = (coffeetotal + foodtotal).toFixed(2);
    totalelement.innerHTML = '$' + grandtotal;

}

//When total is greater than $0.00, allow user to proceed
//to order form
document.getElementById('checkout').addEventListener('click', function() {
    var totalelement = document.getElementById('grandtotal');
    var total = parseFloat(totalelement.innerHTML.replace('$', ''));

    if(total > 0){
        window.location.href = 'checkout.html';
    } else {
        alert('Please select at least one item');
        return;
    }
});

