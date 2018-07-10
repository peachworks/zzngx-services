import { TestBed } from '@angular/core/testing';
import * as fetchMock from 'jest-fetch-mock';

import { sessionsMocks, accountsMocks } from '@tools/mocks';
import { BeyondAccountService, BeyondAccountServiceModule } from '@service/account';
import { BeyondSessionService, BeyondSessionServiceModule } from '@service/session';

describe('BeyondAccountService', () => {
    let accountService: BeyondAccountService;
    let sessionService: BeyondSessionService;

    beforeAll(done => {
        TestBed.configureTestingModule({
            imports: [BeyondAccountServiceModule, BeyondSessionServiceModule]
        });

        accountService = TestBed.get(BeyondAccountService);
        sessionService = TestBed.get(BeyondSessionService);
        expect(accountService).toBeDefined();
        expect(sessionService).toBeDefined();

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

    describe('Collections', () => {
        it('#getAlerts should return array of alerts from observable', done => {
            fetchMock.once(accountsMocks['/alerts']);
            accountService.getAlerts()
                .subscribe(
                    alerts => {
                        expect(alerts).toEqual(jasmine.any(Array));

                        const alert = alerts[0];
                        expect(alert).toHaveProperty('id');
                        expect(alert).toHaveProperty('app_id');
                        expect(alert).toHaveProperty('name');
                        expect(alert).toHaveProperty('is_actionable');
                        expect(alert).toHaveProperty('description');
                        expect(alert).toHaveProperty('default_subject');
                        expect(alert).toHaveProperty('default_message');
                        expect(alert).toHaveProperty('created_at');
                        expect(alert).toHaveProperty('created_by');
                        expect(alert).toHaveProperty('updated_at');
                        expect(alert).toHaveProperty('updated_by');

                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getDayParts should return array of day parts from observable', done => {
            fetchMock.once(accountsMocks['/day_parts']);
            accountService.getDayParts()
                .subscribe(
                    dayParts => {
                        expect(dayParts).toEqual(jasmine.any(Array));

                        const dayPart = dayParts[0];
                        expect(dayPart).toHaveProperty('id');
                        expect(dayPart).toHaveProperty('name');
                        expect(dayPart).toHaveProperty('position');
                        expect(dayPart).toHaveProperty('parts');
                        expect(dayPart.parts).toEqual(jasmine.any(Array));
                        expect(dayPart).toHaveProperty('created_at');
                        expect(dayPart).toHaveProperty('created_by');
                        expect(dayPart).toHaveProperty('updated_at');
                        expect(dayPart).toHaveProperty('updated_by');

                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getDocs should return array of docs from observable', done => {
            fetchMock.once(accountsMocks['/docs']);
            accountService.getDocs()
                .subscribe(
                    docs => {
                        expect(docs).toEqual(jasmine.any(Array));

                        const doc = docs[0];
                        expect(doc).toHaveProperty('id');
                        expect(doc).toHaveProperty('app_id');
                        expect(doc).toHaveProperty('name');
                        expect(doc).toHaveProperty('description');
                        expect(doc).toHaveProperty('position');
                        expect(doc).toHaveProperty('content');
                        expect(doc).toHaveProperty('created_at');
                        expect(doc).toHaveProperty('created_by');
                        expect(doc).toHaveProperty('updated_at');
                        expect(doc).toHaveProperty('updated_by');

                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getEmployees should return array of employees from observable', done => {
            fetchMock.once(accountsMocks['/employees']);
            accountService.getEmployees()
                .subscribe(
                    employees => {
                        expect(employees).toEqual(jasmine.any(Array));

                        const employee = employees[0];
                        expect(employee).toHaveProperty('id');
                        expect(employee).toHaveProperty('first_name');
                        expect(employee).toHaveProperty('last_name');
                        expect(employee).toHaveProperty('user_id');
                        expect(employee).toHaveProperty('employer_number');
                        expect(employee).toHaveProperty('email');
                        expect(employee).toHaveProperty('home_phone');
                        expect(employee).toHaveProperty('mobile_phone');
                        expect(employee).toHaveProperty('address');
                        expect(employee).toHaveProperty('city');
                        expect(employee).toHaveProperty('state');
                        expect(employee).toHaveProperty('state_id');
                        expect(employee).toHaveProperty('zip');
                        expect(employee).toHaveProperty('country');
                        expect(employee).toHaveProperty('country_id');
                        expect(employee).toHaveProperty('job_title');
                        expect(employee).toHaveProperty('birth_date');
                        expect(employee).toHaveProperty('hire_date');
                        expect(employee).toHaveProperty('termination_date');
                        expect(employee).toHaveProperty('is_active');
                        expect(employee).toHaveProperty('created_at');
                        expect(employee).toHaveProperty('created_by');
                        expect(employee).toHaveProperty('updated_at');
                        expect(employee).toHaveProperty('updated_by');

                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getInfo should return user info from observable', done => {
            fetchMock.once(accountsMocks['/users/me/simplified']);
            accountService.getInfo()
                .subscribe(
                    users => {
                        expect(users).toHaveProperty('user');
                        const me = users['user'];
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

        it('#getJobs should return array of jobs from observable', done => {
            fetchMock.once(accountsMocks['/jobs']);
            accountService.getJobs()
                .subscribe(
                    jobs => {
                        expect(jobs).toEqual(jasmine.any(Array));
                        const job = jobs[0];
                        expect(job).toHaveProperty('id');
                        expect(job).toHaveProperty('name');
                        expect(job).toHaveProperty('code');
                        expect(job).toHaveProperty('is_deleted');
                        expect(job).toHaveProperty('created_at');
                        expect(job).toHaveProperty('created_by');
                        expect(job).toHaveProperty('updated_at');
                        expect(job).toHaveProperty('updated_by');
                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getLocations should return array of locations from observable', done => {
            fetchMock.once(accountsMocks['/locations']);
            accountService.getLocations()
                .subscribe(
                    locations => {
                        expect(locations).toEqual(jasmine.any(Array));
                        const location = locations[0];
                        expect(location).toHaveProperty('id');
                        expect(location).toHaveProperty('name');
                        expect(location).toHaveProperty('merchant_id');
                        expect(location).toHaveProperty('number');
                        expect(location).toHaveProperty('timezone');
                        expect(location).toHaveProperty('address1');
                        expect(location).toHaveProperty('address2');
                        expect(location).toHaveProperty('city');
                        expect(location).toHaveProperty('state');
                        expect(location).toHaveProperty('state_id');
                        expect(location).toHaveProperty('country');
                        expect(location).toHaveProperty('country_id');
                        expect(location).toHaveProperty('zip');
                        expect(location).toHaveProperty('phone');
                        expect(location).toHaveProperty('tags');
                        expect(location).toHaveProperty('org_group_id');
                        expect(location).toHaveProperty('created_at');
                        expect(location).toHaveProperty('created_by');
                        expect(location).toHaveProperty('updated_at');
                        expect(location).toHaveProperty('updated_by');
                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getPrefs should return array of prefs from observable', done => {
            fetchMock.once(accountsMocks['/account_prefs']);
            accountService.getPrefs(null, true)
                .subscribe(
                    prefs => {
                        expect(prefs).toEqual(jasmine.any(Array));
                        const pref = prefs[0];
                        expect(pref).toHaveProperty('id');
                        expect(pref).toHaveProperty('app_id');
                        expect(pref).toHaveProperty('key');
                        expect(pref).toHaveProperty('value');
                        expect(pref).toHaveProperty('created_at');
                        expect(pref).toHaveProperty('created_by');
                        expect(pref).toHaveProperty('updated_at');
                        expect(pref).toHaveProperty('updated_by');
                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getRoles should return array of roles from observable', done => {
            fetchMock.once(accountsMocks['/roles']);
            accountService.getRoles()
                .subscribe(
                    roles => {
                        expect(roles).toEqual(jasmine.any(Array));
                        const role = roles[0];
                        expect(role).toHaveProperty('id');
                        expect(role).toHaveProperty('name');
                        expect(role).toHaveProperty('description');
                        expect(role).toHaveProperty('is_location_role');
                        expect(role).toHaveProperty('is_default_role');
                        expect(role).toHaveProperty('is_admin_role');
                        expect(role).toHaveProperty('permissions');
                        expect(role).toHaveProperty('created_at');
                        expect(role).toHaveProperty('created_by');
                        expect(role).toHaveProperty('updated_at');
                        expect(role).toHaveProperty('updated_by');
                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getUsers should return array of users from observable', done => {
            fetchMock.once(accountsMocks['/users']);
            accountService.getUsers()
                .subscribe(
                    users => {
                        expect(users).toEqual(jasmine.any(Array));
                        const user = users[0];
                        expect(user).toHaveProperty('id');
                        expect(user).toHaveProperty('verified');
                        expect(user).toHaveProperty('email');
                        expect(user).toHaveProperty('first_name');
                        expect(user).toHaveProperty('last_name');
                        expect(user).toHaveProperty('profile_pic');
                        expect(user).toHaveProperty('profile_pic_big');
                        expect(user).toHaveProperty('last_login');
                        expect(user).toHaveProperty('job_title');
                        expect(user).toHaveProperty('location');
                        expect(user).toHaveProperty('birthday');
                        expect(user).toHaveProperty('about');
                        expect(user).toHaveProperty('public_email');
                        expect(user).toHaveProperty('public_mobile_phone');
                        expect(user).toHaveProperty('created_at');
                        expect(user).toHaveProperty('updated_at');
                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });
    });

    describe('Single instances', () => {
        it('#getAlerts should return alert from observable', done => {
            fetchMock.once(accountsMocks['/alerts']);
            accountService.getAlerts(91)
                .subscribe(
                    alert => {
                        expect(alert).toHaveProperty('id', 91);
                        expect(alert).toHaveProperty('app_id');
                        expect(alert).toHaveProperty('name');
                        expect(alert).toHaveProperty('is_actionable');
                        expect(alert).toHaveProperty('description');
                        expect(alert).toHaveProperty('default_subject');
                        expect(alert).toHaveProperty('default_message');
                        expect(alert).toHaveProperty('created_at');
                        expect(alert).toHaveProperty('created_by');
                        expect(alert).toHaveProperty('updated_at');
                        expect(alert).toHaveProperty('updated_by');

                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getDayParts should return day_part from observable', done => {
            fetchMock.once(accountsMocks['/day_parts']);
            accountService.getDayParts(81)
                .subscribe(
                    dayPart => {
                        expect(dayPart).toHaveProperty('id', 81);
                        expect(dayPart).toHaveProperty('name');
                        expect(dayPart).toHaveProperty('position');
                        expect(dayPart).toHaveProperty('parts');
                        expect(dayPart['parts']).toEqual(jasmine.any(Array));
                        expect(dayPart).toHaveProperty('created_at');
                        expect(dayPart).toHaveProperty('created_by');
                        expect(dayPart).toHaveProperty('updated_at');
                        expect(dayPart).toHaveProperty('updated_by');

                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getDocs should return doc from observable', done => {
            fetchMock.once(accountsMocks['/docs']);
            accountService.getDocs(91)
                .subscribe(
                    doc => {
                        expect(doc).toHaveProperty('id', 91);
                        expect(doc).toHaveProperty('app_id');
                        expect(doc).toHaveProperty('name');
                        expect(doc).toHaveProperty('description');
                        expect(doc).toHaveProperty('position');
                        expect(doc).toHaveProperty('content');
                        expect(doc).toHaveProperty('created_at');
                        expect(doc).toHaveProperty('created_by');
                        expect(doc).toHaveProperty('updated_at');
                        expect(doc).toHaveProperty('updated_by');

                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getEmployees should return employee from observable', done => {
            fetchMock.once(accountsMocks['/employees']);
            accountService.getEmployees(91)
                .subscribe(
                    employee => {
                        expect(employee).toHaveProperty('id', 91);
                        expect(employee).toHaveProperty('first_name');
                        expect(employee).toHaveProperty('last_name');
                        expect(employee).toHaveProperty('user_id');
                        expect(employee).toHaveProperty('employer_number');
                        expect(employee).toHaveProperty('email');
                        expect(employee).toHaveProperty('home_phone');
                        expect(employee).toHaveProperty('mobile_phone');
                        expect(employee).toHaveProperty('address');
                        expect(employee).toHaveProperty('city');
                        expect(employee).toHaveProperty('state');
                        expect(employee).toHaveProperty('state_id');
                        expect(employee).toHaveProperty('zip');
                        expect(employee).toHaveProperty('country');
                        expect(employee).toHaveProperty('country_id');
                        expect(employee).toHaveProperty('job_title');
                        expect(employee).toHaveProperty('birth_date');
                        expect(employee).toHaveProperty('hire_date');
                        expect(employee).toHaveProperty('termination_date');
                        expect(employee).toHaveProperty('is_active');
                        expect(employee).toHaveProperty('created_at');
                        expect(employee).toHaveProperty('created_by');
                        expect(employee).toHaveProperty('updated_at');
                        expect(employee).toHaveProperty('updated_by');

                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getJobs should return job from observable', done => {
            fetchMock.once(accountsMocks['/jobs']);
            accountService.getJobs(89)
                .subscribe(
                    job => {
                        expect(job).toHaveProperty('id', 89);
                        expect(job).toHaveProperty('name');
                        expect(job).toHaveProperty('code');
                        expect(job).toHaveProperty('is_deleted');
                        expect(job).toHaveProperty('created_at');
                        expect(job).toHaveProperty('created_by');
                        expect(job).toHaveProperty('updated_at');
                        expect(job).toHaveProperty('updated_by');
                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getLocations should return location from observable', done => {
            fetchMock.once(accountsMocks['/locations']);
            accountService.getLocations(91)
                .subscribe(
                    location => {
                        expect(location).toHaveProperty('id', 91);
                        expect(location).toHaveProperty('name');
                        expect(location).toHaveProperty('merchant_id');
                        expect(location).toHaveProperty('number');
                        expect(location).toHaveProperty('timezone');
                        expect(location).toHaveProperty('address1');
                        expect(location).toHaveProperty('address2');
                        expect(location).toHaveProperty('city');
                        expect(location).toHaveProperty('state');
                        expect(location).toHaveProperty('state_id');
                        expect(location).toHaveProperty('country');
                        expect(location).toHaveProperty('country_id');
                        expect(location).toHaveProperty('zip');
                        expect(location).toHaveProperty('phone');
                        expect(location).toHaveProperty('tags');
                        expect(location).toHaveProperty('org_group_id');
                        expect(location).toHaveProperty('created_at');
                        expect(location).toHaveProperty('created_by');
                        expect(location).toHaveProperty('updated_at');
                        expect(location).toHaveProperty('updated_by');
                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getPrefs should return pref from observable', done => {
            fetchMock.once(accountsMocks['/account_prefs']);
            accountService.getPrefs('show_welcome', true)
                .subscribe(
                    pref => {
                        expect(pref).toHaveProperty('id');
                        expect(pref).toHaveProperty('app_id');
                        expect(pref).toHaveProperty('key', 'show_welcome');
                        expect(pref).toHaveProperty('value');
                        expect(pref).toHaveProperty('created_at');
                        expect(pref).toHaveProperty('created_by');
                        expect(pref).toHaveProperty('updated_at');
                        expect(pref).toHaveProperty('updated_by');
                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getRoles should return role from observable', done => {
            fetchMock.once(accountsMocks['/roles']);
            accountService.getRoles(81)
                .subscribe(
                    role => {
                        expect(role).toHaveProperty('id', 81);
                        expect(role).toHaveProperty('name');
                        expect(role).toHaveProperty('description');
                        expect(role).toHaveProperty('is_location_role');
                        expect(role).toHaveProperty('is_default_role');
                        expect(role).toHaveProperty('is_admin_role');
                        expect(role).toHaveProperty('permissions');
                        expect(role).toHaveProperty('created_at');
                        expect(role).toHaveProperty('created_by');
                        expect(role).toHaveProperty('updated_at');
                        expect(role).toHaveProperty('updated_by');
                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });

        it('#getUsers should return array of users from observable', done => {
            fetchMock.once(accountsMocks['/users']);
            accountService.getUsers(304)
                .subscribe(
                    user => {
                        expect(user).toHaveProperty('id', 304);
                        expect(user).toHaveProperty('verified');
                        expect(user).toHaveProperty('email');
                        expect(user).toHaveProperty('first_name');
                        expect(user).toHaveProperty('last_name');
                        expect(user).toHaveProperty('profile_pic');
                        expect(user).toHaveProperty('profile_pic_big');
                        expect(user).toHaveProperty('last_login');
                        expect(user).toHaveProperty('job_title');
                        expect(user).toHaveProperty('location');
                        expect(user).toHaveProperty('birthday');
                        expect(user).toHaveProperty('about');
                        expect(user).toHaveProperty('public_email');
                        expect(user).toHaveProperty('public_mobile_phone');
                        expect(user).toHaveProperty('created_at');
                        expect(user).toHaveProperty('updated_at');
                        return done();
                    },
                    err => expect(err).toBeUndefined()
                );
        });
    });
});
