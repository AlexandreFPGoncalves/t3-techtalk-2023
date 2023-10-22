import React from "react";
import { BlogTypography, Divider } from "@/components";

interface BlogProps {
  blogEntries: BlogPostProps[];
}
export interface BlogPostProps {
  title: string;
  subtitle?: string;
  description?: string;
  additionalContent?: React.ReactNode;
  divider?: boolean;
}

export const Blog: React.FC<BlogProps> = ({ blogEntries }) => {
  return (
    <div className="mb-10 flex flex-col gap-3 border-l border-l-darkblue">
      {blogEntries.map((post, i) => {
        return (
          <div key={i}>
            <div className="ml-10 flex max-w-2xl flex-col gap-3 py-3">
              <div className="flex flex-col gap-1">
                <div>
                  <h1 className={"text-3xl font-bold tracking-wide"}>
                    {post.title}
                  </h1>
                  {post.subtitle && (
                    <h1 className={"text-xl font-bold tracking-wide text-grey"}>
                      {post.subtitle}
                    </h1>
                  )}
                </div>

                {post.description && (
                  <BlogTypography.Text content={post.description} />
                )}
                {post.additionalContent && post.additionalContent}
              </div>
              {post.divider && <Divider />}
            </div>
          </div>
        );
      })}
    </div>
  );
};
