var Controller = function(listView, tinderView, model) {
  this.listView = listView
  this.tinderView = tinderView
  this.model = model
}

Controller.prototype = {

  bindEvents: function(){
    $(this.tinderView.yesButton).on("click", this.liked.bind(this));
  },

  updateView: function(){

  },

  liked: function(e){
    e.preventDefault();
    this.model.addItem("Pizza");
    this.listView.appendToList("<li>Pizza</li>");
  }

}

$(document).ready(function(){
  app = new Controller(new ListView(), new TinderView(), new DishList());
  app.bindEvents();
});
