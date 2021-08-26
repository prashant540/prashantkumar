Rails.application.routes.draw do
  get 'home/index'
  root to: "home#index"
  post 'ocr', to: "pdf_files#ocr"
  post 'convert', to: "pdf_files#convert"
  post 'merge', to: "pdf_files#merge"
  post 'split', to: "pdf_files#split"
  get "download", to: "pdf_files#download"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
