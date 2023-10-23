export type Radius = 'thin' | 'x1' | 'x2' | 'x3' | 'x4';
interface radiusObject {
    wrapper: number;
    calendarItem: number;
}
export declare const radius: Record<Radius, radiusObject>;
export {};
