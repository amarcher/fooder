Rails.application.routes.draw do
  root 'food#index'

  get '/food-item' => 'food#item'
end
