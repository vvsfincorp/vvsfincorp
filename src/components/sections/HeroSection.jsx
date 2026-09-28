import { useEffect, useState } from "react";
import { heroSlides } from "../../data/siteContent";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveSlide((slide) => (slide + 1) % heroSlides.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        
        py: { xs: 0, md: "28px 34px" },
        
        bgcolor: "primary.dark",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1fr) minmax(0, 1fr)",
          },
          width: { xs: "calc(100% - 32px)", md: "calc(100% - 48px)" },
          maxWidth: 1460,
          mx: "auto",
          gap: { xs: 2, md: 3 },
          pt: { xs: 0, md: 2 },
          pb: { xs: 3, md: 2 },
        }}
      >
        <Box
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: { md: 540 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              alignSelf: "flex-start",
              px: 1.5,
              py: 0.6,
              mb: 0.25,
              color: "secondary.light",
              bgcolor: "#ffffff0d",
              border: "1px solid #e8c45a66",
              borderRadius: 99,
              fontWeight: 700,
              letterSpacing: 2.2,
              fontSize: { xs: 10, md: 12 },
            }}
          >
            Your success, our commitment
          </Typography>
          <Typography
            component="h1"
            sx={{
              mt: 1,
              color: "#fff",
              fontSize: { xs: 42, sm: 54, md: 68 },
              lineHeight: 1.03,
              letterSpacing: "-.055em",
              fontWeight: 700,
            }}
          >
            Fast Funding.
            <br />
            <Box component="span" sx={{ color: "secondary.light" }}>
              Trusted Solutions.
            </Box>
          </Typography>
          <Typography
            component="h2"
            sx={{
              mt: 2.5,
              mb: 1.5,
              color: "#fff",
              fontSize: { xs: 20, md: 27 },
              lineHeight: 1.3,
              fontWeight: 500,
            }}
          >
            Your Trusted Funding Partner &amp;
            <br />
            Building Success
          </Typography>
          <Typography
            sx={{
              color: "#d5e1ef",
              fontSize: { xs: 15, md: 17 },
              lineHeight: 1.7,
              maxWidth: 500,
            }}
          >
            Quick, reliable, and hassle-free business loans to help your
            business grow with confidence.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 3.5, maxWidth: 430 }}
          >
            <Button
              component="a"
              href="#apply"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                minHeight: 52,
                px: 3,
                color: "primary.dark",
                bgcolor: "secondary.light",
                boxShadow: "0 6px 16px #0003",
                transition:
                  "transform .2s ease, box-shadow .2s ease, background-color .2s ease",
                "&:hover": {
                  bgcolor: "#f0d276",
                  boxShadow: "0 9px 20px #0004",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Apply for Funding
            </Button>
            <Button
              component="a"
              href="#contact"
              variant="outlined"
              sx={{
                minHeight: 52,
                px: 3,
                borderColor: "#ffffff99",
                color: "#fff",
                "&:hover": {
                  borderColor: "secondary.light",
                  bgcolor: "#ffffff12",
                  transform: "translateY(-2px)",
                },
                transition: "transform .2s ease, background-color .2s ease",
              }}
            >
              Talk to Expert
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            minHeight: { xs: 230, md: 400 },
            position: "relative",
            overflow: "hidden",
            borderRadius: 3,
            bgcolor: "#09131e",
            border: "2px solid #e8c45a",
            boxShadow: { xs: "none", md: "0 18px 40px #0a2e5d24" },
          }}
        >
          {heroSlides.map((slide, index) => (
            <Box
              key={slide.image}
              sx={{
                position: "absolute",
                inset: 0,
                opacity: index === activeSlide ? 1 : 0,
                visibility: index === activeSlide ? "visible" : "hidden",
                transition: "opacity .8s ease, visibility .8s ease",
              }}
            >
              <Box
                component="img"
                src={slide.image}
                alt={slide.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, #081a2c9c 0%, transparent 48%, #09131e26 100%), linear-gradient(0deg, #07121e99 0%, transparent 35%)",
                }}
              />
            </Box>
          ))}
          <Typography
            key={activeSlide}
            sx={{
              position: "absolute",
              right: { xs: "5%", md: "7%" },
              bottom: { xs: 18, md: 34 },
              maxWidth: 250,
              color: "#fff",
              fontSize: { xs: 11, md: 14 },
              lineHeight: 1.4,
              textShadow: "0 2px 8px #0008",
            }}
          >
            {heroSlides[activeSlide].alt}
          </Typography>
          <Stack
            direction="row"
            spacing={0.75}
            sx={{
              position: "absolute",
              left: { xs: "6%", md: "8%" },
              bottom: { xs: 22, md: 39 },
            }}
          >
            {heroSlides.map((slide, index) => (
              <IconButton
                key={slide.image}
                size="small"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                sx={{
                  width: index === activeSlide ? 42 : 24,
                  height: 5,
                  p: 0,
                  borderRadius: 4,
                  bgcolor:
                    index === activeSlide ? "secondary.light" : "#ffffff99",
                  "&:hover": { bgcolor: "secondary.light" },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
