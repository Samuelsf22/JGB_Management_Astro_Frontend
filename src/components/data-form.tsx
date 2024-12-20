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

import { useForm, type DefaultValues } from "react-hook-form";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Row } from "@tanstack/react-table";
import type { Path } from "react-hook-form";

export type FormField<T> = {
  name: Path<T>;
  label: string;
  type: "text" | "number" | "date" | "select";
  description: string;
  options?: { value: string; label: string }[];
};

interface Props<TData, TSchema> {
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  row: Row<TData>;
  formFields: FormField<TSchema>[];
  schema: ZodSchema<TSchema>;
  defaultValues: DefaultValues<TSchema>;
  dialogTitle: string;
  dialogDescription: string;
}

function DataForm<TData, TSchema extends Record<string, any>>({
  setOpenEdit,
  row,
  formFields,
  schema,
  defaultValues,
  dialogTitle,
  dialogDescription,
}: Props<TData, TSchema>) {
  const form = useForm<TSchema>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = form.handleSubmit((values: TSchema) => {
    console.log(values);
    setOpenEdit(false);
  });

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogDescription>{dialogDescription}</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={onSubmit}>
          {formFields.map((field) => (
            <FormField
              key={String(field.name)}
              name={field.name}
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

export default DataForm;