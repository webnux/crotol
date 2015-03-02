class AddCommentTrackerToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :comment_created_at, :datetime
  end
end