import type { TeamMember } from "@/content/types";
import { ResponsiveImage } from "./responsive-image";

const AVATAR_TONES = [
  "bg-primary-tint text-primary",
  "bg-teal-tint text-teal",
  "bg-[#FBF1DE] text-[#C67A1E]",
  "bg-muted text-muted-foreground",
] as const;

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const second = parts.length > 1 ? (parts[1]?.[0] ?? "") : "";
  return (first + second).toUpperCase();
}

function toneFor(name: string): string {
  const sum = [...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return AVATAR_TONES[sum % AVATAR_TONES.length];
}

/** Team member: photo (or initials avatar) + name + position. */
export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {member.photo ? (
        <div className="size-24 overflow-hidden rounded-full">
          <ResponsiveImage
            image={member.photo}
            ratio="1 / 1"
            sizes="96px"
            rounded="rounded-full"
          />
        </div>
      ) : (
        <div
          className={`flex size-24 items-center justify-center rounded-full font-heading text-2xl font-bold ${toneFor(member.name)}`}
          aria-hidden
        >
          {initials(member.name)}
        </div>
      )}
      <div className="flex flex-col gap-0.5">
        <p className="font-heading font-semibold leading-tight text-foreground">
          {member.name}
        </p>
        <p className="text-sm text-muted-foreground">{member.position}</p>
      </div>
    </div>
  );
}
