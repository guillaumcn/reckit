import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

  isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }

}
