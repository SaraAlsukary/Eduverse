export type TCourseLevel = "Beginner" | "Intermediate" | "Advanced";
export type TCourseDay = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export interface ICourse {
    id: number;
    title: string;
    shortDescription: string;
    fullDescription: string;
    lessonsCount: number;
    level: TCourseLevel;
    price: number;
    category: string;
    duration: string;
    days: TCourseDay[];
    time: string;
    instructor: string;
    language: string;
}
