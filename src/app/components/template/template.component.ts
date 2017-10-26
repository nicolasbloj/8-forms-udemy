import { NgForm } from '@angular/forms/src/directives';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  user: Object = {
    name: 'nico',
    lastname: 'bloj',
    email: 'nico@gmail.com',
  };

  constructor() { }

  save(form: NgForm) {
    console.log('formulario posteado');
    console.log('ngForm', form);
    console.log('ngForm.value', form.value);
    console.log('usuario', this.user);
  }
}
