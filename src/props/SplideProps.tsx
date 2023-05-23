export interface splideCardProps{
    title: string;
    total: number;
    image?: string | null;
    slug: string;
}

export interface splideProps{
    data: splideCardProps[] | []
}