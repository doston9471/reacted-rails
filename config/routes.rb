Rails.application.routes.draw do
  resources :employees
  resources :contractors
  resources :projects
  resources :assignments
end
