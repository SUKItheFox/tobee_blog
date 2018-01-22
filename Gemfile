source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'carrierwave', '~> 0.9'
gem 'carrierwave-dropbox', '~> 1.2', '>= 1.2.1'
gem 'semantic-ui-sass'
gem 'dropbox-sdk', '~> 1.6', '>= 1.6.5'
gem 'simple_form', '~> 3.5'
gem 'haml', '~> 5.0', '>= 5.0.4'
gem "cancan"
gem 'rails_admin', '~> 1.2'
gem 'kaminari'
gem "piggybak"
gem "piggybak_taxonomy", "0.2.1"
gem "piggybak_variants", "0.1.3"
gem "piggybak_coupons", "0.1.2"
gem "piggybak_bundle_discounts", "0.1.1"
gem "piggybak_giftcerts", "0.1.0"
gem "rolify"
gem "puma_worker_killer"
gem 'tinymce-rails'
gem 'bourbon', '~> 4.3', '>= 4.3.4'
gem 'jquery', '~> 0.0.1'
gem 'vanilla-ujs', '~> 1.3'
gem 'jquery-rails', '~> 4.3', '>= 4.3.1'
gem 'mini_magick'
gem 'paperclip', '~> 4.3', '>= 4.3.6'
gem 'rack-cors'
gem 'bootstrap', '~> 4.0.0.beta2.1'
gem 'sprockets', '~> 3.7', '>= 3.7.1'
gem 'devise', '~> 4.3'

gem 'private_pub'
gem 'thin'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
# Use sqlite3 as the database for Active Record

# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'sqlite3'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :production do
  gem 'pg', '~> 0.21.0'
  gem'rails_12factor'
end  
