export default function BhaigrowwCover() {
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
        gridTemplateColumns: "3fr 2fr",
        gridTemplateRows: "auto 1fr auto",
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
          <div
            style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.02em" }}
          >
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
          <div>META ADS &amp; SOCIAL MEDIA</div>
          <div>2025</div>
        </div>
      </div>

      {/* Main Content Left */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "1.1vw",
            fontWeight: 600,
            color: "#0D9488",
            marginBottom: "1vh",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Your Growth Partner
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
          Bhaigroww
        </h1>
        <p
          style={{
            fontSize: "1.5vw",
            fontWeight: 400,
            color: "#475569",
            margin: "0 0 4vh 0",
            lineHeight: 1.5,
            maxWidth: "36vw",
          }}
        >
          Helping local businesses grow with Meta Ads &amp; social media management.
        </p>

        {/* KPI Cards */}
        <div style={{ display: "flex", gap: "2vw" }}>
          <div
            style={{
              background: "#FFFFFF",
              padding: "2.5vh 2vw",
              borderRadius: "1vw",
              border: "1px solid #E2E8F0",
              flex: 1,
              boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)",
            }}
          >
            <div
              style={{
                fontSize: "0.85vw",
                fontWeight: 600,
                color: "#64748B",
                marginBottom: "1vh",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              Meta Ads Management
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "1vw" }}>
              <div
                style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F" }}
              >
                Facebook &amp; Instagram
              </div>
            </div>
            <div
              style={{
                fontSize: "0.9vw",
                fontWeight: 600,
                color: "#0D9488",
                backgroundColor: "rgba(13, 148, 136, 0.1)",
                display: "inline-block",
                padding: "0.4vh 0.8vw",
                borderRadius: "2vw",
                marginTop: "0.8vh",
              }}
            >
              Campaigns &amp; Reporting
            </div>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              padding: "2.5vh 2vw",
              borderRadius: "1vw",
              border: "1px solid #E2E8F0",
              flex: 1,
              boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)",
            }}
          >
            <div
              style={{
                fontSize: "0.85vw",
                fontWeight: 600,
                color: "#64748B",
                marginBottom: "1vh",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              Social Media Management
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "1vw" }}>
              <div
                style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F" }}
              >
                Content &amp; Growth
              </div>
            </div>
            <div
              style={{
                fontSize: "0.9vw",
                fontWeight: 600,
                color: "#0D9488",
                backgroundColor: "rgba(13, 148, 136, 0.1)",
                display: "inline-block",
                padding: "0.4vh 0.8vw",
                borderRadius: "2vw",
                marginTop: "0.8vh",
              }}
            >
              Posting &amp; Audience
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Right — Growth Chart */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            padding: "4vh 3vw",
            borderRadius: "1vw",
            border: "1px solid #E2E8F0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)",
          }}
        >
          <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#1E3A5F" }}>
            Local Business Growth
          </div>

          {/* Bar Chart */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "1.2vw",
              height: "20vh",
              marginTop: "3vh",
              borderBottom: "2px solid #E2E8F0",
              paddingBottom: "1vh",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1vh",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "7vh",
                  backgroundColor: "rgba(13, 148, 136, 0.2)",
                  borderRadius: "0.4vw 0.4vw 0 0",
                }}
              />
              <div style={{ fontSize: "0.85vw", color: "#64748B", fontWeight: 500 }}>
                Before
              </div>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1vh",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "11vh",
                  backgroundColor: "rgba(13, 148, 136, 0.4)",
                  borderRadius: "0.4vw 0.4vw 0 0",
                }}
              />
              <div style={{ fontSize: "0.85vw", color: "#64748B", fontWeight: 500 }}>
                Month 1
              </div>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1vh",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "14vh",
                  backgroundColor: "rgba(13, 148, 136, 0.65)",
                  borderRadius: "0.4vw 0.4vw 0 0",
                }}
              />
              <div style={{ fontSize: "0.85vw", color: "#64748B", fontWeight: 500 }}>
                Month 2
              </div>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1vh",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "19vh",
                  backgroundColor: "#0D9488",
                  borderRadius: "0.4vw 0.4vw 0 0",
                }}
              />
              <div style={{ fontSize: "0.85vw", color: "#64748B", fontWeight: 500 }}>
                Month 3
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2vh",
            }}
          >
            <div style={{ fontSize: "0.9vw", color: "#64748B" }}>
              Personalized. Transparent. Results-focused.
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
          <span>Meta Ads &amp; Social Media Management</span>
          <span>•</span>
          <span>For Local Businesses</span>
        </div>
      </div>
    </div>
  );
}
