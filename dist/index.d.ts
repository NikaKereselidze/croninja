type Offsets = {
    second: number;
    minute: number;
    hour: number;
    day: number;
    month: number;
};
declare function Croninja(offsets: Offsets, dayOfWeek: string): string;
export { Croninja };
