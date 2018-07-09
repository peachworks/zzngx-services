export interface Alert {
    id: number;
    app_id: number;
    name: string;
    key: string;
    is_actionable: boolean;
    description: string;
    default_subject: string;
    default_message: string;
    created_at: string;
    created_by: number;
    updated_at: string;
    updated_by: number;
}
