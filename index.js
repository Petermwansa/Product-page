let productImg = document.getElementById("product__img");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
    productImg.src = "432 product-img/image1.png"

    // here we remove the active class name from all the other buttons
    for(bt of btn){
        bt.classList.remove("active");
    }
    // then we add the class to this particular button
    this.classList.add("active");
}
btn[1].onclick = function () {
    productImg.src = "432 product-img/image2.png"
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function () {
    productImg.src = "432 product-img/image3.png"
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}