Rails.application.routes.draw do
  
  
  
  
  devise_for :admins
  devise_for :users
  get 'users/:id' => 'users#show', as: :user
  resources :posts do
  	resources :comments
  	resources :about
    resources :users
      	
  end
  	
  root "posts#index"

  get '/about', to: 'pages#about' 
  get '/personal_page', to: 'pages#personal_page'
  
end
