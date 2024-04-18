export type spotifyUserData = {
  name: string,
  email: string,
  image: string,
  country: string,
  followers: string
  explicitContent: boolean
}

export type spotifyUserTopArtist = {
  name: string[]
}

export type spotifyUserTopTracks =  [{
  song: string,
  artist: string
}]

export type spotifyUserPlaylists = [{
  name: string,
  imageUrl: string
}]

export type spotifyRefreshTokenResponse = {
  access_token: string | undefined,
  token_type: string,
  expires_in: number,
  refresh_token: string | undefined,
  scope: string
}