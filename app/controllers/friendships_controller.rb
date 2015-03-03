class FriendshipsController < ApplicationController

	def create
	  @friendship1 = current_user.friendships.build(:friend_id => params[:friend_id])
	  @friend_user = User.find(params[:friend_id])
	  @friendship2 = @friend_user.friendships.build(:friend_id => current_user.id)
		
	  respond_to do |format|

		  if @friendship1.save && @friendship2.save
		    format.js
		  else
		    format.js
		  end

	  end

	end

	def destroy
	  @friendship1 = current_user.friendships.find(params[:id])
	  @friend_user = User.find(params[:friend_user])
	  @friendship2 = @friend_user.friendships.where("user_id = ? AND friend_id = ?", @friend_user, current_user).first

	  respond_to do |format|

		  if @friendship1.destroy && @friendship2.destroy	
		    format.js
		  else
		    format.js
		  end

	  end

	end




end