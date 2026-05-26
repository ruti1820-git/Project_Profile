import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
// ייבוא האייקונים
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule], // הוספת FontAwesomeModule
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  // הגדרת משתני האייקונים
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  formData = { name: '', email: '', subject: '', message: '' };

  async sendEmail() {
    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      title: this.formData.subject,
      message: this.formData.message
    };

    try {
      await emailjs.send(
        'service_75iw4ri',
        'template_zm2qx7u',
        templateParams,
        '9uSgwOin1JSNiJMRR'
      );
      alert('ההודעה נשלחה בהצלחה!');
    } catch (error) {
      console.error('שגיאה בשליחה:', error);
      alert('משהו לא עבד, בדקי את הקונסול (F12)');
    }
  }

  openLink(url: string) { window.open(url, '_blank'); }
}