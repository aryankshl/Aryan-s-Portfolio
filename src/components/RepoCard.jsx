import { Card, CardContent, Typography, Button } from "@mui/material";

const RepoCard = ({ repo, onSummarize }) => {
    return (
        <Card sx={{ minWidth: 275, marginBottom: 2}}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {repo.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {repo.description || "No description available"}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Language: {repo.language || "Not specified"}
                </Typography>
                <br />
                <Button
                    variant="outlined"
                    size="small"
                    sx={{ marginTop: 1 }}
                    onClick={() => onSummarize(repo)}
                >
                    AI Summarize
                </Button>
            </CardContent>
        </Card>
    )
};

export default RepoCard;