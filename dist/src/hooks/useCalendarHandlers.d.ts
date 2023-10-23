import { type SyntheticEvent } from 'react';
import type { DatePickerValue } from '../types';
type Event = SyntheticEvent<HTMLButtonElement>;
interface useCalendarHandlersType {
    range?: boolean;
    onChange: (d: Date, to?: Date) => void;
    from?: DatePickerValue;
    to?: DatePickerValue;
}
export declare const useCalendarHandlers: (props: useCalendarHandlersType) => {
    handlers: {
        onMouseMove?: ((e: Event) => void) | undefined;
        onClick: (e: Event) => string | void;
    };
    from: Date | undefined;
    to: Date | undefined;
};
export default useCalendarHandlers;
