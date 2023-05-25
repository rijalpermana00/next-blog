export interface BlogCardProps {
    id: string;
    slug: string;
    title: string;
    publishedAt: string;
    content: {
      html: string;
    };
    author?: {
      name: string;
      id: string;
    };
    tags?: string[];
    coverImage?: {
      fileName?: string;
      height?: number;
      url?: string;
    };
    excerpt?: string;
    bgColor?: 'bg-red-300' | 'bg-blue-300' | 'bg-green-300' | 'bg-white' | 'bg-black' | 'bg-yellow-300' | 'bg-gray-300' | 'bg-orange-300 ' | 'bg-orange-300 dark:bg-gray-500' | 'bg-gray-300 dark:bg-gray-500' | undefined
    dimension?: string;
}