import { Injectable, Inject } from '@angular/core';
import { Observable, from } from 'rxjs';

import * as Beyond from '@getbeyond/beyond-js';
import { BeyondJS } from '@provider/beyond-js';

import { OAuth } from '@interfaces';

@Injectable()
export class BeyondSessionService {

    /**
     * Creates an instance of BeyondSessionService.
     *
     * @param {Beyond} beyond
     * @memberof BeyondSessionService
     */
    constructor(@Inject(BeyondJS) private beyond: Beyond) {
        this.beyond.session.states = {
            showSidenav: true
        };
    }

    /**
     * Returns an active account id
     *
     * @returns {number} Active account
     * @memberof BeyondSessionService
     */
    getActiveAccount(): number {
        return this.beyond.session.getActiveAccount();
    }

    /**
     * Returns an active app key
     *
     * @returns {string} Active app key
     * @memberof BeyondSessionService
     */
    getActiveApp(): string {
        return this.beyond.session.getActiveApp();
    }

    /**
     * Returns an active location id
     *
     * @returns {number} Active location id
     * @memberof BeyondSessionService
     */
    getActiveLocation(): number {
        return this.beyond.session.getActiveLocation();
    }

    /**
     * Returns an api url
     *
     * @returns {string} API url
     * @memberof BeyondSessionService
     */
    getApiUrl(): string {
        return this.beyond.session.getApiUrl();
    }

    /**
     * Return an api version
     *
     * @returns {string} API version
     * @memberof BeyondSessionService
     */
    getApiVersion(): string {
        return this.beyond.session.getApiVersion();
    }

    /**
     * Returns dev cookie name
     *
     * @returns {string} Dev cookie name
     * @memberof BeyondSessionService
     */
    getDevSessionCookieName(): string {
        return this.beyond.session.getDevSessionCookieName();
    }

    /**
     * Returns object of options or value for specified option
     *
     * @param {string} [option]
     * @returns {({[key: string]: any} | any)}
     * @memberof BeyondSessionService
     */
    getOptions(option?: string): {[key: string]: any} | any {
        return this.beyond.session.getOptions(option);
    }

    /**
     * Return session app keys cookie name
     *
     * @returns {string}
     * @memberof BeyondSessionService
     */
    getSessionAppKeysCookieName(): string {
        return this.beyond.session.getSessionAppKeysCookieName();
    }

    /**
     * Returns session app tokens cookie name
     *
     * @param {string} [appKey]
     * @returns {string}
     * @memberof BeyondSessionService
     */
    getSessionAppTokensCookieName(appKey?: string): string {
        return this.beyond.session.getSessionAppTokensCookieName(appKey);
    }

    /**
     * Returns session cookie name
     *
     * @returns {string}
     * @memberof BeyondSessionService
     */
    getSessionCookieName(): string {
        return this.beyond.session.getSessionCookieName();
    }

    /**
     * Returns session expiry cookie name
     *
     * @returns {string}
     * @memberof BeyondSessionService
     */
    getSessionExpiryCookieName(): string {
        return this.beyond.session.getSessionExpiryCookieName();
    }

    /**
     * Returns session refesh cookie name
     *
     * @returns {string}
     * @memberof BeyondSessionService
     */
    getSessionRefreshCookieName(): string {
        return this.beyond.session.getSessionRefreshCookieName();
    }

    /**
     * Returns session refesh time cookie name
     *
     * @returns {string}
     * @memberof BeyondSessionService
     */
    getSessionRefreshTimeCookieName(): string {
        return this.beyond.session.getSessionRefreshTimeCookieName();
    }

    /**
     * Returns user save cookie name
     *
     * @returns {string}
     * @memberof BeyondSessionService
     */
    getUserSaveCookieName(): string {
        return this.beyond.session.getUserSaveCookieName();
    }

    /**
     * Is development
     *
     * @returns {boolean}
     * @memberof BeyondSessionService
     */
    isDevelopment(): boolean {
        return this.beyond.session.isDevelopment();
    }

    /**
     * Is app preview
     *
     * @returns {boolean}
     * @memberof BeyondSessionService
     */
    isPreview(): boolean {
        return this.beyond.session.isPreview();
    }

    /**
     * Returns a set of access tokens when the user submits a correct username and password
     *
     * @param {string} username
     * @param {string} password
     * @param {boolean} [remember=false]
     * @returns {Observable<any>}
     * @memberof BeyondSessionService
     */
    login(username: string, password: string, remember = false): Observable<OAuth> {
        return from(this.beyond.session.login(username, password, remember));
    }

    /**
     * Removes access from the Beyond One Platform.
     *
     * @returns {Observable<any>}
     * @memberof BeyondSessionService
     */
    logout(): Observable <{success: boolean}> {
        return from(this.beyond.session.logout());
    }

    /**
     * Refesh access token
     *
     * @param {string} refreshToken
     * @returns {Observable<any>}
     * @memberof BeyondSessionService
     */
    refresh(refreshToken: string): Observable<OAuth> {
        return from(this.beyond.session.refresh(refreshToken));
    }

    /**
     * Set location
     *
     * @param {number} id
     * @returns {number}
     * @memberof BeyondSessionService
     */
    setActiveLocation(id: number): number {
        return this.beyond.session.setActiveLocation(id);
    }

    /**
     * Set session option
     *
     * @param {object} [options]
     * @memberof BeyondSessionService
     */
    setOptions(options?: object): void {
        this.beyond.session.setOptions(options);
    }
}
