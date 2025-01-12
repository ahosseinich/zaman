export interface WeekDays {
    date: Date;
    disabled: boolean;
}
export interface DaysInMonth {
    id: number;
    monthName: string;
    middleOfMonth: Date;
    weeks: WeekDays[][];
}
