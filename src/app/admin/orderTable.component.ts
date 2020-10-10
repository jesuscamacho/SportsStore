import { Component } from "@angular/core";
import { Order } from "../model/order.model";
import { OrderRepository } from '../model/order.repository';

@Component({
    templateUrl: './OrderTable.component.html'
})

export class OrderTableComponent {
    includeShipped = false;
    orders: Order[];

    constructor(private orderRepo: OrderRepository) {
        this.getOrders();
    }

    getOrders(){
        console.log(this.orderRepo.getOrders());
        //this.orders = this.orderRepo.getOrders().filter(o => this.includeShipped || !o.shipped);
    }
    markShipped(order: Order){
        order.shipped = true;
        this.orderRepo.updateOrder(order);
    }
    delete(id: number){
        this.orderRepo.deleteOrder(id);
    }
}