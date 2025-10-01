import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  teamMembers = [
    {
      name: 'María García',
      role: 'CEO & Fundadora',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      description: 'Visionaria apasionada por la innovación en e-commerce'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director de Operaciones',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      description: 'Experto en logística y cadena de suministro'
    },
    {
      name: 'Ana Martínez',
      role: 'Directora de Marketing',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      description: 'Creativa con más de 10 años de experiencia'
    },
    {
      name: 'Jorge López',
      role: 'Director de Tecnología',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      description: 'Ingeniero especializado en plataformas digitales'
    }
  ];

  stats = [
    { icon: 'people', value: '50,000+', label: 'Clientes Satisfechos' },
    { icon: 'inventory_2', value: '10,000+', label: 'Productos Vendidos' },
    { icon: 'star', value: '4.9/5', label: 'Calificación Promedio' },
    { icon: 'public', value: '25+', label: 'Países Atendidos' }
  ];

  values = [
    {
      icon: 'verified',
      title: 'Calidad Garantizada',
      description: 'Todos nuestros productos pasan por rigurosos controles de calidad antes de llegar a ti.'
    },
    {
      icon: 'bolt',
      title: 'Innovación Constante',
      description: 'Siempre buscamos las últimas tendencias y tecnologías para mejorar tu experiencia.'
    },
    {
      icon: 'favorite',
      title: 'Pasión por el Cliente',
      description: 'Tu satisfacción es nuestra prioridad número uno. Estamos aquí para ti 24/7.'
    },
    {
      icon: 'eco',
      title: 'Compromiso Sostenible',
      description: 'Trabajamos con proveedores responsables y buscamos minimizar nuestro impacto ambiental.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
