function orderEggs(quantity, style){
    var order = "Order for "+quantity+" "+style+" "
    quantity === 1? order+="egg" : order+="eggs"
    return order
}

orderEggs(7, "poached");
orderEggs(3, "camel's");
orderEggs("fourteen", "scrambled");
orderEggs(1, "raw");
orderEggs(0, "fried");

return typeof orderEggs(6, "baked") !== "undefined" ? true : false