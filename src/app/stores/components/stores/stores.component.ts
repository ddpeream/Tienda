import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  stores = [
    {
      name: 'Elite Store Madrid Centro',
      address: 'Gran Vía 28, 28013 Madrid',
      phone: '+34 91 123 45 67',
      email: 'madrid@elitestore.com',
      hours: 'Lun-Sáb: 10:00 - 21:00, Dom: 11:00 - 20:00',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      latitude: 40.4168,
      longitude: -3.7038
    },
    {
      name: 'Elite Store Barcelona Passeig de Gràcia',
      address: 'Passeig de Gràcia 120, 08008 Barcelona',
      phone: '+34 93 234 56 78',
      email: 'barcelona@elitestore.com',
      hours: 'Lun-Sáb: 10:00 - 21:00, Dom: 11:00 - 20:00',
      image: 'https://images.unsplash.com/photo-1567449303100-44a8506e5b6d?w=800&h=600&fit=crop',
      latitude: 41.3851,
      longitude: 2.1734
    },
    {
      name: 'Elite Store Valencia',
      address: 'Calle Colón 25, 46004 Valencia',
      phone: '+34 96 345 67 89',
      email: 'valencia@elitestore.com',
      hours: 'Lun-Sáb: 10:00 - 21:00, Dom: 11:00 - 20:00',
      image: 'https://images.unsplash.com/photo-1555529902-5261145633bf?w=800&h=600&fit=crop',
      latitude: 39.4699,
      longitude: -0.3763
    },
    {
      name: 'Elite Store Sevilla',
      address: 'Avenida de la Constitución 5, 41004 Sevilla',
      phone: '+34 95 456 78 90',
      email: 'sevilla@elitestore.com',
      hours: 'Lun-Sáb: 10:00 - 21:00, Dom: 11:00 - 20:00',
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9f89?w=800&h=600&fit=crop',
      latitude: 37.3891,
      longitude: -5.9845
    },
    {
      name: 'Elite Store Bilbao',
      address: 'Gran Vía Don Diego López de Haro 10, 48001 Bilbao',
      phone: '+34 94 567 89 01',
      email: 'bilbao@elitestore.com',
      hours: 'Lun-Sáb: 10:00 - 21:00, Dom: 11:00 - 20:00',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop',
      latitude: 43.2627,
      longitude: -2.9253
    },
    {
      name: 'Elite Store Málaga',
      address: 'Calle Larios 8, 29015 Málaga',
      phone: '+34 95 678 90 12',
      email: 'malaga@elitestore.com',
      hours: 'Lun-Sáb: 10:00 - 21:00, Dom: 11:00 - 20:00',
      image: 'https://images.unsplash.com/photo-1582719366149-e67a1d4f23c2?w=800&h=600&fit=crop',
      latitude: 36.7213,
      longitude: -4.4214
    }
  ];

  features = [
    {
      icon: 'local_shipping',
      title: 'Recogida en Tienda',
      description: 'Compra online y recoge en cualquiera de nuestras tiendas sin coste adicional'
    },
    {
      icon: 'support_agent',
      title: 'Asesoramiento Personalizado',
      description: 'Nuestro equipo experto te ayudará a encontrar exactamente lo que buscas'
    },
    {
      icon: 'workspace_premium',
      title: 'Eventos Exclusivos',
      description: 'Accede a lanzamientos especiales y eventos privados en nuestras tiendas'
    },
    {
      icon: 'autorenew',
      title: 'Devoluciones Fáciles',
      description: 'Devuelve tus compras online directamente en cualquier tienda física'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
