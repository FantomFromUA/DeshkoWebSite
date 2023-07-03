package com.deshko.deshko.company.Service;

import com.deshko.deshko.company.DTO.ContactEmailDTO;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;



    public void sendContactEmail(ContactEmailDTO email){
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

            mimeMessageHelper.setFrom("tipplaygame@gmail.com");
            mimeMessageHelper.setTo("tipplaygame@gmail.com");
            mimeMessageHelper.setSubject("Питання від клієнта");
            mimeMessageHelper.setText(getMessage(email));

            javaMailSender.send(mimeMessage);

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }

    }

    private String getMessage(ContactEmailDTO email){
        StringBuilder message = new StringBuilder();
        message.append("Ім'я клієнта - " + email.getName() + "\n");
        message.append("Номер телефону клієнта - " +email.getPhone() + "\n");
        message.append("Емейл клієнта - " + email.getEmail() + "\n");
        message.append("Запитання: \n" + email.getDescription());

        return message.toString();
    }

    public void verificationEmail(String email, String id) {
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

            mimeMessageHelper.setFrom("tipplaygame@gmail.com");
            mimeMessageHelper.setTo(email);
            mimeMessageHelper.setSubject("Підтвердіть свою пошту");
            mimeMessageHelper.setText("Перейдіть за посиланням\nhttp://localhost:3000/verify?id=" + id);

            javaMailSender.send(mimeMessage);

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
