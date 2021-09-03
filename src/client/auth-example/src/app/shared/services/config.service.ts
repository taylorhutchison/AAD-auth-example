import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Config } from '../interfaces/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config$ = new BehaviorSubject<Config | null>(null);

  constructor(private http: HttpClient) { }

  load(environment: { production: any; }): Promise<Config> {
    return new Promise<Config>((resolve, reject) => {
      const configFile = environment.production ? 'config.json' : 'config.local.json';
      this.http.get<Config>(`config\\${configFile}`)
        .subscribe(response => {
          this.config$.next(response);
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }
}
