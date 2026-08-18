import type { Metadata } from "next";
import { getTeamMembers } from "@/content/data";
import { TEAM_DIVISIONS, TEAM_DIVISION_LABELS } from "@/content/types";
import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { TeamMemberCard } from "@/components/common/team-member-card";
import { EmptyState } from "@/components/common/empty-state";

export const dynamic = "error";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Tim",
  description:
    "Kenali tim di balik Senyum Kecil—para founder, pengurus, dan relawan dari berbagai divisi yang menggerakkan program kami.",
  alternates: { canonical: "/tim" },
};

export default async function TimPage() {
  const members = await getTeamMembers();

  const groups = TEAM_DIVISIONS.map((division) => ({
    division,
    label: TEAM_DIVISION_LABELS[division],
    members: members
      .filter((m) => m.division === division)
      .slice()
      .sort((a, b) => a.order - b.order),
  })).filter((group) => group.members.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="Tim"
        title="Orang-orang di balik Senyum Kecil"
        description="Program-program kami digerakkan oleh tim yang terdiri dari orang-orang terbaik di bidangnya."
      />

      <Container className="flex flex-col gap-16 py-16 sm:py-20">
        {groups.length === 0 ? (
          <EmptyState
            title="Belum ada anggota tim"
            description="Anggota tim akan tampil di sini setelah ditambahkan melalui CMS."
          />
        ) : (
          groups.map((group) => (
            <section key={group.division} aria-labelledby={`tim-${group.division}`} className="flex flex-col gap-8">
              <h2
                id={`tim-${group.division}`}
                className="font-heading text-2xl font-semibold text-foreground sm:text-3xl"
              >
                {group.label}
              </h2>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                {group.members.map((member) => (
                  <TeamMemberCard key={`${member.name}-${member.position}`} member={member} />
                ))}
              </div>
            </section>
          ))
        )}
      </Container>
    </>
  );
}
