require_relative 'boot'

require 'rails/all'




# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Blog
  class Application < Rails::Application
    
    config.to_prepare do
      # Load application's model / class decorators
      Dir.glob(File.join(File.dirname(__FILE__), "../app/**/*_decorator*.rb")) do |c|
        Rails.configuration.cache_classes ? require(c) : load(c)
      end

      # Load application's view overrides
      Dir.glob(File.join(File.dirname(__FILE__), "../app/overrides/*.rb")) do |c|
        Rails.configuration.cache_classes ? require(c) : load(c)
      end
    end

    # Initialize configuration defaults for originally generated Rails version.
    config.serve_static_assets = true

    config.load_defaults 5.1

    config.assets.precompile += %w( tinymce.min.js )
    config.assets.precompile += %w( scroll_top_arrow.js )
    #Line for logo.js
    config.assets.precompile += %w( logo.js )

    #Line for navigation.js
    config.assets.precompile += %w( navigation.js )

    #Line for scroll_top_arrow.js
    config.assets.precompile += %w( scroll_top_arrow.js )
    config.assets.precompile += %w( page up.png )

    #line for navBar_fadein.js
    config.assets.precompile += %w( navBar_fadein.js )

    #Line for navBar_dropdown.js
    config.assets.precompile += %w( navBar_dropdown.js )

    config.assets.precompile += %w( page up.png )
    config.assets.precompile += %w( favicon-32x32.png )
    config.assets.precompile += %w( left sidebar.png )
    config.assets.precompile += %w( right sidebar.png )
    
   

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end

