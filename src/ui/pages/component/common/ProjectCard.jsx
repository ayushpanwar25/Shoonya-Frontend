import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Chip, Divider, Grid, ThemeProvider } from '@mui/material';
import themeDefault from '../../../theme/theme';
import { Link, useNavigate, useParams } from 'react-router-dom';
import projectCardStyles from '../../../styles/projectCard';

const ProjectCard = (props) => {

    let navigate = useNavigate();
    let { id } = useParams();

    // const onCardPress = () => {
    //     navigate('/projects/1');
    // }

    const classes = projectCardStyles();
    const { projectObj, index } = props
    return (
        <Link to={`/projects/1}`} style={{ textDecoration: "none" }}>
            <Grid
                elevation={2}
                className={props.classAssigned}
                sx={{
                    minHeight: 250,
                    cursor: "pointer",
                    borderRadius: 5,
                    p: 2
                }}
            >
                <Typography variant="caption" sx={{ background: "#FFD981", p: 1, borderRadius: 3 }}>{projectObj.project_mode}</Typography>
                <Typography
                    variant="h5"
                    sx={{ mt: 4, textAlign: "center", color: "secondary.contrastText", backgroundColor: "primary.contrastText", borderRadius: 3, pt: 1, pb: 1 }}
                >{projectObj.title}
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    sx={{mt:3, mb:3}}
                    spacing={2}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                    >
                        <Typography variant="lightText">Type</Typography>
                        <Typography variant="body2" sx={{ color: "primary.contrastText" }}>{projectObj.project_type}</Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                    >
                        <Typography variant="lightText">Project ID</Typography>
                        <Typography variant="body2" sx={{ color: "primary.contrastText" }}>{projectObj.id}</Typography>
                    </Grid>
                </Grid>
                
                <Typography variant="lightText">Description</Typography>
                <Typography variant="body2" sx={{ color: "primary.contrastText" }}>{projectObj.description}</Typography>

                {/* <Typography variant="body2" sx={{ mt: 2, ml: 5, color: "primary.contrastText" }}>{projectObj.desc}</Typography> */}
                {/* <Divider sx={{ mt: 7 }} variant="inset" /> */}

            </Grid>
        </Link>
    )
}

export default ProjectCard;