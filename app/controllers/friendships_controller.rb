class FriendshipsController < ApplicationController

	def create
	  @friendship = current_user.friendships.build(:friend_id => params[:friend_id])
	  #@friend_user = User.find(params[:friend_id])
	  #@friendship2 = @friend_user.friendships.build(:friend_id => current_user.id)
		
	  respond_to do |format|

		  if @friendship.save #&& @friendship2.save
		  	format.html { redirect_to edit_user_registration_path(current_user), :notice => "Friend Added!" }
		    format.js
		  else
		  	format.html { redirect_to edit_user_registration_path(current_user), :notice => "Unable to add Friend!" }
		    format.js
		  end

	  end

	end

	def destroy
	  @friendship = current_user.friendships.find(params[:id])
	  #@friend_user = User.find(params[:friend_user])
	  #@friendship2 = @friend_user.friendships.where("user_id = ? AND friend_id = ?", @friend_user, current_user).first

	  respond_to do |format|

		  if @friendship.destroy #&& @friendship2.destroy	
		  	format.html { redirect_to edit_user_registration_path(current_user), :notice => "Friend Removed!" }
		    format.js
		  else
		  	format.html { redirect_to edit_user_registration_path(current_user), :notice => "Unable to remove Friend!" }
		    format.js
		  end

	  end

	end




end