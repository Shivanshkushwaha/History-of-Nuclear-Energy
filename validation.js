function validation() { 
		var name = document.forms["RevForm"]["Name"]; 
		var number = document.forms["RevForm"]["Number"]; 
		var email = document.forms["RevForm"]["EMail"]; 
		var gender = document.forms["RevForm"]["Gender"]; 
		var zipcode = document.forms["RevForm"]["Zipcode"]; 
		var home = document.forms["RevForm"]["Hometown"]; 
		var comment = document.forms["RevForm"]["Comment"]
		var letters = /^[A-Za-z]+$/;
		var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if (name.value == "") { 
			window.alert("Please enter your name."); 
			name.focus(); 
			return false; 
		} 


		if (number.value == "" || isNaN( number.value ) ||
            number.value.length != 10) { 
			window.alert("Please enter your 10 digit number."); 
			number.focus(); 
			return false; 
		} 

		if (email.value == "" || email.value != email.value.match(mailformat) ) { 
			window.alert( 
			"Please enter a valid e-mail address in the format xyz@abc.domain."); 
			email.focus(); 
			return false; 
		} 

		
		if( zipcode.value == "" || isNaN( zipcode.value ) ||
            zipcode.value.length != 6 ) {
            
            alert( "Please provide a zip in the format #####." );
            zipcode.focus() ;
            return false;
        }

		if (home.value == "") { 
			window.alert("Please enter your hometown"); 
			home.focus(); 
			return false; 
		} 

		if (gender.selectedIndex < 1) { 
			alert("Please select your gender."); 
			gender.focus(); 
			return false; 
		} 

		if (comment.value == "") {
			window.alert("A simple review comment would help a lot.");
			comment.focus();
			return false;
		}

		return true; 
}