﻿import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Product}  from "../model/Product";
import { Observable } from 'rxjs/Observable';
import { Order } from '../model/order';


@Injectable()
export class ProductService {
    Url: string;
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.Url = baseUrl;
    }

    //get all product 
    getProducts() {
        return this.http.get(this.Url + '/api/Products/')
            .map(res => res.json());

    }
     // get product with Id 
    getProduct(id: string) {
        return this.http.get(this.Url + '/api/Products/' + id)
            .map(res => res.json() );

    }





    // update product 
    editProduct(product: Product, token: string) {

      
        return this.http.put(this.Url + 'api/Products/'+product.id, product
            ,
            ({
                headers: {
                    //USE credentials mode

                    withCredentials: true,
                    'Authorization': 'Bearer ' + token
                }
            }) as any
        ).map(res => res.json());
    }


    //createProduct
    createProduct(product: Product, token: string) {
       
    
        return this.http.post(this.Url + 'api/Products/', product
                ,
                ({
                    headers: {
                        //USE credentials mode
                        withCredentials: true,
                        'Authorization': 'Bearer ' +token
                    }
                }) as any)
            .map(res => res.json());
    }

    deleteProduct(idProduct: string,token:string) {
        return this.http.delete(this.Url + 'api/Products/' + idProduct
                ,
                ({
                    headers: {
                        //USE credentials mode
                        withCredentials: true,
                        'Authorization': 'Bearer ' + token
                    }
                }) as any)
            .map(res => res.json());
    }
}