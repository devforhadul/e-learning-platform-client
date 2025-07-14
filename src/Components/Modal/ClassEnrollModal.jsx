import React from "react";
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

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISH_KEY);

const ClassEnrollModal = ({ open, onOpenChange, classInfo,  }) => {
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

        <Elements stripe={stripePromise}>
          <PaymentCheckoutForm classInfo={classInfo}/>
        </Elements>

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
