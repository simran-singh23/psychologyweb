import { readFile } from "node:fs/promises";
import { join } from "node:path";

const source = join(process.cwd(), "stitch-templates", "study_notes_library_mindcura", "code.html");
const logo = "https://lh3.googleusercontent.com/aida/AEtjO1V83XywSKW3XWfPyugFrBcg4KKunKs1OZtVmKTk8VujGhoWEdYMEIPwmkCetP75YwACdnOfOCHEMhc9zPUnMc39QebIYhONVTj5SUnZtGEG0gaJ3aUSOMPv8M2bSxS9F2rbV8XjSQu8Iyj6tLcIUUykhGxpNYQPxWxjG2jammkkUyCqql4jPxOrIbzRJa3dQ8419usQCsCXWQBKFxIOu-7LdmmFQfEcsW0Kd3OL2yhGivJeIj9KX1Fx5haZ";

export default async function Notes() {
  let html = await readFile(source, "utf8");
  html = html.replaceAll(logo, "/mindscribe-logo.png").replace("</head>", `<style>header nav [data-path="our-psychologists"],header nav [data-path="book-consultation"],header > div > div:last-child > a[data-path="our-psychologists"]{display:none!important}</style></head>`).replace("</body>", `<script>const routes={home:'/', 'counseling-services':'/services', 'our-psychologists':'/psychologists', 'study-notes-and-library':'/notes', 'book-consultation':'/contact'};document.querySelectorAll('[data-path="counseling-services"]').forEach(a=>{if(a.closest('header')||a.closest('footer'))a.textContent='Services'});document.querySelectorAll('footer [data-path="our-psychologists"],footer [data-path="book-consultation"]').forEach(a=>a.closest('li')?.remove());document.addEventListener('click',e=>{const a=e.target.closest('[data-path]');if(a&&routes[a.dataset.path]){e.preventDefault();window.top.location.href=routes[a.dataset.path]}});</script></body>`);
  return <iframe className="stitch-frame" srcDoc={html} title="MindScribe Study Notes & Library" />;
}
