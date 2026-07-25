export default function WhatWeDo() {
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
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto auto 1fr auto",
        gap: "3vh 4vw",
        color: "#1E3A5F",
      }}
    >
      {/* Header */}
      <div
        style={{
          gridColumn: "1 / -1",
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
          <div>WHAT WE DO</div>
          <div>2025</div>
        </div>
      </div>

      {/* Section Heading */}
      <div style={{ gridColumn: "1 / -1" }}>
        <div
          style={{
            fontSize: "1.1vw",
            fontWeight: 600,
            color: "#0D9488",
            marginBottom: "0.8vh",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Our Services
        </div>
        <h2
          style={{
            fontSize: "3.5vw",
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          What We Do
        </h2>
      </div>

      {/* Left: Meta Ads */}
      <div
        style={{
          background: "#FFFFFF",
          padding: "3vh 2.5vw",
          borderRadius: "1vw",
          border: "1px solid #E2E8F0",
          boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.85vw",
              fontWeight: 700,
              color: "#0D9488",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.8vh",
            }}
          >
            Service 01
          </div>
          <div style={{ fontSize: "2vw", fontWeight: 800, color: "#1E3A5F", lineHeight: 1.2 }}>
            Meta Ads Management
          </div>
          <div style={{ fontSize: "1.1vw", color: "#64748B", marginTop: "0.5vh" }}>
            Facebook &amp; Instagram Campaigns
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#E2E8F0",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ display: "flex", gap: "1vw", alignItems: "flex-start" }}>
            <div
              style={{
                width: "0.6vw",
                height: "0.6vw",
                backgroundColor: "#0D9488",
                borderRadius: "50%",
                marginTop: "0.7vh",
                flexShrink: 0,
              }}
            />
            <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.4 }}>
              Campaign setup &amp; audience targeting
            </div>
          </div>
          <div style={{ display: "flex", gap: "1vw", alignItems: "flex-start" }}>
            <div
              style={{
                width: "0.6vw",
                height: "0.6vw",
                backgroundColor: "#0D9488",
                borderRadius: "50%",
                marginTop: "0.7vh",
                flexShrink: 0,
              }}
            />
            <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.4 }}>
              Ongoing optimization for better results
            </div>
          </div>
          <div style={{ display: "flex", gap: "1vw", alignItems: "flex-start" }}>
            <div
              style={{
                width: "0.6vw",
                height: "0.6vw",
                backgroundColor: "#0D9488",
                borderRadius: "50%",
                marginTop: "0.7vh",
                flexShrink: 0,
              }}
            />
            <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.4 }}>
              Monthly performance reporting
            </div>
          </div>
          <div style={{ display: "flex", gap: "1vw", alignItems: "flex-start" }}>
            <div
              style={{
                width: "0.6vw",
                height: "0.6vw",
                backgroundColor: "#0D9488",
                borderRadius: "50%",
                marginTop: "0.7vh",
                flexShrink: 0,
              }}
            />
            <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.4 }}>
              Real customers to your door — not just clicks
            </div>
          </div>
        </div>
      </div>

      {/* Right: Social Media */}
      <div
        style={{
          background: "#FFFFFF",
          padding: "3vh 2.5vw",
          borderRadius: "1vw",
          border: "1px solid #E2E8F0",
          boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.85vw",
              fontWeight: 700,
              color: "#0D9488",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.8vh",
            }}
          >
            Service 02
          </div>
          <div style={{ fontSize: "2vw", fontWeight: 800, color: "#1E3A5F", lineHeight: 1.2 }}>
            Social Media Management
          </div>
          <div style={{ fontSize: "1.1vw", color: "#64748B", marginTop: "0.5vh" }}>
            Content Planning &amp; Audience Growth
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#E2E8F0",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ display: "flex", gap: "1vw", alignItems: "flex-start" }}>
            <div
              style={{
                width: "0.6vw",
                height: "0.6vw",
                backgroundColor: "#0D9488",
                borderRadius: "50%",
                marginTop: "0.7vh",
                flexShrink: 0,
              }}
            />
            <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.4 }}>
              Content planning tailored to your business
            </div>
          </div>
          <div style={{ display: "flex", gap: "1vw", alignItems: "flex-start" }}>
            <div
              style={{
                width: "0.6vw",
                height: "0.6vw",
                backgroundColor: "#0D9488",
                borderRadius: "50%",
                marginTop: "0.7vh",
                flexShrink: 0,
              }}
            />
            <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.4 }}>
              Consistent posting to keep your audience engaged
            </div>
          </div>
          <div style={{ display: "flex", gap: "1vw", alignItems: "flex-start" }}>
            <div
              style={{
                width: "0.6vw",
                height: "0.6vw",
                backgroundColor: "#0D9488",
                borderRadius: "50%",
                marginTop: "0.7vh",
                flexShrink: 0,
              }}
            />
            <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.4 }}>
              Audience growth for local businesses
            </div>
          </div>
          <div style={{ display: "flex", gap: "1vw", alignItems: "flex-start" }}>
            <div
              style={{
                width: "0.6vw",
                height: "0.6vw",
                backgroundColor: "#0D9488",
                borderRadius: "50%",
                marginTop: "0.7vh",
                flexShrink: 0,
              }}
            />
            <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.4 }}>
              Everything handled — so you focus on your business
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          gridColumn: "1 / -1",
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
          <span>Our Services</span>
          <span>•</span>
          <span>Page 2</span>
        </div>
      </div>
    </div>
  );
}
