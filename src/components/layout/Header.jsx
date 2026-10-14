import { useState } from "react";
import { logo } from "../../config/images";
import { navigationLinks, services } from "../../data/siteContent";
import { Link as RouterLink, NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Collapse,
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
  const [menuOpen, setMenuOpen] = useState(false); // mobile drawer
  const [servicesOpen, setServicesOpen] = useState(false); // desktop hover dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion

  const closeMenu = () => setMenuOpen(false);
  const closeAll = () => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMenuOpen(false);
  };

  const linkSx = (mobile) => ({
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
    "@media (hover: hover)": {
      "&:hover": {
        color: "#a47b00",
        bgcolor: mobile ? "#0a2e5d08" : "transparent",
      },
    },
    // Current page (NavLink adds .active)
    "&.active": mobile
      ? { color: "#a47b00", bgcolor: "#0a2e5d08", boxShadow: "inset 3px 0 0 #d4af37" }
      : { color: "#a47b00" },
    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: "secondary.light",
      outlineOffset: 4,
      borderRadius: 2,
    },
  });

  /* Simple list of services (used in desktop dropdown) */
  const desktopDropdown = (
    <Box
      id="services-dropdown"
      role="menu"
      sx={{
        position: "absolute",
        top: "100%", // wrapper spans the full header bar height, so this is the bar's bottom edge
        left: "50%", // centered under the Services link
        pt: 1.5, // invisible bridge so the hover doesn't break between bar and list
        zIndex: 1200,
        opacity: servicesOpen ? 1 : 0,
        visibility: servicesOpen ? "visible" : "hidden",
        transform: servicesOpen
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(6px)",
        transition: "opacity .18s ease, transform .18s ease, visibility .18s",
      }}
    >
      <Box
        sx={{
          minWidth: 280,
          p: 1,
          overflow: "hidden", // clips anything poking out of the rounded corners
          bgcolor: "#fff",
          border: "1px solid #dce5ef",
          borderRadius: 2,
          boxShadow: "0 16px 40px #061a3326",
        }}
      >
        {services.map((service) => (
          <Link
            key={service.slug}
            role="menuitem"
            component={RouterLink}
            to={`/services/${service.slug}`}
            underline="none"
            onClick={closeAll}
            sx={{
              display: "block",
              px: 1.75,
              py: 1.25,
              borderRadius: "8px", // hover highlight stays inside the panel's rounded corners
              color: "primary.dark",
              fontSize: 14,
              fontWeight: 600,
              textTransform: "none",
              whiteSpace: "nowrap",
              transition: "background-color .15s ease, color .15s ease",
              "&:hover, &:focus-visible": {
                bgcolor: "#f3f7fb",
                color: "#a47b00",
                outline: "none",
              },
            }}
          >
            {service.title}
          </Link>
        ))}
      </Box>
    </Box>
  );

  const navLinks = (onClick, mobile = false) =>
    navigationLinks.map((link) => {
      /* ---------- Normal links ---------- */
      if (!link.hasDropdown) {
        return (
          <Link
            key={link.label}
            component={NavLink}
            to={link.to}
            end={link.to === "/"}
            underline="none"
            onClick={onClick}
            sx={linkSx(mobile)}
          >
            {link.label}
          </Link>
        );
      }

      /* ---------- Services on mobile: tap arrow to expand ---------- */
      if (mobile) {
        return (
          <Box key={link.label}>
            <Stack direction="row" sx={{ alignItems: 'center', borderBottom: "1px solid #dce5ef" }}>
              <Link
                component={NavLink}
                to={link.to}
                end={link.to === "/"}
                underline="none"
                onClick={onClick}
                sx={{ ...linkSx(true), borderBottom: "none", flex: 1 }}
              >
                {link.label}
              </Link>
              <IconButton
                aria-label="Show service pages"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((open) => !open)}
                size="small"
                sx={{ color: "primary.main" }}
              >
                <KeyboardArrowDownRoundedIcon
                  sx={{
                    fontSize: 22,
                    transition: "transform .2s ease",
                    transform: mobileServicesOpen ? "rotate(180deg)" : "none",
                  }}
                />
              </IconButton>
            </Stack>
            <Collapse in={mobileServicesOpen} unmountOnExit>
              <Stack sx={{ bgcolor: "#fff", borderBottom: "1px solid #dce5ef" }}>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    component={RouterLink}
                    to={`/services/${service.slug}`}
                    underline="none"
                    onClick={closeAll}
                    sx={{
                      px: 3,
                      py: 1.4,
                      color: "primary.dark",
                      fontSize: 14,
                      fontWeight: 600,
                      "&:hover": { color: "#a47b00", bgcolor: "#f3f7fb" },
                    }}
                  >
                    {service.title}
                  </Link>
                ))}
              </Stack>
            </Collapse>
          </Box>
        );
      }

      /* ---------- Services on desktop: opens on hover / focus ---------- */
      return (
        <Box
          key={link.label}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
          onFocus={() => setServicesOpen(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setServicesOpen(false);
          }}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            alignSelf: "stretch", // full bar height, so the dropdown starts at the bar's bottom edge
          }}
        >
          <Link
            component={NavLink}
            to={link.to}
            end={link.to === "/"}
            underline="none"
            aria-haspopup="true"
            aria-expanded={servicesOpen}
            aria-controls="services-dropdown"
            onClick={closeAll}
            sx={linkSx(false)}
          >
            {link.label}
            <KeyboardArrowDownRoundedIcon
              sx={{
                fontSize: 19,
                ml: 0.25,
                transition: "transform .2s ease",
                transform: servicesOpen ? "rotate(180deg)" : "none",
              }}
            />
          </Link>
          {desktopDropdown}
        </Box>
      );
    });

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
          component={RouterLink}
          to="/"
          underline="none"
          aria-label="VVS Fincorp home"
          sx={{ display: "flex", alignItems: "center", gap: 1.25, minWidth: 0 }}
        >
          <Box
            component="img"
            src={logo.src}
            alt="VVS Fincorp"
            width={logo.width}
            height={logo.height}
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
            alignSelf: "stretch",
            display: { xs: "none", lg: "flex" },
            whiteSpace: "nowrap",
          }}
        >
          {navLinks(closeAll)}
        </Stack>
        <Button
          component={RouterLink}
          to="/contact"
          onClick={closeAll}
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
        {/* Drawer header: brand on the left, close button pinned to the right */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            alignItems: "center",
            columnGap: 1.5,
            minHeight: 68,
            mb: 2,
            pb: 1.5,
            borderBottom: "1px solid #dce5ef",
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            onClick={closeAll}
            underline="none"
            aria-label="VVS Fincorp home"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              minWidth: 0,
            }}
          >
            <Box
              component="img"
              src={logo.src}
              alt="VVS Fincorp logo"
              sx={{
                display: "block",
                width: 52,
                height: 52,
                flex: "0 0 auto",
                objectFit: "contain",
              }}
            />
            <Typography
              noWrap
              sx={{
                color: "primary.dark",
                font: "700 18px/1 Georgia, serif",
                letterSpacing: "-.3px",
                minWidth: 0,
              }}
            >
              VVS{" "}
              <Box component="span" sx={{ color: "secondary.main" }}>
                FINCORP
              </Box>
            </Typography>
          </Link>

          <IconButton
            aria-label="Close navigation"
            onClick={closeMenu}
            sx={{
              width: 42,
              height: 42,
              color: "#fff",
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
        </Box>

        <Stack
          component="nav"
          aria-label="Mobile navigation"
          spacing={0}
          sx={{ width: "100%", alignItems: "stretch" }}
        >
          {navLinks(closeAll, true)}
          <Button
            component={RouterLink}
            to="/contact"
            onClick={closeAll}
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