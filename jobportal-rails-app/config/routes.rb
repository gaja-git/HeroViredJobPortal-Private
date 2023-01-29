Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "application#index"
  resources :jobdetails
  resources :candidateapplication
  
  resources :useraccount
  resources :login
  resources :logout
  resources :profile
  resources :skill
  resources :eligiblejobs
  resources :appliedjobs
  resources :myapplications
end
