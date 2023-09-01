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
      <div className="grid max-w-[100%] grid-cols-8 gap-20 pt-52 pb-20 ">
        <div className="col-start-2 col-end-4">
          <Card>
            <CardHeader>
              <CiMoneyBill className="text-2xl mr-3" />
              <CardTitle>Reduced Startup Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get your products to market quicker, and spend more time
                focusing on product research, selection, and marketing.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        {/*Cards section*/}
        <div className="col-start-4 col-end-6">
          <Card>
            <CardHeader>
              <AiOutlineUnlock className="text-3xl mr-3" />
              <CardTitle>All in one package</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our store templates come with a order management system, payment
                system, and store front. The ultimate all in one package for
                begineers.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="col-start-6 col-end-8">
          <Card>
            <CardHeader>
              <TbWorldWww className="text-3xl mr-3" />
              <CardTitle>Code free, no tech needed</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
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
