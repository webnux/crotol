class UserMailer < ActionMailer::Base
	
	def welcome_mailer(user)

		@user = user

		mail(to: user.email,	
			 from: "services@crotol.com",
			 subject: "Welcome!"
		)
	end


	def post_commented(post_user, comment_user)
		@post_user = post_user
		@comment_user = comment_user

		mail(to: post_user.email,	
			 from: "services@crotol.com",
			 subject: "You have a comment on your Post!"
		)
	end

end





