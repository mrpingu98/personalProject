import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useUserName } from "../../Store/Username/hooks";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation("home");
  const { updateUserName } = useUserName();

  const [userNameEntered, setUserNameEntered] = React.useState<string>("");

  const onClickUpdateUserName = React.useCallback(() => {
    updateUserName(userNameEntered);
    setUserNameEntered("");
  }, [updateUserName, userNameEntered]);

  return (
    <Box className={styles.container}>
      <Box className={styles.column}>
        <Typography variant="h1">{t('welcome')}</Typography>
        <Box marginTop={'5%'}>
        <Typography variant="body1">{t('welcomeMessage')}</Typography>
        </Box>
        <Box className={styles.username}>
          <TextField
            variant="outlined"
            value={userNameEntered}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserNameEntered(event.target.value);
            }}
          />
          <Box marginLeft={'10%'} marginTop={'3%'}>
          <Button onClick={onClickUpdateUserName}>{t('update')}</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  column: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  username: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5%",
  },
});

export { Home };
