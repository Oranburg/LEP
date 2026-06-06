// ============================================================================
// On-page export — Word / Markdown / Print
// Single source of truth: the page itself (the [data-export-content] region).
// Both downloads are generated client-side from that one rendered source, so
// there is no parallel hand-out file to drift out of sync.
// ============================================================================

(function () {
  var LETTERHEAD = "THE CATHOLIC UNIVERSITY OF AMERICA · COLUMBUS SCHOOL OF LAW";
  var FOOTER_LINES = [
    "Law and Entrepreneurship Program · Columbus School of Law · The Catholic University of America",
    "Alexander J. Hoffarth, Director · hoffarth@cua.edu  |  Seth C. Oranburg, Director (effective Aug 20, 2026)"
  ];

  function slugify(s) {
    return (s || "brief").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  function download(filename, mime, content) {
    var blob = new Blob([content], { type: mime });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  // ---- HTML -> Markdown (handles the tag set the briefs use) ----
  function inline(node) {
    var out = "";
    node.childNodes.forEach(function (n) {
      if (n.nodeType === 3) { out += n.textContent.replace(/\s+/g, " "); return; }
      if (n.nodeType !== 1) return;
      var tag = n.tagName.toLowerCase();
      if (tag === "strong" || tag === "b") out += "**" + inline(n).trim() + "**";
      else if (tag === "em" || tag === "i") out += "*" + inline(n).trim() + "*";
      else if (tag === "a") out += "[" + inline(n).trim() + "](" + n.getAttribute("href") + ")";
      else if (tag === "br") out += "\n";
      else out += inline(n);
    });
    return out;
  }

  function listToMd(node, ordered) {
    var md = "";
    var i = 1;
    node.querySelectorAll(":scope > li").forEach(function (li) {
      md += (ordered ? (i++) + ". " : "- ") + inline(li).trim() + "\n";
    });
    return md;
  }

  function tableToMd(table) {
    var rows = Array.prototype.slice.call(table.querySelectorAll("tr"));
    if (!rows.length) return "";
    var md = "";
    rows.forEach(function (tr, ri) {
      var cells = Array.prototype.slice.call(tr.children).map(function (c) {
        return inline(c).trim().replace(/\|/g, "\\|");
      });
      md += "| " + cells.join(" | ") + " |\n";
      if (ri === 0) md += "| " + cells.map(function () { return "---"; }).join(" | ") + " |\n";
    });
    return md + "\n";
  }

  function toMarkdown(root) {
    var md = "";
    root.childNodes.forEach(function (n) {
      if (n.nodeType !== 1) return;
      var tag = n.tagName.toLowerCase();
      if (tag === "h1") md += "# " + n.textContent.trim() + "\n\n";
      else if (tag === "h2") md += "## " + n.textContent.trim() + "\n\n";
      else if (tag === "h3") md += "### " + n.textContent.trim() + "\n\n";
      else if (tag === "p") md += inline(n).trim() + "\n\n";
      else if (tag === "ul") md += listToMd(n, false) + "\n";
      else if (tag === "ol") md += listToMd(n, true) + "\n";
      else if (tag === "table") md += tableToMd(n);
      else if (tag === "blockquote") md += "> " + inline(n).trim() + "\n\n";
      else md += toMarkdown(n);
    });
    return md;
  }

  function title(content) {
    var h1 = content.querySelector("h1");
    return h1 ? h1.textContent.trim() : (document.title || "brief");
  }

  function exportMarkdown(content) {
    var body = toMarkdown(content).replace(/\n{3,}/g, "\n\n").trim();
    var doc = body + "\n\n---\n\n" + FOOTER_LINES.join("  \n") + "\n";
    download(slugify(title(content)) + ".md", "text/markdown;charset=utf-8", doc);
  }

  function exportWord(content) {
    var head =
      '<meta charset="utf-8"><style>' +
      "body{font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.5;color:#111}" +
      "h1{font-size:20pt;color:#0A3255;margin:0 0 4pt}h2{font-size:14pt;color:#B21F2C;margin:16pt 0 4pt}" +
      "h3{font-size:12pt;color:#0A3255}table{border-collapse:collapse;width:100%}" +
      "th,td{border:1px solid #999;padding:4pt 6pt;text-align:left;vertical-align:top;font-size:10pt}" +
      "th{background:#f0e3e4}.lh{font-size:8pt;letter-spacing:1pt;color:#B21F2C;margin:0 0 12pt}" +
      ".ft{font-size:8pt;color:#666;border-top:1px solid #ccc;margin-top:24pt;padding-top:6pt}" +
      "</style>";
    var footer = '<p class="ft">' + FOOTER_LINES.join("<br>") + "</p>";
    var html =
      '<!DOCTYPE html><html><head>' + head + "</head><body>" +
      '<p class="lh">' + LETTERHEAD + "</p>" +
      content.innerHTML +
      footer +
      "</body></html>";
    download(slugify(title(content)) + ".doc", "application/msword", html);
  }

  function init() {
    var content = document.querySelector("[data-export-content]");
    var bar = document.querySelector(".export-bar");
    if (!content || !bar) return;
    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-export]");
      if (!btn) return;
      var kind = btn.getAttribute("data-export");
      if (kind === "word") exportWord(content);
      else if (kind === "md") exportMarkdown(content);
      else if (kind === "print") window.print();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
