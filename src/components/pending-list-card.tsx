"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton"; // Import the Skeleton component

type Status = "pending" | "approved" | "rejected";

export interface PendingItem {
  name: string;
  registeredDate: string;
  status: Status;
}

interface PendingListCardProps {
  title: string;
  items: PendingItem[];
  isLoading?: boolean; // Add isLoading prop
}

export function PendingListCard({
  title,
  items: initialItems,
  isLoading = false, // Default to false
}: PendingListCardProps) {
  const [items, setItems] = useState<PendingItem[]>(initialItems);
  const { t } = useTranslation("dashboard");

  const handleStatusChange = (index: number, newStatus: Status) => {
    const updatedItems = [...items];
    updatedItems[index].status = newStatus;
    setItems(updatedItems);
  };

  const getButtonVariant = (status: Status) => {
    switch (status) {
      case "approved":
        return "default";
      case "rejected":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getButtonText = (status: Status) => {
    switch (status) {
      case "approved":
        return "Approved";
      case "rejected":
        return "Rejected";
      default:
        return "Review";
    }
  };

  // Skeleton loading state
  if (isLoading) {
    return (
      <Card className="border-border">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-[200px]" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-3 w-[200px]" />
              </div>
              <Skeleton className="h-9 w-20" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border rounded-lg"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">
                {t("registered")}: {item.registeredDate}
              </p>
            </div>

            {item.status === "pending" ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    {t("review")}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    className="text-green-600 focus:text-green-600"
                    onClick={() => handleStatusChange(index, "approved")}
                  >
                    {t("approve")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600 focus:text-red-600"
                    onClick={() => handleStatusChange(index, "rejected")}
                  >
                    {t("reject")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant={getButtonVariant(item.status)}
                size="sm"
                disabled
              >
                {getButtonText(item.status)}
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}