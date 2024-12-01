import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { TextDecoder, TextEncoder } from 'util';

fetchMock.enableMocks();

global.TextEncoder = TextEncoder as any;
global.TextDecoder = TextDecoder as any;
