import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const TASHA_URL = "https://vyperx-tasha.vercel.app/";

const TashaChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const preconnectLink = document.createElement("link");
    preconnectLink.rel = "preconnect";
    preconnectLink.href = TASHA_URL;
    preconnectLink.crossOrigin = "anonymous";

    const dnsPrefetchLink = document.createElement("link");
    dnsPrefetchLink.rel = "dns-prefetch";
    dnsPrefetchLink.href = TASHA_URL;

    document.head.appendChild(preconnectLink);
    document.head.appendChild(dnsPrefetchLink);

    return () => {
      document.head.removeChild(preconnectLink);
      document.head.removeChild(dnsPrefetchLink);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobile, isOpen]);

  const toggleWidget = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={
          isMobile
            ? `fixed inset-0 z-[80] overflow-hidden bg-card transition-all duration-300 ${
                isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              }`
            : `fixed bottom-24 right-5 z-[80] h-[70vh] w-[calc(100vw-2.5rem)] max-w-[390px] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300 sm:right-6 ${
                isOpen ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
              }`
        }
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <p className="font-display text-sm font-semibold text-foreground">Chat with Tasha</p>
          <button
            type="button"
            aria-label="Close Tasha chat"
            onClick={toggleWidget}
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <iframe
          src={TASHA_URL}
          title="Tasha Chatbot"
          className={isMobile ? "h-[calc(100%-53px)] w-full border-0 bg-background" : "h-[calc(70vh-53px)] w-full border-0 bg-background"}
          loading="eager"
          allow="microphone; clipboard-read; clipboard-write"
        />
      </div>

      <div className="fixed bottom-5 right-5 z-[70] sm:bottom-6 sm:right-6">
        <button
          type="button"
          aria-label={isOpen ? "Close Tasha chat" : "Open Tasha chat"}
          onClick={toggleWidget}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_hsl(166_76%_58%_/_0.45)] transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-bounce" />
          {isOpen ? <X className="relative h-6 w-6" /> : <MessageCircle className="relative h-6 w-6" />}
        </button>
      </div>
    </>
  );
};

export default TashaChatWidget;