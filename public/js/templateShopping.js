console.log("TEMPLATE SHOPPING HERE");

// var html = "<div><img src='#{src}' /> #{name}</div>".interpolate(json);
// $('container').insert(html);
$( document ).ready(function() {
  simpleCart.each(function(item) {
    quantity = item.get('quantity');
    name = item.get('name');
    ethaddress = item.get('ethaddress');
    price = item.get('price')
    var html = '<div id="checkoutClass" class="myBox"> \
        <div class="col-md-3" id="checkoutBox">\
          <div class="body">\
            <p id="eventName">Event Name:' + name + '</p>\
            <p id="eventPrice">Event Price:' + price + 'ETH</p>\
            <p id="eventQuantity">Quantity:' + quantity + '</p>\
            <p id="eventAddress">Address:' + ethaddress + ' The 8th itheration of Valves CS:GO major returns to Boston in 2018</p>\
          </div>\
            <button class="btn btn-primary btn-lg btn-block" onclick="buy(' + ethaddress + ')">Execute Transaction</button>\
            <hr class="mb-4">\
      </div>\
    </div>';
    document.getElementById('cartListing').insertAdjacentHTML('afterend', html);
  });
});

/*  */
