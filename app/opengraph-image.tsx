import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "IM Attorneys — Purposeful legal counsel in Pretoria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "linear-gradient(125deg, #0b0d0d 0%, #202523 53%, #303330 100%)",
          color: "#f5f1e7",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          padding: "66px 74px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ background: "#d5ad55", height: 4, left: 74, position: "absolute", top: 0, width: 230 }} />
        <div style={{ border: "1px solid rgba(220, 187, 103, .48)", borderRadius: 999, height: 500, position: "absolute", right: -95, top: 65, width: 500 }} />
        <div style={{ border: "1px solid rgba(255,255,255,.12)", borderRadius: 999, height: 350, position: "absolute", right: -22, top: 140, width: 350 }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", width: "100%" }}>
          <div style={{ alignItems: "center", display: "flex", gap: 17 }}>
            <div style={{ alignItems: "center", border: "1px solid #d5ad55", borderRadius: 999, color: "#d5ad55", display: "flex", fontFamily: "Georgia", fontSize: 34, height: 62, justifyContent: "center", width: 62 }}>IM</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: "Georgia", fontSize: 31, letterSpacing: -1 }}>IM Attorneys</div>
              <div style={{ color: "#d5ad55", fontSize: 13, letterSpacing: 3.5, marginTop: 4, textTransform: "uppercase" }}>Menlyn Maine · Pretoria</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
            <div style={{ color: "#d5ad55", fontSize: 15, fontWeight: 700, letterSpacing: 3.2, textTransform: "uppercase" }}>Personal & business legal counsel</div>
            <div style={{ fontFamily: "Georgia", fontSize: 72, letterSpacing: -4, lineHeight: 1.02, marginTop: 20 }}>Clear advice.<br />Purposeful action.</div>
            <div style={{ color: "#cbc9c1", fontSize: 21, lineHeight: 1.45, marginTop: 23 }}>A considered legal partner for the matters that shape your family, freedom, legacy and business.</div>
          </div>
          <div style={{ alignItems: "center", borderTop: "1px solid rgba(255,255,255,.18)", color: "#dedbd2", display: "flex", fontSize: 16, justifyContent: "space-between", letterSpacing: 1.2, paddingTop: 20 }}>
            <span>Family · Criminal · Commercial · Estates · Litigation</span>
            <span style={{ color: "#d5ad55" }}>IMINC.CO.ZA</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
