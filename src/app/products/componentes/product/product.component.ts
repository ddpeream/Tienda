import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChanges,
    OnInit } from '@angular/core'
import { CartService } from 'src/app/core/service/cart/cart.service'

import { Product } from '../../../core/model/product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnChanges, OnInit {
    
    constructor(
        private cartservice: CartService
    ) {
        console.log('1.')
    }

    ngOnChanges (changes: SimpleChanges) {
        console.log('2.', changes)
    }

    ngOnInit () {
        console.log('3. ngOnInit')
    }

    

    @Input() products: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    
    today = new Date()
    
    addCart () {
        console.log('Me agregaron mano')
        this.cartservice.addCart(this.products)
    }
}