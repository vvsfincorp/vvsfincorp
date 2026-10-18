import { useEffect, useState } from "react";
import { heroSlides } from "../../config/images";
import { companyInfo, stats } from "../../data/siteContent";
import { firstScreenMinHeight } from "../common/styles";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const highlights = ["Fast approval", "Minimal documentation", "Transparent process"];
const fundingRange = stats.find((stat) => stat.type === "funding");

// Gentle up-and-down drift for the floating cards (switched off for reduced motion)
const floatSx = (delay) => ({
  animation: `hero-float 6s ease-in-out ${delay}s infinite`,
  "@keyframes hero-float": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-8px)" },
  },
  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
});

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
        // Soft blue glow behind the text and a faint gold glow behind the image. Both sit
        // well below the top edge, and the first layer fades back to the header's navy, so
        // the hero meets the sticky header (primary.dark) without a visible seam.
        backgroundImage:
          "linear-gradient(180deg, #062149 0%, #06214900 26%), radial-gradient(ellipse 55% 60% at 14% 64%, #123d70 0%, #123d7000 72%), radial-gradient(ellipse 40% 50% at 86% 72%, #e8c45a1c 0%, #e8c45a00 70%)",
        position: "relative",
        overflow: "hidden",
        // Dot texture in the lower-left corner only, clear of the header
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(#ffffff1a 1.2px, transparent 1.4px)",
          backgroundSize: "22px 22px",
          WebkitMaskImage: "radial-gradient(ellipse 50% 65% at 0% 100%, #000 0%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 50% 65% at 0% 100%, #000 0%, transparent 75%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1fr) minmax(0, 1fr)",
          },
          alignItems: "stretch",
          width: { xs: "calc(100% - 32px)", md: "calc(100% - 48px)" },
          maxWidth: 1460,
          // Grows to the hero height; the image stretches with it
          flex: 1,
          mx: "auto",
          gap: { xs: 2, md: 5 },
          pt: { xs: 0, md: 2 },
          pb: { xs: 4, md: 3 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            px: { xs: 1, sm: 3, md: 5 },
            py: { xs: 3, sm: 4, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 1.5,
              py: 0.6,
              color: "secondary.light",
              bgcolor: "#ffffff0d",
              border: "1px solid #e8c45a66",
              borderRadius: 99,
              fontWeight: 700,
              letterSpacing: 2.2,
              textTransform: "uppercase",
              fontSize: { xs: 10, md: 12 },
            }}
          >
            <Box
              aria-hidden
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                bgcolor: "secondary.light",
                boxShadow: "0 0 0 0 #e8c45a99",
                animation: "hero-pulse 2.4s ease-out infinite",
                "@keyframes hero-pulse": {
                  "0%": { boxShadow: "0 0 0 0 #e8c45a99" },
                  "70%, 100%": { boxShadow: "0 0 0 8px #e8c45a00" },
                },
                "@media (prefers-reduced-motion: reduce)": { animation: "none" },
              }}
            />
            Your success, our commitment
          </Box>
          <Typography
            component="h1"
            sx={{
              mt: 2,
              color: "#fff",
              fontSize: { xs: 38, sm: 50, md: 62 },
              lineHeight: 1.03,
              letterSpacing: "-.055em",
              fontWeight: 700,
            }}
          >
            Fast Funding.
            <br />
            <Box
              component="span"
              sx={{
                position: "relative",
                color: "secondary.light",
                // Hand-drawn style underline below "Trusted Solutions."
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 2,
                  right: "30%",
                  bottom: { xs: -3, md: -4 },
                  height: { xs: 4, md: 5 },
                  borderRadius: 99,
                  background: "linear-gradient(90deg, #e8c45a 0%, #e8c45a00 100%)",
                  opacity: 0.6,
                },
              }}
            >
              Trusted Solutions.
            </Box>
          </Typography>
          <Typography
            component="h2"
            sx={{
              mt: { xs: 3, md: 3.5 },
              mb: 1.25,
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
                boxShadow: "0 8px 24px #e8c45a40",
                transition:
                  "transform .2s ease, box-shadow .2s ease, background-color .2s ease",
                "&:hover": {
                  bgcolor: "#f0d276",
                  boxShadow: "0 12px 28px #e8c45a59",
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
              startIcon={<SupportAgentOutlinedIcon />}
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

          {/* Key promises, separated from the buttons by a thin rule */}
          <Box
            component="ul"
            aria-label="Why businesses choose us"
            sx={{
              listStyle: "none",
              m: 0,
              mt: { xs: 3.5, md: 4.5 },
              p: 0,
              pt: { xs: 2.5, md: 3 },
              borderTop: "1px solid #ffffff1f",
              display: "flex",
              flexWrap: "wrap",
              columnGap: { xs: 2.5, md: 3.5 },
              rowGap: 1.25,
              maxWidth: 560,
            }}
          >
            {highlights.map((item) => (
              <Box
                key={item}
                component="li"
                sx={{ display: "flex", alignItems: "center", gap: 1, color: "#e4ecf6", fontSize: { xs: 13.5, md: 14.5 }, fontWeight: 600 }}
              >
                <Box
                  aria-hidden
                  sx={{ width: 20, height: 20, display: "grid", placeItems: "center", borderRadius: "50%", bgcolor: "#e8c45a26", color: "secondary.light" }}
                >
                  <CheckRoundedIcon sx={{ fontSize: 14 }} />
                </Box>
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Image column: offset gold frame, slider, and two floating info cards */}
        <Box
          sx={{
            position: "relative",
            // Fixed landscape shape, centred beside the text, so the photo never
            // stretches into a tall portrait on large screens
            alignSelf: "center",
            aspectRatio: { xs: "4 / 3", md: "5 / 4" },
            maxHeight: { md: "calc(100vh - var(--site-chrome-h, 180px) - 80px)" },
            minHeight: { md: 380 },
            // Fill the column width minus the side margins (width: 100% would add them on top)
            justifySelf: "stretch",
            my: { md: 3 },
            mr: { xs: 1, md: 2 },
            ml: { xs: 0, md: 2 },
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: { xs: "10px -8px -8px 10px", md: "18px -16px -16px 18px" },
              border: "2px solid",
              borderColor: "secondary.light",
              borderRadius: 4,
              opacity: 0.7,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              borderRadius: 4,
              bgcolor: "#09131e",
              border: "1px solid #ffffff40",
              boxShadow: "0 30px 60px #0007",
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
                      "linear-gradient(0deg, #07121eb3 0%, transparent 40%), linear-gradient(90deg, #081a2c59 0%, transparent 45%)",
                  }}
                />
              </Box>
            ))}
            <Stack
              direction="row"
              spacing={0.75}
              sx={{
                position: "absolute",
                left: { xs: 18, md: 32 },
                bottom: { xs: 18, md: 30 },
              }}
            >
              {heroSlides.map((slide, index) => (
                <IconButton
                  key={slide.src}
                  size="small"
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                  onClick={() => setActiveSlide(index)}
                  sx={{
                    width: index === activeSlide ? 42 : 24,
                    height: 5,
                    p: 0,
                    borderRadius: 4,
                    transition: "width .3s ease, background-color .3s ease",
                    bgcolor:
                      index === activeSlide ? "secondary.light" : "#ffffff99",
                    "&:hover": { bgcolor: "secondary.light" },
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Funding range card, overlapping the top-left corner */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 14, md: 36 },
              left: { xs: 14, md: -36 },
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              p: { xs: 1.25, md: 1.75 },
              pr: { xs: 2, md: 2.5 },
              bgcolor: "#fff",
              borderRadius: 3,
              boxShadow: "0 18px 40px #0005",
              ...floatSx(0),
            }}
          >
            <Box
              aria-hidden
              sx={{ width: { xs: 36, md: 46 }, height: { xs: 36, md: 46 }, display: "grid", placeItems: "center", borderRadius: 2, bgcolor: "#fdf3d3", color: "primary.main" }}
            >
              <AccountBalanceWalletOutlinedIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
            </Box>
            <Box>
              <Typography sx={{ color: "text.secondary", fontSize: { xs: 10.5, md: 12 }, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>
                {fundingRange.label}
              </Typography>
              <Typography sx={{ color: "primary.dark", fontSize: { xs: 14, md: 17 }, fontWeight: 800, lineHeight: 1.3 }}>
                {fundingRange.value}
              </Typography>
            </Box>
          </Box>

          {/* Location card, overlapping the bottom-right corner */}
          <Box
            sx={{
              position: "absolute",
              right: { xs: 14, md: -28 },
              bottom: { xs: 14, md: 40 },
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1.25,
              px: 2,
              py: 1.5,
              color: "#fff",
              bgcolor: "#0a2e5dd9",
              backdropFilter: "blur(8px)",
              border: "1px solid #ffffff2e",
              borderRadius: 3,
              boxShadow: "0 18px 40px #0005",
              ...floatSx(1.5),
            }}
          >
            <PlaceOutlinedIcon aria-hidden sx={{ color: "secondary.light" }} />
            <Box>
              <Typography sx={{ fontSize: 14.5, fontWeight: 800, lineHeight: 1.3 }}>Based in Chennai</Typography>
              <Typography sx={{ color: "#c9d7e6", fontSize: 12.5 }}>
                {companyInfo.addressParts.streetAddress.split(", ").at(-1)}, {companyInfo.addressParts.addressRegion}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
