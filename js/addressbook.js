// Ready the document and get the JSON
$(document).ready(function() {
    
    var searchField = $('#q');

    /* start the Ajax call */
    $.getJSON('data/contacts.json', function (data) {

    // save the input value, contacts length and i to variables
    var addrBook = data.addressBook,
        count = addrBook.length,
        searchValue = searchField.value,
        i;

    var addr = {
        
    search : function(event){
            
        // stop the default behavior
        event.preventDefault();

        // check the count, of course
        if(count > 0 && searchValue !== ""){
        
            $('#output').empty();
            
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

    } // end search function
    
    }; // end addr object
    }); // end json

// activate auto complete on keyUp
$('#q').keyup(function(event) {
    addr.search(event);
    console.log("the key-up worked!!!");
});

}); // end document.ready function