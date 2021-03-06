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

#Line for create.js.erb
Rails.application.config.assets.precompile += %w( create.js.erb )


#Line for users.js
Rails.application.config.assets.precompile += %w( users.js )

#Line for tinymce.js
Rails.application.config.assets.precompile += %w( tinymce.js )

 

Rails.application.config.assets.precompile += %w( scroll_top_arrow.js )


	#Line for logo.js
Rails.application.config.assets.precompile += %w( logo.js )


    #Line for navigation.js
Rails.application.config.assets.precompile += %w( navigation.js )

    #Line for scroll_top_arrow.js
Rails.application.config.assets.precompile += %w( scroll_top_arrow.js )
	 #Line for page up.png
Rails.application.config.assets.precompile += %w( page up.png )

    #Line for navBar_fadein.js
Rails.application.config.assets.precompile += %w( navBar_fadein.js )

    #Line for navBar_dropdown.js
Rails.application.config.assets.precompile += %w( navBar_dropdown.js )

	#Line for TypingText.js
Rails.application.config.assets.precompile += %w( TypingText.js )

    #Line for store.js
Rails.application.config.assets.precompile += %w( store.js )

	#Line for mobile vesrion of the website
Rails.application.config.assets.precompile += %w( mobile.js )

	#Line for homepage_header_text.js
Rails.application.config.assets.precompile += %w( homepage_header_text.js )
	#Line for  sidebar_beehive_slide_in.js
Rails.application.config.assets.precompile += %w( sidebar_beehive_fade_in.js )

#Mobile page

Rails.application.config.assets.precompile += %w( /jqtouch/jquery.1.3.2.min.js )
Rails.application.config.assets.precompile += %w( /jqtouch/jqtouch.min.js )
Rails.application.config.assets.precompile += %w( mobile )


	
Rails.application.config.assets.precompile += %w( index.png )
Rails.application.config.assets.precompile += %w( page up.png )
Rails.application.config.assets.precompile += %w( favicon-32x32.png )
Rails.application.config.assets.precompile += %w( left sidebar 2 )
Rails.application.config.assets.precompile += %w( right sidebar 2 )
Rails.application.config.assets.precompile += %w( header )
Rails.application.config.assets.precompile += %w( header Beehive.png )
Rails.application.config.assets.precompile += %w( header Life.png )
Rails.application.config.assets.precompile += %w( header Photography.png )
Rails.application.config.assets.precompile += %w( header Music.png )
Rails.application.config.assets.precompile += %w( beehive 1.png )
Rails.application.config.assets.precompile += %w( what is beehive.png )

#Css for users index.html.erb
Rails.application.config.assets.precompile += %w( user_index.css.scss )
#Css for store index.html.erb
Rails.application.config.assets.precompile += %w( store_index.css )
#Css for forum index.html.erb
Rails.application.config.assets.precompile += %w( forum.css )
#Css for products index.html.erb
Rails.application.config.assets.precompile += %w( store.css )
#Css for user show.html.erb
Rails.application.config.assets.precompile += %w( user_show.css.scss )
#Css for about.html.erb
Rails.application.config.assets.precompile += %w( about.css )
#Css for personal_page.html.erb
Rails.application.config.assets.precompile += %w( personal_page.css.scss )






