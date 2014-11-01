var Controller = function(view, model) {
  this.view = view
  this.model = model
}

Controller.prototype = {

  bindEvents: function(){

  },

  updateView: function(){

  }

}

app = new Controller(new AppView(), new DishList());
app.bindEvents();
