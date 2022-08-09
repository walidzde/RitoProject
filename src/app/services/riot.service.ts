import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class RiotService {

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set("Access-Control-Allow-Credentials", "true")
    .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    .set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers , x-api-key" );
  constructor(private http: HttpClient) { }

  getSummonerBySummonerName(summonerName: String, region) {
    return this.http.get(`https://${environment.url[region]}${environment.getSummonerByName}${summonerName}?api_key=${environment.apiKey}`, { headers: this.headers });
  }

}
