import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sobremi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/service/sobremi.service';

@Component({
  selector: 'app-newsobremi',
  templateUrl: './newsobremi.component.html',
  styleUrls: ['./newsobremi.component.css']
})
export class NewsobremiComponent implements OnInit {
  nombre: string= '';
  descripcion: string= '';

  constructor(private sobremiService: SobremiService, private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const sobremi= new Sobremi(this.nombre, this.descripcion);
    this.sobremiService.save(sobremi).subscribe({
      next: (data) => {
      alert('Sobremi agregada');
      this.router.navigate(['']);
      },
      error: (err) => {
      alert('Fallo');
      this.router.navigate(['']);
      }
      });
  
  }
}
