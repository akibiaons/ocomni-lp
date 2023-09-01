import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";
import { MdPhonelink } from "react-icons/md";
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
      <div className="grid max-w-[95%] grid-cols-8 gap-4">
        <div className="col-start-2 col-end-4">
          <Card>
            <CardHeader>
              <CiMoneyBill className="text-3xl mr-3" />
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
                Our easy to use templates come with a frontend interface that is
                simple and intuitive for your customers. Get a custom, site once
                you are comftorable setting up your products and are getting
                interest with your marketing efforts.
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
              <CardDescription>Some text here</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
