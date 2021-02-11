import {create} from "./create";
import {getEnvNameFromProcess} from "./getEnvNameFromProcess";

export * from './create';
export * from './Env';
export * from './Info';
export * from './getEnvNameFromProcess';

export const info = create(getEnvNameFromProcess());

export const isProduction = info.isProduction;
export const isDevelopment = info.isDevelopment;
export const isStaging = info.isStaging;
export const isTest = info.isTest;
export const env = info.name;
export const envName = info.name;

export const is = info.is;
export const isEnv = info.is;
export const forEnv = info.forEnv;
export const forDevelopment = info.forDevelopment;
export const forStaging = info.forStaging;
export const forTest = info.forTest;
export const forProduction = info.forProduction;
