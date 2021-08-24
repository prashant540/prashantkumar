Rails.application.routes.draw do
  get 'home/index'
  root to: "home#index"
  post 'ocr', to: "files#ocr"
  post 'convert', to: "files#convert"
  post 'merge', to: "files#merge"
  post 'split', to: "files#split"
  get "download", to: "files#download"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
