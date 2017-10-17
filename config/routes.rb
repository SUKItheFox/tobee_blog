Rails.application.routes.draw do
  
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  resources :posts do
  	resources :comments
  	resources :about
  	resources :categories
  end
  	
  root "posts#index"

  get '/about', to: 'pages#about' 
end
