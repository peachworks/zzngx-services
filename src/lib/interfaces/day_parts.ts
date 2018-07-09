export interface DayParts {
    id: number;
    name: string;
    position: number;
    parts: Part[];
    created_at: string;
    created_by: number;
    updated_at: string;
    updated_by: number;
}

export interface Part {
    day: string;
    start_time: string;
    end_time: string;
}
