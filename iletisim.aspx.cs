using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;

namespace Astroloji1
{
    public partial class iletisim : System.Web.UI.Page
    {
        public object txtEmail { get; private set; }
        public object txtMessage { get; private set; }
        public object txtName { get; private set; }

        protected void btnSend_Click(object sender, EventArgs e)
            {
                // Alıcı adresi
                string to = "alici@alici.com";

                // Gönderen adresi
                string from = "gonderen@gonderen.com";

                // Konu
                string subject = txtSubject.Text;

                // Mesaj gövdesi
                string body = "Ad: " + txtName.Text + "\n" +
                              "E-posta: " + txtEmail.Text + "\n" +
                              "Mesaj: " + txtMessage.Text;

                // SMTP sunucusu ayarları
                SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);
                smtpClient.EnableSsl = true;
                smtpClient.Credentials = new System.Net.NetworkCredential("gonderen@gmail.com", "sifre");

                // E-posta mesajı oluşturma
                MailMessage mailMessage = new MailMessage(from, to, subject, body);

                // E-posta mesajını gönderme
                smtpClient.Send(mailMessage);

                // Başarılı mesajı gösterme
                lblMessage.Text = "Mesajınız başarıyla gönderildi!";
            }

        }
    }
    
