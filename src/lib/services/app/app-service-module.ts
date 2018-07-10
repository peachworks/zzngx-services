import { NgModule } from '@angular/core';
import { BeyondAppService } from './app-service';
import { BeyondJSProvider } from '@provider/beyond-js';

@NgModule({
    providers: [BeyondAppService, BeyondJSProvider]
})
export class BeyondSessionServiceModule {}
