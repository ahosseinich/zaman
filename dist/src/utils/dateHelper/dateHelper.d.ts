export declare const sameMonth: (date: Date, date2: Date) => boolean;
export declare const sameDay: (date?: Date, date2?: Date) => boolean;
export declare const getYears: (date: Date, from?: number, to?: number) => number[];
export declare const selectMonth: (date: Date, selectedMonth: number) => Date;
export declare const selectYear: (date: Date, selectedYear: number) => Date;
export declare const isInBetween: (day: Date, from?: Date | null, to?: Date | null) => boolean;
declare const _default: {
    sameMonth: (date: Date, date2: Date) => boolean;
    sameDay: (date?: Date | undefined, date2?: Date | undefined) => boolean;
    getYears: (date: Date, from?: number, to?: number) => number[];
    selectMonth: (date: Date, selectedMonth: number) => Date;
    selectYear: (date: Date, selectedYear: number) => Date;
    isInBetween: (day: Date, from?: Date | null | undefined, to?: Date | null | undefined) => boolean;
};
export default _default;
