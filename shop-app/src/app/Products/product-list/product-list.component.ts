import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../../Services/product-service.service';
import {Product} from '../../Models/Product-models/Product';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ProductTypeService} from '../../Services/product-type.service';
import {ProductType} from '../../Models/Product-models/productType';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product[];
  name: string;
  productTypes: ProductType[];
  ii: number;
  totalRecords: number;
  page = 1;
  deleteId =0;
  constructor(
    private productService: ProductServiceService,
    private router: Router,
    private toastr: ToastrService,
    private productTypeService: ProductTypeService) {
      
  }

  ngOnInit(): void {
    // this.productService.getAll().subscribe(resopone=>{
    // this.product= resopone;
    // })
    this.productService.getAllisDeleteFase().subscribe(response => {
      this.product = response;
      this.totalRecords = this.product.length;
    });
    this.productTypeService.getAll().subscribe(res => {
      this.productTypes = res;
    });
  }

  addNewProduct(products: Product): void {
    this.product.unshift(products);
  }

  // get product type Name
  getproductTypeNameBytyId(typeId: number): any {
    this.ii = this.productTypes?.length;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.ii; i++) {
      // tslint:disable-next-line: no-unused-expression
      const pot = this.productTypes[i];
      if (pot.id === typeId) {
        return pot.name;

      }
    }
  }
  deleteIdClick(id: any): void{
    this.deleteId = id;
    
  }

  // edit product
  onEditButtonClick(productId: number): void {
    this.router.navigate(['/productedit', productId]);

  }

  // delete Product
  deleteButtonClick(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.fetchData();
      this.toastr.error('Delete Successfull', 'Message');
    });
  }

  // refresh Data
  fetchData(): void {
    this.productService.getAllisDeleteFase().subscribe(response => this.product = response);
  }

}
