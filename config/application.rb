require_relative 'boot'

require 'rails/all'



# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Blog
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.serve_static_assets = true

    config.load_defaults 5.1

    config.assets.precompile += %w( tinymce )
    config.assets.precompile += %w( scroll_top_arrow )
    #Line for logo.js
    config.assets.precompile += %w( logo )

    #Line for navigation.js
    config.assets.precompile += %w( navigation )

    #Line for scroll_top_arrow.js
    config.assets.precompile += %w( scroll_top_arrow )

    #line for navBar_fadein.js
    config.assets.precompile += %w( navBar_fadein )

    #Line for navBar_dropdown.js
    config.assets.precompile += %w( navBar_dropdown )
    

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end

