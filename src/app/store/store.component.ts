import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: 'store',
    templateUrl: './store.component.html'
})

export class StoreComponent{ 
    constructor(private repo: ProductRepository) { }

    get products(): Product[] {
        return this.repo.getProducts();
    }

    get categories(): string[] {
        return this.repo.getCategories();
    }
}