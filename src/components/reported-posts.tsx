"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import data from "@/app/mock/data.json";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton component

type Post = {
  title: string;
  content: string;
  date: string;
};

export default function ReportedPosts({
  isLoading = false,
}: {
  isLoading?: boolean;
}) {
  const { t } = useTranslation("dashboard");
  const [selectedPost, setSelectedPost] = useState<Post>({
    title: "",
    content: "",
    date: "",
  });

  if (isLoading) {
    return (
      <div className="px-6">
        <Card className="border-border w-full">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-[200px]" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg flex-1"
                >
                  <div className="space-y-2 w-full">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                  <Skeleton className="h-9 w-16" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="px-6">
      <Card className="border-border w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {t("reportedPosts")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {data.reportPost.map((post, index) => (
              <Dialog key={index}>
                <div className="flex items-center justify-between p-3 border rounded-lg flex-1">
                  <div>
                    <p className="font-medium">{post.title}</p>
                    <p className="w-full text-sm truncate max-w-[180px] sm:max-w-[200px] sm:max-w-[380px] lg:max-w-[300px]">
                      {post.content}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("registered")}: {post.date}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedPost(post)}
                      >
                        {t("view")}
                      </Button>
                    </DialogTrigger>
                  </div>
                </div>

                {selectedPost && selectedPost.title === post.title && (
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{selectedPost.title}</DialogTitle>
                      <DialogDescription>{selectedPost.date}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <p>{selectedPost.content}</p>
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}