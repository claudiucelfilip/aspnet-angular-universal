import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootloader } from '@angularclass/bootloader';

import { AppBrowserModule } from './app/app.browser.module';

export function main() {
    return platformBrowserDynamic().bootstrapModule(AppBrowserModule);
}
bootloader(main);