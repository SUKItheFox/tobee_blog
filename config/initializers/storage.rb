#require 'fog/dropbox'
#require 'carrierwave'
#require 'dotenv/load'
#require 'dropbox_sdk'


#CarrierWave.configure do |config|
 # config.storage = :fog
  #config.fog_credentials = {
   # :provider =>  'dropbox',
   # :APP_KEY =>  ENV["mak75scgpyokoxp"],
   # :APP_SECRET =>  ENV["bezjb4csocrcakw"]
   # :dropbox_oauth2_access_token => 'vP__0btMfhMAAAAAAAAB_cBtwv8RJBEDskwO6MNbkrjeksdc1iqm9qgJnRPh_dsV'    
  #}
  #config.fog_directory  = "To Bee"
  #config.fog_public     = false
  
  #flow = DropboxOAuth2FlowNoRedirect.new(APP_KEY, APP_SECRET)
  #authorize_url = flow.start()
#end