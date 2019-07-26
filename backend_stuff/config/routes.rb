Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users
  resources :orders
  resources :order_items
  resources :items


  post '/users/authenticate', to: 'users#authenticate' 

end
