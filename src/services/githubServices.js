const BASE_URL = "https://api.github.com";

export async function fetchRepos(username) {
    try{
        const res = await fetch(`${BASE_URL}/users/${username}/repos?sort=updated`);
        if(!res.ok) throw new Error("Failed to fetch repositories");
        const data = await res.json();
        return data;
    }
    catch (err){
        console.error(err);
        return [];
    }
}