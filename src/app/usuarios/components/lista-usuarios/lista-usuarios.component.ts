import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  public users !: Observable<any>;
  constructor(private userService : UsuarioService) { }

  ngOnInit(): void {
    this.users =  this.userService.getUsers();
  }

}
