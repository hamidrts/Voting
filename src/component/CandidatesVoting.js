import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CandidatesVoting({
  candidate,
  selectedCandidate,
  handleSelectCandidate,
}) {
  return (
    <div
      className={selectedCandidate === candidate._id ? "active-candidate" : ""}
    >
      <Card
        sx={{ maxWidth: 200, minWidth: 200, marginTop: 2, marginBottom: 2 }}
      >
        <CardMedia
          component="img"
          height="140"
          image={candidate.pic}
          alt={candidate.candidName}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {candidate.candidName} {candidate.family}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {candidate.achivement}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            id={candidate._id}
            size="small"
            onClick={handleSelectCandidate}
          >
            Vote Me
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
