import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { Book } from './books';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  apiURL =''; 
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getBooks():Observable<Book>{
    return this.http.get<Book>(this.apiURL + '/getBooks')
    .pipe(
      retry(1), 
      cartchError(this.handleError)
    )
  }

  addBook(title :string, authro:string):Observable<Book>{
    return this.http.post<Book>(this.apiURL + '/addBook?Title' + title  '&authopr'+ author)
    .pipe(
      retry(1), 
      cartchError(this.handleError)
    )
  }

  delBook(id:string):Observable<Book>{
    return this.http.delete<Book>(this.apiURL + '/addBook?Title' + title  '&authopr'+ author)
    .pipe(
      retry(1), 
      cartchError(this.handleError)
    )
  }

  handleError(error){
    let errorMessage =''; 

    if(error.console.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }
    else{
      errorMessage = `Error Code : ${error.status}\nMessage:${error.message}`; 
    }

    window.alert(errorMessage); 
    return throwError(errorMessage); 
    
  }
}
function retry(arg0: number): import("rxjs").OperatorFunction<Book, unknown> {
  throw new Error('Function not implemented.');
}

