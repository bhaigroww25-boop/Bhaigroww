export default function HowItWorks() {
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
        gridTemplateRows: "auto auto 1fr auto",
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
          <div>HOW IT WORKS</div>
          <div>2025</div>
        </div>
      </div>

      {/* Section Heading */}
      <div>
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
          Simple 3-Step Process
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
          How It Works
        </h2>
      </div>

      {/* 3 Steps */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2.5vw",
          alignItems: "stretch",
        }}
      >
        {/* Step 1 */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "3.5vh 2.5vw",
            borderRadius: "1vw",
            border: "1px solid #E2E8F0",
            boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)",
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "4vw",
              height: "4vw",
              backgroundColor: "rgba(13, 148, 136, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "2vw",
                fontWeight: 800,
                color: "#0D9488",
              }}
            >
              1
            </span>
          </div>
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
              Step One
            </div>
            <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#1E3A5F", lineHeight: 1.2, marginBottom: "1.5vh" }}>
              Free Consultation
            </div>
            <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>
              We understand your business, goals, and budget. No commitment, no jargon — just a friendly conversation about how we can help you grow.
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div
          style={{
            background: "#0D9488",
            padding: "3.5vh 2.5vw",
            borderRadius: "1vw",
            boxShadow: "0 1vw 2vw rgba(13, 148, 136, 0.25)",
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "4vw",
              height: "4vw",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "2vw",
                fontWeight: 800,
                color: "#FFFFFF",
              }}
            >
              2
            </span>
          </div>
          <div>
            <div
              style={{
                fontSize: "0.85vw",
                fontWeight: 700,
                color: "rgba(255,255,255,0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.8vh",
              }}
            >
              Step Two
            </div>
            <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "1.5vh" }}>
              Custom Strategy &amp; Setup
            </div>
            <div style={{ fontSize: "1.05vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
              We build a tailored ad plan for your business and launch your campaign — all set up for you, ready to run.
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "3.5vh 2.5vw",
            borderRadius: "1vw",
            border: "1px solid #E2E8F0",
            boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)",
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "4vw",
              height: "4vw",
              backgroundColor: "rgba(13, 148, 136, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "2vw",
                fontWeight: 800,
                color: "#0D9488",
              }}
            >
              3
            </span>
          </div>
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
              Step Three
            </div>
            <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#1E3A5F", lineHeight: 1.2, marginBottom: "1.5vh" }}>
              Ongoing Management &amp; Reporting
            </div>
            <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>
              Hands-on management every month with clear, easy-to-read reports so you always know exactly what's working.
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
          <span>How It Works</span>
          <span>•</span>
          <span>Page 3</span>
        </div>
      </div>
    </div>
  );
}
