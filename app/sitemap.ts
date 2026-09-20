import type { MetadataRoute } from "next";
import { clinic } from "@/data/clinic";
import { treatments } from "@/data/treatments";
import { team } from "@/data/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/treatments",
    "/team",
    "/patient-stories",
    "/contact",
    "/appointment",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${clinic.website}${path}`,
    lastModified: new Date(),
    priority: path === "" ? 1 : 0.8,
  }));

  const treatmentRoutes = treatments.map((treatment) => ({
    url: `${clinic.website}/treatments/${treatment.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  const teamRoutes = team.map((member) => ({
    url: `${clinic.website}/team/${member.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...teamRoutes];
}
