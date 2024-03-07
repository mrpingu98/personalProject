export async function generateCodeChallenge(
  codeVerifier: string
): Promise<string> {
  function base64encode(buffer: ArrayBuffer): string {
    const uint8Array = new Uint8Array(buffer);
    const numberArray = Array.from(uint8Array);

    return btoa(String.fromCharCode.apply(null, numberArray))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);

  return base64encode(digest);
}

//Once code verifier has been created, have to transform (hash) it, to be readable in the API request
//this is called the Code Challenger
//Code Challenger sent in authorisation request
