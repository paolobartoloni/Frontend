import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private sExperciencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router){

  }
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperciencia.detail(id).subscribe(
      data=>{
        this.expLab= data;
      },err =>{
        alert('error al modificar experciencia');
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperciencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    )

  }
}
