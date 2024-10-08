import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { ICorreios } from 'src/app/interfaces/correios';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostalCodeService {
  http: HttpClient;

  constructor(private backend: HttpBackend) {
    this.http = new HttpClient(this.backend);
  }

  handleFetchPostalCodeObj(code: string) {
    return this.http
      .get<ICorreios>(`https://viacep.com.br/ws/${code}/json/`)
      .toPromise();
  }

  handleFetchPostalCodeObserver(code: string) {
    return this.http.get<ICorreios>(`https://viacep.com.br/ws/${code}/json/`);
  }

  handleFetchPostalCodeOtherOption(code: string) {
    return firstValueFrom(
      this.http.get<ICorreios>(`https://viacep.com.br/ws/${code}/json/`)
    );
  }
}
