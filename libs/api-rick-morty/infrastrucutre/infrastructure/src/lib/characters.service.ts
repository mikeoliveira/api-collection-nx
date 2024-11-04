import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacters() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  getCharacterById(id: number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }

  /**
   * name: filter by the given name.
   * status: filter by the given status (alive, dead or unknown).
   * species: filter by the given species.
   * type: filter by the given type.
   * gender: filter by the given gender (female, male, genderless or unknown).
   *
   * Example: https://rickandmortyapi.com/api/character?name=rick&status=alive
   *
   * @param filter
   * @returns
   */
  getCharacterByFilter(filter: string) {
    return this.http.get(`https://rickandmortyapi.com/api/character/?${filter}`);
  }
}
