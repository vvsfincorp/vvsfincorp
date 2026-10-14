import { useEffect, useRef, useState } from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { Box, Typography } from "@mui/material";
import { stats } from "../../data/siteContent";

const icons = [
  AccountBalanceWalletOutlinedIcon,
  AccessTimeOutlinedIcon,
  VerifiedUserOutlinedIcon,
  HandshakeOutlinedIcon,
];

function AnimatedStat({ stat, index }) {
  const [started, setStarted] = useState(false);
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || stat.type === "approval" || stat.type === "funding") return undefined;
    const target =
      stat.type === "percentage" ? 100 : stat.type === "tenure" ? 10 : 30;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / 1200, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    return undefined;
  }, [started, stat.type]);

  const Icon = icons[index];
  const displayValue =
    stat.type === "approval"
      ? stat.value
      : stat.type === "percentage"
        ? `${value}%`
        : stat.type === "tenure"
          ? `3–${value || 3} Months`
            : stat.value;

  return (
    <Box
      ref={ref}
      sx={{
        minWidth: 0,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        textAlign: { xs: "center", sm: "left" },
        gap: { xs: 0.75, sm: 1, md: 1.5 },
        px: { xs: 1, sm: 1.5, md: 2.5 },
        py: { xs: 3, sm: 3.5, md: 3.5 },
        borderLeft: {
          xs: index % 2 ? "1px solid #ffffff30" : "none",
          md: index ? "1px solid #ffffff30" : "none",
        },
        borderTop: {
          xs: index > 1 ? "1px solid #ffffff30" : "none",
          md: "none",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: 36, md: 48 },
          height: { xs: 36, md: 48 },
          flex: "0 0 auto",
          display: "grid",
          placeItems: "center",
          color: "secondary.light",
          border: "1px solid",
          borderColor: "secondary.light",
          borderRadius: "50%",
          bgcolor: "#ffffff0d",
        }}
      >
        <Icon sx={{ fontSize: { xs: 22, md: 27 } }} />
      </Box>
      <Box sx={{ minWidth: 0, maxWidth: "100%" }}>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: 12, sm: 15, md: 20 },
            fontWeight: 700,
            lineHeight: 1.2,
            overflowWrap: "anywhere",
          }}
        >
          {displayValue}
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
            color: "#d5e1ef",
            fontSize: { xs: 10, sm: 11, md: 13 },
            lineHeight: 1.3,
          }}
        >
          {stat.label}
        </Typography>
      </Box>
    </Box>
  );
}

function StatsStrip() {
  return (
    <Box
      component="section"
      id="why-us"
      sx={{
        width: "100%",
        bgcolor: "primary.dark",
        color: "#fff",
        scrollMarginTop: 112,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          width: { xs: "calc(100% - 36px)", md: "calc(100% - 96px)" },
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        {stats.map((stat, index) => (
          <AnimatedStat stat={stat} index={index} key={stat.label} />
        ))}
      </Box>
    </Box>
  );
}

export default StatsStrip;
