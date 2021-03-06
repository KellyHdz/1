import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { MenuElement } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {

  titleMenu: string='home';

  public isLoged : any = false;

  datosMenu: MenuElement[] =[
    {nombre: 'login',enlace:'/login',
    icono:'log-in-outline'},
    {nombre: 'logout',enlace:'/home',
    icono:'log-out-outline'}
  ];
  
  constructor(private router: Router, private authGuard: AuthGuard,
    private menuService: MenuService,
    private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => this.isLoged= user);

    this.menuService.$getTitleMenu.subscribe(data=>{
      console.log(data);
      this.titleMenu =data;
    });
  }

  navegar(link: string, titleMenu: string){
    this.titleMenu =titleMenu;
    this.router.navigate([link]);
  }

  onMenuOpen(){
    if(this.isLoged){
      this.datosMenu =[
    {nombre: ' Inicio',enlace:'/inicio',
    icono:'navigate-outline'}, 
    {nombre: ' Productos',enlace:'/producto',
    icono:'storefront-outline'},
    {nombre: 'Ubicación',enlace:'/destinos',
    icono:'navigate-outline'},
    {nombre: 'Login',enlace:'/login',
    icono:'log-in-outline'},
    {nombre: ' Logout',enlace:'/home',
    icono:'log-out-outline'},
    ];
      
    } else{
      this.datosMenu =[
        {nombre: 'login',enlace:'/login',
        icono:'log-in-outline'},
        {nombre: 'logout',enlace:'/home',
        icono:'log-out-outline'}
      ];
    }
  }
}