import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toggleAddProjectCard } from "@/lib/project-store";
import useMutationProjects from "@/hooks/use-mutation-projects";

const AddProjectCard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [link, setLink] = useState("");
  const { handleCreateProject } = useMutationProjects();

  const handleTextChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  const handleSubmit = async () => {
    const newProject = { title, description, skills, link };
    await handleCreateProject(newProject);
    toggleAddProjectCard();
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setSkills("");
    setLink("");
    toggleAddProjectCard(); // ← close the card
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
        <Button onClick={handleSubmit}>Add Project</Button>
      </div>
    </div>
  );
};

export default AddProjectCard;
