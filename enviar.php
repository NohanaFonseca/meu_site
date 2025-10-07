<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $telefone = strip_tags(trim($_POST["phone"]));
    $mensagem = trim($_POST["message"]);

    // Email de destino
    $destino = "nohanacf@gmail.com";
    $assunto = "Nova mensagem do site";

    // Corpo do e-mail
    $corpo = "Você recebeu uma nova mensagem do formulário do site.\n\n";
    $corpo .= "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Telefone: $telefone\n";
    $corpo .= "Mensagem:\n$mensagem\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envia o e-mail
    if (mail($destino, $assunto, $corpo, $headers)) {
        echo "<script>alert('Mensagem enviada com sucesso!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Erro ao enviar a mensagem. Tente novamente mais tarde.'); history.back();</script>";
    }
} else {
    http_response_code(403);
    echo "Acesso proibido.";
}
?>