$( function () {

	var doriosThis = function ( doriosVar ) {
		dorios.init( { container   : 'div.grid'
		             , items       : 'article'
		             , columnCount : +doriosVar.replace(/col-/,'') } );
	}

	responsivar( { stylesheetName : 'responsivar'
	             , mediaQueries   : [ '@media screen and (min-width: 980px)'
	                                , '@media screen and (min-width: 768px) and (max-width: 979px)'
	                                , '@media screen and (min-width: 481px) and (max-width: 767px)'
	                                , '@media screen and (max-width: 480px)'
	                                ]
	             , change         : doriosThis } );

	// var newItems = [ $('<h3>').text('sup'), $('<article>').text('suppery') ];

	// window.push = function () {
	// 	dorios.push( { items : newItems } );
	// }

} );