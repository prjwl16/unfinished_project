import { useState } from "react";
import { ClipboardCheck } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Copy from "@/components/icons/copy";

const CodeSnippetWithCopy = () => {
  const codeString = `
  {
      "packages": [
          "python@3.10",
          "poetry@latest",
    ],
    "shell": {
          "init_hook": [
            "poetry install"
      ],
    },
    "scripts": {
          "start": "poetry run python -m main.py",
          "test": "poetry run pytest"
    },
  }
  `;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="relative rounded-2xl bg-tertiary-accent overflow-hidden">
      <div className="flex justify-between items-center bg-tertiary-accent px-4 py-2 text-gray-400">
        <span className="text-neutral">devbox-workflow.yml</span>
        <button onClick={handleCopy}>
          {copied ? (
            <>
              <ClipboardCheck size={16} />
            </>
          ) : (
            <>
              <Copy />
            </>
          )}
        </button>
      </div>

      <SyntaxHighlighter
        language="json"
        style={coldarkDark}
        customStyle={{
          padding: 0,
          margin: 0,
          borderRadius: "0 0 12px 12px",
          fontSize: "0.75rem",
          backgroundColor: "#272337",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippetWithCopy;
