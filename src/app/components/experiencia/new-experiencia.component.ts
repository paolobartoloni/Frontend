import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string= '';
  descripcion: string= '';

  constructor(private sExperiencia: SExperienciaService, private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const expe= new Experiencia(this.nombreE, this.descripcion);
    this.sExperiencia.save(expe).subscribe({
      next: (data) => {
      alert('Experiencia agregada');
      this.router.navigate(['']);
      },
      error: (err) => {
      alert('Fallo');
      this.router.navigate(['']);
      }
      });
  
  }
}
