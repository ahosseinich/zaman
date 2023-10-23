export declare const getDateFormat: (date: Date, options: Intl.DateTimeFormatOptions, numberingSystem?: string) => string;
export declare const getDayOfMonth: (date: Date) => number;
export declare const getDayString: (date: Date, numberingSystem?: string) => string;
export declare const getYear: (date: Date, numberingSystem?: string) => string;
export declare const getYear2Digit: (date: Date, numberingSystem?: string) => string;
export declare const getMonthName: (date: Date, numberingSystem?: string) => string;
export declare const getMonth: (date: Date, numberingSystem?: string) => string;
declare const _default: {
    getDayOfMonth: (date: Date) => number;
    getMonth: (date: Date, numberingSystem?: string | undefined) => string;
    getMonthName: (date: Date, numberingSystem?: string | undefined) => string;
};
export default _default;
