import { ApolloError, QueryResult, useQuery } from "@apollo/client";
import { getCategories } from "./queries/GetCategories";

interface CategoryData {
    name: string;
    color: string;
    posts: { id: string }[];
}
  
interface CategoriesConnectionData {
    edges: { 
        node: CategoryData 
    }[];
}

interface CategoryInfo {
    categoryName: string;
    color: string;
    count: number;
  }

export function Categories(){
    const { 
        loading:loadingFeaturedPost, 
        error:errorFeaturedPost, 
        data:{ categoriesConnection } = {},
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:{ categoriesConnection?: CategoriesConnectionData }
    } = useQuery(getCategories);
    
    if (categoriesConnection) {
        const tagCounts = countCategoriesAndPosts(categoriesConnection);
        
        return tagCounts
    }
    
    return []
}

function countCategoriesAndPosts(data: CategoriesConnectionData): CategoryInfo[] {
    const categoryCounts: Map<string, number> = new Map();
  
    // Count the categories and their associated posts
    data.edges.forEach((edge) => {
        const categoryName = edge.node.name;
        const postCount = edge.node.posts.length;
  
        if (!categoryCounts.has(categoryName)) {
            categoryCounts.set(categoryName, postCount);
        } else {
            categoryCounts.set(categoryName, (categoryCounts.get(categoryName) || 0) + postCount);
        }
    });
  
    // Create an array of CategoryInfo objects
    const categoryInfoArray: CategoryInfo[] = [];
  
    // Populate the array with category name, count, and color information
    categoryCounts.forEach((count, categoryName) => {
        const categoryColor = data.edges.find((edge) => edge.node.name === categoryName)?.node.color || "";
        // Create the CategoryInfo object and push it to the array
        categoryInfoArray.push({
            categoryName: categoryName,
            color: categoryColor,
            count,
        });
    });
  
    return categoryInfoArray;
}