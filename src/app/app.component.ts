import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  nombre:string='';
  apellido:string='';
  mensaje:string='';
  cargo:string='';
  registrado=false;
  datos;
  
  constructor(){

    this.datos = [
  
      {text:"Java"},
  
      {text:"JavaScript"},
  
      {text:"Python"},
  
      {text:"C++"},

    ];

  }


seRegistroUsuario(){
  this.registrado=true;

  this.mensaje='Se a registrado un nuevo usuario'
}


}
