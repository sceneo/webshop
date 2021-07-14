import {getInstagramContentLink, getInstagramStoffeLink, TOKEN} from "./Constants";

export interface Post {
    caption: string;
    isVideo: boolean;
    url: string;
}

export const refreshToken = async () => {
    console.log("refreshing access token");
    //TODO: make this more pretty
    return await fetch('https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' + TOKEN);
}

export const getInstagramFeed = async (): Promise<Post[]> => {
    const data = await getPostsFromInstagram(getInstagramContentLink());
    return mapPosts(data);
}

export const getInstagramStoffe = async (): Promise<Post[]> => {
    const data = await getPostsFromInstagram(getInstagramStoffeLink());
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
        }
        counter++
    })
    return posts;
}
