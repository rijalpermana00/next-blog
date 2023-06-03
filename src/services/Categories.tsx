import { ApolloError, QueryResult, useQuery } from "@apollo/client";
import { getCategories } from "./queries/GetCategories";
import { CategoriesConnectionData, CategoryInfo } from "@/props/CategoriesProps";

export function CategoryList(){
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
        const categoryEdge = data.edges.find((edge) => edge.node.name === categoryName);
        if (categoryEdge) {
          const { color, image, slug } = categoryEdge.node;
          // Create the CategoryInfo object and push it to the array
          categoryInfoArray.push({
            categoryName,
            color,
            count,
            image,
            slug,
          });
        }
    });
  
    return categoryInfoArray;
}