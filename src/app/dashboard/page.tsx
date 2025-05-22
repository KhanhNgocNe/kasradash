"use client";
import { SectionCards } from "@/components/section-cards";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react"; // Thêm imports

import ReportedPosts from "@/components/reported-posts";
import { PendingItem, PendingListCard } from "@/components/pending-list-card";
import data from "@/app/mock/data.json";

export default function DashboardPage() {
  const { t } = useTranslation("dashboard");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards isLoading={isLoading} />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 px-6">
            <PendingListCard
              title={t("pendingSupplier")}
              items={data.pendingSuppliers as PendingItem[]}
              isLoading={isLoading}
            />
            <PendingListCard
              title={t("pendingEvent")}
              items={data.pendingEvents as PendingItem[]}
              isLoading={isLoading}
            />
          </div>
          <ReportedPosts isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
