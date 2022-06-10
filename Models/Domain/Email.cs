namespace parking_project.Models.Domain
{
    public class Email
    {/*
        public void SendEmail(String to, String subject, String body)
        {
            System.Net.Mail.MailMessage mmsg = new System.Net.Mail.MailMessage();
            mmsg.To.Add(to);
            mmsg.Subject = subject;
            mmsg.SubjectEncoding = System.Text.Encoding.UTF8;

            mmsg.Body = CreateBody(body);

            mmsg.BodyEncoding = System.Text.Encoding.UTF8;
            mmsg.IsBodyHtml = true;
            mmsg.From = new System.Net.Mail.MailAddress("infoempresarialucr@gmail.com");

            System.Net.Mail.SmtpClient client = new System.Net.Mail.SmtpClient();

            client.Credentials = new System.Net.NetworkCredential("infoempresarialucr@gmail.com", "nws.2020");
            client.Port = 587;
            client.EnableSsl = true;
            client.Host = "smtp.gmail.com";

            try
            {
                client.Send(mmsg);
            }
            catch (Exception)
            {

                throw;
            }
        }


        /*
        private string CreateBody(String msg)
        {
            string body = string.Empty;
            var server = System.Web.HttpContext.Current.Server;
            using (StreamReader reader = new StreamReader(server.MapPath("~/EmailTemplate.html")))
            {

                body = reader.ReadToEnd();

            }

            body = body.Replace("{msg}", msg); //replacing Parameters



            return body;

        }*/
    }
}