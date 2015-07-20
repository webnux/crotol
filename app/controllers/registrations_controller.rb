class RegistrationsController < Devise::RegistrationsController
  
  
  def edit
    
    @users = User.all_except(current_user)

    if current_user.facebook.access_token

      if current_user.provider == "twitter"
        @cover = current_user.avatar
      else 
        @cover = current_user.facebook.get_object("me?fields=cover")["cover"]["source"]
      end

    end

  end 


  private
 
  def sign_up_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :avatar)
  end
 
  def account_update_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :current_password, :avatar)
  end


  # Allow update resource without password confirmation
  def update_resource(resource, params)
      resource.update_without_password(params)
  end
   

  
   
end