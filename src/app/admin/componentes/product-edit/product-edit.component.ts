import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/service/products/products.service';
import { MyValidators } from 'src/app/utils/validatorsts';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {


  form: FormGroup
  id: string

  constructor(
    private formbuilder: FormBuilder,
    private productservice: ProductsService,
    private router: Router,
    private activeroute: ActivatedRoute
  ) {
    this.builderForm()
   }

  ngOnInit() {
    this.activeroute.params.subscribe( (params: Params) => {
      this.id = params.id
      this.productservice.getProduct(this.id)
      .subscribe(rta => {
        this.form.patchValue(rta)
      })
    } )
  }

  saveProduct(event: Event) {
    event.preventDefault()
    if(this.form.valid) {
      const product = this.form.value;
      this.productservice.editProduct(this.id, product)
      .subscribe(rta => {
        console.log(rta)
        this.router.navigate(['./admin/products'])
      })
    }
    console.log(this.form.value)
  }

  private builderForm() {
    this.form = this.formbuilder.group({
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]]
    })
  }

  get priceField () {
    return this.form.get('price')
  }

}