Rails.application.routes.draw do
  resources :employees, only: [:show, :index]
  resources :contractors, only: [:show, :index]
  resources :projects, only: [:show, :index]
  resources :assignments
  root to: "employees#index"
end
