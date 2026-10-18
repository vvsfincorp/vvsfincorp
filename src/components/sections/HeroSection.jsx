import { useEffect, useState } from "react";
import { heroSlides } from "../../config/images";
import { companyInfo, stats } from "../../data/siteContent";
import { firstScreenMinHeight } from "../common/styles";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const SLIDE_MS = 6000;
const highlights = ["Fast approval", "Minimal documentation", "Transparent process"];
const fundingRange = stats.find((stat) => stat.type === "funding");
const locality = companyInfo.addressParts.streetAddress.split(", ").at(-1);

// Facts shown in the frosted panel at the bottom of the hero
const quickFacts = [
  { icon: AccountBalanceWalletOutlinedIcon, label: fundingRange.label, value: fundingRange.value },
  { icon: PhoneInTalkOutlinedIcon, label: "Call our team", value: companyInfo.primaryPhone, href: `tel:${companyInfo.primaryPhone.replace(/\s/g, "")}` },
  { icon: PlaceOutlinedIcon, label: "Visit us", value: `${locality}, ${companyInfo.addressParts.addressLocality}` },
];

/**
 * Full-width home hero: the slider photos fill the background (with a slow zoom),
 * a navy gradient keeps the text readable, and a frosted panel along the bottom
 * shows key facts. The top of the hero fades to primary.dark so it meets the
 * sticky header without a seam.
 */
