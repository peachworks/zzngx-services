let mocks = {};

mocks['/accounts'] = {
    type: 'accounts',
    count: 2,
    params: {},
    results: [
        {
            id: 91,
            client_id: 304,
            brand: 'beyond',
            company_name: 'Dave\'s Pizza',
            display_name: 'Dave\'s',
            owned_by: 34,
            logo: 'http://s3.aws.com/wtm_bucket/blah.png',
            logo_big: 'http://s3.aws.com/wtm_bucket/blah.png',
            address1: '',
            address2: '',
            country: 'USA',
            country_id: 227,
            city: 'Norwalk',
            state: 'CT',
            state_id: 3461,
            zip: '06840',
            phone: '',
            business_type: '',
            locale: 'en-us',
            locations: 1,
            week_start_time: '04:00',
            week_start_day: 2,
            is_self_service: true,
            is_admin: true,
            created_at: '2012-08-02 10:00:00',
            created_by: 34,
            updated_at: '2012-08-02 10:00:00',
            updated_by: 34,
            is_demo: false
        },
        {
            id: 102,
            client_id: 310,
            brand: 'beyond',
            company_name: 'Dave\'s Pizza2',
            display_name: 'Dave\'s 2',
            owned_by: 34,
            logo: 'http://s3.aws.com/wtm_bucket/blah.png',
            logo_big: 'http://s3.aws.com/wtm_bucket/blah.png',
            address1: '',
            address2: '',
            country: 'USA',
            country_id: 227,
            city: 'Norwalk',
            state: 'CT',
            state_id: 3461,
            zip: '06840',
            phone: '',
            business_type: '',
            locale: 'en-us',
            locations: 1,
            week_start_time: '04:00',
            week_start_day: 2,
            is_self_service: true,
            is_admin: false,
            created_at: '2012-08-02 10:00:00',
            created_by: 34,
            updated_at: '2012-08-02 10:00:00',
            updated_by: 34,
            is_demo: false
        }
    ]
};

mocks['/user_alert_prefs'] = {
    type: 'user_alert_prefs',
    count: 2,
    params: {},
    results: [
        {
            id: 91,
            alert_id: 88,
            is_web: true,
            is_email: true,
            is_sms: true,
            created_at: '2012-08-02 10:00:00',
            created_by: 101,
            updated_at: '2012-08-02 13:21:00',
            updated_by: 101
        },
        {
            id: 93,
            alert_id: 124,
            is_web: true,
            is_email: true,
            is_sms: true,
            created_at: '2012-08-02 10:00:00',
            created_by: 101,
            updated_at: '2012-08-02 13:21:00',
            updated_by: 101
        }
    ]
};

mocks['/user_alert_prefs/124'] = {
    id: 93,
    alert_id: 124,
    is_web: true,
    is_email: true,
    is_sms: true,
    created_at: '2012-08-02 10:00:00',
    created_by: 101,
    updated_at: '2012-08-02 13:21:00',
    updated_by: 101
};

mocks['/user_prefs'] = {
    type: 'user_prefs',
    count: 2,
    params: {},
    results: [
        {
            id: 91,
            app_id: 1,
            key: 'show_welcome',
            value: 'true',
            created_at: '2012-08-02 10:00:00',
            created_by: 101,
            updated_at: '2012-08-02 13:21:00',
            updated_by: 101
        },
        {
            id: 93,
            app_id: 1,
            key: 'hide_alerts',
            value: 'true',
            created_at: '2012-08-02 10:00:00',
            created_by: 101,
            updated_at: '2012-08-02 13:21:00',
            updated_by: 101
        }
    ]
};

mocks['/user_prefs/999'] = {
    id: 999,
    app_id: 1,
    key: 'some_pref',
    value: 'value',
    created_at: '2012-08-02 10:00:00',
    created_by: 101,
    updated_at: '2012-08-02 13:21:00',
    updated_by: 101
};

mocks['/app'] = {

};

mocks['/reports'] = {
    type: 'reports',
    count: 1,
    params: {},
    results: [
        {
            id: 81,
            app_id: 34,
            name: 'Daily Sales',
            description: 'These are the weekly sales',
            waql: 'SELECT blah BY DAY',
            is_javascript: false,
            file_id: null,
            display_options: {},
            display_params: {},
            created_at: '2012-08-02 10:00:00',
            created_by: 101,
            updated_at: '2012-08-02 10:00:00',
            updated_by: 101
        }
    ]
};

mocks['/users/me'] = {
    id: 44,
    email: 'peachdev@peachworks.com',
    first_name: 'Peach',
    last_name: 'Dev',
    created_by: 37,
    updated_by: 44,
    profile_pic: 's3.amazonaws.com/production_user_icons/k89PG8o/44.png',
    profile_pic_big: 's3.amazonaws.com/production_user_icons/k89PG8o/big-44.png',
    mobile_phone: '+48664788067',
    job_title: 'Title',
    location: 'Peachville',
    birthday: 'August,1',
    about: 'about me goes here\nold phone +380962848093',
    public_email: 'peachdev@peachworks.com',
    public_mobile_phone: '+48664788067',
    last_login: '2015-01-07T20:41:06.999Z',
    created_at: '2013-01-29T01:06:20.270Z',
    updated_at: '2015-01-07T20:41:07.006Z'
};

export let usersMocks = {};
Object.entries(mocks).forEach(([url, mock]) => usersMocks[url] = JSON.stringify(mock));
