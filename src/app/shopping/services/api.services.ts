import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class ShoppingApiService {
    private url = 'http://localhost:3000/api';
    toast: any;
    constructor(private http: HttpClient) { }

    login(body: { email: string; password: string }) {
        return this.http.post(this.url + '/auth/login', body, {
            // headers:new HttpHeaders().set('')
        });
    }

    getAllCategories() {
        return (
            this.http
                .get(this.url + '/product/get/categories')
                //   .pipe(map((i: { status: string; data: string[] }) => i.data));// todo
                .pipe(map((i: any) => i.data))
        );
    }

    addNewProduct(body: any) {
        return this.http
            .post(this.url + '/product/new', body)
            .pipe(catchError(this.handleError));
    }

    updateProduct(body: any) {
        return this.http
            .put(this.url + '/product/update', body)
            .pipe(catchError(this.handleError));
    }
    getAllProducts() {
        return this.http
            .get(this.url + '/product/get', {
                params: new HttpParams().set('all', true),
            })
            .pipe(
                catchError(this.handleError),
                map((i: any) => (i?.data ? i.data : []))
            );
    }


    getSingleProducts(id: string) {

        return this.http.get(this.url + '/product/get?', {
            params: new HttpParams().set('id', id),
        }).pipe(
            catchError(this.handleError)
        )
    }
    handleError(error: any) {
        console.log(error);
        this.toast.error('Oh no!');
        return EMPTY;
    }
}