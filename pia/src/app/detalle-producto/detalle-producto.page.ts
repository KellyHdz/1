import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../models/producto.model';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  idProducto: number;
  producto: Producto;

  constructor(private productoService: ProductosService, 
    private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap=>{
      this.idProducto = Number.parseInt(paramMap.get('idProducto'));
      this.producto = this.productoService.getProducto(this.idProducto);
    });
  }

} 