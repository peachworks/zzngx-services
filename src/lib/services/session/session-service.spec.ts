import { TestBed } from '@angular/core/testing';
import * as fetchMock from 'jest-fetch-mock';

import { sessionsMocks } from '@tools/mocks';
import { BeyondSessionService, BeyondSessionServiceModule } from '@service/session';

import * as beyondConfig from '../../../../beyond-test.config';

describe('BeyondSessionService', () => {
    let sessionService: BeyondSessionService;

    beforeAll(done => {
        TestBed.configureTestingModule({
            imports: [BeyondSessionServiceModule]
        });

        sessionService = TestBed.get(BeyondSessionService);
        expect(sessionService).toBeDefined();
        return done();
    });
    it('#getActiveAccount should return account id', done => {
        const accountId = sessionService.getActiveAccount();
        expect(accountId).toEqual(beyondConfig.accountId);
        return done();
    });

    it('#getActiveApp should return app id', done => {
        const appKey = sessionService.getActiveApp();
        expect(appKey).toEqual(beyondConfig.appKey);
        return done();
    });

    it('#setActiveLocation should set location id as active', done => {
        const locationId = sessionService.setActiveLocation(beyondConfig.locationId);
        expect(locationId).toEqual(beyondConfig.locationId);
        return done();
    });

    it('#getActiveLocation should return active location id', done => {
        const locationId = sessionService.getActiveLocation();
        expect(locationId).toEqual(beyondConfig.locationId);
        return done();
    });

    it('#getApiUrl should return api url', done => {
        const apiUrl = sessionService.getApiUrl();
        expect(apiUrl).toEqual('https://api.dev.peachworks.com/v1');
        return done();
    });

    it('#getApiVersion should return api version', done => {
        const apiVersion = sessionService.getApiVersion();
        expect(apiVersion).toEqual('v1');
        return done();
    });

    it('#getDevSessionCookieName should return dev session cookie name', done => {
        const devSessionCookieName = sessionService.getDevSessionCookieName();
        expect(devSessionCookieName).toEqual('peach_dev_sid');
        return done();
    });

    it('#getOptions should return all options', done => {
        const options = sessionService.getOptions();
        expect(options).toHaveProperty('apiURL');
        expect(options).toHaveProperty('apiVersion');
        expect(options).toHaveProperty('devSessionCookieName');
        expect(options).toHaveProperty('development');
        expect(options).toHaveProperty('sessionAppKeysCookieName');
        expect(options).toHaveProperty('sessionAppTokenCookieName');
        expect(options).toHaveProperty('sessionAppTokensCookieName');
        expect(options).toHaveProperty('sessionCookieName');
        expect(options).toHaveProperty('sessionExpiryCookieName');
        expect(options).toHaveProperty('sessionRefreshCookieName');
        expect(options).toHaveProperty('sessionRefreshTimeCookieName');
        expect(options).toHaveProperty('userSaveCookieName');
        return done();
    });

    it('#getOptions should return option value', done => {
        const option = sessionService.getOptions('apiURL');
        expect(option).toEqual('https://api.dev.peachworks.com');
        return done();
    });

    it('#getSessionAppKeysCookieName should return app key cookie name', done => {
        const cookieName = sessionService.getSessionAppKeysCookieName();
        expect(cookieName).toEqual('peach_app_keys');
        return done();
    });

    it('#getSessionAppTokensCookieName should return app tokens cookie name', done => {
        const cookieName = sessionService.getSessionAppTokensCookieName();
        expect(cookieName).toEqual('peach_app_tokens');
        return done();
    });

    it('#getSessionCookieName should return session cookie name', done => {
        const cookieName = sessionService.getSessionCookieName();
        expect(cookieName).toEqual('peach_sid');
        return done();
    });

    it('#getSessionExpiryCookieName should return session expiry cookie name', done => {
        const cookieName = sessionService.getSessionExpiryCookieName();
        expect(cookieName).toEqual('peach_sid_expiry');
        return done();
    });

    it('#getSessionRefreshCookieName should return session refesh cookie name', done => {
        const cookieName = sessionService.getSessionExpiryCookieName();
        expect(cookieName).toEqual('peach_sid_expiry');
        return done();
    });

    it('#getSessionRefreshTimeCookieName should return session refesh time cookie name', done => {
        const cookieName = sessionService.getSessionExpiryCookieName();
        expect(cookieName).toEqual('peach_sid_expiry');
        return done();
    });

    it('#getUserSaveCookieName should return user save cookie name', done => {
        const cookieName = sessionService.getUserSaveCookieName();
        expect(cookieName).toEqual('peach_user');
        return done();
    });

    it('#isDevelopment should return boolean value', done => {
        const isDevelopment = sessionService.isDevelopment();
        expect(isDevelopment).toEqual(false);
        return done();
    });

    it('#isPreview should return boolean value', done => {
        const isPreview = sessionService.isPreview();
        expect(isPreview).toEqual(false);
        return done();
    });

    it('#login should return tokens', done => {
        fetchMock.once(sessionsMocks['/oauth/session/login']);
        sessionService.login('username', 'passsword')
            .subscribe(
                res => {
                    expect(res.app_tokens).toBeDefined();
                    expect(res.access_token).toBeDefined();
                    expect(res.expires_in).toBeDefined();
                    expect(res.refresh_token).toBeDefined();
                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#logout should return observable', done => {
        fetchMock.once(sessionsMocks['/oauth/session/logout']);
        sessionService.logout()
            .subscribe(
                res => {
                    expect(res).toHaveProperty('success', true);
                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#refresh should return tokens', done => {
        fetchMock.once(sessionsMocks['/oauth/session/login']);
        sessionService.refresh('token')
            .subscribe(
                res => {
                    expect(res.app_tokens).toBeDefined();
                    expect(res.access_token).toBeDefined();
                    expect(res.expires_in).toBeDefined();
                    expect(res.refresh_token).toBeDefined();
                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#setOptions should set new option for session', done => {
        sessionService.setOptions({ development: true });
        const optionValue = sessionService.getOptions('development');
        expect(optionValue).toEqual(true);
        return done();
    });
});
