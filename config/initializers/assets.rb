# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )

 
#Line for logo.js
 Rails.application.config.assets.precompile += %w( logo.js )

#Line for navigation.js
Rails.application.config.assets.precompile += %w( navigation.js )

#Line for scroll_top_arrow.js
Rails.application.config.assets.precompile += %w( scroll_top_arrow.js )

#line for navBar_fadein.js
Rails.application.config.assets.precompile += %w( navBar_fadein.js )

#Line for navBar_dropdown.js
Rails.application.config.assets.precompile += %w( navBar_dropdown.js )






