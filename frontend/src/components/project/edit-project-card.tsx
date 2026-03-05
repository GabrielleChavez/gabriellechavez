import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { ProjectType } from "@/data/types";
import useMutationProjects from "@/hooks/use-mutation-projects";

type EditProjectCardProps = {
  project: ProjectType;
  onClose: () => void;
};

const EditProjectCard = ({ project, onClose }: EditProjectCardProps) => {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [skills, setSkills] = useState(project.skills);
  const [link, setLink] = useState(project.link);
  const { handleUpdateProject } = useMutationProjects();

  useEffect(() => {
    setTitle(project.title);
    setDescription(project.description);
    setSkills(project.skills);
    setLink(project.link);
  }, [project]);

  const handleTextChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  const handleSubmit = async () => {
    const updatedProject = { ...project, title, description, skills, link };
    await handleUpdateProject(updatedProject.id, description);
    onClose();
  };

  const handleCancel = () => {
    setTitle(project.title);
    setDescription(project.description);
    setSkills(project.skills);
    setLink(project.link);
    onClose();
  };

  return (
    <div className="w-full max-w-sm p-4 border rounded">
      <Label>Title</Label>
      <Textarea value={title} onChange={handleTextChange(setTitle)} />
      <Label>Description</Label>
      <Textarea
        value={description}
        onChange={handleTextChange(setDescription)}
      />
      <Label>Skills</Label>
      <Textarea value={skills} onChange={handleTextChange(setSkills)} />
      <Label>Link</Label>
      <Textarea value={link} onChange={handleTextChange(setLink)} />
      <div className="flex justify-end mt-4">
        <Button variant="outline" onClick={handleCancel} className="mr-2">
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save Changes</Button>
      </div>
    </div>
  );
};

export default EditProjectCard;
