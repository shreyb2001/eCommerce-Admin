import React from "react";
import Store from "../../../../models/storeModel";
import Heading from "../../../../components/ui/heading";
import { Separator } from "../../../../components/ui/separator";
import Overview from "../../../../components/overview";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { CreditCardIcon, IndianRupee, Package } from "lucide-react";
import { formatter } from "../../../../lib/utils";
import { getTotalRevenue } from "../../../../actions/get-total-revenue";
import { getSalesCount } from "../../../../actions/get-sales-count";
import { getStockCount } from "../../../../actions/get-stock-count";
import { getGraphRevenue } from "../../../../actions/get-graph-revenue";

const DashboardPage = async ({ params }) => {
  const totalRevenue = await getTotalRevenue(params.storeId);
  const salesCount = await getSalesCount(params.storeId);
  const stocksCount = await getStockCount(params.storeId);
  const graphRevenue = await getGraphRevenue(params.storeId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title={"Dashboard"} description={"Overview of your store"} />
        <Separator />
        <div className="grid gap-4 grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <IndianRupee className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatter.format(totalRevenue)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{stocksCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Products In Stock
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{salesCount}</div>
            </CardContent>
          </Card>
          <Card className="col-span-4">
            <CardTitle>
              <CardHeader>Overview</CardHeader>
            </CardTitle>
            <CardContent className="pl-2">
              <Overview data={graphRevenue} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
