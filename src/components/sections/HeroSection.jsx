import { useEffect, useState } from "react";
import { heroSlides } from "../../config/images";
import { firstScreenMinHeight } from "../common/styles";
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
        // Fills the first screen below the header on laptops/desktops (see firstScreenMinHeight)
        display: "flex",
        flexDirection: "column",
        minHeight: firstScreenMinHeight,
        pt: { xs: 0, md: "20px" },
        pb: { xs: 0, md: "24px" },
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
          // stretch (default) makes the image exactly as tall as the text
          // block: from the top of "Your success, our commitment" to the
          // bottom of the buttons.
          alignItems: "stretch",
          width: { xs: "calc(100% - 32px)", md: "calc(100% - 48px)" },
          maxWidth: 1460,
          // Grows to the hero height; the image stretches with it
          flex: 1,
          mx: "auto",
          gap: { xs: 2, md: 3 },
          pt: { xs: 0, md: 2 },
          pb: { xs: 3, md: 2 },
        }}
      >
        <Box
          sx={{
            // No vertical padding on desktop, so the image lines up with
            // the first and last element of the text.
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 3, sm: 4, md: 0 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
              fontSize: { xs: 36, sm: 46, md: 56 },
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
              fontSize: { xs: 18, md: 23 },
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
              href="#contact"
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
            // Height comes from the grid row (= text block height).
            // minHeight is only a safety floor.
            minHeight: { xs: 220, md: 330 },
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
              key={slide.src}
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
                src={slide.src}
                srcSet={slide.srcSet}
                sizes="(min-width: 900px) 50vw, 100vw"
                width={slide.width}
                height={slide.height}
                alt={slide.alt}
                // First slide is the LCP image; the others load once the page is idle
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
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
                key={slide.src}
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