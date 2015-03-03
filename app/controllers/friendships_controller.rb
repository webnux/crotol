class FriendshipsController < ApplicationController
	
	def create
	
	  @friendship1 = current_user.friendships.build(:friend_id => params[:friend_id])
	  other_user   = User.find(params[:friend_id])
	  @friendship2 = other_user.friendships.build(:friend_id => current_user.id)
	
	  if @friendship1.save && @friendship2.save
	    flash[:notice] = "Added friend."
	    redirect_to edit_registration_path(current_user)
	  else
	    flash[:error] = "Unable to add friend."
	    redirect_to edit_registration_path(current_user)
	  end
	
	end

	def destroy
	  @friendship1 = current_user.friendships.find(params[:id])
	  other_user   = User.find(params[:other_user])
	  @friendship2 = other_user.friendships.where("user_id = ? AND friend_id = ?", other_user, current_user).first
	  @friendship1.destroy && @friendship2.destroy
	  flash[:notice] = "Removed friendship."
	  redirect_to edit_registration_path(current_user)
	end

end

