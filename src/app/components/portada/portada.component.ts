import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  isLogged= false;
  persona: persona= null;
  /*persona: persona= new persona("","","","");*/
  constructor(private router: Router, private tokenService: TokenService, public personaService: PersonaService){

  }

  

  ngOnInit(): void{
   /*this.personaService.getPersona().subscribe(data=>{this.persona=data});*/
    this.cargarPersona();
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

  cargarPersona():void{
    this.personaService.detail(1).subscribe(
      data =>{this.persona = data;}
    )
  }


}
