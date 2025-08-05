import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import { Button } from "@ashgw/ui";

import type { SortOptions as SortOptionsType } from "./components/SortOptions";
import type { PostDetailRo } from "~/api/models/post";
import { useAuth } from "~/app/hooks/auth";
import { PreviewToggle } from "../preview/components/PreviewToggle";
import { ProfileButton } from "./components/ProfileButton";
import { SortOptions } from "./components/SortOptions";

interface HeaderProps {
  onClick: () => void;
  sortOptions: SortOptionsType;
  onSortOptionsChange: (options: SortOptionsType) => void;
  blogs: PostDetailRo[];
  isPreviewEnabled: boolean;
  onTogglePreview: () => void;
}

export function Header({
  onClick,
  sortOptions,
  onSortOptionsChange,
  blogs,
  isPreviewEnabled,
  onTogglePreview,
}: HeaderProps): JSX.Element {
  const { user } = useAuth();

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 flex items-center justify-between">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
        >
          Blog Editor
        </motion.h1>
        <div className="flex items-center gap-3">
          {user ? <ProfileButton /> : null}
          <PreviewToggle
            isPreviewEnabled={isPreviewEnabled}
            onToggle={onTogglePreview}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Button variant="squared:default" onClick={onClick}>
              <Plus className="mr-2 h-4 w-4" />
              New Blog
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <SortOptions
          options={sortOptions}
          onOptionsChange={onSortOptionsChange}
          blogs={blogs}
        />
      </motion.div>
    </motion.div>
  );
}
