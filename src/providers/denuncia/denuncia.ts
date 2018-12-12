import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Denuncia } from '../../models/denuncia';

@Injectable()
export class DenunciaProvider {

  // private baseUrl: string = "http://apitesteionic.godocs.com.br/api/ocorrencias/pereira.neto.12@gmail.com/";
  private baseUrl: string = "http://rest.learncode.academy/api/pereira/testes";

  constructor(public http: Http) {
  }

  getDenuncias(){
    return this.http.get(this.baseUrl)
      .map((data: Response) => data.json())
      .catch((error: Response)=>(error.json() || "Server Error."));
  }

  addDenuncias(denuncia: Denuncia){
    console.log(denuncia);
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl, denuncia, requestOptions)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });  
    // .map((response: Response) => (response.json()));
  }

}
