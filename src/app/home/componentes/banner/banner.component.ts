import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

// Configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

interface BannerSlide {
  image: string;
  title: string;
  description: string;
  badge: string;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  slides: BannerSlide[] = [
    {
      image: './assets/images/banner-1.jpg',
      title: 'Colección de Verano 2025',
      description: 'Descubre las últimas tendencias en moda y accesorios. Calidad premium al mejor precio.',
      badge: 'Nuevo'
    },
    {
      image: './assets/images/banner-2.jpg',
      title: 'Ofertas Exclusivas',
      description: 'Hasta 50% de descuento en productos seleccionados. ¡Aprovecha estas increíbles ofertas!',
      badge: 'Promoción'
    },
    {
      image: './assets/images/banner-3.jpg',
      title: 'Envío Gratis',
      description: 'En todas tus compras superiores a $50. Recibe tus productos en la puerta de tu casa.',
      badge: 'Beneficio'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    });
  }
}
