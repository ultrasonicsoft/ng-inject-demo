import { Component, Injector, OnInit } from '@angular/core';
import { Product } from '../@models/product.model';
import { User } from '../@models/user.model';
import { ProductService } from '../@services/product.service';
import { UsersService } from '../@services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];

  private static productService: ProductService;

  static products: Product[] = [];
  DashboardComponent = DashboardComponent;

  constructor(private accountService: UsersService, private injector: Injector) {

    // Inject the service into the static property
    DashboardComponent.productService = this.injector.get(ProductService);
  }

  ngOnInit(): void {
    
    // Normal way to get the service data
    this.users = this.accountService.getAccounts();
    
    // Use the external function to get the service data
    processData(this.injector.get(UsersService))

    // Use the static property to get the service data
    DashboardComponent.shyMethod();
  }

  static shyMethod() {
    console.log(this.productService.getProducts());
    DashboardComponent.products = this.productService.getProducts();
  }

}

function processData(accountService: UsersService) {
  const users: User[] = accountService.getAccounts();
  const userListDiv = document.getElementById('userList');
  for (const user of users) {
    const userDiv = document.createElement('div');
    userDiv.innerHTML += `<span>Name: ${ user.name }</span>`;
    userListDiv?.appendChild(userDiv);
  }
}
