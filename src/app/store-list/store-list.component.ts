import { Component, OnInit } from '@angular/core';
import {StoreService } from '../services/store.service'
import { store } from '@angular/core/src/render3';


@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {


  public stores = [];
  public employeesByStore = [];

  constructor(private _storeService: StoreService) { }

  showDetails(storeId:string) {
    this._storeService.listEmployeeBystoreId(storeId)
    .subscribe(data=> this.employeesByStore = data)                    

  } 


  ngOnInit() {
    
    this._storeService.listStore()
                    .subscribe(data=> this.stores = data)

  }

 
}