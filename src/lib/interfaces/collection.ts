export interface Collection<Resource> {
    type: string;
    count: number;
    params: any;
    results: Resource[];
}
