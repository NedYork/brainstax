Links::Application.routes.draw do
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :subjects
    resources :decks, only: [:create, :destroy, :new, :index, :show]
  end

  root "static_pages#root"
end
