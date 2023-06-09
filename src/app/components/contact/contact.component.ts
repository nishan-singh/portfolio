import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm: any;
  @ViewChild('name') name: any;
  @ViewChild('eMail') eMail: any;
  @ViewChild('message') message: any;
  @ViewChild('mailSent') mailSent: any;
  isNameEmpty = false;
  isEmailEmpty = false;
  isMessageEmpty = false;
  isMailSent = false;

  async sendMail() {
    let formDataToSend = new FormData();
    formDataToSend.append('name', this.name.nativeElement.value);
    formDataToSend.append('message', this.message.nativeElement.value);

    await fetch('https://nishan-singh.com/send_mail/send_mail.php', {
      method: 'POST',
      body: formDataToSend,
    });

    this.isMailSent = true;
    this.togglePopUp();
  }

  togglePopUp() {
    setTimeout(() => {
      this.mailSent.nativeElement.classList.add('pop-up');
    }, 25);
    setTimeout(() => {
      this.mailSent.nativeElement.classList.remove('pop-up');
    }, 2400);
    setTimeout(() => {
      this.isMailSent = false;
    }, 2500);
  }

  checkIfNameEmpty() {
    this.isNameEmpty = this.name.nativeElement.value === '';
  }

  checkIfEmailEmpty() {
    this.isEmailEmpty = this.eMail.nativeElement.value === '';
  }

  checkIfMessageEmpty() {
    this.isMessageEmpty = this.message.nativeElement.value.length <= 25;
  }
}
