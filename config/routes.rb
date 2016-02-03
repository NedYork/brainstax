Links::Application.routes.draw do
  root "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :subjects
    resources :users, only: [:show]
    resource :session, only: [:create, :destroy, :show]
    resources :decks, only: [:create, :destroy, :new, :index, :show]
    resources :cards, only: [:create, :destroy, :new] do
      collection do
        get 'mass_create'
      end
    end
    patch '/usercardratings', to: 'user_card_ratings#update'
  end
end
