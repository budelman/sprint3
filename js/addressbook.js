var addr = {
        
        search : function(event){
            
			/* set the output element */
			var output = document.getElementById("output");
            
            // stop the default behavior
            event.preventDefault();

        } // end search method

}; // end addr function

/* ready the address book and execute the JSON data. */

$(document).ready(function() {
	
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

    }); // end getJSON call
    
}); // end document.ready function






    
                            
                // activate auto complete on keyUp
                $('#q').keyup(function(event) {
                    addr.search(event);
                });
                

                
