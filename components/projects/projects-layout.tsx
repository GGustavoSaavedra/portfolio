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
  type: ProjectType | "all";
  status: ProjectStatus | "all";
  order: ProjectsOrder;
};

const DEFAULT_FILTERS: FiltersState = {
  categories: [],
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
    if (filters.type !== "all" && p.type !== filters.type) return false;
    if (filters.status !== "all" && p.status !== filters.status) return false;

    // categories (multi): al menos una
    if (filters.categories.length > 0) {
      const hasAny = filters.categories.some((c) => p.categories.includes(c));
      if (!hasAny) return false;
    }

    return true;
  });
}

export function ProjectsLayout() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersState>(DEFAULT_FILTERS);

  const visibleProjects = useMemo(() => {
    const filtered = filterProjects(projects, filters);
    return sortProjects(filtered, filters.order);
  }, [filters]);

  const selectedCount =
    filters.categories.length +
    (filters.type !== "all" ? 1 : 0) +
    (filters.status !== "all" ? 1 : 0);

  const clearFilters = () => setFilters(DEFAULT_FILTERS);

  const toggleCategory = (cat: ProjectCategory) => {
    // Ignoramos "mobile" si por algún motivo aparece desde data vieja
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
                  onToggleCategory={toggleCategory}
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
          onToggleCategory={toggleCategory}
          onChangeType={(type) => setFilters((p) => ({ ...p, type }))}
          onChangeStatus={(status) => setFilters((p) => ({ ...p, status }))}
          onChangeOrder={(order) => setFilters((p) => ({ ...p, order }))}
          onClear={clearFilters}
          resultsCount={visibleProjects.length}
        />
      </Container>
    </section>
  );
}
