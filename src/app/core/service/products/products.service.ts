import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../../model/product.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService { 

  // Mockup products with high-quality placeholder images
  private mockProducts: Product[] = [
    {
      id: '1',
      title: 'Camiseta Premium Vintage',
      price: 29.99,
      description: 'Camiseta de algodón 100% orgánico con diseño vintage exclusivo. Confección de alta calidad con acabados premium. Perfecta para cualquier ocasión.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'
    },
    {
      id: '2',
      title: 'Hoodie Urbano Oversized',
      price: 89.99,
      description: 'Sudadera con capucha de corte moderno y amplio. Material ultra suave con forro polar. Diseño urbano contemporáneo con detalles únicos.',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
    },
    {
      id: '3',
      title: 'Taza Cerámica Artesanal',
      price: 19.99,
      description: 'Taza de cerámica hecha a mano con diseños exclusivos. Apta para microondas y lavavajillas. Capacidad de 350ml ideal para café o té.',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop'
    },
    {
      id: '4',
      title: 'Pin Esmaltado Coleccionable',
      price: 9.99,
      description: 'Pin de esmalte duro con diseño único y colorido. Acabado brillante de alta calidad. Incluye cierre de seguridad doble.',
      image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&h=500&fit=crop'
    },
    {
      id: '5',
      title: 'Pack Stickers Premium',
      price: 14.99,
      description: 'Set de 20 stickers vinílicos resistentes al agua. Diseños originales y coloridos. Perfectos para laptops, botellas y más.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop'
    },
    {
      id: '6',
      title: 'Gorra Snapback Edición Limitada',
      price: 34.99,
      description: 'Gorra ajustable con diseño bordado de alta calidad. Visera plana y estructura rígida. Material transpirable y duradero.',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop'
    },
    {
      id: '7',
      title: 'Mochila Laptop Minimalista',
      price: 79.99,
      description: 'Mochila urbana con compartimento acolchado para laptop hasta 15". Diseño minimalista con múltiples bolsillos. Material impermeable.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
    },
    {
      id: '8',
      title: 'Botella Térmica Acero Inoxidable',
      price: 39.99,
      description: 'Botella térmica de doble pared que mantiene bebidas frías 24h y calientes 12h. Libre de BPA. Capacidad 750ml.',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop'
    },
    {
      id: '9',
      title: 'Zapatillas Running Pro',
      price: 129.99,
      description: 'Zapatillas deportivas de última generación con tecnología de amortiguación avanzada. Diseño ergonómico y transpirable.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
    },
    {
      id: '10',
      title: 'Reloj Smart Fitness',
      price: 199.99,
      description: 'Smartwatch deportivo con monitor de frecuencia cardíaca, GPS integrado y resistencia al agua. Batería de 7 días.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop'
    },
    {
      id: '11',
      title: 'Auriculares Inalámbricos Premium',
      price: 149.99,
      description: 'Auriculares Bluetooth con cancelación activa de ruido. Sonido Hi-Fi y batería de 30h. Estuche de carga incluido.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop'
    },
    {
      id: '12',
      title: 'Cuaderno Eco Reciclado',
      price: 24.99,
      description: 'Cuaderno de papel 100% reciclado con tapa dura. 200 páginas de papel premium. Diseño sostenible y elegante.',
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&h=500&fit=crop'
    },
    {
      id: '13',
      title: 'Gafas de Sol Polarizadas',
      price: 59.99,
      description: 'Gafas de sol con lentes polarizadas UV400. Marco ligero de acetato premium. Incluye estuche rígido y paño de limpieza.',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop'
    },
    {
      id: '14',
      title: 'Chaqueta Impermeable Tech',
      price: 159.99,
      description: 'Chaqueta técnica con membrana impermeable y transpirable. Costuras selladas y capucha ajustable. Perfecta para aventuras.',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop'
    },
    {
      id: '15',
      title: 'Pantalón Jogger Premium',
      price: 69.99,
      description: 'Pantalón jogger de algodón orgánico con ajuste cómodo. Bolsillos laterales profundos y cintura elástica. Estilo urbano versátil.',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop'
    },
    {
      id: '16',
      title: 'Bolso Crossbody Cuero',
      price: 99.99,
      description: 'Bolso de cuero genuino con acabado vintage. Correa ajustable y compartimentos internos. Diseño atemporal y elegante.',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop'
    },
    {
      id: '17',
      title: 'Alfombrilla Yoga Ecológica',
      price: 49.99,
      description: 'Esterilla de yoga de caucho natural con superficie antideslizante. 6mm de grosor ideal. Incluye correa de transporte.',
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop'
    },
    {
      id: '18',
      title: 'Set Bandas Resistencia',
      price: 34.99,
      description: 'Kit de 5 bandas elásticas de diferentes resistencias. Látex natural de alta calidad. Perfecto para entrenamiento en casa.',
      image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&h=500&fit=crop'
    },
    {
      id: '19',
      title: 'Cámara Instantánea Retro',
      price: 119.99,
      description: 'Cámara instantánea con diseño vintage. Flash automático y modos creativos. Fotos al instante con película incluida.',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop'
    },
    {
      id: '20',
      title: 'Lámpara LED Escritorio',
      price: 44.99,
      description: 'Lámpara LED regulable con 3 modos de luz y puerto USB. Brazo flexible y base estable. Ahorro energético y diseño moderno.',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop'
    },
    {
      id: '21',
      title: 'Paraguas Automático XXL',
      price: 39.99,
      description: 'Paraguas grande de apertura automática resistente al viento. Mango ergonómico y varillas reforzadas. Cobertura extra amplia.',
      image: 'https://images.unsplash.com/photo-1595814433015-e7cd8b8f3670?w=500&h=500&fit=crop'
    },
    {
      id: '22',
      title: 'Funda MacBook Premium',
      price: 54.99,
      description: 'Funda protectora de neopreno para MacBook con bolsillos adicionales. Interior acolchado y cierre de cremallera resistente.',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop'
    },
    {
      id: '23',
      title: 'Parlante Bluetooth Portátil',
      price: 79.99,
      description: 'Altavoz inalámbrico con sonido 360° y graves potentes. Resistente al agua IPX7. Batería de 12 horas de reproducción.',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop'
    },
    {
      id: '24',
      title: 'Planificador Anual Deluxe',
      price: 34.99,
      description: 'Agenda 2024 con diseño minimalista y funcional. Papel de alta calidad, vistas mensuales y semanales. Tapa dura elegante.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=500&fit=crop'
    },
    {
      id: '25',
      title: 'Set Skincare Natural',
      price: 89.99,
      description: 'Kit completo de cuidado facial con ingredientes naturales. Limpiador, tónico, serum y crema hidratante. Apto para todo tipo de piel.',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop'
    },
    {
      id: '26',
      title: 'Cargador Inalámbrico 3en1',
      price: 64.99,
      description: 'Estación de carga inalámbrica para iPhone, AirPods y Apple Watch. Carga rápida y diseño compacto. LED indicador inteligente.',
      image: 'https://images.unsplash.com/photo-1591290619762-c588f96b6907?w=500&h=500&fit=crop'
    },
    {
      id: '27',
      title: 'Maleta Cabina Rígida',
      price: 139.99,
      description: 'Maleta de cabina con 4 ruedas giratorias 360°. Material ABS ultra resistente. Candado TSA y compartimentos organizadores.',
      image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500&h=500&fit=crop'
    },
    {
      id: '28',
      title: 'Termo Café Barista',
      price: 54.99,
      description: 'Termo de acero inoxidable con tapa rosca hermética. Mantiene temperatura 8 horas. Diseño elegante para verdaderos amantes del café.',
      image: 'https://images.unsplash.com/photo-1517083777628-3e3abb3c6ace?w=500&h=500&fit=crop'
    },
    {
      id: '29',
      title: 'Kit Accesorios Tech',
      price: 44.99,
      description: 'Set de accesorios tecnológicos: organizador de cables, soporte tablet, limpiador de pantalla y más. Todo lo esencial en un kit.',
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop'
    },
    {
      id: '30',
      title: 'Vela Aromática Artesanal',
      price: 29.99,
      description: 'Vela de cera de soja 100% natural con fragancias premium. 40 horas de duración. Envase de vidrio reutilizable con tapa de madera.',
      image: 'https://images.unsplash.com/photo-1602874801006-e26fb61e1210?w=500&h=500&fit=crop'
    }
  ];

  constructor(
    private http: HttpClient 
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.BASE_URL)
      .pipe(
        catchError(error => {
          console.warn('API not available, using mock data:', error);
          return of(this.mockProducts);
        })
      );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.BASE_URL}/${id}`)
      .pipe(
        catchError(error => {
          console.warn('API not available, using mock data:', error);
          const mockProduct = this.mockProducts.find(p => p.id === id);
          return of(mockProduct || this.mockProducts[0]);
        })
      );
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.BASE_URL}`, product);
  }

  editProduct(id: string, change: Partial<Product>) {
    return this.http.put(`${environment.BASE_URL}/${id}`, change);
  }
  
  deleteProduct(id: string) {
    return this.http.delete(`${environment.BASE_URL}/${id}`);
  }

}
