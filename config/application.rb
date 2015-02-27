require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Crotol
  class Application < Rails::Application

    initializer 'setup_asset_pipeline', :group => :all  do |app|
      # We don't want the default of everything that isn't js or css, because it pulls too many things in
      app.config.assets.precompile.shift

      # Explicitly register the extensions we are interested in compiling
      app.config.assets.precompile.push(Proc.new do |path|
        File.extname(path).in? [
          '.html', '.erb', '.haml',                 # Templates
          '.png',  '.gif', '.jpg', '.jpeg',         # Images
          '.eot',  '.otf', '.svc', '.woff', '.ttf', # Fonts
        ]
      end)
    end
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    
    # Mail Configuration
    config.action_mailer.raise_delivery_errors = true
    config.action_mailer.delivery_method = :smtp
    

    # ActionMailer::Base.smtp_settings = {

    #     :address        => 'smtp.gmail.com',
    #     :domain         => 'mail.google.com',
    #     :port           => 587,
    #     :user_name      => ENV['GMAIL_USERNAME'],
    #     :password       => ENV['GMAIL_PASSWORD'],
    #     :authentication => 'login',
    #     :enable_starttls_auto => true
    # }

        ActionMailer::Base.smtp_settings = {

        :address        => 'smtp.mandrillapp.com',
        :port           => 587,
        :user_name      => ENV['MANDRILL_USERNAME'],
        :password       => ENV['MANDRILL_PASSWORD'],
        :authentication => :plain,
    }
  end
end