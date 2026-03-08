import { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { button_color, text_color, background_color } from "@/lib/color-palatte";
import{ toast } from "sonner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
        const targetEmail = "gchavez5@jh.edu";
        const subject = encodeURIComponent(`Portfolio contact from ${name || "visitor"}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
        toast.success("Message sent!");
    } catch (error) {
        toast.error("Message failed. Please try again.");
    }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldSet>
        <FieldLegend className={`text-2xl font-bold ${text_color}`}>Contact Me</FieldLegend>
        <FieldDescription className={`text-xl ${text_color}`}>
          Feel free to reach out with questions, collaboration ideas, or opportunities.
        </FieldDescription>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">
              <FieldTitle className={`text-xl ${text_color}`}>Name</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full rounded-md border border-rose-200 px-3 py-2 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${background_color}`}
                placeholder="Your name"
              />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor="email">
              <FieldTitle className={`text-xl  ${text_color}`}>Email</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full rounded-md border border-rose-200 px-3 py-2 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${background_color}`}
                placeholder="you@example.com"
              />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor="message">
              <FieldTitle className={`text-xl ${text_color}`}>Message</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="How can I help?"
                className={`border-rose-200 focus-visible:ring-rose-400 ${background_color}`}
              />
            </FieldContent>
          </Field>
        </FieldGroup>

        <Button type="submit" className={`mt-4 w-full ${button_color}`}>
          Send Email
        </Button>
      </FieldSet>
    </form>
  );
};

export default ContactForm;