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

images = [
'http://s3.amazonaws.com/trycaviar.com/offers/71/2589.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2590.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2591.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2592.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2593.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2594.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2595.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2596.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2596.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2597.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2598.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2599.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2600.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2601.jpg', 
'http://s3.amazonaws.com/trycaviar.com/offers/71/2602.jpg',
'http://s3.amazonaws.com/trycaviar.com/offers/71/2603.jpg',
'http://s3.amazonaws.com/trycaviar.com/offers/71/2604.jpg',
'http://s3.amazonaws.com/trycaviar.com/offers/71/2605.jpg',
'http://s3.amazonaws.com/trycaviar.com/offers/71/2606.jpg',
'http://s3.amazonaws.com/trycaviar.com/offers/71/2607.jpg'
]
