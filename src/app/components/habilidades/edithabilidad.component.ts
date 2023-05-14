import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-edithabilidad',
  templateUrl: './edithabilidad.component.html',
  styleUrls: ['./edithabilidad.component.css']
})
export class EdithabilidadComponent {
 habilidad: Habilidades= null;
 constructor(private sHabilidades: HabilidadesService, private activatedRouter: ActivatedRoute, private router: Router){}
 
 ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.sHabilidades.detail(id).subscribe(
    data=>{
      this.habilidad= data;
    },err =>{
      alert('error al modificar habilidad');
      this.router.navigate(['']);
    }
  )
}

onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.sHabilidades.update(id, this.habilidad).subscribe(
    data => {
      this.router.navigate(['']);
    }, err =>{
      alert('Error al modificar habilidad');
      this.router.navigate(['']);
    }
  )

}
}
