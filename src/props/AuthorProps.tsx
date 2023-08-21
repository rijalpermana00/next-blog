export interface AuthorProps{
    id?: string;
    name?: string;
    picture?: AuthorPictureProps;
};

interface AuthorPictureProps{
    id:string;
    url:string;
    filename: string;
}