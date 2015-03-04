class ApplicationController < ActionController::Base	
  http_basic_authenticate_with name: ENV["HTTP_NAME"], password: ENV["HTTP_PASSWORD"]
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # Catch all CanCan errors and alert the user of the exception
  rescue_from CanCan::AccessDenied do | exception |
    redirect_to posts_path
  end

end


