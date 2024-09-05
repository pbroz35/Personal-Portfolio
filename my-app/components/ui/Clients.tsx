import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-0" id="testimonials">
      <h1 className="heading">
        Kind remarks from <span className="text-purple">colleagues</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="pt-5"
        />

    
      </div>
    </div>
  );
};

export default Clients;
