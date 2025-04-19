import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIngredient } from '../models/iingredient';
import { environment } from '../../environments/environment.development';
import { IIngredientPost } from '../models/iingredientpost';

@Injectable({
  providedIn: 'root',
})
export class APIIngredientService {
  constructor(private _httpClient: HttpClient) {}

  GetAllIngredients(): Observable<IIngredient[]> {
    return this._httpClient.get<IIngredient[]>(
      `${environment.baseURL}/api/ingredient`
    );
  }

  GetIngredientById(id: number): Observable<IIngredient> {
    return this._httpClient.get<IIngredient | any>(
      `${environment.baseURL}/api/ingredient/${id}`
    );
  }

  AddIngredient(IngredientToAdd: IIngredientPost) {
    return this._httpClient.post(
      `${environment.baseURL}/api/ingredient`,
      IngredientToAdd
    );
  }

  EditIngredient(IngredientToEdit: IIngredient) {
    return this._httpClient.put(
      `${environment.baseURL}/api/ingredient`,
      IngredientToEdit
    );
  }

  DeleteIngredient(IngredientID: IIngredient) {
    return this._httpClient.delete(`${environment.baseURL}/api/ingredient`, {
      body: IngredientID,
    });
  }
}
