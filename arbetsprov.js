//DISPLAY ALL PRODUCTS INITIALLY
function displayAll(){
    var img = new Image();
    img.src = products[0].product_image.url;
    document.getElementById("card-title0").innerHTML =
    products[0].name;
    document.getElementById("card-img0").appendChild(img);

    var img = new Image();
    img.src = products[1].product_image.url;
    document.getElementById("card-title1").innerHTML =
    products[1].name;
    document.getElementById("card-img1").appendChild(img);

    var img = new Image();
    img.src = products[2].product_image.url;
    document.getElementById("card-title2").innerHTML =
    products[2].name;
    document.getElementById("card-img2").appendChild(img);

    var img = new Image();
    img.src = products[3].product_image.url;
    document.getElementById("card-title3").innerHTML =
    products[3].name;
    document.getElementById("card-img3").appendChild(img);

    var img = new Image();
    img.src = products[4].product_image.url;
    document.getElementById("card-title4").innerHTML =
    products[4].name;
    document.getElementById("card-img4").appendChild(img);

    var img = new Image();
    img.src = products[5].product_image.url;
    document.getElementById("card-title5").innerHTML =
    products[5].name;
    document.getElementById("card-img5").appendChild(img);

    var img = new Image();
    img.src = products[6].product_image.url;
    document.getElementById("card-title6").innerHTML =
    products[6].name;
    document.getElementById("card-img6").appendChild(img);

    var img = new Image();
    img.src = products[7].product_image.url;
    document.getElementById("card-title7").innerHTML =
    products[7].name;
    document.getElementById("card-img7").appendChild(img);

    var img = new Image();
    img.src = products[8].product_image.url;
    document.getElementById("card-title8").innerHTML =
    products[8].name;
    document.getElementById("card-img8").appendChild(img);
}
//DISPLAY PRODUCTS BASED ON SEARCH INPUT
$(document).ready(function(){
  $("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".card .card-body").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
