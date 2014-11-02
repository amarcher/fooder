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
    this.listView.clearList();
    for (var i = 0; i < this.model.items.length; i++) {
      this.listView.appendToList(this.model.items[i].name.text);
    };
  },

  liked: function(e){
    e.preventDefault();
    this.model.addItem("Pizza");
    this.listView.appendToList("<li>Pizza</li>");
  },

  fetchList: function(){
    $.ajax("/food-item").done(function(data){

      this.model.items = data.results.fresh_roll

      $(".overlay").fadeOut("slow", function(){
        this.remove();
      });

      this.updateView();

    }.bind(this));
  }

}

$(document).ready(function(){
  app = new Controller(new ListView(), new TinderView(), new DishList());

  var overlay = '<div class="overlay">' +
            '<img class="loading" src="http://bit.ly/pMtW1K">' +
            '</div>';
  $(overlay).appendTo('body');

  app.fetchList();
  app.bindEvents();
});
