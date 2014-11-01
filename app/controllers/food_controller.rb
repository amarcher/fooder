require 'rest_client'

class FoodController < ApplicationController

  def index
  end

  def item
  	@response = RestClient.get 'https://www.kimonolabs.com/api/a7402n1s?apikey=Rj0rcm6juczm4poVvvJrivDOVdYMjhQv'
  	render json: @response
  end

end
