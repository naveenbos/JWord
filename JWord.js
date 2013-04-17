(function( $ ){

	var methods = {

		init: function(options){
			//Initialize the editor with defaults and extended options.
			var settings = $.extend({

			}, options);
		},

		getplaintext: function(){
			//Return the editor contents as plain text.
		},

		gettext: function(){
			//Return the editor contents in RTF
		},

		settext: function( content ){
			//Function to set RTF Text to the editor
		},

		action: function( action ){
			//Function to run the Formatting options using execCommand.
		}
	}

	$.fn.jWord = function( method ){

		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.jWord' );
		}    
	}; 
})( jQuery );