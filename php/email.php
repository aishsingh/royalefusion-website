<?php
// This function checks for email injection. Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.
function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}

// Load form field data into variables.
$email_color = '"#ed1c24"';
$sender_fname = $_REQUEST['fname'];
$sender_lname = $_REQUEST['lname'];
$sender_email = $_REQUEST['email'];
$sender_mobile = $_REQUEST['mobile'];
$booking_date = $_REQUEST['booking_date'];
$booking_time = $_REQUEST['booking_time'];
$booking_people = $_REQUEST['people'];
$booking_info = $_REQUEST['booking_info'];
$message = '<html><body>'.
           '<table border="0" cellspacing="5" width="250px">'.
           '<tr><td colspan="2" align="center">'.'<img src="http://royalefusion.com.au/images/rounded_top_small.png" width="450px" height="10px"/></td></tr>'.
           '<tr><td colspan="2" align="center">'."<h1><font color = $email_color>New booking at Royale Fusion</font></h1></td></tr>".

           '<tr><td colspan="2" align="center">'.'<img src="http://royalefusion.com.au/images/logo_email.png" alt="Logo" width="250px" height="100px"/></td></tr>'.
           
           '<tr><td align="right">'."<font color = $email_color><b>Booked for: </b></font></td>".
	       '<td align="left">' ."$sender_fname $sender_lname</td></tr>".

           '<tr><td align="right">'."<font color = $email_color><b>Email: </b></font></td>".
               '<td align="left">' ."$sender_email</td></tr>".

           '<tr><td align="right">'."<font color = $email_color><b>Mobile: </b></font></td>".
               '<td align="left">' ."$sender_mobile</td></tr>".

           '<tr><td align="right">'."<br></td>".
               '<td align="left">' ."<br></td></tr>".

           '<tr><td align="right">'."<font color = $email_color><b>Booking date: </b></font></td>".
               '<td align="left">' ."$booking_date</td></tr>".

           '<tr><td align="right">'."<font color = $email_color><b>Booking time: </b></font></td>".
               '<td align="left">' ."$booking_time pm</td></tr>".

           '<tr><td align="right">'."<font color = $email_color><b>Customers: </b></font></td>".
               '<td align="left">' ."$booking_people</td></tr>";

// If Additional info is not given then it is not shown           
if (empty($booking_info) == false) {
        $message .= '<tr><td align="right">'."<br></td>".
                        '<td align="left">' ."<br></td></tr>".

                    '<tr><td align="right">'."<font color = $email_color><b>Additional info: </b></font></td>".
                        '<td align="left">' ."$booking_info</td></tr>".

                    '<tr><td colspan="2" align="center">'.'<img src="http://royalefusion.com.au/images/rounded_bottom_small.png" width="450px" height="10px"/></td></tr>'.
                    "</table></body></html>";
} else {
	$message .= '<tr><td colspan="2" align="center">'.'<img src="http://royalefusion.com.au/images/rounded_bottom_small.png" width="450px" height="10px"/></td></tr>'.
                    "</table></body></html>";
}

// If the user tries to access this script directly, redirect them to feedback form,
if (!isset($_REQUEST['email'])) {
header( "Location: ../bookings.html" );
}

// If the form fields are empty, redirect to the error page.
elseif (empty($sender_fname) || empty($sender_lname) || empty($sender_email) || empty($sender_mobile) || empty($booking_date) || empty($booking_time) || empty($booking_people)) {
header( "Location: ../booking_error.html" );
}

// If email injection is detected, redirect to the error page.
elseif ( isInjected($sender_email) ) {
header( "Location: ../booking_error.html" );
}

// If we passed all previous tests, send the email!
else {
mail( "info@royalefusion.com.au", "Royale Fusion Booking - $sender_fname", $message, "From: $sender_email"."\r\n"."Content-Type: text/html; charset=ISO-8859-1"."\r\n" );
header( "Location: ../booking_success.html" );
}
?>