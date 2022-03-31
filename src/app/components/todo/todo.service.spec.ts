import { HttpClient } from '@angular/common/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';
import { TodoService } from './todo.service';

fdescribe('Service: Todo', () => {
  beforeEach(() => {

    const httpStub = {
      get: () => of([
        {
          "userId": 1,
          "id": 1,
          "title": "teste title",
          "completed": false
        }
      ])
    }

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpStub
        },
        TodoService
      ]
    });
  });

  it('should ...', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
