import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const auth1Guard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = Boolean(localStorage.getItem('auth1')); // Updated to 'auth1'

  if (isAuthenticated) {
    return true;
  }
 else {
    router.navigate(['/login']);
    return false;
  }
};

