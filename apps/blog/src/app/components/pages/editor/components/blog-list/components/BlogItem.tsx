import { memo } from "react";
import { motion } from "framer-motion";

import { Button } from "@ashgw/ui";

import type { PostDetailRo } from "~/api/models/post";

interface BlogItemProps {
  blog: PostDetailRo;
  index: number;
  onEdit: (blog: PostDetailRo) => void;
  onDelete: (blog: PostDetailRo) => void;
  shouldReduceMotion: boolean;
}

export const BlogItem = memo(
  ({ blog, index, onEdit, onDelete, shouldReduceMotion }: BlogItemProps) => {
    const initialAnimation = shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, x: -30 };

    const animateAnimation = shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 1, x: 0 };

    return (
      <motion.div
        key={blog.slug}
        initial={initialAnimation}
        animate={animateAnimation}
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.4,
          delay: shouldReduceMotion ? 0 : index * 0.05,
          type: shouldReduceMotion ? "tween" : "spring",
          stiffness: shouldReduceMotion ? undefined : 100,
        }}
        className="rounded-md border-b p-3 pb-4 last:border-0 last:pb-0"
      >
        <h3 className="font-medium">{blog.title}</h3>
        <div className="text-muted-foreground mb-2 flex text-xs">
          <span className="mr-2">{blog.isReleased ? "Released" : "Draft"}</span>
          <span>{new Date(blog.lastModDate).toLocaleDateString()}</span>
        </div>
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0.1 : 0.3,
            delay: shouldReduceMotion ? 0 : 0.1 + index * 0.05,
          }}
        >
          <Button
            variant="squared:outline"
            size="sm"
            onClick={() => onEdit(blog)}
          >
            Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(blog)}
          >
            Delete
          </Button>
        </motion.div>
      </motion.div>
    );
  },
);

BlogItem.displayName = "BlogItem";
