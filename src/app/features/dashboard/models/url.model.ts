export interface UrlResponseModel{
    id: string;
    originalUrl: string;
    shortenedUrl: string;
    createdAt: string;
    expirationDate: string;
    clickCount: number;
    authorId: string;
}

export interface UrlCreationModel{
    originalUrl: string;
}
