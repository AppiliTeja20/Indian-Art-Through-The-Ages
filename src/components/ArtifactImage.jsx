import { useState } from "react";
import { ImageOff } from "lucide-react";

/**
 * Renders an artifact image with multi-stage fallback:
 *   1. Primary src (Special:FilePath Wikimedia URL)
 *   2. Wikimedia REST API thumbnail (alternative endpoint)
 *   3. Styled placeholder with artifact name
 */
function getWikimediaRestUrl(specialFilepathUrl) {
  try {
    // Extract the encoded file name from Special:FilePath URL
    const match = specialFilepathUrl.match(/Special:FilePath\/([^?]+)/);
    if (!match) return null;
    const fileName = decodeURIComponent(match[1]);
    // Wikimedia REST API: /api/rest_v1/page/summary/{title}
    // For images, use the action=query imgurl approach via thumb
    const encoded = encodeURIComponent(fileName.replace(/ /g, "_"));
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encoded}?width=800`;
  } catch {
    return null;
  }
}

export default function ArtifactImage({ src, alt, className = "", imgClassName = "" }) {
  const [stage, setStage] = useState(0); // 0 = primary, 1 = alt, 2 = failed

  const altUrl = stage === 1 ? getWikimediaRestUrl(src) : null;
  const failed = stage >= 2 || (stage === 1 && !altUrl);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-bronze/30 via-ivory2 to-gold/20 text-charcoal/50 ${className}`}
      >
        <ImageOff size={28} strokeWidth={1.5} />
        <span className="font-sans text-[11px] uppercase tracking-widest px-4 text-center">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-ivory2 ${className}`}>
      <img
        src={stage === 0 ? src : altUrl}
        alt={alt}
        loading="lazy"
        onError={() => setStage((s) => s + 1)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

