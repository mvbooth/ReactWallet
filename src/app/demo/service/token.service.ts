import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHttpService } from './api-http.service';

@Injectable()
export class TokenService {
    constructor(private http: HttpClient) {}

    getTokens(address): any {
        const holdAddress = address || '0x7D030DE578D131ffe07e2Ce81a40B6a46eBb9D89';
        const API_GET_TOKENS: string = `https://scan.mypinata.cloud//addresses/${address}/tokens`; 
        return this.http.get(API_GET_TOKENS);
    }
}