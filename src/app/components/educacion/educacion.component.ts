import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/edudacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  
  educacion: Educacion[]=[];

  constructor (private router: Router, private tokenService: TokenService, private educacionService: EducacionService ){
    
  }
  isLogged=false;
  
  ngOnInit(){

    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  }

  cargarEducacion(): void{
    this.educacionService.lista().subscribe(
      data =>{
        this.educacion=data;
      }
    )
  }
  delete(id: number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe(
        data=>{
          this.cargarEducacion();
        }, err =>{
          alert('no se pudo eliminar');
        }
      )
    }
  }
}
