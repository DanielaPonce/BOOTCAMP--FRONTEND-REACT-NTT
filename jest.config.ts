import { Config } from 'jest';

const config: Config = {
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	moduleNameMapper: {
		'\\.(css|scss|sass|less)$': 'identity-obj-proxy'
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};

export default config;
