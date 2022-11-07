import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(private http: HttpClient) { } 
  
  //import aqui é em app.module como httpclientmodule
  listRandomFood(take: number){
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=13171f10885d4f5bad6d31bbb768d0b1&number=${take}`
    return this.http.get(apiUrl)
  }
} 
