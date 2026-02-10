export async function submitSuggestion(summary: string, description: string) { 
    const response = await fetch(import.meta.env.VITE_APP_API_URL + "/api/jira", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ summary, description }) 
    }); 
    if (!response.ok) { 
        throw new Error(`Backend error: ${response.status}`); 
    } return response.json(); 
}