
export const TOKEN = 'IGQVJWX0lBc0lQVDdUbk5yeHdrZAFoyVUxUdVoyOFN2SmpOLVJnWTcydzBSUzZApSjJkQ2xEaVA3MGYwcy1mVDhWYlNrS0RVVE96T010Q1g0cmwwZA1B0TzFmVzNBV24zMXd2TlJ2bjQ0OXM2Wks3RlBXaQZDZD';
const graphqlEndpoint: string = "/graphql/query/";
const queryId: string = "?query_id=17888483320059182";
const variablesPrefilledWithStoffe = "&variables={%22id%22:%2236263564391%22,%22first%22:2048,%22after%22:%22%22}";
const variablesPrefilledWithMain = "&variables={%22id%22:%2228987909415%22,%22first%22:2048,%22after%22:%22%22}";
const tokenVariable = "&access_token=" + TOKEN

export const getInstagramContentLink = (): string => {
    return graphqlEndpoint + queryId + variablesPrefilledWithMain + tokenVariable;
}

export const getInstagramStoffeLink = (): string => {
    return graphqlEndpoint + queryId + variablesPrefilledWithStoffe + tokenVariable;
}
