import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sobremi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/service/sobremi.service';

import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  isLogged=false;
  sobremi: Sobremi[] =[];
  

  constructor (private router: Router, private tokenService: TokenService, private sobremiService: SobremiService,){
    
  }

  ngOnInit(){
    this.cargarSobremi();

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

    

  }
  onLogOut():void{
    this.tokenService.logout();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }




  cargarSobremi(): void{
    this.sobremiService.lista().subscribe(
      data =>{
        this.sobremi=data;
      }
    )
  }
  delete(id: number){
    if(id != undefined){
      this.sobremiService.delete(id).subscribe(
        data=>{
          this.cargarSobremi();
        }, err =>{
          alert('no se pudo eliminar');
        }
      )
    }
  }

}
