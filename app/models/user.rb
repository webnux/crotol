class User < ActiveRecord::Base
  has_many :friendships
  has_many :friends, :through => :friendships
  has_many :posts
  has_many :comments, :through => :posts
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable
   
  def self.find_for_facebook_oauth(auth, signed_in_resource=nil)
    
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
                  email:auth.info.email,
                  password:Devise.friendly_token[0,20],
                  avatar:auth.info.image
             )
          end
        
     end
   end
   
   def facebook
      @facebook ||= Koala::Facebook::API.new(oauth_token)
   end
   
   scope :all_except, ->(user) { where.not(id: (user.friends + [user]).map(&:id)) }

end