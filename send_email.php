<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $topic = $_POST['topic'] ?? '';
    $otherService = $_POST['otherService'] ?? '';
    $description = $_POST['description'] ?? '';
    $name = $_POST['name'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $email = $_POST['email'] ?? '';

    // Email details
    $to = "jon@gmail.com";
    $subject = "Hire Me Inquiry";
    $message = "Topic: $topic\n";
    $message .= "Other Service: $otherService\n";
    $message .= "Description: $description\n";
    $message .= "Name: $name\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";

    $headers = "From: noreply@yourwebsite.com";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}
?>