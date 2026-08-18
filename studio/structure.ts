import type { StructureResolver } from "sanity/structure";

/**
 * Custom desk: Site Settings is a single editable document (singleton); the rest
 * are ordinary document lists.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Konten")
    .items([
      S.listItem()
        .title("Pengaturan Situs")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("program").title("Program"),
      S.documentTypeListItem("article").title("Artikel / Cerita"),
      S.documentTypeListItem("author").title("Penulis"),
      S.documentTypeListItem("category").title("Kategori"),
      S.documentTypeListItem("impactStatistic").title("Statistik Dampak"),
      S.documentTypeListItem("partner").title("Mitra"),
      S.documentTypeListItem("teamMember").title("Anggota Tim"),
    ]);
