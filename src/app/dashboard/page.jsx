"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import SearchBar from "./_components/Searchbar";
import Sidebar from "./_components/Sidebar";
import TemplateHeader from "./_components/TemplateHeader";
import TemplateListSection from "./_components/TemplateListSection";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Page = () => {
  const [searchTemplate, setSearchTemplate] = useState("");

  return (
    <div>
      <div className="fixed">
        <Sheet>
          <SheetTrigger>
            <Menu size={30} className="m-5 text-white" />
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader>
              <SheetDescription className="mt-8">
                <Sidebar />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div>
        <div>
          <TemplateHeader />
        </div>

        <div>
          <SearchBar setSearchTemplate={setSearchTemplate} />
        </div>

        <div>
          <TemplateListSection searchTemplate={searchTemplate} />
        </div>

        {/* footer */}
        <div className="mt-10">
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              <p>© {new Date().getFullYear()} AIDeaLab. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Page;
