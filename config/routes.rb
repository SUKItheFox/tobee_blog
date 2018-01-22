Rails.application.routes.draw do

  

  
  mount RailsAdmin::Engine => '/admin', as: :rails_admin
  mount Piggybak::Engine => '/shop/checkout', as: :piggybak
  mount PiggybakTaxonomy::Engine => '/shop', :as => 'piggybak_taxonomy'
  mount PiggybakCoupons::Engine => '/shop', :as => 'piggybak_coupons'
  mount PiggybakGiftcerts::Engine => '/shop', :as => 'piggybak_giftcerts'
  mount PiggybakBundleDiscounts::Engine => '/shop', :as => 'piggybak_bundle_discounts'
    
  

  
  resources :profile_pictures, only: [ :create ]

  get 'users/:id/chat' => 'messages#index'
  
  
  devise_for :users

  
  get '/chat' => 'conversations#index'
  

  

  resources :conversations do
    resources :messages
  end

  get 'users/:id' => 'users#show', as: :user
  resources :posts do
  	resources :comments
  	resources :about    
      	
  end

  
  	
  root "posts#index"

  resources :upload 
  get '/about', to: 'pages#about' 
  get '/beehive', to: 'pages#beehive'
  get '/personal_page', to: 'pages#personal_page'
  get '/forum', to: 'forumposts#index'
  get '/avatar', to: 'pages#index'


  
  resources :forumposts do
    resources :forumcomments
  end  

  
  get '/shop', to: 'products#index'

  resources :products
  
end
