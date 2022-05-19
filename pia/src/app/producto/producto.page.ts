import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  productos: Producto[];

  constructor(private productoService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }

} 