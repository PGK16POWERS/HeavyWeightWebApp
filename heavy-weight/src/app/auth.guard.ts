import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const token = sessionStorage.getItem("AuthToken");

  if (!token) {
    window.location.href = '/'
    return false
  } else {
    return true;
  }
  
};

