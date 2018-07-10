import { TestBed } from '@angular/core/testing';
import * as fetchMock from 'jest-fetch-mock';

import { sessionsMocks, usersMocks, accountsMocks } from '@tools/mocks';
import { BeyondUserService, BeyondUserServiceModule } from '@service/user';
import { BeyondSessionService, BeyondSessionServiceModule } from '@service/session';

describe('BeyondUserService', () => {
    let userService: BeyondUserService;
    let sessionService: BeyondSessionService;

    beforeAll(done => {
        TestBed.configureTestingModule({
            imports: [BeyondUserServiceModule, BeyondSessionServiceModule]
        });

        userService = TestBed.get(BeyondUserService);
        sessionService = TestBed.get(BeyondSessionService);

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

    it('#getAccounts should return accounts array from observable', done => {
        fetchMock.once(usersMocks['/accounts']);
        userService.getAccounts()
            .subscribe(
                accounts => {
                    expect(accounts).toEqual(jasmine.any(Array));

                    const account = accounts[0];
                    expect(account).toHaveProperty('id');
                    expect(account).toHaveProperty('client_id');
                    expect(account).toHaveProperty('brand');
                    expect(account).toHaveProperty('company_name');
                    expect(account).toHaveProperty('display_name');
                    expect(account).toHaveProperty('owned_by');
                    expect(account).toHaveProperty('logo');
                    expect(account).toHaveProperty('logo_big');
                    expect(account).toHaveProperty('address1');
                    expect(account).toHaveProperty('address2');
                    expect(account).toHaveProperty('country');
                    expect(account).toHaveProperty('country_id');
                    expect(account).toHaveProperty('city');
                    expect(account).toHaveProperty('state');
                    expect(account).toHaveProperty('state_id');
                    expect(account).toHaveProperty('zip');
                    expect(account).toHaveProperty('phone');
                    expect(account).toHaveProperty('business_type');
                    expect(account).toHaveProperty('locale');
                    expect(account).toHaveProperty('locations');
                    expect(account).toHaveProperty('week_start_time');
                    expect(account).toHaveProperty('week_start_day');
                    expect(account).toHaveProperty('is_self_service');
                    expect(account).toHaveProperty('is_admin');
                    expect(account).toHaveProperty('created_at');
                    expect(account).toHaveProperty('created_by');
                    expect(account).toHaveProperty('updated_at');
                    expect(account).toHaveProperty('updated_by');
                    expect(account).toHaveProperty('is_demo');
                    return done();
                },
                err => expect(err).toBeUndefined()
            );
            return done();
    });

    it('#getAlertsPrefs should return array of alert prefs from observable', done => {
        fetchMock.once(usersMocks['/user_alert_prefs']);
        userService.getAlertsPrefs()
            .subscribe(
                prefs => {
                    expect(prefs).toEqual(jasmine.any(Array));
                    const pref = prefs[0];
                    expect(pref).toHaveProperty('id');
                    expect(pref).toHaveProperty('alert_id');
                    expect(pref).toHaveProperty('is_web');
                    expect(pref).toHaveProperty('is_email');
                    expect(pref).toHaveProperty('is_sms');
                    expect(pref).toHaveProperty('created_at');
                    expect(pref).toHaveProperty('created_by');
                    expect(pref).toHaveProperty('updated_at');
                    expect(pref).toHaveProperty('updated_by');
                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#getAlertsPrefs should return single alert pref from observable', done => {
        fetchMock.once(usersMocks['/user_alert_prefs']);
        userService.getAlertsPrefs(124)
            .subscribe(
                pref => {
                    expect(pref).toHaveProperty('id');
                    expect(pref).toHaveProperty('alert_id', 124);
                    expect(pref).toHaveProperty('is_web');
                    expect(pref).toHaveProperty('is_email');
                    expect(pref).toHaveProperty('is_sms');
                    expect(pref).toHaveProperty('created_at');
                    expect(pref).toHaveProperty('created_by');
                    expect(pref).toHaveProperty('updated_at');
                    expect(pref).toHaveProperty('updated_by');
                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#getInfo should return user info from observable', done => {
        fetchMock.once(accountsMocks['/users/me/simplified']);
        userService.getInfo()
            .subscribe(
                me => {
                    expect(me).toHaveProperty('id');
                    expect(me).toHaveProperty('email');
                    expect(me).toHaveProperty('first_name');
                    expect(me).toHaveProperty('last_name');
                    expect(me).toHaveProperty('created_by');
                    expect(me).toHaveProperty('updated_by');
                    expect(me).toHaveProperty('profile_pic');
                    expect(me).toHaveProperty('profile_pic_big');
                    expect(me).toHaveProperty('mobile_phone');
                    expect(me).toHaveProperty('job_title');
                    expect(me).toHaveProperty('location');
                    expect(me).toHaveProperty('birthday');
                    expect(me).toHaveProperty('about');
                    expect(me).toHaveProperty('public_email');
                    expect(me).toHaveProperty('public_mobile_phone');
                    expect(me).toHaveProperty('last_login');
                    expect(me).toHaveProperty('created_at');
                    expect(me).toHaveProperty('updated_at');

                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#getPrefs should return array of prefs from observable', done => {
        sessionService.setOptions({ development: true });
        fetchMock.once(usersMocks['/user_prefs']);
        userService.getPrefs(null, true)
            .subscribe(
                prefs => {
                    expect(prefs).toEqual(jasmine.any(Array));

                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#hasConfig should return boolean from observable', done => {
        userService.hasConfig()
            .subscribe(
                hasConfig => {
                    expect(hasConfig).toEqual(true);
                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#hasCorePermission should return boolean from observable', done => {
        userService.hasCorePermission('some_permission')
            .subscribe(
                hasCorePermission => {
                    expect(hasCorePermission).toEqual(true);
                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#hasReports should return boolean from observable', done => {
        fetchMock.once(usersMocks['/reports']);
        userService.hasReports()
            .subscribe(
                hasReports => {
                    expect(hasReports).toEqual(true);
                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#setAlertPref should set alertPref', done => {
        fetchMock.mockResponses(
            [usersMocks['/user_alert_prefs'], {status: 200}],
            [usersMocks['/user_alert_prefs/124'], {status: 200}],
            [usersMocks['/user_alert_prefs'], {status: 200}]
        );
        userService.setAlertPref(124, {is_web: false})
            .subscribe(
                pref => {
                    expect(pref).toHaveProperty('id');
                    expect(pref).toHaveProperty('alert_id');
                    expect(pref).toHaveProperty('is_web');
                    expect(pref).toHaveProperty('is_email');
                    expect(pref).toHaveProperty('is_sms');
                    expect(pref).toHaveProperty('created_at');
                    expect(pref).toHaveProperty('created_by');
                    expect(pref).toHaveProperty('updated_at');
                    expect(pref).toHaveProperty('updated_by');
                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#setInfo should set user info', done => {
        fetchMock.mockResponses(
            [usersMocks['/users/me'], {status: 200}],
            [accountsMocks['/users/me/simplified'], {status: 200}],
        );
        userService.setInfo({email: 'email@email.com'})
            .subscribe(
                me => {
                    expect(me).toHaveProperty('id');
                    expect(me).toHaveProperty('email');
                    expect(me).toHaveProperty('first_name');
                    expect(me).toHaveProperty('last_name');
                    expect(me).toHaveProperty('created_by');
                    expect(me).toHaveProperty('updated_by');
                    expect(me).toHaveProperty('profile_pic');
                    expect(me).toHaveProperty('profile_pic_big');
                    expect(me).toHaveProperty('mobile_phone');
                    expect(me).toHaveProperty('job_title');
                    expect(me).toHaveProperty('location');
                    expect(me).toHaveProperty('birthday');
                    expect(me).toHaveProperty('about');
                    expect(me).toHaveProperty('public_email');
                    expect(me).toHaveProperty('public_mobile_phone');
                    expect(me).toHaveProperty('last_login');
                    expect(me).toHaveProperty('created_at');
                    expect(me).toHaveProperty('updated_at');

                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

    it('#setPref should set pref', done => {
        fetchMock.mockResponses(
            [usersMocks['/user_prefs'], {status: 200}],
            [usersMocks['/app'], {status: 200}],
            [usersMocks['/user_prefs/999'], {status: 200}],
            [usersMocks['/user_prefs'], {status: 200}]
        );
        userService.setPref('some_pref', 'value', true)
            .subscribe(
                res => {
                    expect(res).toHaveProperty('id', 999);
                    expect(res).toHaveProperty('key', 'some_pref');
                    expect(res).toHaveProperty('value', 'value');
                    return done();
                },
                err => expect(err).toBeUndefined()
            );
    });

});
