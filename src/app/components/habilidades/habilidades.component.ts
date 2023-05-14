import { Component } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  habilidad: Habilidades[]=[];

  constructor(private sHabilidades: HabilidadesService, private tokenService: TokenService){

  }
  isLogged=false;

  ngOnInit(): void {
    this.cargarHabilidades();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  cargarHabilidades():void{
    this.sHabilidades.lista().subscribe(
      data =>{this.habilidad = data;}
    )
  }
  
  delete(id?: number){
    if(id != undefined){
      this.sHabilidades.delete(id).subscribe (
        data => {
          this.cargarHabilidades();
        }, err =>{
          alert('no se pudo borrar la habilidad');
        }
      )
    }
  }

}
