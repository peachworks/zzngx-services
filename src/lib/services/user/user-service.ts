import { Injectable, Inject } from '@angular/core';
import { Observable, from } from 'rxjs';

import * as Beyond from '@getbeyond/beyond-js';
import { BeyondJS } from '@provider/beyond-js';

import { Account, User, Pref, UserAlertPref } from '@interfaces';

@Injectable()
export class BeyondUserService {

    /**
     * Creates an instance of BeyondUserService.
     *
     * @param {Beyond} beyond
     * @memberof BeyondSessionService
     */
    constructor(@Inject(BeyondJS) private beyond: Beyond) {}

    /**
     * Returns an array of user's accounts
     *
     * @returns {Observable<Account[]>}
     * @memberof BeyondUserService
     */
    getAccounts(): Observable<Account[]> {
        return from(this.beyond.user.getAccounts());
    }

    /**
     * Return all user alert prefs for a user or specified by id
     *
     * @param {number} [alertId]
     * @returns {Observable<UserAlertPref>}
     * @memberof BeyondUserService
     */
    getAlertsPrefs(alertId?: number): Observable<UserAlertPref> {
        return from(this.beyond.user.getAlertsPrefs(alertId));
    }

    /**
     * Return user info
     *
     * @returns {Observable<any>}
     * @memberof BeyondUserService
     */
    getInfo(): Observable<User> {
        return from(this.beyond.user.getInfo());
    }

    /**
     * Returns an array of prefs or specified pref by key
     *
     * @param {string} [key]
     * @param {boolean} [isCore]
     * @returns {Observable<Pref>}
     * @memberof BeyondUserService
     */
    getPrefs(key?: string, isCore?: boolean): Observable<Pref|Pref[]> {
        return from(this.beyond.user.getPrefs(key, isCore));
    }

    /**
     * Has config
     *
     * @returns {Observable<boolean>}
     * @memberof BeyondUserService
     */
    hasConfig(): Observable<boolean> {
        return from(this.beyond.user.hasConfig());
    }

    /**
     * Has core permission
     *
     * @param {string} key
     * @returns {Observable<boolean>}
     * @memberof BeyondUserService
     */
    hasCorePermission(key: string): Observable<boolean> {
        return from(this.beyond.user.hasCorePermission(key));
    }

    /**
     * Has reports
     *
     * @returns {Observable<boolean>}
     * @memberof BeyondUserService
     */
    hasReports(): Observable<boolean> {
        return from(this.beyond.user.hasReports());
    }

    /**
     * Set pref for specified alert
     *
     * @param {number} alertId
     * @param {UserAlertPref} alertPrefs
     * @returns {Observable<UserAlertPref>}
     * @memberof BeyondUserService
     */
    setAlertPref(alertId: number, alertPrefs: UserAlertPref): Observable<UserAlertPref> {
        return from(this.beyond.user.setAlertPref(alertId, alertPrefs));
    }

    /**
     * Update user
     *
     * @param {User} user
     * @returns {Observable<User>}
     * @memberof BeyondUserService
     */
    setInfo(user: User): Observable<User> {
        return from(this.beyond.user.setInfo(user));
    }

    /**
     * Set user pref
     *
     * @param {string} key
     * @param {*} value
     * @param {boolean} [isCore]
     * @returns {Observable<Pref>}
     * @memberof BeyondUserService
     */
    setPref(key: string, value: any, isCore?: boolean): Observable<Pref> {
        return from(this.beyond.user.setPref(key, value, isCore));
    }
}
