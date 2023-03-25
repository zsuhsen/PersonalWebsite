import React from 'react';
import { of, Observable } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, catchError, tap } from 'rxjs/operators'
import { ServiceType } from '../enums/ServiceType';
import { QueryParams } from '../models/QueryParams';
import { Result } from '../models/Result';

/**
 * Abstract service has a service prescription and a wrapper around rxjs/ajax requests.
 */
export abstract class Service {
    abstract type: ServiceType;
    abstract url: string;

    /**
     * Get
     * @param query - Must be ?param1=val1,param2=val2
     * @returns 
     */
    public get<T>(query?: QueryParams): Observable<Result<T>> {
        const queryString = !query ? '' : query.getQueryString();
        return ajax<Result<T>>({
            url: this.url + queryString,
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }).pipe(
                  map(response => response.response as Result<T>),
                  catchError(this.catchError)
              );
    }

    /**
     * Create
     * @param model - Can be any type
     * @param routeParams - Must be /value1/value2
     * @returns 
     */
    public create<T>(model: T, routeParams: string): Observable<Result<number>> {
        return ajax<Result<number>>({
            url: this.url + routeParams,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: model
          }).pipe(
                map(ajaxResponse => ajaxResponse.response),
                catchError(this.catchError)
            );
    }

    /**
     * Update
     * @param model - Can be any type
     * @param routeParams - Must be /value1/value2
     * @returns 
     */
    public update<T>(model: T, routeParams: string): Observable<Result<T>> {
        return ajax<Result<T>>({
            url: this.url + routeParams,
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: model
          }).pipe(
                map(ajaxResponse => ajaxResponse.response),
                catchError(this.catchError)
            );
    }

    /**
     * Delete
     * @param id - Id for the row to be deleted
     * @returns 
     */
    public delete(id: number): Observable<Result<boolean>> {
        return ajax<Result<boolean>>({
            url: this.url,
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          }).pipe(
                map(ajaxResponse => ajaxResponse.response),
                catchError(this.catchError)
            );
    }


    private catchError(error: any): Observable<any> {
        return of(error).pipe(tap(error => console.log('Error :: ', error)));
    }

}