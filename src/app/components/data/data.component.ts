import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;

  usuario: Object = {
    nombrecompleto: {
      nombre: 'nicolas',
      apellido: 'bloj'
    },
    correo: 'nicolasbloj@gmail.com'
  };

  constructor() {
    console.log('usuario', this.usuario);

    this.form = new FormGroup(
      {
        'nombrecompleto': new FormGroup(
          {                         //  en primer parametro puedo setear valor del control.
            'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
            'apellido': new FormControl('', Validators.required)

          }
        ),
        'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
      }

    );
    this.form.setValue(this.usuario);
  }

  guardarCambios(): void {
    console.log('form.value', this.form.value);
    console.log('form', this.form);

    // volvemos a la forma pristine (valor por defecto del campo).
    // de esta forma no se resetea a su estado pristine(lo puedo verificar con 
    // inspect input en navegador)
    // this.form.setValue( this.usuario );

    // para que el formulario entonces este como recien cargado hacemos :

    this.form.reset(this.usuario);

    // si quiero resetear a estado pristine pero data vacia:
    /*this.form.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    });*/

    // otra forma, menos recomendada:
    // this.form.controls['correo'].setValue('');
  }

}

// FormControl
// primer parametro : name;
// segundo parametro: reglas de validacion ; 
// tercer parametro : regla de validacion asincrona.