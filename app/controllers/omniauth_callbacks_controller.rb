class OmniauthCallbacksController < Devise::OmniauthCallbacksController   
   
   def facebook     
     
      @user = User.find_for_facebook_oauth(request.env["omniauth.auth"], current_user)      
   
      if @user.persisted?       
         sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      else
         session["devise.facebook_data"] = request.env["omniauth.auth"]
         redirect_to new_user_registration_path
      end
      
   end
   
   def twitter     
     
      @user = User.find_for_twitter_oauth(request.env["omniauth.auth"])      
   
      if @user.persisted?
         sign_in_and_redirect @user
       else
         session["devise.twitter_data"] = request.env["omniauth.auth"].except("extra")
         redirect_to new_user_registration_path
       end
      
   end


end