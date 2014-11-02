var Controller = function(params) {
  this.listView = params.listView;
  this.tinderView = params.tinderView;
  this.comparinatorView = params.comparinatorView;
  this.model = params.model;
  this.list = params.list;
  this.currentView = 0;
}

Controller.prototype = {

  bindEvents: function(){
    $(this.tinderView.yesButton).on("click", this.liked.bind(this));
    $(this.tinderView.noButton).on("click", this.disliked.bind(this));
    $(this.listView.compare).on("click", this.toggleViews.bind(this));
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
    this.tinderView.replaceFood("#", this.model.getNextItem().name.text, "Fresh Roll");
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
  },


  toggleViews: function(){
    this.currentView ^= 1;
    if (this.currentView == 0){
      this.showTinder();
    } else {
      this.showComparinator();
    }
  },

  showComparinator: function(){
    this.tinderView.hide();
    this.comparinatorView.show(); // TODO: Make deferred object
    this.listView.switchToComparinator();
  },

  showTinder: function(){
    this.comparinatorView.hide();
    this.tinderView.show(); // TODO: Make deferred object
    this.listView.switchToTinder();
  }

}

$(document).ready(function(){

  app = new Controller( {
    listView: new ListView(),
    tinderView: new TinderView(),
    comparinatorView: new ComparinatorView(),
    model: new DishList(),
    list: new DishList()
  } );

  var overlay = '<div class="overlay">' +
            '<img class="loading" src="http://bit.ly/pMtW1K">' +
            '</div>';
  // $(overlay).appendTo('body');

  // app.fetchList();
  app.bindEvents();
});
