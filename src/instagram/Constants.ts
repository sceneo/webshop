export const ID_STOFFE = 36263564391;
export const ID_MAIN = 28987909415;

const graphqlEndpoint: string = "https://www.instagram.com/graphql/query/";
const queryId: string = "?query_id=17888483320059182";
const variablesPrefilledWithStoffe = "&variables={%22id%22:%2236263564391%22,%22first%22:2048,%22after%22:%22%22}";
const variablesPrefilledWithMain = "&variables={%22id%22:%2228987909415%22,%22first%22:2048,%22after%22:%22%22}";

export const getInstagramContentLink = (): string => {
    return graphqlEndpoint + queryId + variablesPrefilledWithMain;
}

export const getInstagramStoffeLink = (): string => {
    return graphqlEndpoint + queryId + variablesPrefilledWithStoffe;
}