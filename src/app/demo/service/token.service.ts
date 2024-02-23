import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHttpService } from './api-http.service';

@Injectable()
export class TokenService {
    constructor(private http: HttpClient) {}

    getTokens(address): any {
        const holdAddress = '0x7D030DE578D131ffe07e2Ce81a40B6a46eBb9D89';
        const API_GET_TOKENS: string = `https://api.scan.pulsechain.com/api/v2/addresses/${address}/token-balances`; 
        return this.http.get(API_GET_TOKENS);
    }
}