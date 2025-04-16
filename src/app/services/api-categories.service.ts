import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/icategory';
import { ICategoryToAdd } from '../models/icategory-to-add';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class APICategoriesService {
  constructor(private _httpClient: HttpClient) {}

  GetAllCategories(): Observable<ICategoryToAdd[]> {
    return this._httpClient.get<ICategoryToAdd[]>(
      `${environment.baseURL}/api/category`
    );
  }

  GetCategoryByName(name: string): Observable<ICategoryToAdd> {
    return this._httpClient.get<ICategoryToAdd>(
      `${environment.baseURL}/api/category/category/${name}`
    );
  }

  GetCategoryById(id: string): Observable<ICategoryToAdd> {
    return this._httpClient.get<ICategoryToAdd>(
      `${environment.baseURL}/api/category/category/${id}`
    );
  }

  AddCategory(CatToAdd: ICategoryToAdd) {
    return this._httpClient.post(
      `${environment.baseURL}/api/category`,
      CatToAdd
    );
  }

  EditCategory(CatToEdit: ICategoryToAdd) {
    return this._httpClient.put(
      `${environment.baseURL}/api/category`,
      CatToEdit
    );
  }

  DeleteCategory(CatID: ICategoryToAdd) {
    return this._httpClient.delete(`${environment.baseURL}/api/category`, {
      body: CatID,
    });
  }
}
