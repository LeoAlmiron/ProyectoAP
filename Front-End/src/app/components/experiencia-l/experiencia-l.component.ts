import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia-l',
  templateUrl: './experiencia-l.component.html',
  styleUrls: ['./experiencia-l.component.css']
})
export class ExperienciaLComponent implements OnInit {
  expe: Experiencia[] = []
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }


  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(
      data => { this.expe = data }
    )
  }


  delete(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia(), alert("Educación eliminada");
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
