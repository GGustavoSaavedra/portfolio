import type { Project } from "@/data/projects";

export type ProjectBadgeTone = "accent" | "wip" | "muted";

export type ProjectBadge = {
  label: string;
  tone: ProjectBadgeTone;
  showDot: boolean;
  pulseDot: boolean;
  hasLiveDemo: boolean;
  isWipNoDemo: boolean;
};

export function isValidWebsiteUrl(url?: string) {
  if (!url) return false;
  if (url === "#") return false;
  return true;
}

export function getProjectBadge(
  input: Pick<Project, "status" | "lifecycle" | "websiteUrl">,
): ProjectBadge {
  const hasLiveDemo = isValidWebsiteUrl(input.websiteUrl);
  const isWipNoDemo = input.status === "wip" && !hasLiveDemo;

  if (input.status === "done") {
    return {
      label: "Finalizado",
      tone: "muted",
      showDot: false,
      pulseDot: false,
      hasLiveDemo,
      isWipNoDemo,
    };
  }

  if (input.status === "wip" && input.lifecycle === "active" && hasLiveDemo) {
    return {
      label: "Activo",
      tone: "accent",
      showDot: true,
      pulseDot: false,
      hasLiveDemo,
      isWipNoDemo,
    };
  }

  if (input.status === "wip" && !hasLiveDemo) {
    return {
      label: "En desarrollo",
      tone: "wip",
      showDot: true,
      pulseDot: true,
      hasLiveDemo,
      isWipNoDemo,
    };
  }

  return {
    label: "En progreso",
    tone: "muted",
    showDot: false,
    pulseDot: false,
    hasLiveDemo,
    isWipNoDemo,
  };
}
