Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users
  resources :orders
  resources :order_items
  resources :items

  # Route to authenticate user 
  post '/users/authenticate', to: 'users#authenticate' 
  get '/create-account', to: 'users#create'
  get '/user/:id', to: 'users#show'
  # Sneaker routes 
  get '/sneakers', to: 'items#index'
  get '/sneaker/:id/details', to: 'items#show'
  # Users' order routes
  get '/orders', to: 'orders#index'
  get '/order/:id/', to: 'orders#show'
  post '/orders/create', to: 'orders#create'

  



end
