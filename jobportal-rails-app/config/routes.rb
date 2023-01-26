Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "application#index"
  resources :jobdetails
  resources :candidateapplications
  
  resources :useraccount
  resources :login
  resources :logout
  resources :profile
  resources :skillsrepo
end
