import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ng-model segundas';

  public datos : any =[

    {id : 1, nombre : "Karina"},
    {id : 2, nombre : "Luna"} 

  ];

  public formulario : any = {

    id : null,
    nombre : null

  }

  public eliminar(id : number) : void{

    for (let index = 0; index < this.datos.length; index++) {

      if (this.datos[index].id == id) {
        this.datos.splice(index, 1);
        alert("Eliminado con exito!");
        break;
        
      }
      
      
    }

  }

  public seleccionar(nombres : any) : void {

    this.formulario.id = nombres.id;
    this.formulario.nombre = nombres.nombre;

  }

  public agregar() : void {

    let nomNuevo = {

      id : this.formulario.id,
      nombre : this.formulario.nombre

    };

    this.datos.push(nomNuevo);

    alert("Agregado con exito!");

  }

  public editar() : void {

    for (let index = 0; index < this.datos.length; index++) {

      if (this.datos[index].id == this.formulario.id) {
        this.datos[index].id = this.formulario.id;
        this.datos[index].nombre = this.formulario.nombre;
        alert("Se ha modificado con exito!");
        break;
        
      }
      
      
    }

  }

}
