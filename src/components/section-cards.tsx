"use client";

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton component

export function SectionCards({ isLoading = false }: { isLoading?: boolean }) {
  const { t } = useTranslation("dashboard");
  const coreMetrics = [
    {
      title: t("submissions"),
      quantity: 8,
      growth: true,
      percentage: "10%",
      description: t("submissionsDescription"),
      achievement: t("submissionsAchievement"),
    },
    {
      title: t("totalUser"),
      quantity: 150,
      growth: true,
      percentage: "15%",
      description: t("totalUserDescription"),
      achievement: t("totalUserAchievement"),
    },
    {
      title: t("activePosts"),
      quantity: 24,
      growth: true,
      percentage: "10%",
      description: t("activePostsDescription"),
      achievement: t("activePostsAchievement"),
    },
    {
      title: t("reportedContent"),
      quantity: 2,
      growth: false,
      percentage: "10%",
      description: t("reportedContentDescription"),
      achievement: t("reportedContentAchievement"),
    },
  ];

  if (isLoading) {
    return (
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="@container/card">
            <CardHeader>
              <Skeleton className="h-4 w-[100px]" /> {/* Title */}
              <Skeleton className="h-8 w-[50px] mt-2 @[250px]/card:h-10" />{" "}
              {/* Quantity */}
              <CardAction>
                <Skeleton className="h-6 w-[60px]" /> {/* Badge */}
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <Skeleton className="h-4 w-[200px]" /> {/* Description */}
              <Skeleton className="h-3 w-[150px] mt-2" /> {/* Achievement */}
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {coreMetrics.map((c, i) => (
        <Card key={i} className="@container/card">
          <CardHeader>
            <CardDescription>{c.title}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {c.quantity}
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <>
                  {c.growth ? (
                    <>{<IconTrendingUp />} +</>
                  ) : (
                    <>{<IconTrendingDown />} -</>
                  )}
                </>{" "}
                {c.percentage}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {c.description}
            </div>
            <div className="text-muted-foreground">{c.achievement}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
