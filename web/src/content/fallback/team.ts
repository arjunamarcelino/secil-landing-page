import type { TeamMember } from "@/content/types";

// Photos are omitted so the UI shows initials avatars until real photos are
// uploaded in Sanity. `order` controls position within each division.
export const team = [
  // Founders
  { name: "Audry Bianda Putri Handoyo", position: "Founder", division: "founders", order: 1 },
  { name: "Farid Haikal Nasution", position: "Founder", division: "founders", order: 2 },
  { name: "Raden Roro Larasati", position: "Founder", division: "founders", order: 3 },
  { name: "Fadel Hasibuan", position: "Founder", division: "founders", order: 4 },

  // Pengurus Inti
  { name: "Audry Bianda Putri Handoyo", position: "Executive Officer", division: "pengurus-inti", order: 1 },
  { name: "Rosha Nofria Asthari", position: "Operating Officer", division: "pengurus-inti", order: 2 },
  { name: "Salsabila Antami Pasaribu", position: "Financial Officer", division: "pengurus-inti", order: 3 },
  { name: "Rika Rahim", position: "Financial Officer", division: "pengurus-inti", order: 4 },

  // Research & Development
  { name: "Sahnaz Salsabila", position: "Chief", division: "rnd", order: 1 },
  { name: "Meisya Tara", position: "Vice Chief", division: "rnd", order: 2 },
  { name: "Cut Afra", position: "Anggota", division: "rnd", order: 3 },
  { name: "Tasya May Shella", position: "Anggota", division: "rnd", order: 4 },

  // Teach & Materials
  { name: "Khairunissa Fanani Lubis", position: "Chief", division: "teach", order: 1 },
  { name: "Khairani Pohan", position: "Vice Chief", division: "teach", order: 2 },
  { name: "Annisa Khumairah", position: "Anggota", division: "teach", order: 3 },
  { name: "Syika Khaira", position: "Anggota", division: "teach", order: 4 },

  // Public Relations
  { name: "Yowan Fasya", position: "Chief", division: "pr", order: 1 },
  { name: "Aqilah Nadira", position: "Vice Chief", division: "pr", order: 2 },
  { name: "Dinda Manisha", position: "Anggota", division: "pr", order: 3 },
  { name: "Alya Rahmita", position: "Anggota", division: "pr", order: 4 },
  { name: "Salsabila Putri C.", position: "Anggota", division: "pr", order: 5 },

  // Survey Team
  { name: "Daffa Haris Nasution", position: "Chief", division: "survey", order: 1 },
  { name: "Raihan Arif Maulana", position: "Vice Chief", division: "survey", order: 2 },
  { name: "Cut Buleun", position: "Anggota", division: "survey", order: 3 },
  { name: "Rayhan Athallah", position: "Anggota", division: "survey", order: 4 },

  // Design & Documentaries
  { name: "Adisty Aulia Rahma", position: "Chief", division: "design", order: 1 },
  { name: "Nelva Adela", position: "Vice Chief", division: "design", order: 2 },
  { name: "Ahmad Rizky Adlani", position: "Anggota", division: "design", order: 3 },
  { name: "Jeinan Asmilda", position: "Anggota", division: "design", order: 4 },
] as const satisfies readonly TeamMember[];
