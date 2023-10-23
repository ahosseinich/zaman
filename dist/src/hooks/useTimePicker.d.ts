import type React from 'react';
import { type DatePickerValue } from '../types';
import { type onChangePayload } from '../packages/TimePicker/TimePicker.types';
interface useTimePickerType {
    timeConvention?: 'am' | 'pm';
    clockTime?: 24 | 12;
    defaultValue?: DatePickerValue;
    onChange?: (payload: onChangePayload) => void;
}
export declare const useTimePicker: ({ defaultValue, clockTime, timeConvention, onChange }: useTimePickerType) => {
    hour: number;
    minute: number;
    isInsideHour: boolean;
    selectingHour: boolean;
    handleMouseMove: (e: React.MouseEvent) => void;
    handleMouseUp: () => void;
    handleSelecting: (e: React.MouseEvent | React.TouchEvent) => void;
};
export {};
