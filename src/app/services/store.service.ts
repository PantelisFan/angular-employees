import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IStore } from '../interfaces/IStore';
import { IEmployees } from '../interfaces/iemployees';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  listStore(): Observable<IStore[]>{
    return this.http.get<IStore[]>(`http://localhost:3000/stores`)
  }

  listEmployeeBystoreId(storeId):Observable<IEmployees[]>{
    return this.http.get<IEmployees[]>(`http://localhost:3000/employeesByStore/${storeId}`)
    }
  } 

