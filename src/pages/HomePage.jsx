import { useEffect, useState } from "react";
import { fetchRepos } from "../services/GitHubServices";
import RepoCard from "../components/RepoCard";
import { Container, Typography, CircularProgress } from "@mui/material";

const GITHUB_USERNAME = "aryankshl";

const HomePage = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRepos(GITHUB_USERNAME).then(data => {
            setRepos(data);
            setLoading(false);
        });
    }, []);

    const handleSummarize = (repo) => {
        alert(`AI summarizer will be implemented for: ${repo.name}`);
    };

    return (
        <Container sx={{marginTop: 4}}>
            <Typography variant="h4" gutterBottom>
                My GitHub Projects
            </Typography>

            { loading ? (
                <CircularProgress />
                ) : (
                    repos.map((repo) => (
                        <RepoCard key={repo.id} repo={repo} onSummarize={handleSummarize} />
                    )
                )
            )}
        </Container>
    )
};

export default HomePage;