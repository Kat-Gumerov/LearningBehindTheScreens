// utils/api.ts

export async function getExplanation(code: string, gameType: string) {
  // console.log(JSON.stringify({ snippet: code }))
  try {
    // Replace with your Python API URL (this example assumes you're running the backend on localhost)
    const response = await fetch(
      "https://learningbehindthescreens-production.up.railway.app/api/explain-code/",
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ snippet: code, game: gameType }), // send the code as JSON
      }
    );

    console.log("response: ", response);

    // Check for a successful response
    if (!response.ok) {
      throw new Error("Failed to get explanation");
    }

    // Parse the JSON response from the backend
    const data = await response.json();
    console.log(data.explanation);
    return data.explanation; // Return the explanation from the API response
  } catch (error) {
    console.error("Error fetching explanation:", error);
    throw error; // Re-throw the error
  }
}
