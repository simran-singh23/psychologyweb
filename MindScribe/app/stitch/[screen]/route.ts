import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(process.cwd(), "stitch-templates");
const folders: Record<string, string[]> = {
  home_mindcura_psychology: ["home_mindcura_psychology", "code.html"],
  counseling_services_mindcura: ["counseling_services_mindcura", "code.html"],
  our_psychologists_mindcura: ["our_psychologists_mindcura", "code.html"],
  study_notes_library_mindcura: ["study_notes_library_mindcura", "code.html"],
  book_consultation_mindcura: ["book_consultation_mindcura", "code.html"],
};
const stitchLogo = "https://lh3.googleusercontent.com/aida/AEtjO1V83XywSKW3XWfPyugFrBcg4KKunKs1OZtVmKTk8VujGhoWEdYMEIPwmkCetP75YwACdnOfOCHEMhc9zPUnMc39QebIYhONVTj5SUnZtGEG0gaJ3aUSOMPv8M2bSxS9F2rbV8XjSQu8Iyj6tLcIUUykhGxpNYQPxWxjG2jammkkUyCqql4jPxOrIbzRJa3dQ8419usQCsCXWQBKFxIOu-7LdmmFQfEcsW0Kd3OL2yhGivJeIj9KX1Fx5haZ";

export async function GET(_: Request, { params }: { params: Promise<{ screen: string }> }) {
  const { screen } = await params;
  const parts = folders[screen];
  if (!parts) return new Response("Not found", { status: 404 });
  let html = await readFile(join(root, ...parts), "utf8");
  html = html.replaceAll(stitchLogo, "/mindscribe-logo.png");
  html = html.replace("</head>", `<style>
    header nav [data-path="our-psychologists"], header nav [data-path="book-consultation"], header > div > div:last-child > a[data-path="our-psychologists"]{display:none!important}
  </style></head>`);
  html = html.replace("</body>", `<script>
    const routes={home:'/', 'counseling-services':'/services', 'our-psychologists':'/psychologists', 'study-notes-and-library':'/notes', 'book-consultation':'/contact'};
    document.querySelectorAll('[data-path="counseling-services"]').forEach(a=>{if(a.closest('header')||a.closest('footer'))a.textContent='Services'});
    document.querySelectorAll('footer [data-path="our-psychologists"],footer [data-path="book-consultation"]').forEach(a=>a.closest('li')?.remove());
    document.querySelectorAll('span').forEach(el=>{if(el.textContent.trim()==='Sessions Conducted')el.closest('.mt-space-3xl')?.remove()});
    document.addEventListener('click',e=>{const a=e.target.closest('[data-path]');if(a&&routes[a.dataset.path]){e.preventDefault();window.top.location.href=routes[a.dataset.path]}});
  </script></body>`);
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
