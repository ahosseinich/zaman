import 'dayjs/locale/fa';
import type { DaysInMonth } from './month.types';
import { type DatePickerValue } from '../../types';
declare const getDays: (date: DatePickerValue | undefined) => DaysInMonth;
export default getDays;
