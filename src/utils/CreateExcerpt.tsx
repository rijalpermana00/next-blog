export function createExcerpt(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
        return content;
    }

    const words = content.split(' ');
    let excerpt = '';
    
    for (const word of words) {
        if ((excerpt + word).length <= maxLength) {
            excerpt += (excerpt === '' ? '' : ' ') + word;
        } else {
            break;
        }
    }

    if (excerpt.length < content.length) {
        excerpt += '...';
    }

    return excerpt;
}
