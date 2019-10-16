Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, only: [:create]
  
  get '/users/current', to: "users#current"

  resources :auctions do
    resources :bids
  end

  resource :sessions, only: [:create, :destroy]

end
