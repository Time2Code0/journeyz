export type CourseDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type Course = {
    previewImage: string;
    title: string;
    shortDescription: string;
    difficulty: CourseDifficulty;
}