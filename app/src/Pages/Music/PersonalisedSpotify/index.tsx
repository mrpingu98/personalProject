import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import {
  withRefreshAccessToken,
  withSpotifyUserPersonalData,
  withSpotifyUserTopArtists,
  withSpotifyUserTopTracks,
  withSpotifyUserPlaylists,
} from "../../../Store/SpotifyAPI/components";
import { compose } from "redux";
import { useSpotifyData } from "../../../Store/SpotifyAPI/hooks";
import { PrimaryButton } from "../../../Components/PrimaryButton";
import { deleteRequest, get } from "../../../Store/apiStore";

const PersonalisedSpotify = compose<React.FC>(
  withRefreshAccessToken(),
  withSpotifyUserPersonalData(),
  withSpotifyUserTopArtists(),
  withSpotifyUserTopTracks(),
  withSpotifyUserPlaylists()
)(() => {
  const styles = useStyles();
  const { t } = useTranslation("personalisedSpotify");

  const { spotifyUserData, userTopArtists, userTopTracks, userPlaylists } = useSpotifyData();

  const accessToken = localStorage.getItem("access_token");
 
//needs to be cleaned up - add ui to show how to delete tracks etc, can remove some of the api calls etc etc
//+ git pull from  main once MS41 has been merged, so that the updated playlists 6 months etc is shown
  const [tracks, setTracks] = React.useState<string[]>([])
  const [explicitTracks, setExplicitTracks] = React.useState<string[]>([])
  const [explicitTracksUri, setExplicitTracksUri] = React.useState<{uri: string}[]>([])
  const [snapshotId, setSnapshotId] = React.useState<string>()

  const fetchTracks = async () => {
    let url = 'https://api.spotify.com/v1/playlists/3w8XWn9alrnRKMp0TvNYjF'
    let booleam = true
    let array: string[] = []
    while(url != null){
      const response = await get(url, { Authorization: "Bearer " + accessToken } )

      if(booleam === true){
        const mapped = response.tracks.items.map((x: any) => `${x.track.artists[0].name} : ${x.track.name}`)
        array = [...mapped]
        url = response.tracks.next
        booleam = false

      } else{
        const mapped = response.items.map((x: any) => `${x.track.artists[0].name} : ${x.track.name}`)
        array = [...array, ...mapped]
        url = response.next
      }
    }
    setTracks(array)
  }

  const fetchExplicitTracks = async () => {
    let url = 'https://api.spotify.com/v1/playlists/3w8XWn9alrnRKMp0TvNYjF'
    let booleam = true
    let array: string[] = []
    while(url != null){
      const response = await get(url, { Authorization: "Bearer " + accessToken } )

      if(booleam === true){
        const mapped = response.tracks.items.map((x: any) => x.track.explicit === true && `${x.track.artists[0].name} : ${x.track.name}`)
        array = [...mapped]
        url = response.tracks.next
        booleam = false

      } else{
        const mapped = response.items.map((x: any) => x.track.explicit === true && `${x.track.artists[0].name} : ${x.track.name}`)
        array = [...array, ...mapped]
        url = response.next
      }
    }
    setExplicitTracks(array)
 } 



 const fetchExplicitTracksUri = async () => {
  let url = 'https://api.spotify.com/v1/playlists/3w8XWn9alrnRKMp0TvNYjF'
  let booleam = true
  let array: {uri: string}[] = []
  while(url != null){
    const response = await get(url, { Authorization: "Bearer " + accessToken } )

    if(booleam === true){
      const mapped = response.tracks.items.filter((x: any) => x.track.explicit === true).map((x: any) => ({uri:`${x.track.uri}`})) 
      array = [...mapped]
      url = response.tracks.next
      booleam = false
      setSnapshotId(response.snapshot_id)

    } else{
      const mapped = response.items.filter((x: any) => x.track.explicit === true).map((x: any) => ({uri: `${x.track.uri}`})) 
      array = [...array, ...mapped]
      url = response.next
    }
  }
  setExplicitTracksUri(array)
}

const deleteExplicitTracks = async () => {
  const data = {
    tracks: explicitTracksUri,
    snapshot_id: snapshotId
  }
  const response = await deleteRequest('https://api.spotify.com/v1/playlists/3w8XWn9alrnRKMp0TvNYjF/tracks', data)
  return response
}


  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.row} marginBottom={4}>
        <Typography variant="h1">
          {`${t("hello")} ${spotifyUserData?.name}`}
        </Typography>
        <Box marginLeft={4}>
          <img
            src={spotifyUserData?.image}
            alt="Profile"
            className={styles.profilePic}
          />
        </Box>
      </Box>
      <Typography variant="h3">{t("welcomeMessage")}</Typography>
      <Typography variant="h4" marginTop={6}>
        {t("topArtistsSixMonths")}:
      </Typography>
      <Box marginTop={2} className={styles.row}>
        <Typography variant="body1">
          {userTopArtists?.name.join(", ")}
        </Typography>
      </Box>
      <Typography variant="h4" marginTop={6}>
        {t("topTracksSixMonths")}:
      </Typography>
      <Box marginTop={2}>
        {userTopTracks?.map((x) => (
          <Box marginTop={0.5} key={x.artist}>
            <Typography>
              {x.artist}: {x.song}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box marginTop={6}>
        <Typography variant="h4">{t("recentPlaylists")}:</Typography>
        {userPlaylists?.map((x) => (
          <Box className={styles.row} marginTop={4} key={x.name}>
            <Box marginTop={0.5}>
              <Typography>{x.name}:</Typography>
            </Box>
            <Box marginLeft={5}>
              <img
                src={x.imageUrl}
                alt="No picture available"
                className={styles.playlistPic}
              />
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        <PrimaryButton onClick={fetchTracks} text={"fetch tracks"} />
        {tracks && (
          <Box marginTop={2}>
            {tracks.map((x) => (
              <Box marginTop={0.5}>
                <Typography>{x}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      <Box>
        <PrimaryButton onClick={fetchExplicitTracks} text={"explicit"} />
        {explicitTracks && (
          <Box marginTop={2}>
            {explicitTracks.map((x) => (
              <Box marginTop={0.5}>
                <Typography>{x}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      <Button onClick={fetchExplicitTracksUri}>fetchexplicituris</Button>
      <Button onClick={() => console.log(explicitTracksUri)}>test</Button>
      <Button onClick={deleteExplicitTracks}>delete</Button>
    </Box>
  );
});



const useStyles = makeStyles({
  row: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  mainContainer: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
  },
  profilePic: {
    height: 150,
    width: 150,
    borderRadius: "20%",
  },
  playlistPic: {
    height: 200,
    width: 200,
    borderRadius: "20%",
  },
});

export { PersonalisedSpotify };
