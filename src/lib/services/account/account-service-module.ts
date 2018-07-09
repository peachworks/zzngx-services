import { NgModule } from '@angular/core';
import { BeyondAccountService } from './account-service';
import { BeyondJSProvider } from '@provider/beyond-js';

@NgModule({
    providers: [BeyondAccountService, BeyondJSProvider]
})
export class BeyondAccountServiceModule {}
