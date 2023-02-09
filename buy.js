var productid= sessionStorage.getItem("productId");
document.getElementById("pid").innerHTML= productid + "";
var producttitle=sessionStorage.getItem("productTitle");
document.getElementById("ptitle").innerHTML= producttitle + "";
let x = document.getElementById("text1").value;
var productprice= sessionStorage.getItem("productPrice");
document.getElementById("sale").innerHTML= productprice;
var y = document.getElementById("text2").value;
var z= document.getElementById("ptitle").innerHTML;
function sold(){
    alert("You have bought "+z+".\n We will deliver it soon!!!\n Thank You for visiting Us!")
}


