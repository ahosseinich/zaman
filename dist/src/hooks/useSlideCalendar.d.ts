import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { DaysInMonth } from '../utils/month/month.types';
interface UseSliderTypes {
    daysElementRefs: RefObject<HTMLDivElement[]>;
    days: DaysInMonth[];
    setDays: Dispatch<SetStateAction<DaysInMonth[]>>;
}
export declare const useSlideCalendar: ({ daysElementRefs, days, setDays }: UseSliderTypes) => {
    slideToTheNextMonth: () => void;
    slideToPrevMonth: () => void;
};
export {};
