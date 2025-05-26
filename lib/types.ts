import { z } from "zod";
import { checkoutFormSchema } from "./validations";

export type CheckoutForm = z.infer<typeof checkoutFormSchema>;
