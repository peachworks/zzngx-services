import { NgModule } from '@angular/core';
import { BeyondSessionService } from './session-service';
import { BeyondJSProvider } from '@provider/beyond-js';

@NgModule({
    providers: [BeyondSessionService, BeyondJSProvider]
})
export class BeyondSessionServiceModule {}
