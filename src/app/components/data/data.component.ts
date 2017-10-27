import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'nombre': new FormControl('Nicolas'),
      'apellido': new FormControl(),
      'correo': new FormControl()
    });
  }

  guardarCambios(): void {
    console.log('form.value', this.form.value);
    console.log('form', this.form);
  }

}

// FormControl
// primer parametro : name;
// segundo parametro: reglas de validacion ; 
// tercer parametro : regla de validacion asincrona.