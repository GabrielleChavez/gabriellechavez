import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { ProjectType } from "@/data/types";
import useMutationProjects from "@/hooks/use-mutation-projects";

type DeleteProjectDialogProps = {
  project: ProjectType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DeleteProjectDialog = ({
  project,
  open,
  onOpenChange,
}: DeleteProjectDialogProps) => {
  const { deleteProjectById } = useMutationProjects();
  const handleDelete = () => {
    deleteProjectById(project.id);
    onOpenChange(false);
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            project.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProjectDialog;
