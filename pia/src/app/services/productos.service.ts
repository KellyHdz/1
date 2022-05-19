import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[]=[
    {
      id: 1, 
      nombre: 'Papas', 
      image: 'https://www.saborusa.com.pa/imagesmg/imagenes/5ff3e6a0b703f_potatoes-food-supermarket-agriculture-JG7QGNY.jpg',
      especificaciones: ['Papas deliciosas bien cuidadas para un consumo delicioso.'],
      sembradio: 1,
      sonido: 'assets/producto.mp3',
    },

    {
      id: 2, 
      nombre: 'Frijol', 
      image: 'https://static.vecteezy.com/system/resources/previews/003/766/995/non_2x/a-variety-of-common-bean-photo.jpg',
      especificaciones: ['Frijoles cuidadosamente seleccionados desde nuestros cultivos a su hogar'],
      sembradio: 1,
      sonido: 'assets/producto.mp3',
    },

    {
      id: 3, 
      nombre: 'Maiz', 
      image: 'https://www.caracteristicas.co/wp-content/uploads/2018/10/maiz-2-1-e1581908276964.jpg',
      especificaciones: ['Las mejores mazorcas de maiz que usted puede conseguir'],
      sembradio: 1,
      sonido: 'assets/producto.mp3',
    },

    {
      id: 4, 
      nombre: 'Melon', 
      image: 'https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/beneficios-del-melon-1-oosqp993fobcm4xz33dm3s03vsmrwn9z4orxh0xnwg.jpg',
      especificaciones: ['Melones frezcos y jugusos para el deleite de su paladar'],
      sembradio: 2,
      sonido: 'assets/producto.mp3',
    },

    {
      id: 5, 
      nombre: 'Naranja', 
      image: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800/public/2022-02/tipi%20di%20arance%20-%20Finedininglovers.jpg.webp?itok=znHNyFSY',
      especificaciones: ['Naranjas jugosas y deliciosas para porveerlo de la mejor vitamina C'],
      sembradio: 2,
      sonido: 'assets/producto.mp3',
    },

    {
      id: 6, 
      nombre: 'Sandia', 
      image: 'https://laroussecocina.mx/wp-content/uploads/2019/05/sandi%CC%81a-1024x683.jpg',
      especificaciones: ['Sandias tan apetecibles que hasta a nosotros nos es dificil querer comerlas'],
      sembradio: 2,
      sonido: 'assets/producto.mp3',
    }


  ];

  constructor() { }

  getProducto(idProducto: number): Producto{
    return {...this.productos.find(
      (producto: Producto) =>{
        return producto.id ===idProducto
      }
    )};
  }

  getProductos(): Producto[]{
    return [...this.productos];
  }
}
