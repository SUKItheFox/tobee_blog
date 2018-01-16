class AvatarUploader < CarrierWave::Uploader::Base

  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  #if Rails.env.production?
    storage :file
  #else
  #  storage :file
  #end
  # storage :fog
  #def initialize
     # CarrierWave.configure do |config|
        #config.dropbox_app_key = ENV["APP_KEY"]
        #config.dropbox_app_secret = ENV["APP_SECRET"]
        #config.dropbox_access_token = ENV["ACCESS_TOKEN"]
        #config.dropbox_access_token_secret = ENV["ACCESS_TOKEN_SECRET"]
        #config.dropbox_user_id = ENV["USER_ID"]
        #config.dropbox_access_type = "dropbox"
      #end
  #end
  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Create different versions of your uploaded files:
  version :thumb do
    process :resize_to_fill => [100, 100]
  end
 
  version :medium do
    process :resize_to_fill => [300, 300]
  end
 
  version :small do
    process :resize_to_fill => [140, 140]
  end
 
  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    %w(jpg jpeg gif png svg)
  end

  def default_url(*args)
    ActionController::Base.helpers.asset_path("fallback/" + ["personal icon 1.png"].compact.join)
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url(*args)
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process scale: [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process resize_to_fit: [50, 50]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  # def extension_whitelist
  #   %w(jpg jpeg gif png)
  # end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end

end
