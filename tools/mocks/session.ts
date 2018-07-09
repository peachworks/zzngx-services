let mocks = {};

mocks['/oauth/session/login'] = {
    access_token: 'SlAV32hkKG',
    expires_in: 3600,
    refresh_token: 'Da8i1930LSj',
    app_tokens: {}
};

mocks['/oauth/session/logout'] = {
    success: true
};

export let sessionsMocks = {};
Object.entries(mocks).forEach(([url, mock]) => sessionsMocks[url] = JSON.stringify(mock));
