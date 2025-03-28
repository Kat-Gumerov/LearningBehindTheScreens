<?php
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // set our variables
    $first = isset($_POST["first"]) ? strip_tags(trim($_POST["first"])) : "";
    $last = isset($_POST["last"]) ? strip_tags(trim($_POST["last"])) : "";
    $email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
    $message = isset($_POST["message"]) ? strip_tags(trim($_POST["message"])) : "";

    // check if variables are empty
    if (empty($first)) {
        $errors[] = "First name is empty.";
    }
    if (empty($last)) {
        $errors[] = "Last name is empty.";
    }
    if (empty($email)) {
        $errors[] = "Email is empty.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Email is invalid.";
    }
    if (empty($message)) {
        $errors[] = "Message is empty.";
    }

    // send the email if there are no errors
    if (empty($errors)) {
        $recipient = "codecade@gmail.com";
        $subject = "New Contact Form Submission from $first $last";
        $headers = "From: $first $last <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($recipient, $subject, $message, $headers)) {
            echo "Email sent successfully.";
        } else {
            echo "Failed to send email.";
        }
    }

    // otherwise print out the errors
    else {
        echo "The form contains the following errors:<br>";
        foreach ($errors as $error) {
            echo "- $error<br>";
        }
    }
}
else {
    header("HTTP/1.1 403 Forbidden");
    echo "You are not allowed to access this page.";
}
?>
