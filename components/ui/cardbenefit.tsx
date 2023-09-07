import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { AiOutlineUnlock } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardB() {
  return (
    <>
      <div className="lg:grid lg:max-w-[100%] lg:grid-cols-9 lg:gap-20 lg:pt-40 lg:pb-20 md:p-8 pt-10">
        <div className="lg:col-start-1 lg:col-end-4 md:pb-10 md:text-left text-left shadow-xl">
          <Card>
            <CardHeader>
              <CiMoneyBill className="lg:text-2xl lg:mr-3" />
              <CardTitle>Reduced Startup Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="md:text-xl">
                Get your products to market quicker, and spend more time
                focusing on product research, selection, and marketing.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        {/*Cards section*/}
        <div className="lg:col-start-4 lg:col-end-7 md:pb-10 lg:pt-0 pt-20 shadow-xl">
          <Card>
            <CardHeader>
              <AiOutlineUnlock className="lg:text-3xl lg:mr-3" />
              <CardTitle>All in one package</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="md:text-xl">
                Our store templates come with a order management system, payment
                system, and store front. The ultimate all in one package for
                begineers.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-start-7 lg:col-end-10 md:pb-10 lg:pt-0 pt-20 shadow-xl">
          <Card>
            <CardHeader>
              <TbWorldWww className="lg:text-3xl lg:mr-3" />
              <CardTitle>Code free, no tech needed</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="md:text-xl pb-12">
                Ocomni, templates are great for low cost and ease of access. No
                coding, or design knowledge is required, setup all in one day!
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
