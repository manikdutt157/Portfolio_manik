import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import { FaLink } from "react-icons/fa";

export default function ProjectCard({ image, title, description, link }) {
  return (
    <Card
      className="border-transparent hover:border-white w-[250px] sm:w-[320px] md:w-[350px] transition-all duration-700 scroll-smooth ease-in-out hover:scale-105 "
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: { xs: "140px", sm: "120px", md: "270px" },
            objectFit: "cover",
          }}
          image={image}
          alt="Project Image"
        />
        <CardContent className="bg-bg-color ">
          <Typography
            className="flex items-center justify-between text-lg md:text-xl font-semibold text-white"
            gutterBottom
            variant="h6"
          >
            {title}
            <Button  href={link} target="_blank" >
              <FaLink className="h-5 w-5  text-text-color hover:rotate-180 transition-all duration-300" />
            </Button>
          </Typography>
          <Typography variant="body2" className="text-sm md:text-base text-gray-400">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
