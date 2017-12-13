Rails.application.routes.draw do
  
  

  get '/shop', to: 'store#index'
  resources :charges

  get 'chat' => 'conversations#show'
  
  
  devise_for :users

  authenticated :user do
    get 'users/:id/chat' => 'users#index'
  end

  unauthenticated :user do
    devise_scope :user do
      get "/" => "devise/sessions#new"
    end
  end

  resources :conversations do
    resources :messages
  end

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
