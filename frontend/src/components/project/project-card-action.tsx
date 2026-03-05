import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import type { ProjectType } from "@/data/types";
import DeleteProjectDialog from "./delete-project-dialog";
import EditProjectCard from "./edit-project-card";

type ProjectCardActionProps = {
  project: ProjectType;
};

const ProjectCardAction = ({ project }: ProjectCardActionProps) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <DotsVerticalIcon className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setEditOpen(true);
            }}
          >
            <Button variant="ghost">
              <Pencil1Icon className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setDeleteOpen(true);
            }}
          >
            <Button variant="ghost">
              <TrashIcon className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {editOpen && (
        <EditProjectCard
          project={project}
          onClose={() => setEditOpen(false)}
        />
      )}

      <DeleteProjectDialog
        project={project}
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
      />
    </>
  );
};

export default ProjectCardAction;