import { NgForm } from '@angular/forms/src/directives';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  /*.ng-invalid.ng-touched:not(form)  {
    border:1px solid red;
  }*/
  `]
})
export class TemplateComponent {

  user: Object = {
    name: null,
    lastname: null,
    email: null,
    country: "CRI"
  };
  countries = [
         { code:"ARG",name:"Argentina" },
         { code:"ESP",name:"España" },
         { code:"CRI",name:"Costa Rica" }
  ];

  constructor() { }

  save(form: NgForm) {
    console.log('formulario posteado');
    console.log('ngForm', form);
    console.log('ngForm.value', form.value);
    console.log('usuario', this.user);
  }
}
