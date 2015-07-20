class User < ActiveRecord::Base

  has_many :friendships, dependent: :destroy
  has_many :friends, :through => :friendships
  has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id", dependent: :destroy
  has_many :inverse_friends, :through => :inverse_friendships, :source => :user
  has_many :posts
  has_many :comments, :through => :posts

  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable
   
  def self.find_for_facebook_oauth(auth)
    
     user = User.where(:provider => auth.provider, :uid => auth.uid).first
    
     if user
          return user
     else
          registered_user = User.where(:email => auth.info.email).first
      
          if registered_user
             return registered_user
          else
             user = User.create(
                  name:auth.extra.raw_info.name,
                  provider:auth.provider,
                  uid:auth.uid,
                  oauth_token:auth.credentials.token,
                  password:Devise.friendly_token[0,20],
                  avatar:auth.info.image
             )
          end
        
     end
     
   end

  def self.find_for_twitter_oauth(auth)
    
     user = User.where(:provider => auth.provider, :uid => auth.uid).first
    
     if user
          
          return user
     
     else
          registered_user = User.where(:oauth_token => auth.credentials.token).first
      
          if registered_user
             return registered_user
          else
             user = User.create(
                  name:auth.info.nickname,
                  provider:auth.provider,
                  uid:auth.uid,
                  oauth_token:auth.credentials.token,
                  password:Devise.friendly_token[0,20],
                  avatar:auth.info.image
             )
          end
        
     end
     
  end


   def facebook
      @facebook ||= Koala::Facebook::API.new(oauth_token)
   end


   
   scope :all_except, ->(user) { where.not(id: ([user] + user.friends + user.inverse_friends).map(&:id)) }


end

