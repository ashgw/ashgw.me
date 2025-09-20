"use client";

import { observer } from "mobx-react-lite";
import { Toaster } from "sonner";

import { SoundProvider, SoundToggle } from "./components/sound";
import { EditorLayout } from "./components/layout";
import { useEditor } from "./hooks/useEditor";

export const EditorPage = observer(() => {
  const editor = useEditor();

  return (
    <SoundProvider>
      <EditorLayout editor={editor} />
      <SoundToggle />
      <Toaster position="bottom-right" />
    </SoundProvider>
  );
});
