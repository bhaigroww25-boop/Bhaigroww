export default function WhyChooseUs() {
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
          <div>WHY CHOOSE US</div>
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
          Our Commitment
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
          Why Local Businesses Choose Us
        </h2>
      </div>

      {/* Card 1 — Personalized Service */}
      <div
        style={{
          background: "#FFFFFF",
          padding: "3vh 2.5vw",
          borderRadius: "1vw",
          border: "1px solid #E2E8F0",
          boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)",
          display: "flex",
          gap: "2vw",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "3.5vw",
            height: "3.5vw",
            backgroundColor: "rgba(13, 148, 136, 0.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "1.5vw",
              height: "1.5vw",
              backgroundColor: "#0D9488",
              borderRadius: "50%",
            }}
          />
        </div>
        <div>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1vh" }}>
            Personalized Service
          </div>
          <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>
            Not a template agency. We know your business by name and build everything around your goals.
          </div>
        </div>
      </div>

      {/* Card 2 — Transparent Pricing */}
      <div
        style={{
          background: "#FFFFFF",
          padding: "3vh 2.5vw",
          borderRadius: "1vw",
          border: "1px solid #E2E8F0",
          boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)",
          display: "flex",
          gap: "2vw",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "3.5vw",
            height: "3.5vw",
            backgroundColor: "rgba(13, 148, 136, 0.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "1.5vw",
              height: "1.5vw",
              backgroundColor: "#0D9488",
              borderRadius: "50%",
            }}
          />
        </div>
        <div>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1vh" }}>
            Transparent Pricing
          </div>
          <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>
            One-time setup fee + monthly management fee + flexible ad spend. No hidden fees, ever.
          </div>
        </div>
      </div>

      {/* Card 3 — Hands-On Management */}
      <div
        style={{
          background: "#1E3A5F",
          padding: "3vh 2.5vw",
          borderRadius: "1vw",
          boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.15)",
          display: "flex",
          gap: "2vw",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "3.5vw",
            height: "3.5vw",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "1.5vw",
              height: "1.5vw",
              backgroundColor: "#0D9488",
              borderRadius: "50%",
            }}
          />
        </div>
        <div>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "1vh" }}>
            Hands-On Management
          </div>
          <div style={{ fontSize: "1.05vw", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
            You work directly with us — no middlemen, no automated tools handling your business.
          </div>
        </div>
      </div>

      {/* Card 4 — Results-Focused */}
      <div
        style={{
          background: "#1E3A5F",
          padding: "3vh 2.5vw",
          borderRadius: "1vw",
          boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.15)",
          display: "flex",
          gap: "2vw",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "3.5vw",
            height: "3.5vw",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "1.5vw",
              height: "1.5vw",
              backgroundColor: "#0D9488",
              borderRadius: "50%",
            }}
          />
        </div>
        <div>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "1vh" }}>
            Results-Focused
          </div>
          <div style={{ fontSize: "1.05vw", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
            We measure what matters — leads, footfall, and sales. Not vanity metrics.
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
          <span>Why Choose Us</span>
          <span>•</span>
          <span>Page 4</span>
        </div>
      </div>
    </div>
  );
}
