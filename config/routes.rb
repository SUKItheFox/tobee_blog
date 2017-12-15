Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: :rails_admin
  mount Piggybak::Engine => '/shop/checkout', as: :piggybak
  mount PiggybakTaxonomy::Engine => '/shop', :as => 'piggybak_taxonomy'
  mount PiggybakCoupons::Engine => '/shop', :as => 'piggybak_coupons'
  mount PiggybakGiftcerts::Engine => '/shop', :as => 'piggybak_giftcerts'
  mount PiggybakBundleDiscounts::Engine => '/shop', :as => 'piggybak_bundle_discounts'
    
  

  
  get '/shop', to: 'store#index'
  resources :charges

  get 'chat' => 'conversations#show'
  
  
  devise_for :users

  
    get 'users/:id/chat' => 'users#index'
  

  

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

  resources :products, only: :show
  
end
