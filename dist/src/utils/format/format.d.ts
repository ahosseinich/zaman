import { type formatFunctions, type Formats } from './format.types';
export declare const formats: Record<Formats, formatFunctions>;
export declare const formatDate: (date: Date, format: string, numberingSystem?: string) => string;
export default formatDate;
