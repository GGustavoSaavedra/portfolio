"use client";

import { useMemo, useState } from "react";
import {
  projects,
  type Project,
  type ProjectCategory,
  type ProjectStatus,
  type ProjectType,
} from "@/data/projects";
import { Container } from "@/components/layout/container";
import { FiltersDrawer } from "./filters-drawer";
import { FiltersPanel } from "./filters-panel";
import { ProjectsGrid } from "./projects-grid";
import { ProjectsToolbar, type ProjectsOrder } from "./projects-toolbar";

type FiltersState = {
  categories: ProjectCategory[]; // multi
  technologies: string[]; // multi
  type: ProjectType | "all";
  status: ProjectStatus | "all";
  order: ProjectsOrder;
};

const DEFAULT_FILTERS: FiltersState = {
  categories: [],
  technologies: [],
  type: "all",
  status: "all",
  order: "recent",
};

function sortProjects(list: Project[], order: ProjectsOrder) {
  const copy = [...list];

  switch (order) {
    case "recent":
      return copy.sort((a, b) => b.year - a.year);
    case "oldest":
      return copy.sort((a, b) => a.year - b.year);
    case "az":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "za":
      return copy.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return copy;
  }
}

function filterProjects(list: Project[], filters: FiltersState) {
  return list.filter((p) => {
    // type
    if (filters.type !== "all" && p.type !== filters.type) return false;

    // status
    if (filters.status !== "all" && p.status !== filters.status) return false;

    // categories (multi): al menos una
    if (filters.categories.length > 0) {
      const hasAny = filters.categories.some((c) => p.categories.includes(c));
      if (!hasAny) return false;
    }

    // technologies (multi): al menos una
    if (filters.technologies.length > 0) {
      const hasAnyTech = filters.technologies.some((t) =>
        p.techStack.includes(t)
      );
      if (!hasAnyTech) return false;
    }

    return true;
  });
}

export function ProjectsLayout() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersState>(DEFAULT_FILTERS);

  // Lista de tecnologías disponible (únicas) derivadas de projects
  const techOptions = useMemo(() => {
    const set = new Set<string>();

    for (const p of projects) {
      for (const t of p.techStack) {
        const tech = t?.trim();
        if (!tech) continue;
        if (tech.toLowerCase() === "próximamente") continue;
        set.add(tech);
      }
    }

    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const visibleProjects = useMemo(() => {
    const filtered = filterProjects(projects, filters);
    return sortProjects(filtered, filters.order);
  }, [filters]);

  const selectedCount =
    filters.categories.length +
    filters.technologies.length +
    (filters.type !== "all" ? 1 : 0) +
    (filters.status !== "all" ? 1 : 0);

  const clearFilters = () => setFilters(DEFAULT_FILTERS);

  const toggleCategory = (cat: ProjectCategory) => {
    // Por si alguna vez vuelve "mobile" como categoría
    if (cat === "mobile") return;

    setFilters((prev) => {
      const exists = prev.categories.includes(cat);
      return {
        ...prev,
        categories: exists
          ? prev.categories.filter((c) => c !== cat)
          : [...prev.categories, cat],
      };
    });
  };

  const toggleTechnology = (tech: string) => {
    setFilters((prev) => {
      const exists = prev.technologies.includes(tech);
      return {
        ...prev,
        technologies: exists
          ? prev.technologies.filter((t) => t !== tech)
          : [...prev.technologies, tech],
      };
    });
  };

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="flex flex-col gap-6">
          {/* Mobile toolbar */}
          <div className="lg:hidden">
            <ProjectsToolbar
              resultsCount={visibleProjects.length}
              order={filters.order}
              onChangeOrder={(order) => setFilters((p) => ({ ...p, order }))}
              showFiltersButton
              activeFiltersCount={selectedCount}
              onOpenFilters={() => setFiltersOpen(true)}
            />
          </div>

          <div className="grid min-h-[70vh] gap-6 lg:min-h-[68vh] lg:grid-cols-[280px_1fr]">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-[88px]">
                <FiltersPanel
                  filters={filters}
                  techOptions={techOptions}
                  onToggleCategory={toggleCategory}
                  onToggleTechnology={toggleTechnology}
                  onChangeType={(type) => setFilters((p) => ({ ...p, type }))}
                  onChangeStatus={(status) =>
                    setFilters((p) => ({ ...p, status }))
                  }
                  onClear={clearFilters}
                />
              </div>
            </aside>

            {/* Main */}
            <main className="flex min-h-[70vh] flex-col gap-4 lg:min-h-[68vh]">
              {/* Desktop toolbar (sin botón filtros) */}
              <div className="hidden lg:block">
                <ProjectsToolbar
                  resultsCount={visibleProjects.length}
                  order={filters.order}
                  onChangeOrder={(order) =>
                    setFilters((p) => ({ ...p, order }))
                  }
                />
              </div>

              <ProjectsGrid projects={visibleProjects} />
            </main>
          </div>
        </div>

        {/* Mobile drawer */}
        <FiltersDrawer
          open={filtersOpen}
          onClose={() => setFiltersOpen(false)}
          filters={filters}
          techOptions={techOptions}
          onToggleCategory={toggleCategory}
          onToggleTechnology={toggleTechnology}
          onChangeType={(type) => setFilters((p) => ({ ...p, type }))}
          onChangeStatus={(status) => setFilters((p) => ({ ...p, status }))}
          onChangeOrder={(order) => setFilters((p) => ({ ...p, order }))}
          onClear={clearFilters}
        />
      </Container>
    </section>
  );
}
