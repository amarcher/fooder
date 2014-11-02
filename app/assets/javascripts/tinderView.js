var TinderView = function(){
  this.yesButton = "#yes"
  this.noButton = "#no"
  this.view = "#tinder"
  this.tinder_name = "#tinder_name"
  this.tinder_restaurant = "#tinder_restaurant"
  this.tinder_image = "#tinder_image"
}

TinderView.prototype = {

  show: function(){
    $(this.view).fadeIn();
  },

  hide: function(){
    $(this.view).hide();
  },

  replaceFood: function(image_source, food_name, restaurant){
    $(this.tinder_image).attr("src",image_source);
    $(this.tinder_name).text(food_name);
    $(this.tinder_restaurant).text(restaurant);
  }

}
