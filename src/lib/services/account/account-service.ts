import { Injectable, Inject } from '@angular/core';
import { Observable, from } from 'rxjs';

import * as Beyond from '@getbeyond/beyond-js';

import { BeyondJS } from '@provider/beyond-js';
import {
    Pref, Alert,
    DayParts, DeveloperAccount, Doc,
    Employee, Job, Location, Role, User
} from '@interfaces';

@Injectable()
export class BeyondAccountService {
    /**
     * Creates an instance of BeyondAccountService.
     *
     * @param {Beyond} beyond
     * @memberof BeyondAccountService
     */
    constructor(@Inject(BeyondJS) private beyond: Beyond) {}

    /**
     * Returns an array of app alerts or specific alert by id
     *
     * @param {number} [alertId]
     * @returns {(Observable <Alert|Alert[]>)}
     * @memberof BeyondAccountService
     */
    getAlerts(alertId?: number): Observable <Alert|Alert[]> {
        return from(this.beyond.account.getAlerts(alertId));
    }

    /**
     * Returns an array of day_parts for an account or a specific day part by id
     *
     * @param {number} [dayPartId]
     * @returns {(Observable <DayParts|DayParts[]>)}
     * @memberof BeyondAccountService
     */
    getDayParts(dayPartId?: number): Observable <DayParts|DayParts[]> {
        return from(this.beyond.account.getDayParts(dayPartId));
    }

    /**
     * Return an array of app docs for a customer based on their permissions
     *
     * @param {number} [docId]
     * @returns {(Observable <Doc|Doc[]>)}
     * @memberof BeyondAccountService
     */
    getDocs(docId?: number): Observable <Doc|Doc[]> {
        return from(this.beyond.account.getDocs(docId));
    }

    /**
     * Returns an array of employees or a specific employee by id
     *
     * @param {number} [employeeId]
     * @returns {(Observable <Employee|Employee[]>)}
     * @memberof BeyondAccountService
     */
    getEmployees(employeeId?: number): Observable <Employee|Employee[]> {
        return from(this.beyond.account.getEmployees(employeeId));
    }

    /**
     * Returns an array of accounts or all the user & developer info
     *
     * @returns {(Observable <DeveloperAccount|Account[]>)}
     * @memberof BeyondAccountService
     */
    getInfo(): Observable <DeveloperAccount|Account[]> {
        return from(this.beyond.account.getInfo());
    }

    /**
     * Returns an array of jobs or job specified by id
     *
     * @param {number} [jobId]
     * @returns {(Observable <Job|Job[]>)}
     * @memberof BeyondAccountService
     */
    getJobs(jobId?: number): Observable <Job|Job[]> {
        return from(this.beyond.account.getJobs(jobId));
    }

    /**
     * Returns an array of locations or location specified by id
     *
     * @param {number} [locationId]
     * @returns {(Observable <Location|Location[]>)}
     * @memberof BeyondAccountService
     */
    getLocations(locationId?: number): Observable <Location|Location[]> {
        return from(this.beyond.account.getLocations(locationId));
    }

    /**
     * Returns all account prefs for a user or single pref by key
     *
     * @param {string} [key]
     * @param {boolean} [isCore]
     * @returns {(Observable <Pref|Pref[]>)}
     * @memberof BeyondAccountService
     */
    getPrefs(key?: string, isCore?: boolean): Observable <Pref|Pref[]> {
        return from(this.beyond.account.getPrefs(key, isCore));
    }

    /**
     * Returns an array of roles or role specified by id
     *
     * @param {number} [roleId]
     * @returns {(Observable <Role|Role[]>)}
     * @memberof BeyondAccountService
     */
    getRoles(roleId?: number): Observable <Role|Role[]> {
        return from(this.beyond.account.getRoles(roleId));
    }

    /**
     * Returns an array of users or user specified by id
     *
     * @param {number} [userId]
     * @returns {(Observable <User|User[]>)}
     * @memberof BeyondAccountService
     */
    getUsers(userId?: number): Observable <User|User[]> {
        return from(this.beyond.account.getUsers(userId));
    }
}
