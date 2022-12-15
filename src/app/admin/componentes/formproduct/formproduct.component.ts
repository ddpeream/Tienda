import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/core/service/products/products.service';
import { MyValidators } from 'src/app/utils/validatorsts';

@Component({
  selector: 'app-formproduct',
  templateUrl: './formproduct.component.html',
  styleUrls: ['./formproduct.component.scss']
})
export class FormproductComponent implements OnInit {


  form: FormGroup
  image$: Observable<any>

  constructor(
    private formbuilder: FormBuilder,
    private productservice: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.builderForm()
   }

  ngOnInit() {
  }

  saveProduct(event: Event) {
    event.preventDefault()
    if(this.form.valid) {
      const product = this.form.value;
      this.productservice.createProduct(product)
      .subscribe(rta => {
        console.log(rta)
        this.router.navigate(['./admin/products'])
      })
    }
    console.log(this.form.value)
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const name = 'image.png';
    const fileRef = this.storage.ref(name)
    const task = this.storage.upload(name, file)

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL()
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        })
      })
    )
    .subscribe()
    console.log(file);
  }

  // task.snapshotChanges()
  //   .pipe(
  //     finalize(() => {
  //       this.image$ = fileRef.getDownloadURL();
  //       this.image$.subscribe(url => {
  //         console.log(url);
  //         this.form.get('image').setValue(url);
  //       });
  //     })
  //   )
  //   .subscribe();
  // }


  private builderForm() {
    this.form = this.formbuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    })
  }

  get priceField () {
    return this.form.get('price')
  }

}
