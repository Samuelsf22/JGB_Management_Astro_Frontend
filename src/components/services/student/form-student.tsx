import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

function FormStudent() {
  const form = useForm<StudentType>({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = form.handleSubmit((values: StudentType) => {
    console.log(values);
  });

  return (
    <>
      <Card>
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <FormField
              name="first_name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the first name of the student
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="last_name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the last name of the student
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="dni"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DNI</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the DNI of the student
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="birth_date"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birth Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the birth date of the student
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="parent"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the parent of the student
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="address"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the address of the student
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </>
  );
}

export default FormStudent;
