import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sobremi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/service/sobremi.service';

@Component({
  selector: 'app-editsobremi',
  templateUrl: './editsobremi.component.html',
  styleUrls: ['./editsobremi.component.css']
})
export class EditsobremiComponent implements OnInit {
  sobremi: Sobremi = null;

  constructor(private sobremiService: SobremiService, private activatedRouter: ActivatedRoute, private router: Router){

  }
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sobremiService.detail(id).subscribe(
      data=>{
        this.sobremi= data;
      },err =>{
        alert('error al modificar sobremi');
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sobremiService.update(id, this.sobremi).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert('Error al modificar sobremi');
        this.router.navigate(['']);
      }
    )

  }

}
