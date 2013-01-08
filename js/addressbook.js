
/* wrap everything in an anonymous function to contain the variables. This executes the address book*/

(function() {
	
	/* define the DOM elements and common variables you'll need */
    var searchForm = $("#search-form"),
        searchField = $("#q"),
        getAllButton = $("#get-all"),
        target = $("#output");
    
    /* define address book methods */
    var addr = {
        
        search : function(event){
            
            // stop the default behavior
            event.preventDefault();
            
			/* set the output element */
			var output = $("#output");
			
			/* start the Ajax call */
            $.getJSON('data/contacts.json', function (data) {
				
                // save the input value, contacts length and i to variables
                var searchValue = searchField.value,
                    addrBook = data.addressBook,
                    count = addrBook.length,
                    i;
                
                // clear the target area just incase there's something in it.
                $('#output').empty();
                
                // check the count, of course
                if(count > 0 && searchValue !== ""){
                
                    // loop through the contacts
                    $.each(addrBook, function (i, obj) {
                    
                        // look through the name value to see if it contains the searchterm string
                        var obj = addrBook[i],
                            isItFound = obj.name.indexOf(searchValue);
    
                        // anything other than -1 means we found a match
                        if(isItFound !== -1) {
                            
                            $('#output').append('<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a></p>').hide().fadeIn();
                            
                        } // end if
    
                    }); // end .each loop
    
                } // end count check
                
            }); // end Ajax call
            
        },
        setActiveSection : function(){
        
            // add a class of "active" the wrapping div
            this.parentNode.setAttribute("class", "active");
        
        },
        removeActiveSection : function(){
        
            // remove the class from the wrapping div
            this.parentNode.removeAttribute("class");
        
        },
        addHoverClass : function(){
        
            // remove the class from the wrapping div
            searchForm.setAttribute("class", "hovering");
        
        },
        removeHoverClass : function(){
        
            // remove the class from the wrapping div
            searchForm.removeAttribute("class");
        
        }
    
    } // end addr object
    
    // activate auto complete on keyUp
    $('#q').keyup(function(event) {
		addr.search(event);
	});
    
})(); // end anonymous function
