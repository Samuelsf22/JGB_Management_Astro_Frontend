import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Row } from "@tanstack/react-table";

const studentSchema = z.object({
  first_name: z
    .string()
    .min(3, { message: "First name be at least 3 characters" }),
  last_name: z
    .string()
    .min(3, { message: "Last name be at least 3 characters" }),
  dni: z
    .string({ required_error: "DNI is required" })
    .regex(/^\d{8}$/, { message: "DNI must be 8 digits" })
    .transform((val) => parseInt(val)),
  birth_date: z.string(),
  parent: z.string().nonempty(),
  address: z.string().optional(),
});

type StudentType = z.infer<typeof studentSchema>;

interface Props<TData> {
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  row: Row<TData>;
}

function FormStudent<TData>({ setOpenEdit, row }: Props<TData>) {
  const form = useForm<StudentType>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      first_name: row.getValue("first_name"),
      last_name: row.getValue("last_name"),
      dni: row.getValue("dni"),
      birth_date: row.getValue("birth_date"),
      parent: row.getValue("parent_details"),
      address: row.getValue("address"),
    },
  });

  type FormField = {
    name: string;
    label: string;
    type: string;
    description: string;
    options?: { value: string; label: string }[];
  };

  const formFields: FormField[] = [
    {
      name: "first_name",
      label: "First Name",
      type: "text",
      description: "Enter the first name",
    },
    {
      name: "last_name",
      label: "Last Name",
      type: "text",
      description: "Enter the last name",
    },
    {
      name: "dni",
      label: "DNI",
      type: "text",
      description: "Enter the DNI",
    },
    {
      name: "birth_date",
      label: "Birth Date",
      type: "date",
      description: "Enter the birth date",
    },
    {
      name: "parent",
      label: "Parent",
      type: "text",
      description: "Enter the parent of the student",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      description: "Enter the address",
    },
  ];

  const onSubmit = form.handleSubmit((values: StudentType) => {
    console.log(values);
    setOpenEdit(false);
  });

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={onSubmit}>
          {formFields.map((field) => (
            <FormField
              key={field.name}
              name={field.name as keyof StudentType}
              control={form.control}
              render={({ field: fieldProps }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    {field.type === "select" ? (
                      <Select
                        onValueChange={fieldProps.onChange}
                        defaultValue={String(fieldProps.value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input type={field.type} {...fieldProps} />
                    )}
                  </FormControl>
                  {field.description && (
                    <FormDescription>{field.description}</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Close
              </Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}

export default FormStudent;
