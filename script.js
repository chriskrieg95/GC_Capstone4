function showMe (box, name) {
        var name = name.toString();
        var chboxs = document.getElementsByName(name);
        var vis = "none";
        for(var i=0;i<chboxs.length;i++) {
            if(chboxs[i].checked){
             vis = "block";
                break;
            }
        }
        document.getElementById(box).style.display = vis;
    }
//get item name and storing it in items array
var items = [];
var prices = [];
var quantity = [];
function addToCart(item, price, id) {
  items.push(item);
  prices.push(price);
  var num = document.getElementById(id).value;
  quantity.push(num);
  // for (var i = 0; i < items.length; i++) {
  //   console.log(items[i] + ", " + prices[i] + ", " + quantity[i]);
  // }

}

function printItemInBox() {
  // Step 1: find the element
  var box = document.getElementById("colorbox");
  // add a new paragraph for each time a button color is clicked
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    box.innerHTML += "<p>"  + "(" + quantity[i] + ") " + items[i] + " " + prices[i] + "</p>";
    total += prices[i] * quantity[i];
  }
  box.innerHTML += "<p>Total $" + total.toFixed(2); + "</p>";


}
