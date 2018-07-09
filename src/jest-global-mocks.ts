import 'jest-localstorage-mock';

// BeyondJS Mocks
import * as _ from 'lodash';
Object.defineProperty(window, '_', {value: _ });

import * as fetch from 'jest-fetch-mock';
Object.defineProperty(window, 'fetch', {value: fetch });
