import React from 'react';
import {getInstagramContentLink, getInstagramStoffeLink} from "./Constants";

export interface Post {
    caption: string;
    isVideo: boolean;
    url: string;
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
    console.log(edge.edges);
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