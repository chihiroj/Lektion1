import { Text, Heading, Field, Input, Textarea, Checkbox, Button, Fieldset, Center } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { useColorChange } from "@/useColorChange";

/**
 * Displays a form for writing an article,
 * saves the submitted data to localStorage,
 * and shows a toast notification on success.
 */
export default function AddArticlePage() {
  const color = useColorChange((s) => s.color);

  /**
   *  Prevents default page reload
   * - Collects form data and adds a random id
   * - Stores the article in localStorage
   * - Resets the form and shows a success toast
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const article = Object.fromEntries(formData.entries());
    article.id = Math.random().toString(36).substr(2, 9);

    const stored = JSON.parse(localStorage.getItem("articles") || "[]");
    stored.push(article);

    localStorage.setItem("articles", JSON.stringify(stored));

    e.target.reset();

    toaster.create({
      title: `Article published`,
      type: "success",
    });
  };

  return (
    <Center>
      <Fieldset.Root size="lg" maxW="md">
        <form onSubmit={handleSubmit}>
          <Heading ml="16" size="3xl" mb="4">Write your article</Heading>
          <Text mb="4">Fill out the form below and click "submit" to publish your own column on Insight Daily.</Text>
          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input name="name" required />
            </Field.Root>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input name="email" type="email" required />
            </Field.Root>
            <Field.Root>
              <Field.Label>Title</Field.Label>
              <Input name="title" required />
            </Field.Root>
            <Field.Root>
              <Field.Label>ImageURL</Field.Label>
              <Input name="imageUrl" type="url" required />
            </Field.Root>
            <Field.Root>
              <Field.Label>Contents</Field.Label>
              <Textarea name="body" required />
            </Field.Root>
            <Checkbox.Root name="acceptedPolicy" value="true">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Privacy & Policy</Checkbox.Label>
            </Checkbox.Root >
          </Fieldset.Content>
          <Button backgroundColor={color} mt="4" type="submit" maxW="20" size="sm">Submit</Button>
        </form>
      </Fieldset.Root>


    </Center>
  );
}
