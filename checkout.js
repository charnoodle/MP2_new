//Js for Your Cart
var total = 0;
const cost = new Map([  
  ["rideAllYouCan", [899, "Ride All You Can"]],
  ["xpressPass", [999, "Xpress Pass"]],
  ["regular", [699, "Regular"]],
  ["basic", [499, "Basic"]],
  ["groupPackage", [3499, "Barkada Package"]],
  ["couplePackage", [1899, "Couple Package"]],
]);

$(document).ready(function () {
  $("form").submit(function (x) {
    let ticketPurchase = $("#productSelect").val();
    let [price, description] = cost.get(ticketPurchase); // retrieve both price and description
    let quantity = $("#quantityInput").val();
    price = quantity * price; // calculate the total price

    let row = "<tr><td >" + description + "</td><td>₱" + price + "</td><td><button class='removeButton'>Remove</button></td></tr>";
    $('#productTable tbody').append(row);

    total += price;
    $('#total').text('Total: ₱' + total.toFixed(2));

    x.preventDefault();
  });

  $(document).on('click', '.removeButton', function() {
    let row = $(this).closest('tr');
    let price = row.find('td:nth-child(2)').text().replace('₱', '');
    total -= parseFloat(price);
    $('#total').text('Total: ₱' + total.toFixed(2));
    row.remove();
  });
});


  
//Js for the QR Code Generator for tickets
var qrcode = new QRCode(document.querySelector(".qrcode"));
// qrcode.makeCode("Why did you scan me?")
function generateQr() {
  var text = "";
  $("#productTable tr").each(function() {
    var $row = $(this);
    var item = $row.find("td:nth-child(1)").text().trim();
    var price = $row.find("td:nth-child(2)").text().trim();
    text += item + " - " + price + "\n";
  });
  text += "Name: " + $("input").val();
  qrcode.makeCode(text);
}

function updateQrCode() {
  // Get the current content of the table
  var tableContent = '';
  var rows = document.querySelectorAll("#orderTable tbody tr");
  rows.forEach(function(row) {
    var cols = row.querySelectorAll("td");
    var name = cols[0].textContent;
    var quantity = cols[1].textContent;
    tableContent += name + ": " + quantity + "\n";
  });
  
  // Generate the QR code based on the table content
  var qrcode = new QRCode(document.querySelector(".qrcode"));
  qrcode.makeCode(tableContent);
}
// Add a new item to the table and update the QR code
function addItem() {
  // ... code to add a new row to the table ...
  updateQrCode();
}


// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("placeOrderBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function goToHomePage() {
  window.location.href = "./index.html";
}

//Code for the payment options

// const showInputRadio = document.getElementById("show-input-radio");
//     const inputContainer = document.getElementById("input-container");

//     showInputRadio.addEventListener("change", () => {
//       if (showInputRadio.checked) {
//         inputContainer.style.display = "block";
//       }
//     });


// const showInputRadio2 = document.getElementById("show-input-radio2");
//     const inputContainer2 = document.getElementById("input-container2");

//     showInputRadio2.addEventListener("change", () => {
//       if (showInputRadio2.checked) {
//         inputContainer2.style.display = "block";
//       }
//     });

//     const showInputRadio3 = document.getElementById("show-input-radio3");
//     const inputContainer3 = document.getElementById("input-container3");

//     showInputRadio3.addEventListener("change", () => {
//       if (showInputRadio3.checked) {
//         inputContainer3.style.display = "block";
//       }
//     });