<?php
$ajax = $_POST['ajax'];

  foreach($_POST as $k=>$v)
    {
            /* if magic_quotes is enabled, strip the post array */
            if(ini_get('magic_quotes_gpc'))
            $_POST[$k]=stripslashes($_POST[$k]);
            $_POST[$k]=htmlspecialchars(strip_tags($_POST[$k]));
            /* escape the special chars */
    }
    require "phpmailer/class.phpmailer.php";
    $emailAddress = 'info@yourdomain.com';

    
    if ( $ajax == 1) {
        if( !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['offer']) ) {

            /* the email body */
            $msg='IP:	'.$_SERVER['REMOTE_ADDR'].'<br />Name:	'.$_POST['name'].'<br />Email:	'.$_POST['email'].'<br />
             Mobile:    '.$_POST['mobile'].'<br />Website:  '.$_POST['website'].'<br />Offer: '.$_POST['offer'].'';

            $mail = new PHPMailer();/* using PHPMailer */
            $mail->IsMail();
            $mail->AddReplyTo($_POST['email'], $_POST['name']);
            $mail->AddAddress($emailAddress);
            $mail->SetFrom($_POST['email'], $_POST['name']);
            $mail->Subject = "A new mail from ".$_POST['name']." | contact form feedback";

            $mail->MsgHTML($msg);

            if(!$mail->Send())
                {
                    echo '<p id="response">I\'m sorry, there was a problem sending this email. Please try again.</p>';
                }
            else
                {
                    echo '<p id="ok">Email sent! Thank you for contacting us</p>';
                }
        }
        else {
           echo '<p id="error">Please, fill all forms</p>';
        }
    }
    else { 
        
            if( !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message']) ) {

            /* the email body */
            $msg='IP:   '.$_SERVER['REMOTE_ADDR'].'<br />Name:	'.$_POST['name'].'<br />Email:	'.$_POST['email'].'<br />
             Mobile:    '.$_POST['mobile'].'<br />Website:  '.$_POST['website'].'<br />Offer: '.$_POST['offer'].'';

            $mail = new PHPMailer();	/* using PHPMailer */
            $mail->IsMail();
            $mail->AddReplyTo($_POST['email'], $_POST['name']);
            $mail->AddAddress($emailAddress);
            $mail->SetFrom($_POST['email'], $_POST['name']);
            $mail->Subject = "A new email from ".$_POST['name']." | contact form feedback";

            $mail->MsgHTML($msg);

     
                 if(!$mail->Send())
                    {
                        echo 'I\'m sorry, there was a problem sending this email. Please try again.';
                    }
                    else
                    {
                        echo 'Email sent! Thank you for contacting us';
                    }
           }
           else {
           

           echo 'Please, fill the form.';

           }

} ?>
