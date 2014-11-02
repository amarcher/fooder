require 'rest_client'

class FoodController < ApplicationController

  def index
  end

  def item
  	@response = RestClient::Request.execute(:url => 'https://www.kimonolabs.com/api/a7402n1s?apikey=Rj0rcm6juczm4poVvvJrivDOVdYMjhQv', :method => :get, :verify_ssl => false)
  	render json: @response
  end

end
