import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(private http: HttpClient,
    private httpService: HttpService) { }

    listarTodos(): Observable<any> {
      const id = this.httpService.obterIdUsuario();
      return this.http.get(
        env.apiBaseUrl + 'api/lancamentos/funcionario/' + id,this.headers()
      );
    }

    headers(){
      let httpHeaders = new HttpHeaders();
      if (localStorage['token']) {
        httpHeaders = httpHeaders.set(
          'Authorization', 'Bearer ' + localStorage['token']
        );
      }
      return { headers: httpHeaders}
    }
}
