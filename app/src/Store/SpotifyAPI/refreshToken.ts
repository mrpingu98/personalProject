import { apiEndpoints } from "../Endpoints";

function* refreshToken() {
  const refreshToken = localStorage.getItem("refresh_token");
  const tokenUrl = apiEndpoints.spotifyTokenRequest;
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken == null ? "" : refreshToken,
    client_id: "44deba64e2b04230a4e7c818ca419918",
  });
  try {
    // @ts-ignore
    const response = yield fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });
    // @ts-ignore
    const data = yield response.json();
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    return data;
  } catch {
    throw new Error("error occurred here");
  }
}

export { refreshToken };
