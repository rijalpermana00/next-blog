import striptags from "striptags";

export function createExcerpt(content: string | undefined, maxLength: number): string {
    
    if(content === undefined){
        return '';
    }
    
    const plainTextContent = striptags(content);

    if (plainTextContent.length <= maxLength) {
        return plainTextContent;
    }

    const words = plainTextContent.split(' ');
    let excerpt = '';
    
    for (const word of words) {
        if ((excerpt + word).length <= maxLength) {
            excerpt += (excerpt === '' ? '' : ' ') + word;
        } else {
            break;
        }
    }

    if (excerpt.length < plainTextContent.length) {
        excerpt += '...';
    }

    return excerpt;
}
