import { InjectionToken } from '@angular/core';
import * as Beyond from '@getbeyond/beyond-js';
import * as _ from 'lodash';

/**
 * @internal
 */
export const BeyondJS = new InjectionToken<Beyond>('beyond');

/**
 * @internal
 * @returns {Beyond}
 */
export function BeyondJSProviderFactory(): Beyond {
  // Use window.beyond if it exists first
  // If not, then create, because we always want only one BeyondJS instance per window, and return it
  if (!(<any>window).beyond) {
    (<any>window).beyond = new Beyond();
  }
  return (<any>window).beyond;
}

/**
 * @internal
 */
export const BeyondJSProvider = {
  provide: BeyondJS,
  useFactory: BeyondJSProviderFactory
};
