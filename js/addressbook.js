
/* wrap everything in an anonymous function to contain the variables. This executes the address book*/

$(document).ready(function() {
	
	/* define the DOM elements and common variables you'll need */
    var searchForm = $("#search-form"),
        searchField = $("#q"),
        target = $("#output");
    /* start the Ajax call */
            $.getJSON('data/contacts.json', function (data) {
				
                // save the input value, contacts length and i to variables
                var searchValue = searchField.value,
                    addrBook = data.addressBook,
                    count = addrBook.length,
                    i;
                    
                // clear the target area just incase there's something in it.
                $('#output').empty();
                            
                // activate auto complete on keyUp
                $('#q').keyup(function(event) {
                    addr.search(event);
                });
                
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
                
            }); // end getJSON call

})(); // end anonymous function
