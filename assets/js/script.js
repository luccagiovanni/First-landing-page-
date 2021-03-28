
window.onload = function(){
    var product = document.querySelector('#product');
    var button = document.querySelector('#mainButton');
    var list = document.querySelector('.carList');


    button.addEventListener("click", addProduct)

    function addProduct(){
        var item = '<li>' + product.value + '</li>';
        list.innerHTML += item;
        product.value = '';
        product.focus();
    }

    product.addEventListener("keypress", function(e) {
        if (e.key === 'Enter') {
            addProduct();
        } 
    })
    
}