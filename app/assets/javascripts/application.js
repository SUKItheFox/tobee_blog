// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= depend_on_asset "bootstrap.js"

//= require private_pub
//= require piggybak/piggybak-application
//= require rails-ujs
//= require bootstrap
//= require bootstrap-sprockets
//= require jquery
//= require vanilla-ujs
//= require chat
//= require turbolinks
//= require_tree .
//= require tinymce
//= require jquery_ujs



$(document).ready(function(){
    //Sign in animation
    $('.message a').click(function(){
       $('.special').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
});