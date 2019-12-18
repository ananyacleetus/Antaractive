<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];

	$EmailTo = "ananyacleetus@gmail.com"; // change with your email
	$Subject = "Message From Website";

	// prepare email body text

	$Body .= "Name: ";
	$Body .= $name;
	$Body .= "\n";

	$Body .= "Email: ";
	$Body .= $email;
	$Body .= "\n";

	$Body .= "Message: ";
	$Body .= $message;
	$Body .= "\n";


	// send email
	$success = mail($EmailTo, $Subject, $Body, "From:".$email);

	// redirect to success page
	if ($success){
	   echo "success";
	}else{
	    echo "invalid";
	}
?>
