var DishList = function() {
  this.items = []
  this.currentPosition = 0;
}

DishList.prototype = {

  addItem: function(item){
    this.items.push(item);
  },

  removeItem: function(index){
    this.items.splice(index,1);
  },

  pickItem: function(index){
    return this.items[index];
  },

  getNextItem: function(){
    if(this.currentPosition < this.items.length-1)
      this.currentPosition++;
    return this.items[this.currentPosition];
  },

  getCurrentItem: function(){
    return this.items[this.currentPosition];
  }

}
