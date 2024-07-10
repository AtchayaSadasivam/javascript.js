// Adding tax to find the total cost

var sale1;
var sale2;
var sale3;
var sale4;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 240, taxRate: 35 };

function calculateTaxAndTotal(sale) {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
}
calculateTaxAndTotal(sale1);
calculateTaxAndTotal(sale2);
calculateTaxAndTotal(sale3);
calculateTaxAndTotal(sale4);

function displaySaleInfo(sale) {
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax.toFixed(2));
    console.log("total cost = $" + sale.total.toFixed(2));
    console.log("------------------------------\n");
  }
  
  displaySaleInfo(sale1);
  displaySaleInfo(sale2);
  displaySaleInfo(sale3);
  displaySaleInfo(sale4);
  




/* Further Adventures
 *
 * 1) Add the details for a fourth sale.
 *
 * 2) Log the fourth sale to the console.
 *    Use the same format as the others.
 *
 * 3) Add code to separate out the different
 *    sales on the console.
 *
 */