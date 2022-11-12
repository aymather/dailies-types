/**
 * Database models
 * 
 * We may not even use these, but we're going to keep them kinda the way we would
 * with a "mongodb" style application so that we have a reference to exactly what's
 * happening in the database.
 */
 export interface UserModel {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    signup_date: Date;
    profile_image?: string;
    avg_dailies_completed: number;
    longest_streak: number;
    pct_completed_yesterday: number;
    current_streak: number;
    sunday_avg: number;
    monday_avg: number;
    tuesday_avg: number;
    wednesday_avg: number;
    thursday_avg: number;
    friday_avg: number;
    saturday_avg: number;
}

export interface DailyModel {
    daily_id: number;
    user_id: number;
    name: string;
    icon: Icons;
    pct: number;
}

export interface EntryModel {
    entry_id: number;
    user_id: number;
    date: Date;
    total_dailies: number;
    value: number;
    body: string;
}

export interface CompletedModel {
    completed_id: number;
    user_id: number;
    daily_id: number;
    entry_id: number;
}
/**
 * End database models
 */

export enum Icons {
    apple = 'apple',
    connect = 'connect',
    sleep = 'sleep',
    sun = 'sun',
    water = 'water',
    wave = 'wave'
}

/**
 * Api Responses
 * 
 * These will be the models passed back from the backend api, and their corresponding
 * request parameters (if any).
 * 
 * Response suffix: ...Response
 * Param suffix: ...RequestParameters
 */
export interface UserResponse extends UserModel {
    dailies: Array<DailyModel>;
    entries: Array<EntryModel>;
}

export type AddDailyRequestParameters = { name: string, icon: Icons }
export type AddDailyResponse = AddDailyRequestParameters & { daily_id: number }