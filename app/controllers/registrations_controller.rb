class RegistrationsController < Devise::RegistrationsController
  
  
  def edit
    @cover = current_user.facebook.get_object("me?fields=cover")["cover"]["source"]
  end

  private
 
  def sign_up_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :avatar)
  end
 
  def account_update_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :current_password, :avatar)
  end

  def update_resource(resource, params)
    if current_user.provider == "facebook"
      params.delete("current_password")
      resource.update_without_password(params)
    else
      resource.update_with_password(params)
    end
  end
   

   
end