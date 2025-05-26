import { z } from "zod";

export const checkoutFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip code is required"),
  country: z.string().min(1, "Country is required"),
  cardNumber: z.string().min(1, "Card number is required"),
  cardExpiry: z.string().min(1, "Card expiry date is required"),
  cardCVC: z.string().min(1, "Card CVC is required"),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
  newsletter: z.boolean().optional(),
  giftWrap: z.boolean().optional(),
  couponCode: z.string().optional(),
  shippingMethod: z.enum(["standard", "express"]).optional(),
  paymentMethod: z.enum(["credit_card", "paypal"]).optional(),
  orderNotes: z.string().optional(),
  items: z
    .array(
      z.object({
        productId: z.string().min(1, "Product ID is required"),
        quantity: z.number().min(1, "Quantity must be at least 1"),
        price: z.number().min(0, "Price must be a positive number"),
        name: z.string().min(1, "Product name is required"),
        imageUrl: z.string().url("Invalid image URL").optional(),
        options: z
          .array(
            z.object({
              optionId: z.string().min(1, "Option ID is required"),
              value: z.string().min(1, "Option value is required"),
            })
          )
          .optional(),
      })
    )
    .min(1, "At least one item is required in the order"),
  totalAmount: z.number().min(0, "Total amount must be a positive number"),
  currency: z.string().min(1, "Currency is required"),
  orderId: z.string().optional(),
  customerId: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
