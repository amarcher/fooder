var DishList = function() {
  this.items = []
}

DishList.prototype = {

  addItem: function(item){
    this.items.push(item);
  },

}
