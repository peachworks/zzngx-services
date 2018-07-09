let mocks = {};

mocks['/alerts'] = {
  type: 'alerts',
  count: 1,
  results:
    [
        {
            id: 91,
            app_id: 34,
            name: 'Schedule Published',
            key: 'schedule_published',
            is_actionable: false,
            description: 'You will be notified of your shifts when a schedule is published',
            default_subject: 'Your schedule is live!',
            default_message: '',
            created_at: '2012-08-02 10:00:00',
            created_by: 101,
            updated_at: '2012-08-05 15:34:09',
            updated_by: 101
        }
    ]
};

mocks['/day_parts'] = {
    type: 'day_parts',
    count: 1,
    params: {},
    results:
        [
            {
                id: 81,
                name: 'New Brunch',
                position: 0,
                parts: [
                    { day: 'Monday', start_time: '09:00:00', end_time:' 14:00:00' },
                    { day: 'Tuesday', start_time: '09:00:00', end_time: '14:00:00' }
                ],
                created_at: '2012-08-03 15:00:00',
                created_by: 101,
                updated_at: '2012-08-03 15:00:00',
                updated_by: 101
            }
        ]
};

mocks['/docs'] = {
    type: 'docs',
    count: 1,
    params: {},
    results:
        [
            {
                id: 91,
                app_id: 34,
                name: 'Intro to Inventory',
                description : 'Understanding the Basics of Inventory',
                position: 1,
                content: '<p>foo foo foo</p>',
                created_at: '2012-08-03 15:00:00',
                created_by: 101,
                updated_at: '2012-08-03 15:00:00',
                updated_by: 101
            }
        ]
};

mocks['/employees'] = {
    type: 'employees',
    count: 1,
    params: {},
    results:
        [
            {
                id: 91,
                first_name: 'Jack',
                last_name: 'Smith',
                user_id: 99,
                employer_number: '1002',
                email: 'jsmith@atari.com',
                home_phone: '201-222-2222',
                mobile_phone: '333-222-1111',
                address: '23 View Lane',
                city: 'Flint',
                state: 'Michigan',
                state_id: 3464,
                zip: '333-222-1111',
                country: 'USA',
                country_id: 227,
                job_title: 'CEO',
                birth_date: '1979-02-04',
                hire_date: '2010-01-01',
                termination_date: null,
                is_active: true,
                created_at: '2012-08-03 15:00:00',
                created_by: 101,
                updated_at: '2012-08-03 15:00:00',
                updated_by: 101
            }
        ]
};

mocks['/users/me/simplified'] = {
  user: {
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
  }
};

mocks['/jobs'] = {
  type: 'jobs',
  count: 2,
  params: {},
  results:
      [
        {
          id: 81,
          name: 'Busser',
          code: 'BUS',
          is_deleted: false,
          created_at: '2012-05-30 10:34:01',
          created_by: 78,
          updated_at: '2012-05-30 10:34:01',
          updated_by: 78
        },
        {
          id: 89,
          name: 'Line Cook',
          code: null,
          is_deleted: false,
          created_at: '2012-05-30 10:34:01',
          created_by: 78,
          updated_at: '2012-05-30 10:34:01',
          updated_by: 78
        }
      ]
};

mocks['/locations'] = {
    type: 'locations',
    count: 1,
    params: {},
    results:
        [
            {
                id: 91,
                name: 'Chicago #5',
                merchant_id: 973308773102544,
                number: '4532', 
                timezone: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                state_id : '',
                country: '',
                country_id: '',
                zip: '',
                phone: '',
                tags: ['test stores', 'Midwest'],
                org_group_id: null,
                created_at: '2012-08-02 10:00:00',
                created_by: 101,
                updated_at: '2012-08-05 13:10:21',
                updated_by: 101
              }
        ]
};

mocks['/account_prefs'] = {
    type: 'account_prefs',
    count: 2,
    params: {},
    results:
        [
            {
                id: 91,
                app_id: 88,
                key: 'show_welcome',
                value: 'true',
                created_at: '2012-08-02 10:00:00',
                created_by: 101,
                updated_at: '2012-08-02 13:21:00',
                updated_by: 101
            },
            {
                id: 93,
                app_id: 88,
                key: 'hide_alerts',
                value: 'true',
                created_at: '2012-08-02 10:00:00',
                created_by: 101,
                updated_at: '2012-08-02 13:21:00',
                updated_by: 101
            }
        ]
};

mocks['/roles'] = {
    type: 'roles',
    count: 2,
    params: {},
    results:
        [
            {
                id: 81,
                name: 'Special Managers',
                description: 'This is a role for special managers',
                is_location_role: false,
                is_default_role: false,
                is_admin_role: false,
                permissions: [ 3,9,31,84 ],
                created_at: '2012-05-30 10:34:01',
                created_by: 78,
                updated_at: '2012-05-30 10:34:01',
                updated_by: 78
              },
              {
                id: 89,
                name: 'Employees',
                description: 'For hourly employees',
                is_location_role: true,
                is_default_role: true,
                is_admin_role: false,
                permissions: [ 3,9 ],
                created_at: '2012-05-31 12:24:11',
                created_by: 78,
                updated_at: '2012-05-31 12:24:11',
                updated_by: 78
              }
        ]
};

mocks['/users'] = {
    type: 'users',
    count: 2,
    params: {},
    results:
        [
            {
                id: 304,
                verified: true,
                email: 'jschacher@peachworks.com',
                first_name: 'Jeff',
                last_name: 'Schacher',
                profile_pic: 's3.peachworks.com/profile_images/304.png',
                profile_pic_big: 's3.peachworks.com/profile_images/304.png',
                last_login: '2012-02-10 11:23:23',
                job_title: null,
                location: null,
                birthday: null,
                about: null,
                public_email: null,
                public_mobile_phone: null,
                created_at: '2012-01-19 12:04:51',
                updated_at: '2012-01-19 12:04:51'
              },
              {
                id: 309,
                verified: true,
                email: 'ssmith@google.com',
                first_name: 'Steve',
                last_name: 'Smith',
                profile_pic: 's3.peachworks.com/profile_images/304.png',
                profile_pic_big: 's3.peachworks.com/profile_images/304.png',
                last_login: '2012-02-10 11:23:23',
                job_title: null,
                location: null,
                birthday: null,
                about: null,
                public_email: null,
                public_mobile_phone: null,
                created_at: '2012-01-19 12:04:51',
                updated_at: '2012-01-19 12:04:51'
              }
        ]
};

export let accountsMocks = {};
Object.entries(mocks).forEach(([url, mock]) => accountsMocks[url] = JSON.stringify(mock));