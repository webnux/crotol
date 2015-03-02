class Comment < ActiveRecord::Base
	belongs_to :post
	belongs_to :user

  after_save :update_post_comment_created_at

  private

  def update_post_comment_created_at
    self.post.touch(:comment_created_at) if self.post
  end


end
