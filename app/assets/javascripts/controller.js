var Controller = function(listView, tinderView, model, list) {
  this.listView = listView;
  this.tinderView = tinderView;
  this.model = model;
  this.list = list;
}

Controller.prototype = {

  bindEvents: function(){
    $(this.tinderView.yesButton).on("click", this.liked.bind(this));
    $(this.tinderView.noButton).on("click", this.disliked.bind(this));
  },

  updateView: function(){
    this.listView.clearList();
    for (var i = 0; i < this.list.items.length; i++) {
      this.listView.appendToList("<li>"+this.list.items[i].name.text+"</li>");
    };
    this.tinderView.replaceFood("#", this.model.pickItem(0).name.text, "Fresh Roll")
  },

  liked: function(e){
    e.preventDefault();
    item = this.model.getCurrentItem()
    this.list.addItem(item);
    this.listView.appendToList("<li>"+item.name.text+"</li>");
  },

  disliked: function(e){
    e.preventDefault();
    this.tinderView.replaceFood("#", this.model.getNextItem().name.text, "Fresh Roll"); 
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
  app = new Controller(new ListView(), new TinderView(), new DishList(), new DishList());

  var overlay = '<div class="overlay">' +
            '<img class="loading" src="http://bit.ly/pMtW1K">' +
            '</div>';
  $(overlay).appendTo('body');

  app.fetchList();
  app.bindEvents();
});
