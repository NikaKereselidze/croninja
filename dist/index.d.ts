type Offsets = {
    second: number;
    minute: number;
    hour: number;
    day: number;
    month: number;
};
declare function Croninja(dayOfWeek: string, offsets: Offsets): string;
export { Croninja };
