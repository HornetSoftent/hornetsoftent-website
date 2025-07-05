import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Legal({ title, content }) {
  return (
    <main className="legal">
      <h1>{title}</h1>
      <section className="container-legal">
        <article>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
