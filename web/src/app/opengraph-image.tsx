import { ImageResponse } from "next/og";

export const alt = "Senyum Kecil — Mengajar & berbagi untuk anak Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(120% 90% at 10% 0%, #FBEDE4 0%, transparent 55%), radial-gradient(90% 80% at 100% 20%, #E4F1EE 0%, transparent 50%), #FAF7F2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#B8461A",
              color: "#FFFDFB",
              fontSize: 32,
              fontWeight: 700,
              borderRadius: 14,
            }}
          >
            S
          </div>
          <span style={{ fontSize: 30, fontWeight: 700, color: "#2B2622" }}>
            Senyum Kecil
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 64, fontWeight: 700, color: "#2B2622", lineHeight: 1.1 }}>
            Setiap anak berhak belajar
            <br />
            dan tersenyum.
          </span>
          <span style={{ fontSize: 30, color: "#6B5F54" }}>
            Mengajar & berbagi untuk anak Indonesia
          </span>
        </div>
      </div>
    ),
    size,
  );
}
