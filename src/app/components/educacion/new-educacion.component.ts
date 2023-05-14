import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/edudacion.service';


@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {
  nombreE: string;
  descripcion: string;
  constructor(private educacionService: EducacionService, private router: Router){

  }

  onCreate():void{
    const educacion= new Educacion(this.nombreE, this.descripcion);
    this.educacionService.save(educacion).subscribe(
      data=>{
        alert('Educacion añadidad');
        this.router.navigate(['']);
      }, err=>{
        alert('fallo');
        this.router.navigate(['']);
      }
      
    )
  }
}
