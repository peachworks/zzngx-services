import { NgModule } from '@angular/core';
import { BeyondUserService } from './user-service';
import { BeyondJSProvider } from '@provider/beyond-js';

@NgModule({
    providers: [BeyondUserService, BeyondJSProvider]
})
export class BeyondUserServiceModule {}
