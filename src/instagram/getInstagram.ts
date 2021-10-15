
const JSON_AIDALI = "galery/content.json"
const JSON_MATERIAL = "material/content.json"

export interface Post {
    caption: string;
    isVideo: boolean;
    url: string;
    id: number
}

export const getInstagramFeed = async (): Promise<Post[]> => {
    const data = await getPostsFromInstagram(JSON_AIDALI);
    return mapPosts(data);
}

export const getInstagramStoffe = async (): Promise<Post[]> => {
    const data = await getPostsFromInstagram(JSON_MATERIAL);
    return mapPosts(data);
}

const getPostsFromInstagram = async (link: string) => {
    return await fetch(link)
        .then(response => response.json())
        .then(data => data.data.user.edge_owner_to_timeline_media);
}

const mapPosts = (edge: any): Post[] => {
    let posts: Post[] = [];
    let counter = 0;
    edge.edges.forEach((nodes: any) => {
        posts[counter] = {
            isVideo: nodes.node.is_video,
            url: nodes.node.display_url,
            caption: nodes.node.edge_media_to_caption.edges[0].node.text,
            id: nodes.node.id
        }
        counter++
    })
    return posts;
}