function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Advance after SLIDE_MS; restarts whenever the slide changes, so a slide picked
  // with the dots stays up for the full duration
  useEffect(() => {
    const timer = window.setTimeout(
      () => setActiveSlide((slide) => (slide + 1) % heroSlides.length),
      SLIDE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [activeSlide]);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: 640, ...firstScreenMinHeight },
        bgcolor: "primary.dark",
        color: "#fff",
      }}
    >
      {/* Background slides */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        {heroSlides.map((slide, index) => {
          const active = index === activeSlide;
          return (
            <Box
              key={slide.src}
              component="img"
              src={slide.src}
              srcSet={slide.srcSet}
              sizes="100vw"
              width={slide.width}
              height={slide.height}
              alt={active ? slide.alt : ""}
              // First slide is the LCP image; the others load once the page is idle
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              decoding="async"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: { xs: slide.mobilePosition ?? "70% center", md: slide.position ?? "center" },
                opacity: active ? 1 : 0,
                visibility: active ? "visible" : "hidden",
                // Slow zoom on the visible slide; it resets while hidden
                transform: active ? "scale(1.08)" : "scale(1)",
                transition: active
                  ? `opacity 1s ease, visibility 1s ease, transform ${SLIDE_MS + 1000}ms linear`
                  : "opacity 1s ease, visibility 1s ease, transform 0s linear 1s",
                "@media (prefers-reduced-motion: reduce)": { transform: "none", transition: "opacity .3s ease, visibility .3s ease" },
              }}
            />
          );
        })}
        {/* Readability overlay: solid navy on the text side, fading towards the photo,
            plus fades at the top (header seam) and bottom (facts panel) */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: {
              xs: "linear-gradient(180deg, #062149 0%, #062149d9 30%, #062149bf 60%, #062149f2 100%)",
              md: "linear-gradient(180deg, #062149 0%, #06214900 22%, #06214900 70%, #062149cc 100%), linear-gradient(90deg, #062149 0%, #062149eb 30%, #06214999 55%, #06214926 100%)",
            },
          }}
        />
        {/* Dot texture on the text side */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(#ffffff17 1.2px, transparent 1.4px)",
            backgroundSize: "22px 22px",
            WebkitMaskImage: "radial-gradient(ellipse 45% 60% at 0% 75%, #000 0%, transparent 75%)",
            maskImage: "radial-gradient(ellipse 45% 60% at 0% 75%, #000 0%, transparent 75%)",
          }}
        />
      </Box>

      {/* Text */}
      <Box
        sx={{
          position: "relative",
          flex: 1,
          display: "flex",
          alignItems: "center",
          width: { xs: "calc(100% - 32px)", md: "calc(100% - 96px)" },
          maxWidth: 1300,
          mx: "auto",
          pt: { xs: 5, md: "clamp(24px, 5vh, 56px)" },
          pb: { xs: 4, md: "clamp(20px, 3.5vh, 40px)" },
        }}
      >
        <Box sx={{ maxWidth: 640 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 1.5,
              py: 0.6,
              color: "secondary.light",
              bgcolor: "#06214999",
              backdropFilter: "blur(6px)",
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
              mt: 2.25,
              // Scales with screen height on desktop so short laptop screens still show the facts panel
              fontSize: { xs: 40, sm: 54, md: "clamp(46px, 7.4vh, 68px)" },
              lineHeight: 1.02,
              letterSpacing: "-.055em",
              fontWeight: 700,
              textShadow: "0 2px 24px #06214966",
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
            sx={{ mt: { xs: 2.5, md: 3 }, fontSize: { xs: 18, md: 23 }, lineHeight: 1.35, fontWeight: 500 }}
          >
            Your Trusted Funding Partner &amp; Building Success
          </Typography>
          <Typography sx={{ mt: 1.25, color: "#d5e1ef", fontSize: { xs: 15, md: 17 }, lineHeight: 1.7, maxWidth: 520 }}>
            Quick, reliable, and hassle-free business loans to help your
            business grow with confidence.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4, maxWidth: { sm: 470 } }}>
            <Button
              component="a"
              href="#contact"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                minHeight: 54,
                px: 3.5,
                color: "primary.dark",
                bgcolor: "secondary.light",
                boxShadow: "0 10px 28px #e8c45a4d",
                transition: "transform .2s ease, box-shadow .2s ease, background-color .2s ease",
                "&:hover": { bgcolor: "#f0d276", boxShadow: "0 14px 32px #e8c45a66", transform: "translateY(-2px)" },
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
                minHeight: 54,
                px: 3,
                color: "#fff",
                borderColor: "#ffffffb3",
                bgcolor: "#ffffff0f",
                backdropFilter: "blur(6px)",
                transition: "transform .2s ease, background-color .2s ease",
                "&:hover": { borderColor: "secondary.light", bgcolor: "#ffffff1f", transform: "translateY(-2px)" },
              }}
            >
              Talk to Expert
            </Button>
          </Stack>

          <Box
            component="ul"
            aria-label="Why businesses choose us"
            sx={{ listStyle: "none", m: 0, mt: { xs: 3, md: 3.5 }, p: 0, display: "flex", flexWrap: "wrap", columnGap: 3, rowGap: 1.25 }}
          >
            {highlights.map((item) => (
              <Box key={item} component="li" sx={{ display: "flex", alignItems: "center", gap: 1, color: "#e4ecf6", fontSize: { xs: 13.5, md: 14.5 }, fontWeight: 600 }}>
                <Box aria-hidden sx={{ width: 20, height: 20, display: "grid", placeItems: "center", borderRadius: "50%", bgcolor: "secondary.light", color: "primary.dark" }}>
                  <CheckRoundedIcon sx={{ fontSize: 14 }} />
                </Box>
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Bottom bar: slide controls + frosted facts panel */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "calc(100% - 32px)", md: "calc(100% - 96px)" },
          maxWidth: 1300,
          mx: "auto",
          pb: { xs: 3, md: 4 },
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: { xs: "stretch", md: "flex-end" },
          justifyContent: "space-between",
          gap: { xs: 2.5, md: 4 },
        }}
      >
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <Typography aria-hidden sx={{ fontSize: 13, fontWeight: 700, letterSpacing: ".1em", color: "#c9d7e6", fontVariantNumeric: "tabular-nums" }}>
            <Box component="span" sx={{ color: "#fff" }}>{String(activeSlide + 1).padStart(2, "0")}</Box>
            {" / "}
            {String(heroSlides.length).padStart(2, "0")}
          </Typography>
          <Stack direction="row" spacing={0.75}>
            {heroSlides.map((slide, index) => (
              <Box
                key={slide.src}
                component="button"
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                sx={{
                  width: index === activeSlide ? 44 : 22,
                  height: 5,
                  p: 0,
                  border: 0,
                  borderRadius: 4,
                  cursor: "pointer",
                  bgcolor: index === activeSlide ? "secondary.light" : "#ffffff80",
                  transition: "width .3s ease, background-color .3s ease",
                  "&:hover": { bgcolor: "secondary.light" },
                  "&:focus-visible": { outline: "2px solid #fff", outlineOffset: 3 },
                }}
              />
            ))}
          </Stack>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, auto)" },
            bgcolor: "#0a2e5d8c",
            backdropFilter: "blur(14px)",
            border: "1px solid #ffffff26",
            borderRadius: 4,
            boxShadow: "0 20px 50px #0006",
            overflow: "hidden",
          }}
        >
          {quickFacts.map(({ icon: Icon, label, value, href }, index) => (
            <Box
              key={label}
              component={href ? "a" : "div"}
              href={href}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: { xs: 2.25, md: 3 },
                py: { xs: 1.5, md: 2.25 },
                color: "inherit",
                borderTop: { xs: index ? "1px solid #ffffff1f" : 0, sm: 0 },
                borderLeft: { sm: index ? "1px solid #ffffff1f" : 0 },
                transition: "background-color .2s ease",
                ...(href && { "&:hover": { bgcolor: "#ffffff12" } }),
              }}
            >
              <Box aria-hidden sx={{ width: 42, height: 42, flex: "0 0 auto", display: "grid", placeItems: "center", borderRadius: 2, bgcolor: "#e8c45a26", color: "secondary.light" }}>
                <Icon sx={{ fontSize: 22 }} />
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ color: "#b9cadc", fontSize: 11.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>{label}</Typography>
                <Typography sx={{ fontSize: { xs: 15, md: 16.5 }, fontWeight: 800, lineHeight: 1.35, whiteSpace: "nowrap" }}>{value}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
