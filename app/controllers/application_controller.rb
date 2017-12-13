class ApplicationController < ActionController::Base
    helper :all
    #protect_from_forgery with: :exception
	before_action :prepare_for_mobile
	before_action :configure_permitted_parameters, if: :devise_controller?
	before_action :set_last_page
	def set_last_page
	  if !request.xhr? && !request.url.match(/users\/sign_in/) && !request.url.match(/users\/sign_out/)
	    session[:return_to] = request.url
	  end
	end
	def after_sign_in_path_for(resource_or_scope)
	  session[:return_to] || root_url
	end
	def after_sign_out_path_for(resource_or_scope)
	  session[:return_to] || root_url
	end
	
		protected

		def configure_permitted_parameters
		 devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password, :password_confirmation])
		 devise_parameter_sanitizer.permit(:sign_in, keys: [ :login, :password, :password_confirmation])
		 devise_parameter_sanitizer.permit(:account_update, keys: [:username, :email, :password, :password_confirmation, :current_password])
		end

		private

		def mobile_device?
		  if session[:mobile_param]
		    session[:mobile_param] == "1"
		  else
		    request.user_agent =~ /Mobile|webOS/
		  end
		end
		helper_method :mobile_device?

		def prepare_for_mobile
		  session[:mobile_param] = params[:mobile] if params[:mobile]
		  request.format = :mobile if mobile_device?
		end  


end

