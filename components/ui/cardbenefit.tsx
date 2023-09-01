import React from "react";

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
      <div className="flex">
        <div>
          <Card>
            <CardHeader>
              <img src="" alt="small icon here"></img>
            </CardHeader>
            <CardContent>Content Goes Here</CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <img src="" alt="small icon here"></img>
            </CardHeader>
            <CardContent>Content Goes Here</CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
