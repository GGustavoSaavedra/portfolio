"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import { FiltersDrawer } from "./filters-drawer";
import { FiltersPanel } from "./filters-panel";
import { ProjectsGrid } from "./projects-grid";
import { ProjectsToolbar } from "./projects-toolbar";

export function ProjectsLayout() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const allProjects = useMemo(() => projects, []);

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="flex flex-col gap-6">
          {/* Mobile toolbar */}
          <div className="lg:hidden">
            <ProjectsToolbar
              resultsCount={allProjects.length}
              onOpenFilters={() => setFiltersOpen(true)}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-[88px]">
                <FiltersPanel />
              </div>
            </aside>

            {/* Main content */}
            <main>
              <ProjectsGrid projects={allProjects} />
            </main>
          </div>
        </div>

        {/* Mobile drawer */}
        <FiltersDrawer
          open={filtersOpen}
          onClose={() => setFiltersOpen(false)}
        />
      </Container>
    </section>
  );
}
