import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardand-soft',
  templateUrl: './hardand-soft.component.html',
  styleUrls: ['./hardand-soft.component.css']
})
export class HardandSoftComponent implements OnInit {
  skill: Skill[] = [];


  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;
  
  
  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => { 
        this.skill = data;
      }
    )
  }


  delete(id : number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(data => {this.cargarSkills(),alert("Educación eliminada");}, err =>{ alert("No se pudo borrar la Skill"); })
    }
  }
}
