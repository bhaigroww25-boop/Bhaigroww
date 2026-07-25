export default function LetsGrowTogether() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FAFBFC",
        fontFamily: "'Inter', sans-serif",
        padding: "4vh 4vw",
        boxSizing: "border-box",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
        gap: "3vh",
        color: "#1E3A5F",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #E2E8F0",
          paddingBottom: "2vh",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div
            style={{
              width: "2vw",
              height: "2vw",
              backgroundColor: "#0D9488",
              borderRadius: "0.4vw",
            }}
          />
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.02em" }}>
            Bhaigroww
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2vw",
            fontSize: "1vw",
            fontWeight: 500,
            color: "#64748B",
          }}
        >
          <div>GET STARTED</div>
          <div>2025</div>
        </div>
      </div>

      {/* Main Content — Centered */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "6vw",
            height: "6vw",
            backgroundColor: "rgba(13, 148, 136, 0.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "3vh",
          }}
        >
          <div
            style={{
              width: "3vw",
              height: "3vw",
              backgroundColor: "#0D9488",
              borderRadius: "50%",
            }}
          />
        </div>

        <div
          style={{
            fontSize: "1.1vw",
            fontWeight: 600,
            color: "#0D9488",
            marginBottom: "1.5vh",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Free Consultation — No Commitment
        </div>

        <h1
          style={{
            fontSize: "5.5vw",
            fontWeight: 800,
            margin: "0 0 2vh 0",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#1E3A5F",
          }}
        >
          Let's Grow Together
        </h1>

        <p
          style={{
            fontSize: "1.4vw",
            fontWeight: 400,
            color: "#475569",
            margin: "0 0 5vh 0",
            lineHeight: 1.5,
            maxWidth: "50vw",
          }}
        >
          Ready to get more customers through Facebook &amp; Instagram? We work with local shops, restaurants &amp; service businesses across India.
        </p>

        {/* Contact Info Block */}
        <div
          style={{
            display: "flex",
            gap: "3vw",
            padding: "3.5vh 5vw",
            background: "#FFFFFF",
            borderRadius: "1vw",
            border: "1px solid #E2E8F0",
            boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontSize: "0.85vw",
                fontWeight: 600,
                color: "#64748B",
                marginBottom: "0.8vh",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Chat on WhatsApp
            </div>
            <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#0D9488" }}>
              +91 8171706705
            </div>
          </div>
          <div style={{ width: "1px", backgroundColor: "#E2E8F0" }} />
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontSize: "0.85vw",
                fontWeight: 600,
                color: "#64748B",
                marginBottom: "0.8vh",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Free Consultation
            </div>
            <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1E3A5F" }}>
              Message Us Anytime
            </div>
          </div>
          <div style={{ width: "1px", backgroundColor: "#E2E8F0" }} />
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontSize: "0.85vw",
                fontWeight: 600,
                color: "#64748B",
                marginBottom: "0.8vh",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              We Serve
            </div>
            <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1E3A5F" }}>
              Local Businesses Across India
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #E2E8F0",
          paddingTop: "2vh",
          fontSize: "0.9vw",
          color: "#94A3B8",
          fontWeight: 500,
        }}
      >
        <div>Bhaigroww</div>
        <div style={{ display: "flex", gap: "1vw" }}>
          <span>Meta Ads &amp; Social Media Management</span>
          <span>•</span>
          <span>Page 5</span>
        </div>
      </div>
    </div>
  );
}
