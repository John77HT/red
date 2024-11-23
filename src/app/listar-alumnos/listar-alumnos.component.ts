import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {
  alumnos: any[] = [];

  constructor(private alumnoService: AlumnoService, private router: Router) {}

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe((data) => {
      this.alumnos = data;
    });
  }

  eliminar(id: number): void {
    this.alumnoService.deleteAlumno(id).subscribe(() => {
      this.alumnos = this.alumnos.filter((alumno) => alumno.id !== id);
    });
  }
}
