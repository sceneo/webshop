import React from 'react';

export interface Post {
    owner: string;
    caption: string;
    isVideo: boolean;
    url: string;
}

const graphqlEndpoint_nodes = "https://www.instagram.com/graphql/query/?query_id=17888483320059182&variables={%22id%22:%2228987909415%22,%22first%22:2048,%22after%22:%22%22}";

export const getInstagramFeed = async (): Promise<Post[]> => {
    const data = await getPostsFromInstagram();
    return mapPosts(data);
}

const getPostsFromInstagram = async () => {
    return await fetch(graphqlEndpoint_nodes)
        .then(response => response.json())
        .then(data => data.data.user.edge_owner_to_timeline_media);
}

const mapPosts = (edge: any): Post[] => {
    let posts: Post[] = [];
    let counter = 0;

    edge.edges.forEach((nodes: any) => {
        posts[counter] = {
            owner: nodes.node.accessibility_caption,
            isVideo: nodes.node.is_video,
            url: nodes.node.display_url,
            caption: nodes.node.edge_media_to_caption.edges[0].node.text,
        }
        counter++
    })
    return posts;
}