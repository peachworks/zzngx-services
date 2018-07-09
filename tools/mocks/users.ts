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

export let usersMocks = {};
Object.entries(mocks).forEach(([url, mock]) => usersMocks[url] = JSON.stringify(mock));
