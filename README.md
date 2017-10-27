# Forms

Diferentes aproximaciones que tiene angular para trabajar formularios.
Profundizaremos en el uso del ngModel.
Utilizar las validaciones pre fabricadas.
Crear validaciones personalizadas.
Crear validaciones asíncronas.
Realizar un submit utilizando el ngSubmit.
Postear información únicamente cuando el formulario es valido,
Crear formularios del lado del componente.
Cargar información por defecto a los formularios.
Subscribirnos a los cambios de los valores de los formularios.
Entre otras cosas bien interesantes.
Durante la sección, tendremos tareas y un examen teórico al final



Existen 2 maneras de trabajar formularios en angular: 

*Aproximacion por template (html,validaciones en lado del template)
*aproximacion por data (typescript)


 
    ngmodel & ngsubmit		
		
	<input type="text"
		...			
	       name='nombre'
               ngModel>
               
               ngModel esta relacionado con atributo name.
               
               
               Classes que se agregan con solo poner ngModel :
               ng-untouched : el usuario no ha tocado caja de texto
               ng-pristine : la caja de texto esta con valor por defecto
               ng-valid : la caja de texto esta pasando todas la reglas de validacion impuestas 
               
               ng-touched
               
 
 <form nonvalidate="">


 <form (ngSubmit)="save()">
 Se dispara cuando se produce un enter en algun input o click en boton
 
 
 style
 	ng-invalid.ngtouched 
               
              
