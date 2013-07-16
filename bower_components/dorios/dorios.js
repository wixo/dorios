//
// Dorios.js 0.0.1
// Simple left to right columns for your responsive adventures
// http://github.com/wixo/dorios
//

/*jshint laxcomma:true, smarttabs:true, forin:true, noarg:true, noempty:true, eqeqeq:true, laxbreak:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, indent:4, maxerr:50 */
( function ( $, global, document, undefined) {
	"use strict";

	var dorios = ( function () {

		var dorios = {}
		  , self   = dorios
		  ;

		self.container = null;

		self.build = function ( givens ) {
			var i           = 0
			  , cc          = givens && givens.columnCount || self.columnCount
			  , columnCount = givens && givens.columnCount || self.columnCount
			  ;

			self.container.detach();
			self.container.find( 'div.dorios-column' ).remove();
			self.container.find( self.itemsName ).remove();
			self.columns = [];

			while ( columnCount-- ) {
				var id = -( columnCount - cc );
				self.columns.push( $( document.createElement('div') )
				                    .attr('class','dorios-column dorios-column-' + id)
				                    .attr('data-dorios-id', id )
				                    .appendTo( self.container ) );
			}

			self.items.forEach( function ( item ) {
				if ( i < cc -1 ) {
					$( item ).appendTo( self.columns[ i ] );
					i++;
				} else {
					$( item ).appendTo( self.columns[ i ] );
					i = 0;
				}
			} );

			self.container.prependTo( self.parent );

		};

		self.init = function ( givens ) {
			var container;
			console.log( $ );
			self.container   = container = $( givens.container );
			self.itemsName   = givens.items;
			self.items       = self.items || container.find( givens.items ).toArray();
			self.columns     = [];
			self.parent      = container.parent();
			self.columnCount = givens.columnCount;

			self.build( { columnCount : givens.columnCount } );
		};

		self.push = function ( givens ) {
			self.items = self.items.concat( givens.items );
			self.build();
		};


		return { init  : self.init
		       , push  : self.push
		       , build : self.build };

	} )();

	global.dorios = dorios;

} )( window.jQuery, window, window.document );