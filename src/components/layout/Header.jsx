import { useState } from "react";
import logo from "../../assets/companyLogo/VVSFINCORP-removebg-preview.png";
import { navigationLinks } from "../../data/siteContent";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navLinks = (onClick, mobile = false) =>
    navigationLinks.map((link) => (
      <Link
        href={link.href}
        underline="none"
        onClick={onClick}
        key={link.label}
        sx={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          gap: 0.25,
          justifyContent: mobile ? "space-between" : "flex-start",
          width: mobile ? "100%" : "auto",
          px: mobile ? 1.5 : 0,
          py: mobile ? 1.75 : 0,
          color: "primary.main",
          fontSize: 13,
          fontWeight: 700,
          textTransform: "uppercase",
          transition: "color .2s ease",
          borderBottom: mobile ? "1px solid #dce5ef" : "none",
          "&:hover": {
            color: "#a47b00",
            bgcolor: mobile ? "#0a2e5d08" : "transparent",
          },
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "secondary.light",
            outlineOffset: 4,
            borderRadius: 2,
          },
        }}
      >
        {link.label}
        {link.hasDropdown && (
          <KeyboardArrowDownRoundedIcon sx={{ fontSize: 17, ml: 0.1 }} />
        )}
      </Link>
    ));

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        py: { xs: 1, md: 1.5 },
        position: "sticky",
        top: 0,
        zIndex: 1100,
        bgcolor: "primary.dark",
        boxShadow: "0 8px 24px #06214920",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "calc(100% - 20px)", md: "calc(100% - 48px)" },
          maxWidth: 1460,
          minHeight: 88,
          px: { xs: 2, md: 3.5 },
          mx: "auto",
          borderRadius: "20px",
          bgcolor: "#f4f7fb",
          border: "1px solid #dce5ef",
          boxShadow: "0 10px 28px #071f4414",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr auto",
            lg: "minmax(250px, 1fr) auto minmax(160px, 1fr)",
          },
          alignItems: "center",
          columnGap: { lg: 3 },
        }}
      >
        <Link
          href="#home"
          underline="none"
          aria-label="VVS Fincorp home"
          sx={{ display: "flex", alignItems: "center", gap: 1.25, minWidth: 0 }}
        >
          <Box
            component="img"
            src={logo}
            alt="VVS Fincorp"
            sx={{
              width: { xs: 58, md: 76 },
              height: { xs: 58, md: 76 },
              flex: "0 0 auto",
              objectFit: "contain",
              objectPosition: "center",
              borderRadius: 0,
            }}
          />
          <Box>
            <Typography
              sx={{
                color: "primary.dark",
                font: {
                  xs: "700 20px/1 Georgia, serif",
                  md: "700 26px/1 Georgia, serif",
                },
                letterSpacing: "-.5px",
              }}
            >
              VVS{" "}
              <Box component="span" sx={{ color: "secondary.main" }}>
                FINCORP
              </Box>
            </Typography>
            <Typography
              sx={{
                mt: 0.5,
                color: "text.secondary",
                fontSize: { xs: 8, md: 10 },
                fontWeight: 700,
                letterSpacing: ".15px",
                textTransform: "uppercase",
              }}
            >
              Fast Funding. Trusted Partnership.
            </Typography>
          </Box>
        </Link>
        <IconButton
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          sx={{
            display: { xs: "inline-flex", lg: "none" },
            color: "primary.main",
          }}
        >
          {menuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </IconButton>
        <Stack
          component="nav"
          direction="row"
          alignItems="center"
          spacing={3.5}
          sx={{
            gridColumn: 2,
            display: { xs: "none", lg: "flex" },
            whiteSpace: "nowrap",
          }}
        >
          {navLinks(closeMenu)}
        </Stack>
        <Button
          component="a"
          href="#apply"
          onClick={closeMenu}
          variant="contained"
          sx={{
            display: { xs: "none", lg: "inline-flex" },
            gridColumn: 3,
            justifySelf: "end",
            px: 3,
            py: 1.4,
            borderRadius: 99,
            color: "primary.dark",
            bgcolor: "secondary.light",
            boxShadow: "0 3px 10px #d4af3733",
            "&:hover": {
              bgcolor: "#f0d276",
              boxShadow: "0 5px 14px #d4af3755",
            },
          }}
        >
          Apply Now
        </Button>
      </Container>
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={closeMenu}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "min(360px, 88vw)", sm: 360 },
            maxWidth: "100vw",
            boxSizing: "border-box",
            p: { xs: 2, sm: 2.5 },
            bgcolor: "#f4f7fb",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            minHeight: 68,
            mb: 2,
            pb: 1.5,
            borderBottom: "1px solid #dce5ef",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.25}
            sx={{ minWidth: 0 }}
          >
            <Box
              component="img"
              src={logo}
              alt="VVS Fincorp logo"
              sx={{
                display: "block",
                width: 58,
                height: 58,
                objectFit: "contain",
                flex: "0 0 auto",
              }}
            />
            <Typography
              sx={{
                color: "primary.dark",
                font: {
                  xs: "700 17px/1.1 Georgia, serif",
                  sm: "700 19px/1.1 Georgia, serif",
                },
                whiteSpace: "nowrap",
              }}
            >
              VVS{" "}
              <Box component="span" sx={{ color: "secondary.main" }}>
                FINCORP
              </Box>
            </Typography>
          </Stack>
          <IconButton
            aria-label="Close navigation"
            onClick={closeMenu}
            sx={{
              color: "#fff",
              width: 42,
              height: 42,
              flex: "0 0 auto",
              bgcolor: "primary.main",
              border: "2px solid #d4af37",
              borderRadius: "50%",
              "&:hover": {
                bgcolor: "primary.dark",
                borderColor: "secondary.light",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Stack
          component="nav"
          aria-label="Mobile navigation"
          spacing={0}
          sx={{ width: "100%", alignItems: "stretch" }}
        >
          {navLinks(closeMenu, true)}
          <Button
            component="a"
            href="#apply"
            onClick={closeMenu}
            variant="contained"
            sx={{
              mt: 3,
              py: 1.4,
              borderRadius: 99,
              color: "primary.dark",
              bgcolor: "secondary.light",
              "&:hover": { bgcolor: "#f0d276" },
            }}
          >
            Apply Now
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}

export default Header;
