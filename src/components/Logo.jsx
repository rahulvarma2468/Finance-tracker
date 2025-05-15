
import React from "react";
import { ChartPie } from "lucide-react";

const Logo  = () =>  {
  return (
    <div className="flex items-center justify-center gap-2">
      <ChartPie className="h-8 w-8 text-neutral" />
      <span className="font-bold text-3xl ">Finance Tracker</span>
    </div>
  );
}
 
export default Logo;
