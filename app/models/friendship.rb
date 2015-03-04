class Friendship < ActiveRecord::Base
	belongs_to :user
	belongs_to :friend, :class_name => "User"

   def cancel_frienship
      self.destroy
   end

   

end
