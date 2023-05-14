import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-newhabilidad',
  templateUrl: './newhabilidad.component.html',
  styleUrls: ['./newhabilidad.component.css']
})
export class NewhabilidadComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private sHabilidades: HabilidadesService, private router: Router){

  }
  ngOnInit(): void {
    
  }

  onCreate(): void{
    const habilidad= new Habilidades(this.nombre, this.porcentaje);
    this.sHabilidades.save(habilidad).subscribe({
      next: (data) => {
      alert('Habilidad agregada');
      this.router.navigate(['']);
      },
      error: (err) => {
      alert('Fallo');
      this.router.navigate(['']);
      }
      });
  
  }
}
