import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-conntacto',
  templateUrl: './conntacto.component.html',
  styleUrls: ['./conntacto.component.css']
})
export class ConntactoComponent {
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: EmailService) { }


  ngOnInit() {
    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Body: new FormControl('', [Validators.required])
    })
  }

  onSubmit(FormData: any) {
    this.contact.sendEmail(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/flor-herber.79nmi@aleeas.com'
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }


}
