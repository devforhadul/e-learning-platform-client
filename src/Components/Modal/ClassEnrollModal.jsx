import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentCheckoutForm from "../Form/PaymentCheckoutForm";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import toast from "react-hot-toast";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISH_KEY);

const ClassEnrollModal = ({ open, onOpenChange, classInfo }) => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  console.log(paymentMethod);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Payment Now</DialogTitle>
          <DialogDescription>
            Make Payment to your Class here. Click Pay when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        {/* MAin content */}
        {/* Payment Method */}
        <RadioGroup
          defaultValue="stripe"
          onValueChange={(value) => setPaymentMethod(value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="stripe" id="option-one" />
            <Label htmlFor="option-one">Stripe</Label>
            <RadioGroupItem value="sslcommerz" id="option-two" />
            <Label htmlFor="option-two">SSLCOMMERZ</Label>
          </div>
        </RadioGroup>

        {/* Stripe payment */}
        {paymentMethod === "stripe" && (
          <Elements stripe={stripePromise}>
            <PaymentCheckoutForm classInfo={classInfo} />
          </Elements>
        )}

        {/* sslcommerz */}
        {paymentMethod === "sslcommerz" && (
          <Button type="submit" onClick={()=>toast.error("Use another Payment method now...")} className={"cursor-pointer"}>
            Pay SSLCOMMERZ ${classInfo?.price}
          </Button>
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          {/* <Button type="submit">Pay </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ClassEnrollModal;
