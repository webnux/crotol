class FriendshipsController < ApplicationController

	def create
	  @friendship = current_user.friendships.build(:friend_id => params[:friend_id])
		
	  respond_to do |format|

		  if @friendship.save
		  	format.html { redirect_to edit_user_registration_path(current_user), :notice => "Friend Added!" }
		    format.js
		  else
		  	format.html { redirect_to edit_user_registration_path(current_user), :notice => "Unable to add Friend!" }
		    format.js
		  end

	  end

	end

	def destroy
	  if params[:test] == "inverse"

		  @friendship = current_user.friendships.find(params[:id])

		  respond_to do |format|

			  if @friendship.destroy
			  	format.html { redirect_to edit_user_registration_path(current_user), :notice => "Friend Removed!" }
			    format.js
			  else
			  	format.html { redirect_to edit_user_registration_path(current_user), :notice => "Unable to remove Friend!" }
			    format.js
			  end

		  end
	
		else

		  @inverse_friendship = current_user.inverse_friendships.find(params[:id])

		  respond_to do |format|

			  if @inverse_friendship.destroy
			  	format.html { redirect_to edit_user_registration_path(current_user), :notice => "Friend Removed!" }
			    format.js
			  else
			  	format.html { redirect_to edit_user_registration_path(current_user), :notice => "Unable to remove Friend!" }
			    format.js
			  end

		  end

		end


	end



end