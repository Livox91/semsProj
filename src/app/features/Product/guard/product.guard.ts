import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { ProductIdService } from '@app/shared/services/product-id/product-id.service';


export const productGuard: CanActivateFn = (route, state) => {

  const prodID = route.paramMap.get('id');
  let validId: string[] = [];
  const productService = inject(ProductIdService)
  validId = productService.ProductId

  const isValid = validId.includes(prodID!);

  if (isValid) {
    return true;
  }
  else {
    return false;
  }
};
