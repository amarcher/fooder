var ComparinatorView = function(){
  this.view = "#comparinator"
  this.stage_1 = "#stage_1"
  this.stage_2 = "#stage_2"
}

ComparinatorView.prototype = {

  show: function(){
    $(this.view).fadeIn();
  },

  hide: function(){
    $(this.view).hide();
  },

  replaceStage: function(stage_number, image_source, food_name, restaurant){
    if (stage_number == 1) {
      var stage = this.stage_1
    } else {
      var stage = this.stage_2
    }

    $(stage).find('img').attr("src",image_source);
    $(stage).find('.comparinator_name').text(food_name);
    $(stage).find('.comparinator_restaurant').text(restaurant);
  }

}
