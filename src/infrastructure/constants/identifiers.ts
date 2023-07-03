const REPOSITORY_IDENTIFIER = {
    REPOSITORY: Symbol.for('SpotifyRepository'),
};

const COMMAND_IDENTIFIER = {
    COMMAND_BUS: Symbol.for('CommandBus'),
    CLIENT_INFO: Symbol.for('ClientInfoCommandHandler'),
};

const QUERY_IDENTIFIER = {
    QUERY_BUS: Symbol.for('QueryBus'),
    SEARCH_INFO: Symbol.for('SearchInfoQueryHandler'),
    GET_ALBUM: Symbol.for('GetAlbumByIdQueryHandler'),
    GET_ARTIST: Symbol.for('GetArtistByIdQueryHandler'),
};

const SERVICE_IDENTIFIER = {
    AUTH_SERVICE: Symbol.for('AuthService'),
}


export { REPOSITORY_IDENTIFIER };
export { COMMAND_IDENTIFIER };
export { QUERY_IDENTIFIER };
export { SERVICE_IDENTIFIER };